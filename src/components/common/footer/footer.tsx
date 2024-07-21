import React from 'react'

import { contents } from '@/contents/contents'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <div className="bg-black pt-24 pb-12 relative z-20 text-gray-100 flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="text-3xl font-semibold">{contents.footer.title}</div>
          <div className="text-xs">{contents.footer.description}</div>
          <div className="text-sm pt-8">{contents.footer.copyRight}</div>
        </div>
      </div>
    </>
  )
}

export default Footer
