import { NextPage } from 'next'

import StallContainer from '@/components/pages/stall/stall-container'
import UnapologetiTitle from '@/components/common/titles/unapologeti-title'

import { contents } from '@/contents/contents'

const Stall: NextPage = () => {
  return (
    <>
      <div className={`min-h-screen ${contents.style.bgColorForgroundLight}`}>
        <div className="px-3 sm:px-8 pt-24">
          <div className="w-full max-w-sm sm:max-w-5xl h-full mx-auto flex flex-col gap-4">
            <div className="w-full max-w-xs sm:max-w-xs h-full mx-auto mt-16 z-0">
              <UnapologetiTitle
                title="屋台"
                className="text-center text-xl md:text-3xl"
                color="yellow"
              />
            </div>
            <StallContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Stall
