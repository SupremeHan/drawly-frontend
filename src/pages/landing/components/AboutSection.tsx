export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#FF9F1C]">
              About Drawly
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Drawly is a powerful SaaS platform designed to empower artists,
              designers, and creative professionals. Our mission is to make
              digital creation accessible and enjoyable for everyone, from
              beginners to experts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
