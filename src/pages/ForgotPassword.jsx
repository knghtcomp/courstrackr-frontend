import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending the reset email
    console.log("Reset link sent to:", email);
    alert(`A password reset link has been sent to ${email}`);
    navigate('/'); // Send them back to login after success
  };

  return (
    <div className="flex w-full min-h-screen bg-white font-sans overflow-hidden">

      {/* LEFT PANEL: Exact match to your perfected layout */}
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

      {/* RIGHT PANEL: Forgot Password Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        
        {/* Back Button */}
        <button 
          type="button"
          onClick={() => navigate('/')} 
          className="absolute top-8 left-8 lg:top-12 lg:left-12 text-[#003366] hover:opacity-70 transition-opacity"
          aria-label="Back to Login"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        <div className="w-full max-w-[500px]">
          
          <div className="mb-10">
            <h2 className="text-[42px] lg:text-[50px] font-bold text-[#003366] leading-tight mb-2 font-['Calistoga'] tracking-tight">
              Forgot Password
            </h2>
            <p className="text-black font-bold text-lg font-['Calistoga']">
              Enter the email address of your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                spellCheck="false"
                autoComplete="email"
                placeholder="Email Address"
                className="w-full h-[52px] px-6 bg-[#E9EBEF] rounded-full border-none outline-none focus:outline-none focus:ring-2 focus:ring-[#003366] font-sans text-lg placeholder:text-gray-400 placeholder:font-['Calistoga']"
              />
            </div>

            <button
              type="submit"
              className="w-full h-[60px] bg-[#003366] text-white text-[20px] font-bold rounded-full hover:bg-[#002244] transition-colors font-['Calistoga'] tracking-wider shadow-lg"
            >
              Reset Password
            </button>
            
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;