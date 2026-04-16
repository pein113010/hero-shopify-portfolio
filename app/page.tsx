import React from "react";
import Image from "next/image";
import Link from "next/link";

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type CardProps = React.HTMLAttributes<HTMLDivElement>;

function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)]",
        className || ""
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: CardProps) {
  return <div className={className} {...props} />;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "lg";
  children: React.ReactNode;
};

function Button({
  className,
  variant = "default",
  size = "default",
  asChild,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-slate-950 text-white hover:bg-slate-800",
    outline: "border border-slate-300 bg-white text-slate-950 hover:bg-slate-50",
    secondary: "bg-white text-slate-950 hover:bg-slate-100",
  };
  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    lg: "h-12 px-6 text-sm",
  };

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;
    return React.cloneElement(child, {
      className: cn(
        base,
        variants[variant],
        sizes[size],
        "rounded-none",
        className || "",
        child.props.className || ""
      ),
      ...props,
    });
  }

  return (
    <button
      className={cn(base, variants[variant], sizes[size], "rounded-none", className || "")}
      {...props}
    >
      {children}
    </button>
  );
}

function IconArrowRight() {
  return <span aria-hidden="true">→</span>;
}

function IconCheck() {
  return <span aria-hidden="true">✓</span>;
}

function IconBriefcase() {
  return <span aria-hidden="true">▣</span>;
}

function IconCode() {
  return <span aria-hidden="true">⌘</span>;
}

function IconLayout() {
  return <span aria-hidden="true">◫</span>;
}

function IconPhone() {
  return <span aria-hidden="true">▭</span>;
}

function IconShield() {
  return <span aria-hidden="true">⬒</span>;
}

function IconLayers() {
  return <span aria-hidden="true">☰</span>;
}

const services = [
  "Shopify product page builds and redesigns",
  "Landing pages built in Liquid",
  "Custom Dawn theme sections",
  "Mobile UX improvements",
  "Trust, FAQ, comparison, and offer sections",
  "CRO-focused layout and hierarchy improvements",
  "White-label Shopify support for agencies",
];

const workflow = [
  "Review the product, offer, and current page structure",
  "Improve hierarchy and conversion flow in Figma",
  "Build or implement in Shopify Liquid on Dawn",
  "Refine spacing, hierarchy, and mobile UX",
  "Deliver a cleaner, more conversion-focused page structure",
];

