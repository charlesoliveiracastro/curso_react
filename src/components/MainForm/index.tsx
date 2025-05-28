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
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

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
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
        config: { ...prevState.config },
      };
    });
  }

  function handleInterruptTask() {
    setState((prevState) => {
      return {
        ...prevState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: prevState.tasks.map((task) => {
          if (prevState.activeTask && prevState.activeTask.id === task.id) {
            return {
              ...task,
              interruptDate: Date.now(),
            };
          }
          return task;
        }),
      };
    });
  }

  return (
    <form
      onSubmit={handleCreateNewTask}
      className='flex flex-col items-center justify-center gap-1 text-center'
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
          disabled={!!state.activeTask}
        />
      </div>

      <div className='flex flex-col gap-1'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      {state.currentCycle > 0 && (
        <div className='flex flex-col gap-1'>
          <Cycles />
        </div>
      )}

      <div className='flex flex-col gap-1'>
        {!state.activeTask && (
          <DefaultButton
            type='submit'
            key='startButton'
            aria-label='Iniciar nova tarefa'
            title='Iniciar nova tarefa'
            icon={<PlayCircleIcon />}
          />
        )}

        {state.activeTask && (
          <DefaultButton
            type='button'
            key='stopButton'
            color='red'
            aria-label='Interromper tarefa atual'
            title='Interromper tarefa atual'
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
          />
        )}
      </div>
    </form>
  );
}
