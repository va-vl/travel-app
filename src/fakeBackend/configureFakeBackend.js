// fake backend inspired by
// https://jasonwatmore.com/post/2017/09/16/react-redux-user-registration-and-login-tutorial-example
import { getLocalStorageItem } from '../utils/localStorage';
import * as fakeData from './fakeData/index';
import * as fakeAssets from './fakeAssets/index';

const FAKE_TIMEOUT = 1500;
const users = getLocalStorageItem('users', []);

function configureFakeBackend() {
  const realFetch = window.fetch;

  window.fetch = (url, opts) => new Promise((resolve, reject) => {
    // wrap in timeout to simulate server api call
    setTimeout(() => {
      // authenticate
      if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
        // get parameters from post request
        const params = JSON.parse(opts.body);

        // find if any user matches login credentials
        const filteredUsers = users.filter((user) => user.username === params.username
          && user.password === params.password);

        if (filteredUsers.length) {
          // if login details are valid return user details and fake jwt token
          const user = filteredUsers[0];
          const responseJson = {
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: 'fake-jwt-token',
          };
          resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
        } else {
          // else return error
          reject(new Error('Username or password is incorrect'));
        }

        return;
      }

      // TODO
      // get users who gave a rating
      if (url.endsWith('/users') && opts.method === 'GET') {
        // check for fake auth token in header and return users if valid,
        // this security is implemented server side in a real application
        if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
          resolve({
            ok: true,
            text: () => Promise.resolve(JSON.stringify(users)),
          });
        } else {
          // return 401 not authorised if token is null or invalid
          reject(new Error('Unauthorized'));
        }

        return;
      }

      // register user
      if (url.endsWith('/users/register') && opts.method === 'POST') {
        // get new user object from post body
        const newUser = JSON.parse(opts.body);

        // validation
        const duplicateUserIndex = users.findIndex((user) => user.username === newUser.username);
        if (duplicateUserIndex !== -1) {
          reject(new Error(`Username "${newUser.username}" is already taken`));
          return;
        }

        // save new user
        newUser.id = users.length ? Math.max(...users.map((user) => user.id)) + 1 : 1;
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // respond 200 OK
        resolve({
          ok: true,
          text: () => Promise.resolve(),
        });

        return;
      }

      // get country info (no sights)
      if (url.match(/\/countryInfoId=\w+$/) && opts.method === 'GET') {
        const id = url.split('=').pop();

        const { 'Accept-Language': language } = opts.headers;
        const data = fakeData[language].find((obj) => obj.id === id);

        if (data) {
          const {
            name,
            capital,
            description,
          } = data;

          const { [id]: { country } } = fakeAssets;

          resolve({
            ok: true,
            text: () => Promise.resolve(JSON.stringify({
              name, capital, description, image: country,
            })),
          });
        } else {
          const err = new Error('No such country in the database!');
          err.status = 404;
          reject(err);
        }

        return;
      }

      // get country sights
      if (url.match(/\/countrySightsId=\w+$/) && opts.method === 'GET') {
        const id = url.split('=').pop();

        const { 'Accept-Language': language } = opts.headers;
        const data = fakeData[language].find((obj) => obj.id === id);

        if (data) {
          const { sights: sightsText } = data;
          const { [id]: { sights: sightsImages } } = fakeAssets;
          const sights = sightsText.map((obj) => ({ ...obj, image: sightsImages[obj.id] }));

          console.log(sights);

          resolve({
            ok: true,
            text: () => Promise.resolve(JSON.stringify({ sights })),
          });
        } else {
          const err = new Error('No sights in the database!');
          err.status = 404;
          reject(err);
        }

        return;
      }

      // get country summaries
      if (url.endsWith('/summaries') && opts.method === 'GET') {
        const { 'Accept-Language': language } = opts.headers;

        const data = fakeData[language].map(({
          name, capital, id,
        }) => ({
          name, capital, id, card: fakeAssets[id].card,
        }));

        if (data) {
          resolve({
            ok: true,
            text: () => Promise.resolve(JSON.stringify(data)),
          });
        } else {
          const err = new Error('Failed to fetch countries!');
          err.status = 404;
          reject(err);
        }

        return;
      }

      // pass through any requests not handled above
      realFetch(url, opts).then((response) => resolve(response));
    }, FAKE_TIMEOUT);
  });
}

export default configureFakeBackend;
