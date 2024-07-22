import React from 'react'

import ScrollVelocity from '@/components/ui/scroll-velocity'

import { contents } from '@/contents/contents'

const SponsorsDispatchCompaniesContainer: React.FC = () => {
  const dispatchCompanies = contents.sponsors.dispatchCompanies
  // 半分に分割
  const half = Math.ceil(dispatchCompanies.length / 2)
  const left = dispatchCompanies.slice(0, half)
  const right = dispatchCompanies.slice(half)
  return (
    <>
      <div className="w-full py-16">
        <ScrollVelocity velocity={1}>
          {left.map((company, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-full h-16 text-lg"
            >
              {company.name}
            </div>
          ))}
        </ScrollVelocity>
        <ScrollVelocity velocity={-1}>
          {right.map((company, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-full h-16 text-lg"
            >
              {company.name}
            </div>
          ))}
        </ScrollVelocity>
      </div>
    </>
  )
}

export default SponsorsDispatchCompaniesContainer
