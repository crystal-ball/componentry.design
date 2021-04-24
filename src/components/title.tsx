import React from 'react'

type TitleProps = {
  children: React.ReactNode
  className?: string
}

export default function Title({ children, className }: TitleProps): JSX.Element {
  return <h1 className={className}>{children}</h1>
}
