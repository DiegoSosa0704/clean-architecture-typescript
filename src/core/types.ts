// req object payload
export type Token = {
  userPermission?: Array<string>,
  role?: string,
  roleName?: string,
  roleAlias?: string,
  companyID?: object,
  firstName?: string,
  lastName?: string,
  changePassword?: boolean,
  email?: string,
  id?: string,
  attachment?: string,
  assignedUsers?: Array<object>,
  notifiers?: Array<string>,
  exp?: number,
  iat?: number
}

