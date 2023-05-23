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
        class="block p-2.5 text-sm font-medium leading-[150%] font-sans tracking-[0.25px] lg:(py-[5px] px-[20px] mx-[5px])"
      >
        {label}
      </a>
    </li>
  );
}
