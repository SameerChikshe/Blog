"use server";
import { headers } from 'next/headers';

export default async function getPostsAndImages() {
  const host = headers().get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const [postsRes, imagesRes] = await Promise.all([
    fetch(`${protocol}://${host}/api/posts`),
    fetch('https://picsum.photos/v2/list?page=1&limit=100'),
  ]);
  const postsData = await postsRes.json();
  const imagesData = await imagesRes.json();
  return { posts: postsData, thumbnails: imagesData };
} 