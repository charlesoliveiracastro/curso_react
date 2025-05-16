export function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center gap-2 mt-10 text-xs'>
      <a href='#' className='hover:underline cursor-pointer'>
        Entenda como funciona a tecnica Pomodoro
      </a>
      <p className='hover:underline cursor-pointer'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
      </p>
    </footer>
  )
}
