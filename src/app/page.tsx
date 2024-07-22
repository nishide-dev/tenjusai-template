import { NextPage } from 'next'
import { Image } from '@nextui-org/react'

import HomeTitle from '@/components/pages/home/home-title'
import HomeThumbnail from '@/components/pages/home/home-thumbnail'

import { contents } from '@/contents/contents'

const Home: NextPage = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="fixed top-0 left-0 w-full h-screen z-10">
          {contents.pages.home.fullScreen && (
            <Image
              className="-z-10 object-cover w-screen h-screen fixed rounded-none"
              src={contents.pages.home.bgImage}
              alt="background"
            />
          )}
          <div
            className={`absolute inset-0 ${contents.pages.home.bgOpacity} ${contents.pages.home.bgColor} w-full max-w-sm sm:max-w-5xl h-full mx-auto flex flex-col items-center justify-center`}
          >
            <div className="flex flex-col md:flex-row justify-between w-full gap-12 md:gap-0">
              <HomeTitle />
              {!contents.pages.home.fullScreen && <HomeThumbnail />}
            </div>
          </div>
        </div>
        <div className="h-screen"></div>
      </div>
    </>
  )
}

export default Home
