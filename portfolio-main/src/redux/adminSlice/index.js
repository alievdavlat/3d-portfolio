import { createSlice } from '@reduxjs/toolkit'
import { getItemAtStorage , setItemToStorage} from '../../hooks/useStorage'

const initialState = {
  adminEnrolled: false || getItemAtStorage('adminEnrolled') || null,
  account: null  || getItemAtStorage('account'),
  adminSectionShowing:'projects' 
}



export const AdminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
      setAdminEnrolled(state, action){
        state.adminEnrolled = action.payload
        setItemToStorage('adminEnrolled', action.payload)
      },
      setAccount(state, action){
        state.account = action.payload
        setItemToStorage('account',action.payload)
        
      },
      setAdminpageShowing(state, action){
        state.adminSectionShowing = action.payload
        setItemToStorage('adminSectionShowing',action.payload )
      }    

  },
})



export const {  setAdminEnrolled , setAccount, setAdminpageShowing} = AdminSlice.actions

export default AdminSlice.reducer