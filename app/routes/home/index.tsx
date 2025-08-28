import FeaturedProjects from '~/components/FeatureProjects';
import type { Route } from './+types/index';
import type { Project } from '~/types';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The friendly dev' },
    { name: 'description', content: 'Welcome to The friendly dev!' },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {}

const HomePage = () => {
  return (
    <>
      <FeaturedProjects />
    </>
  );
};

export default HomePage;
