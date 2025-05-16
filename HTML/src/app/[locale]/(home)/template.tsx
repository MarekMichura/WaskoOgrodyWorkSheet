'use client'

import {motion} from 'framer-motion'
import {useCallback, useEffect, useState} from 'react'

import useWindowsSize from '@/utils/hooks/useWindowsSize'
import {type IChildren} from '@/utils/types/IChildren'

import s from './css.module.scss'

function HomeTemplate({children}: IChildren) {
  const [winSize, setWinSize] = useState(0)
  const [pos, setPos] = useState({x: 0, y: 0})

  const changeSize = useCallback(() => {
    setWinSize(Math.max(window.innerHeight, window.innerWidth))
  }, [])
  useWindowsSize(changeSize)

  useEffect(() => {
    function mouseDown(e: MouseEvent) {
      setPos({x: e.clientX, y: e.clientY})
    }

    window.addEventListener('mousedown', mouseDown)
    return () => {
      window.removeEventListener('mousedown', mouseDown)
    }
  })

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [])

  return (
    <>
      <motion.main transition={{duration: 0.3}} exit={{opacity: 0.9}} style={{minHeight: '100dvh'}}>
        {children}
      </motion.main>

      <aside>
        <motion.div
          variants={{
            close: {opacity: 1, '--radius': `0px`, '--posX': `${pos.x}px`, '--posY': `${pos.y}px`},
            open: {opacity: 0, '--radius': `${winSize}px`, '--posX': '', '--posY': ''},
          }}
          transition={{duration: 0.2}}
          initial={'close'}
          className={s.black}
          exit={'close'}
          animate={'open'}
        />
      </aside>
    </>
  )
}

export default HomeTemplate
