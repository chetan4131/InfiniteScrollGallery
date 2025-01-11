import { configureStore, createSlice } from "@reduxjs/toolkit";
// Initial state
const initialState = {
  cards: [],
  page: 1,
  loading: false,
};

// Create a slice
const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = [...state.cards, ...action.payload];
    },
    setPage: (state) => {
      state.page += 1;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Export actions
export const { setCards, setPage, setLoading } = cardSlice.actions;

// Configure store
const store = configureStore({
  reducer: {
    cards: cardSlice.reducer,
  },
});

export default store;
