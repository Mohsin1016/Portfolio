import { configureStore } from "@reduxjs/toolkit";
import displaySlice from "./DisplayNav";

const Store = configureStore({
    reducer: { display: displaySlice.reducer },
  });
  export default Store;
