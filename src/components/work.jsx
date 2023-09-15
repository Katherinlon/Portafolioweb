import { Button } from "./button";

export function Work() {
  return (
    <article
      className="h-full border-y dark:border-slate-800 border-slate-200"
      id="contacto"
    >
      <div className="md:flex block justify-between items-center py-16">
        <div>
          <h2 className="dark:text-white text-slate-800 font-bold md:text-5xl text-6xl my-8 md:my-0">
            ¿Quieres trabajar conmigo?
          </h2>
          <p className="mt-5 text-4xl dark:text-neutral-300 text-neutral-700">
            Enviame un email o un WhatsApp
          </p>
        </div>
        <div className="mt-10 md:mt-0">
          <Button
            border={true}
            text="Gmail"
            href="mailto:londonokatherin80@gmail.com"
          />
          <Button
            border={true}
            text="Whatsapp"
            href="https://wa.me/+573016271595"
          />
        </div>
      </div>
    </article>
  );
}
