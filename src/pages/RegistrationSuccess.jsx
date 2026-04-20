import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full min-h-screen bg-white font-sans overflow-hidden">
      {/* LEFT PANEL */}
      <div
        className="hidden lg:flex w-1/2 relative bg-cover bg-center flex-col p-12 xl:p-16"
        style={{ backgroundImage: `url('/IMG_20260305_1329041.png')` }}
      >
        <div className="absolute inset-0 bg-[#003366]/60"></div>
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex flex-row items-center mt-32 xl:mt-40 mb-8 -ml-6">
            <img src="/logo.svg" alt="Logo" className="w-24 h-24 -mr-2 drop-shadow-lg" />
            <div className="flex flex-col justify-center">
              <h1 className="text-[40px] xl:text-[45px] font-bold text-white leading-none font-['Calistoga'] m-0">
                COURSETRACKR
              </h1>
              <h2 className="text-[22px] xl:text-[25px] text-[#FFCC00] font-['Calistoga'] m-0 mt-1">
                Academic Management Tool
              </h2>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-[28px] xl:text-[32px] text-white leading-tight font-['Calistoga'] max-w-[550px]">
              University of Science and Technology of Southern Philippines
            </h3>
            <p className="text-[22px] xl:text-[25px] text-white italic opacity-90 font-['Castoro'] mt-2">
              Computer Engineering Department
            </p>
          </div>
          <div className="space-y-4 mt-auto mb-32 xl:mb-40">
            <div className="flex items-center gap-4">
              <img src="/bullet.svg" alt="bullet" className="w-4 h-4" />
              <p className="text-[20px] text-white font-['Calistoga'] m-0">Track your academic progress</p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/bullet.svg" alt="bullet" className="w-4 h-4" />
              <p className="text-[20px] text-white font-['Calistoga'] m-0">Get personalize course recommendations</p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/bullet.svg" alt="bullet" className="w-4 h-4" />
              <p className="text-[20px] text-white font-['Calistoga'] m-0">Monitor prerequisite compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: Success Message */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        <div className="w-full max-w-[500px] flex flex-col items-center text-center mt-10">
          <h2 className="text-[42px] lg:text-[50px] font-bold text-[#003366] leading-tight mb-12 font-['Calistoga'] tracking-tight">
            Registered Successfully
          </h2>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="w-full h-[60px] bg-[#003366] text-white text-[20px] font-bold rounded-full hover:bg-[#002244] transition-colors font-['Calistoga'] tracking-wider shadow-lg"
          >
            Go back to Log-In
          </button>
        </div>
      </div>
    </div>
  );
};

// THE FIX: This is the ONLY export in the file now!
export default RegistrationSuccess;