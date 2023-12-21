import { createSlice } from "@reduxjs/toolkit";
import { getItemAtStorage, setItemToStorage } from '../../hooks/useStorage'
import { hideSections } from "../../constants";


const initialState = {
testimonials: false || getItemAtStorage('testimonials'),
workExp: false ||  getItemAtStorage('experience'),
sections: getItemAtStorage('sections') 
}


const sectionSlice = createSlice({
  name:'sectionSlice',
  initialState,
  reducers:{
    hideTestimonials(state, action){
    state.testimonials = action.payload 
    },
    hideWorkExp(state, action){
    state.workExp = action.payload
    },
    addSectionSecttings(state, action) {
      state.sections = action.payload
      setItemToStorage('sections',action.payload)
    }


  }
})


export  const  { hideTestimonials , hideWorkExp, addSectionSecttings} = sectionSlice.actions;

export default sectionSlice.reducer;