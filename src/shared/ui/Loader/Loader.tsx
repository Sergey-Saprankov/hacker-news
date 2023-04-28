import React, { FC, memo } from 'react'

import cls from './Loader.module.scss'

interface LoaderProps {
  className?: string
}

export const Loader: FC<LoaderProps> = memo(({ className = '' }) => {
  return (
    <div className={cls.Loader}>
      <span className={cls.loader}></span>
    </div>
  )
})
