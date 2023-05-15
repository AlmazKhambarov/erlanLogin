import { createSlice } from "@reduxjs/toolkit";
import { fetchUserFile, fetchUserFiles, uploadFile } from "../extraReducer";

const initialState = {
  userFiles:[],
  loading:null,
  error:null,
  loadingFiles:null
}

const filesSlice = createSlice({
  name:"files",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(uploadFile.pending, (state)=>{
      state.loading = true
      state.loadingFiles = "pending"
    })
    builder.addCase(uploadFile.fulfilled, (state, action)=>{
      state.loading = false
      state.loadingFiles = "fullfiled"

      console.log(action.payload)
    })
    builder.addCase(uploadFile.rejected, (state, action)=>{
      state.error = action.error.message
    })
    builder.addCase(fetchUserFile.pending, (state)=>{
      state.loading = true;
    })
    builder.addCase(fetchUserFile.fulfilled, (state, action)=>{
      state.loading = false;
       state.userFiles =action.payload
    })
    builder.addCase(fetchUserFile.rejected, (state, action)=>{
      state.error = action.error.message
    })
  }
})

export default filesSlice.reducer
