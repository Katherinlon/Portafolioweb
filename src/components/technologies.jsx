import { TechnologyItem } from "./technology-item";

export function Technologies() {
  return (
    <div>
      <p className="uppercase text-center block mb-5 mt-5 font-extrabold text-gray-600 dark:text-slate-200">
        Tecnologías
      </p>
      <section className="grid grid-cols-3 gap-5 mb-20">
        <TechnologyItem icon="html" text="HTML" />
        <TechnologyItem icon="css" text="CSS" />
        <TechnologyItem icon="javascript" text="JavaScript" />
      </section>
    </div>
  );
}
