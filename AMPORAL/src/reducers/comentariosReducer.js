const initialState = [];

export default todo = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMENTARIO':
            return { ...state, comentarios: [action.payload] };
        default: return state;
    }
}