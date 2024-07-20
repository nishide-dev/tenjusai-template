import React from 'react'

interface ContainerTitleProps {
  title: string
  className?: string
}

const ContainerTitle: React.FC<ContainerTitleProps> = ({
  title,
  className,
}) => {
  return (
    <>
      <div className={`font-semibold text-3xl sm:text-4xl pt-8 ${className}`}>
        {title}
      </div>
    </>
  )
}

export default ContainerTitle
