import { Container } from './components/Container'
import { CountDown } from './components/CountDown'
import { DefaultInput } from './components/DefaultInput'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import './styles/global.css'

export function App() {
  return (
    <div className='bg-gray-900 h-screen w-screen text-white'>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form
          className='flex flex-col gap-1 items-center justify-center text-center'
          action=''
        >
          <div className='flex flex-col gap-1'>
            <DefaultInput type='text' id='taskInput' label="Task" placeholder='Informe a tarefa...' />
          </div>

          <div className='flex flex-col gap-1'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='flex flex-col gap-1'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0 0</p>
          </div>

          <div className='flex flex-col gap-1'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>

      <Container>
        <section>FOOTER</section>
      </Container>
    </div>
  )
}
