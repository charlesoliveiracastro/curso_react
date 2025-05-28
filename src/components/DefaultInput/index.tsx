type DefaultInputProps = {
  label?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ label, id, ...props }: DefaultInputProps) {
  return (
    <>
      {label && (
        <label htmlFor={id} className='m-1'>
          {label}
        </label>
      )}
      {/* <label htmlFor={id}>{label ? label : 'Informe uma Label'}</label> */}
      <input
        id={id}
        className='text-1.8xl border-2 border-solid border-transparent border-b-green-600 bg-transparent p-1.5 text-center transition-all duration-100 ease-in-out outline-none placeholder:italic focus:rounded-md focus:border-green-600 disabled:border-b-[0.2rem] disabled:border-b-gray-500'
        {...props}
      />
    </>
  );
}
