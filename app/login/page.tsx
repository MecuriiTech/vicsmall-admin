import Image from 'next/image';
import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
     
      <div className="w-[656px] h-[589px] bg-white rounded-2xl shadow-lg relative">
      
        <div className="absolute left-[241px] top-[101px] text-center">
          <h1 className="text-2xl font-medium text-gray-900">Welcome back!</h1>
        </div>

      
        <div className="absolute left-[87px] top-[202px]">
          <label className="text-sm font-medium text-gray-600">Email or Phone Number</label>
        </div>

        <div className="absolute left-[86px] top-[224px] w-[485px] h-[45px]">
          <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg p-2">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <input
              type="text"
              placeholder="Enter your email or phone number"
              className="ml-2 bg-transparent outline-none w-full text-sm text-gray-600 placeholder-gray-400"
            />
          </div>
        </div>

     
        <div className="absolute left-[87px] top-[296px]">
          <label className="text-sm font-medium text-gray-600">Password</label>
        </div>

        <div className="absolute left-[86px] top-[318px] w-[485px] h-[45px]">
          <div className="flex items-center bg-gray-50 border border-gray-300 rounded-lg p-2">
            <input
              type="password"
              placeholder="Enter your password"
              className="bg-transparent outline-none w-full text-sm text-gray-600 placeholder-gray-400"
            />
            <button>
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="absolute left-[86px] top-[447px] w-[485px] h-[50px]">
          <button className="w-full h-full bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300">
            Login
          </button>
        </div>
        <div className="absolute left-[473px] top-[367px]">
          <a href="#" className="text-sm font-semibold text-gray-600 hover:text-gray-800">
            Forgot password?
          </a>
        </div>


        <div className="absolute left-[299px] top-[25px]">
        <Image
        src="/vicsmall-logo.svg"
        alt="Vicsmall logo"
        height={48}
        width={48}
      />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;