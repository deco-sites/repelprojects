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
    <article class="max-w-[1336px] mx-auto pt-[50px] pb-[80px] px-5 z-[-2] lg:(pb-[100px] pt-[100px]) xl:pb-[150px]">
      <div class="mb-[20px] pb-[10px]">
        <div class="flex items-center">
          <div class="h-5 w-5 mr-[5px] bg-[#f4e486] lg:(mr-[10px])" />
          <p class="text-sm leading-[170%] lg:text-base">{auxiliaryText}</p>
        </div>
        <h1 class="text-[35px] font-bold leading-[140%] font-manrope lg:text-[50px]">
          {titleSection}
        </h1>
      </div>

      <section class="grid grid-cols-1 gap-[40px] md:(grid-cols-2 gap-[30px]) lg:gap-[60px]">
        {cards && cards.map((card) => <Card card={card} />)}
      </section>

      <div class="flex justify-end mt-[30px] mx-2.5 lg:mt-[60px]">
        <Button href="#">Next</Button>
      </div>
    </article>
  );
}
