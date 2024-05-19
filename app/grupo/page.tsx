import SendGAEvent from "@/components/SendGAEvent";
import Image from "next/image";
import Link from "next/link";

export default async function Grupo() {
  return (
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
            <Link
              href="./perspectiva"
              className="flex flex-row items-center justify-start"
            >
              <SendGAEvent
                action="go_gender_transition_group"
                category="click"
                label="User wants to go to gender transition group"
                value="Usuário clicou para ir ao grupo de transição de gênero."
              >
                <Image
                  src="/group-icon.png"
                  width={150}
                  height={150}
                  alt="group-icon"
                />
                <p className=" p-4 text-xl font-medium text-colabBlue  hover:underline">
                  A Transição de gênero em crianças
                </p>
              </SendGAEvent>
            </Link>
            <Link href="#" className="flex flex-row items-center justify-start">
              <SendGAEvent
                action="click_to_create_new_group"
                category="click"
                label="User clicked to create a new group"
                value="Usuário clicou para criar um novo grupo"
              >
                <Image
                  src="/new-group-icon.png"
                  width={150}
                  height={150}
                  alt="new-group"
                />
                <p className="p-4 text-xl font-medium text-colabBlue hover:underline">
                  {" "}
                  Criar grupo de deliberação{" "}
                </p>
              </SendGAEvent>
            </Link>
          </div>
          <div className="h-full w-[30%] bg-star"></div>
        </main>
      </div>
    </div>
  );
}
