'use client'

import {useEffect, useRef, useState} from 'react'

import {headerDownVariations, headerUpVariations} from './_data/headerVariations'
import {type IHeaderPosition} from './_type/IHeaderPosition'
import s from './css.module.scss'
import HeaderDown from './down/HeaderDown'
import HeaderUp from './up/headerUp'

function HomeHeader() {
  const [position, setPosition] = useState<IHeaderPosition>('down')
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY
      const delta = currentY - lastScrollY.current

      if (!ticking.current) {
        requestAnimationFrame(() => {
          const newPosition: IHeaderPosition =
            currentY < window.innerHeight ? 'down' : delta > 10 ? 'up' : delta < -10 ? 'down' : position

          if (newPosition !== position) {
            setPosition(newPosition)
          }

          lastScrollY.current = currentY
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, {passive: true})
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [position])

  return (
    <header className={s.header}>
      <HeaderUp animate={position} variants={headerUpVariations} />
      <HeaderDown animate={position} variants={headerDownVariations} />
    </header>
  )
}

export default HomeHeader
