export default function BlogFeed({ posts }) {
  console.log("THIS IS POST FROM BLOGFEED", posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
