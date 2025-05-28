import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';

type AvailableThemes = 'light' | 'dark';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storedTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storedTheme;
  });

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(
      (prevTheme) =>
        (prevTheme === 'dark' ? 'light' : 'dark') as AvailableThemes,
    );
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const lastThemeIcon = {
    dark: <SunIcon className='h-8 w-8 p-1' />,
    light: <MoonIcon className='h-8 w-8 p-1' />,
  };

  return (
    <nav className='flex items-center justify-center gap-3 pt-2'>
      <a
        className='inline-flex items-center justify-center rounded-sm bg-green-600 text-gray-900 no-underline transition-all duration-100 ease-in-out hover:brightness-80'
        href='#'
        aria-label='Ir para a página inicial'
        title='Ir para a página inicial'
      >
        <HouseIcon className='h-8 w-8 p-1' />
      </a>
      <a
        className='inline-flex items-center justify-center rounded-sm bg-green-600 text-gray-900 no-underline transition-all duration-100 ease-in-out hover:brightness-80'
        href='#'
        aria-label='Ir para a página de histórico'
        title='Ir para a página de histórico'
      >
        <HistoryIcon className='h-8 w-8 p-1' />
      </a>
      <a
        className='inline-flex items-center justify-center rounded-sm bg-green-600 text-gray-900 no-underline transition-all duration-100 ease-in-out hover:brightness-80'
        href='#'
        aria-label='Ir para a página de configurações'
        title='Ir para a página de configurações'
      >
        <SettingsIcon className='h-8 w-8 p-1' />
      </a>
      <a
        className='inline-flex items-center justify-center rounded-sm bg-green-600 text-gray-900 no-underline transition-all duration-100 ease-in-out hover:brightness-80'
        href='#'
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={handleThemeChange}
      >
        {lastThemeIcon[theme]}
        {/* {theme === 'dark' ? (
          <SunIcon className='w-8 h-8 p-1' />
        ) : (
          <MoonIcon className='w-8 h-8 p-1' />
        )} */}
      </a>
    </nav>
  );
}
