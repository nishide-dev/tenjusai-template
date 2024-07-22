'use client'
import React from 'react'
import { motion } from 'framer-motion'

import { ShiftCard } from '@/components/ui/shift-card'

import { contents } from '@/contents/contents'

interface ScreenShiftCardProps {
  title: string
  description: string
  image: string
  layoutId: string
  className?: string
}

const ScreenShiftCard: React.FC<ScreenShiftCardProps> = ({
  title,
  description,
  image,
  className,
  layoutId,
}) => {
  const bgColor = 'bg-yellow-300'
  const topContent = (
    <div className="rounded-none text-primary bg-transparent relative group transition duration-200 border border-black">
      <div
        className={`absolute -bottom-2 -right-2 ${bgColor} h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200`}
      />
      <h3 className="text-lg p-2 text-center">{title}</h3>
    </div>
  )

  // Content that animates into top from the middle
  const topAnimateContent = (
    <>
      <motion.img
        transition={{ duration: 0.3, ease: 'circIn' }}
        src={image}
        layoutId={layoutId}
        width={78}
        height={100}
        alt="basic image"
        className="rounded-sm  absolute top-1.5 right-2 shadow-lg"
      />

      <motion.div
        className="h-[56px] w-[82px] absolute top-[4px] right-[6px] bg-transparent border-[2px] rounded-br-sm rounded-sm  border-neutral-800/80 border-dashed ml-auto mb-[6px]"
        initial={{ opacity: 0, scale: 1.6, y: 0, filter: 'blur(4px)' }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          transition: { delay: 0.35, duration: 0.15 },
        }}
        exit={{
          opacity: 0,
          y: 100,
          filter: 'blur(4px)',
          transition: { delay: 0.0, duration: 0 },
        }}
      />
    </>
  )

  // Content that animates from the top to the middle
  const middleContent = (
    <motion.img
      src={image}
      layoutId={layoutId}
      width={250}
      height={200}
      alt="basic image"
      className="rounded-sm border-2 border-white"
    />
  )

  // Content for the bottom part of the card that shows more details on hover
  const bottomContent = (
    <div className="pb-4">
      <div
        className={`flex w-full flex-col gap-1 ${contents.style.bgColorForgroundDark} border-t border-t-black/10 px-4 pb-4`}
      >
        <div className="font-sans font-medium text-white flex gap-1 pt-2.5 items-center">
          <p>詳しくはこちら</p>
        </div>
        <div className="w-full text-pretty font-sans leading-4 text-neutral-200 pb-2 h-screen">
          {description}
        </div>
      </div>
    </div>
  )
  return (
    <>
      <div className="flex justify-center items-center">
        <ShiftCard
          className={className}
          topContent={topContent}
          topAnimateContent={topAnimateContent}
          middleContent={middleContent}
          bottomContent={bottomContent}
        />
      </div>
    </>
  )
}

export default ScreenShiftCard
