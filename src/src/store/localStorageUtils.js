export const loadCartState = () => {
    try {
        const serializedState = localStorage.getItem('cart');
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (err) {
        console.warn('Error loading cart state from localStorage', err);
        return undefined;
    }
};

export const saveCartState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cart', serializedState);
    } catch (err) {
        console.warn('Error saving cart state to localStorage', err);
    }
};
