import React from 'react'

import { TextAnimate } from '@/components/ui/text-animate'
import DownloadButton from '@/components/common/buttons/download-button'

import { contents } from '@/contents/contents'

const HomeTitle: React.FC = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center">
        <div className="">
          <TextAnimate
            text={`第${contents.pages.home.th}回`}
            type="popIn"
            className="text-lg md:text-2xl text-white font-bold mx-auto max-w-sm sm:max-w-5xl mt-0 py-2 pb-0"
          />
          <TextAnimate
            text="豊田工業大学 大学祭"
            type="popIn"
            className="text-lg md:text-2xl text-white font-bold mx-auto max-w-sm sm:max-w-5xl mt-3 py-0 pb-2"
          />
          <TextAnimate
            text="天樹祭"
            type="popIn"
            className="text-4xl md:text-7xl text-white font-bold mx-auto max-w-sm sm:max-w-5xl mt-5 py-2"
          />
          <div className="mt-12 mx-auto max-w-sm sm:max-w-5xl">
            <DownloadButton
              text={contents.pamphlet.title}
              href={contents.pamphlet.url}
              className="mx-8"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeTitle
