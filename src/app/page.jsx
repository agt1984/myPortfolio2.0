import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/*IMAGE CONTAINER*/}
      <div className="h-1/2 lg:h-96 lg:mt-10 lg:w-1/2 mb-10 md:mb-2 sm:mb-10 relative">
        <Image src="/heroAgt.png" alt="" fill className="object-contain" />
      </div>
      {/*TEXT CONTAINER*/}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/*TITULO*/}
        <h1 className="text-4xl md:text-6xl font-bold">
          Desarrollador Web Full-Stack
        </h1>
        {/*Descripcion*/}
        <p className="md:text-xl">
          Apasionado por la tecnología, las ciencias sociales, el arte, los
          videojuegos y las artes marciales. Tengo más de 15 años de experiencia
          previa como psicólogo, y actualmente soy desarrollador web Front-End y
          desarrollador web Full-Stack con ciberseguridad con más de mil horas
          de formación.
        </p>
        {/*BOTONES*/}
        <div className="flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            Mira mi Trabajo
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contáctame
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
