// implementation based on
// https://github.com/kenneth1003/react-render-ctrl

/* eslint-disable react/prop-types */
import * as React from 'react';

const NullComponent = () => null;

const withRenderControl = (Component, {
  DefaultComponent = NullComponent,
  LoadingComponent = NullComponent,
  ErrorComponent = NullComponent,
} = {}) => function RenderControl({
  isLoading = false,
  isError = false,
  isReady = false,
  errorComponentProps = {},
  loadingComponentProps = {},
  canBeUpdated = false,
  ...propsToPass
}) {
  if (isError) {
    return React.createElement(ErrorComponent, errorComponentProps);
  }

  if (isReady || (isLoading && canBeUpdated)) {
    return React.createElement(Component, propsToPass);
  }

  if (isLoading) {
    return React.createElement(LoadingComponent, loadingComponentProps);
  }

  return <DefaultComponent />;
};

export default withRenderControl;
