import { Link } from 'react-router';
import type { PostMeta } from '~/types';
import type { Route } from './+types/index';

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL('/posts-meta.json', request.url);

  const res = await fetch(url.href);
  if (!res.ok) throw new Error('Failed to fetch data');

  const data = await res.json();

  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;
  console.log(posts);
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Our Blog</h1>
      <p className="text-lg text-gray-300 text-center">
        Welcome to the Blog page of The friendly dev!
      </p>
    </div>
  );
};

export default BlogPage;
