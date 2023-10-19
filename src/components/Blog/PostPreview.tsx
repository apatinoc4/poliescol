import React from "react";
import Button from "@/components/Button";
import styles from "./postPreview.module.scss";
import Image from "next/image";
import clsx from "clsx";
import parse from "html-react-parser";
import { formatDate } from "utils";

interface PostPreviewProps {
  title: string;
  author?: string;
  excerpt: string;
  image?: string;
  index: number;
  date: any;
  postId: number;
  setIsModalOpen: (isModalOpen: boolean) => void;
  setCurrentPostId: (postId: number) => void;
}

const PostPreview = ({
  title,
  author,
  setIsModalOpen,
  excerpt,
  image,
  index,
  date,
  postId,
  setCurrentPostId,
}: PostPreviewProps) => {
  const togglePostDetails = () => {
    setCurrentPostId(postId);
    setIsModalOpen(true);
  };

  return (
    <div className={clsx(styles.container, { [styles.even]: index % 2 == 0 })}>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p className={styles.authorDate}>
          {author} / {formatDate(date)}
        </p>
        <div className={styles.body}>{parse(excerpt)}</div>
        <Button
          onClick={() => togglePostDetails()}
          variant="red-body"
          label="Leer más"
        />
      </div>
      <div className={styles.postImage}>
        <Image
          alt="missionVision.jpeg"
          className={styles.backgroundImage}
          fill
          src={image ? image : "/missionVision.jpeg"}
          sizes="100%"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default PostPreview;
