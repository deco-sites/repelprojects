import type { Image as ImageProps } from "deco-sites/std/components/types.ts";
import { NavItemProps } from "deco-sites/repelprojects/components/header/NavItem.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import Menu from "deco-sites/repelprojects/components/header/Menu.tsx";

export interface Props {
  logo?: {
    src?: ImageProps;
    alt?: string;
  };
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItemProps[];

  /**
   * @title Highlight Link
   * @description Last link in header with highlight
   */
  button?: NavItemProps;
}

export default function Header({ logo, navItems, button }: Props) {
  return (
    <header class="w-full flex items-center bg-white border-b-[1px] border-black py-[10px] lg:py-[15px]">
      <nav class="w-full flex items-center justify-between px-5 h-[47px] box-border max-w-[1336px] mx-auto lg:h-[50px]">
        {logo?.src && (
          <Image
            src={logo.src}
            alt={logo.alt}
            height={21}
            width={94}
            class="mt-[1px] align-middle inline-block"
          />
        )}

        <Menu navItems={navItems} button={button} />
      </nav>
    </header>
  );
}
