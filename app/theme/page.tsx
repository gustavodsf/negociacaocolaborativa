import SendGAEvent from "@/components/SendGAEvent";
import SignOut from "@/components/SignOut";
import Image from "next/image";
import Link from "next/link";

export default async function Login() {
  return (
    <>
      <SignOut />
      <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-colabGray">
        <div className="m-auto flex h-[70%] w-[60%] flex-col">
          <header className="flex flex-row items-center text-center">
            <Image src="/lamp-sun.png" width={150} height={150} alt="lamp" />
            <span className="w-full font-theGreat text-6xl text-colabDarkGreen">
              Pesquisa de Tese
            </span>
          </header>
          <main className="flex w-full flex-row items-center justify-around p-2">
            <div className="w-[50%]">
              <section>
                <Link
                  className="text-4xl text-colabPurple"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSebcdg_KJ_xTPnPnE5HUuLV-mPdoWmrBGosmik7nvcaFqkdAw/viewform"
                >
                  <SendGAEvent
                    action="go_to_fill_the_quiz"
                    category="click"
                    label="User clicked to fill the quiz"
                    value="Usuário clicou no sentido de preencher o questionário 01"
                  >
                    Questionário 01
                  </SendGAEvent>
                </Link>
                <div className="h-3 w-[90%] rounded-r-lg bg-colabLightGreen"></div>
              </section>
              <section className="mt-5">
                <div className="text-justify text-xl text-colabDarkGreen">
                  Essa plataforma é parte integrante de uma pesquisa de
                  doutorado PPGI/UFRJ sobre comportamentos interacionais em
                  ambientes virtuais. Participando desse experimento você estará
                  colaborando com a ciência.
                </div>
                <Link
                  href="/termo"
                  className="pt-2 text-xl  font-medium text-colabPurple hover:underline  "
                >
                  Termo de Compromisso de Participação.
                </Link>
              </section>
            </div>
            <div className="relative flex w-[40%] flex-row items-center justify-center bg-star-2">
              <Image src="/phone.png" width={200} height={200} alt="phone" />
              <Link
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform "
                href="/signin"
              >
                <SendGAEvent
                  action="clicked_to_login"
                  category="click"
                  label="User clicked to login in the platform"
                  value="O usuário cliclou para entrar na plataforma"
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
          <footer className="flex w-full flex-row items-center justify-around p-2">
            <div className="w-[50%]"></div>
            <div className="flex  w-[40%] flex-row items-center justify-center gap-1">
              <Link
                href="/grupo"
                className="flex w-[8rem] items-center justify-center 
              rounded border-2 border-colabBlue bg-colabBlue 
              bg-transparent px-4 py-2 font-semibold text-colabBlue
              shadow-2xl hover:border-transparent
              hover:bg-colabGreen hover:text-colabBlue"
              >
                <SendGAEvent
                  action="go_from_theme_to_group"
                  category="click"
                  label="User is going from login to group page "
                  value="Usuário clicou para realizar a transição entre a página de login para a de grupos"
                >
                  <span className="w-full h-full flex flex-row items-center">
                    <span className="material-symbols-outlined mr-1">
                      subdirectory_arrow_right
                    </span>
                    <span className="text-xl">Enter</span>
                  </span>
                </SendGAEvent>
              </Link>
              <Link
                href="/"
                className="flex w-[8rem] items-center justify-center 
              rounded border-2 border-colabBlue bg-colabBlue 
              bg-transparent px-4 py-2 font-semibold text-colabBlue
              shadow-2xl hover:border-transparent
              hover:bg-colabGreen hover:text-colabBlue"
              >
                <SendGAEvent
                  action="go_from_theme_to_group"
                  category="click"
                  label="User is going from login to group page "
                  value="Usuário clicou para realizar a transição entre a página de login para a de grupos"
                >
                  <span className="w-full h-full flex flex-row items-center">
                    <span className="material-symbols-outlined mr-1">
                      subdirectory_arrow_left
                    </span>
                    <span className="text-xl">Voltar</span>
                  </span>
                </SendGAEvent>
              </Link>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
