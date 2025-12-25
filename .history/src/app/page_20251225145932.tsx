import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <main className="h-screen w-full flex md:items-center md:justify-center bg-black/0.96 antialiased relative overflow-hidden">
      
      {/* 1. The Spotlight Component */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* 2. The Text Content */}
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-kinier-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Aceternity <br /> is ready.
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          If you see the spotlight effect hovering over this text, your Tailwind v4 setup is correct.
        </p>
      </div>
    </main>
  );
}