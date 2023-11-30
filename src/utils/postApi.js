import tokenService from "./tokenService";

const BASE_URL = "/api/posts";

async function create(newPostData) {
  const response = await fetch("/api/posts", {
    method: "POST",
    body: JSON.stringify(newPostData),
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
}

async function deletePost() {
  const response = await fetch("/api/posts/:id", {
    method: "DELETE",
    body: JSON.stringify(),
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
}

export default {
  create,
  deletePost,
};
