import React from "react";
import Link from "next/link";
import { A } from "./Anchor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BackNavigationProps {
  href: string;
  as?: string;
  text: string;
}

const BackNavigation = ({ href, as, text }: BackNavigationProps) => (
  <p>
    <Link href={href} as={as || href}>
      <A>
        <FontAwesomeIcon icon="chevron-left" />
        &nbsp; {text}
      </A>
    </Link>
  </p>
);

export default BackNavigation;
