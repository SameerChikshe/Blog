"use server";
import { headers } from 'next/headers';

export default async function getPostAndComments(postid) {
  const host = headers().get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const [postRes, commentsRes] = await Promise.all([
    fetch(`${protocol}://${host}/api/posts/${postid}`),
    fetch(`${protocol}://${host}/api/posts/${postid}/comments`),
  ]);
  const post = await postRes.json();
  const comments = await commentsRes.json();
  return { post, comments };
} 