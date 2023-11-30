import { useState } from "react";
import userService from "../utils/userService";

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
      addPost(form)
    } catch (error) {}
    // Add logic to handle form submission if needed
    console.log("Form submitted:", form);
  };

  // try {
  // 	await userService.signup(formData); // <-- we must pass all the information from the form into the signup function
  // 	// in order to send the information to the server
  // 	// call the handleSignUpOrLogin function from the app component
  // 	// which passed as a prop, to get the token from localstorage
  // 	// and set the users information in the apps state
  // 	handleSignUpOrLogin();
  // 	// navigate the user to the route we want, (so probably the homepage)
  // 	navigate('/')

  // } catch(err){
  // 	console.log(err.message); // <- the error message comes from the throw statement in utils/signup functions
  // 	setError('Try signing up again')
  // }
  // }

  return (
    <div>
      <h2>New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={form.title}
          onChange={handleInput}
        />

        <label htmlFor="content">Content:</label>
        <textarea
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
