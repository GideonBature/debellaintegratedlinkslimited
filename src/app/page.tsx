"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Check, Menu, X, Phone, Mail, MapPin, Send, HardHat, ShieldCheck,
} from "lucide-react";
import { asset, company, services, projects, fleet, credentials, offices, steps, safety } from "@/lib/site";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#capacity", label: "Capacity" },
  { href: "#standards", label: "Standards" },
  { href: "#contact", label: "Contact" },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

const mount = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

function Sheet({ n, label, light }: { n: string; label: string; light?: boolean }) {
  return (
    <p className={`mono flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] ${light ? "text-aqua" : "text-teal-deep"}`}>
      <span className={`border px-2 py-0.5 ${light ? "border-aqua/50" : "border-teal-deep/50"}`}>{n}</span>
      {label}
    </p>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white shadow-[0_1px_0_rgba(19,21,43,.1)]">
      <div className="h-1.5 w-full bg-ink"><div className="h-full w-[38%] rounded-br-2xl bg-teal" /></div>
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" aria-label={`${company.name} home`} className="flex items-center gap-3">
          <img src={asset("/logo-emblem.png")} alt="" className="h-11 w-auto" />
          <span className="leading-none">
            <span className="font-display block text-[1.35rem] font-bold uppercase tracking-wide text-ink">Debella Integrated</span>
            <span className="font-display block text-[1.35rem] font-bold uppercase tracking-wide text-ink">Links Limited</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-ink/75 transition hover:text-teal-deep">{n.label}</a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-teal">
            Start a project <ArrowRight size={15} />
          </a>
        </nav>
        <button className="p-2 text-ink lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-ink/10 bg-white px-5 py-4 lg:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-ink">{n.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block bg-ink py-3 text-center font-bold uppercase tracking-wider text-white">Start a project</a>
        </div>
      )}
    </header>
  );
}

