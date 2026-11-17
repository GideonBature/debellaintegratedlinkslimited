export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p: string) => `${basePath}${p}`;

export const company = {
  name: "Debella Integrated Links Limited",
  short: "Debella",
  rc: "RC 7137689",
  address: "No. 22 Namso Street, Unguwan Yelwa, Television, Kaduna, Nigeria",
  email: "debellaintergratedlinks@gmail.com",
  phones: [
    { display: "0818 894 4112", tel: "+2348188944112" },
    { display: "0703 527 9615", tel: "+2347035279615" },
  ],
  incorporated: "13 September 2023",
};

export const services = [
  { id: "building", n: "01", title: "Building & Civil Engineering", tag: "Construction",
    d: "From perimeter fences and gate houses to administrative blocks — planned, built and handed over to specification.",
    pts: ["Building construction", "Civil engineering works", "Perimeter fencing & gate houses", "Administrative & institutional buildings"] },
  { id: "renovation", n: "02", title: "Renovation & Remodelling", tag: "Rehabilitation",
    d: "Giving ageing structures a second life with careful rehabilitation, remodelling and finishing.",
    pts: ["Renovation / rehabilitation", "Remodelling", "Landscaping", "Finishing works"] },
  { id: "facilities", n: "03", title: "Facilities Management", tag: "Operations",
    d: "Keeping premises safe, clean and working — so your teams can focus on their real job.",
    pts: ["Premises upkeep", "Planned maintenance", "Site & grounds care", "Operational support"] },
  { id: "materials", n: "04", title: "Construction Equipment & Materials", tag: "Supply",
    d: "Dependable supply of construction equipment and building materials, delivered where the work is.",
    pts: ["Building materials", "Construction equipment", "Site consumables", "Project-based procurement"] },
  { id: "furniture", n: "05", title: "Furniture, Office & Interiors", tag: "Fit-out",
    d: "Manufacture and distribution of furniture and office equipment, with interior decoration to finish the room.",
    pts: ["School desks (steel / wood)", "Office furniture & equipment", "Interior decoration", "Bulk institutional supply"] },
  { id: "general", n: "06", title: "General Contracts & Consultancy", tag: "Advisory",
    d: "A single accountable partner for contracts across sectors, backed by consultancy that keeps projects on track.",
    pts: ["General contracts", "Project planning & preparation", "Consultancy", "Mining-related activities"] },
];

export const projects = [
  { ref: "BEN-2026-C", year: "Apr 2026", status: "Awarded",
    title: "912m Perimeter Fence & Gate House",
    where: "RCM Primary School, Ugye · Vandiekya LGA, Benue State", value: "₦134.4M",
    note: "Awarded by the Benue State Universal Basic Education Board (SUBEB) — three-month completion period." },
  { ref: "BEN-2026-D", year: "Apr 2026", status: "Awarded",
    title: "Rehabilitation of Two Classroom Blocks",
    where: "RCM Primary School, Poor · Makurdi LGA, Benue State", value: "₦72.1M",
    note: "Renovation of 4- and 3-classroom blocks, each with office and store. Awarded by SUBEB." },
  { ref: "BEN-2026-E", year: "Apr 2026", status: "Awarded",
    title: "273m Perimeter Fence & Gate House",
    where: "LGEA Primary School, KM 2 · Makurdi LGA, Benue State", value: "₦67.0M",
    note: "Awarded by the Benue State Universal Basic Education Board (SUBEB)." },
  { ref: "BEN-2025-A", year: "Aug 2025", status: "Awarded",
    title: "1,225m Perimeter Fence & Gate House",
    where: "RCM Primary School, Ihugh · Benue State", value: "₦146.7M",
    note: "Awarded by SUBEB with a three-month completion period." },
  { ref: "BEN-2025-B", year: "Aug 2025", status: "Awarded",
    title: "2-Seater Dual Desks, Steel / Wood",
    where: "Selected schools · Benue State", value: "₦81.0M",
    note: "Construction and distribution of school desks. Awarded by SUBEB." },
];

export const fleet = [
  { q: 3, t: "Tilting concrete mixers", s: "0.5 m³" },
  { q: 3, t: "Operational project vehicles", s: "Pick-up trucks" },
  { q: 3, t: "Generators", s: "3.5 kVA" },
  { q: 5, t: "Water tanks", s: "10,000 L" },
  { q: 2, t: "Welding machines", s: "Fabrication" },
];

export const credentials = [
  { k: "CAC", t: "Incorporated" },
  { k: "BPP", t: "Registered contractor" },
  { k: "FIRS", t: "Tax clearance" },
  { k: "PENCOM", t: "Pension compliant" },
  { k: "NSITF", t: "Employees' compensation" },
  { k: "ITF", t: "Training fund" },
  { k: "SCUML", t: "Registered" },
];

export const offices = [
  { city: "Kaduna", role: "Head office", line: "No. 22 Namso Street, Unguwan Yelwa, Television" },
  { city: "Abuja", role: "Office", line: "Federal Capital Territory" },
  { city: "Kano", role: "Office", line: "Kano State" },
  { city: "Katsina", role: "Office", line: "Katsina State" },
];

export const steps = [
  { t: "Brief", d: "We study your requirement, site and budget before we price anything." },
  { t: "Plan", d: "Scope, programme and resources are agreed in writing — no surprises." },
  { t: "Build", d: "Qualified crews, owned or leased plant, and supervised delivery on site." },
  { t: "Handover", d: "Inspection, completion certificate and support after we leave site." },
];

export const safety = [
  "Safe and healthy working conditions for every employee",
  "Training and instruction before work begins",
  "Protective equipment and safety devices on every site",
  "Daily housekeeping, inspected tools and an emergency response plan",
  "Site inductions and toolbox talks for new and returning workers",
];
