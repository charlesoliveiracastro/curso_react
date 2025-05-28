type HeadingProps = {
  children: React.ReactNode;
};

export function Heading(props: HeadingProps) {
  return (
    <h1 className='mt-5 flex items-center justify-center gap-2 font-bold'>
      {props.children}
    </h1>
  );
}
