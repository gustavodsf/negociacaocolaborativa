"use client";

import SendGAEvent from "@/components/SendGAEvent";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import checkUserLoggedIn from "./actions";
import { contentUrl, ContentURLType } from "./constants";
import SignOut from "@/components/SignOut";
import Comments from "@/components/Comments";

export default function Page({ params }: { params: { slug: ContentURLType } }) {
  const [user, setUser] = useState<User | null>();
  const router = useRouter();
  const { slug } = params;
  const { url, theme } = contentUrl[slug];

  useEffect(() => {
    checkUserLoggedIn().then((value) => [setUser(value)]);
  }, []);

  return (
    <>
      <SignOut />
      <main className="flex min-h-[100vh] min-w-[100vw] flex-row bg-colabGray ">
        <section className="min-h-[100vh] w-[50vw] p-1">
          <iframe src={url} className="min-h-[100vh] w-[50vw]"></iframe>
        </section>
        <section className="flex flex-col p-[4rem]">
          <span className="font-theGreat text-2xl text-colabDarkGreen">
            {theme}
          </span>
          <span className="flex flex-row items-center justify-around">
            <a
              target="_blank"
              href={url}
              rel="noopener noreferrer"
              className="font-medium text-colabPurple hover:underline"
            >
              <SendGAEvent
                action="go_to_content_using_external_link"
                category="click"
                label="User wants to access the content thought external link"
                value="Usuário clicou para acessar o conteúdo através do link"
              >
                Link para conteúdo
              </SendGAEvent>
            </a>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLScA_jhfJyH_iWWNQtTVcBQjORNRiS_8r5GE7ZIuOBBO4iOESQ/viewform"
              rel="noopener noreferrer"
              className="font-medium text-colabPurple hover:underline"
            >
              <SendGAEvent
                action="go_to_rate_the_content"
                category="click"
                label="User wants to rate the content "
                value="Usuário clicou para avaliar o conteúdo"
              >
                Link para avaliação conteúdo
              </SendGAEvent>
            </a>
          </span>
          <section className="w-full h-full p-1">
            <Comments theme={slug}/>
          </section>
        </section>
      </main>
    </>
  );
}
