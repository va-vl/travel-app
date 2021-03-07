// implementation based on
// https://github.com/kenneth1003/react-render-ctrl

import * as React from 'react';

const withRenderControl = (Component, {
  DefaultComponent = null,
  LoadingComponent = null,
  ErrorComponent = null,
}) => function RenderControl({
  isLoading = false,
  isError = false,
  isReady = false,
  errorComponentProps = {},
  loadingComponentProps = {},
  ...propsToPass
}) {
  if (isError) {
    return React.createElement(ErrorComponent, errorComponentProps);
  }

  if (isReady) {
    return React.createElement(Component, propsToPass);
  }

  if (isLoading) {
    return React.createElement(LoadingComponent, loadingComponentProps);
  }

  return DefaultComponent;
};

export default withRenderControl;
