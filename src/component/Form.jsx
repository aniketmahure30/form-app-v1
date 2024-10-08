// import React, { useState } from "react";

// const Form = ({ initialValues, validate, onSubmit, children }) => {
//   const [values, setValues] = useState(initialValues); // Form values
//   const [errors, setErrors] = useState({}); // Validation errors
//   const [touched, setTouched] = useState({}); // Tracks if fields have been touched

//   // Handle changes in input fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value,
//     });
//   };

//   // Handle blur event (mark field as touched)
//   const handleBlur = (e) => {
//     const { name } = e.target;
//     setTouched({
//       ...touched,
//       [name]: true,
//     });

//     // Run validation for the field on blur
//     const validationErrors = validate(values);
//     setErrors(validationErrors);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate form before submission
//     const validationErrors = validate(values);
//     setErrors(validationErrors);

//     // If no errors, submit the form
//     if (Object.keys(validationErrors).length === 0) {
//       onSubmit(values);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {React.Children.map(children, (child) => {
//         // Pass form state and handlers to child components (Fields)
//         if (React.isValidElement(child)) {
//           return React.cloneElement(child, {
//             values,
//             errors,
//             touched,
//             handleChange,
//             handleBlur,
//           });
//         }
//         return child;
//       })}
//     </form>
//   );
// };

// export default Form;

import React, { useState } from "react";

const Form = ({ initialValues, validate, onSubmit, children }) => {
  const [values, setValues] = useState(initialValues); // Form values
  const [errors, setErrors] = useState({}); // Validation errors
  const [touched, setTouched] = useState({}); // Tracks if fields have been touched

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    setValues({
      ...values,
      [name]: value || checked,
    });
  };

  console.log("qqqqqqqqqqq", values);

  let setFieldValue = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  let setFieldError = (name, value) => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    // setValues({
    //   ...values,
    //   [name]: value
    // });
  };

  // Handle blur event (mark field as touched)
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    // Run validation for the field on blur
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submission
    const validationErrors = validate(values);
    setErrors(validationErrors);

    // If no errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(values);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {children({
        values,
        setFieldValue,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldError
      })}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
