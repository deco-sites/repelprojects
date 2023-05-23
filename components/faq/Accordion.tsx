export interface AccordionProps {
  title?: string;
  description?: string;
}

export default function Accordion({ title, description }: AccordionProps) {
  return (
    <details class="border-b border-[#e6e6e6]">
      <summary class="cursor-pointer flex justify-between items-center py-5 group flex gap-[35px] whitespace-pre-line">
        <span class="text-lg font-medium flex-1 mx-auto lg:text-[20px]">
          {title}
        </span>

        <div class="min-h-[30px] min-w-[30px] flex items-center justify-center rounded-full border-1 border-black flex-none mx-auto fill-current h-4 w-4 transition-transform duration-[800ms] transform rotate-45 group-hover:rotate-[90deg]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="2"
            class="h-[14px] w-[14px]"
          >
            <line x1="4" y1="4" x2="20" y2="20" stroke="#333" />
            <line x1="4" y1="20" x2="20" y2="4" stroke="#333" />
          </svg>
        </div>
      </summary>
      <div class="pb-[20px] text-[#333] leading-[170%]">
        <p>{description}</p>
      </div>
    </details>
  );
}
