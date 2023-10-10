"use client";

import React, { useState, useMemo } from "react";
import styles from "./postListSection.module.scss";
import PostPreview from "./PostPreview";
import { useFetchPostsWithDetails } from "hooks/useFetchPostList";
import Pagination from "@/components/Pagination";

const PostListSection = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, totalPages, loading } = useFetchPostsWithDetails(currentPage);

  return (
    <section className={styles.sectionContainer}>
      {!loading ? (
        data.map(({ author, title, excerpt, featured_media, date }, idx) => {
          return (
            <PostPreview
              date={date}
              image={featured_media}
              excerpt={excerpt?.rendered}
              title={title?.rendered}
              author={author}
              key={idx}
              index={idx}
            />
          );
        })
      ) : (
        <div className={styles.loading}>
          <p>Cargando...</p>
        </div>
      )}
      {totalPages > 1 && !loading && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </section>
  );
};

export default PostListSection;
