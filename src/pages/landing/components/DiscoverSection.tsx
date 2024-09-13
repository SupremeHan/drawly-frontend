import { Button } from '@/components/ui/button';

export function DiscoverSection() {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-white bg-opacity-80 backdrop-blur-md"
    >
      <div className="flex flex-col items-center  text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-blue-600">
          Discover Drawly
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
          Drawly is a powerful SaaS platform designed to empower artists,
          designers, and creative professionals. Our mission is to make digital
          creation accessible and enjoyable for everyone, from beginners to
          experts.
        </p>

        <div className="flex items-center mt-16">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Intuitive Interface</h3>
              </div>
              <p className="text-gray-600">
                Create stunning designs with our easy-to-use tools, perfect for
                beginners and pros alike.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Cloud Sync</h3>
              </div>
              <p className="text-gray-600">
                Access your creations from anywhere, anytime. Your work is
                always at your fingertips.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Collaboration</h3>
              </div>
              <p className="text-gray-600">
                Work together in real-time with your team, no matter where they
                are.
              </p>
            </div>
          </div>

          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-[#FF9F1C]">
              Start for Free
            </h2>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Always Free Plan</h3>
                <p className="text-3xl font-bold text-[#FF9F1C]">$0/month</p>
                <ul className="text-gray-600 space-y-2">
                  <li>Basic drawing tools</li>
                  <li>5 projects</li>
                  <li>1GB storage</li>
                  <li>Community support</li>
                </ul>
              </div>
              <Button className="bg-[#FF9F1C] hover:bg-blue-700 text-white">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
