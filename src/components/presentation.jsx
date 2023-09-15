import { Button } from "./button";
import { GridFondo } from "./grid-fondo";
import { Info } from "./info";

export function Presentation() {
  return (
    <div className="container mx-auto md:mt-28 mt-10" id="inicio">
      <div className="order-last text-center">
        <div className="absolute inset-x-0 bottom-1/2 top-0 dark:text-slate-600 text-slate-200 [mask-image:linear-gradient(white,transparent)]">
          <GridFondo />
        </div>
        <div className="relative max-w-6xl pt-16 mx-auto">
          <div className="flex justify-between items-center flex-col-reverse md:flex-row">
            <div className="text-start">
              <h2 className="text-4xl md:text-3xl font-semibold font-sans mb-5 text-gray-800 dark:text-slate-50">
                Hola, soy
              </h2>
              <h1 className="font-extrabold font-sans mt-3 mb-2 text-transparent text-5xl md:text-7xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Katherin Londoño
              </h1>
              <p className="font-light text-2xl md:text-4xl font-sans text-gray-500 dark:text-slate-100">
                Aprendiz de Desarrollo de Software
              </p>
              <div className="mt-10">
                <Button text="Descargar CV" border={false} />
                <Button text="Proyectos" border={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="container mx-auto" id="presentacion">
        <section className="my-28 scroll-mt-14">
          <section className="grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3 rounded-3xl border dark:border-zinc-600 border-zinc-300 p-10">
            <Info icon="calendar" title="Experiencia" text="Nothing" />
            <Info icon="www" title="Proyectos" text="Este es el primero" />
            <Info
              icon="school"
              title="Estudios"
              text="Desarrollo de Software - SENA"
            />
          </section>
        </section>
      </main>
    </div>
  );
}
