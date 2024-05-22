import SendGAEvent from "@/components/SendGAEvent";
import SignOut from "@/components/SignOut";
import Link from "next/link";
import { signup } from "../../actions/login";

export default function SignUpPage() {
  return (
    <>
      <SignOut />
      <main className="flex min-h-[100vh] min-w-[100vw] flex-row items-center justify-center bg-colabLightGreen">
        <div className="flex h-[50vh] w-[50vw] flex-col  items-center justify-around">
          <section className="text-center font-theGreat text-5xl font-bold">
            Crie sua conta
          </section>
          <main className="flex items-center justify-center text-sm text-gray-500">
            <form className="group flex w-[30rem] flex-col rounded-md bg-white p-5 shadow-lg md:p-10">
              <label htmlFor="email" className="mb-5">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="peer mt-2 w-full appearance-none rounded border border-gray-300 bg-inherit p-3 text-neutral-800 shadow shadow-gray-100 outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  placeholder=" "
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Por favor insira um endereço de e-mail válido
                </span>
              </label>
              <label htmlFor="password" className="mb-5">
                <span>Senha</span>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="peer mt-2 w-full appearance-none rounded border border-gray-300 bg-inherit p-3 text-neutral-800 shadow shadow-gray-100 outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  placeholder=" "
                  required
                  pattern=".{7,}"
                />
                <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                  Sua senha deve ter pelo menos 7 caracteres
                </span>
              </label>
              <button
                type="submit"
                className="mt-5 rounded-md bg-blue-500 py-3 text-white group-invalid:pointer-events-none group-invalid:opacity-50"
                formAction={signup}
              >
                Criar
              </button>
              <span className="mt-2 flex flex-row items-center justify-around">
                <Link
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  href="/signin"
                >
                  <SendGAEvent
                    action="clicked_to_create_account"
                    category="click"
                    label="User clicked to create account"
                    value="O usuário clicou para criar a conta"
                  >
                    Voltar
                  </SendGAEvent>
                </Link>
              </span>
            </form>
          </main>
        </div>
      </main>
    </>
  );
}
