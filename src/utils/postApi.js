import tokenService from "./tokenService";

const BASE_URL = "/api/posts";

async function create(newPostData) {
  const response = await fetch(BASE_URL, {
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

async function deletePost(postId) {
  const response = await fetch(`/api/posts/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
}

export default {
  create,
  deletePost,
};
