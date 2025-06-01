import Link from "next/link";
import getPostsAndImages from "@/app/actions/getPostsAndImages";
import { SkeletonCard } from "@/components/ui/SkeletonCard";
import Image from "next/image";

export default async function Home() {
  const { posts, thumbnails } = await getPostsAndImages();

  return (
    <div className="w-full">
      <h1 className="text-[#60AFFA] text-4xl text-center italic mb-4">Top Blog Posts This Week</h1>

      {posts ? <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 pl-0">
        {posts.map((post, idx) => (
          <Link key={post.id} href={`/posts/${post.id}`} className="card">
            <Image
              src={thumbnails[idx]?.download_url || "/default-thumb.jpg"}
              alt={post.title}
              className="card-img"
              width={200}
              height={200}
            />
            <h2 className="font-bold text-lg mb-1">{post.title.toUpperCase()}</h2>
            <p className="text-gray-500 text-sm">{post.body}</p>
          </Link>
        ))}
      </div>
        :
        <SkeletonCard />
      }
    </div>
  );
}
