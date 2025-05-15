import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react'

export function Menu() {
  return (
    <nav className='flex items-center justify-center gap-3 pt-2'>
      <a
        className='inline-flex items-center justify-center bg-green-600 text-gray-900 no-underline transition-all duration-100 ease-in-out hover:brightness-80 rounded-sm'
        href='#'
      >
        <HouseIcon className='w-8 h-8 p-1' />
      </a>
      <a
        className='inline-flex items-center justify-center bg-green-600 text-gray-900 no-underline transition-all duration-100 ease-in-out hover:brightness-80 rounded-sm'
        href='#'
      >
        <HistoryIcon className='w-8 h-8 p-1' />
      </a>
      <a
        className='inline-flex items-center justify-center bg-green-600 text-gray-900 no-underline transition-all duration-100 ease-in-out hover:brightness-80 rounded-sm'
        href='#'
      >
        <SettingsIcon className='w-8 h-8 p-1' />
      </a>
      <a
        className='inline-flex items-center justify-center bg-green-600 text-gray-900 no-underline transition-all duration-100 ease-in-out hover:brightness-80 rounded-sm'
        href='#'
      >
        <SunIcon className='w-8 h-8 p-1' />
      </a>
    </nav>
  )
}
