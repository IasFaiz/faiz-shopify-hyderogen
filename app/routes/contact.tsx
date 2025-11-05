export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you. Whether you have a project in mind or
            just want to learn more about our work, feel free to reach out.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Studio</h3>
              <p className="text-gray-600">123 Design Street</p>
              <p className="text-gray-600">New York, NY 10001</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Contact</h3>
              <p className="text-gray-600">info@studioabrash.com</p>
              <p className="text-gray-600">+1 (212) 555-1234</p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
              <p className="text-gray-600">Saturday: By appointment</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Find Us</h2>
        <div className="h-96 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}
