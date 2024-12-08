import React from 'react';
import clsx from 'clsx';

const InputField = React.forwardRef(({ label, type, icon, error, ...props }, ref) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          ref={ref}
          className={clsx(
            'block w-full pl-10 sm:text-sm rounded-md',
            error
              ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500'
              : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
          )}
          {...props}
        />
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
});

InputField.displayName = 'InputField';

export default InputField;