import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  value: [],
}

export const getData = createAsyncThunk(
  'texts/getData',
  async (text) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/iecho?text=${text}`);
      return response.data;
    } catch (error) {
      alert('something went wrong')
      throw(error)
    }
  } 
)

const repeat = (state, payload) => {
  const repeatWord = state.value.filter(value => value.text.includes(payload.text))
  if (repeatWord.length > 0) {
    alert('This word is already in the list')
    return
  }
  return state.value.unshift(payload)
}

export const textSlice = createSlice({
  name: 'texts',
  initialState,
  reducers: {},
  extraReducers (builder){
    builder
      .addCase(getData.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = 'success'
        repeat(state, action.payload)
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = 'error'
        state.error = action.error.message
      })
  },
})

export const selectAllTexts = state => state.texts.value
export const getTextsStatus = state => state.texts.status
export const getTextsError = state => state.texts.error

export default textSlice.reducer