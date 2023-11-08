import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"안예원",
        comment:"안녕"
    },
    {
        name:"안태현",
        comment:"안태현임"
    },
    {
        name:"안예지",
        comment:"안예지임"
    }
];

function CommentList(props){
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
            
        </div>
    );
}

export default CommentList;