"use client";

import React, { useState, useMemo } from "react";
import styles from "./postListSection.module.scss";
import PostPreview from "./PostPreview";
import { useFetchPostsWithDetails } from "hooks/useFetchPostList";
import Pagination from "@/components/Pagination";
import PostModal from "@/components/Blog/PostModal";

const PostListSection = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data, totalPages, loading } = useFetchPostsWithDetails(currentPage);
  const [currentPostId, setCurrentPostId] = useState<number | null>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

  return (
    <section className={styles.sectionContainer}>
      {!loading ? (
        data.map(
          ({ author, title, excerpt, featured_media, date, id }, idx) => {
            return (
              <PostPreview
                setIsModalOpen={setIsModalOpen}
                date={date}
                image={featured_media}
                excerpt={excerpt?.rendered}
                title={title?.rendered}
                author={author}
                postId={id}
                key={idx}
                index={idx}
                setCurrentPostId={setCurrentPostId}
              />
            );
          }
        )
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
      {currentPostId && (
        <PostModal
          postId={currentPostId}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
    </section>
  );
};

export default PostListSection;
