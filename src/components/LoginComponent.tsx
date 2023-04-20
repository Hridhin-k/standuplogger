import React from "react";
import { useNavigate } from "react-router-dom";

function LoginComponent() {
  const Navigate = useNavigate();
  const onLogin = () => {
    Navigate("/projects");
  };
  return (
    <div className="flex justify-center  ">
      <button
        className="w-40 h-15  mt-96 rounded-full text-white bg-blue-500 border-4 border-white"
        onClick={onLogin}
      >
        login
      </button>
    </div>
  );
}

export default LoginComponent;
