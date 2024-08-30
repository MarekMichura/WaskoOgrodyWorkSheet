import { SVG } from "./style"

export const userIcon = () => {
  return <SVG width="30" viewBox="0 0 1024 1024">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z" />
  </SVG>
}
export function passIcon() {
  return <SVG viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd"
      d="M5.5 10V7C5.5 5.27609 6.18482 3.62279 7.40381 2.40381C8.62279 1.18482 10.2761 0.5 12 0.5C13.7239 0.5 15.3772 1.18482 16.5962 2.40381C17.8152 3.62279 18.5 5.27609 18.5 7V10H19C20.6569 10 22 11.3431 22 13V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V13C2 11.3431 3.34315 10 5 10H5.5ZM9.52513 4.52513C10.1815 3.86875 11.0717 3.5 12 3.5C12.9283 3.5 13.8185 3.86875 14.4749 4.52513C15.1313 5.1815 15.5 6.07174 15.5 7V10H8.5V7C8.5 6.07174 8.86875 5.1815 9.52513 4.52513Z" />
  </SVG>
}

export function LogoIcon() {
  return <svg width="120" height="120" fill="#004f00" viewBox="0 0 278 217" xmlns="http://www.w3.org/2000/svg">
    <path d="M127.444 213H140.444L146.944 198.5H133.444L127.444 213Z" />
    <path d="M152.444 215.5L156.444 198.5H242.944C242.944 198.5 243.94 198.844 244.736 197.5C245.559 196.11 244.736 195 244.736 195L141.422 31.2208C141.422 31.2208 140.622 29.5646 138.444 29.5C136.222 29.4341 135.266 31.2208 135.266 31.2208L103.444 78.5H114.444L64.9436 142.5H76.4436L29.9436 198.5H122.444L116.944 215.5H7.44357C7.44357 215.5 1.94358 215 0.943556 212C-0.414911 207.925 2.44357 204.5 2.44357 204.5L40.9436 156H34.9436C34.9436 156 32.8739 155.895 31.9436 154.5C30.9436 153 32.4436 151.5 32.4436 151.5L83.4436 89.5L70.9436 90L131.022 5C131.022 5 132.924 0.84987 137.944 0.999946C142.861 1.14698 145.404 5 145.404 5L275 200.5C275 200.5 279.311 205.949 275 211.5C271.407 216.127 269.943 215.5 269.943 215.5H152.444Z" />
  </svg>
}