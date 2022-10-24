import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Picture from "../components/PictureUploader/Picture";

export interface postStyle {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface styleUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const HomePage = () => {
  const [posts, setPosts] = useState<Array<postStyle>>([]);
  const [users, setUsers] = useState<Array<styleUsers>>([]);
  const navigate = useNavigate();

  const getPosts = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();
    setPosts(data);
  };

  const getUsers = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await result.json();
    setUsers(data);
  };

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);
  const navigateToDocument = (id: number) => {
    navigate(`/Document/${id}`, { state: { posts } });
  };
  const navigateToUser = (username: string) => {
    navigate(`/Users/${username}`, { state: { users } });
  };

  return (
    <div style={style.body}>
      {users.map((user: styleUsers) => {
        const formattedPosts = posts.filter((post) => post.userId === user.id);
        return (
          <>
            <div style={style.div}>
              <h2
                key={user.id}
                style={style.h2}
                onClick={() => navigateToUser(user.username)}
              >
                {user.name}
                <br />
                <br />
              </h2>
              <p>
                <Picture />
              </p>
              {formattedPosts.map((post) => (
                <div key={post.id}>
                  <ul>
                    <li
                      style={style.li}
                      onClick={() => navigateToDocument(post.id)}
                    >
                      {post.id}-{post.title}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default HomePage;

const style = {
  h2: {
    display: "inline-block",
    border: "3px solid black",
    borderRadius: "10px",
    padding: "20px 0px 0px 0px",
    cursor: "pointer",
  },
  body: {},
  div: {
    border: "2px solid #ffa90a",
  },
  li: {
    display: "inline",
    cursor: "pointer",
    fontWeight: "bolder",
    fontFamily: "Times, Times New Roman, serif",
    border: "4px solid #000100",
    borderRadius: "10px",
  },
};
