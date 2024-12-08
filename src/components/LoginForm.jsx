import React from 'react';
import { useForm } from 'react-hook-form';
import { FiMail, FiLock } from 'react-icons/fi';
import InputField from './InputField';
import Button from './Button';
import { emailValidation, passwordValidation } from '../utils/validation';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <InputField
        label="Email"
        type="email"
        icon={<FiMail className="text-gray-400" />}
        error={errors.email}
        {...register('email', emailValidation)}
      />

      <InputField
        label="Password"
        type="password"
        icon={<FiLock className="text-gray-400" />}
        error={errors.password}
        {...register('password', passwordValidation)}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <Button type="submit">Sign in</Button>
    </form>
  );
};

export default LoginForm;