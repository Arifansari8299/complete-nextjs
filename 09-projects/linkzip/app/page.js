import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col items-center justify-center gap-4">
          <p className="text-3xl font-bold">The Best URL shortner in the world</p>
          <p className="px-56 text-center">We are the most straightforward URL shortner in the world. Most of the url shortener will track you or ask you to give your details for login. we understand your needs and hence we have created this URL shortner</p>
          <div className="flex gap-3">
            <Link href="/shorten"><button className="bg-purple-700 px-4 py-2 rounded-lg shadow-md font-bold text-white cursor-pointer hover:bg-purple-500 transition duration-300">Try Now</button></Link>
            <Link href="/github"><button className="bg-purple-700 px-4 py-2 rounded-lg shadow-md font-bold text-white cursor-pointer hover:bg-purple-500 transition duration-300">GitHub</button></Link>
          </div>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src="/vector.png" fill={true} />
        </div>
      </section>
    </main>
  );
}
