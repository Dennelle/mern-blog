import { useState } from "react";
import userService from "../utils/userService";
import "../styling/App.css";

// export default function NewBlogPost({ addPost }) {
//   const [post, setPost] = useState({
//     title: "",
//     content: "",
//   });

//   function handleInput(e) {
//     setPost({ ...form, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       // Add logic to handle form submission if needed
//     } catch (error) {}
//     console.log("Form submitted:", form);
//   }
//   addPost();

//   return (
//     <div>
//       <h2>New Blog Post</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Title:</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={post.title}
//           onChange={handleInput}
//         />

//         <label htmlFor="content">Content:</label>
//         <textarea
//           id="content"
//           name="content"
//           value={post.content}
//           onChange={handleInput}
//         />
//         <button type="submit">Submit Post</button>
//       </form>
//     </div>
//   );
// }

// ==== alternative is below ======

export default function NewBlogPost({ addPost }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addPost(form);
    } catch (error) {}
    // Add logic to handle form submission if needed
    console.log("Form submitted:", form);
  };

  return (
    <div>
      <h2>New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter title here"
          className="blogTitle"
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={handleInput}
        />

        <textarea
          placeholder="Enter Content Here"
          className="textArea"
          id="content"
          name="content"
          value={form.content}
          onChange={handleInput}
        />

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}
