export function nextPrevImg(current: number, max: number) {
  let nextImg = current + 1
  if (nextImg >= max) nextImg = 0
  
  let prevImg = current - 1
  if (prevImg < 0) prevImg = max - 1

  return {nextImg, prevImg}
}
