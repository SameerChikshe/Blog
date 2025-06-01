"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import getPostAndComments from "@/app/actions/getPostAndComments";
import { SkeletonDetail } from "../../../components/ui/SkeletonDetail";
import Image from "next/image";

export default function PostDetail() {
  const { postid } = useParams();
  const [imageUrl, setImageUrl] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  const [postData, setPostData] = useState({ post: null, comments: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      const data = await getPostAndComments(postid);
      if (isMounted) {
        setPostData(data);
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [postid]);

  useEffect(() => {
    async function fetchImage() {
      const imagesRes = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=100"
      );
      const imagesData = await imagesRes.json();
      setImageUrl(imagesData[Number(postid) - 1]?.download_url || null);
      setImageLoading(false);
    }
    fetchImage();
  }, [postid]);

  return (
    <div className="w-full">
      <h1 className="text-[#60AFFA] text-4xl text-center italic mb-4">
        What&apos;s Inside This Blog?{" "}
      </h1>
      {!loading ? (
        <div className="w-full bg-white p-6 rounded shadow detail_container">
          <h1 className="text-3xl font-extrabold text-slate-50 mb-2">
            {postData?.post?.title?.toUpperCase()}
          </h1>
          <p className="mb-4 text-base text-slate-300">
            {postData?.post?.body}
          </p>
          {imageLoading ? (
            <div className="w-full h-64 flex items-center justify-center bg-gray-100 rounded mb-4">
              Loading image...
            </div>
          ) : (
            imageUrl && (
              <Image
                src={imageUrl}
                alt={postData?.post?.title}
                className="w-full h-64 object-cover rounded mb-4"
                width={200}
                height={200}
              />
            )
          )}
          <h2 className="text-xl font-bold text-slate-100 mb-2">Comments</h2>
          <ul>
            {postData.comments.map((comment) => (
              <li
                key={comment?.id}
                className="mb-3 border-b border-b-[#4b5563] pb-2"
              >
                <div className="text-slate-200 font-semibold">
                  {comment?.name}{" "}
                  <span className="text-slate-400 text-sm font-normal italic">
                    ({comment?.email})
                  </span>
                </div>
                <div className="text-slate-500 text-sm leading-relaxed">
                  {comment?.body}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <SkeletonDetail />
      )}
    </div>
  );
}
