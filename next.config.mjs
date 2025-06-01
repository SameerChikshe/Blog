/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['picsum.photos'],
  },
  async rewrites() {
    return [
      {
        source: '/api/posts',
        destination: 'https://jsonplaceholder.typicode.com/posts',
      },
      {
        source: '/api/posts/:id',
        destination: 'https://jsonplaceholder.typicode.com/posts/:id',
      },
      {
        source: '/api/posts/:id/comments',
        destination: 'https://jsonplaceholder.typicode.com/posts/:id/comments',
      },
    ];
  },
};

export default nextConfig;
