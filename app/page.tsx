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
    eyebrow: "Main Project",
    title: "Supplement PDP First-Screen + Buying Flow Build",
    category: "Shopify PDP / Subscription Offer",
    image: "/portfolio/ag1dem.png",
    rating: "8.5/10",
    description:
      "A Shopify product page concept focused on product media, subscription cards, CTA hierarchy, trust proof, gifts, guarantee, accordions, and buying confidence.",
    problem:
      "Most supplement PDPs make the buyer work too hard before they understand the product, the offer, and why it is safe to buy.",
    solution:
      "I structured the first screen around proof, product promise, offer selection, subscription value, CTA reassurance, and expandable support sections.",
    points: [
      "Review proof above the product title",
      "Clear product promise and habit-based positioning",
      "Subscription cards with savings and delivery logic",
      "Gift/value stack before the CTA",
      "Guarantee, shipping, and cancellation reassurance",
    ],
  },
  {
    eyebrow: "Best Transformation",
    title: "Mobile PDP First-Screen Rebuild",
    category: "Before / After Mobile PDP",
    image: "/portfolio/plury-before-after.png",
    rating: "9/10",
    description:
      "A mobile-first before/after rebuild showing how a basic product screen can become a stronger buying experience with trust, urgency, bundles, and clearer CTA structure.",
    problem:
      "The original mobile PDP had a simple product image, weak trust placement, basic quantity control, and little reason to choose a higher-value offer.",
    solution:
      "I redesigned the first screen to add stronger product presentation, proof, benefit chips, bundle selection, urgency, delivery timeline, and a more confident CTA.",
    points: [
      "Current vs updated comparison",
      "Trustpilot/social proof close to the title",
      "Benefit icons before the bundle area",
      "Bundle selector designed to increase AOV",
      "Delivery timeline below the CTA",
    ],
  },
  {
    eyebrow: "Buying Area Build",
    title: "Laundry Detergent PDP Offer + Buying Area Build",
    category: "Shopify PDP / Bundles / Add-ons",
    image: "/portfolio/frey-laundry-pdp.png",
    rating: "8/10 after cleanup",
    description:
      "A more complex product page example with scent selection, quantity cards, subscription vs one-time purchase, free shipping, guarantee, add-ons, testimonial, and benefit blocks.",
    problem:
      "The page has many useful conversion elements, but without clear hierarchy the buyer can feel overwhelmed by too many options at once.",
    solution:
      "I organized the buying flow from scent to quantity to plan to CTA, keeping trust and reassurance close to the decision point while making add-ons secondary.",
    points: [
      "Scent selector and selected scent description",
      "Quantity cards with best-seller/best-value emphasis",
      "Subscription card with savings and benefits",
      "Free shipping and guarantee near CTA",
      "Add-ons positioned after the primary buy action",
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
              Product pages that make the buying decision clearer.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              I redesign and build Shopify product page first screens — product
              media, trust proof, offer boxes, CTA sections, subscriptions,
              bundles, and mobile layouts — using custom Liquid/CSS.
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
                Request First-Screen Review
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["3", "Focused PDP examples"],
                ["1", "Conversion framework"],
                ["Liquid", "Shopify implementation"],
                ["Mobile", "First-screen structure"],
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
                    Featured Case Study
                  </p>
                  <h2 className="mt-1 text-xl font-black tracking-tight text-slate-950">
                    Supplement PDP Build
                  </h2>
                </div>
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">
                  Main Proof
                </div>
              </div>

             <div className="flex-1 max-h-[520px] overflow-hidden rounded-2xl border border-slate-200">
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
            trust, continue, or buy.
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
              Three examples that prove one focused offer.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              Each project is selected to show a different part of PDP
              conversion: full buying flow, mobile transformation, and complex
              offer structure.
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
                        {project.rating}
                      </span>
                    </div>

                    <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-400">
                      {project.category}
                    </p>
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
                          Solution
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="mb-4 text-sm font-black text-slate-950">
                        What this proves
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
        <SectionLabel>My PDP Framework</SectionLabel>

        <div className="max-w-4xl">
          <h2 className="text-3xl font-black tracking-[-0.04em] md:text-5xl">
            I structure the first screen around the buying decision.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Before designing or coding, I map the section so every element has a
            job: build trust, explain the promise, make the offer clear, reduce
            risk, and push the customer toward the next action.
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
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-16 md:px-8">
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
            Want me to review your product page first screen?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Send me a Shopify product page link and I’ll point out the first
            area I’d improve around trust, offer clarity, CTA, and mobile buying
            flow.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:worgieelguide@gmail.com?subject=Shopify PDP First-Screen Review"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Send Product Page Link <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-black text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-950"
            >
              View Examples Again
            </a>
          </div>

          <p className="mt-6 text-xs font-semibold text-slate-400">
            Demo Shopify PDP builds created to show Liquid/CSS implementation
            and conversion-focused product page structure.
          </p>
        </div>
      </section>
    </main>
  );
}