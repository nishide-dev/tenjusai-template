import { NextPage } from 'next'
import { Image } from '@nextui-org/react'

import HomeTitle from '@/components/pages/home/home-title'
import SponsorsContainer from '@/components/common/sponsors/sponsors-container'

import { contents } from '@/contents/contents'

const Home: NextPage = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="fixed top-0 left-0 w-full h-screen z-10">
          <Image
            className="-z-10 object-cover w-screen h-screen fixed rounded-none"
            src={'/images/sample/blue-pastel.jpg'}
            alt="background"
          />
          <div
            className={`absolute inset-0 ${contents.pages.home.bgOpacity} ${contents.pages.home.bgColor} h-screen`}
          >
            <HomeTitle />
          </div>
        </div>
        <div className="h-screen"></div>
        <SponsorsContainer />
      </div>
    </>
  )
}

export default Home
