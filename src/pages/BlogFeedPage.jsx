import { useState, useEffect } from "react";
import "../styling/App.css";

import tokenService from "../utils/tokenService";
import NewBlogPost from "../components/NewBlogPost";
import BlogFeed from "../components/BlogFeed";
import postApi from "../utils/postApi";

export default function BlogFeedPage({ loggedUser, handleLogout }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenService.getToken(),
        },
      });

      const data = await response.json();
      console.log("RES FROM SERVER", data);
      setPosts(data.posts);
    } catch (err) {
      console.log(err);
    }
  }

  // ===this is the create request to the server ======
  async function addPost(newPostData) {
    try {
      const res = await postApi.create(newPostData);
      console.log(res);
      setPosts([res.post, ...posts]);
    } catch (err) {
      console.log(err);
    }
  }
  console.log("POST STATE", posts);
  return (
    <>
      <NewBlogPost addPost={addPost} />
      <BlogFeed posts={posts} />
    </>
  );
}

// import tokenService from "../utils/tokenService";
// import BlogPost from "../components/BlogPost";

// export default function BlogFeedPage({ loggedUser, handleLogout }) {
//   const [blogposts, setBlogPosts] = useState([]);

//   return (
//     <div className="post">
//       <BlogPost />
//     </div>
//   );
// }
