import { projects } from "@/data/projectData";
import Image from "next/image";

export function ProjectSection() {
  return (
    <section>
      <p className="font-title tracking-wider text-4xl uppercase">Project</p>
      <p className="text-zinc-400">My best project i have built</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          return <ProjectCard key={project.title} project={project}/>;
        })}
      </div>
    </section>
  );
}

interface IProjectCard {
  project: (typeof projects)[0];
}

function ProjectCard({ project }: IProjectCard) {
  return (
    <div className="bg-zinc-800/50 border border-zinc-800 rounded-lg overflow-hidden">
      <div>
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <ul className="flex gap-4 mb-2">
          {project.stacks.map((stack) => {
            return (
              <li 
                  key={stack} 
                  className="px-4 py-1 text-xs border border-r-zinc-700 text-zinc-400 rounded-md"
              >
                {stack}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
