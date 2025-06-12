import {getPublicBase64, getPublicBase64s} from '@/components/img/placeHolder/getBase64'
import {EProjects} from '@/utils/enum/EProject'

import ProjectElement from './_com/element/element'
import ProjectHeroImg from './_com/heroImg/hero'
import ProjectMapDynamicImport from './_com/map/dynamic'

export const dynamic = 'force-static'
export const dynamicParams = false
export function generateStaticParams() {
  return Object.values(EProjects).map((project) => ({project: project.slice(1)}))
}

async function ProjectPage() {
  const hero = await getPublicBase64('/project/output.jpeg')
  const images = await getPublicBase64s([
    '/project/3maj/19535e00-7cb3-4a27-b8c8-694be8e0aefa.jpg',
    '/project/3maj/2408845b-22ff-4ee4-bb46-b7d3cc357c8f.jpg',
    '/project/3maj/258e93d1-141f-4e48-beb3-e6d2eba2f87c.jpg',
    '/project/3maj/338b8b11-7ad0-432a-a115-59819da0e70e.jpg',
    '/project/3maj/4662ae68-d795-444f-a087-2c3c6eeb1c00.jpg',
    '/project/3maj/466d74d3-4504-4b3b-bde4-886d5499037d.jpg',
    '/project/3maj/948b0f24-cd7e-4d64-ac7d-03b43a227703.jpg',
    '/project/3maj/9ec1eb94-8b63-48a3-8c80-7e0f30bf2159.jpg',
    '/project/3maj/b036d883-ddc7-4b18-91dd-3043e3861cbe.jpg',
    '/project/3maj/d7db3277-9e4d-4ee3-8407-837458c78dfa.jpg',
    '/project/3maj/f453d462-c4f7-4f67-b48e-37188db40b1d.jpg',
  ])
  return (
    <>
      <ProjectHeroImg placeHolder={{...hero, alt: 'HeroImg'}} />
      <ProjectMapDynamicImport />
      <ProjectElement images={images} />
    </>
  )
}

export default ProjectPage
