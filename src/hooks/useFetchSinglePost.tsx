import { BASE_URL } from "constants/blog";
import { useState, useEffect } from "react";
import { Post } from "types";

export const useFetchSinglePost = (postId: number) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const postRes = await fetch(`${BASE_URL}posts/${postId}`);
        const postData = await postRes.json();

        const authorRes = await fetch(`${BASE_URL}users?id=${postData.author}`);
        const authorData = await authorRes.json();

        const mediaRes = await fetch(
          `${BASE_URL}media/${postData.featured_media}`
        );
        const mediaData = await mediaRes.json();

        setPost({
          ...postData,
          author: authorData[0]?.name,
          featured_media: mediaData?.guid?.rendered,
        });

        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }

    fetchData();
  }, [postId]);

  return { post, loading };
};
