import React from 'react'

import ContainerTitle from '@/components/common/container/container-title'
import ScreenShiftCard from '@/components/common/cards/screen-shift-card'

import { contents } from '@/contents/contents'

const StallContainer: React.FC = () => {
  return (
    <>
      <div className={`py-8 ${contents.style.bgColorForgroundLight} w-full`}>
        <div className="w-full max-w-sm sm:max-w-5xl h-full mx-auto">
          <ContainerTitle title="STALLS" className="text-center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 md:py-12">
            {contents.pages.stall.stalls.map((stall, index) => (
              <ScreenShiftCard
                key={index}
                layoutId={`${index}`}
                title={stall.name}
                subtitle={`詳細はこちら`}
                description={stall.description}
                image={stall.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default StallContainer
