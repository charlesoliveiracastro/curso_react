type HeadingProps = {
  children: React.ReactNode
}

export function Heading(props: HeadingProps) {
  return (
    <h1 className='text-3xl font-bold flex items-center justify-center gap-2'>
      {props.children}
    </h1>
  )
}
