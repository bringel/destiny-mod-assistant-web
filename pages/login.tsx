import React from 'react';

interface Props {}

const Login = (props: Props) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="text-black text-lg text-center">
        Destiny Mod Assistant helps plan out and create builds with your armor and armor mods by showing you the effects
        of all equiped mods in one view
        <br />
        To do that we need permission to view your characters, vault, and collections
        <br />
      </div>
      <a href={`${process.env.NEXT_PUBLIC_API_URL}/login`} className="text-sky-700 text-xl underline ">
        Login with Bungie
      </a>
    </div>
  );
};

export default Login;
