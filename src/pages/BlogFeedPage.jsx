import { useState, useEffect } from "react";

import Blogfeed from "../components/BlogPost";
import tokenService from "../utils/tokenService";

export default function BlogFeedPage({ loggedUser, handleLogout }) {
  const [blogposts, setBlogPosts] = useState([]);

  return (
    <div className="post">
      <img
        src="https://images.openai.com/blob/971cb9d4-66e4-46b0-95d8-f3b57931b08e/stangel-2022-0052.jpg?trim=0,0,0,0&width=3200"
        className="image"
      />
      <h2>Sam Altman and the OpenAI drama</h2>
      <time dateTime="2023-11-25 8:00">11-25-2023</time>
      <p>
        ChatGPT, developed by OpenAI, stands as a powerful tool in the realm of
        natural language processing. Leveraging the capabilities of GPT-3.5
        architecture, it has the ability to generate coherent and contextually
        relevant text across a wide range of topics. When it comes to crafting
        an article about ChatGPT and OpenAI, this language model proves
        invaluable in seamlessly weaving together information and insights. The
        ease with which it adapts to various writing styles, tones, and content
        requirements makes it a versatile companion for authors. Whether
        discussing the evolution of language models, the implications of
        artificial intelligence in language generation, or the collaborative
        efforts of OpenAI in advancing the field, ChatGPT emerges as a reliable
        ally in the writing process, enhancing efficiency and producing
        high-quality content. As the technology continues to evolve, the synergy
        between ChatGPT and OpenAI remains a fascinating subject for exploration
        and discussion in the ever-expanding landscape of artificial
        intelligence
      </p>
    </div>
  );
}