/** Line-drawn site elevation: building under construction with tower crane */
function Elevation() {
  const p = { pathLength: 1, fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 520 440" className="draw h-full w-full text-aqua" aria-hidden="true">
      {/* ground */}
      <line {...p} x1="10" y1="400" x2="510" y2="400" />
      {/* main block */}
      <path {...p} d="M80 400 V190 H300 V400" />
      <path {...p} d="M80 190 H300 M80 250 H300 M80 310 H300 M80 360 H300 M150 190 V400 M225 190 V400" />
      {/* topmost frame, unfinished */}
      <path {...p} d="M80 190 V130 M150 190 V130 M225 190 V130 M300 190 V130 M80 130 H300" />
      {/* wing */}
      <path {...p} d="M300 400 V270 H400 V400 M300 330 H400 M350 270 V400" />
      {/* tower crane */}
      <path {...p} d="M440 400 V50 M470 400 V50 M440 80 L470 110 M440 110 L470 140 M440 140 L470 170 M440 170 L470 200 M440 200 L470 230 M440 230 L470 260 M440 260 L470 290 M440 290 L470 320 M440 320 L470 350 M440 350 L470 380" />
      <path {...p} d="M455 50 L455 28 M455 28 L110 28 M455 28 L500 28 M110 50 H500 M110 28 V50 M240 28 V50 M370 28 V50 M455 28 L240 50" />
      <path {...p} d="M180 50 V120 M170 120 H190 V138 H170 Z" />
      {/* dimension line */}
      <path {...p} strokeWidth={1} d="M80 425 H300 M80 418 V432 M300 418 V432" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-night pt-[80px] text-white">
      <div className="grid-dark absolute inset-0" />
      <div className="absolute -right-24 top-24 h-[620px] w-[620px] rounded-full bg-teal/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <motion.div {...mount}><Sheet n="01" label="Kaduna · Abuja · Kano · Katsina" light /></motion.div>
          <motion.h1 {...mount} className="mt-7 text-[3.4rem] font-extrabold uppercase leading-[0.92] sm:text-[5rem] lg:text-[6.4rem]">
            We build the<br />links that<br /><span className="text-teal">hold.</span>
          </motion.h1>
          <motion.p {...mount} className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
            Debella Integrated Links Limited delivers civil engineering, construction, consultancy, supply and general
            contracts — planned carefully, built to specification and handed over on time.
          </motion.p>
          <motion.div {...mount} className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-teal px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-aqua hover:text-ink">
              Start a project <ArrowRight size={16} />
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-wider transition hover:border-aqua hover:text-aqua">
              See our work <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div {...mount} className="relative">
          <div className="aspect-[520/440] w-full"><Elevation /></div>
          <div className="mono absolute -bottom-3 right-0 w-[260px] border border-white/25 bg-night/90 p-4 text-[11px] uppercase leading-relaxed tracking-wider backdrop-blur">
            <div className="flex justify-between border-b border-white/20 pb-2 text-aqua"><span>Title block</span><span>{company.rc}</span></div>
            <p className="pt-2 text-white/80">Debella Integrated Links Ltd.<br />Civil · Construction · Supply<br />Kaduna State, Nigeria</p>
          </div>
        </motion.div>
      </div>

      <div className="relative grid grid-cols-2 border-t border-white/15 bg-night/60 lg:grid-cols-4">
        {[
          ["₦501M", "Contracts awarded, 2025–26"],
          ["4", "Offices across the north"],
          ["6", "Service lines under one roof"],
          ["100%", "Statutory compliance"],
        ].map(([a, b], i) => (
          <div key={b} className={`px-5 py-7 lg:px-8 ${i % 2 === 0 ? "border-r border-white/15" : ""} ${i < 2 ? "border-b border-white/15 lg:border-b-0" : ""} lg:border-r lg:last:border-r-0`}>
            <div className="font-display text-4xl font-bold text-white lg:text-5xl">{a}</div>
            <div className="mono mt-1 text-[11px] uppercase tracking-[0.16em] text-aqua">{b}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Ticker() {
  const items = ["Civil Engineering", "Construction", "Consultancy", "Facilities Management", "Renovation", "General Contracts", "Building Materials", "Furniture & Interiors"];
  const row = [...items, ...items];
  return (
    <div className="marquee-wrap overflow-hidden bg-teal py-4 text-white" aria-hidden="true">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {row.concat(row).map((t, i) => (
          <span key={i} className="font-display flex items-center gap-10 text-2xl font-bold uppercase tracking-wide">
            {t} <span className="text-ink">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <motion.div {...reveal}>
          <Sheet n="02" label="Who we are" />
          <h2 className="mt-5 text-5xl font-extrabold uppercase leading-[0.95] text-ink sm:text-6xl">
            Integrated services.<br />One accountable team.
          </h2>
          <img src={asset("/logo-emblem.png")} alt="" className="mt-10 h-24 w-auto opacity-90" />
        </motion.div>
        <motion.div {...reveal} className="space-y-6 text-lg leading-relaxed text-ink/80">
          <p>
            Debella Integrated Links Limited is an indigenous company of qualified, experienced professionals, each a specialist in their field.
            Incorporated in {company.incorporated} ({company.rc}) and trading since January 2024, we were founded to meet the growing need for
            integrated, specialised services in planning, preparing and implementing development projects across the Nigerian economy.
          </p>
          <p>
            Our philosophy is simple: quality services and products, true value for money. We apply sound technology, economics and financial
            management — under strict professional ethics — to strike the right balance between cost, speed and quality.
          </p>
          <div className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-3">
            {[
              ["Management", "Founders, partners and executives with matching academic and professional experience."],
              ["Operations", "Engineers, architects, quantity surveyors and technical staff, supervised on site."],
              ["Administration", "Accountants, secretaries, marketing and logistics keeping every job moving."],
            ].map(([t, d]) => (
              <div key={t} className="bg-concrete p-5">
                <h3 className="font-display text-2xl font-bold uppercase text-teal-deep">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(0);
  const s = services[active];
  return (
    <section id="services" className="grid-dark relative bg-ink py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...reveal}>
          <Sheet n="03" label="What we do" light />
          <h2 className="mt-5 max-w-3xl text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl">Six disciplines. Built to work together.</h2>
        </motion.div>
        <div className="mt-14 grid gap-0 border border-white/20 lg:grid-cols-[0.9fr_1.1fr]">
          <ul role="tablist" aria-label="Services" className="divide-y divide-white/15">
            {services.map((x, i) => (
              <li key={x.id}>
                <button
                  role="tab" aria-selected={i === active}
                  onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}
                  className={`flex w-full items-center gap-5 px-5 py-5 text-left transition sm:px-7 ${i === active ? "bg-teal text-white" : "hover:bg-white/5"}`}
                >
                  <span className="mono text-xs tracking-widest opacity-70">{x.n}</span>
                  <span className="font-display flex-1 text-2xl font-bold uppercase leading-tight sm:text-3xl">{x.title}</span>
                  <ArrowRight className={`shrink-0 transition ${i === active ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} />
                </button>
              </li>
            ))}
          </ul>
          <div role="tabpanel" className="relative border-t border-white/20 bg-night/70 p-7 sm:p-10 lg:border-l lg:border-t-0" key={s.id}>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
              <span className="mono inline-block border border-aqua/50 px-2 py-0.5 text-[11px] uppercase tracking-[0.2em] text-aqua">{s.tag}</span>
              <h3 className="font-display mt-5 text-4xl font-bold uppercase leading-none sm:text-5xl">{s.title}</h3>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/75">{s.d}</p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {s.pts.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 border-t border-white/15 pt-3 text-sm text-white/90">
                    <Check size={16} className="mt-0.5 shrink-0 text-aqua" /> {pt}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-9 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-aqua hover:text-white">
                Discuss this service <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...reveal} className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Sheet n="04" label="Track record" />
            <h2 className="mt-5 text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl">Projects of record</h2>
          </div>
          <p className="max-w-md text-ink/70">Five contracts awarded to Debella by the Benue State Universal Basic Education Board since August 2025, each backed by a formal award letter.</p>
        </motion.div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article key={p.ref} {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}
              className="group relative flex flex-col border-2 border-ink bg-white p-7 transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--color-teal)]">
              <div className="mono flex items-center justify-between text-[11px] uppercase tracking-[0.18em]">
                <span className="text-ink/60">{p.ref}</span>
                <span className="bg-hazard px-2 py-0.5 font-medium text-ink">{p.status}</span>
              </div>
              <div className="font-display mt-8 text-6xl font-bold leading-none text-teal-deep">{p.value}</div>
              <h3 className="font-display mt-4 text-3xl font-bold uppercase leading-[1.02]">{p.title}</h3>
              <p className="mono mt-3 text-xs uppercase tracking-wider text-ink/60">{p.where}</p>
              <p className="mt-5 flex-1 border-t border-ink/15 pt-5 text-sm leading-relaxed text-ink/75">{p.note}</p>
              <p className="mono mt-4 text-[11px] uppercase tracking-widest text-ink/50">{p.year}</p>
            </motion.article>
          ))}
          <motion.a {...reveal} href="#contact" className="group flex flex-col justify-between bg-teal p-7 text-white transition hover:bg-ink">
            <span className="mono text-[11px] uppercase tracking-[0.18em] text-white/80">Next on the list</span>
            <span className="font-display mt-10 text-5xl font-bold uppercase leading-[0.95]">Your project here.</span>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">Start a project <ArrowUpRight size={16} /></span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

function Capacity() {
  return (
    <section id="capacity" className="bg-sand py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <motion.div {...reveal}>
          <Sheet n="05" label="Plant & process" />
          <h2 className="mt-5 text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl">Equipped for site, not just for paper.</h2>
          <p className="mt-6 max-w-lg text-lg text-ink/75">Plant is secured under lease agreement and maintained to keep programmes moving from mobilisation to handover.</p>
          <ul className="mt-9 border-t-2 border-ink">
            {fleet.map((f) => (
              <li key={f.t} className="flex items-baseline gap-5 border-b border-ink/20 py-4">
                <span className="font-display w-14 text-5xl font-bold leading-none text-teal-deep">{String(f.q).padStart(2, "0")}</span>
                <span className="font-display flex-1 text-2xl font-semibold uppercase">{f.t}</span>
                <span className="mono text-xs uppercase tracking-wider text-ink/60">{f.s}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...reveal}>
          <p className="mono text-[11px] uppercase tracking-[0.2em] text-teal-deep">How a project runs</p>
          <ol className="mt-6 space-y-0">
            {steps.map((s, i) => (
              <li key={s.t} className="relative grid grid-cols-[56px_1fr] gap-5 pb-10 last:pb-0">
                {i < steps.length - 1 && <span className="absolute left-[27px] top-14 h-[calc(100%-3.2rem)] w-px bg-ink/25" />}
                <span className="font-display flex h-14 w-14 items-center justify-center bg-ink text-2xl font-bold text-white">{i + 1}</span>
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase">{s.t}</h3>
                  <p className="mt-1 text-ink/70">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  );
}

function Standards() {
  return (
    <section id="standards" className="py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.div {...reveal}>
            <Sheet n="06" label="Compliance" />
            <h2 className="mt-5 text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl">Registered. Cleared. Accountable.</h2>
            <div className="mt-9 grid border-2 border-ink sm:grid-cols-2">
              {credentials.map((c, i) => (
                <div key={c.k} className={`p-5 ${i % 2 === 0 ? "sm:border-r-2" : ""} ${i < credentials.length - 2 ? "border-b-2" : i === credentials.length - 2 ? "border-b-2 sm:border-b-0" : ""} border-ink`}>
                  <div className="font-display text-3xl font-bold text-teal-deep">{c.k}</div>
                  <div className="mt-1 text-sm font-bold uppercase tracking-wide">{c.t}</div>
                  <p className="mt-1 text-sm leading-snug text-ink/65">{c.d}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div {...reveal} className="relative bg-ink p-8 text-white sm:p-10">
            <div className="hazard absolute inset-x-0 top-0 h-2" />
            <HardHat className="mt-3 text-hazard" size={34} />
            <h3 className="font-display mt-4 text-4xl font-bold uppercase leading-none">Health, Safety &amp; Environment</h3>
            <p className="mt-4 text-white/70">Our directors treat health and safety as a shared objective for management and workers at every level. In practice, that means:</p>
            <ul className="mt-6 space-y-4">
              {safety.map((s) => (
                <li key={s} className="flex gap-3 text-white/90"><ShieldCheck size={20} className="mt-0.5 shrink-0 text-aqua" />{s}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Offices() {
  return (
    <section className="bg-night py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div {...reveal}>
          <Sheet n="07" label="Where we work" light />
          <h2 className="mt-5 text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl">Headquartered in Kaduna.<br />Present across the region.</h2>
        </motion.div>
        <div className="mt-12 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
          {offices.map((o, i) => (
            <div key={o.city} className="border-b border-white/20 py-8 sm:px-6 sm:first:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <span className="mono text-[11px] uppercase tracking-[0.2em] text-aqua">{i === 0 ? "★ " : ""}{o.role}</span>
              <div className="font-display mt-3 text-5xl font-bold uppercase">{o.city}</div>
              <p className="mt-2 text-sm text-white/60">{o.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState<{ mailto: string; gmail: string } | null>(null);
  const [f, setF] = useState({ name: "", org: "", phone: "", email: "", type: services[0].title, message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Project enquiry from ${f.name}${f.org ? ` (${f.org})` : ""}`;
    const body = [
      "Hello Debella Integrated Links Limited,", "",
      `I would like to discuss: ${f.type}`, "",
      f.message ? `Project details:\n${f.message}\n` : "",
      "Contact details", `Name: ${f.name}`, f.org ? `Organisation: ${f.org}` : "", `Phone: ${f.phone}`, `Email: ${f.email}`,
    ].filter((l, i, a) => l !== "" || a[i - 1] !== "").join("\n");
    const q = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailto = `mailto:${company.email}?${q}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(company.email)}&${q}`;
    setSent({ mailto, gmail });
    window.location.href = mailto;
  }

  const input = "mt-1.5 w-full border-2 border-ink/20 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-teal";

  return (
    <section id="contact" className="grid-light py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <motion.div {...reveal}>
          <Sheet n="08" label="Contact" />
          <h2 className="mt-5 text-5xl font-extrabold uppercase leading-[0.95] sm:text-6xl">Have a project in mind?</h2>
          <p className="mt-5 text-lg text-ink/70">Tell us what you need built, renovated or supplied. We will respond with a clear plan and a firm price.</p>
          <ul className="mt-9 space-y-5">
            <li className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-aqua"><MapPin size={19} /></span><span className="self-center text-ink/85">{company.address}</span></li>
            <li className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-aqua"><Phone size={19} /></span>
              <span className="self-center font-semibold">{company.phones.map((p, i) => (<span key={p.tel}>{i > 0 && " · "}<a href={`tel:${p.tel}`} className="hover:text-teal-deep">{p.display}</a></span>))}</span></li>
            <li className="flex gap-4"><span className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-aqua"><Mail size={19} /></span><a href={`mailto:${company.email}`} className="self-center break-all font-semibold hover:text-teal-deep">{company.email}</a></li>
          </ul>
        </motion.div>

        <motion.form {...reveal} onSubmit={submit} className="border-2 border-ink bg-concrete p-7 shadow-[10px_10px_0_0_var(--color-ink)] sm:p-9">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-bold">Full name<input required className={input} value={f.name} onChange={set("name")} autoComplete="name" /></label>
            <label className="text-sm font-bold">Organisation<input className={input} value={f.org} onChange={set("org")} autoComplete="organization" /></label>
            <label className="text-sm font-bold">Phone<input required type="tel" className={input} value={f.phone} onChange={set("phone")} autoComplete="tel" /></label>
            <label className="text-sm font-bold">Email<input required type="email" className={input} value={f.email} onChange={set("email")} autoComplete="email" /></label>
          </div>
          <label className="mt-4 block text-sm font-bold">Service needed
            <select className={input} value={f.type} onChange={set("type")}>
              {services.map((s) => <option key={s.id}>{s.title}</option>)}
            </select>
          </label>
          <label className="mt-4 block text-sm font-bold">Project details
            <textarea rows={4} className={`${input} resize-none`} value={f.message} onChange={set("message")} placeholder="Location, scope, timeline…" />
          </label>
          <button className="mt-6 inline-flex items-center gap-2 bg-ink px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-teal">
            <Send size={16} /> Send enquiry
          </button>
          <div aria-live="polite" className="mt-4 text-sm text-ink/70">
            {sent ? (
              <p>Your email app should have opened with your enquiry ready to send. Nothing happened?{" "}
                <a href={sent.gmail} target="_blank" rel="noreferrer" className="font-bold text-teal-deep underline">Open it in Gmail</a>.</p>
            ) : (
              <p className="text-ink/55">Sending opens a ready-to-send email to {company.email} in your email app.</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="h-1.5 w-full bg-black"><div className="h-full w-[38%] rounded-br-2xl bg-teal" /></div>
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div className="flex items-center gap-4">
          <span className="bg-white p-2"><img src={asset("/logo-emblem.png")} alt="" className="h-12 w-auto" /></span>
          <div>
            <p className="font-display text-2xl font-bold uppercase leading-none">{company.name}</p>
            <p className="mono mt-1 text-[11px] tracking-[0.25em] text-aqua">{company.rc}</p>
          </div>
        </div>
        <p className="max-w-sm text-sm text-white/60">{company.address}.</p>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Projects />
        <Capacity />
        <Standards />
        <Offices />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
