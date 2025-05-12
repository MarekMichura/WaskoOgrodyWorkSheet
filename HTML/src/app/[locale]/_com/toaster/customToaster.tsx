'use client'

import {useToaster, resolveValue, type Toast} from 'react-hot-toast/headless'

import s from './css.module.scss'

export default function CustomToaster() {
  const {toasts, handlers} = useToaster({duration: 10000})
  const {startPause, endPause, calculateOffset, updateHeight} = handlers

  return (
    <aside onMouseEnter={startPause} onMouseLeave={endPause} className={s.container}>
      {toasts.map((ele: Toast) => {
        const offset = calculateOffset(ele, {reverseOrder: true, gutter: 8})
        const transform = `translateY(-${offset}px)`
        const opacity = ele.visible ? 1 : 0

        const ref = (event: HTMLDivElement) => {
          if (event && !ele.height) {
            const height = event.getBoundingClientRect().height
            updateHeight(ele.id, height)
          }
        }

        return (
          <div key={ele.id} ref={ref} style={{transform, opacity}} className={s.toast}>
            {resolveValue(ele.message, ele)}
          </div>
        )
      })}
    </aside>
  )
}
