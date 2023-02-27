export const initialState = JSON.parse(
    window.localStorage.getItem('cart')) || []

export const ACTION_CART_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART',
}

export const uploadStorage = (state) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_ACTION = {
    [ACTION_CART_TYPES.ADD_TO_CART]: (state, action) => {
        const { id } = action.payload
        const productInCartIndex = state.findIndex(item => item.id === id)

        if (productInCartIndex >= 0) {
            const newState = [
                ...state.slice(0, productInCartIndex),
                {
                    ...state[productInCartIndex],
                    quantity: state[productInCartIndex].quantity + 1
                },
                ...state.slice(productInCartIndex + 1)
            ]
            uploadStorage(newState)
            return newState
        }

        const newState = [
            ...state,
            {
                ...action.payload,
                quantity: 1
            }
        ]
        uploadStorage(newState)
        return newState
    },
    [ACTION_CART_TYPES.REMOVE_FROM_CART]: (state, action) => {
        const { id } = action.payload
        const newState = state.filter(item => item.id !== id)
        uploadStorage(newState)
        return newState
    },
    [ACTION_CART_TYPES.CLEAR_CART]: () => {
        uploadStorage([])
        return []
    }

}

export const CartReducer = (state, action) => {
    const { type: actionType } = action
    const updateState = UPDATE_ACTION[actionType]
    return updateState ? updateState(state, action) : state
}