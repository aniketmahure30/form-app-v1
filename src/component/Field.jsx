import React from 'react';

// Field component to handle individual input fields
const Field = ({ childern, name, values, errors, touched, handleChange, handleBlur, ...props }) => {
  return (
    <div>
      <input
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
      {/* Display error if the field has been touched and has an error */}
      {touched[name] && errors[name] && <span style={{ color: 'red' }}>{errors[name]}</span>}
    </div>
  );
};

export default Field;
