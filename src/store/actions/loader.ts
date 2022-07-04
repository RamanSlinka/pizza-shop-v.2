export type SetShowLoaderType = ReturnType<typeof showLoader>
export type SetHideLoaderType = ReturnType<typeof hideLoader>
export type LoaderActionType = SetShowLoaderType | SetHideLoaderType

export const showLoader = () => ({type: 'SHOW_LOADER'} as const)
export const hideLoader = () => ({type: 'HIDE_LOADER'} as const)

