import { ArrowLeftFromLine, ServerCrash } from "lucide-react";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="h-screen w-screen bg-colabPurple flex flex-col items-center justify-center text-white">
        <ServerCrash size={48}/>
        <span className="text-5xl font-theGreat">Eita! Deu problema ao criar seu usuário</span>
        <Link href="/signin" className="text-5xl font-theGreat flex flex-row p-2 font-medium text-white hover:underline hover:text-colabGreen">
          <ArrowLeftFromLine size={48} className="mr-4"/>
          Voltar
        </Link>
    </div>
  );
}


