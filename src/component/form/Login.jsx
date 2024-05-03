import React from "react";
import brand from "../../../public/Images/brand.png";
import user from "../../../public/Images/user.png";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();

  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center z-40 ">
      <div className="backdrop-blur-md px-6 min-w-[730px] py-20 rounded-3xl border-container inner-border">
        <div className="flex flex-col items-center justify-center gap-5 w-full ">
          <img src={brand} className="w-12 h-12" />
          <div className="flex gap-4 w-full items-center justify-center">
            <div className="w-full flex items-center justify-center">
              <img src={user} />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <span className="text-lg text-black font-medium">
                Welcome Back....
              </span>
              <form
                className="flex flex-col gap-4 max-w-[270px]"
                onSubmit={handleSubmit()}
              >
                <Input
                  placeholder="demo@123"
                  {...register("email")}
                  type="email"
                  errors={errors}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  {...register("password")}
                  errors={errors}
                />
                <div className="flex gap-4">
                  <input
                    type="checkbox"
                    className=" bg-none"
                    {...register("rememberMe")}
                  />
                  <span>Remember me</span>
                </div>
                <Button type="submit">Login</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex min-w-[720px] items-center justify-end mt-4"
        onClick={navigateDashboard}
      >
        <button className="text-white/90 bg-neutral-800 rounded-full text-sm p-3 font-medium">
          Visit Dashboard
        </button>
      </div>
    </div>
  );
};

export default Login;
