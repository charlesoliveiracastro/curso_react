type DefaultInputProps = {
    label?: String;
  } & React.ComponentProps<'input'>; 


export function DefaultInput({label, id, ...props}: DefaultInputProps) {
  return (
    <>
      {label && <label htmlFor={id} className="m-1">{label}</label>}
      {/* <label htmlFor={id}>{label ? label : 'Informe uma Label'}</label> */}
      <input
      id={id}
      className='bg-transparent border-solid text-center text-1.8xl p-1.5 outline-none border-2 border-transparent border-b-green-600 transition-all duration-100 ease-in-out focus:rounded-md focus:border-green-600 placeholder:italic disabled:border-b-[0.2rem] disabled:border-b-gray-500'
      {...props}
    />
    </> 
  )
}
