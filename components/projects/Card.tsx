import type { Image as ImageProps } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface CardProps {
  href: string;
  image: ImageProps;
  alt?: string;
  title: string;
  client: string;
  location: string;
}

export default function Card({ card }: { card: CardProps }) {
  const { href, image, alt, title, client, location } = card;

  return (
    <a href={href} class="group">
      <div class="max-h-[410px] overflow-hidden relative">
        <Image
          src={image}
          alt={alt}
          width={750}
          class="object-cover align-middle inline-block group-hover:(scale-[1.1]) transition-all ease-linear duration-[550ms] ease"
        />

        <div class="absolute right-0 bottom-0 w-[54px] h-[54px] flex items-center justify-center bg-white opacity-0 transition-all group-hover:(opacity-100 duration-[550ms])">
          <Image
            width={20}
            src="https://assets.website-files.com/63dff3904fd49bed9c9c3c19/63f895fe2ea72738ad0bc846_gallery-plus.svg"
            alt="Arrow"
          />
        </div>
      </div>

      <div class="flex items-center mt-2.5">
        <h2 class="w-full max-w-[50%] font-medium">{title}</h2>

        <div class="w-full max-w-[50%] pl-2.5 flex flex-col justify-end">
          <div class="flex justify-end flex-wrap">
            <p class="text-right text-sm leading-[150%]">Client:</p>
            <p class="text-right text-sm leading-[150%]">{client}</p>
          </div>
          <div class="flex justify-end flex-wrap">
            <p class="text-right text-sm leading-[150%]">Location:</p>
            <p class="text-right text-sm leading-[150%]">{location}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
