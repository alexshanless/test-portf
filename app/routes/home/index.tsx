import FeaturedProjects from '~/components/FeatureProjects';
import type { Route } from './+types/index';
import type { Project } from '~/types';
import type { PostMeta } from '~/types';
import LatestsPosts from '~/components/LatestsPosts';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The friendly dev' },
    { name: 'description', content: 'Welcome to The friendly dev!' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  const url = new URL(request.url);

  const [projectRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`),
    fetch(new URL('/posts-meta.json', url)),
  ]);

  if (!projectRes.ok || !postRes.ok) {
    throw new Error('Failed to fetch projects or posts');
  }

  const [projects, posts] = await Promise.all([
    projectRes.json(),
    postRes.json(),
  ]);

  return { projects, posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;

  return (
    <>
      <FeaturedProjects projects={projects} count={2} />
      <LatestsPosts posts={posts} />
    </>
  );
};

export default HomePage;
