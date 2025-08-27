import { useAppDispatch, useAppSelector } from "../hooks";
import { login } from "../api/login";
import { setLoggedIn, setUsername, setPassword } from "../features/appSlice";
import useWidth from "../hooks/useWidth";

const Login = () => {
  const dispatch = useAppDispatch();
  const context = useAppSelector((state) => state.app);

  const width = useWidth();

  const handleSubmit = () => {};

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
          />
          <button
            type="submit"
            className="btn-themeBlue w-full mt-4"
            onClick={handleSubmit}
          >
            Sign in
          </button>
        </div>
        <div>
          howdy
        </div>
      </div>
    </div>
  );
};

export default Login;
