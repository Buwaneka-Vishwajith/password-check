import React from 'react'

const Form = () => {
  return (
    <div className="bg-blue-300 flex justify-center items-center h-screen">
      <div className="flex flex-col items-center p-6 bg-blue-200 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-4">Password Checker</h1>
        <form className="mb-4">
          <label className="text-[20px]">Password </label>
          <input
            type="text"
            className="border border-blue-500 p-2 rounded-[10px]"
            placeholder="Enter your password"
          />
        </form>

        <div className="flex flex-row w-full">
          <div className="w-1/2 bg-red-400 h-[50px]"></div>
          <div className="w-1/2 bg-green-400 h-[50px]"></div>
        </div>
      </div>
    </div>
  )
}

export default Form
