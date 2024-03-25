"use client";

import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import navid from "@/public/navid.jpg";

export default function Profile() {
  return <BackgroundGradient className="rounded-3xl bg-white max-w-xs dark:bg-zinc-900 hidden md:block" containerClassName={'hidden md:block'}>

    <Image src={navid} alt={'navid'} className={'rounded-3xl'} />
  </BackgroundGradient>;
}