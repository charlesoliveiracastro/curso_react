import './styles/global.css'
import React, { useState } from 'react'

export function Bkp() {
  const [files, setFiles] = useState<File[]>([])
  const [fileNames, setFileNames] = useState<string[]>([])
  const [tasks, setTasks] = useState<string[]>([])
  const [newTask, setNewTask] = useState<string>('')
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleFileNameChange = (index: number, newName: string) => {
    const updatedFileNames = [...fileNames]
    updatedFileNames[index] = newName
    setFileNames(updatedFileNames)
  }

  const handleFileRemove = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index)
    const updatedFileNames = fileNames.filter((_, i) => i !== index)
    setFiles(updatedFiles)
    setFileNames(updatedFileNames)
  }

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, newTask])
      setNewTask('')
      setIsModalOpen(false)
    }
  }

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Cabeçalho */}
      <header className='bg-slate-700 text-white py-4 shadow-md'>
        <div className='max-w-4xl mx-auto px-4'>
          <h1 className='text-3xl font-bold text-slate-100'>INVESTRACK</h1>
        </div>
      </header>

      {/* Formulário de Cadastro */}
      <main className='max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6'>
        <h2 className='text-2xl font-bold mb-4 text-slate-700'>
          CADASTRO DE ORDEM DE SERVIÇO
        </h2>
        <form className='space-y-4'>
          {/* Campos do formulário */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='osNumber'
                className='block text-sm font-medium text-gray-700'
              >
                N° OS
              </label>
              <input
                type='text'
                id='osNumber'
                className='mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
            <div>
              <label
                htmlFor='redsNumber'
                className='block text-sm font-medium text-gray-700'
              >
                N° REDS
              </label>
              <input
                type='text'
                id='redsNumber'
                className='mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
          </div>

          <div>
            <label
              htmlFor='expeditor'
              className='block text-sm font-medium text-gray-700'
            >
              EXPEDIDA POR:
            </label>
            <input
              type='text'
              id='expeditor'
              className='mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            />
          </div>

          <div>
            <label
              htmlFor='description'
              className='block text-sm font-medium text-gray-700'
            >
              INSTRUÇÕES DA OS
            </label>
            <textarea
              id='description'
              rows={3}
              className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
            ></textarea>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label
                htmlFor='creationDate'
                className='block text-sm font-medium text-gray-700'
              >
                DATA DE CRIAÇÃO
              </label>
              <input
                type='date'
                id='creationDate'
                className='mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
            <div>
              <label
                htmlFor='estimatedDays'
                className='block text-sm font-medium text-gray-700'
              >
                PRAZO EM DIAS
              </label>
              <input
                type='number'
                id='estimatedDays'
                className='mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              />
            </div>
          </div>

          {/* Upload de Arquivos */}
          <div className='flex items-center space-x-4 border-t border-b border-gray-300  p-2'>
            <label
              htmlFor='attachments'
              className='block text-sm font-medium text-gray-700 whitespace-nowrap'
            >
              ANEXAR DOCUMENTOS
            </label>

            {/* <input
              type='file'
              id='attachments'
              multiple
              onChange={handleFileChange}
              className='mt-1  w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-slate-600 file:text-white hover:file:bg-slate-700'
            /> */}
          </div>

          {/* Lista de Arquivos Anexados */}
          {files.length > 0 && (
            <div className='grid grid-cols-1 gap-4'>
              {files.map((file, index) => (
                <div
                  key={index}
                  className='flex items-center justify-between p-2 border border-gray-300 rounded-md'
                >
                  <span className='text-sm text-gray-700'>{file.name}</span>
                  <input
                    type='text'
                    placeholder='Nome do Documento'
                    value={fileNames[index]}
                    onChange={(e) =>
                      handleFileNameChange(index, e.target.value)
                    }
                    className='ml-4 block w-1/3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  />
                  <button
                    type='button'
                    onClick={() => handleFileRemove(index)}
                    className='ml-4 text-red-500 hover:text-red-700'
                  >
                    Excluir
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Lista de Tarefas */}
          <div>
            <div className='flex items-center space-x-4 border-t border-b border-gray-300  p-2'>
              <label
                htmlFor='tasks'
                className='block text-sm text-slate-900 font-medium border-slate-300'
              >
                LISTA DE TAREFAS
              </label>

              <button
                type='button'
                onClick={() => setIsModalOpen(true)}
                className='inline-flex justify-center py-1.5 px-4 shadow-sm text-sm font-bold rounded-md text-white bg-emerald-600 hover:bg-emerald-700 hover:ring-2 hover:ring-emerald-300 focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
              >
                +
              </button>
            </div>
            <ul className='space-y-2'>
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className='flex items-center justify-between p-2 border-b border-slate-300'
                >
                  <span className='text-sm font-normal text-slate-700'>
                    {task}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex justify-end'>
            <button
              type='submit'
              className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500'
            >
              SALVAR
            </button>
          </div>
        </form>
      </main>

      {/* Modal para Adicionar Tarefa */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-lg font-medium text-gray-700 mb-4'>
              Adicionar Nova Tarefa
            </h3>
            <input
              type='text'
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className='block w-full mb-4 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
              placeholder='Nome da Tarefa'
            />
            <div className='flex justify-end'>
              <button
                type='button'
                onClick={() => setIsModalOpen(false)}
                className='mr-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
              >
                Cancelar
              </button>
              <button
                type='button'
                onClick={handleAddTask}
                className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500'
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className='w-full mx-auto'>
        <div>
          <div accordion-section className='mb-4 rounded-t-1'>
            <h5 className='mb-0'>
              <button
                section-trigger
                className='relative flex items-center w-full p-4 font-semibold text-left transition-all border-b border-solid cursor-pointer border-slate-100 ease-soft-in text-slate-700 rounded-t-1'
                aria-expanded='true'
              >
                How do I order?
                <i
                  section-open-icon
                  className='absolute right-0 hidden pt-1 mr-4 leading-tight fa fa-plus text-xs'
                ></i>
                <i
                  section-close-icon
                  className='absolute right-0 pt-1 mr-4 leading-tight fa fa-minus text-xs'
                ></i>
              </button>
            </h5>
            <div
              section-content
              className='overflow-hidden transition-all ease-soft-in-out duration-350'
            >
              <div className='p-4 leading-normal text-sm opacity-80 '>
                We’re not always in the position that we want to be at. We’re
                constantly growing. We’re constantly making mistakes. We’re
                constantly trying to express ourselves and actualize our dreams.
                If you have the opportunity to play this game of life you need
                to appreciate every moment. A lot of people don’t appreciate the
                moment until it’s passed.
              </div>
            </div>
          </div>
          <div accordion-section className='mb-4'>
            <h5 className='mb-0'>
              <button
                section-trigger
                className='relative flex items-center w-full p-4 font-semibold text-left transition-all border-b border-solid cursor-pointer border-slate-100 ease-soft-in text-slate-500 rounded-t-1'
                aria-expanded='false'
              >
                How can i make the payment?
                <i
                  section-open-icon
                  className='absolute right-0 pt-1 mr-4 leading-tight fa fa-plus text-xs'
                ></i>
                <i
                  section-close-icon
                  className='absolute right-0 hidden pt-1 mr-4 leading-tight fa fa-minus text-xs'
                ></i>
              </button>
            </h5>
            <div
              section-content
              className='overflow-hidden transition-all ease-soft-in-out duration-350'
            >
              <div className='p-4 leading-normal text-sm opacity-80 '>
                It really matters and then like it really doesn’t matter. What
                matters is the people who are sparked by it. And the people who
                are like offended by it, it doesn’t matter. Because it's about
                motivating the doers. Because I’m here to follow my dreams and
                inspire other people to follow their dreams, too. We’re not
                always in the position that we want to be at. We’re constantly
                growing. We’re constantly making mistakes. We’re constantly
                trying to express ourselves and actualize our dreams. If you
                have the opportunity to play this game of life you need to
                appreciate every moment. A lot of people don’t appreciate the
                moment until it’s passed.
              </div>
            </div>
          </div>
          <div accordion-section className='mb-4'>
            <h5 className='mb-0'>
              <button
                section-trigger
                className='relative flex items-center w-full p-4 font-semibold text-left transition-all border-b border-solid cursor-pointer border-slate-100 ease-soft-in text-slate-500 rounded-t-1'
                aria-expanded='false'
              >
                How much time does it take to receive the order?
                <i
                  section-open-icon
                  className='absolute right-0 pt-1 mr-4 leading-tight fa fa-plus text-xs'
                ></i>
                <i
                  section-close-icon
                  className='absolute right-0 hidden pt-1 mr-4 leading-tight fa fa-minus text-xs'
                ></i>
              </button>
            </h5>
            <div
              section-content
              className='overflow-hidden transition-all ease-soft-in-out duration-350'
            >
              <div className='p-4 leading-normal text-sm opacity-80 '>
                The time is now for it to be okay to be great. People in this
                world shun people for being great. For being a bright color. For
                standing out. But the time is now to be okay to be the greatest
                you. Would you believe in what you believe in, if you were the
                only one who believed it? If everything I did failed - which it
                doesn't, it actually succeeds - just the fact that I'm willing
                to fail is an inspiration. People are so scared to lose that
                they don't even try. Like, one thing people can't say is that
                I'm not trying, and I'm not trying my hardest, and I'm not
                trying to do the best way I know how.
              </div>
            </div>
          </div>
          <div accordion-section className='mb-4'>
            <h5 className='mb-0'>
              <button
                section-trigger
                className='relative flex items-center w-full p-4 font-semibold text-left transition-all border-b border-solid cursor-pointer border-slate-100 ease-soft-in text-slate-500 rounded-t-1'
                aria-expanded='false'
              >
                Can I resell the products?
                <i
                  section-open-icon
                  className='absolute right-0 pt-1 mr-4 leading-tight fa fa-plus text-xs'
                ></i>
                <i
                  section-close-icon
                  className='absolute right-0 hidden pt-1 mr-4 leading-tight fa fa-minus text-xs'
                ></i>
              </button>
            </h5>
            <div
              section-content
              className='overflow-hidden transition-all ease-soft-in-out duration-350'
            >
              <div className='p-4 leading-normal text-sm opacity-80 '>
                I always felt like I could do anything. That’s the main thing
                people are controlled by! Thoughts- their perception of
                themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you won’t do
                anything. I was taught I could do everything. If everything I
                did failed - which it doesn't, it actually succeeds - just the
                fact that I'm willing to fail is an inspiration. People are so
                scared to lose that they don't even try. Like, one thing people
                can't say is that I'm not trying, and I'm not trying my hardest,
                and I'm not trying to do the best way I know how.
              </div>
            </div>
          </div>
          <div accordion-section className='mb-4 rounded-b-1'>
            <h5 className='mb-0'>
              <button
                section-trigger
                className='relative flex items-center w-full p-4 font-semibold text-left transition-all border-b border-solid cursor-pointer border-slate-100 ease-soft-in text-slate-500 rounded-t-1'
                aria-expanded='false'
              >
                Where do I find the shipping details?
                <i
                  section-open-icon
                  className='absolute right-0 pt-1 mr-4 leading-tight fa fa-plus text-xs'
                ></i>
                <i
                  section-close-icon
                  className='absolute right-0 hidden pt-1 mr-4 leading-tight fa fa-minus text-xs'
                ></i>
              </button>
            </h5>
            <div
              section-content
              className='overflow-hidden transition-all ease-soft-in-out duration-350'
            >
              <div className='p-4 leading-normal text-sm opacity-80 '>
                There’s nothing I really wanted to do in life that I wasn’t able
                to get good at. That’s my skill. I’m not really specifically
                talented at anything except for the ability to learn. That’s
                what I do. That’s what I’m here for. Don’t be afraid to be wrong
                because you can’t learn anything from a compliment. I always
                felt like I could do anything. That’s the main thing people are
                controlled by! Thoughts- their perception of themselves! They're
                slowed down by their perception of themselves. If you're taught
                you can’t do anything, you won’t do anything. I was taught I
                could do everything.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
