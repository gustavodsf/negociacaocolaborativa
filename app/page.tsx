import Image from 'next/image'
import Link from 'next/link';
import SendGAEvent from '@/components/SendGAEvent';

export default async function Index() {

  return (
    <div className="bg-colabBlue h-[100vh] w-[100vw] flex justify-center items-center">
      <div className='m-auto w-[60%] h-[70%] flex flex-row'>
        <div className='w-[60%] h-full'>
          <div className='flex flex-col h-full items-center'>
            <span className="text-colabGreen sm:text-[13rem] lg:text-8xl font-dancing text-center">
              Dilema de Sócrates
            </span>
            <span className='mt-6'>
              <Image
                src="/lamp.png"
                width={150}
                height={150}
                alt="lamp"
              />
            </span>
          </div>
        </div>
        <div className='w-[40%] h-full flex flex-col'>
          <div className='bg-star h-[90%] flex flex-col items-center justify-end'>
            <Image
              src="/mulher.png"
              width={200}
              height={200}
              className='mb-2'
              alt="women"/>
          </div>
          <div className='h-[10%] w-full flex items-center justify-center font-theGreat'>            
              <Link 
                href="/theme"
                className='bg-transparent text-colabGreen font-semibold bg-colabBlue 
                py-2 px-4 border-colabGreen hover:border-transparent 
                hover:bg-colabGreen hover:text-colabBlue rounded flex w-[10rem]
                border-2 shadow-2xl
                items-center justify-center'
              >
                <SendGAEvent
                  action='go_from_home_to_theme'
                  category='click'
                  label='User is going from home to theme'
                  value='Usuário clicou no link para ir da home para para login'
                >
                    <span className="material-symbols-outlined mr-1">subdirectory_arrow_right</span>
                    <span className='text-xl'>Enter</span>
                </SendGAEvent>
              </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
