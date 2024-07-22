import { NextPage } from 'next'

import StageContainer from '@/components/pages/stage/stage-container'

import { contents } from '@/contents/contents'

const Stage: NextPage = () => {
  return (
    <>
      <div className={`min-h-screen ${contents.style.bgColorForgroundLight}`}>
        <div className="px-3 sm:px-8 pt-24">
          <div className="w-full max-w-sm sm:max-w-5xl h-full mx-auto flex flex-col gap-4">
            <StageContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Stage
