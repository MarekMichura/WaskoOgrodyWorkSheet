import {getPublicBase64, getPublicBase64s} from '@/components/img/placeHolder/getBase64'
import {EProjects} from '@/utils/enum/EProject'
import {type EProjectsValues} from '@/utils/enum/EProject'
import {type IParams} from '@/utils/type/IParams'

import ProjectElement from './_com/element/element'
import ProjectHeroImg from './_com/heroImg/hero'
import ProjectMapDynamicImport from './_com/map/dynamic'
import {projectsImages} from './_data/images'

export const dynamic = 'force-static'
export const dynamicParams = false
export function generateStaticParams() {
  return Object.values(EProjects).map((project) => ({project: project}))
}

async function ProjectPage({params}: IParams<{project: EProjectsValues}>) {
  const {project} = await params
  const heroSrc = projectsImages[project].hero

  const hero = await getPublicBase64(heroSrc)
  const imagesSrc = projectsImages[project].sections
  const images = await Promise.all(imagesSrc.map((a) => getPublicBase64s(a.img)))

  return (
    <>
      <ProjectHeroImg placeHolder={{...hero, alt: 'HeroImg'}} />
      <ProjectMapDynamicImport />
      {images.map((img, key) => (
        <ProjectElement key={key} images={img} title={imagesSrc[key].name} />
      ))}
    </>
  )
}

export default ProjectPage
