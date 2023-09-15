export function Header() {
  return (
    <div className="bg-white/90 w-full z-10 w-100 items-center fixed top-0 backdrop-blur-xl dark:bg-slate-800/50">
      <header className="container mx-auto h-auto flex justify-between py-3">
        <a
          href="/"
          className="font-extrabold text-dark dark:text-white text-2xl hover:border-b-2 border-b-2 border-b-transparent hover:border-b-blue-500 hover:text-blue-500"
        >
          Katherin Londoño
        </a>
        <ul className="md:flex justify-between items-center hidden">
          <li>
            <a
              href="#inicio"
              className="font-sans text-gray-800 dark:text-slate-100 mx-2 px-2 py-3 hover:border-b-2 border-blue-500 hover:text-blue-500 font-semibold"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#presentacion"
              className="font-sans text-gray-800 dark:text-slate-100 mx-2 px-2 py-3 hover:border-b-2 border-blue-500 hover:text-blue-500 font-semibold"
            >
              Presentación
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className="font-sans text-gray-800 dark:text-slate-100 mx-2 px-2 py-3 hover:border-b-2 border-blue-500 hover:text-blue-500 font-semibold"
            >
              Contacto
            </a>
          </li>
        </ul>
        <ul className="flex justify-between items-center dark:text-white text-slate-800">
          <li className="mx-2">
            <a
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100011229943355"
              target="_blank"
            >
              <img src="/facebook.svg" alt="Facebook" />
            </a>
          </li>
          <li className="mx-2">
            <a
              rel="noreferrer"
              href="https://www.instagram.com/katherinjimenez28"
              target="_blank"
            >
              <img src="/instagram.svg" alt="Instagram" />
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