const projects = [
  {
    slug: "mushroom-supplement-pdp",
    title: "Mushroom Supplement PDP",
    subtitle: "Conversion-focused Shopify product page built in Liquid on Dawn.",
    type: "Self-initiated Shopify conversion concept",
    stack: ["Figma", "Shopify Liquid", "Dawn theme", "CSS", "JavaScript"],
    goal:
      "Create a clearer buying experience for a supplement product by improving above-the-fold clarity, bundle presentation, trust-building, and educational flow.",
    focus: [
      "Clearer value proposition above the fold",
      "Better bundle and offer visibility",
      "Trust-building through testimonials, guarantee, and FAQ",
      "Ingredient and benefit education",
      "Simple routine section to support product understanding",
      "Mobile-friendly section hierarchy",
    ],
    built: [
      "Product hero with stronger message hierarchy",
      "Bundle selection area with clearer offer framing",
      "Benefits section",
      "Ingredient / why-it-works section",
      "Testimonial section",
      "Routine / how-to-use section",
      "Guarantee section",
      "FAQ section",
    ],
    why:
      "This page was structured to reduce hesitation, improve product understanding, and support faster buying decisions on both desktop and mobile.",
    mainImage: "/gallery/mush-full.png",
    mobileImage: "/gallery/ml.png",
    sections: [
      {
        title: "Hero section",
        description:
          "Focused on clearer value proposition, stronger hierarchy, and faster product understanding.",
        image: "/gallery/q.jpg",
      },
      {
        title: "Bundle section",
        description:
          "Designed to improve offer clarity and make plan selection easier.",
        image: "/gallery/b.jpg",
      },
      {
        title: "Trust + proof section",
        description:
          "Uses testimonials and reassurance elements to reduce hesitation.",
        image: "/gallery/r.jpg",
      },
      {
        title: "FAQ / objection handling",
        description:
          "Structured to answer common buying questions and support conversion.",
        image: "/gallery/f.jpg",
      },
    ],
  },
  {
    slug: "daily-greens-pdp",
    title: "Daily Greens PDP",
    subtitle:
      "Educational Shopify PDP built in Liquid on Dawn for a supplement-style product.",
    type: "Self-initiated Shopify conversion concept",
    stack: ["Figma", "Shopify Liquid", "Dawn theme", "CSS", "JavaScript"],
    goal:
      "Create a product page that balances conversion with education by helping shoppers quickly understand benefits, ingredients, and product differentiation.",
    focus: [
      "Simpler product understanding",
      "Comparison-based decision support",
      "Ingredient and benefit education",
      "Cleaner mobile flow",
      "Review and FAQ integration",
      "Stronger section hierarchy throughout the page",
    ],
    built: [
      "Product hero section",
      "Comparison / differentiation section",
      "Benefits and ingredient sections",
      "Social proof / review section",
      "FAQ section",
      "Supporting trust and information blocks",
    ],
    why:
      "For products that need more explanation, structure matters. This concept was built to improve clarity, reduce confusion, and help the page do more of the selling work.",
    mainImage: "/gallery/g-full.jpg",
    mobileImage: "/gallery/g-full-m.jpg",
    sections: [
      {
        title: "Hero section",
        description:
          "Introduces the product with stronger message clarity and cleaner hierarchy.",
        image: "/gallery/g-h.jpg",
      },
      {
        title: "Comparison section",
        description:
          "Helps shoppers understand product differentiation faster.",
        image: "/gallery/gc.png",
      },
      {
        title: "Ingredients / education",
        description:
          "Supports trust and product understanding through clearer explanation.",
        image: "/gallery/gi.png",
      },
      {
        title: "FAQ section",
        description: "Handles hesitation and common buyer objections.",
        image: "/gallery/gf.png",
      },
    ],
  },
  {
    slug: "hair-growth-landing-page",
    title: "Hair Growth Landing Page",
    subtitle:
      "Shopify landing page built in Liquid to support a direct-response style offer flow.",
    type: "Self-initiated Shopify landing page concept",
    stack: ["Figma", "Shopify Liquid", "Dawn theme", "CSS", "JavaScript"],
    goal:
      "Build a focused landing page that presents the offer clearly, supports the buying angle with proof and education, and guides visitors through a stronger conversion journey.",
    focus: [
      "Ad-to-page continuity",
      "Clear offer and plan presentation",
      "Visual proof and testimonials",
      "Science / ingredient explanation",
      "Subscription value communication",
      "FAQ objection handling",
    ],
    built: [
      "Hero section with offer framing",
      "Plan / package selection area",
      "Testimonials and proof sections",
      "Science / ingredients section",
      "How-it-works section",
      "Blog / supporting content section",
      "Subscription value section",
      "FAQ section",
    ],
    why:
      "Landing pages need momentum. This concept was structured to keep the visitor moving through proof, explanation, and offer clarity without unnecessary friction.",
    mainImage: "/gallery/lpfull.jpg",
    mobileImage: "/gallery/lm.jpg",
    sections: [
      {
        title: "Hero section",
        description:
          "Frames the offer fast and gives the page a strong starting point.",
        image: "/gallery/lh.jpg",
      },
      {
        title: "Plan selection",
        description:
          "Makes pricing and package choice easier to understand.",
        image: "/gallery/lp.jpg",
      },
      {
        title: "Proof + testimonials",
        description:
          "Adds credibility and keeps the offer grounded in social proof.",
        image: "/gallery/lp.jpg",
      },
      {
        title: "FAQ section",
        description:
          "Reduces hesitation and helps move visitors closer to action.",
        image: "/gallery/lf.jpg",
      },
    ],
  },
];

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {text ? (
        <p className="text-base leading-7 text-slate-600 sm:text-lg">{text}</p>
      ) : null}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <section
      id={project.slug}
      className="scroll-mt-24 border-t border-slate-200/80 py-16 sm:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="inline-flex rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              Project {index + 1}
            </div>

            <div className="space-y-3">
              <h3 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                {project.title}
              </h3>
              <p className="text-lg text-slate-600">{project.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-slate-600">
              <span className="rounded-full bg-slate-100 px-3 py-1">{project.type}</span>
              {project.stack.map((item) => (
                <span key={item} className="rounded-full bg-slate-100 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <Card className="border-slate-200/80">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Goal
                  </h4>
                  <p className="mt-2 leading-7 text-slate-700">{project.goal}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    What I Focused On
                  </h4>
                  <ul className="mt-3 space-y-3">
                    {project.focus.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-slate-700">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center text-slate-900">
                          <IconCheck />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    What I Built
                  </h4>
                  <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                    {project.built.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Why It Matters
                  </h4>
                  <p className="mt-2 leading-7 text-slate-700">{project.why}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 lg:sticky lg:top-24">
          <Card className="overflow-hidden border-slate-200/80">
            <CardContent className="p-0">
              <div className="relative h-[32rem] overflow-y-auto overflow-x-hidden rounded-[18px] bg-gradient-to-b from-slate-200 via-slate-100 to-white p-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="sticky top-0 z-10 mb-3 rounded-xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                    Desktop layout
                  </p>
                </div>

                <Image
                  src={project.mainImage}
                  alt={`${project.title} desktop preview`}
                  width={1200}
                  height={3200}
                  className="block h-auto w-full rounded-xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.10)]"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-slate-200/80">
            <CardContent className="p-0">
              <div className="relative h-[32rem] overflow-y-auto overflow-x-hidden rounded-[18px] bg-gradient-to-b from-slate-200 via-slate-100 to-white p-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <div className="sticky top-0 z-10 mb-3 rounded-xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                    Mobile layout
                  </p>
                </div>

                <Image
                  src={project.mobileImage}
                  alt={`${project.title} mobile preview`}
                  width={1200}
                  height={3200}
                  className="block h-auto w-full rounded-xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.10)]"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {project.sections.map((section) => (
          <Card key={section.title} className="overflow-hidden border-slate-200/80">
            <CardContent className="p-0">
              <div className="p-3">
                <div className="relative overflow-visible rounded-[18px] bg-gradient-to-b from-slate-200 via-slate-100 to-white p-3 md:h-[32rem] md:overflow-y-auto md:overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  <div className="mb-3 rounded-xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md md:sticky md:top-0 md:z-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                      {section.title}
                    </p>
                  </div>

                  <Image
                    src={section.image}
                    alt={section.title}
                    width={1200}
                    height={3200}
                    className="block h-auto w-full rounded-xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.10)]"
                  />
                </div>
              </div>

              <div className="space-y-2 px-5 pb-5 pt-1">
                <p className="text-sm leading-6 text-slate-600">{section.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default function ShopifyAgencyPortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-2 text-sm text-slate-700 backdrop-blur">
                <IconBriefcase />
                Available for agency and white-label Shopify work
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Shopify Liquid Developer for CRO-Focused PDPs and Landing Pages
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  I build conversion-focused Shopify product pages, landing pages,
                  and custom sections in Liquid — with a strong focus on Dawn-based
                  themes, mobile UX, offer clarity, trust-building, and clean
                  implementation.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#projects">
                    View Projects
                    <span className="ml-2">
                      <IconArrowRight />
                    </span>
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline">
                  <Link href="#contact">Work With Me</Link>
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Shopify PDP builds and redesigns",
                  "Landing pages in Liquid",
                  "Custom Dawn sections",
                  "Mobile UX and conversion structure",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm text-slate-700 shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="overflow-hidden border-slate-200/80">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-slate-200 via-slate-100 to-white p-3">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
                      <Image
                        src="/gallery/mush-hero.png"
                        alt="Mushroom supplement PDP preview"
                        width={1200}
                        height={1500}
                        className="absolute left-0 top-0 h-auto w-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-slate-200/80">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-slate-200 via-slate-100 to-white p-3">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
                      <Image
                        src="/gallery/green-hero.jpg"
                        alt="Daily greens PDP preview"
                        width={1200}
                        height={1500}
                        className="absolute left-0 top-0 h-auto w-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-slate-200/80 sm:col-span-2">
                <CardContent className="p-0">
                  <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-b from-slate-200 via-slate-100 to-white p-3">
                    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.10)]">
                      <Image
                        src="/gallery/lp-heroo.png"
                        alt="Hair growth landing page preview"
                        width={1600}
                        height={900}
                        className="absolute left-0 top-0 h-auto w-full"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <SectionTitle
          eyebrow="What I Help With"
          title="Shopify execution support built for agencies and eCommerce brands"
          text="My strongest lane is conversion-focused Shopify work: PDPs, landing pages, custom sections, and Dawn-based implementation with attention to mobile UX and buying flow."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service} className="border-slate-200/80">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-xl bg-slate-100 p-3">
                  <IconLayers />
                </div>
                <p className="leading-7 text-slate-700">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-6 sm:px-8 sm:pb-8">
        <section
          id="projects"
          className="rounded-[32px] border border-slate-200/70 bg-white px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:px-8 sm:py-10"
        >
          <SectionTitle
            eyebrow="Featured Work"
            title="Three Shopify builds positioned as specialist proof"
            text="These projects are presented as conversion-focused Shopify work — not just visuals, but examples of how I think about hierarchy, trust, clarity, and implementation inside Dawn-based builds."
          />

          <div className="mt-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionTitle
              eyebrow="How I Work"
              title="A simple workflow that fits real Shopify delivery"
              text="I combine structured Figma thinking with practical Shopify implementation so the output is not just cleaner visually, but easier to use and closer to conversion goals."
            />

            <div className="grid gap-4">
              {workflow.map((step, index) => (
                <Card key={step} className="border-slate-200/80">
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="pt-1 leading-7 text-slate-700">{step}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-200/80">
            <CardContent className="p-8 sm:p-10">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-slate-100 p-3">
                    <IconCode />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-950">
                    Agency / White-Label Support
                  </h3>
                </div>

                <p className="leading-7 text-slate-600">
                  I’m best suited for agencies that need a Shopify-focused
                  execution partner who understands both implementation and
                  conversion-oriented layout decisions.
                </p>

                <ul className="space-y-3 text-slate-700">
                  {[
                    "White-label Shopify development",
                    "PDP and landing page implementation",
                    "Dawn theme section builds",
                    "Conversion-focused page refinements",
                    "Mobile UX cleanup and layout polishing",
                    "Ongoing Shopify support for agency delivery",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center text-slate-900">
                        <IconCheck />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-200/80">
            <CardContent className="p-8 sm:p-10">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-slate-100 p-3">
                    <IconLayout />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-950">About</h3>
                </div>

                <p className="leading-7 text-slate-600">
                  I’m a Shopify-focused developer specializing in Liquid-based
                  product pages, landing pages, and conversion-focused section
                  work. My approach combines Figma-led structure with practical
                  Shopify implementation, with strong attention to mobile UX,
                  hierarchy, clarity, and trust-building.
                </p>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 p-4 text-center">
                    <span className="mx-auto inline-flex h-5 w-5 items-center justify-center">
                      <IconPhone />
                    </span>
                    <p className="mt-2 text-sm text-slate-700">Mobile UX</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-4 text-center">
                    <span className="mx-auto inline-flex h-5 w-5 items-center justify-center">
                      <IconShield />
                    </span>
                    <p className="mt-2 text-sm text-slate-700">Trust Structure</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-4 text-center">
                    <span className="mx-auto inline-flex h-5 w-5 items-center justify-center">
                      <IconLayers />
                    </span>
                    <p className="mt-2 text-sm text-slate-700">Dawn Builds</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 pb-20 sm:px-8 sm:pb-24">
        <Card className="overflow-hidden border-slate-200/80 bg-white">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                      Contact
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      Need help with a Shopify PDP, landing page, or Dawn-based build?
                    </h2>

                    <p className="text-base leading-7 text-slate-300 sm:text-lg">
                      I help brands and agencies improve Shopify pages with cleaner structure,
                      better hierarchy, stronger mobile UX, and more conversion-focused design.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="https://wa.me/263786735629?text=Hi%20Worgan%2C%20I%20would%20like%20to%20discuss%20a%20Shopify%20project."
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white hover:text-slate-950"
                    >
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                          WhatsApp
                        </p>
                        <p className="text-lg font-semibold">Chat directly on WhatsApp</p>
                        <p className="text-sm leading-6 text-slate-300 hover:text-inherit">
                          Fastest way to reach me for quick project discussions and immediate questions.
                        </p>
                        <p className="pt-1 text-sm font-medium">+263 786 735 629</p>
                      </div>
                    </a>

                    <a
                      href="mailto:worgieelguide@gmail.com?subject=Shopify%20Project%20Inquiry"
                      className="block w-full rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white hover:text-slate-950"
                    >
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                          Email
                        </p>
                        <p className="text-lg font-semibold">Send a project brief</p>
                        <p className="text-sm leading-6 text-slate-300 hover:text-inherit">
                          Best for detailed inquiries, store links, scope, and project requirements.
                        </p>
                        <p className="pt-1 text-sm font-medium break-all">
                          worgieelguide@gmail.com
                        </p>
                      </div>
                    </a>

                    <a
                      href="tel:+263786735629"
                      className="block w-full rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white hover:text-slate-950"
                    >
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                          Call
                        </p>
                        <p className="text-lg font-semibold">Book a direct call</p>
                        <p className="text-sm leading-6 text-slate-300 hover:text-inherit">
                          Ideal for fast conversations if you already know what support you need.
                        </p>
                        <p className="pt-1 text-sm font-medium">+263 786 735 629</p>
                      </div>
                    </a>
                  </div>

                  <div className="border-t border-white/10 pt-6">
                    <p className="text-sm leading-6 text-slate-300">
                      Available for freelance, contract, and white-label Shopify work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Project inquiry
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                      Tell me about your store or project
                    </h3>
                    <p className="text-base leading-7 text-slate-600">
                      Use the form below, or contact me directly through WhatsApp, email, or call.
                    </p>
                  </div>

                  <form
                    action="https://formspree.io/f/yourformid"
                    method="POST"
                    className="space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-slate-700">
                        What do you need help with?
                      </label>
                      <input
                        id="service"
                        name="service"
                        type="text"
                        placeholder="Product page, landing page, CRO improvements, Dawn customization..."
                        className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="storeUrl" className="text-sm font-medium text-slate-700">
                        Store URL
                      </label>
                      <input
                        id="storeUrl"
                        name="storeUrl"
                        type="url"
                        placeholder="https://yourstore.com"
                        className="h-12 w-full rounded-xl border border-slate-300 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">
                        Project details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell me about your store, what needs improving, and what kind of support you need."
                        className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950"
                        required
                      />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <button
                        type="submit"
                        className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-slate-950 px-6 text-sm font-medium text-white transition-colors hover:bg-slate-800 sm:w-auto"
                      >
                        Send Inquiry
                      </button>

                      <a
                        href="https://wa.me/263786735629?text=Hi%20Worgan%2C%20I%20would%20like%20to%20discuss%20a%20Shopify%20project."
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-slate-300 px-6 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-50 sm:w-auto"
                      >
                        Message on WhatsApp
                      </a>
                    </div>
                  </form>

                  <div className="space-y-3 border-t border-slate-200 pt-6">
                    <div className="w-full rounded-2xl border border-slate-200 p-4 sm:p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Response
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        I aim to reply as quickly as possible.
                      </p>
                    </div>

                    <div className="w-full rounded-2xl border border-slate-200 p-4 sm:p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Support
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        Shopify PDPs, landing pages, Dawn customization, and CRO-focused improvements.
                      </p>
                    </div>

                    <div className="w-full rounded-2xl border border-slate-200 p-4 sm:p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        Work type
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        Freelance, contract, and white-label Shopify work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
