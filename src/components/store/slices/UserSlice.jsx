import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUsers(state, action) {
      state.push(action.payload);
    //   console.log("addUsers State:", action.payload);
    },
    deleteUsers(state, action) {
      const indexToDelete = action.payload;
    // const index = action.payload.i;
    // state.splice(index,1)
      return state.filter((user) => !indexToDelete.includes(user));
    },
    clearUsers(state, action) {
      return [];
    },
  },
//  if u want to use micro reducer with other slices use extraReducers
  extraReducers(builder){
    builder.addCase(userSlice.actions.clearUsers, ()=>{
        return [];
    })
  }
});

// console.log('userSLice: ',userSlice.actions)

export const { addUsers, deleteUsers, clearUsers } = userSlice.actions;
export default userSlice.reducer;
