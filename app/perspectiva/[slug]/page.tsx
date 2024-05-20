"use client";

import { useRouter } from "next/navigation";
import { contentUrl, ContentURLType } from "./constants";

export default function Page({ params }: { params: { slug: ContentURLType } }) {
  const router = useRouter();
  const { slug } = params;
  const { url, theme } = contentUrl[slug];

  return (
    <main className="flex min-h-[100vh] min-w-[100vw] flex-row bg-colabGray ">
      <section className="min-h-[100vh] w-[50vw] p-1">
        <iframe src={url} className="min-h-[100vh] w-[50vw]"></iframe>
      </section>
      <section className="flex flex-col p-[2rem]">
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
            Link para conteúdo
          </a>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLScA_jhfJyH_iWWNQtTVcBQjORNRiS_8r5GE7ZIuOBBO4iOESQ/viewform"
            rel="noopener noreferrer"
            className="font-medium text-colabPurple hover:underline"
          >
            Link para avaliação conteúdo
          </a>
        </span>
      </section>
    </main>
  );
}
