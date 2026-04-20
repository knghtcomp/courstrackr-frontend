import React, { useState } from 'react';

export const LogInPageStudent = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [idNumber, setIdNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full min-h-screen bg-white font-sans overflow-hidden">

      {/* LEFT PANEL: Branding & Background Image */}
      <div
        className="hidden lg:flex w-1/2 relative bg-cover bg-center flex-col p-12 xl:p-16"
        style={{ backgroundImage: `url('/IMG_20260305_1329041.png')` }}
      >
        <div className="absolute inset-0 bg-[#003366]/60"></div>

        <div className="relative z-10 flex flex-col h-full">

          {/* SPACING FIX 1: Changed mt-12 to mt-32 to push this whole section down */}
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

          {/* SPACING FIX 2: Changed mb-12 to mb-32 to push the bullets higher up from the bottom */}
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

      {/* RIGHT PANEL: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-[480px]">
          
          <div className="mb-8">
            <h2 className="text-[42px] font-bold text-[#003366] leading-tight mb-1 font-['Calistoga'] tracking-tight">
              Welcome Back, Kuago
            </h2>
            <p className="text-[#003366] font-bold text-lg font-['Calistoga']">Sign in to your account</p>
          </div>

          <div className="flex bg-[#E9EBEF] rounded-full p-1 mb-8">
            <button
              onClick={() => setActiveTab('student')}
              className={`flex-1 py-3 text-lg font-bold rounded-full transition-all ${
                activeTab === 'student' ? 'bg-[#003366] text-white shadow-md' : 'text-[#003366]'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex-1 py-3 text-lg font-bold rounded-full transition-all ${
                activeTab === 'admin' ? 'bg-[#003366] text-white shadow-md' : 'text-[#003366]'
              }`}
            >
              Admin
            </button>
          </div>

          <form className="space-y-5">
            
            <div>
              <label className="block text-black font-extrabold mb-2 font-['Calistoga'] text-lg tracking-wide">ID Number</label>
              <input
                type="text"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="w-full h-[52px] px-6 bg-[#E9EBEF] rounded-full outline-none focus:ring-2 focus:ring-[#003366] font-sans text-lg border border-transparent"
              />
            </div>

            <div>
              <label className="block text-black font-extrabold mb-2 font-['Calistoga'] text-lg tracking-wide">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[52px] px-6 pr-12 bg-[#E9EBEF] rounded-full outline-none focus:ring-2 focus:ring-[#003366] font-sans text-lg border border-transparent"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
                >
                  <img src="/privacy.svg" alt="Toggle Password" className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-2 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 cursor-pointer"
                />
                <span className="text-[14px] font-extrabold text-black font-['Calistoga'] tracking-wide">Remember me</span>
              </label>
              <a href="#" className="text-[14px] font-extrabold text-[#003366] font-['Calistoga'] hover:underline tracking-wide">
                Forgot Password?
              </a>
            </div>

            <button
              type="button"
              className="w-full h-[60px] bg-[#003366] text-white text-[20px] font-bold rounded-full mt-4 hover:bg-[#002244] transition-colors font-['Calistoga'] tracking-wider shadow-lg"
            >
              SIGN IN
            </button>

            <div className="flex items-center gap-4 my-6 px-4">
              <div className="flex-1 border-t border-black/30"></div>
              <span className="text-[16px] font-extrabold text-black font-['Calistoga'] tracking-wide">or</span>
              <div className="flex-1 border-t border-black/30"></div>
            </div>

            <button
              type="button"
              className="w-full h-[60px] bg-[#003366] text-white text-[20px] font-bold rounded-full hover:bg-[#002244] transition-colors font-['Calistoga'] tracking-wider shadow-lg"
            >
              SIGN UP
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-[12px] text-black">
              Need help? Contact <a href="mailto:registrar@ustp.ph" className="text-[#003366] hover:underline font-bold">registrar@ustp.ph</a>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LogInPageStudent;