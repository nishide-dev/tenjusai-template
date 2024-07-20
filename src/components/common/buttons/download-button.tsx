import React from 'react'

import { Button, Link } from '@nextui-org/react'

interface DownloadButtonProps {
  text: string
  href: string
  className?: string
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  text,
  href,
  className,
}) => {
  return (
    <>
      <Button
        size="lg"
        as={Link}
        href={href}
        className={`bg-blue-500 hover:bg-blue-700 text-white text-sm md:text-md rounded-full ${className}`}
      >
        {text}
      </Button>
    </>
  )
}

export default DownloadButton
