import SendGAEvent from "@/components/SendGAEvent";
import SignOut from "@/components/SignOut";
import Image from "next/image";
import Link from "next/link";

export default async function Termo() {
  return (
    <>
      <SignOut />
      <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-colabGray text-black">
        <div className="m-auto flex h-[70%] w-[60%] flex-col text-justify">
          <header className="width-full flex flex-row items-center justify-center align-middle">
            <Image
              className="mr-5"
              src="/lamp.png"
              width={50}
              height={50}
              alt="lamp"
            />
            <span className="text-center font-theGreat text-xl font-bold">
              TERMO DE CONSENTIMENTO LIVRE E ESCLARECIDO
            </span>
          </header>
          <main className="p-1">
            <p>
              Convidamos o/a Sr(a) Participar do experimento sobre “Análise de
              Comportamentos Durante a Interação Virtual”, parte integrante da
              tese de doutorado PPGI/UFRJ da aluna Ana Paula Camargo Pimentel.
              Cuja a pretensão fundamental é desenvolver ferramentas para
              observação, análise e mediação de comportamentos virtuais.
            </p>
            <p>
              <b>Sua participação</b> é voluntária e se dará por meio de análise
              de questionários, interações na Plataforma Dilemas de Sócrates e
              entrevista presencial.
            </p>
            <p>
              <b>Os riscos da pesquisa</b> decorrentes de sua participação são
              mínimos pois não haverá exposição de nomes ou imagens dos
              participantes. Mas caso em alguma dessas vivências ocorram
              incômodos a participação poderá ser interrompida sem a necessidade
              de explicações.
            </p>
            <p>
              <b>Os benefícios da pesquisa</b> são apoiar com informações o
              desenvolver possíveis soluções e contribuições teóricas sobre
              comportamentos nas interações virtuais no cenário brasileiro.
            </p>
            <p>
              Se depois de consentir a sua participação o/a Sr(a) desistir da
              participação, tem o direito e a liberdade de retirar seu
              consentimento em qualquer fase da pesquisa, seja antes ou depois
              da coleta dos dados, independente do motivo e sem nenhum prejuízo.
              O/A Sr(a) não terá nenhuma despesa e também não receberá nenhuma
              remuneração referente a esta pesquisa.{" "}
            </p>
            <p>
              <b>Os resultados da pesquisa</b> serão analisados e publicados,
              mas a sua identidade não será divulgada, uma vez que será guardada
              em sigilo.
            </p>
            <p>
              Para qualquer outra informação, o (a) Sr. (a) poderá entrar em
              contato com a pesquisadora no seguinte endereço:
              <a
                href="mailto:pcamargoufrj@gmail.com"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                <SendGAEvent
                  action="user_click_on_email_inside_termo_page"
                  category="click"
                  label="User click on email inside termo page"
                  value="Usuário clicou no email na página de termo"
                >
                  pcamargoufrj@gmail.com
                </SendGAEvent>
              </a>
            </p>
          </main>
          <footer className="flex flex-col items-end justify-end p-1">
            <Link
              href="/theme"
              className="flex w-[10rem] items-center justify-center 
              rounded border-2 border-colabBlue bg-colabBlue 
              bg-transparent px-4 py-2 font-semibold text-colabBlue
              shadow-2xl hover:border-transparent
              hover:bg-colabGreen hover:text-colabBlue"
            >
              <SendGAEvent
                action="go_from_termo_to_login"
                category="click"
                label="User is going from termo  to login"
                value="Usuário quer ir da página do termo de consentimento para login"
              >
                <span className="w-full h-full flex flex-row items-center">
                  <span className="material-symbols-outlined mr-1">
                    subdirectory_arrow_left
                  </span>
                  <span className="font-theGreat text-xl">Voltar</span>
                </span>
              </SendGAEvent>
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
}
