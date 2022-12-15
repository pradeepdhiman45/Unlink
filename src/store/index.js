import { configureStore } from "@reduxjs/toolkit";
import AddressSlice from "./addressReducer/addressReducer";
import HistorySlice from "./productReducer/HistorySlice";

const store = configureStore({
  reducer: {
    history: HistorySlice.reducer,
    address: AddressSlice.reducer,
  },
});

export default store;
