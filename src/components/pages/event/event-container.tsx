import React from 'react'

import ContainerTitle from '@/components/common/container/container-title'

import { contents } from '@/contents/contents'

const EventContainer: React.FC = () => {
  return (
    <>
      <div className={`py-8 ${contents.style.bgColorForgroundLight} w-full`}>
        <div className="w-full max-w-sm sm:max-w-5xl h-full mx-auto">
          <ContainerTitle title="EVENTS" className="text-center" />
        </div>
      </div>
    </>
  )
}

export default EventContainer