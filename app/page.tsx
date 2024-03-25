import Profile from "@/components/profile";
import { Experience } from "@/components/experiences";

import { KartaakItems } from "@/components/experience-items";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      <header className="flex items-center justify-between w-full min-h-dvh">
        <div className="flex flex-col items-center">
          <p
            className="mb-2 font-extrabold text-5xl  ">Nice to meet you! 👋
          </p>
          <p className="mb-2 font-extrabold text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">{"I'm Navid"}</p>
          <p className="mb-2 font-extrabold text-2xl underline underline-offset-8 decoration-green-500">Front-End Developer</p>
        </div>

        <Profile />
      </header>

      <section className={'flex flex-col w-full items-center'}>
        <Experience />

        <div className="flex flex-col w-full relative top-[-160px]">
          <div className="flex items-center justify-between w-full">
            <p className="font-bold text-2xl">Kartaak</p>
            <a href={'https://app.kartaak.com/'} className="">https://app.kartaak.com/</a>
          </div>
         <KartaakItems/>
          <div className="flex-col flex pl-8">
            <p className="">• A Hybrid and Cross-platform application using
              PWA</p>
            <p className="">• Working with map using mapbox library</p>
            <p className="">• Experience working with server</p>
            <p className="">• Experience team management and task distribution</p>
          </div>
        </div>
      </section>

    </main>
  );
}
