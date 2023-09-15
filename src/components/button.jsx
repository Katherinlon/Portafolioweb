export function Button({ text, border, href }) {
  // Destructuración de objetos
  // const { text } = props

  if (border === true) {
    return (
      <a
        rel="noreferrer"
        target="_blank"
        href={href}
        className="text-sky-700 hover:text-white border-2 border-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-sky-500 dark:text-sky-500 dark:hover:text-white dark:hover:bg-sky-500 dark:focus:ring-sky-800"
      >
        {text}
      </a>
    );
  } else {
    return (
      <a
        rel="noreferrer"
        target="_blank"
        href={href}
        className="text-white bg-sky-400 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-sky-500 dark:hover:bg-sky-600 focus:outline-none dark:focus:ring-sky-800 border-2 border-sky-600"
      >
        {text}
      </a>
    );
  }
}
