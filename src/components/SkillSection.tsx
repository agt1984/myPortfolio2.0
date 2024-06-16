import { skills } from "@/data/skillsData";
import { Heading } from "./Heading";

export function SkillsSection() {
  return (
    <section>
        <Heading title="Skills" desc="My current stack are:" />
        <div>
            {Object.values(skills).map((cate) => {
                return (
                    <div key={cate.title}>
                        <p>{cate.title}</p>
                        <ul>
                            {cate.stacks.map(({ icon: Icon, stack }) => {
                                return (
                                    <li key={stack}>
                                        
                                        <Icon className="text-xl" />
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
