import React, { ForwardedRef } from 'react';
import Button from 'react-bootstrap/Button';
import DropdownIcon from '../assets/icons/CarretDown.icon';

interface CustomToggleProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent) => void;
}

const CustomToggle = React.forwardRef(
  (
    { children, onClick }: CustomToggleProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => (
    <Button
      variant=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children} <DropdownIcon />
    </Button>
  ),
);

export default CustomToggle;
