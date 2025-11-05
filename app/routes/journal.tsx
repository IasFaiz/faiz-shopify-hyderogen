export default function JournalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Journal</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">May 15, 2023</div>
            <h2 className="text-xl font-semibold mb-2">
              The Future of Sustainable Design
            </h2>
            <p className="text-gray-600 mb-4">
              Exploring innovative materials and techniques that are shaping the
              future of eco-friendly design.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More
            </a>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">April 28, 2023</div>
            <h2 className="text-xl font-semibold mb-2">
              Behind the Scenes: Our Latest Project
            </h2>
            <p className="text-gray-600 mb-4">
              A look into our design process and the challenges we overcame in
              our recent commercial space renovation.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More
            </a>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">April 12, 2023</div>
            <h2 className="text-xl font-semibold mb-2">
              Design Trends to Watch in 2023
            </h2>
            <p className="text-gray-600 mb-4">
              Our team shares insights on the emerging trends that are defining
              interior and architectural design this year.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More
            </a>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">March 30, 2023</div>
            <h2 className="text-xl font-semibold mb-2">
              The Art of Space Planning
            </h2>
            <p className="text-gray-600 mb-4">
              Understanding the fundamentals of effective space planning and how
              it impacts the functionality of a design.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More
            </a>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">March 15, 2023</div>
            <h2 className="text-xl font-semibold mb-2">
              Color Psychology in Design
            </h2>
            <p className="text-gray-600 mb-4">
              How color choices influence mood and behavior in residential and
              commercial spaces.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More
            </a>
          </div>
        </article>

        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <div className="text-sm text-gray-500 mb-2">February 28, 2023</div>
            <h2 className="text-xl font-semibold mb-2">
              Spotlight on Local Artisans
            </h2>
            <p className="text-gray-600 mb-4">
              Celebrating the craftspeople and artisans who bring our designs to
              life with their exceptional skills.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read More
            </a>
          </div>
        </article>
      </div>

      <div className="mt-12 text-center">
        <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
          Load More Articles
        </button>
      </div>
    </div>
  );
}
