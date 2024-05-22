import SendGAEvent from "@/components/SendGAEvent";
import SignOut from "@/components/SignOut";
import Image from "next/image";
import Link from "next/link";

export default async function Grupo() {
  return (
    <>
      <SignOut />
      <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-3 bg-colabYellow">
        <div className="flex flex-col items-center justify-center">
          <span className="w-full font-theGreat text-3xl text-colabDarkGreen">
            Qual o seu
          </span>
          <span className="w-full font-theGreat text-6xl text-colabDarkGreen">
            Dilema?
          </span>
        </div>
        <div className="flex w-full flex-row items-center justify-around">
          <Image src="/lamp-sun.png" width={150} height={150} alt="lamp" />
          <Image
            src="/mulher.png"
            width={100}
            height={100}
            className="mb-2"
            alt="women"
          />
        </div>
        <div className="flex flex-row items-center">
          <div>
            <Image
              src="/group-icon.png"
              width={100}
              height={100}
              alt="group-icon"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-center text-lg font-medium text-colabBlue">
              A Transição de gênero em crianças
            </div>
            <div className="flex w-full flex-row items-center justify-around p-2">
              <div>
                <Link
                  href="./perspectiva"
                  className="flex flex-row items-center justify-around rounded border-b-2 border-colabDarkGreen bg-colabLightGreen px-2 py-1 font-bold text-white hover:border-colabBlue hover:bg-colabGray hover:text-colabBlue"
                >
                  <SendGAEvent
                    action="go_from_group_to_perspective"
                    category="click"
                    label="User wants to get knowledge before voting"
                    value="Usuário clicou para obter conhecimento antes de votar"
                  >
                    <span className="flex h-full w-full flex-row items-center">
                      <span className="material-symbols-outlined">
                        content_copy
                      </span>
                      Perspectivas
                    </span>
                  </SendGAEvent>
                </Link>
              </div>
              <div>
                <Link
                  href="./vote"
                  className="flex flex-row items-center justify-around rounded border-b-2 border-colabDarkGreen bg-colabLightGreen px-2 py-1 font-bold text-white hover:border-colabBlue hover:bg-colabGray hover:text-colabBlue"
                >
                  <SendGAEvent
                    action="go_from_group_to_vote"
                    category="click"
                    label="User wants to vote and not pass on the content screen"
                    value="Usuário clicou para votar sem passar na tela de perspectiva"
                  >
                    <span className="flex h-full w-full flex-row items-center">
                      <span className="material-symbols-outlined">
                        how_to_vote
                      </span>
                      Votar
                    </span>
                  </SendGAEvent>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div>
            <Image
              src="/new-group-icon.png"
              width={100}
              height={100}
              alt="new-group"
            />
          </div>
          <div>
            <Link href="#" className="flex flex-row items-center justify-start">
              <SendGAEvent
                action="click_to_create_new_group"
                category="click"
                label="User clicked to create a new group"
                value="Usuário clicou para criar um novo grupo"
              >
                <p className="p-4 text-center text-xl font-medium text-colabBlue hover:underline">
                  {" "}
                  Criar grupo de deliberação{" "}
                </p>
              </SendGAEvent>
            </Link>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-end bg-star">
          <Link
            href="/theme"
            className="flex w-[8rem] items-center justify-center 
              rounded border-2 border-colabBlue bg-colabBlue 
              bg-transparent px-4 py-2 font-semibold text-colabBlue
              shadow-2xl hover:border-transparent
              hover:bg-colabGreen hover:text-colabBlue"
          >
            <SendGAEvent
              action="go_from_group_to_theme"
              category="click"
              label="User is going from group to login page "
              value="Usuário clicou para realizar a transição entre a página de grupos para a de login"
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
