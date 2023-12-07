import { BASE_URL } from "constants/blog";
import { useState, useEffect } from "react";
import { Post } from "types";

export const useFetchPostsWithDetails = (page?: number) => {
  const [data, setData] = useState<Post[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const postsRes = await fetch(
          `${BASE_URL}posts?page=${page}&per_page=2`
        );
        const postsData = await postsRes.json();
        const xTotal = parseInt(postsRes.headers.get("X-WP-Total") || "0", 10);
        const xTotalPages = parseInt(
          postsRes.headers.get("X-WP-TotalPages") || "0",
          10
        );

        setTotal(xTotal);
        setTotalPages(xTotalPages);

        const detailedPosts = await Promise.all(
          postsData.map(async (post: any) => {
            const authorRes = await fetch(`${BASE_URL}users?id=${post.author}`);
            const authorData = await authorRes.json();

            const mediaRes = await fetch(
              `${BASE_URL}media/${post.featured_media}`
            );
            const mediaData = await mediaRes.json();

            return {
              ...post,
              author: authorData[0]?.name,
              featured_media:
                mediaData?.media_details?.sizes?.large?.source_url,
            };
          })
        );

        setData(detailedPosts);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }

    fetchData();
  }, [page]);

  return { data, loading, total, totalPages };
};
