import { useState } from "react";

export default function Hero(){
    const[liked, setLiked] = useState(false);
return(
    <div>
        <button className="btn btn-primary mx-2" style={{backgroundColor: liked ? "red" : "green"}}  onClick={()=>setLiked(!liked)}>{liked ? "Unlike" : "like"}</button>
        <h4>{liked ? "You liked this !" : "You have not liked this get !"}</h4>
    </div>
);
};
