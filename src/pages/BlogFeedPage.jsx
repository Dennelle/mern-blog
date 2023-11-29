import { useState, useEffect } from "react";
import "../styling/App.css";

import tokenService from "../utils/tokenService";
import NewBlogPost from "../components/NewBlogPost";
import BlogFeed from "../components/BlogFeed";

export default function BlogFeedPage({ loggedUser, handleLogout }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts();
  }, []);

  // ===this is the create request to the server ======
  async function addPost(form) {
    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          Authorization: "Bearer " + tokenService.getToken(),
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      // ====================================================
      // The HTTP cycle has been completed
      // and we have a parsed response from the server (data)
      console.log(data, " <- response data from the server");

      // Now we can update the state!
      setPosts([data.post, ...posts]);
    } catch (err) {
      console.log(err);
    }
  }

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
