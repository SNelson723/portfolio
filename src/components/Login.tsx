import { useAppDispatch, useAppSelector } from "../hooks";
import { login, createUser } from "../api/login";
import {
  setLoggedIn,
  setUsername,
  setPassword,
  setToken,
  setEmail,
  setUser,
} from "../features/appSlice";
import useWidth from "../hooks/useWidth";
import { useState } from "react";
import { useToast } from "./toast/hooks/useToast";

const Login = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const context = useAppSelector((state) => state.app);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const width = useWidth();

  const handleSubmit = () => {
    if (!isCreating) {
      login(context.devUrl, context.username, context.password)
        .then((resp) => {
          const j = resp.data;
          if (j.error === 0) {
            dispatch(setToken(j.access_token));
            dispatch(setUser(j.user));
            dispatch(setLoggedIn(true));
            dispatch(setUsername(""));
            dispatch(setPassword(""));
          }
        })
        .catch((error) => {
          toast.error("Login failed: " + error.message);
        });
    } else {
      createUser(
        context.devUrl,
        context.username,
        context.password,
        context.email
      )
        .then((resp) => {
          const j = resp.data;
          if (j.error === 0) {
            dispatch(setEmail(""));
            setIsCreating(false);
          }
        })
        .catch((error) => {
          console.error("Create user failed:", error);
        });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-bkg">
      <div
        className={` border-2 border-slate-50 bg-slate-200 shadow-lg rounded-lg py-2 px-6`}
        style={{ width: `${width}px` }}
      >
        <div className="text-center font-medium text-[20px] select-none">
          {isCreating ? "Create an account" : "Login to your account"}
        </div>
        <div className="">
          <label
            className={`${
              !isCreating ? "hidden" : "block"
            } text-[15px] select-none`}
          >
            Email
          </label>
          <input
            type="text"
            className={`${!isCreating ? "hidden" : "block"} input w-full mb-2`}
            placeholder=""
            value={context.email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          <label className="block text-[15px] select-none">Username</label>
          <input
            type="text"
            className="input w-full mb-2"
            placeholder=""
            value={context.username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
          <label className="block text-[15px] select-none">Password</label>
          <input
            type="password"
            className="input w-full mb-2"
            placeholder=""
            value={context.password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            className="btn-themeBlue w-full mt-4 select-none"
            onClick={handleSubmit}
          >
            {isCreating ? "Sign up" : "Login"}
          </button>
        </div>
        <div className="flex justify-center gap-2 text-[14px] mt-1 select-none">
          <div className="py-0.5">
            {isCreating ? "Already have an account?" : "Don't have an account?"}
          </div>
          <div
            className="font-bold text-indigo-700 cursor-pointer hover:text-indigo-400 py-0.5 px-1.5 transition-all duration-100 hover:underline"
            onClick={() => setIsCreating((prev) => !prev)}
          >
            {!isCreating ? "Sign up" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
