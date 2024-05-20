import { Chatbot } from "@/components/ChatBot";
import SendGAEvent from "@/components/SendGAEvent";
import Image from "next/image";
import Link from "next/link";

export default async function Index() {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-colabBlue">
      <div className="m-auto flex h-[70%] w-[60%] flex-row">
        <div className="h-full w-[60%]">
          <div className="flex h-full flex-col items-center">
            <span className="text-center font-dancing text-colabGreen sm:text-[13rem] lg:text-8xl">
              Dilemas de Sócrates
            </span>
            <span className="mt-6">
              <Image src="/lamp.png" width={150} height={150} alt="lamp" />
            </span>
          </div>
        </div>
        <div className="flex h-full w-[40%] flex-col">
          <div className="flex h-[90%] flex-col items-center justify-end bg-star">
            <Image
              src="/mulher.png"
              width={200}
              height={200}
              className="mb-2"
              alt="women"
            />
          </div>
          <div className="flex h-[10%] w-full items-center justify-center font-theGreat">
            <Link
              href="/theme"
              className="flex w-[10rem] items-center justify-center 
                rounded border-2 border-colabGreen bg-colabBlue 
                bg-transparent px-4 py-2 font-semibold text-colabGreen
                shadow-2xl hover:border-transparent
                hover:bg-colabGreen hover:text-colabBlue"
            >
              <SendGAEvent
                action="go_from_home_to_theme"
                category="click"
                label="User is going from home to theme"
                value="Usuário clicou no link para ir da home para para login"
              >
                <span className="material-symbols-outlined mr-1">
                  subdirectory_arrow_right
                </span>
                <span className="text-xl">Enter</span>
              </SendGAEvent>
            </Link>
          </div>
        </div>
      </div>
      <Chatbot/>
    </div>
  );
}
