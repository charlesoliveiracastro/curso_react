import { TimerIcon } from 'lucide-react';

export function Logo() {
  return (
    <div className='flex items-center justify-center gap-1 pt-5'>
      <a
        className='flex flex-col items-center justify-center text-[2.2rem] font-bold text-green-600 no-underline transition-all duration-100 ease-in-out hover:brightness-80'
        href='#'
      >
        <TimerIcon className='h-12 w-12 p-1' />
        <span>Chronos</span>
      </a>
    </div>
  );
}
