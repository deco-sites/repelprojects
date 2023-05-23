export interface Props {
  titleNewsletter?: string;
  placeholderNewsletter?: string;
  columnLinks?: {
    titleLinks?: string;
    link?: {
      text: string;
      href: string;
    }[];
  }[];
  location?: string;
  email?: string;
  copyright?: string;
  developerSite?: string;
}

export default function Footer({
  titleNewsletter,
  placeholderNewsletter,
  columnLinks,
  location,
  email,
  copyright,
  developerSite,
}: Props) {
  return (
    <footer class="bg-[#0a0045]">
      <div class="max-w-[1336px] mx-auto px-5 pb-[50px] lg:(py-[30px])">
        <div class="flex flex-col gap-[40px] py-[50px] md:(flex-row gap-[50px])">
          <div class="lg:(flex-1)">
            <div class="lg:(w-[100%] max-w-[350px])">
              <label
                htmlFor="newsletter"
                class="text-white block mb-2.5 font-medium  lg:(mb-5 text-[20px])"
              >
                {titleNewsletter}
              </label>

              <div class="relative">
                <input
                  class="w-full text-white text-sm border-b-1 border-white bg-transparent h-[40px] placeholder-white"
                  type="text"
                  placeholder={placeholderNewsletter}
                />

                <img
                  src="https://assets.website-files.com/63dff3904fd49bed9c9c3c19/63f57732a315606fe5a54faf_ic-arrow.svg"
                  class="absolute right-0 bottom-auto top-1/2 transform -translate-y-1/2"
                  alt="Arrow right"
                />
              </div>
            </div>
          </div>

          <div class="flex justify-between gap-[20px] w-full md:(w-[fit-content] justify-between)">
            {columnLinks?.map((column) => (
              <div class="w-[fit-content]">
                <p class="text-white block mb-2.5 font-medium lg:(text-[20px])">
                  {column.titleLinks}
                </p>

                {column.link?.map((link) => (
                  <a
                    class="text-white block py-[5px] text-sm lg:(text-[16px] leading-[170%])"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            ))}
          </div>

          <div class="lg:(max-w-[215px])">
            <p class="text-white text-sm block mb-2.5 leading-[150%] lg:(text-[16px] leading-[170%])">
              {location}
            </p>
            <a
              class="text-white text-sm lg:(text-[16px] leading-[170%] py-[5px])"
              href={email}
            >
              {email}
            </a>
          </div>
        </div>

        <div class="w-full flex justify-between">
          <p class="text-white block py-[6px] text-sm">{copyright}</p>
          <p class="text-white block py-[6px] text-sm">{developerSite}</p>
        </div>
      </div>
    </footer>
  );
}
