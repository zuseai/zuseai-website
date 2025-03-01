'use client'

import { motion } from 'framer-motion'
import { Montserrat, Roboto } from 'next/font/google'
import { BackgroundLines } from '../components/ui/background-lines'

const montserrat = Montserrat({ subsets: ['latin'], weight: '700' })
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Page() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex items-center justify-center">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="relative flex flex-col gap-4 items-center justify-center text-center z-10 p-4"
        >
          <h1
            className={`${montserrat.className} text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200`}
          >
            ZuseAI
          </h1>
          <p
            className={`${roboto.className} text-lg sm:text-xl md:text-3xl text-gray-400`}
          >
            Coming Soon
          </p>
          <p
            className={`${roboto.className} text-md sm:text-lg md:text-xl text-gray-400`}
          >
            Contact:{' '}
            <a
              href="mailto:contact@zuseai.in"
              className="underline text-blue-400"
            >
              contact@zuseai.in
            </a>
          </p>
        </motion.div>
      </BackgroundLines>
    </div>
  )
}
