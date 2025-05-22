import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';
import { useRef } from 'react';
import { useTaskContext } from '../../context/TaskContext/useTaskContext';
import { TaskModel } from '../../models/TaskModel';
import {
  getNextCycle,
  getWorkTimeType as getNextCycleType,
} from '../../utils/cycleUtils';

export function MainForm() {
  const taskDescInput = useRef<HTMLInputElement>(null);
  const { state, setState } = useTaskContext();

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskDescInput.current === null) return;

    const taskDescription = taskDescInput.current.value.trim();

    if (!taskDescription) {
      alert('Informe a tarefa');
      return;
    }

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    const newTask: TaskModel = {
      id: Math.random().toString(36).substring(2, 9),
      name: taskDescription,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: '00:00',
        tasks: [...prevState.tasks, newTask],
        config: { ...prevState.config },
      };
    });
  }

  return (
    <form
      onSubmit={handleCreateNewTask}
      className='flex flex-col gap-1 items-center justify-center text-center'
      action=''
    >
      <div className='flex flex-col gap-1'>
        <DefaultInput
          type='text'
          id='taskInput'
          label='Task'
          placeholder='Informe a tarefa...'
          // value={taskDescription}
          // onChange={(e) => setTaskName(e.target.value)}
          ref={taskDescInput}
        />
      </div>

      <div className='flex flex-col gap-1'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className='flex flex-col gap-1'>
        <Cycles />
      </div>

      <div className='flex flex-col gap-1'>
        <DefaultButton icon={<PlayCircleIcon className='w-7 h-7' />} />
        <DefaultButton
          color='red'
          icon={<StopCircleIcon className='w-7 h-7' />}
        />
      </div>
    </form>
  );
}
