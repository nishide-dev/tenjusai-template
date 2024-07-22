import React from 'react'

import ContainerTitle from '@/components/common/container/container-title'
import ScreenShiftCard from '@/components/common/cards/screen-shift-card'

import { contents } from '@/contents/contents'

const EventContainer: React.FC = () => {
  return (
    <>
      <div className={`py-8 ${contents.style.bgColorForgroundLight} w-full`}>
        <div className="w-full max-w-sm sm:max-w-5xl h-full mx-auto">
          <ContainerTitle title="EVENTS" className="text-center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8 md:py-12">
            {contents.pages.event.events.map((event, index) => (
              <ScreenShiftCard
                key={index}
                layoutId={`${index}`}
                title={event.name}
                subtitle={`${event.datetime}`}
                description={event.description}
                image={event.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default EventContainer
