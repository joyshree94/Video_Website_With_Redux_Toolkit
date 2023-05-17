
import RelatedVideoList from "../components/list/RelatedVideoList";
import VideoDescription from "../components/description/VideoDescription"
import Player from "../components/description/Player"
import { useDispatch, useSelector } from "react-redux";
import { fetchVideo } from "../features/video/videoSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/ui/Loading";
export default function Video() {

    const dispatch = useDispatch();
    const {videoid} =useParams();
    const { video,isLoading,isError,error}=useSelector((state)=>state.video);
   // console.log(params);
    useEffect(()=>{

        dispatch(fetchVideo(videoid));
    },[dispatch,videoid]);
    const {link,title,id,tags}=video || {};
        //decide to render
        let content;
        if(isLoading) content=<Loading/>;
        if(!isLoading && isError) 
            content = <div className="col-span-12">{error}</div>;
        if(!isLoading && !isError && video?.id){
            content = <div className="col-span-12">No videos found</div>;
        } 
        if (!isLoading && !isError && video?.id) {
            content = (<div class="grid grid-cols-3 gap-2 lg:gap-8">
                            <div class="col-span-full w-full space-y-8 lg:col-span-2">
                                <Player link={link} title={title}/>
                                <VideoDescription video={video}/>
                            </div>
                            <RelatedVideoList currentVideoId={id} tags={tags}/>
                        </div>);
        }
        
    return (
        <>
          <section class="pt-6 pb-20">
            <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {content}
            </div>
        </section>

        </>
    );
}