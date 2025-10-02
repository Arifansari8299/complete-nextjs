import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white flex flex-col">
      <Navbar />

      <main className="flex-grow flex flex-col justify-center items-center text-center px-6 md:px-0 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide">
          Welcome to <span className="text-indigo-400">Next.js</span> Learning
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
          A hands-on journey to master Next.js by building real-world projects, learning key concepts, and sharpening your React skills.
        </p>
        <a
          href="/about"
          className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg"
        >
          Explore Cheat Sheet & Topics
        </a>
      </main>

      <footer className="py-6 text-center text-gray-400 text-sm">
        &copy; 2025 Next.js Learning Journey — Made with ❤️ Arif
      </footer>
    </div>
  );
}
