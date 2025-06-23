export const EProjects = {
  greenLand: 'greenLand',
  greenRoof: 'greenRoof',
  plantings: 'plantings',
  architecture: 'architecture',
  greenMaintenance: 'greenMaintenance',
  projects: 'projects',
} as const

export type EProjectsKey = keyof typeof EProjects
export type EProjectsValues = (typeof EProjects)[EProjectsKey]
type EProjectsType = {[K in EProjectsKey]: `/${(typeof EProjects)[K]}`}

export const EProjectsLink: EProjectsType = {
  greenLand: '/greenLand',
  greenRoof: '/greenRoof',
  plantings: '/plantings',
  architecture: '/architecture',
  greenMaintenance: '/greenMaintenance',
  projects: '/projects',
} as const
