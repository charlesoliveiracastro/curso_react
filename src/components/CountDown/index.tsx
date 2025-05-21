import { useTaskContext } from '../../context/TaskContext/useTaskContext';

export function CountDown() {
  const { state } = useTaskContext();

  return (
    <div className='font-bold mt-3 text-6xl sm:text-7xl md:text-8xl lg:text-9xl'>
      {state.formattedSecondsRemaining}
    </div>
  );
}
