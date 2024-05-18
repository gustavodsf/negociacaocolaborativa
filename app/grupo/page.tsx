import SendGAEvent from '@/components/SendGAEvent';
import Image from 'next/image'
import Link from 'next/link';

 
export default async function Grupo() {

  return (
    <div className="bg-colabYellow h-[100vh] w-[100vw] flex justify-center items-center">
      <div className='m-auto w-[60%] h-[70%] flex flex-col'>
        <header className='flex flex-row items-center text-center'>
          <Image
            src="/lamp-sun.png"
            width={200}
            height={200}
            alt="lamp"
          />
          <div className="flex flex-col justify-center items-center">
            <span className="font-theGreat text-colabDarkGreen text-6xl w-full">Qual o seu</span>
            <span className="font-theGreat text-colabDarkGreen text-9xl w-full">Dilema?</span>
          </div>
          <Image
            src="/mulher.png"
            width={200}
            height={200}
            className='mb-2'
            alt="women"/> 
        </header>
        <main className='flex flex-row'>
            <div className='w-[70%] h-full p-2'>
              <Link
                href="./perspectiva"
                className='flex flex-row items-center justify-start'
              >
                <SendGAEvent
                  action='go_gender_transition_group'
                  category='click'
                  label='User wants to go to gender transition group'
                  value='Usuário clicou para ir ao grupo de transição de gênero.'
                >
                  <Image
                    src="/group-icon.png"
                    width={150}
                    height={150}
                    alt="group-icon"/>
                  <p className=' font-medium text-colabBlue hover:underline text-xl  p-4'>A Transição de gênero em crianças</p>
                </SendGAEvent>
              </Link>
              <Link
                href="#"
                className='flex flex-row items-center justify-start'
              >
                <SendGAEvent
                  action='click_to_create_new_group'
                  category='click'
                  label='User clicked to create a new group'
                  value='Usuário clicou para criar um novo grupo'
                >
                  <Image
                    src="/new-group-icon.png"
                    width={150}
                    height={150}
                  alt="new-group"/>
                  <p className='font-medium text-colabBlue hover:underline text-xl p-4' > Criar grupo de deliberação </p>
                </SendGAEvent>
              </Link>
            </div>
            <div className='w-[30%] h-full bg-star'>
            </div>
        </main>
      </div>
    </div>
  )
}