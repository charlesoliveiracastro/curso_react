type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button
        className={`mt-4 mb-4 border-none bg-${color}-600 flex min-h-10 min-w-52 cursor-pointer items-center justify-center rounded-md text-white transition-all duration-100 ease-in-out hover:brightness-80 disabled:bg-gray-500`}
        {...props}
      >
        {icon}
      </button>
    </>
  );
}
