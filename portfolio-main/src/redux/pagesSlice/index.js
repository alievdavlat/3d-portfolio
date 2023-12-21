import { createSlice } from "@reduxjs/toolkit";
import { getItemAtStorage, setItemToStorage } from "../../hooks/useStorage";

const initialState = {
  projectItem: null || getItemAtStorage('singleprojectPage')
}

 const singlePageSlice = createSlice({
  name:'singlePageSlice',
  initialState,
  reducers:{
    setProjectItem(state, action){
      state.projectItem = action.payload
      setItemToStorage('singleprojectPage', action.payload)
    },
  }
})

export const { setProjectItem } = singlePageSlice.actions

export default singlePageSlice.reducer