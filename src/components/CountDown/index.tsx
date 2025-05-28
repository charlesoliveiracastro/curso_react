import { useTaskContext } from '../../context/TaskContext/useTaskContext';

export function CountDown() {
  const { state } = useTaskContext();

  return (
    <div className='mt-3 text-6xl font-bold sm:text-7xl md:text-8xl lg:text-9xl'>
      {state.formattedSecondsRemaining}
    </div>
  );
}
