import React, { useEffect, useState } from 'react';
import green from "../assets/green.png";
import red from "../assets/red.png";
import yellow from "../assets/yello.png";

const Form = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState({
    length: false,
    numbers: false,
    special: false,
  });

  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    generateBubbles();
  }, []);

  const generateBubbles = (strengthLevel) => {
    const bubbleArray = Array.from({ length: 20 }).map(() => ({
      left: Math.random() * 100,
      size: Math.random() * 150 + 50,
      color: getBubbleColor(strengthLevel),
      animationDuration: Math.random() * 5 + 5, // 5 to 10 seconds
      animationDelay: Math.random() * 2, // 0 to 2 seconds
    }));
    setBubbles(bubbleArray);
  };

  const getBubbleColor = (strengthLevel) => {
    if (strengthLevel < 2) {
      return red;
    } else if (strengthLevel === 2) {
      return yellow;
    } else {
      return green;
    }
  };
 6
  const handlePasswordChange = (e) => {
    const newPasword = e.target.value;
    setPassword(newPasword);
    const newStrength = checkPasswordStrength(newPasword);
    setStrength(newStrength);

    const newStrengthLevel = getStrengthlevel(newStrength);
    if (newStrengthLevel !== strengthLevel) {
      generateBubbles(newStrengthLevel);
    }
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
    <div className="relative w-screen overflow-hidden bg-color-8 flex justify-center items-center h-screen">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute rounded-full z-0"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundImage: `url(${bubble.color})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            left: `${bubble.left}%`,
            bottom: "0%", // Start at the bottom
            animation: `floatUp ${bubble.animationDuration}s ease-in-out infinite`,
            animationDelay: `${bubble.animationDelay}s`,
          }}
        ></div>
      ))}

      <div
        className="flex flex-col p-6 bg-color-1 bg-opacity-30 backdrop-blur-md border
                     border-color-1 rounded-xl z-10 shadow-lg lg:w-1/3 sm:w-2/3 md:w-1/2"
      >
        <h1 className="text-3xl mb-4 text-color-5 flex justify-center">
          Password Strength Meter
        </h1>
        <br />

        <form className="mb-4">
          <input
            type="password"
            className="border border-blue-500 p-2 rounded-[10px] w-full "
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <br />

          <div className="flex flex-row w-full">
            <div
              className={` h-[10px] rounded-lg ${getProgressbarColor(
                strengthLevel
              )}`}
              style={{
                width: password
                  ? `${(strengthLevel / 3) * 100}%`
                  : `2%`,
                transition: "width 0.3s ease-in-out",
              }}
            ></div>
          </div>
          <br />

          <label className={`text-[20px] ${getLabelColor(strength.length)}`}>
            At least 8 characters{" "}
          </label>
          <br />
          <label className={`text-[20px] ${getLabelColor(strength.numbers)}`}>
            At least one number{" "}
          </label>
          <br />
          <label className={`text-[20px] ${getLabelColor(strength.special)}`}>
            At least one special character{" "}
          </label>
          <br />
        </form>
      </div>

      <style>
        {`
          @keyframes floatUp {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(-200vh);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Form;
