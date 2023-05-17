import { useDispatch, useSelector } from "react-redux";
import RelatedVideoListItem from "./RelatedVideoListItem";
import Loading from "../ui/Loading";
import { useEffect } from "react";
import {fetchRelatedVideo} from "../../features/relatedVideo/relatedVideoSlice";
export default function RelatedVideoList({currentVideoId,tags}) {
    const dispatch = useDispatch();
    const { relatedvideos,isLoading,isError,error}=useSelector((state)=>state.relatedvideo);
    useEffect(()=>{

        dispatch(fetchRelatedVideo({id:currentVideoId,tags}));
    },[dispatch,currentVideoId,tags]);
   
     //decide to render
     let content;
     if(isLoading) content=<Loading/>;
     if(!isLoading && isError) 
         content = <div className="col-span-12">{error}</div>;
     if(!isLoading && !isError && relatedvideos?.length ===0){
         content = <div className="col-span-12">No videos found</div>;
     } 
     if (!isLoading && !isError && relatedvideos?.length > 0) {
         content = relatedvideos.map((relatedvideo) => (
             <RelatedVideoListItem key={relatedvideo.id} relatedvideo={relatedvideo} />
         ));
     }
    return (
 
          <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
                {content}
            
        </div>

    );
}