import { Link } from "react-router-dom";
import Input from "../ui/Input";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Login
        </h2>

        <div className="mb-5">
          <Input label={"User Name"} state={name} setState={setName}/>
        </div>

        <div className="mb-6">
          <Input label={"Password"} type={"password"} state={password} setState={setPassword}/>
        </div>

        <button  
        onClick={dispatch}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
          Kirish
        </button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Akkauntingiz yo`qmi{""}
          <Link to={"/register"}>
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
            Ro`yxatdan o`tish
          </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
