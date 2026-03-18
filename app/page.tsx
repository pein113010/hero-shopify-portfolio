import Image from "next/image";

export default function PortfolioCaseStudyPage() {
  const metrics = [
    { label: "Focus", value: "Shopify PDPs + CRO" },
    { label: "Niche", value: "Supplements / wellness" },
    { label: "Project Type", value: "Self-initiated conversion case study" },
  ];

  const diagnosis = [
    {
      eyebrow: "01",
      title: "Above-the-fold clarity was the priority",
      problem:
        "Cold visitors need to understand the product promise, product type, and buying angle within seconds.",
      decision:
        "Built the hero around one main promise, one supporting mechanism line, three fast outcome bullets, and a clearer bundle selection flow.",
      why: "This reduces confusion and helps the visitor move from interest to buying intent faster.",
    },
    {
      eyebrow: "02",
      title: "Bundle structure needed visual decision support",
      problem:
        "When multiple purchase options are present, weak visual hierarchy creates hesitation and slows selection.",
      decision:
        "Made the 3-bottle option visually preferred, clarified savings, surfaced shipping incentives, and separated starter vs value options more clearly.",
      why: "This helps brands guide selection instead of making all options feel equally weighted.",
    },
    {
      eyebrow: "03",
      title: "Trust had to be layered, not isolated",
      problem:
        "Supplement visitors usually need repeated reassurance before purchase, especially from cold traffic.",
      decision:
        "Distributed trust across the page using ingredient explanation, testimonial framing, guarantee messaging, facility / testing reassurance, and FAQ objection handling.",
      why: "Trust works better when reinforced throughout the journey instead of left to one single section.",
    },
    {
      eyebrow: "04",
      title: "The page had to answer the next question",
      problem:
        "A strong PDP should not just look clean. It should remove uncertainty in the order customers naturally experience it.",
      decision:
        "Structured the page around this flow: promise → benefits → why it works → proof → usage → guarantee → objections.",
      why: "This supports purchase momentum and gives each section a clear conversion job.",
    },
  ];

  const originalIssues = [
    "Too many elements can compete in the hero if the hierarchy is not tightly controlled.",
    "Bundle options can lose persuasive force when the preferred choice is not visually obvious.",
    "Trust signals are weaker when they appear late or feel disconnected from the buying flow.",
    "Ingredient and benefit sections need to support belief, not just fill space.",
    "Guarantee and FAQ sections should actively reduce hesitation before checkout.",
    "Mobile experience needs to preserve scan speed, spacing, and CTA clarity without clutter.",
  ];

  const sectionStrategy = [
    {
      eyebrow: "01",
      title: "Hero Section",
      text: "Clarifies the offer, the desired outcome, and the next action above the fold while supporting bundle choice.",
    },
    {
      eyebrow: "02",
      title: "Benefits Section",
      text: "Translates the product into quick, outcome-oriented reasons to care, built for fast scanning.",
    },
    {
      eyebrow: "03",
      title: "Ingredients / Why It Works",
      text: "Gives the buyer a reason to believe by connecting ingredients to outcomes and everyday relevance.",
    },
    {
      eyebrow: "04",
      title: "Testimonials / Reviews",
      text: "Adds social proof after core understanding is established, helping reduce skepticism.",
    },
    {
      eyebrow: "05",
      title: "How To Use",
      text: "Makes the routine feel simple and easy to adopt so the product feels lower-friction to start.",
    },
    {
      eyebrow: "06",
      title: "Guarantee + FAQ",
      text: "Handles objections, lowers risk, and supports confidence near the final conversion stage.",
    },
  ];

  const designedToImprove = [
    "Faster understanding of the offer above the fold",
    "Clearer visibility for the preferred bundle option",
    "Stronger trust-building before add-to-cart",
    "Better support for cold traffic and paid traffic visitors",
    "Lower hesitation through clearer proof and guarantee framing",
    "A smoother path from initial interest to purchase intent",
  ];

  const process = [
    {
      step: "01",
      title: "Diagnose friction",
      text: "Review what is unclear, under-emphasized, visually competing, or missing from the buying journey.",
    },
    {
      step: "02",
      title: "Rebuild hierarchy",
      text: "Make the product promise, offer, trust signals, and preferred buying path easier to understand.",
    },
    {
      step: "03",
      title: "Layer trust and proof",
      text: "Support the product with ingredients, testimonials, reassurance, and objection handling in the right order.",
    },
    {
      step: "04",
      title: "Refine for mobile",
      text: "Preserve scan speed, spacing, readability, and CTA clarity across smaller screens.",
    },
  ];

  const services = [
    "Shopify product page design",
    "CRO-focused PDP structure",
    "Landing pages for single-product brands",
    "Bundle offer presentation",
    "Trust-building section design",
    "Section strategy and conversion flow",
  ];

  const gallery = [
    {
      title: "Hero Preview",
      subtitle: "Above-the-fold structure and bundle presentation",
      src: "/gallery/hero-preview.jpg",
      alt: "Hero preview of Shopify PDP",
    },
    {
      title: "Trust + Education",
      subtitle: "Benefits, ingredients, and product-belief sections",
      src: "/gallery/trust-education.jpg",
      alt: "Trust and education section of Shopify PDP",
    },
    {
      title: "Full Page Layout",
      subtitle: "Desktop case study screenshot",
      src: "/gallery/full-page.jpg",
      alt: "Full page Shopify product page layout",
    },
    {
      title: "Mobile Experience",
      subtitle: "Mobile-first layout and scan flow",
      src: "/gallery/mobile-preview.jpg",
      alt: "Mobile Shopify PDP preview",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#171717]">
      <section className="relative overflow-hidden border-b border-black/10">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,195,167,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(195,210,189,0.18),transparent_32%)]" />

  <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
    <div className="grid items-start gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
      <div className="max-w-[820px]">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-black/55 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-[#8f9b87]" />
          Available for Shopify PDP work
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-black/55 md:text-sm">
          Worgie Chaparadza · Shopify Product Page Designer
        </p>

        <h1 className="mt-5 max-w-[720px] text-[3.15rem] font-semibold leading-[0.92] tracking-[-0.055em] text-black md:text-[4.4rem] lg:text-[5.1rem]">
          Shopify product
          <br />
          pages built for
          <br />
          clarity, trust,
          <br />
          and purchase
          <br />
          intent.
        </h1>

        <p className="mt-6 max-w-[620px] text-[1.02rem] leading-8 text-black/68 md:text-[1.08rem]">
          This case study shows how I structure supplement PDPs to improve offer
          clarity, buying confidence, and conversion flow without relying on
          fake results or inflated performance claims.
        </p>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
          <div className="flex flex-wrap gap-3">
            <a
              href="#case-study"
              className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              View Case Study
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black/12 bg-white px-6 py-3 text-sm font-medium text-[#171717] transition hover:bg-black/5"
            >
              Request Demo Access
            </a>
          </div>

          <a
            href="#contact"
            className="text-sm font-medium text-black/62 underline decoration-black/20 underline-offset-4 transition hover:text-black"
          >
            Request PDP Review
          </a>
        </div>

        <p className="mt-4 max-w-[620px] text-sm leading-6 text-black/52">
          The live demo is protected to preserve the build. Access is available
          for brands and serious inquiries.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[1.4rem] border border-black/10 bg-white/92 p-5 shadow-sm backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/42">
              Focus
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-black/82">
              Shopify PDPs + CRO
            </p>
          </div>

          <div className="rounded-[1.4rem] border border-black/10 bg-white/92 p-5 shadow-sm backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/42">
              Best fit
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-black/82">
              Supplements / wellness brands
            </p>
          </div>

          <div className="rounded-[1.4rem] border border-black/10 bg-white/92 p-5 shadow-sm backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/42">
              What you can review
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-black/82">
              Strategy, design, and buying flow
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-6 top-10 hidden h-44 w-44 rounded-full bg-[#d8c2a5]/45 blur-3xl md:block" />
        <div className="absolute -bottom-8 right-6 hidden h-52 w-52 rounded-full bg-[#c8d4bf]/45 blur-3xl md:block" />

        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_30px_90px_rgba(0,0,0,0.08)]">
          <div className="bg-[linear-gradient(135deg,#eadfce_0%,#f8f5ee_45%,#e5ece1_100%)] p-3 md:p-4">
            <div className="border border-black/10 bg-white p-4 md:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-black/45">
                    Featured Case Study
                  </p>
                  <h2 className="mt-2 text-[2.1rem] font-semibold leading-[0.98] tracking-[-0.03em] text-black md:text-[2.65rem]">
                    Supplement PDP
                    <br />
                    Concept
                  </h2>
                </div>

                <div className="shrink-0 rounded-md border border-black/10 bg-white px-3 py-2 text-[11px] font-medium text-black/60">
                  Self-Initiated Project
                </div>
              </div>

              <div className="mt-5 overflow-hidden border border-black/10 bg-[#f8f5ef] p-1.5 md:p-2">
                <Image
                  src="/hero.jpg"
                  alt="Featured Shopify PDP hero screenshot"
                  width={1600}
                  height={1100}
                  className="h-auto w-full object-contain object-top"
                  priority
                />
              </div>

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="border border-black/10 bg-[#faf8f3] p-4">
                  <p className="text-sm text-black/55">Positioning</p>
                  <p className="mt-2 text-sm leading-6 text-black/76">
                    CRO-focused supplement PDP concept built to improve clarity,
                    trust, and bundle decision-making.
                  </p>
                </div>

                <div className="border border-black/10 bg-[#faf8f3] p-4">
                  <p className="text-sm text-black/55">What brands can review</p>
                  <p className="mt-2 text-sm leading-6 text-black/76">
                    Hierarchy, offer framing, trust placement, objection
                    handling, and mobile flow.
                  </p>
                </div>

                <div className="bg-[#1f1d19] p-4 text-white">
                  <p className="text-sm text-white/60">Core CRO focus</p>
                  <p className="mt-2 text-sm leading-6 text-white/90">
                    Clarity, proof, risk reversal, and conversion-led page
                    structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section
        id="case-study"
        className="border-y border-black/10 bg-white/70 backdrop-blur-sm scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/55">
                Case Study Positioning
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                A product page structured like a conversion system.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-black/72">
                This project was built to show how I think through a Shopify
                PDP: not as one long layout, but as a sequence of conversion
                decisions. Each section has a clear role in helping the customer
                understand, trust, and act.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-black/10 bg-[#fbfaf7] p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/38">
                What I was solving for
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-black/92">
                The page needed to feel more persuasive, not just more polished.
              </h3>
              <p className="mt-4 text-sm leading-6 text-black/72">
                For supplement product pages, better design alone is not enough.
                The page has to support purchase intent by making the offer
                easier to understand, the bundle easier to choose, and the trust
                signals harder to miss.
              </p>
            </div>
          </div>
        </div>
      </section>

<section className="border-y border-black/10 bg-[#f7f3ec]">
  <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
    <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
      <div className="max-w-[560px]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-black/48 md:text-sm">
          CRO Diagnosis
        </p>

        <h2 className="mt-5 text-[2.7rem] font-semibold leading-[0.96] tracking-[-0.045em] text-black md:text-[4rem]">
          The reasoning behind the page structure.
        </h2>

        <p className="mt-6 max-w-[520px] text-[1.02rem] leading-8 text-black/68 md:text-[1.06rem]">
          This case study breaks the page down into specific conversion
          decisions — not vague design language. Each choice was made to reduce
          friction, support trust, and guide the next step in the buying flow.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-[1.35rem] border border-black/10 bg-white/88 p-4 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/42">
              What this shows
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-black/80">
              Strategic CRO thinking, not just visual styling.
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-black/10 bg-white/88 p-4 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/42">
              Focus
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-black/80">
              Clarity, trust, offer visibility, and buying flow.
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-black/10 bg-white/88 p-4 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/42">
              Goal
            </p>
            <p className="mt-2 text-sm font-medium leading-6 text-black/80">
              Make the page easier to understand and easier to buy from.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/38">
            01
          </p>

          <h3 className="mt-3 text-[1.7rem] font-semibold leading-[1.02] tracking-[-0.03em] text-black">
            Above-the-fold clarity first
          </h3>

          <div className="mt-6 grid gap-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/42">
                Problem
              </p>
              <p className="mt-2 text-sm leading-7 text-black/72">
                Visitors need to grasp the product, offer, and angle within
                seconds.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/42">
                Decision
              </p>
              <p className="mt-2 text-sm leading-7 text-black/72">
                Built the hero around one promise, one mechanism line, quick
                benefit bullets, and a clearer bundle path.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/42">
                Why it matters
              </p>
              <p className="mt-2 text-sm leading-7 text-black/72">
                Better clarity reduces confusion and moves visitors toward
                buying intent faster.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/38">
            02
          </p>

          <h3 className="mt-3 text-[1.7rem] font-semibold leading-[1.02] tracking-[-0.03em] text-black">
            Bundle choice needed guidance
          </h3>

          <div className="mt-6 grid gap-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/42">
                Problem
              </p>
              <p className="mt-2 text-sm leading-7 text-black/72">
                When options feel equally weighted, shoppers hesitate and delay
                selection.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/42">
                Decision
              </p>
              <p className="mt-2 text-sm leading-7 text-black/72">
                Made the 3-bottle option visually preferred, clarified savings,
                and separated starter vs value options more clearly.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/42">
                Why it matters
              </p>
              <p className="mt-2 text-sm leading-7 text-black/72">
                Guided selection helps the page sell instead of leaving the user
                to figure it out alone.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/38">
            03
          </p>

          <h3 className="mt-3 text-[1.7rem] font-semibold leading-[1.02] tracking-[-0.03em] text-black">
            Trust had to be layered
          </h3>

          <div className="mt-6 grid gap-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/42">
                Problem
              </p>
              <p className="mt-2 text-sm leading-7 text-black/72">
                Supplement buyers usually need repeated reassurance before they
                feel ready to purchase.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/42">
                Decision
              </p>
              <p className="mt-2 text-sm leading-7 text-black/72">
                Spread trust across the page with ingredients, proof, guarantee
                messaging, testing reassurance, and FAQ support.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/42">
                Why it matters
              </p>
              <p className="mt-2 text-sm leading-7 text-black/72">
                Trust is stronger when reinforced throughout the journey, not
                isolated in one section.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/38">
            04
          </p>

          <h3 className="mt-3 text-[1.7rem] font-semibold leading-[1.02] tracking-[-0.03em] text-black">
            The page had to guide momentum
          </h3>

          <div className="mt-6 grid gap-5">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/42">
                Problem
              </p>
              <p className="mt-2 text-sm leading-7 text-black/72">
                A clean layout alone is not enough. The page must reduce
                uncertainty in the right order.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/42">
                Decision
              </p>
              <p className="mt-2 text-sm leading-7 text-black/72">
                Structured the flow around promise, benefits, why it works,
                proof, usage, guarantee, and objections.
              </p>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/42">
                Why it matters
              </p>
              <p className="mt-2 text-sm leading-7 text-black/72">
                Clear sequencing supports purchase momentum and gives each
                section a conversion job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="border-y border-black/10 bg-[#fcfaf6]">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/55">
                Audit Thinking
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                What I would look to improve on a real supplement PDP.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-black/72">
                This is the kind of friction I look for when reviewing a product
                page. These are not filler observations — they are the areas
                most likely to influence understanding, trust, and purchase
                momentum.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {originalIssues.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[1.5rem] border border-black/10 bg-white p-4 shadow-sm"
                >
                  <p className="text-sm leading-6 text-black/74">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/55">
                Section Strategy
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Each section has a defined conversion job.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-black/72">
                I do not add sections just to make a page longer. Every block is
                there to move the customer one step closer to understanding,
                trusting, and buying.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {sectionStrategy.map((section) => (
                <div
                  key={section.title}
                  className="rounded-[1.6rem] border border-black/10 bg-[#fbfaf7] p-4 shadow-sm"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/38">
                    {section.eyebrow}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-black/92">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/72">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#fcfaf6]">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-24">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/55">
                Gallery
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                A closer look at the product page design.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-black/68">
              These previews show how the structure translates visually across
              hero layout, trust-building sections, full-page flow, and mobile
              scanning.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {[gallery[0], gallery[1], gallery[2], gallery[3]].map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm"
              >
                <div className="border-b border-black/10 px-5 py-4 md:px-6 md:py-5">
                  <h3 className="text-xl font-semibold text-black/92">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-black/62">
                    {item.subtitle}
                  </p>
                </div>

                <div className="w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1800}
                    height={1400}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#1d1c19] text-white">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/45">
                Designed To Improve
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Honest positioning without fake performance claims.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
                This is a self-initiated concept project, so I do not use
                invented revenue numbers or fake conversion lifts. Instead, I
                explain the buying outcomes the structure was intentionally
                designed to support.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {designedToImprove.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-base leading-7 text-white/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/55">
                My Process
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                How I approach Shopify PDP work.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.6rem] border border-black/10 bg-white p-5 shadow-sm"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/38">
                    {item.step}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-black/92">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/72">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/55">
                What I Help With
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                The kind of PDP work brands can hire me for.
              </h2>
            </div>

            <div className="space-y-6 text-base leading-7 text-black/72">
              <p className="max-w-2xl text-base leading-7 text-black/70">
                I help product brands build Shopify product pages with clearer
                offer communication, stronger trust-building, smarter section
                order, and better purchase flow.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {services.map((service) => (
                  <div
                    key={service}
                    className="rounded-full border border-black/10 bg-white px-5 py-4 shadow-sm"
                  >
                    <p className="text-sm font-medium text-black/82">
                      {service}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pb-20 md:pb-28 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="overflow-hidden rounded-[2.2rem] border border-black/10 bg-[linear-gradient(135deg,#e8ddd0_0%,#f8f5ef_50%,#e4ebe0_100%)] p-[1px] shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
            <div className="rounded-[2.15rem] bg-white px-6 py-10 md:px-10 md:py-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/55">
                    Contact
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                    Need a Shopify PDP built to sell more clearly and convert
                    with more confidence?
                  </h2>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-black/70">
                    I work on Shopify product pages for product brands that need
                    stronger offer clarity, better trust placement, improved
                    bundle presentation, and cleaner purchase flow. The live
                    demo is private and available on request.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:worgieelguide@gmail.com?subject=Shopify%20PDP%20Inquiry"
                    className="rounded-full bg-[#171717] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Email Me
                  </a>
                  <a
                    href="https://wa.me/263786735629"
                    className="rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-medium text-[#171717] transition hover:bg-black/5"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 border-t border-black/8 pt-6 text-sm text-black/54 md:flex-row md:items-center md:justify-between">
                <p>
                  This case study is a self-initiated concept project created to
                  demonstrate Shopify PDP design and CRO thinking for supplement
                  brands.
                </p>
                <p className="font-medium text-black/75">
                  Want access to the protected demo or a review of your current
                  PDP? Message me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}