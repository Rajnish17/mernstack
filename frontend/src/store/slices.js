import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [],
  totalCartItem:0,
  username:""
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      console.log(action.payload)
      state.item.push(action.payload);
     state.totalCartItem =state.item.length;
      // console.log(state.totalCartItem)
      // console.log(state.totalamont += state.item.price);
    },

    userdata:(state,action)=>{
      state.username=(action.payload.name);
    }
  },
});

// Action creators are generated for each case reducer function
export const { addTocart,userdata} = counterSlice.actions;

export default counterSlice.reducer;
