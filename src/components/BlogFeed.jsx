import "../styling/App.css";

export default function BlogFeed({ posts, deletePost }) {
  console.log("THIS IS POST FROM BLOGFEED", posts);

  const handleClick = async (postId) => {
    try {
      await deletePost(postId);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <h1>Tech News</h1>
      <div>
        {posts.map((post) => (
          <div key={post._id} className="stylePost">
            <h2 className="stylePostTitle">{post.title}</h2>
            <p className="stylePostContent">{post.content}</p>
            <button onClick={() => handleClick(post._id)}>delete me</button>
          </div>
        ))}
      </div>
    </>
  );
}
