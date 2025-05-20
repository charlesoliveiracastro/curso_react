import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { DefaultInput } from '../DefaultInput';
import { DefaultButton } from '../DefaultButton';
import { Cycles } from '../Cycles';

export function MainForm() {
  return (
    <form
      className='flex flex-col gap-1 items-center justify-center text-center'
      action=''
    >
      <div className='flex flex-col gap-1'>
        <DefaultInput
          type='text'
          id='taskInput'
          label='Task'
          placeholder='Informe a tarefa...'
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
