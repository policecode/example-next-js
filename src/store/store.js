import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer.reducer
    }
  })
}

export default makeStore;