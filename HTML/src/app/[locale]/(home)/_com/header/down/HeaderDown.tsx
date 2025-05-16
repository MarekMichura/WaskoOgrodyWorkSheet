import {motion, useAnimation} from 'framer-motion'
import {useTranslations} from 'next-intl'
import {forwardRef, useCallback, useContext, useEffect, useRef, useState} from 'react'

import RippleBtn from '@/components/form/ripple/rippleBtn'
import homeLayoutContext from '@/utils/context/homeLayoutContext/default'
import useMenu, {EMenuState} from '@/utils/hooks/useMenu'
import useWindowsSize from '@/utils/hooks/useWindowsSize'

import {backVariations, navVariations} from '../_data/downVariations'
import {type IStateHeaderDownBuble} from '../_type/IStateHeaderDownBuble'

import s from './css.module.scss'
import HeaderScrollBtn from './headerScrollBtn'

const HeaderDown = forwardRef<HTMLElement>(({}, ref) => {
  const t = useTranslations('sections')
  const [disableMenu, setDisableMenu] = useState(false)
  const [menu, menuChange, menuClose] = useMenu({disableScrollOnOpen: true, disable: disableMenu})

  const changeSize = useCallback(() => {
    if (window.innerWidth > 800 && !disableMenu) setDisableMenu(true)
    else if (window.innerWidth <= 800 && disableMenu) setDisableMenu(false)
  }, [disableMenu])
  useWindowsSize(changeSize)

  // ====================================================== \\
  const animate = useAnimation()

  const refBuble = useRef<HTMLLIElement>(null)
  const refContainer = useRef<HTMLUListElement>(null)
  const refChildren = useRef<(HTMLLIElement | null)[]>([])

  const [{sections}] = useContext(homeLayoutContext)
  const [{hoveredID, selectedID}, setBuble] = useState<IStateHeaderDownBuble>({})
  const bubblePos = hoveredID ?? selectedID ?? 0

  useEffect(() => {
    const id = sections.findLastIndex((a) => a.check)
    if (id === -1) setBuble((prev) => ({...prev, selectedID: undefined}))
    else setBuble((prev) => ({...prev, selectedID: id}))
  }, [sections])

  useEffect(() => {
    const buble = refBuble.current
    const container = refContainer.current
    const element = refChildren.current[bubblePos]

    if (buble === null || container === null || element === null) {
      animate.start({opacity: 0})
      return
    }

    const eleRect = element.getBoundingClientRect()
    const conRect = container.getBoundingClientRect()

    const width = element.clientWidth
    const height = element.clientHeight
    const left = eleRect.left - conRect.left
    const top = eleRect.top - conRect.top

    const animation = {opacity: 1, width, height, left, top}
    if (buble.style.opacity === '0') animate.set(animation)
    else animate.start(animation)
  }, [animate, bubblePos, disableMenu])

  const setRef = useCallback((index: number) => {
    return (element: HTMLLIElement | null) => {
      refChildren.current[index] = element
    }
  }, [])

  // prettier-ignore
  const click = useCallback((i: number) => {return () => {
    const top = sections[i].scroll

    menuClose()
    requestAnimationFrame(() => window.scroll({top, behavior: 'smooth'}))
  }}, [menuClose, sections])

  const hover = useCallback((i: number) => {
    setBuble((prev) => ({...prev, hoveredID: i}))
  }, [])

  const leave = useCallback(() => {
    setBuble((prev) => ({...prev, hoveredID: undefined}))
  }, [])

  if (sections.length === 0) return
  return (
    <section ref={ref} className={s.section}>
      <RippleBtn onClick={menuChange} className={s.menuBtn}>
        {t(sections[bubblePos].name ?? 'select')}
      </RippleBtn>

      <motion.nav className={s.nav} variants={navVariations} animate={menu}>
        <motion.ul className={s.menuCon} ref={refContainer}>
          <motion.li className={s.menuBack} initial={{opacity: 0}} ref={refBuble} animate={animate} />
          {sections.map(({name}, i) => (
            <HeaderScrollBtn //
              key={name}
              id={i}
              text={name}
              hover={hover}
              leave={leave}
              click={click(i)}
              ref={setRef(i)}
            />
          ))}
        </motion.ul>
      </motion.nav>

      <motion.div
        className={s.back}
        onClick={menuClose}
        animate={menu === EMenuState.open ? 'open' : 'close'}
        initial={{opacity: 0}}
        variants={backVariations}
      />
    </section>
  )
})

HeaderDown.displayName = 'HeaderDown'
export default motion.create(HeaderDown)
