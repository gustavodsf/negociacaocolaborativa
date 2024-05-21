import SendGAEvent from "@/components/SendGAEvent";
import SignOut from "@/components/SignOut";
import Image from "next/image";
import Link from "next/link";

export default async function Grupo() {
  return (
    <>
      <SignOut />
      <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-colabYellow">
        <div className="m-auto flex h-[70%] w-[60%] flex-col">
          <header className="flex flex-row items-center text-center">
            <Image src="/lamp-sun.png" width={200} height={200} alt="lamp" />
            <div className="flex flex-col items-center justify-center">
              <span className="w-full font-theGreat text-6xl text-colabDarkGreen">
                Qual o seu
              </span>
              <span className="w-full font-theGreat text-9xl text-colabDarkGreen">
                Dilema?
              </span>
            </div>
            <Image
              src="/mulher.png"
              width={200}
              height={200}
              className="mb-2"
              alt="women"
            />
          </header>
          <main className="flex flex-row">
            <div className="h-full w-[70%] p-2">
              <div className="flex flex-row items-center">
                <div>
                  <Image
                    src="/group-icon.png"
                    width={150}
                    height={150}
                    alt="group-icon"
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-xl font-medium text-colabBlue">
                    A Transição de gênero em crianças
                  </div>
                  <div className="flex w-full flex-row items-center justify-around p-2">
                    <div>
                      <Link
                        href="./perspectiva"
                        className="flex flex-row items-center justify-around rounded border-b-4 border-colabDarkGreen bg-colabLightGreen px-4 py-2 font-bold text-white hover:border-colabBlue hover:bg-colabGray hover:text-colabBlue"
                      >
                        <SendGAEvent
                          action="go_from_group_to_perspective"
                          category="click"
                          label="User wants to get knowledge before voting"
                          value="Usuário clicou para obter conhecimento antes de votar"
                        >
                          <span className="material-symbols-outlined">
                            content_copy
                          </span>
                          Perspectivas
                        </SendGAEvent>
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="./vote"
                        className="flex flex-row items-center justify-around rounded border-b-4 border-colabDarkGreen bg-colabLightGreen px-4 py-2 font-bold text-white hover:border-colabBlue hover:bg-colabGray hover:text-colabBlue"
                      >
                        <SendGAEvent
                          action="go_from_group_to_vote"
                          category="click"
                          label="User wants to vote and not pass on the content screen"
                          value="Usuário clicou para votar sem passar na tela de perspectiva"
                        >
                          <span className="material-symbols-outlined">
                            how_to_vote
                          </span>
                          Votar
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
                    width={150}
                    height={150}
                    alt="new-group"
                  />
                </div>
                <div>
                  <Link
                    href="#"
                    className="flex flex-row items-center justify-start"
                  >
                    <SendGAEvent
                      action="click_to_create_new_group"
                      category="click"
                      label="User clicked to create a new group"
                      value="Usuário clicou para criar um novo grupo"
                    >
                      <p className="p-4 text-xl font-medium text-colabBlue hover:underline">
                        {" "}
                        Criar grupo de deliberação{" "}
                      </p>
                    </SendGAEvent>
                  </Link>
                </div>
              </div>
            </div>
            <div className="h-full w-[30%] bg-star"></div>
          </main>
        </div>
      </div>
    </>
  );
}
