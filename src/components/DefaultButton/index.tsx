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
        className={`border-none mt-4 mb-4 bg-${color}-600 rounded-md text-white flex items-center justify-center min-w-52 min-h-10 transition-all duration-100 ease-in-out hover:brightness-80 disabled:bg-gray-500 cursor-pointer`}
        {...props}
      >
        {icon}
      </button>
    </>
  );
}
