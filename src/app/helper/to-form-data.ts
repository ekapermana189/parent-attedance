export const toFormData = <Form>(form: Form) => {
    const formData = new FormData();
  
    for (const key of Object.keys(form)) {
      if (Array.isArray(form[key])) {
        const value = form[key];
        value.map((data, i) => {
          Object.keys(data).map((inKey, j) => {
            const keyPrefix = `${key}[${i.toString()}][${inKey}]`;
            formData.append(keyPrefix, data[inKey]);
          });
        });
      } else {
        const value = form[key];
        formData.append(key, value);
      }
    }
    return formData;
  };