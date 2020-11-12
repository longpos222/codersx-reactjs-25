import React, { useState } from "react";
import PropTypes from 'prop-types';
import './SearchBar.css';
 
export const SearchBar = ({className, placeholder, onPressEnter,  ...props}) => {
    return (
    <div>
      <input
        type="text" 
        name="q"
        className={className}
        placeholder={placeholder}
        onPressEnter={onPressEnter}
        style={{ width: 200 }}
        {...props}
      />
    </div>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string, 
  onPressEnter: PropTypes.func, 
}

SearchBar.defaultProps = {
  className: "ant-input",
  placeholder: "input search text", 
  onPressEnter: undefined, 
}