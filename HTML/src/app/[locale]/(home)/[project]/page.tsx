import {type IParams} from '@/utils/types/IParams'

import {pages} from './_data/pages'

export const dynamic = 'force-static'
export const dynamicParams = false
export function generateStaticParams() {
  const paths = Object.keys(pages)
  return paths.map((path) => ({project: path}))
}

async function ProjectsPage({params}: IParams<{project: string}>) {
  const {project} = await params
  return project
}

export default ProjectsPage
