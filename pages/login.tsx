import React from 'react';

interface Props {}

const Login = (props: Props) => {
  return (
    <div className="min-h-screen bg-slate-800 py-36 px-3">
      <div className="flex flex-col items-center">
        <h1 className="text-white text-4xl">Destiny Mod Assistant</h1>
        <a href={`${process.env.API_URL}/login`} className="text-emerald-600 text-xl underline mt-2">
          Login with Bungie
        </a>
        <div className="text-white text-lg mt-6">
          Destiny Mod Assistant is an app that tells you what all your armor mods are doing in one spot
        </div>
      </div>
    </div>
  );
};

export default Login;
