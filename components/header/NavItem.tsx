export interface NavItemProps {
  label: string;
  href: string;
}

export default function NavItem({ item }: { item: NavItemProps }) {
  const { href, label } = item;

  return (
    <li class="block">
      <a
        href={href}
        class="block p-2.5 text-sm font-medium leading-[150%] font-sans text-black tracking-[0.25px] lg:py-[5px] lg:px-[20px] lg:mx-[5px] hover:text-[#333] transition-colors"
      >
        {label}
      </a>
    </li>
  );
}
