export function Info({ icon, title, text }) {
  return (
    <article className="gap-4 p-5">
      <span className="shrink-0 rounded-lg shadow-lg">
        {icon === "calendar" && <img src="/calendar.svg" />}
        {icon === "school" && <img src="/school.svg" />}
        {icon === "www" && <img src="/www.svg" />}
      </span>
      <div>
        <h2 className="text-4xl font-bold dark:text-blue-100 text-blue-400 mt-3">
          {title}
        </h2>
        <p className="mt-1 text-xl dark:text-blue-200 text-blue-300">{text}</p>
      </div>
    </article>
  );
}
