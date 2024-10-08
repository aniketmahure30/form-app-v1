import React from "react";
import Form from "./component/Form";
import Field from "./component/Field";
import { createValidationRule } from "./component/validationUtils";

// const validateForm = (values) => {
//   let errors = {};
//   console.log("🚀 ~ validateForm ~ values:", values);
//   if (!values.name) {
//     errors.name = "Name is required";
//   }
//   if (!values.email) {
//     errors.email = "Email is required";
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   console.log("🚀 ~ validateForm ~ errors:", errors);
//   return errors;
// };

// Validate the form using the validation schema

// Custom validation schema

const DemoOneForm = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    job: false,
    gender: "",
    address: "",
  };

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
  };

  const validationSchema = {
    name: createValidationRule()
      .required("Name is required")
      .minLength(3, "Name must be at least 3 characters")
      .maxLength(12, "Name cannot exceed 12 characters"),
      

    email: createValidationRule()
      .required("Email is required")
      .test(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),

    phone: createValidationRule()
      .required("Phone is required")
      .test(/^\d+$/, "Invalid Phone format")
      .minLength(10, "phone must be at least 10 digit")
      .maxLength(10, "phone cannot exceed 10 digit"),
    gender: createValidationRule().required("Gender is required"),
    // job: createValidationRule(),
  };

  const validateForm = (values) => {
    const errors = {};

    Object.keys(values).forEach((field) => {
      const validation = validationSchema[field];
      if (validation) {
        const error = validation.validate(values[field]);
        if (error) {
          errors[field] = error;
        }
      }
    });

    return errors;
  };

  return (
    <Form
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
        setFieldError
      }) => (
        <>
          {/* Name Input */}
          <div>
            <label>Name: </label>
            <input
              type="text"
              name="name"
              value={values.name}
              onChange={(e) => {
                setFieldValue("name", e.target.value);
                console.log("qq", values);
                
              }}
              //   onChange={handleChange}

              onBlur={handleBlur}
              placeholder="Name"
            />
            <div>
              {touched.name && errors.name && (
                <span style={{ color: "red" }}>{errors.name}</span>
              )}
            </div>
          </div>
          <br />

          {/* Email Input */}
          <div>
            <label>Email: </label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
            />
            <div>
              {touched.email && errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
          </div>
          <br />

          <div>
            <label>Phone </label>
            <input
              type="text"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="0987654321"
            />
            <div>
              {touched.phone && errors.phone && (
                <span style={{ color: "red" }}>{errors.phone}</span>
              )}
            </div>
          </div>
          <div>
            <label>JOB </label>
            <input
              type="checkbox"
              name="job"
              onChange={handleChange}
              onBlur={handleBlur}
              // checked={values.job}
            />
          </div>
          <div>
            <label>Gender </label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              onBlur={handleBlur}
              // checked={values.job}
            />
            <label>Male </label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              onBlur={handleBlur}
              // checked={values.job}
            />
            <label>Female </label>
            <div>
              {touched.gender && errors.gender && (
                <span style={{ color: "red" }}>{errors.gender}</span>
              )}
            </div>
          </div>
        </>
      )}
    </Form>
  );

  //   return (
  //     <Form
  //       initialValues={initialValues}
  //       validate={validateForm}
  //       onSubmit={handleSubmit}
  //     >
  //       <Field name="name" type="text" placeholder="Name" />
  //       <Field name="email" type="email" placeholder="Email" />

  //       <button type="submit">Submit</button>
  //     </Form>
  //   );
};

export default DemoOneForm;
