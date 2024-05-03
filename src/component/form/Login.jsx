import React from "react";
import brand from "../../../public/Images/brand.png";
import user from "../../../public/Images/user.png";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex items-center justify-center z-40 ">
      <div className="backdrop-blur-md px-6 min-w-[650px] py-16  rounded-lg ">
        <div className="flex flex-col items-center justify-center gap-5 w-full">
          <img src={brand} className="w-12 h-12" />
          <div className="flex gap-4 w-full items-center justify-center">
            <div className="w-full flex items-center justify-center">
              <img src={user} />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <span className="text-lg text-black font-medium">
                Welcome Back....
              </span>
              <form className="flex flex-col gap-4">
                <Input placeholder="demo@123" type="email" />
                <Input placeholder="Password" type="password" />
                <div className="flex gap-4">
                  <input type="checkbox" className="border bg-none" />
                  <span>Remember me</span>
                </div>
                <Button onClick={() => navigate("/dashboard")}>Login</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
