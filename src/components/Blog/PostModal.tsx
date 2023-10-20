"use client";

import React, { useEffect, useState } from "react";
import styles from "./postModal.module.scss";
import clsx from "clsx";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";
import Image from "next/image";
import { useFetchSinglePost } from "hooks/useFetchSinglePost";
import parse from "html-react-parser";
import { formatDate } from "utils";

interface PostModalProps {
  postId: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setPostId: (postId: number) => void;
}

const PostModal = ({
  isOpen,
  setIsOpen,
  postId,
  setPostId,
}: PostModalProps) => {
  const { post } = useFetchSinglePost(postId);
  const [isChangingPost, setIsChangingPost] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    setIsChangingPost(postId !== post?.id);
  }, [postId, post]);

  return (
    <div
      className={clsx(styles.container, {
        [styles.hidden]: !isOpen,
      })}
    >
      <Fade timeout={1000} in={isOpen}>
        <div onClick={() => setIsOpen(false)} className={styles.bg}></div>
      </Fade>
      <Slide
        timeout={500}
        direction="up"
        in={isOpen}
        mountOnEnter
        unmountOnExit
      >
        <div className={styles.body}>
          {post && !isChangingPost ? (
            <>
              <div className={styles.postImg}>
                <Image
                  alt="experienceSectionBg.png"
                  className={styles.backgroundImage}
                  fill
                  sizes="100%"
                  src={
                    post?.featured_media
                      ? (post?.featured_media as string)
                      : "/missionVision.jpeg"
                  }
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* <div className={styles.scrollIndicator}></div> */}
              <div className={styles.contents}>
                <h3>{post?.title.rendered}</h3>
                <p className={styles.authorDate}>
                  {post.author} / {formatDate(post?.date as string)}
                </p>
                <div className={styles.article}>
                  {parse(post?.content.rendered as string)}
                </div>
                <div
                  className={clsx(styles.postNavigation, {
                    [styles.noPrev]: !post?.prevPost?.id,
                    [styles.noNext]: !post?.nextPost?.id,
                  })}
                >
                  {post.prevPost?.id && (
                    <div
                      className={clsx(styles.navigate, styles.prev)}
                      onClick={() => setPostId(post.prevPost?.id as number)}
                    >
                      <p>Anterior</p>
                      <p>{post?.prevPost?.title}</p>
                    </div>
                  )}
                  {post?.nextPost?.id && (
                    <div className={clsx(styles.navigate, styles.next)}>
                      <p onClick={() => setPostId(post.nextPost?.id as number)}>
                        Siguiente
                      </p>
                      <p>{post?.nextPost?.title}</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </Slide>
    </div>
  );
};

export default PostModal;
