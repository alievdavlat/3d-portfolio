

import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './adminSlice'
import localeSlice from './localeSlice'
import sectionsSlice from './sectionsSlice'
import singlePageSlice from './pagesSlice'


export const store = configureStore({
  reducer:{
    admin: adminSlice,
    locale: localeSlice,
    sections:sectionsSlice,
    pages:singlePageSlice
  }
})