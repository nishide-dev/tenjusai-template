import React from 'react'
import Image from 'next/image'

import { contents } from '@/contents/contents'

const HomeThumbnail: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl md:h-screen flex flex-col justify-center">
      <div className="border border-black bg-transparent relative group transition duration-200">
        <div
          className={`absolute -bottom-3 bg-yellow-300 border border-black -right-3 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200`}
        />
        <Image
          src={contents.pages.home.bgImage}
          height={400}
          width={1000}
          className="-z-20"
          alt="background"
        />
      </div>
    </div>
  )
}

export default HomeThumbnail
