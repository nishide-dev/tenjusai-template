import { NextPage } from 'next'

import LabContainer from '@/components/pages/lab/lab-container'

const Lab: NextPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="px-3 sm:px-8 pt-24">
          <div className="w-full max-w-sm sm:max-w-5xl h-full mx-auto flex flex-col gap-4">
            <LabContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Lab