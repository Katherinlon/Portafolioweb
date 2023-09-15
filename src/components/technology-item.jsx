export function TechnologyItem({ icon, text }) {
  return (
    <div>
      <span className="text-center flex flex-col overflow-hidden items-center p-2 rounded-lg dark:text-slate-300 text-slate-600 dark:bg-slate-800 bg-neutral-50 w-100">
        {icon === "html" && <img src="/html.svg" />}
        {icon === "css" && <img src="/css.svg" />}
        {icon === "javascript" && <img src="/javascript.svg" />}
        <small className="text-center">{text}</small>
      </span>
    </div>
  );
}
