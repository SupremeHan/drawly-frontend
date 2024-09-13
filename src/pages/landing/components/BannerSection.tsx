export function BannerSection() {
  return (
    <section id="banner">
      <div className="lg:col-span-2 mt-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-200 px-4 py-2 flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div className="flex-1 text-center text-sm text-gray-600">
              drawly.app
            </div>
          </div>
          <div className="p-4">
            <img
              src="https://placehold.co/800x400.png"
              alt="Drawly Interface"
              className="rounded-md w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
