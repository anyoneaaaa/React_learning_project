// import React from 'react'
import { motion } from 'framer-motion'

function Marqee() {
    
  return (
    <div className="w-full rounded-tl-3xl rounded-tr-3xl py-20 bg-green-600">
        <div className="text border-t-2 border-zinc-300 border-b-2 flex whitespace-nowrap overflow-hidden gap-10">
            <motion.h1 initial = {{x:0}} animate={{x:"-100%"}} transition={{ ease:"linear",repeat:Infinity , duration:5}} className="text-[17vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-semibold -mb-[2vw] -mt-4 uppercase">we are ochi</motion.h1>
            <motion.h1 initial = {{x:0}} animate={{x:"-100%"}} transition={{ ease:"linear",repeat:Infinity , duration:5}} className="text-[17vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-semibold -mb-[2vw] -mt-4 uppercase">we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marqee