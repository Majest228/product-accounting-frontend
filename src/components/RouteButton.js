import React from 'react';
import { useHistory } from 'react-router-dom';
import { noop } from '../constants/utils';

const RouteButton = ({
  children,
  to,
  back = false,
  component: Component,
  onClick = noop,
  ...props
}) => {
  const history = useHistory();

  const handleClick = (event) => {
    if (back) {
      history.goBack();
    } else {
      history.push(to);
    }

    onClick(event);
  };

  return (
    <Component {...props} onClick={handleClick}>
      {children}
    </Component>
  );
};

export default RouteButton;
