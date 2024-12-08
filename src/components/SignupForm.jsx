import React from 'react';
import { useForm } from 'react-hook-form';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import InputField from './InputField';
import Button from './Button';
import { emailValidation, passwordValidation, nameValidation } from '../utils/validation';

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password');

  const onSubmit = (data) => {
    console.log(data);
    // Handle signup logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <InputField
        label="Full Name"
        type="text"
        icon={<FiUser className="text-gray-400" />}
        error={errors.name}
        {...register('name', nameValidation)}
      />

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

      <InputField
        label="Confirm Password"
        type="password"
        icon={<FiLock className="text-gray-400" />}
        error={errors.confirmPassword}
        {...register('confirmPassword', {
          required: 'Please confirm your password',
          validate: value => value === password || 'Passwords do not match'
        })}
      />

      <Button type="submit">Sign up</Button>
    </form>
  );
};

export default SignupForm;