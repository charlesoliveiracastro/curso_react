import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'
import { useState } from 'react';

type AvailableThemes = 'light' | 'dark';


export function Menu() {

  const[theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark') as AvailableThemes);
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'light' : 'dark'
  ) }

  return (
    <nav className='flex items-center justify-center gap-3 pt-2'>
      <a
        className='inline-flex items-center justify-center bg-green-600 text-gray-900 no-underline transition-all duration-100 ease-in-out hover:brightness-80 rounded-sm'
        href='#' aria-label='Ir para a página inicial' title='Ir para a página inicial' 
      >
        <HouseIcon className='w-8 h-8 p-1' />
      </a>
      <a
        className='inline-flex items-center justify-center bg-green-600 text-gray-900 no-underline transition-all duration-100 ease-in-out hover:brightness-80 rounded-sm'
        href='#' aria-label='Ir para a página de histórico' title='Ir para a página de histórico'
      >
        <HistoryIcon className='w-8 h-8 p-1' />
      </a>
      <a
        className='inline-flex items-center justify-center bg-green-600 text-gray-900 no-underline transition-all duration-100 ease-in-out hover:brightness-80 rounded-sm'
        href='#' aria-label='Ir para a página de configurações' title='Ir para a página de configurações'
      >
        <SettingsIcon className='w-8 h-8 p-1' />
      </a>
      <a
        className='inline-flex items-center justify-center bg-green-600 text-gray-900 no-underline transition-all duration-100 ease-in-out hover:brightness-80 rounded-sm'
        href='#' aria-label='Mudar tema' title='Mudar tema' onClick={handleThemeChange}
      >
        <SunIcon className='w-8 h-8 p-1' />
      </a>
    </nav>
  )
}
