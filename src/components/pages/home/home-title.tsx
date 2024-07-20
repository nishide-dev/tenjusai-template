import React from 'react'

import { TextAnimate } from '@/components/ui/text-animate'

import { contents } from '@/contents/contents'

const HomeTitle: React.FC = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center">
        <div className="">
          <TextAnimate
            text={`第${contents.pages.home.th}回`}
            type="rollIn"
            className="text-2xl md:text-4xl text-white font-bold mx-auto max-w-sm sm:max-w-5xl mt-0 py-2"
          />
          <TextAnimate
            text="豊田工業大学 大学祭"
            type="rollIn"
            className="text-xl md:text-3xl text-white font-bold mx-auto max-w-sm sm:max-w-5xl mt-0 pb-2"
          />
          <TextAnimate
            text="天樹祭"
            type="rollIn"
            className="text-5xl md:text-7xl text-white font-bold mx-auto max-w-sm sm:max-w-5xl mt-0 py-4"
          />
        </div>
      </div>
    </>
  )
}

export default HomeTitle
