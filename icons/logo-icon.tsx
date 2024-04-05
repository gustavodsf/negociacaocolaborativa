import Image from "next/image";

import { FC } from "react";

interface LogoIconProps {
  className?: string;
}

const LogoIcon: FC<LogoIconProps> = ({ className = "" }) => {
  return (
    <Image
      src="/images/logo.jpg"
      alt="Logo"
      className="h-16 w-16 rounded-full"
      width={64}
      height={64}
      priority
    />
  );
};

export default LogoIcon;
