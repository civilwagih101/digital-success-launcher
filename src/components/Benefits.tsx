import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "How to earn $400–$700 daily using proven strategies",
    "Real-world examples and actionable steps",
    "Perfect for beginners and experienced individuals alike",
  ];

  return (
    <div className="my-12 animate-slide-up">
      <h2 className="text-2xl font-bold mb-6">What You'll Gain from This Course:</h2>
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="text-green-500 mt-1">
              <Check className="h-5 w-5" />
            </div>
            <p className="text-lg">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;