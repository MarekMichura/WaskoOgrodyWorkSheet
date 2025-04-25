export const EPermissions = {
  GARDENER: 'Gardener',
} as const

export type EPermissionsKey = keyof typeof EPermissions
export type EPermissionValues = (typeof EPermissions)[EPermissionsKey]
