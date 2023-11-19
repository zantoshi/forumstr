import React from "react";

const TextArea = ({ copy, name }) => {
  return (
    <div>
      <div className="sm:col-span-4">
        <label
          htmlFor={copy}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {copy}
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <textarea
              id={name}
              name={name}
              rows={3}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
