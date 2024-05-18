import SendGAEvent from '@/components/SendGAEvent';
import Image from 'next/image'
import Link from 'next/link';

 
export default async function Login() {

  return (
    <div className="bg-colabGray h-[100vh] w-[100vw] flex justify-center items-center">
      <div className='m-auto w-[60%] h-[70%] flex flex-col'>
        <header className='flex flex-row items-center text-center'>
          <Image
            src="/lamp-sun.png"
            width={150}
            height={150}
            alt="lamp"
          />
          <span className="font-theGreat text-colabDarkGreen text-6xl w-full">Pesquisa de Tese</span>
        </header>
        <main className='p-2 flex flex-row items-center justify-around w-full'>
          <div className='w-[50%]'>
            <section>
              <Link 
                className="text-4xl text-colabPurple"
                href='https://docs.google.com/forms/d/1wPn8nuakpDDYqv61ruRcZJBORPKkr4VP4vG4R5ptmBk/prefill'>
                <SendGAEvent
                  action='go_to_fill_the_quiz'
                  category='click'
                  label='User clicked to fill the quiz'
                  value='Usuário clicou no sentido de preencher o questionário 01'
                >
                  Questionário 01
                </SendGAEvent>
              </Link>
              <div className='w-[90%] h-3 bg-colabLightGreen rounded-r-lg'></div>
            </section>
            <section className='mt-5'>
              <div className='text-xl text-justify text-colabDarkGreen'>
              Essa plataforma é parte integrante de uma pesquisa de doutorado PPGI/UFRJ sobre comportamentos interacionais em ambientes virtuais. Participando desse experimento você estará colaborando com a ciência.
              </div>
              <Link href='/termo' className='font-medium text-colabPurple  hover:underline text-xl pt-2  '>Termo de Compromisso de Participação.</Link>
            </section>  
          </div>
          <div className='w-[40%] flex flex-row items-center justify-center bg-star-2 relative'>
            <Image
              src="/phone.png"
              width={200}
              height={200}
              alt="phone"
            />
            <Link 
              className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '
              href="/signin"
            >
              <SendGAEvent
                  action='clicked_to_login'
                  category='click'
                  label='User clicked to login in the platform'
                  value='O usuário cliclou para entrar na plataforma'
              >
                <Image
                  src="/bt_login.png"
                  width={200}
                  height={50}
                  alt="phone"
                />
              </SendGAEvent>
            </Link>
          </div>
        </main>
        <footer className='p-2 flex flex-row items-center justify-around w-full'>
          <div className='w-[50%]'></div>
          <div className='w-[40%]  flex flex-col items-center justify-center'>
            <Link 
              href="/grupo"
              className='bg-transparent text-colabBlue font-semibold bg-colabBlue 
              py-2 px-4 border-colabBlue hover:border-transparent 
              hover:bg-colabGreen hover:text-colabBlue rounded flex w-[10rem]
              border-2 shadow-2xl
              items-center justify-center'
            >
              <SendGAEvent
                  action='go_from_theme_to_group'
                  category='click'
                  label='User is going from login to group page '
                  value='Usuário clicou para realizar a transição entre a página de login para a de grupos'
              >
                <span className="material-symbols-outlined mr-1">subdirectory_arrow_right</span>
                <span className='text-xl'>Enter</span>
              </SendGAEvent>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}