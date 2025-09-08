import { useState } from "react";

export default function LikeBtn(){
    let [isLiked, setIsLiked] = useState(false);
    function likeBtn(e){
        setIsLiked(!isLiked);
    }
    return (
        <>
            <i className={`fa-heart ${isLiked?"fa-solid":"fa-regular"}`} onClick={likeBtn} style={{color : isLiked?"red":""}}></i>
        </>
    )
}