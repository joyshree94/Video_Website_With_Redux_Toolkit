import { configureStore } from '@reduxjs/toolkit';
import videosReducer from "../features/videos/videoSlice";
import tagsReducer from "../features/tags/tagSlice";
import videoReducer from "../features/video/videoSlice";
import relatedvideoReducer from "../features/relatedVideo/relatedVideoSlice";
import filterReducer from "../features/filters/filterSlice";
export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags:tagsReducer,
    video: videoReducer,
    relatedvideo: relatedvideoReducer,
    filter: filterReducer,
  },
});
