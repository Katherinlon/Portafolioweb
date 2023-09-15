export function GridFondo() {
  return (
    <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
      <defs>
        <pattern
          id=":Rbm:"
          width="128"
          height="128"
          patternUnits="userSpaceOnUse"
          x="50%"
          y="100%"
        >
          <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#:Rbm:)"></rect>
    </svg>
  );
}
