import { CustomLink } from "./CustomLink";

export function HeroSection() {
    return (
      <section className="grid md:grid-cols-2 items-center h-[calc(100vh-70px)] max-h-[678px]">
        <div>
          <p className="text-lg mb-1">Hello There</p>
          <h1 className="font-title tracking-wider text-3xl sm:text-6xl -ml-0.5">
            Full Stack Developer
          </h1>
          <p className="text-zinc-300 mt-2">
            Passionate about technology, social sciences, art, video games, and
            martial arts. I have over 15 years of prior experience as a
            psychologist, and I am currently a Front-End Web Developer and
            Full-Stack Web Developer with Cybersecurity, with over a thousand
            hours of training.
          </p>
          <CustomLink href="#project" className="mt-4">
            My Work
          </CustomLink>
        </div>
        <div></div>
      </section>
    );
}