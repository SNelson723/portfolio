import { useAppDispatch, useAppSelector } from "../hooks";
import { login } from "../api/login";
import {
  setLoggedIn,
  setUsername,
  setPassword,
  setToken,
  setName,
  setUser,
} from "../features/appSlice";
import useWidth from "../hooks/useWidth";
import { useState } from "react";

const Login = () => {
  const dispatch = useAppDispatch();
  const context = useAppSelector((state) => state.app);
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const width = useWidth();

  const handleSubmit = () => {
    login(context.devUrl, context.username, context.password)
      .then((resp) => {
        const j = resp.data;
        console.log("Login response:", j);
        if (j.error === 0) {
          dispatch(setToken(j.access_token));
          dispatch(setUser(j.user));
          dispatch(setLoggedIn(true));
          dispatch(setUsername(""));
          dispatch(setPassword(""));
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  // This only runs when an element is in focus
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // e.preventDefault();
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
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
            Name
          </label>
          <input
            type="text"
            className={`${!isCreating ? "hidden" : "block"} input w-full mb-2`}
            placeholder=""
            value={context.username}
            onChange={(e) => dispatch(setName(e.target.value))}
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
