import Profile from "@/components/profile";
import { Experience } from "@/components/experiences";

import { FekroonehItems, KartaakItems, MattersItems } from "@/components/experience-items";
import BackBeam from "@/components/back-beam";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:px-24 px-5">
      <header className="flex items-center justify-around w-full min-h-dvh">
        <BackBeam />
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


        <div className="flex flex-col w-full relative top-[-160px] mb-8">
          <div className="flex items-center justify-between w-full">
            <p className="font-bold text-2xl">Kartaak</p>
            <a href={'https://app.kartaak.com/'} target={'_blank'} className="">app.kartaak.com</a>
          </div>
          <KartaakItems />
          <div className="flex-col flex pl-8">
            <p className="">• A Hybrid and Cross-platform application using
                            PWA</p>
            <p className="">• Working with map using mapbox library</p>
            <p className="">• Experience working with server</p>
            <p className="">• Experience team management and task distribution</p>
          </div>
        </div>


        <div className="flex flex-col w-full relative top-[-160px] mb-8">
          <div className="flex items-center justify-between w-full">
            <p className="font-bold text-2xl">Fekrooneh</p>
            <a href={'https://fekrooneh.com/'} target={'_blank'} className="">fekrooneh.com</a>
          </div>
          <FekroonehItems />
          <div className="flex-col flex pl-8">
            <p className="">• using next.js for better optimization and good SEO</p>
            <p className="">• build features like draggable element and building books for children</p>
            <p className="">• use different state managers like zustand and jotai</p>
          </div>
        </div>

        <div className="flex flex-col w-full relative top-[-160px]">
          <div className="flex items-center justify-between w-full">
            <p className="font-bold text-2xl">Dana Energy (Matters)</p>
            <a href={'https://matters.danaenergy.com/'} target={'_blank'} className="">matters.danaenergy.com</a>
          </div>
          <MattersItems />
          <div className="flex-col flex pl-8">
            <p className="">• A full-fledged PWA with data caching and push notification</p>
            <p className="">• working on high performance despite complex pages and large assets </p>
            {/*<p className="">• w</p>*/}
          </div>
        </div>
      </section>

      <section className={'w-full flex flex-col pb-20'}>
        <h2 className="text-[3rem] font-bold mb-4 self-center">Contact me</h2>
        <div className="flex-col flex gap-3 pl-8">
          <a href={'mailto:navid.talebe@gmail.com'} className="">• navid.talebe@gmail.com</a>
          <a href={'https://t.me/navid7080'} target={'_blank'} className="">• t.me/navid7080</a>
          <a href={'https://github.com/navid70'} target={'_blank'} className="">• github/navid70</a>
        </div>

      </section>

    </main>
  );
}
