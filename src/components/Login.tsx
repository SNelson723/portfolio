import { useAppDispatch, useAppSelector } from "../hooks";
import { login } from "../api/login";
import {
  setLoggedIn,
  setUsername,
  setPassword,
  setToken,
  setUser,
} from "../features/appSlice";
import useWidth from "../hooks/useWidth";

const Login = () => {
  const dispatch = useAppDispatch();
  const context = useAppSelector((state) => state.app);

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
        <div className="text-center font-medium text-[20px]">
          Login to your account
        </div>
        <div className="">
          <label className="block text-[15px]">Username</label>
          <input
            type="text"
            className="input w-full mb-2"
            placeholder=""
            value={context.username}
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
          <label className="block text-[15px]">Password</label>
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
            className="btn-themeBlue w-full mt-4"
            onClick={handleSubmit}
          >
            Sign in
          </button>
        </div>
        <div>howdy</div>
      </div>
    </div>
  );
};

export default Login;
