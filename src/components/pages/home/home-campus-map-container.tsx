import React from 'react'
import Image from 'next/image'

import UnapologetiTitle from '@/components/common/titles/unapologeti-title'

import { contents } from '@/contents/contents'

const HomeCampusMapContainer: React.FC = () => {
  return (
    <>
      <div
        className={`py-8 relative z-10 ${contents.style.bgColorForgroundLight} w-screen`}
      >
        <div className="w-full max-w-xs sm:max-w-xs h-full mx-auto mt-16">
          <UnapologetiTitle
            title="キャンパスマップ"
            className="text-center"
            color="yellow"
          />
        </div>
        <div className="w-full max-w-sm sm:max-w-5xl h-full mx-auto py-12">
          <Image
            src={contents.pages.home.campusMap.pcImage}
            className="hidden sm:block"
            alt="キャンパスマップ"
            width={1000}
            height={1000}
          />
          <Image
            src={contents.pages.home.campusMap.mobileImage}
            className="block sm:hidden"
            alt="キャンパスマップ"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </>
  )
}

export default HomeCampusMapContainer
