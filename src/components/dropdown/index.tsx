import React, { FC } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
// import '../../styles/DropDownButton.css';
import CustomToggle from './CustomToggle';

interface Props {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

const DropDownButton: FC<Props> = ({ options, selectedOption, onSelect }) => {
  return (
    <Dropdown
      style={{
        backgroundColor: 'transparent',
        fontSize: '16px',
        fontWeight: 'normal',
      }}
    >
      <Dropdown.Toggle
        style={{ marginLeft: 10 }}
        size="sm"
        variant=""
        id="showAllDropdown"
        className="dropdown-button"
        as={CustomToggle}
      >
        {selectedOption}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item
            key={index}
            active={option === selectedOption}
            onClick={() => onSelect(option)}
          >
            {option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownButton;
