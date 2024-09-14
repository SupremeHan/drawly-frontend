import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              <span className="text-[#4A4A4A]">Unleash Your </span>
              <span className="text-[#FF9F1C] animate-bounce inline-block">
                Creativity
              </span>
              <span className="text-[#4A4A4A]"> with Drawly</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-[#4A4A4A] md:text-xl animate-fadeIn">
              The fun, interactive board that turns your ideas into colorful
              masterpieces. Collaborate, create, and let your imagination soar!
            </p>
          </div>
          <div className="space-x-4">
            <Button
              onClick={() => navigate('/auth')}
              className="bg-[#FF9F1C] hover:bg-[#F7B267] text-white font-bold py-2 px-4  transition-all duration-300 hover:scale-105 hover:rotate-3 shadow-lg"
            >
              Start Drawing for Free
            </Button>
            <Button
              onClick={() => navigate('#banner')}
              variant="outline"
              className="border-4 border-[#4A4A4A] text-[#4A4A4A] hover:bg-[#4A4A4A] hover:text-white font-bold py-2 px-4 transition-all duration-300 hover:scale-105 hover:-rotate-3 shadow-lg"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
