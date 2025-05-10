import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col w-full p-6 rounded-md sm:p-10">
      <div className="mb-8 text-center">
        <h1 className="my-2 text-3xl font-bold">Create new user</h1>
        <p className="text-sm text-gray-400 dark:text-gray-600">
          Enter details to create user account.
        </p>
      </div>
      <form className="space-y-6 text-black">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm capitalize"
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2 text-sm capitalize">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block mb-2 text-sm">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label htmlFor="dob" className="block mb-2 text-sm capitalize">
              Date of birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50"
            />
          </div>
          <div className="col-span-full">
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50"
            />
          </div>
        </div>

        <button
          type="button"
          className="w-full px-8 py-2 font-semibold rounded-md bg-[#1565C0] text-white cursor-pointer"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
