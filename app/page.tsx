import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  MousePointerClick,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const projects = [
  {
    eyebrow: "Main PDP Example",
    title: "Supplement PDP First-Screen + Buying Flow Build",
    category: "Shopify PDP / Hero / Subscription Offer",
    image: "/portfolio/ag1dem.png",
    description:
      "A Shopify product page first-screen build focused on product media, trust proof, subscription cards, CTA hierarchy, gifts, guarantee, and mobile buying confidence.",
    problem:
      "The first screen needed to make the product promise, trust signals, and buying options easier to understand before the customer scrolls.",
    solution:
      "I rebuilt the section around clear product positioning, proof near the CTA, subscription value, offer selection, and reassurance around shipping, guarantee, and cancellation.",
    points: [
      "Product promise made clearer above the buying area",
      "Review proof placed close to the product title",
      "Subscription cards structured with savings and delivery logic",
      "Gift/value stack positioned before the CTA",
      "Guarantee, shipping, and cancellation reassurance placed near the decision point",
    ],
  },
  {
    eyebrow: "Mobile Before / After",
    title: "Mobile PDP First-Screen Rebuild",
    category: "Before / After Mobile PDP",
    image: "/portfolio/plury-before-after.png",
    description:
      "A mobile-first before/after rebuild showing how a basic product screen can become a stronger buying experience with clearer trust, benefits, bundles, and CTA structure.",
    problem:
      "The original mobile PDP felt basic. It had weak trust placement, limited product persuasion, and little reason for the customer to choose a higher-value offer.",
    solution:
      "I redesigned the first screen to improve product presentation, proof, benefit chips, bundle selection, urgency, delivery reassurance, and CTA confidence.",
    points: [
      "Clear current vs improved mobile comparison",
      "Trustpilot/social proof placed close to the title",
      "Benefit icons added before the buying area",
      "Bundle selector designed to make higher-value options clearer",
      "Delivery timeline placed below the CTA for reassurance",
    ],
  },
  {
    eyebrow: "Offer Box Example",
    title: "Laundry Detergent PDP Offer + Buying Area Build",
    category: "Shopify PDP / Bundles / Add-ons",
    image: "/portfolio/frey-laundry-pdp.png",
    description:
      "A more complex Shopify product page example with scent selection, quantity cards, subscription vs one-time purchase, shipping reassurance, guarantee, add-ons, and benefit blocks.",
    problem:
      "The buying area had many useful conversion elements, but too many options at once can overwhelm customers when the hierarchy is not clear.",
    solution:
      "I organized the flow from scent to quantity to purchase plan to CTA, keeping trust and reassurance close to the decision while making add-ons secondary.",
    points: [
      "Scent selector with selected scent description",
      "Quantity cards with best-seller and best-value emphasis",
      "Subscription card with savings and benefit logic",
      "Free shipping and guarantee placed near the CTA",
      "Add-ons positioned after the primary buying decision",
    ],
  },
];

const skills = [
  "Shopify Liquid",
  "Custom CSS",
  "JavaScript",
  "Dawn / OS 2.0 sections",
  "Mobile-first PDP layouts",
  "Offer box structure",
  "Bundle selectors",
  "Subscription UI",
  "Trust and guarantee sections",
  "Figma-to-Shopify implementation",
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800">
      <Sparkles className="h-4 w-4" />
      {children}
    </div>
  );
}

