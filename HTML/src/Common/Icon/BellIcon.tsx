import {useRef, useEffect} from 'react'

import {defAnimate} from './defAnimate'

import {IChangeMenu, Icon} from '.'

const pathOpen = `
  M113.5-162L113.5-298L181.5-298L181.5-544C181.5-610 200.5-669.667 238.5-723C276.5-776.333 327.5-811.667 391.5-829L391.5-846C391.5-870.28 400.11-891.017 417.33-908.21C434.544-925.403 455.307-934 479.62-934C503.927-934 524.65-925.403 541.79-908.21C558.93-891.017 567.5-870.28 567.5-846L567.5-829C631.5-812.333 682.667-777.567 721-724.7C759.334-671.833 778.5-611.6 778.5-544L778.5-298L846.5-298L846.5-162L113.5-162ZM480.46-26C453.187-26 430.207-35.42 411.52-54.26C392.84-73.093 383.5-95.673 383.5-122L576.5-122C576.5-95.333 567.077-72.667 548.23-54C529.39-35.333 506.8-26 480.46-26ZM190.429-431.241C190.429-513.248 208.466-588.901 244.539-658.201C280.613-727.508 329.576-784.521 391.429-829.241L466.429-727.241C420.463-693.621 383.969-651.224 356.949-600.051C329.936-548.884 316.429-492.614 316.429-431.241L190.429-431.241ZM643.538-430.993C643.538-492.326 630.032-548.586 603.018-599.773C575.998-650.953 539.505-693.36 493.538-726.993L567.538-828.993C629.392-784.253 678.522-727.223 714.928-657.903C751.335-588.576 769.538-512.94 769.538-430.993L643.538-430.993Z
`
const pathClose = `
  M113.5-155L113.5-291L181.5-291L181.5-537C181.5-603 200.5-662.666 238.5-716C276.5-769.333 327.5-804.666 391.5-822L391.5-839C391.5-863.28 400.11-884.016 417.33-901.21C434.544-918.403 455.307-927 479.62-927C503.927-927 524.65-918.403 541.79-901.21C558.93-884.016 567.5-863.28 567.5-839L567.5-822C631.5-805.333 682.667-770.566 721-717.7C759.334-664.833 778.5-604.6 778.5-537L778.5-291L846.5-291L846.5-155L113.5-155ZM480.46-19C453.187-19 430.207-28.42 411.52-47.26C392.84-66.093 383.5-88.673 383.5-115L576.5-115C576.5-88.333 567.077-65.666 548.23-47C529.39-28.333 506.8-19 480.46-19ZM-12.5-536C-12.5-618.006 5.537-693.66 41.61-762.96C77.684-832.266 126.647-889.28 188.5-934L263.5-832C217.534-798.38 181.04-755.983 154.02-704.81C127.007-653.643 113.5-597.373 113.5-536L-12.5-536ZM846.5-536C846.5-597.333 832.994-653.593 805.98-704.78C778.96-755.96 742.467-798.366 696.5-832L770.5-934C832.354-889.26 881.484-832.23 917.89-762.91C954.297-693.583 972.5-617.946 972.5-536L846.5-536Z
`

export const BellIcon = ({status, ...p}: IChangeMenu) => {
  const animationOpen = useRef<SVGAnimateElement>(null)
  const animationClose = useRef<SVGAnimateElement>(null)

  useEffect(() => {
    switch (status) {
      case true: {
        animationOpen.current?.beginElement()
        break
      }
      case false: {
        animationClose.current?.beginElement()
        break
      }
    }
  }, [status, animationClose, animationOpen])

  return (
    <Icon {...p}>
      <path d={pathOpen}>
        <animate {...defAnimate} ref={animationClose} to={pathClose} />
        <animate {...defAnimate} ref={animationOpen} to={pathOpen} />
      </path>
    </Icon>
  )
}
