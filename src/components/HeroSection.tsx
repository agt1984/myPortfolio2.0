import { CustomLink } from "./CustomLink";

export function HeroSection() {
    return (  
        <section className="grid md:grid-cols-2 items-center h-[calc(100vh-70px)] max-h-[678px]">
            <div>
                <p>Hello There</p>
                <h1>Full Stack Developer</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolores temporibus omnis reiciendis atque et nobis? Voluptatibus, officia quibusdam consectetur hic dolores dolore recusandae nemo nam blanditiis deserunt corrupti! Itaque.
                </p>
                <CustomLink href="#project">My Work</CustomLink>
            </div>
            <div></div>
        </section>
    );
}