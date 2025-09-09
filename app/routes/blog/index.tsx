import type { PostMeta } from '~/types';
import type { Route } from './+types/index';
import PostCard from '~/components/PostCard';

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

  return (
    <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-600">
      <h2 className="text-3xl font-bold text-white mb-2">Our Blog</h2>

      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
