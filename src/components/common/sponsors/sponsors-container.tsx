import React from 'react'

import SponsorsMarquee from '@/components/common/sponsors/sponsors-marquee'
import ContainerTitle from '@/components/common/container/container-title'

import { contents } from '@/contents/contents'

const SponsorsContainer: React.FC = () => {
  return (
    <>
      <div
        className={`py-8 relative z-10 ${contents.style.bgColorForgroundLight} w-screen`}
      >
        <div className="w-full max-w-sm sm:max-w-5xl h-full mx-auto">
          <ContainerTitle title="SPONSORS" className="text-center" />
        </div>
        <SponsorsMarquee />
      </div>
    </>
  )
}

export default SponsorsContainer