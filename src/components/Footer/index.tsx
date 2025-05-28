export function Footer() {
  return (
    <footer className='mt-10 flex flex-col items-center justify-center gap-2 text-xs'>
      <a href='#' className='cursor-pointer hover:underline'>
        Entenda como funciona a tecnica Pomodoro
      </a>
      <p className='cursor-pointer hover:underline'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </p>
    </footer>
  );
}
