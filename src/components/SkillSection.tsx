import { skills } from "@/data/skillsData";
import { Heading } from "./Heading";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28">
        <Heading title="Skills" desc="My current stack are:" />

        <div className="space-y-6">
            {Object.values(skills).map((cate) => {
                return (
                    <div key={cate.title}>
                        <p className="mb-2">{cate.title}</p>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6">
                            {cate.stacks.map(({ icon: Icon, stack }) => {
                                return (
                                    <li key={stack} className="bg-zinc-800/50 border border-zinc-800 p-4 inline-flex items-center gap-4 justify-center rounded-md">
                                        <Icon className="text-xl shrink-0" />
                                        {stack}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    </section>
  );
}
