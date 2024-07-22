import React from 'react'

import { Color } from '@/lib/types'

interface UnapologetiTitleProps {
  title: string
  className?: string
  color?: Color
  dark?: boolean
}

const UnapologetiTitle: React.FC<UnapologetiTitleProps> = ({
  title,
  className,
  color,
  dark,
}) => {
  const bgColor = `bg-${color ? color : 'yellow'}-300`
  const borderColor = `border-${dark ? 'white' : 'black'}`
  const textColor = `text-${dark ? 'black' : 'black'}` // text-whiteにするかは要検討
  return (
    <>
      <div
        className={`px-8 py-2 border ${textColor} bg-transparent ${borderColor} relative group transition duration-200 ${className}`}
      >
        <div
          className={`absolute -bottom-2 -right-2 ${bgColor} h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200`}
        />
        <span className="relative">{title}</span>
      </div>
    </>
  )
}

export default UnapologetiTitle
