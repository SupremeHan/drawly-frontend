import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-orange-400">
          Get in Touch
        </h2>
        <div className="mx-auto max-w-[500px] bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-4">
            <Input
              placeholder="Name"
              className="border-[#4A4A4A] focus:border-orange-400"
            />
            <Input
              type="email"
              placeholder="Email"
              className="border-[#4A4A4A] focus:border-orange-400"
            />
            <Input
              placeholder="Subject"
              className="border-[#4A4A4A] focus:border-orange-400"
            />
            <textarea
              className="w-full h-32 px-3 py-2 text-gray-700 border border-[#4A4A4A] rounded-lg focus:outline-none focus:border-orange-400"
              placeholder="Message"
            ></textarea>
            <Button className="w-full bg-orange-400 hover:bg-[#4A4A4A]  text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
