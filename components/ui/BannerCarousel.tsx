import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "preact/hooks";
import type { Image as ImageProps } from "deco-sites/std/components/types.ts";
import Image from "deco-sites/std/components/Image.tsx";

export interface CardProps {
  image: ImageProps;
  alt: string;
  content: string;
  author: string;
}

export interface Props {
  images?: CardProps[];
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function BannerItem({ card }: { card: CardProps }) {
  const { image, alt, content, author } = card;

  return (
    <div class="pt-[60px] pb-[120px] flex flex-col gap-[50px] md:flex-row md:gap-[30px] lg:gap-[50px]">
      <Image
        class="w-full md:max-h-[300px] md:min-h-[300px]  md:max-w-[250px] lg:max-h-[540px] lg:min-h-[540px] lg:max-w-[460px]"
        src={image}
        alt={alt}
        width={830}
      />

      <div class="md:mt-[40px] md:mb-[10px]">
        <Image
          src="https://assets.website-files.com/63dff3904fd49bed9c9c3c19/63f730f013b5f15585b7baa0_ic-quote.svg"
          alt="Blockquote caracteres"
          width={25}
        />
        <div>
          {content && (
            <blockquote class="text-[22px] leading-[170%] font-medium pt-[6px] mb-[20px] md:text-[18px] lg:text-[28px]">
              {content}
            </blockquote>
          )}
          {author && <p class="text-[#333] leading-[170%]">{author}</p>}
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div class="absolute bottom-[30px] right-[20px] flex gap-[10px] md:bottom-[120px] md:right-[0px]">
      <div class="flex items-center justify-center z-10 col-start-1 row-start-2 ">
        <Slider.PrevButton class="rounded-full border-[1px] border-black flex items-center justify-center bg-transparent w-[40px] h-[40px] min-h-[40px] hover:opacity-50 transition-all">
          <Image
            src="https://assets.website-files.com/63dff3904fd49bed9c9c3c19/63f57bc9e975d1faa93be82a_ic-arrow.svg"
            width={18}
            height={18}
            class="group-hover:filter group-hover:invert transition-colors rotate-180"
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2 ">
        <Slider.NextButton class="rounded-full border-[1px] border-black flex items-center justify-center bg-transparent w-[40px] h-[40px] min-h-[40px] hover:opacity-50 transition-all">
          <Image
            src="https://assets.website-files.com/63dff3904fd49bed9c9c3c19/63f57bc9e975d1faa93be82a_ic-arrow.svg"
            width={18}
            height={18}
            class="group-hover:filter group-hover:invert transition-colors"
          />
        </Slider.NextButton>
      </div>
    </div>
  );
}

function BannerCarousel({ images, preload, interval }: Props) {
  const id = useId();

  return (
    <div
      id={id}
      class="relative grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px] px-[20px] mb-[80px] bg-[#d9e3db] md:(mb-[100px]) lg:(mb-[150px])"
    >
      <Slider class=" relative carousel carousel-center w-full max-w-[1336px] mx-auto col-span-full row-span-full scrollbar-none gap-6">
        {images?.map((image, index) => (
          <Slider.Item index={index} class="carousel-item w-full">
            <BannerItem card={image} />
          </Slider.Item>
        ))}
        <Buttons />
      </Slider>

      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default BannerCarousel;
