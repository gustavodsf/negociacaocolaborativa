import SendGAEvent from "@/components/SendGAEvent";
import SignOut from "@/components/SignOut";
import Image from "next/image";
import Link from "next/link";

export default async function Perspectiva() {
  return (
    <>
      <SignOut />
      <div className="flex flex-col min-h-screen w-screen items-center justify-center bg-colabBlue">
        <div className="h-[8rem] w-[90%] rounded-s-lg bg-star-2 flex flex-row items-center justify-start">
          <Image src="/lamp.png" width={80} height={80} alt="lamp" />
        </div>
        <div className="flex flex-col items-center">
        <Image src="/group_img.png" width={250} height={250} alt="lamp" />
            <section className="align-center flex w-full flex-col justify-center">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSct7LJFujHT8vbDPmcREudtciY7oi2O-jvpgapE0kGp_V4LJQ/viewform"
                className="w-full"
              >
                <SendGAEvent
                  action="go_to_vote_gender_transition_in_children"
                  category="click"
                  label="User is going vote related to Gender Transition in Children"
                  value="Usuário clicou para votar no tema relacionado com transição gênero em crianças."
                >
                  <span className="flex w-full flex-col items-center justify-center">
                    <Image
                      src="/vote.png"
                      width={120}
                      height={120}
                      alt="lamp"
                    />
                    <p className="text-center font-theGreat text-xl font-medium text-colabGreen hover:underline">
                      Transição de Gênero em Crianças
                    </p>
                  </span>
                </SendGAEvent>
              </Link>
            </section>
        </div>
        <div className="h-[8rem] w-[90%] bg-star flex flex-row items-center justify-end">
            <Link
              href="/perspectiva"
              className="text-colaBlue flex w-[10rem] items-center 
              justify-center rounded border-2 border-white 
              bg-transparent bg-white px-4 py-2 font-semibold
              shadow-2xl hover:border-transparent
              hover:bg-colabGreen hover:text-colabBlue"
            >
              <SendGAEvent
                action="go_from_vote_to_perspectiva"
                category="click"
                label="User is going from vote  to perspectiva"
                value="Usuário quer ir da página da página de vote para perspectiva"
              >
                <span className="flex h-full w-full flex-row items-center">
                  <span className="material-symbols-outlined mr-1">
                    subdirectory_arrow_left
                  </span>
                  <span className="text-xl">Voltar</span>
                </span>
              </SendGAEvent>
            </Link>
        </div>
      </div>
    </>
  );
}
