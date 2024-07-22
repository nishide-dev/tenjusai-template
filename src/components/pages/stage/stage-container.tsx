import React from 'react'

import ContainerTitle from '@/components/common/container/container-title'
import ScreenShiftCard from '@/components/common/cards/screen-shift-card'

import { contents } from '@/contents/contents'

const StageContainer: React.FC = () => {
  return (
    <>
      <div className={`py-8 ${contents.style.bgColorForgroundLight} w-full`}>
        <div className="w-full max-w-sm sm:max-w-5xl h-full mx-auto">
          <ContainerTitle title="STAGE EVENTS" className="text-center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 md:py-12">
            <ScreenShiftCard
              layoutId={`1`}
              title="バンド"
              description="Description"
              image="/images/sample/blue-pastel.jpg"
            />
            <ScreenShiftCard
              layoutId={`2`}
              title="バンド"
              description="Description"
              image="/images/sample/pink-pastel.jpg"
            />
            <ScreenShiftCard
              layoutId={`3`}
              title="バンド"
              description="Description"
              image="/images/sample/pink-pastel.jpg"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default StageContainer
