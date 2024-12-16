import React from 'react'

const Form = () => {
  return (
    <div className="bg-color-8 flex justify-center items-center h-screen">
      <div className="flex flex-col p-6 bg-color-1 rounded-xl shadow-lg w-1/3">
        <h1 className="text-3xl mb-4 text-color-5 flex justify-center">Password Validity Checker</h1><br/>
        
        <form className="mb-4">
          <input
            type="text"
            className="border border-blue-500 p-2 rounded-[10px] w-full "
            placeholder="Enter your password"
          /><br/><br/>
          
        <div className="flex flex-row w-full">
          <div className="w-full bg-green-400 h-[10px] rounded-lg"></div>
        </div><br/>

          <label className="text-[20px] text-color-4">8 characters </label><br/>
          <label className="text-[20px] text-color-4">Numbers </label><br/>
          <label className="text-[20px] text-color-4">Special characters </label><br/>
        </form>

      </div>
    </div>
  )
}

export default Form
