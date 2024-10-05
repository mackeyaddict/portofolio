import Badge from "../../components/Badge";

export default function Contact() {
  return (
    <section>
      <div className="flex flex-col md:flex-row items-center justify-center p-4 sm:p-8 bg-gray-100 relative min-h-screen">
        <div className="w-full hidden md:block md:w-1/2 h-[300px] md:h-full mb-8 md:mb-0">
          <Badge />
        </div>
        <div className="w-full md:w-1/2 p-4 sm:p-8 md:p-12 lg:p-16 flex justify-center items-center">
          <form className="flex flex-col justify-center space-y-4 sm:space-y-6 p-6 sm:p-8 md:p-10 w-full max-w-xl border-4 sm:border-8 border-black bg-white shadow-neo-4 rounded-2xl sm:rounded-3xl transform -rotate-2">
            <h2 className="text-4xl md:text-5xl font-bold text-black border-b-4 sm:border-b-8 border-black pb-2 sm:pb-4 mb-4 sm:mb-6 uppercase tracking-wider">
              Hit Me Up
            </h2>
            <label className="flex flex-col">
              <span className="text-black font-bold text-lg sm:text-xl mb-1 sm:mb-2 uppercase">Name</span>
              <input
                type="text"
                className="border-2 sm:border-4 border-black p-2 sm:p-3 bg-blue-200 text-black font-semibold placeholder-gray-700 rounded-md"
                placeholder="Your Name"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-black font-bold text-lg sm:text-xl mb-1 sm:mb-2 uppercase">Email</span>
              <input
                type="email"
                className="border-2 sm:border-4 border-black p-2 sm:p-3 bg-green-200 text-black font-semibold placeholder-gray-700 rounded-md"
                placeholder="Your Email"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-black font-bold text-lg sm:text-xl mb-1 sm:mb-2 uppercase">Message</span>
              <textarea
                className="border-2 sm:border-4 border-black p-2 sm:p-3 bg-red-200 text-black font-semibold placeholder-gray-700 h-24 sm:h-32 rounded-md"
                placeholder="Your Message"
              />
            </label>
            <button className="bg-black text-white font-black text-lg sm:text-xl p-3 sm:p-4 border-2 sm:border-4 border-black hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-wider transform hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#000] rounded-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}