import React from 'react';
import { useForm } from 'react-hook-form';
import './LoginForm.css';

const LoginForm = () => {
  const {register,formState:{ errors }} = useForm ();

  const onSubmit = (event) => {
    event.preventDefault(); // Add preventDefault to prevent default form submission behavior
  
  };

  return (
    <div className="login-form-container">
      <form onSubmitForm={onSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;