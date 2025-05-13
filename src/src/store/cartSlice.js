import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // {id, name, price, amount2, quantity, icon, subservices: []}
    totalAmount: 0,
    totalDiscount: 0,
    lastActionMessage: '',
    visitCharges: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existing = state.items.find((item) => item.id === newItem.id);

            if (existing) {
                state.lastActionMessage = `${newItem.name} is already selected. You can change quantity from cart.`;
            } else {
                state.items.push({ ...newItem, quantity: 1, subservices: [], visitCharges: newItem.visitCharges || 0 });
                state.lastActionMessage = `${newItem.name} added to cart.`;
            }

            cartSlice.caseReducers.recalculateTotals(state);
        },

        addSubservice: (state, action) => {
            const { parentId, subservice } = action.payload;
            const parentItem = state.items.find((item) => item.id === parentId);
            if (!parentItem) return;

            const alreadyExists = parentItem.subservices.find(
                (s) => s.name === subservice.name
            );

            if (alreadyExists) {
                state.lastActionMessage = `${subservice.name} is already added under ${parentItem.name}.`;
            } else {
                parentItem.subservices.push(subservice);
                state.lastActionMessage = `${subservice.name} added under ${parentItem.name}.`;
            }

            cartSlice.caseReducers.recalculateTotals(state);
        },

        removeSubservice: (state, action) => {
            const { parentId, subserviceName } = action.payload;
            const parentItem = state.items.find((item) => item.id === parentId);

            if (parentItem) {
                parentItem.subservices = parentItem.subservices.filter(
                    (sub) => sub.name !== subserviceName
                );
                state.lastActionMessage = `Subservice removed from ${parentItem.name}.`;
            }

            cartSlice.caseReducers.recalculateTotals(state);
        },

        changeQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((i) => i.id === id);
            if (item && quantity > 0) {
                item.quantity = quantity;
            }
            cartSlice.caseReducers.recalculateTotals(state);
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            cartSlice.caseReducers.recalculateTotals(state);
        },

        clearCart: (state) => {
            state.items = [];
            state.totalAmount = 0;
            state.totalDiscount = 0;
            state.lastActionMessage = '';
        },

        recalculateTotals: (state) => {
            let total = 0;
            let discount = 0;
            let visitChargesTotal = 0;
            state.items.forEach((item) => {
                total += item.price * item.quantity;

                if (item.amount2) {
                    discount += (item.amount2 - item.price) * item.quantity;
                }

                if (item.subservices?.length > 0) {
                    item.subservices.forEach((sub) => {
                        total += sub.price * item.quantity;
                        // Add sub.amount2 discount logic if needed
                    });
                }
                visitChargesTotal += item.visitCharges || 0;
            });
            total += visitChargesTotal;
            state.totalAmount = total;
            state.totalDiscount = discount;
            state.visitCharges = visitChargesTotal;
        },

        clearMessage: (state) => {
            state.lastActionMessage = '';
        },
    },
});

export const {
    addToCart,
    addSubservice,
    changeQuantity,
    removeFromCart,
    clearCart,
    recalculateTotals,
    clearMessage,
    removeSubservice,
} = cartSlice.actions;

export default cartSlice.reducer;
