function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-white font-sans">
      
      {/* LEFT SIDE: Branding Panel */}
      <div 
        className="hidden lg:flex lg:w-1/2 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/IMG_20260305_132904 1.jpg')" }}
      >
        {/* Semi-transparent USTP Blue Overlay */}
        <div className="absolute inset-0 bg-[#003366]/80"></div>
        
        <div className="relative z-10 flex flex-col justify-center p-16 w-full max-w-2xl mx-auto">
          
          <div className="mb-12">
            {/* NEW: Your Logo SVG */}
            <img src="/logo.svg" alt="CourseTrackr Logo" className="w-20 h-20 mb-6 drop-shadow-lg" />
            
            <h1 className="text-[40px] font-bold text-white leading-tight mb-2 tracking-wide font-['Calistoga']">
              COURSETRACKR
            </h1>
            <h2 className="text-[25px] text-[#FFCC00] mb-6 font-['Calistoga']">
              Academic Management Tool
            </h2>
            <h3 className="text-[30px] text-white leading-tight mb-2 font-['Calistoga']">
              University of Science and Technology of Southern Philippines
            </h3>
            <p className="text-[25px] text-white italic opacity-90 font-['Castoro']">
              Computer Engineering Department
            </p>
          </div>

          <div className="space-y-6 mt-8">
            <div className="flex items-center gap-4">
              {/* NEW: Your Bullet SVG */}
              <img src="/bullet.svg" alt="Bullet point" className="w-4 h-4" />
              <p className="text-[20px] text-white font-['Calistoga']">Track your academic progress</p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/bullet.svg" alt="Bullet point" className="w-4 h-4" />
              <p className="text-[20px] text-white font-['Calistoga']">Get personalize course recommendations</p>
            </div>
            <div className="flex items-center gap-4">
              <img src="/bullet.svg" alt="Bullet point" className="w-4 h-4" />
              <p className="text-[20px] text-white font-['Calistoga']">Monitor prerequisite compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Dynamic Form Area */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 lg:p-12 relative">
        
        {/* The Form gets injected here! */}
        <div className="w-full max-w-[557px] flex-grow flex flex-col justify-center">
          {children}
        </div>

        {/* Footer Area with Privacy SVG */}
        <div className="w-full max-w-[557px] mt-8 flex flex-col items-center gap-2">
          <p className="text-[13px] text-black font-sans">
            Need help? Contact <a href="mailto:registrar@ustp.ph" className="text-[#003366] hover:underline font-bold">registrar@ustp.ph</a>
          </p>
          
          <div className="flex items-center gap-2 mt-2">
            {/* NEW: Your Privacy SVG */}
          </div>
        </div>

      </div>
    </div>
  );
}


const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const navigate = useNavigate();

export default AuthLayout;