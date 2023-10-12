import React from "react";
import Image from "next/image";


const Index = () => {
  return (
    <footer className="w-full border z-10 border-t-[rgb(51,53,63)] border-l-transparent border-r-transparent text-white font-medium text-lg">
      <div className="py-5 flex items-center justify-between px-5">
        <h1 className="text-white mb-5 text-2xl font-bold">
          <Image src='/images/logo.webp' alt="image hero" width={50} height={50} />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-400">
            SSDG KORWIL TASIKMALAYA
          </span>
        </h1>
        <span className="underline underline-offset-2 mt-5">{new Date().getFullYear()}&copy;ssdgtasikmalaya</span>
      </div>
    </footer>
  );
};

export default Index;