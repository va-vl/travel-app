export const flexColumn = (marginBottom) => {
  const res = {
    display: 'flex',
    flexDirection: 'column',
  };

  if (marginBottom) {
    res.marginBottom = marginBottom;
  }

  return res;
};

export const align = (sideOfPage) => {
  let position = null;
  let padding = null;

  if (sideOfPage === 'right') {
    position = 'flex-end';
    padding = 'paddingLeft';
  } else if (sideOfPage === 'left') {
    position = 'flex-start';
    padding = 'paddingRight';
  } else {
    throw new Error('');
  }

  return ({
    alignSelf: position,
    textAlign: sideOfPage,
    [padding]: '6rem',
  });
};
