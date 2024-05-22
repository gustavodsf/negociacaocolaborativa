import SendGAEvent from "@/components/SendGAEvent";
import SignOut from "@/components/SignOut";
import Image from "next/image";
import Link from "next/link";

export default async function Index() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-colabBlue">
      <span className="text-center font-dancing text-8xl text-colabGreen">
        Dilemas de Sócrates
      </span>
      <div className="flex w-full flex-row items-center justify-center">
        <Image src="/lamp.png" width={200} height={200} alt="lamp" />
        <div className="flex h-full flex-col items-center justify-end bg-star">
          <Image
            src="/mulher.png"
            width={200}
            height={200}
            className="mb-2"
            alt="women"
          />
        </div>
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
            <span className="flex h-full w-full flex-row items-center">
              <span className="material-symbols-outlined mr-1">
                subdirectory_arrow_right
              </span>
              <span className="text-xl">Enter</span>
            </span>
          </SendGAEvent>
        </Link>
      </div>
    </div>
  );
}
