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
            {contents.pages.stage.stages.map((stage, index) => (
              <ScreenShiftCard
                key={index}
                layoutId={`${index}`}
                title={stage.performer}
                subtitle={`${stage.date} ${stage.time}`}
                description={stage.description}
                image={stage.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default StageContainer
