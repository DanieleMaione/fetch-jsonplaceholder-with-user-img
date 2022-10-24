import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postStyle } from "./HomePage";
import { useLocation } from "react-router-dom";

interface commentsStyle {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const Description = () => {
  const [comments, setComments] = useState<Array<commentsStyle>>([]);

  const getComments = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await result.json();
    setComments(data);
  };

  useEffect(() => {
    getComments();
  }, []);

  const location = useLocation();

  const { id } = useParams();

  return (
    <div>
      {location.state.posts.map((post: postStyle) => {
        if (post.id.toString() === id)
          return (
            <>
              <h1 style={style.h1}>{post.body}</h1>
              <h4>Comments:</h4>
              {comments.map((el: commentsStyle) => {
                console.log(post.id);
                if (el.postId.toString() === id)
                  return (
                    <div
                      key={el.id}
                      style={{ margin: "30px 0", border: "1px solid black" }}
                    >
                      <h3 key={"name"}>Name: {el.name}</h3>
                      <h3 key={"email"}>Email: {el.email}</h3>
                      <h3 key={"comment"}>Text: {el.body}</h3>
                    </div>
                  );
                else return "";
              })}
            </>
          );
        else return null;
      })}
    </div>
  );
};

const style = {
  h1: {
    border: "2px solid black",
    borderRadius: "10px",
    display: "flex",
  },
};
