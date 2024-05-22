"use client";

import Comments from "@/components/comment/Comments";
import SendGAEvent from "@/components/SendGAEvent";
import SignOut from "@/components/SignOut";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import checkUserLoggedIn from "./actions";
import { contentUrl, ContentURLType } from "./constants";

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
      <main className="flex min-h-screen w-screen flex-col gap-2 bg-colabGray">
        <span className="text-center font-theGreat text-2xl text-colabDarkGreen">
          {theme}
        </span>
        <span className="flex flex-row items-center justify-between p-1">
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
              Conteúdo
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
              Avaliação conteúdo
            </SendGAEvent>
          </a>
        </span>
        <div className="inline-flex items-center justify-center w-full">
            <hr className="w-64 h-[0.1rem] my-2 bg-colabBlue border-0 rounded dark:bg-gray-700"/>
            <div className="absolute px-4 -translate-x-1/2 bg-colabGray left-1/2 dark:bg-gray-900">
                <svg className="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
          </svg>
            </div>
        </div>
        <Comments theme={slug} />
        <hr className="w-[16rem] h-[0.1rem] mx-auto my-4 bg-colabBlue border-0 rounded md:my-10 dark:bg-gray-700"/>
        <iframe src={url} className="h-[100vh]"></iframe>
      </main>
    </>
  );
}
