import { createSlice } from "@reduxjs/toolkit";

const ShowSlice = createSlice({
  name: "counter",
  initialState: {
    //action ko jagha di mene initialstate main
    data: [],
    load: false
  },
  reducers: {
    //2 reducer bnaye h
    setData: (state, action) => {
      //ye reducer bnaya ye data fatch krne k liye
      state.data = action.payload;
      state.load = false;
    },
    loading: (state) => {
      //ye reducer loading krne k liye
      state.load = true;
    }
  }
});

export const { setData, loading } = ShowSlice.actions; //action reducer m dal diye
export const fetchData = (state) => state.counter.data; //counter k andr data chahiye to counter.data likha
export const load1 = (state) => state.counter.load; //loading dikh jye browser pe
export default ShowSlice.reducer; //ye 3 files reducer m dal di
