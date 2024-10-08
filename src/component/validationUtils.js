// Utility to build chainable validation rules
export const createValidationRule = () => {
  const rules = [];

  return {
    required(message) {
      rules.push((value) =>
        !value ? message || "This field is required" : null
      );
      return this;
    },
    maxLength(max, message) {
      rules.push((value) =>
        value && value.length > max
          ? message || `Must be ${max} characters or less`
          : null
      );
      return this;
    },
    minLength(min, message) {
      rules.push((value) =>
        value && value.length < min
          ? message || `Must be at least ${min} characters`
          : null
      );
      return this;
    },
    test(pattern, message) {
      rules.push((value) =>
        value && !pattern.test(value) ? message || "Invalid format" : null
      );
      return this;
    },
    validate(value) {
      for (const rule of rules) {
        const error = rule(value);
        if (error) return error;
      }
      return null;
    },
    isNmuber(){
      
    }
  };
};
