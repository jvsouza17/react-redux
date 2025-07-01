const listReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload];
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.payload);
        case 'CHANGE_DONE':
            return state.map(item => 
                item.id === action.payload ? { ...item, done: !item.done } : item
            );
        default:
            return state;
    }
};

export default listReducer;
