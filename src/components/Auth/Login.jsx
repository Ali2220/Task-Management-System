import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="border-2 border-gray-300 p-8 sm:p-12 md:p-16 rounded-xl shadow-lg bg-white">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center space-y-4 w-80 sm:w-96"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Log In</h2>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg py-3 px-5 text-lg text-gray-700 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 focus:ring-1 transition-all"
            type="email"
            placeholder="Enter Your Email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg py-3 px-5 text-lg text-gray-700 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 focus:ring-1 transition-all"
            type="password"
            placeholder="Enter Your Password"
          />

          <button className="w-full bg-emerald-600 text-white font-semibold rounded-lg py-3 mt-4 hover:bg-emerald-700 shadow-md transition-all hover:shadow-lg">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
