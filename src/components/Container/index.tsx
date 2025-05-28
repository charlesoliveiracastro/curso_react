type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className='max-w-screen-1xl mx-auto flex items-center justify-center'>
      <div className='mr-8 ml-8'>{children}</div>
    </div>
  );
}
