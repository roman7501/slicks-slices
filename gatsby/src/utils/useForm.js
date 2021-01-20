import { useState } from 'react';

const useForm = (defaults) => {
  const [values, setValues] = useState(defaults);

  function updateValues(e) {
    // Check if its a number and convert
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(value);
    }
    setValues({
      // copy the existing values into it
      ...values,
      // update the new value that changed
      [e.target.name]: value,
    });
  }

  return { values, updateValues };
};

export default useForm;
