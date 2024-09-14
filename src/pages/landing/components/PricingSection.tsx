import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function PricingSection() {
  const navigate = useNavigate();
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#4A4A4A]">
        Simple Pricing
      </h2>
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 text-[#4A4A4A]">
            Free Forever
          </h3>
          <p className="text-4xl font-bold mb-6 text-[#FF9F1C]">
            $0{' '}
            <span className="text-sm font-normal text-gray-600">/ month</span>
          </p>
          <ul className="mb-6 space-y-2">
            {[
              'Unlimited Boards',
              'Smart Shapes',
              'Unlimited Team Members',
              'Real-time Collaboration',
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => navigate('auth')}
            className="w-full bg-[#FF9F1C] hover:bg-gray-700 text-white"
          >
            Get Started for Free
          </Button>
        </CardContent>
      </Card>

      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Ready to Start Drawing?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of teams already using Drawly to bring their ideas to
          life.
        </p>
        <Button
          onClick={() => navigate('auth')}
          className="bg-[#FF9F1C] hover:bg-[#4A4A4A] text-white text-lg px-8 py-3"
        >
          <Zap className="w-5 h-5 mr-2" />
          Try Drawly Now
        </Button>
      </div>
    </section>
  );
}
