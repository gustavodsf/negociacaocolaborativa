import SendGAEvent from "@/components/SendGAEvent";
import Image from "next/image";
import Link from "next/link";

export default async function Perspectiva() {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-colabBlue">
      <div className="m-auto flex h-[70%] w-[60%] flex-row">
        <div className="h-full w-[20%] rounded-s-lg bg-star-2"></div>
        <div className="h-full w-[60%]">
          <Image src="/group_img.png" width={500} height={500} alt="lamp" />
          <section className="align-center flex w-full flex-col justify-center">
            <Link
              href="https://docs.google.com/forms/d/1TI5z_jW1ueA0RHKUMH71K956TR-hi3xeSdTOIFa2Kaw/prefill"
              className="flex w-full flex-col items-center justify-center"
            >
              <SendGAEvent
                action="go_to_vote_gender_transition_in_children"
                category="click"
                label="User is going vote related to Gender Transition in Children"
                value="Usuário clicou para votar no tema relacionado com transição gênero em crianças."
              >
                <Image src="/vote.png" width={150} height={150} alt="lamp" />
                <p className="font-theGreat text-3xl font-medium text-colabGreen hover:underline">
                  Transição de Gênero em Crianças
                </p>
              </SendGAEvent>
            </Link>
          </section>
        </div>
        <div className="h-full w-[20%] rounded-s-lg bg-star">
          <Image src="/lamp.png" width={150} height={150} alt="lamp" />
        </div>
      </div>
    </div>
  );
}
