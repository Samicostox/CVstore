import Marquee from "../../../utils/marquee.tsx";


const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
];

export function Companies() {
  return (
    <section id="companies">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-3xl font-semibold text-teal-500">
            Companies in our Database
          </h3>
          <div className="relative mt-6">
            <Marquee className="max-w-full [--duration:40s]">
              {companies.map((logo, idx) => (
                <img
                  key={idx}
                  src={`https://cdn.magicui.design/companies/${logo}.svg`}
                  className="h-10 w-28 brightness-0 invert"
                  alt={logo}
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-slate-900"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-slate-900"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
