import {Suspense} from 'react'

import {getPublicBase64s} from '@/utils/plaiceholder/getBase64'

import MapClient from './_com/mapImport'
import ProjectSegment from './_com/projectSegment'
import {projectImages} from './_data/images'
import s from './css.module.scss'

async function ProjectsPage() {
  const [Grzegorzecka, May3, Pychowicka1, Wizjonerow] = await Promise.all([
    getPublicBase64s(projectImages.Grzegorzecka),
    getPublicBase64s(projectImages.May3),
    getPublicBase64s(projectImages.Pychowicka1),
    getPublicBase64s(projectImages.Wizjonerow),
  ])

  return (
    <>
      <div className={s.top} />
      <Suspense>
        <MapClient />
        <ProjectSegment images={Grzegorzecka}>
          <h1 id="Grzegorzecka">Grzegorzecka</h1>
        </ProjectSegment>
        <ProjectSegment images={May3}>
          <h1 id="May3">May3</h1>
        </ProjectSegment>
        <ProjectSegment images={Pychowicka1}>
          <h1 id="Pychowicka1">Pychowicka1</h1>
        </ProjectSegment>
        <ProjectSegment images={Wizjonerow}>
          <h1 id="Wizjonerow">Wizjonerow</h1>
        </ProjectSegment>
      </Suspense>
    </>
  )
}

export default ProjectsPage
