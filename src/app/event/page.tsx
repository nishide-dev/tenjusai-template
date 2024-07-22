import { NextPage } from 'next'

import EventContainer from '@/components/pages/event/event-container'

import { contents } from '@/contents/contents'

const Event: NextPage = () => {
  return (
    <>
      <div className={`min-h-screen ${contents.style.bgColorForgroundLight}`}>
        <div className="px-3 sm:px-8 pt-24">
          <div className="w-full max-w-sm sm:max-w-5xl h-full mx-auto flex flex-col gap-4">
            <EventContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Event
