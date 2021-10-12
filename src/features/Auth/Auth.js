import clsx from 'clsx';
import { useState } from 'react';

export function Auth() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    'retype-password': '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    'retype-password': '',
  });

  function handleChange(e) {
    const newValues = { ...values };
    newValues[e.target.name] = e.target.value;
    const newErrors = { ...errors };
    newErrors[e.target.name] = '';

    setValues(newValues);
    setErrors(newErrors);
    // setValues({ ...values, [e.target.name]: e.target.value });
    // setErrors({ ...errors, [e.target.name]: '' });
  }

  console.log(values, !values.email);

  async function handleSubmit(e) {
    e.preventDefault();

    let hasErrors = false;
    let newErrors = { ...errors };

    if (!values.email) {
      hasErrors = true;
      newErrors.email = 'Please enter your email in order to register!';
    }

    if (!values.password) {
      hasErrors = true;
      newErrors.password = 'Please choose a password';
    }

    if (values.password !== values['retype-password']) {
      hasErrors = true;
      newErrors['retype-password'] = 'Your passwords did not match!';
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    const data = await fetch('http://localhost:3001/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email: values.email, password: values.password }),
    }).then((res) => res.json());

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit} noValidate={true}>
      <h1>Register</h1>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          value={values.email}
          onChange={handleChange}
          className={clsx('form-control', { 'is-invalid': errors.email })}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className={clsx('form-control', { 'is-invalid': errors.password })}
        />
        <div className="invalid-feedback">{errors.password}</div>
        <label htmlFor="retype-password" className="form-label">
          Retype Password
        </label>
        <input
          type="password"
          id="retype-password"
          name="retype-password"
          value={values['retype-password']}
          onChange={handleChange}
          className={clsx('form-control', {
            'is-invalid': errors['retype-password'],
          })}
        />
        <div className="invalid-feedback">{errors['retype-password']}</div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
    </form>
  );
}
