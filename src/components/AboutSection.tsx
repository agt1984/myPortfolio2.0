import Image from "next/image";
import { Heading } from "./Heading";

export function AboutSection() {
    return (
        <section>
            <Heading title="About me" desc="Let me know something about me"/>

            <div className="flex gap-4 flex-col md:flex-row items-center">
                <div className="h-80 w-80 shrink-0 rounded-md overflow-hidden">
                    <Image src="/agt.jpg" alt="" width={600} height={600} className="w-full h-full object-top object-cover"/>
                </div>
            </div>
        </section>
    );
}