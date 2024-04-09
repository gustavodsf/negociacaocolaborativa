import { AboutPageType } from "@/types";
import {
  ComputerDesktopIcon,
  LockClosedIcon,
  SparklesIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

const mainPageAboutConfig: AboutPageType = {
  general: {
    title: "Sobre",
    subTitle: "Negociação Colaborativa",
    description:
      "Negociação Colaborativa",
    paragraphs: [
      {
        description:
          "Negociação Colaborativa 1",
      },
      {
        description:
          "Negociação Colaborativa 2",
      },
    ],
  },
  features: [
    {
      name: "T1",
      description:
        "Negociação Colaborativa",
      icon: ComputerDesktopIcon,
    },
    {
      name: "T2",
      description:
        "Negociação Colaborativa",
      icon: LockClosedIcon,
    },
    {
      name: "T3",
      description:
        "Negociação Colaborativa",
      icon: SparklesIcon,
    },
    {
      name: "T4",
      description:
        "Negociação Colaborativa",
      icon: UsersIcon,
    },
  ],
};

export default mainPageAboutConfig;
