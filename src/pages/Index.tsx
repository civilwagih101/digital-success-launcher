import { useNavigate } from "react-router-dom";
import CountdownTimer from "@/components/CountdownTimer";
import Benefits from "@/components/Benefits";

const Index = () => {
  const handleClick = () => {
    window.location.href = "https://kk6.online/cl/i/o6k2lq";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            🚀 From Desk Job to Digital Freedom: Learn How to Earn $400–$700 Online Daily!
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Break free from the 9-to-5 grind and start your journey toward financial freedom today. 
            This free course gives you the step-by-step blueprint to succeed, even if you're a complete beginner!
          </p>

          <CountdownTimer />

          <button
            onClick={handleClick}
            className="bg-cta hover:bg-cta-hover text-white text-xl md:text-2xl font-bold px-8 py-4 rounded-lg 
                     transform transition-all duration-200 hover:scale-105 shadow-lg animate-fade-in"
          >
            📥 Download Your Free Course Now!
          </button>

          <Benefits />

          <div className="mt-12 bg-white p-6 rounded-lg shadow-md animate-slide-up">
            <h2 className="text-2xl font-bold mb-4">Why Act Now?</h2>
            <p className="text-lg text-gray-700">
              This is your chance to take control of your financial future — don't miss out!
            </p>
          </div>

          <footer className="mt-16 text-xl font-semibold text-gray-800 animate-fade-in">
            🌟 Your path to financial freedom starts here. Don't wait — act now!
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;