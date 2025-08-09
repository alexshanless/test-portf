import type { Route } from "./+types/index";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "The friendly dev" },
    { name: "description", content: "Welcome to The friendly dev!" },
  ];
}

export default function Home() {
  return <>My app</>;
}
