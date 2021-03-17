// attribution
// https://bezkoder.com/material-ui-image-upload/

import * as React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const ImageUploadInput = ({ buttonLabel }) => {
  const [currentFile, setCurrentFile] = React.useState(null);
  const [previewImage, setPreviewImage] = React.useState(null);

  const selectFile = (event) => {
    const img = event.target.files[0];
    setCurrentFile(img);
    setPreviewImage(URL.createObjectURL(img));
  };

  const clearCurrentFile = () => {
    setCurrentFile(null);
    setPreviewImage(null);
  };

  return (
    <div style={{
      display: 'flex',
    }}
    >
      <label htmlFor="raised-button-file">
        <input
          onClick={clearCurrentFile}
          onChange={selectFile}
          accept="image/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          type="file"
          name="avatar"
        />
        <Button variant="contained" color="primary" component="span">
          {buttonLabel}
        </Button>
        {currentFile && <p>{currentFile.name}</p>}
        {previewImage && (
          <div>
            <img
              src={previewImage}
              alt="preview"
              style={{
                height: '5rem',
              }}
            />
          </div>
        )}
      </label>
    </div>
  );
};

ImageUploadInput.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

export default ImageUploadInput;
