import React from 'react';
import clsx from 'clsx';

const Button = ({ children, className, variant = 'primary', ...props }) => {
  return (
    <button
      className={clsx(
        'w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500': variant === 'primary',
          'text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500': variant === 'secondary',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;