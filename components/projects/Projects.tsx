import Card, {
  CardProps,
} from "deco-sites/repelprojects/components/projects/Card.tsx";
import Button from "deco-sites/repelprojects/components/ui/Button.tsx";

export interface Props {
  auxiliaryText?: string;
  titleSection?: string;

  cards?: CardProps[];
}

export default function Projects({
  auxiliaryText,
  titleSection,
  cards,
}: Props) {
  return (
    <article class="max-w-[1336px] mx-auto pt-[50px] pb-[80px] px-5 z-[-2] lg:pb-[100px] lg:pt-[100px] xl:pb-[150px]">
      <div class="mb-[20px] pb-[10px]">
        <div class="flex items-center">
          <div class="h-5 w-5 mr-[5px] bg-[#f4e486] lg:mr-[10px]" />
          <p class="text-sm leading-[170%] text-black lg:text-base">
            {auxiliaryText}
          </p>
        </div>
        <h1 class="text-[35px] font-bold leading-[140%] font-manrope lg:text-[50px]">
          {titleSection}
        </h1>
      </div>

      <section class="grid grid-cols-1 gap-[40px] md:grid-cols-2 md:gap-[30px] lg:gap-[60px]">
        {cards && cards.map((card) => <Card card={card} />)}
      </section>

      <div class="flex justify-end mt-[30px] mx-2.5 lg:mt-[60px]">
        <Button
          href="#"
          class="text-black capitalize border-1 bg-transparent cursor-pointer border-black rounded-[48px] px-[30px] py-2.5 flex justify-center text-center text-sm font-medium tracking-[0.25px] leading-[170%] transition-colors duration-300 ease hover:bg-black hover:text-white lg:px-[34px] lg:py-[12px]"
        >
          Next
        </Button>
      </div>
    </article>
  );
}
