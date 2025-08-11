import type { Route } from './+types/index';

export async function loader({ request }: Route.LoaderArgs): Promise<any> {
  const res = await fetch('http://localhost:8000/projects');
  const data = await res.json();

  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData ?? { projects: [] };
  console.log(projects);
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Our Projects</h1>
      <p>Welcome to the Projects page of The friendly dev!</p>
    </div>
  );
};

export default ProjectsPage;
