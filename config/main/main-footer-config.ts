import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/icons/socials";
import { FooterType } from "@/types";
import { default as mainCategoryConfig } from "./main-category-config";

const mainFooterConfig: FooterType = {
  categories: mainCategoryConfig,
  pages: [
    {
      title: "Home",
      slug: "/",
    },
    {
      title: "Sobre",
      slug: "/about",
    },
    {
      title: "Contato",
      slug: "/contact",
    },
  ],

  socials: [
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: FacebookIcon,
    },
    {
      name: "Github",
      url: "https://github.com/gustavodsf/neg-colab",
      icon: GithubIcon,
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: InstagramIcon,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/",
      icon: TwitterIcon,
    },
    {
      name: "Youtube",
      url: "https://youtube.com",
      icon: YoutubeIcon,
    },
  ],
  legals: [
    {
      title: "Termo",
      slug: "/terms",
    },
    {
      title: "Política",
      slug: "/policy",
    },
  ],
  copyright: "© 2023 PESC - URFJ.",
};

export default mainFooterConfig;
