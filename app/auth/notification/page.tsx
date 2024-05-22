import { ArrowLeftFromLine, Mail } from "lucide-react";
import Link from "next/link";

export default function NotificationPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-colabPurple text-white gap-3">
      <Mail size={48} />
      <span className="font-theGreat text-5xl text-center">
        Verifique seu email para ativar sua conta!
      </span>
      <Link
        href="/signin"
        className="flex flex-row p-2 font-theGreat text-5xl font-medium text-colabGray hover:text-colabDarkGreen hover:underline"
      >
        <ArrowLeftFromLine size={48} className="mr-4" />
        Voltar
      </Link>
    </div>
  )
}