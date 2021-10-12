

const initialState = {
    category: 0,
    sortBy: 'popular'
}

export default function  filters (state = initialState, action: any)  {
    switch (action.type){
        case  'SET_SORT_BY':
        return {
            ...state, sortBy: action.payload
        };
    }

    return state
}