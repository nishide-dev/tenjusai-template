import React from 'react'

import Link from 'next/link'

import UnapologetiButton from '@/components/common/buttons/unapologeti-button'
import { Color } from '@/lib/types'

interface DownloadButtonProps {
  text: string
  href: string
  className?: string
  color?: Color
  dark?: boolean
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  text,
  href,
  className,
  color,
  dark,
}) => {
  return (
    <>
      <Link href={href} passHref>
        <UnapologetiButton
          text={text}
          className={className}
          color={color}
          dark={dark}
        />
      </Link>
    </>
  )
}

export default DownloadButton
