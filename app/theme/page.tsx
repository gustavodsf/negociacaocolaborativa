import SendGAEvent from "@/components/SendGAEvent";
import SignOut from "@/components/SignOut";
import Image from "next/image";
import Link from "next/link";

export default async function Login() {
  return (
    <>
      <SignOut />
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-colabGray gap-2">
          <header className="flex flex-row items-center text-center">
            <Image src="/lamp-sun.png" width={80} height={80} alt="lamp" />
            <span className="w-full font-theGreat text-5xl text-colabDarkGreen">
              Pesquisa de Tese
            </span>
          </header>
          <section className="w-full flex flex-row justify-start items-start">
            <div>
                <Link
                  className="text-3xl text-colabPurple"
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
                </div>
              </section>
              <section className="mt-5 p-1">
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
              <div className="relative flex flex-row items-center justify-center bg-star-2">
                <Image src="/phone.png" width={80} height={80} alt="phone" />
                <Link
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform  w-[8rem]"
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
            <div className="flex  w-[40%] flex-row items-center justify-center gap-1">
              <Link
                href="/grupo"
                className="flex w-[6rem] items-center justify-center 
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
                  <span className="flex h-full w-full flex-row items-center">
                    <span className="material-symbols-outlined mr-1">
                      subdirectory_arrow_right
                    </span>
                    <span className="text-lg">Enter</span>
                  </span>
                </SendGAEvent>
              </Link>
              <Link
                href="/"
                className="flex w-[6rem] items-center justify-center 
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
                  <span className="flex h-full w-full flex-row items-center">
                    <span className="material-symbols-outlined mr-1">
                      subdirectory_arrow_left
                    </span>
                    <span className="text-lg">Voltar</span>
                  </span>
                </SendGAEvent>
              </Link>
            </div>
      </div>
    </>
  );
}
