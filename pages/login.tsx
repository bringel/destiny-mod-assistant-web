import React from 'react';

interface Props {}

const Login = (props: Props) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-black text-4xl">Destiny Mod Assistant</h1>
      <a href={`${process.env.API_URL}/login`} className="text-emerald-600 text-xl underline mt-2">
        Login with Bungie
      </a>
      <div className="text-black text-lg mt-6">
        Destiny Mod Assistant is an app that tells you what all your armor mods are doing in one spot
      </div>
    </div>
  );
};

export default Login;
