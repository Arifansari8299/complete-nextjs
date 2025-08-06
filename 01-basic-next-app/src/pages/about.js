import Navbar from "@/components/Navbar";

export default function About() {
  const topics = [
    {
      title: "Routing",
      description: "Next.js pages folder automatically maps files to routes.",
      code: `// src/pages/about.js\nexport default function About() {\n  return <h1>About Page</h1>;\n}`,
    },
    {
      title: "API Routes",
      description: "Create serverless API endpoints under /pages/api.",
      code: `// src/pages/api/hello.js\nexport default function handler(req, res) {\n  res.status(200).json({ message: 'Hello from API!' });\n}`,
    },
    {
      title: "Data Fetching",
      description: "Use getStaticProps or getServerSideProps to fetch data.",
      code: `export async function getStaticProps() {\n  const data = await fetch(...);\n  return { props: { data } };\n}`,
    },
    {
      title: "Image Optimization",
      description: "Use the Image component for optimized images.",
      code: `import Image from 'next/image';\n<Image src='/logo.png' width={100} height={100} alt='Logo' />`,
    },
    {
      title: "Static & Server Rendering",
      description: "Pages can be statically generated or server-side rendered.",
      code: `export async function getServerSideProps() {\n  return { props: {} };\n}`,
    },
    {
      title: "Dynamic Routes",
      description: "Use [param].js syntax for dynamic routing.",
      code: `// src/pages/blog/[slug].js\nexport default function BlogPost({ params }) {\n  return <h1>Blog: {params.slug}</h1>;\n}`,
    },
    {
      title: "Middleware",
      description: "Run code before a request is completed to control routing or headers.",
      code: `// middleware.js\nexport function middleware(req) {\n  // logic\n}`,
    },
    {
      title: "Environment Variables",
      description: "Use .env.local for environment variables.",
      code: `NEXT_PUBLIC_API_URL=https://api.example.com`,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-gray-900 text-white">
      <Navbar />
      <main className="max-w-7xl mx-auto p-6 md:p-12">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400">
          Next.js Cheat Sheet & Topics
        </h1>
        <p className="mb-12 text-center max-w-3xl mx-auto text-gray-300">
          This page summarizes important Next.js concepts with example code snippets for quick reference.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map(({ title, description, code }) => (
            <section
              key={title}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500 transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2 text-blue-300">{title}</h2>
              <p className="mb-4 text-gray-300">{description}</p>
              <pre className="bg-gray-900 p-3 rounded overflow-x-auto text-sm font-mono whitespace-pre-wrap">
                {code}
              </pre>
            </section>
          ))}
        </div>
      </main>
      <footer className="text-center py-6 text-gray-500 text-sm">
        &copy; 2025 Next.js Learning Journey
      </footer>
    </div>
  );
}