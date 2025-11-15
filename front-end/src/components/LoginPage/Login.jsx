import { Link } from "react-router-dom";
import { useState } from "react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200 ">
      <div className="mt-8">

        <h2 className="text-5xl  font-semibold ">
          Log in
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-10 bg-transparent"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              
            />
          </div>

          {/* Password with link */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-10 bg-transparent "
            />
            <div/>

            <div className="mt-8 flex">
            <Link
              to="/forgot-password"
              className="mt-8 flex iems-center"
            >
              Forgot password?
            </Link>
            </div>
          </div>

          {/* Login Button */}
          <div className="mt-8 flex flex-col gap-y-4">
          <button
            type="submit"
            className="py-4 rounded-4xl bg-blue-1000 text-white font-bold py-4 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            Log in
          </button>
          </div>
        </form>

        {/* Footer Link */}
        <p className="text-center text-xs mt-6 text-gray-600">
          No account? Create a new account{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
