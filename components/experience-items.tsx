"use client"

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import react from '@/public/react.png'
import css from '@/public/css.png'
import html from '@/public/html.png'
import js from '@/public/js.png'
import next from '@/public/next.png'
import ts from '@/public/ts.png'
import pwa from '@/public/pwa.png'

export function KartaakItems() {
  const kartaakItems = [
    {
      id: 1,
      name: "HTML",
      image: html,
    },
    {
      id: 2,
      name: "CSS",
      image: css,
    },
    {
      id: 3,
      name: "typescript",
      image: ts,
    },
    {
      id: 4,
      name: "react",
      image: react,
    },
    {
      id: 5,
      name: "PWA",
      image: pwa,
    },
  ]

  return <div className="flex flex-row items-center justify-center my-4 w-fit">
    <AnimatedTooltip items={kartaakItems} />
  </div>
}