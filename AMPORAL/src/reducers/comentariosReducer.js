const initialState = [];

export default todo = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COMENTARIO':
            return { ...state, comentarios: [action.payload.comentarios[0].comentarios[0].comentario] };
        default: return state;
    }
}