export default function ShopifyPdpPortfolioPage() {
  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-amber-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-stretch gap-10 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              Shopify PDP First-Screen Specialist
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-[-0.05em] text-slate-950 md:text-6xl lg:text-7xl">
              Shopify product pages that make buying feel easier.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              I redesign and build the first screen of Shopify product pages —
              product media, trust proof, offer boxes, CTA sections,
              subscriptions, bundles, and mobile layouts — using custom
              Liquid/CSS.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                View PDP Examples <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-950"
              >
                Send Me Your Product Page
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["3", "PDP examples"],
                ["1", "Focused service"],
                ["Liquid", "Shopify build"],
                ["Mobile", "First-screen layout"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="text-xl font-black text-slate-950">
                    {value}
                  </div>
                  <div className="mt-1 text-xs font-semibold leading-5 text-slate-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex rounded-[2rem] border border-slate-200 bg-slate-50 p-3 shadow-2xl">
            <div className="flex min-h-full flex-1 flex-col rounded-[1.5rem] bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Featured PDP Example
                  </p>
                  <h2 className="mt-1 text-xl font-black tracking-tight text-slate-950">
                    Supplement First-Screen Build
                  </h2>
                </div>
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">
                  Main Proof
                </div>
              </div>

              <div className="max-h-[520px] flex-1 overflow-hidden rounded-2xl border border-slate-200">
                <Image
                  src="/portfolio/ag1dem.png"
                  alt="Supplement PDP First-Screen Build"
                  width={1200}
                  height={1600}
                  priority
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs font-bold text-slate-600">
                <div className="rounded-xl bg-slate-50 p-3">Trust Proof</div>
                <div className="rounded-xl bg-slate-50 p-3">Offer Cards</div>
                <div className="rounded-xl bg-slate-50 p-3">CTA Flow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-950 px-5 py-5 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-bold text-slate-300">
            Focused on the product page area where customers decide whether to
            trust the product, understand the offer, and click add to cart.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge>Product media</Badge>
            <Badge>Trust proof</Badge>
            <Badge>Offer box</Badge>
            <Badge>CTA</Badge>
            <Badge>Mobile layout</Badge>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionLabel>What I Fix</SectionLabel>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              icon: Eye,
              title: "Unclear first impression",
              text: "Customers should understand the product, result, and reason to keep reading within seconds.",
            },
            {
              icon: ShieldCheck,
              title: "Trust too low on page",
              text: "Reviews, guarantee, shipping, proof, and safety should support the CTA, not hide below it.",
            },
            {
              icon: ShoppingCart,
              title: "Weak buying area",
              text: "Variants, bundles, subscriptions, savings, and gifts need a clean hierarchy.",
            },
            {
              icon: MousePointerClick,
              title: "Mobile friction",
              text: "Spacing, CTA visibility, hierarchy, and offer clarity matter most on mobile PDPs.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-black tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="projects"
        className="border-y border-slate-200 bg-white px-5 py-16 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Selected Portfolio Work</SectionLabel>

          <div className="mb-10">
            <h2 className="max-w-3xl text-3xl font-black tracking-[-0.04em] md:text-5xl">
              Three examples showing how I improve Shopify product page first
              screens.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              These examples show the core parts of a strong Shopify PDP first
              screen: product media, trust proof, offer structure, CTA clarity,
              bundles, subscriptions, and mobile buying flow.
            </p>
          </div>

          <div className="space-y-10">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7f8f5] shadow-sm"
              >
                <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="bg-white p-4 md:p-6">
                    <div className="max-h-[680px] overflow-y-auto rounded-[1.5rem] border border-slate-200 bg-slate-100 shadow-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1200}
                        height={1600}
                        className="h-auto w-full object-contain object-top"
                      />
                    </div>
                  </div>

                  <div className="p-6 md:p-10">
                    <div className="mb-5 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-black text-white">
                        0{index + 1}
                      </span>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">
                        {project.eyebrow}
                      </span>
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-slate-600 shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-slate-950 md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-red-500">
                          Problem
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {project.problem}
                        </p>
                      </div>
                      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-600">
                          Fix
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="mb-4 text-sm font-black text-slate-950">
                        What this shows
                      </p>
                      <div className="grid gap-3">
                        {project.points.map((point) => (
                          <div
                            key={point}
                            className="flex gap-3 text-sm font-semibold text-slate-700"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <SectionLabel>Starter Offer</SectionLabel>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div>
            <h2 className="max-w-3xl text-3xl font-black tracking-[-0.04em] md:text-5xl">
              Start with the section where buyers make the first decision.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Instead of selling a full-store redesign first, I focus on one
              high-impact area: the top of the product page. This makes the
              project easier to start, easier to review, and easier to judge.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">
                Free First-Screen Suggestion
              </div>
              <h3 className="text-xl font-black text-slate-950">
                I’ll point out the first section I’d improve.
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Send me your product page link. I’ll identify one first-screen
                issue around clarity, trust, offer structure, CTA, or mobile
                buying flow.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-950 bg-slate-950 p-6 text-white shadow-xl">
              <div className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-black text-white">
                Paid Build
              </div>
              <h3 className="text-xl font-black">
                Shopify PDP First-Screen Rebuild
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                I redesign and build the first screen of your Shopify product
                page in custom Liquid/CSS, including product media, trust proof,
                offer box, CTA, reassurance, and mobile layout.
              </p>
              <p className="mt-5 text-sm font-black text-emerald-300">
                Small section rebuilds available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>My PDP Framework</SectionLabel>

          <div className="max-w-4xl">
            <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">
              I structure the first screen around the buying decision.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Before designing or coding, I map the section so every element has
              a job: build trust, explain the promise, make the offer clear,
              reduce risk, and guide the customer toward the next action.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
            <Image
              src="/portfolio/pdp-framework.png"
              alt="Shopify PDP First-Screen Framework"
              width={1600}
              height={1000}
              className="h-auto w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-5 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Built With</SectionLabel>

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">
                Design thinking + Shopify implementation.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                These examples are not just mockups. They are built around
                Shopify section logic: editable content, mobile spacing, custom
                Liquid, CSS, JavaScript where needed, and clean buying flows.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-2xl border border-slate-200 bg-[#f7f8f5] px-4 py-3 text-sm font-bold text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl md:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white">
                <Zap className="h-4 w-4 text-amber-300" />
                Focused Shopify PDP Offer
              </div>

              <h2 className="max-w-3xl text-3xl font-black tracking-[-0.04em] md:text-5xl">
                I rebuild the product page first screen first.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Instead of starting with a full-store redesign, I focus on the
                section where buyers decide whether to trust the product,
                understand the offer, and click add to cart.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-black">
                First-Screen PDP Rebuild includes:
              </h3>
              <div className="mt-5 grid gap-3">
                {[
                  "Product media layout",
                  "Trust proof placement",
                  "Product promise and benefit bullets",
                  "Offer / bundle / subscription box",
                  "CTA, guarantee, shipping reassurance",
                  "Mobile responsive Liquid/CSS build",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold text-slate-200"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-16 md:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm md:p-12">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
            <TrendingUp className="h-6 w-6" />
          </div>

          <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">
            Send me your product page.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Send me your Shopify product page and I’ll point out the first
            section I would improve — around trust, offer clarity, CTA, and
            mobile buying flow.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:worgieelguide@gmail.com?subject=Shopify%20PDP%20First-Screen%20Suggestion&body=Hi%20Worgan%2C%0D%0A%0D%0AHere%20is%20my%20Shopify%20product%20page%20link%3A%0D%0A%0D%0A"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Send My Product Page <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-950"
            >
              View Examples Again
            </a>
          </div>

          <p className="mt-6 text-xs font-semibold text-slate-400">
            Demo Shopify PDP builds created to show my Liquid/CSS
            implementation, section structure, and conversion-focused product
            page thinking.
          </p>
        </div>
      </section>
    </main>
  );
}