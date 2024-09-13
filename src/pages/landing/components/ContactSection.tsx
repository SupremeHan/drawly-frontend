import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#FF9F1C]">
          Get in Touch
        </h2>
        <div className="mx-auto max-w-[500px] bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-4">
            <Input
              placeholder="Name"
              className="border-blue-200 focus:border-[#FF9F1C]"
            />
            <Input
              type="email"
              placeholder="Email"
              className="border-blue-200 focus:border-[#FF9F1C]"
            />
            <Input
              placeholder="Subject"
              className="border-blue-200 focus:border-[#FF9F1C]"
            />
            <textarea
              className="w-full h-32 px-3 py-2 text-gray-700 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Message"
            ></textarea>
            <Button className="w-full bg-[#FF9F1C] hover:bg-blue-700 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
