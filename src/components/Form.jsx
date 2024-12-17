import React, { useState } from 'react'

const Form = () => {

  const [password , setPassword] = useState("");

  const [strength , setStrength] = useState({
    length: false,
    numbers: false,
    special: false,
  });

  const handlePasswordChange = (e) => {
    const newPasword = e.target.value;
    setPassword(newPasword);
    setStrength(checkPasswordStrength(newPasword));
  };

  const checkPasswordStrength = (password) => {
    return {
      length: password.length >= 8,
      numbers: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const getStrengthlevel = (strength) => {
    return Object.values(strength).filter((value) => value).length;
  };

  const getProgressbarColor = (level) => {
      if (level === 3) return "bg-color-6";
      if (level === 2) return "bg-color-9";
      if (level < 2) return "bg-color-7";
  };

  const getLabelColor = (isValid) => {
    return isValid ? "text-color-6" : "text-color-7";
  };

  const strengthLevel = getStrengthlevel(strength);

  return (
    <div className="bg-color-8 flex justify-center items-center h-screen">
      <div className="flex flex-col p-6 bg-color-1 rounded-xl shadow-lg w-1/3">
        <h1 className="text-3xl mb-4 text-color-5 flex justify-center">Password Strength Checker</h1><br/>
        
        <form className="mb-4">
          <input
            type="text"
            className="border border-blue-500 p-2 rounded-[10px] w-full "
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          /><br/><br/>
          
        <div className="flex flex-row w-full">
          <div 
          className={` h-[10px] rounded-lg ${getProgressbarColor(strengthLevel)}`}
          style={{width: password ? `${(strengthLevel / 3) * 100}%` : `2%`, transition: "width 0.3s ease-in-out" }}
          ></div>
        </div><br/>

          <label className={`text-[20px] ${getLabelColor(strength.length)}`}>8 characters </label><br/>
          <label className={`text-[20px] ${getLabelColor(strength.numbers)}`}>Numbers </label><br/>
          <label className={`text-[20px] ${getLabelColor(strength.special)}`}>Special characters </label><br/>
        </form>

      </div>
    </div>
  )
}

export default Form;
