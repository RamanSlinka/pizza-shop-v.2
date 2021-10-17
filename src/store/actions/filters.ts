


export type SetSortByActionType = ReturnType<typeof setSortBy>
export type SetCategoryActionType = ReturnType<typeof setCategory>

export type FiltersActionsType = SetSortByActionType
    // | SetCategoryActionType;


export const setSortBy = (name: string) => ({
    type: 'SET_SORT_BY',
    payload: name
});

export const setCategory = (category: number | null ) => ({
    type: 'SET_CATEGORY',
    payload: category
});