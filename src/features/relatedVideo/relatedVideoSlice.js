import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { getRelatedVideos } from './relatedVideosAPI';
const initialState={
    relatedvideos:{},
    isLoading:false,
    isError:false,
    error:""
}
//async thunk
export const fetchRelatedVideo = createAsyncThunk(
    "RelatedVideo/fetchRelatedVideo",
    async (tags,id) => {
      const relatedvideo = await getRelatedVideos(tags,id);
      // The value we return becomes the `fulfilled` action payload
      return relatedvideo;
    }
  );
  
export const relatedvideoSlice = createSlice({
    name: 'relatedvideo',
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(fetchRelatedVideo.pending, (state) => {
            state.isError=false;
            state.isLoading = true;
          })
          .addCase(fetchRelatedVideo.fulfilled, (state, action) => {
            state.isLoading = false;
            state.relatedvideos = action.payload;
          })
          .addCase(fetchRelatedVideo.rejected, (state, action) => {
            state.isLoading = false;
                state.relatedvideos = {};
                state.isError = true;
                state.error = action.error?.message;
          });
      },
});

export default relatedvideoSlice.reducer;