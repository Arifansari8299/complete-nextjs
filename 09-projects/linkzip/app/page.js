import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className=" flex flex-col items-center justify-center gap-4">
          <p className="text-2xl font-bold">The Best URL shortner in the world</p>
          <p>We are the most straightforward URL shortner in the world</p>
        </div>
        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src="/vector.png" fill={true} />
        </div>
      </section>
    </main>
  );
}
