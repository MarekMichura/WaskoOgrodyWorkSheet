export interface IRippleBtnProps extends React.HTMLProps<HTMLButtonElement> {
  type?: 'submit' | 'reset' | 'button'
  [key: `data-${string}`]: string | number | boolean
}

export type IRippleBtnMotionProps = Omit<IRippleBtnProps, 'onAnimationStart' | 'onDragStart' | 'onDrag' | 'onDragEnd'>
