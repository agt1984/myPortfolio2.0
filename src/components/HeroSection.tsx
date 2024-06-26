import { CustomLink } from "./CustomLink";
import Image from "next/image";

export function HeroSection() {
    return (
      <section id="home" className="grid md:grid-cols-2 items-center h-[calc(100vh-70px)] max-h-[678px] scroll-mt-28">
        <div>
          <p className="text-lg mb-1">Hi, I am Alvaro Luis Gonzalez, and i am a</p>
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
        <div className="hidden md:flex mx-auto">
          <Image
            src="/fotomiaLogomODIF.png"
            alt="profile image"
            width={350}
            height={250}
            className="object-cover object-top self-end ml-12"
          />
          <div className="absolute bottom- w-full h-1/2"></div>
        </div>
      </section>
    );
}