
export const severity = {
  error: 'error',
  info: 'info',
  success: 'success',
  warning: 'warning'
}

export const timeout = {
  [severity.error]: 6000,
  [severity.info]: 5000,
  [severity.success]: 2000,
  [severity.warning]: 5000
}

export const engagementMessage = {
  fishbowl: {
    success: {
      retriveAll: 'retrieved successfully',
      create: 'created successfully',
      update: 'updated successfully',
      remove: 'removed successfully'
    },
    error: {
      connection: 'error connection'
    }
  }
}
