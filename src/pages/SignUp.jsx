import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

export const SignUpStudent = () => {
  const [activeTab, setActiveTab] = useState("student");
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Toggles for both password fields
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Account Created:", formData, "Role:", activeTab);
    alert(`Success! Account created for ${formData.firstName}.`);
    navigate('/success'); 
  };

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
              <h2 className="text-[22px] xl:text-[25px] text-[#FFCC00] font-['Calistoga'] m-0 mt-0">
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

      {/* RIGHT PANEL: Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        
        {/* FIX: Back Button is now just a clean arrow */}
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

        <div className="w-full max-w-[500px] mt-10">
          
          <div className="mb-6">
            <h2 className="text-[42px] font-bold text-[#003366] leading-tight mb-1 font-['Calistoga'] tracking-tight">
              Welcome, Kuago
            </h2>
            <p className="text-[#003366] font-bold text-lg font-['Calistoga']">Create your account</p>
          </div>

          <div className="flex bg-[#E9EBEF] rounded-full p-1 mb-6">
            <button
              type="button"
              onClick={() => setActiveTab('student')}
              className={`flex-1 py-3 text-lg font-bold rounded-full transition-all ${
                activeTab === 'student' ? 'bg-[#003366] text-white shadow-md' : 'text-[#003366]'
              }`}
            >
              Student
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('admin')}
              className={`flex-1 py-3 text-lg font-bold rounded-full transition-all ${
                activeTab === 'admin' ? 'bg-[#003366] text-white shadow-md' : 'text-[#003366]'
              }`}
            >
              Admin
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-black font-extrabold mb-1 font-['Calistoga'] text-[16px] tracking-wide">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-[48px] px-6 bg-[#E9EBEF] rounded-full outline-none focus:ring-2 focus:ring-[#003366] font-sans text-md border border-transparent"
                />
              </div>

              <div className="flex-1">
                <label className="block text-black font-extrabold mb-1 font-['Calistoga'] text-[16px] tracking-wide">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full h-[48px] px-6 bg-[#E9EBEF] rounded-full outline-none focus:ring-2 focus:ring-[#003366] font-sans text-md border border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-black font-extrabold mb-1 font-['Calistoga'] text-[16px] tracking-wide">
                {activeTab === 'student' ? 'ID Number' : 'Admin Number'}
              </label>
              <input
                type="text"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                className="w-full h-[48px] px-6 bg-[#E9EBEF] rounded-full outline-none focus:ring-2 focus:ring-[#003366] font-sans text-md border border-transparent"
              />
            </div>

            <div>
              <label className="block text-black font-extrabold mb-1 font-['Calistoga'] text-[16px] tracking-wide">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[48px] px-6 bg-[#E9EBEF] rounded-full outline-none focus:ring-2 focus:ring-[#003366] font-sans text-md border border-transparent"
              />
            </div>

            {/* Row 4: Password */}
            <div>
              <label className="block text-black font-extrabold mb-1 font-['Calistoga'] text-[16px] tracking-wide">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  // THE FIX: Block spellcheck and rogue browser borders
                  spellCheck="false"
                  autoComplete="off"
                  className="w-full h-[48px] px-6 pr-12 bg-[#E9EBEF] rounded-full border-none outline-none focus:outline-none focus:ring-2 focus:ring-[#003366] font-sans text-md"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
                >
                  <img src="/privacy.svg" alt="Toggle" className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Row 5: Confirm Password */}
            <div>
              <label className="block text-black font-extrabold mb-1 font-['Calistoga'] text-[16px] tracking-wide">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  // THE FIX: Block spellcheck and rogue browser borders
                  spellCheck="false"
                  autoComplete="off"
                  className="w-full h-[48px] px-6 pr-12 bg-[#E9EBEF] rounded-full border-none outline-none focus:outline-none focus:ring-2 focus:ring-[#003366] font-sans text-md"
                />
                <button 
                  type="button" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 hover:opacity-100 transition-opacity"
                >
                  <img src="/privacy.svg" alt="Toggle" className="w-5 h-5" />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-[56px] bg-[#003366] text-white text-[20px] font-bold rounded-full mt-6 hover:bg-[#002244] transition-colors font-['Calistoga'] tracking-wider shadow-lg"
            >
              SIGN UP
            </button>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default SignUpStudent;