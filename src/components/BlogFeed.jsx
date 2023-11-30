export default function BlogFeed({ posts, deletePost }) {
  console.log("THIS IS POST FROM BLOGFEED", posts);

  const clickHandler = async (postId) => {
    try {
      await deletePost(postId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <p>{post.title}</p>
          <p>{post.content}</p>
          <button onClick={() => clickHandler(post._id)}>X</button>
        </div>
      ))}
    </div>
  );
}
