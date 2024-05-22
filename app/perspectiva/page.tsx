"use client";

import Diagram, { createSchema, useSchema } from "beautiful-react-diagrams";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { diagram } from "./constants";
import "beautiful-react-diagrams/styles.css";
import "./style.css";
import SendGAEvent from "@/components/SendGAEvent";
import SignOut from "@/components/SignOut";
import { DiagramSchema } from "beautiful-react-diagrams/@types/DiagramSchema";

const UncontrolledDiagram = () => {
  const initialSchema = createSchema(
    diagram as Partial<DiagramSchema<unknown>>,
  );
  const [schema, { onChange }] = useSchema(initialSchema);

  return (
    <div style={{ height: "100rem", width: "20rem" }}>
      <Diagram schema={schema} onChange={onChange} />
    </div>
  );
};

export default async function Perspectiva() {
  return (
    <>
      <SignOut />
      <div className="flex min-h-screen w-screen flex-col items-center justify-center gap-1 bg-colabBlue text-white">
        <header>
          <Image src="/perspective.png" width={200} height={80} alt="lamp" />
        </header>
        <UncontrolledDiagram />
        <div className="flex w-full flex-row  justify-end gap-2">
          <Link
            href="/vote"
            className="flex w-[8rem] items-center justify-center 
                rounded border-2 border-colabGreen bg-colabBlue 
                bg-transparent px-4 py-2 font-semibold text-colabGreen
                shadow-2xl hover:border-transparent
                hover:bg-colabGreen hover:text-colabBlue"
          >
            <SendGAEvent
              action="go_from_perspectiva_to_vote"
              category="click"
              label="User is going from perspectiva  to vote"
              value="Usuário clicou para ir votar"
            >
              <span className="flex h-full w-full flex-row items-center">
                <span className="material-symbols-outlined mr-1">
                  subdirectory_arrow_right
                </span>
                <span className="text-xl">Enter</span>
              </span>
            </SendGAEvent>
          </Link>
          <Link
            href="/grupo"
            className="flex w-[8rem] items-center justify-center 
                rounded border-2 border-colabGreen bg-colabBlue 
                bg-transparent px-4 py-2 font-semibold text-colabGreen
                shadow-2xl hover:border-transparent
                hover:bg-colabGreen hover:text-colabBlue"
          >
            <SendGAEvent
              action="go_from_perspectiva_to_grupo"
              category="click"
              label="User is going from perspectiva  to group"
              value="Usuário quer ir da página da página de perspectiva para grupo"
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
