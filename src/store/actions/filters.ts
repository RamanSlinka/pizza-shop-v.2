

export const setSortBy = (name: string) => ({
    type: 'SET_SORT_BY',
    payload: name
});

export const setCategory = (catIndex: number) => ({
    type: 'SET_CATEGORY',
    payload: catIndex
});