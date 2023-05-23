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
            <span class="block w-[24px] h-[1px] bg-black"></span>
            <span class="block w-[24px] h-[1px] bg-black mt-[7px]"></span>
          </div>
        </div>

        <div class="w-full z-[-1] absolute left-0 top-[67px]">
          <ul
            class={`bg-white px-2.5 py-5 ${
              checkDisplayMenu(
                "translate-y-[0px] duration-[400ms] ease",
                "translate-y-[-400px] duration-[400ms] ease",
              )
            }`}
          >
            {navItems?.map((item) => <NavItem item={item} />)}
            {button?.label && button.href && (
              <li class="mt-[15px]">
                <Button
                  href={button?.href}
                  class="text-black w-full capitalize border-1 bg-transparent cursor-pointer border-black rounded-[48px] px-[30px] py-2.5 flex justify-center text-center text-sm font-medium tracking-[0.25px] leading-[170%] transition-colors duration-300 ease hover:bg-black hover:text-white lg:px-[34px] lg:py-[12px]"
                >
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
            <li class="lg:pl-5 lg:ml-1">
              <Button
                href="/"
                class="text-black capitalize border-1 bg-transparent cursor-pointer border-black rounded-[48px] px-[30px] py-2.5 flex justify-center text-center text-sm font-medium tracking-[0.25px] leading-[170%] transition-colors duration-300 ease hover:bg-black hover:text-white lg:px-[34px] lg:py-[12px]"
              >
                Contact us
              </Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
