import SendGAEvent from '@/components/SendGAEvent';
import Image from 'next/image'
import Link from 'next/link';

 
export default async function Perspectiva() {

  return (
    <div className="bg-colabBlue h-[100vh] w-[100vw] flex justify-center items-center">
      <div className='m-auto w-[60%] h-[70%] flex flex-row'>
        <div className='bg-star-2 h-full w-[20%] rounded-s-lg'>
        </div>
        <div className='h-full w-[60%]'>
          <Image
            src="/group_img.png"
            width={500}
            height={500}
            alt="lamp"
          />
          <section className='w-full flex flex-col align-center justify-center'>
            <Link
              href='https://docs.google.com/forms/d/1TI5z_jW1ueA0RHKUMH71K956TR-hi3xeSdTOIFa2Kaw/prefill'
              className='w-full flex flex-col items-center justify-center'
            >
              <SendGAEvent
                action='go_to_vote_gender_transition_in_children'
                category='click'
                label='User is going vote related to Gender Transition in Children'
                value='Usuário clicou para votar no tema relacionado com transição gênero em crianças.'
              >
                <Image
                    src="/vote.png"
                    width={150}
                    height={150}
                    alt="lamp"
                  />
                <p className='font-medium text-colabGreen hover:underline text-3xl font-theGreat'>
                  Transição de Gênero em Crianças
                </p>
              </SendGAEvent>
            </Link>
          </section>
        </div>
        <div className='bg-star h-full w-[20%] rounded-s-lg'>
            <Image
              src="/lamp.png"
              width={150}
              height={150}
              alt="lamp"
            />
        </div>
      </div>
    </div>
  )
}