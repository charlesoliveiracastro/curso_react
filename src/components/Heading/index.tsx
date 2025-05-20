type HeadingProps = {
  children: React.ReactNode;
};

export function Heading(props: HeadingProps) {
  return (
    <h1 className='font-bold flex items-center mt-5 justify-center gap-2'>
      {props.children}
    </h1>
  );
}
