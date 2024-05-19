"use client";

import { ReactNode } from "react";
import * as gtag from "../gtag";

type Props = {
  children: ReactNode;
  action: string;
  category: string;
  label: string;
  value: string;
};

const ga_event = ({ action, category, label, value }: any) => {
  console.log("SEND DATA TO GA");
  gtag.event({
    action,
    category,
    label,
    value,
  });
};

export default function SendGAEvent(props: Props) {
  const { action, category, label, value, children } = props;
  return (
    <span
      onClick={() =>
        ga_event({
          action,
          category,
          label,
          value,
        })
      }
    >
      {children}
    </span>
  );
}
