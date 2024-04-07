import Marquee from "../../../utils/marquee.tsx";

const companies = [
  { name: "Goldman Sachs", url: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712483444/10_jsx7lx.png" },
  { name: "Barclays", url: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712483444/18_gzkxpm.png" },
  { name: "Bank of America", url: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712483444/17_nvkboi.png" },
  { name: "BlackRock", url: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712483444/8_oxtkwh.png" },
  { name: "Amazon", url: "https://cdn.magicui.design/companies/Amazon.svg" },
  { name: "QRT", url: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712483443/11_umvdgq.png" },
  { name: "Morgan Stanley", url: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712483443/12_lduigl.png" },
  { name: "Deloitte", url: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712483443/13_w9uqq9.png" },
  { name: "Wise", url: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712483444/14_fppefx.png" },
  { name: "Natwest", url: "https://res.cloudinary.com/dl2adjye7/image/upload/v1712483444/15_mygzhx.png" },
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
              {companies.map((company, idx) => (
                <img
                  key={idx}
                  src={company.url}
                  className="h-25 w-40 brightness-0 invert"
                  alt={company.name}
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
