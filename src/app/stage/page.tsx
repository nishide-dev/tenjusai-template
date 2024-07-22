import { NextPage } from 'next'

import StageContainer from '@/components/pages/stage/stage-container'

const Stage: NextPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
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
