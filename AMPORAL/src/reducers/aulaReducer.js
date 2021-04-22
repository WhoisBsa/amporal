const initialState = {
    id: '',
    link: '',
    material: '',
    titulo: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ID':
            return { ...state, id: action.payload.id };
        case 'SET_LINK': 
            return { ...state, link: action.payload.link }
        case 'SET_MATERIAL': 
            return { ...state, material: action.payload.material}
        case 'SET_TITULO':
            return { ...state, titulo: action.payload.titulo}
        default: return state;
    }
}