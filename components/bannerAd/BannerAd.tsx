import Button from "deco-sites/repelprojects/components/ui/Button.tsx";
import Image from "deco-sites/std/components/Image.tsx";

export interface Props {
  title?: string;
  description?: string;
  textButton?: string;
}

export default function BannerAd({ title, description, textButton }: Props) {
  return (
    <article class="w-full bg-[#d9e3db] relative">
      <section class="max-w-[1336px] mx-auto px-5 z-[-2] py-[50px] bg-[#d9e3db] lg:py-[60px]">
        <div class="mb-[20px]">
          <p class="text-[34px] text-black font-bold leading-[150%] text-center font-manrope mb-5 lg:text-[42px]">
            {title}
          </p>
          <h1 class="w-full mx-auto text-[20px] leading-[170%] text-center font-manrope text-[#333] mb-10 lg:mb-[50px] lg:max-w-[40%]">
            {description}
          </h1>
        </div>

        {textButton && (
          <div class="flex justify-center">
            <Button
              href="#"
              class="group text-black capitalize border-1 bg-transparent cursor-pointer border-black rounded-[48px] px-[30px] py-2.5 flex justify-center gap-[20px] text-center text-sm font-medium tracking-[0.25px] leading-[170%] transition-colors duration-300 ease hover:bg-black hover:text-white lg:px-[34px] lg:py-[12px] lg:pr-[16px]"
            >
              Contact us
              <Image
                src="https://assets.website-files.com/63dff3904fd49bed9c9c3c19/63f57bc9e975d1faa93be82a_ic-arrow.svg"
                width={22}
                height={22}
                class="group-hover:filter group-hover:invert transition-colors"
                alt="Arrow Right"
              />
            </Button>
          </div>
        )}
      </section>

      <div class="w-[50px] h-[50px] bg-[#f4e486] absolute bottom-0 right-0 md:w-[70px] md:h-[70px] lg:w-[100px] lg:h-[100px]" />
    </article>
  );
}
