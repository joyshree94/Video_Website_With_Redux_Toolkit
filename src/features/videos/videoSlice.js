import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { getVideos } from './videosAPI';
const initialState={
    videos:[],
    isLoading:false,
    isError:false,
    error:""
}
//async thunk
export const fetchVideos = createAsyncThunk(
    "videos/fetchVideos",
    async ({tags, search}) => {//async fun c 1 tar besi parameter pathale { use krte hoi}
      const videos = await getVideos({tags, search});
      // The value we return becomes the `fulfilled` action payload
      return videos;
    }
  );
  
export const videoSlice = createSlice({
    name: 'counter',
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(fetchVideos.pending, (state) => {
            state.isError=false;
            state.isLoading = true;
          })
          .addCase(fetchVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.videos = action.payload;
          })
          .addCase(fetchVideos.rejected, (state, action) => {
            state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error?.message;
          });
      },
});

export default videoSlice.reducer;