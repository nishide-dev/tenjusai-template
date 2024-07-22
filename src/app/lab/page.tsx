import { NextPage } from 'next'

import LabContainer from '@/components/pages/lab/lab-container'
import UnapologetiTitle from '@/components/common/titles/unapologeti-title'

import { contents } from '@/contents/contents'

const Lab: NextPage = () => {
  return (
    <>
      <div className={`min-h-screen ${contents.style.bgColorForgroundLight}`}>
        <div className="px-3 sm:px-8 pt-24">
          <div className="w-full max-w-sm sm:max-w-5xl h-full mx-auto flex flex-col gap-4">
            <div className="w-full max-w-xs sm:max-w-xs h-full mx-auto mt-16 z-0">
              <UnapologetiTitle
                title="研究室発表"
                className="text-center text-xl md:text-3xl"
                color="yellow"
              />
            </div>
            <LabContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Lab
