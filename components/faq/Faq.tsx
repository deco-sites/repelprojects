import Accordion, {
  AccordionProps,
} from "deco-sites/repelprojects/components/faq/Accordion.tsx";

export interface Props {
  auxiliaryText?: string;
  titleSection?: string;

  accordion?: AccordionProps[];
}

export default function Projects({
  auxiliaryText,
  titleSection,
  accordion,
}: Props) {
  return (
    <article class="max-w-[1336px] mx-auto px-5 z-[-2] pb-[80px] lg:pb-[100px] xl:pb-[150px]">
      <div class="mb-[20px]">
        <div class="flex items-center">
          <div class="h-5 w-5 mr-[5px] bg-[#f4e486] lg:mr-[10px]" />
          <p class="text-sm leading-[170%] lg:text-base">{auxiliaryText}</p>
        </div>
        <h1 class="text-[35px] font-bold leading-[140%] font-manrope lg:text-[50px]">
          {titleSection}
        </h1>
      </div>

      {accordion?.map((accordion) => (
        <Accordion
          title={accordion.title}
          description={accordion.description}
        />
      ))}
    </article>
  );
}
