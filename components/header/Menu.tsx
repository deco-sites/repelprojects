import NavItem, {
  NavItemProps,
} from "deco-sites/repelprojects/components/header/NavItem.tsx";
import { signal } from "@preact/signals";
import Button from "deco-sites/repelprojects/components/ui/Button.tsx";

export interface MenuProps {
  navItems?: NavItemProps[];
  button?: NavItemProps;
}

const displayMenu = signal(false);

export default function Menu({ navItems, button }: MenuProps) {
  function toggleMenu() {
    displayMenu.value = !displayMenu.value;
  }

  const checkDisplayMenu = (okClasses: string, failClasses = "") => {
    if (displayMenu.value) {
      return okClasses;
    }
    return failClasses;
  };

  return (
    <div>
      <div class="lg:hidden">
        <div
          onClick={() => {
            toggleMenu();
          }}
          class="border-0"
        >
          <div class="pt-[3px]">
            <span class="block w-[24px] h-[1px] bg-black mb-[6px]"></span>
            <span class="block w-[24px] h-[0.9px] bg-black"></span>
            <span class="block w-[24px] h-[1px] bg-black mt-[7px]"></span>
          </div>
        </div>

        <div class="w-full z-[-1] absolute left-0 top-[67px]">
          <ul
            class={` bg-white px-2.5 py-5 ${
              checkDisplayMenu(
                "translate-y-[0px] duration-[400ms] ease",
                "translate-y-[-400px] duration-[400ms] ease",
              )
            }`}
          >
            {navItems?.map((item) => <NavItem item={item} />)}
            {button?.label && button.href && (
              <li class="mt-[15px]">
                <Button href={button?.href}>
                  {button?.label}
                </Button>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div class="hidden lg:block">
        <ul class="w-full flex bg-white items-center">
          {navItems?.map((item) => <NavItem item={item} />)}
          {button?.label && button.href && (
            <li class="lg:(pl-5 ml-1)">
              <Button href="/">
                Contact us
              </Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
