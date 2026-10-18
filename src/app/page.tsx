
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import {
  BellRing,
  Brain,
  CalendarDays,
  CircleAlert,
  ClipboardCheck,
  Link2,
  ListChecks,
  Menu,
  MessagesSquare,
  MoonStar,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navigationLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const problemCards = [
  { title: "Scattered calendars", Icon: CalendarDays },
  { title: "Dropped balls", Icon: CircleAlert },
  { title: "Communication gaps", Icon: MessagesSquare },
];

const features = [
  {
    title: "Morning Brief",
    image: "/images/demo/dashboard.png",
    description:
      "A personalized daily summary of calendar events, due tasks, scheduling conflicts, and proactive suggestions.",
    Icon: Sparkles,
  },
  {
    title: "Smart Calendar",
    image: "/images/demo/calendar.png",
    description:
      "A shared, color-coded view of family events, kids' activities, and nanny shifts.",
    Icon: CalendarDays,
  },
  {
    title: "Task Management",
    image: "/images/demo/tasks.png",
    description:
      "Family task lists with assignments, priorities, tracking, and examples of tasks created from school emails.",
    Icon: ListChecks,
  },
  {
    title: "Elle AI Assistant",
    image: "/images/demo/elle.png",
    description:
      "An on-demand assistant that understands the family schedule, answers family-planning questions, helps with schedule changes, and supports voice input.",
    Icon: UsersRound,
  },
  {
    title: "Caregiver Hub",
    image: "/images/demo/caregivers.png",
    description:
      "Caregiver schedules, important care notes such as allergies and routines, and shift confirmations or change requests.",
    Icon: ClipboardCheck,
  },
  {
    title: "Evening Recap",
    image: "/images/demo/recap.png",
    description:
      "An end-of-day summary of completed tasks, pending items, and a preview of tomorrow.",
    Icon: MoonStar,
  },
];

const howItWorksSteps = [
  { label: "Connect your calendars and emails", Icon: Link2 },
  { label: "Elle learns your family's rhythm", Icon: Brain },
  { label: "Get daily briefs, reminders, and peace of mind", Icon: BellRing },
];

const faqItems = [
  {
    question: "What is Momentality?",
    answer:
      "Momentality brings family calendars, tasks, caregiver schedules, and an AI assistant together in one place.",
  },
  {
    question: "How does the AI Morning Brief work?",
    answer:
      "Each morning, it summarizes calendar events, due tasks, scheduling conflicts, and suggestions for the day.",
  },
  {
    question: "Can I share with my nanny?",
    answer:
      "Caregivers can see schedules and care notes and confirm or request shift changes. The Family plan includes 2 caregivers; Family Pro includes unlimited caregivers.",
  },
  {
    question: "Is my data secure?",
    answer:
      "The assignment describes this MVP as frontend-only, using hardcoded mock data with no backend, database, or APIs. It does not specify production data security.",
  },
  {
    question: "What calendars sync?",
    answer: "The calendars mentioned in the assignment are Google Calendar and Outlook.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "The assignment lists a 14-day free trial but does not specify cancellation terms.",
  },
];

function RevealSection(props: HTMLMotionProps<"section">) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (shouldReduceMotion) {
      setIsVisible(true);
      return;
    }

    let observer: IntersectionObserver | undefined;
    const revealIfVisible = () => {
      const bounds = section.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        setIsVisible(true);
        observer?.unobserve(section);
        window.removeEventListener("scroll", revealIfVisible);
        window.removeEventListener("resize", revealIfVisible);
      }
    };

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(revealIfVisible, { threshold: 0 });
      observer.observe(section);
    }
    window.addEventListener("scroll", revealIfVisible, { passive: true });
    window.addEventListener("resize", revealIfVisible);
    revealIfVisible();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", revealIfVisible);
      window.removeEventListener("resize", revealIfVisible);
    };
  }, [shouldReduceMotion]);

  return (
    <motion.section
      ref={sectionRef}
      initial={false}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      }}
      {...props}
    />
  );
}

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const handleNavigationClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    const hash = event.currentTarget.hash;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;

    event.preventDefault();
    window.history.pushState(null, "", hash);
    const scrollMarginTop = parseFloat(
      window.getComputedStyle(target).scrollMarginTop,
    );
    const targetY =
      window.scrollY + target.getBoundingClientRect().top - scrollMarginTop;
    if (shouldReduceMotion) {
      window.scrollTo({ top: targetY, behavior: "instant" });
      return;
    }

    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 600;
    let startTime: number | undefined;
    const animateScroll = (time: number) => {
      if (startTime === undefined) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      window.scrollTo({
        top: startY + distance * easedProgress,
        behavior: "instant",
      });
      if (progress < 1) window.requestAnimationFrame(animateScroll);
    };
    window.requestAnimationFrame(animateScroll);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1E293B]">
      <header className="sticky top-0 z-50 border-b border-[#1E293B]/10 bg-[#FAFAF9]">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8"
        >
          <a
            href="/"
            className="shrink-0 text-xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2"
          >
            Momentality
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavigationClick}
                className="text-sm font-medium text-[#1E293B] transition-colors hover:text-[#0D9488] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#pricing"
            className="hidden min-h-11 items-center justify-center rounded-full bg-[#0D9488] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#0D9488]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 md:inline-flex"
          >
            Start Free Trial
          </a>

          <ThemeToggle />

          <details className="group relative md:hidden">
            <summary
              aria-label="Toggle navigation menu"
              className="flex size-11 cursor-pointer list-none items-center justify-center rounded-md text-[#1E293B] hover:bg-[#1E293B]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2 [&::-webkit-details-marker]:hidden"
            >
              <Menu aria-hidden="true" className="size-6" />
            </summary>
            <div className="absolute right-0 top-full mt-2 max-h-[calc(100dvh-5rem)] w-64 max-w-[calc(100vw-2.5rem)] overflow-y-auto rounded-xl border border-[#1E293B]/10 bg-white p-3 shadow-lg">
              <div className="flex flex-col">
                {navigationLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleNavigationClick}
                    className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-[#FAFAF9] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488]"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#pricing"
                  className="mt-2 flex min-h-11 items-center justify-center rounded-full bg-[#0D9488] px-4 text-sm font-semibold text-white hover:bg-[#0D9488]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </details>
        </nav>
      </header>

      <main>
        <RevealSection
          aria-labelledby="hero-heading"
          className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24"
        >
          <div>
            <h1
              id="hero-heading"
              className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Your Family&apos;s AI-Powered Command Center
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#1E293B]/80 sm:text-lg sm:leading-8">
              Reduce family chaos with AI-powered support.
            </p>
            <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row">
              <a
                href="/demo"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0D9488] px-6 text-base font-semibold text-white transition-colors hover:bg-[#0D9488]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2"
              >
                Try the Demo
              </a>
              <a
                href="#pricing"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#FB923C] px-6 text-base font-semibold text-[#1E293B] transition-colors hover:bg-[#FB923C]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E293B] focus-visible:ring-offset-2"
              >
                Start Free Trial
              </a>
            </div>
          </div>

          <Image
            src="/images/demo/dashboard.png"
            alt="Momentality family dashboard"
            width={1440}
            height={1100}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </RevealSection>

        <RevealSection
          aria-label="Social proof"
          className="bg-white px-5 py-12 sm:px-8"
        >
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-5">
              <p className="text-base font-semibold sm:text-lg">
                Trusted by 2,000+ working families
              </p>
              <div
                role="img"
                aria-label="Five-star rating"
                className="flex items-center gap-1 text-[#FB923C]"
              >
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    aria-hidden="true"
                    className="size-5 fill-current"
                  />
                ))}
              </div>
            </div>

            <div
              role="group"
              aria-label="Publication logo placeholders"
              className="flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              {["TechCrunch", "Forbes", "Parents Magazine"].map((name) => (
                <span
                  key={name}
                  className="flex min-h-12 min-w-36 items-center justify-center rounded-md border border-dashed border-[#1E293B]/25 bg-[#FAFAF9] px-4 py-2 text-center text-sm font-semibold text-[#1E293B]/50 sm:text-base"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection
          aria-labelledby="problem-heading"
          className="bg-[#FAFAF9] px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="problem-heading"
              className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            >
              Working parents shouldn&apos;t need 7 apps to run their family
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              {problemCards.map(({ title, Icon }, index) => (
                <article
                  key={title}
                  className="flex min-h-44 flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 text-center shadow-sm"
                >
                  <Icon
                    aria-hidden="true"
                    className={`size-8 ${
                      index === 1
                        ? "text-[#FB923C]"
                        : index === 2
                          ? "text-[#1E293B]"
                          : "text-[#0D9488]"
                    }`}
                  />
                  <h3 className="text-lg font-semibold">{title}</h3>
                </article>
              ))}
            </div>
          </div>
        </RevealSection>

        <RevealSection
          id="features"
          aria-label="Feature Showcase"
          className="scroll-mt-20 bg-white px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-7xl space-y-10 sm:space-y-14">
            {features.map(({ title, image, description, Icon }, index) => {
              const textOrder = index % 2 === 0 ? "md:order-1" : "md:order-2";
              const placeholderOrder =
                index % 2 === 0 ? "md:order-2" : "md:order-1";

              return (
                <article
                  key={title}
                  className="grid items-center gap-6 rounded-2xl bg-[#FAFAF9] p-5 sm:gap-10 sm:p-8 md:grid-cols-2 md:p-10"
                >
                  <div className={textOrder}>
                    <Icon
                      aria-hidden="true"
                      className="size-8 text-[#0D9488]"
                    />
                    <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                      {title}
                    </h2>
                    <p className="mt-3 text-base leading-7 text-[#1E293B]/80">
                      {description}
                    </p>
                  </div>

                  <Image
                    src={image}
                    alt={`${title} screen`}
                    width={1440}
                    height={1100}
                    sizes="(max-width: 768px) calc(100vw - 3rem), 40vw"
                    className={`aspect-[4/3] w-full rounded-xl object-cover ${placeholderOrder}`}
                  />
                </article>
              );
            })}
          </div>
        </RevealSection>

        <RevealSection
          id="how-it-works"
          aria-labelledby="how-it-works-heading"
          className="scroll-mt-20 bg-[#FAFAF9] px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="how-it-works-heading"
              className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              How It Works
            </h2>

            <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              {howItWorksSteps.map(({ label, Icon }, index) => (
                <li
                  key={label}
                  className="flex min-h-52 flex-col items-center justify-center gap-4 rounded-2xl bg-white p-6 text-center shadow-sm"
                >
                  <span className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0D9488]/10 px-4 text-[#0D9488]">
                    <span aria-hidden="true" className="text-base font-bold">
                      {index + 1}
                    </span>
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-[#1E293B]">
                    {label}
                  </h3>
                </li>
              ))}
            </ol>
          </div>
        </RevealSection>

        <RevealSection
          id="pricing"
          aria-labelledby="pricing-heading"
          className="scroll-mt-20 bg-[#FAFAF9] px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="pricing-heading"
              className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Pricing
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
              <article className="flex flex-col rounded-2xl border border-[#1E293B]/15 bg-white p-6 sm:p-8">
                <h3 className="text-xl font-bold">Free</h3>
                <p className="mt-3 text-3xl font-bold">
                  $0<span className="text-base font-medium text-[#1E293B]/70">/mo</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-[#1E293B]/80">
                  <li>1 calendar</li>
                  <li>Basic tasks</li>
                  <li>Limited morning brief</li>
                </ul>
                <a
                  href="#pricing"
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-[#0D9488] px-5 text-center text-sm font-semibold text-[#0D9488] hover:bg-[#0D9488]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2"
                >
                  Start 14-Day Free Trial
                </a>
              </article>

              <article className="relative flex flex-col rounded-2xl border-2 border-[#0D9488] bg-white p-6 sm:p-8">
                <span className="absolute right-4 top-4 rounded-full bg-[#FB923C] px-3 py-1 text-xs font-bold text-[#1E293B] sm:right-6 sm:top-6">
                  Most Popular
                </span>
                <h3 className="pr-28 text-xl font-bold">Family</h3>
                <p className="mt-3 text-3xl font-bold">
                  $12<span className="text-base font-medium text-[#1E293B]/70">/mo</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-[#1E293B]/80">
                  <li>Unlimited calendars</li>
                  <li>Full AI</li>
                  <li>2 caregivers</li>
                  <li>Email-to-task</li>
                </ul>
                <a
                  href="#pricing"
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#0D9488] px-5 text-center text-sm font-semibold text-white hover:bg-[#0D9488]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2"
                >
                  Start 14-Day Free Trial
                </a>
              </article>

              <article className="flex flex-col rounded-2xl border border-[#1E293B]/15 bg-white p-6 sm:p-8">
                <h3 className="text-xl font-bold">Family Pro</h3>
                <p className="mt-3 text-3xl font-bold">
                  $24<span className="text-base font-medium text-[#1E293B]/70">/mo</span>
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-[#1E293B]/80">
                  <li>Everything in Family</li>
                  <li>Unlimited caregivers</li>
                  <li>Priority support</li>
                  <li>Conflict detection</li>
                </ul>
                <a
                  href="#pricing"
                  className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full border border-[#0D9488] px-5 text-center text-sm font-semibold text-[#0D9488] hover:bg-[#0D9488]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D9488] focus-visible:ring-offset-2"
                >
                  Start 14-Day Free Trial
                </a>
              </article>
            </div>
          </div>
        </RevealSection>

        <RevealSection
          id="testimonials"
          aria-labelledby="testimonials-heading"
          className="scroll-mt-20 bg-white px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="testimonials-heading"
              className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              What Families Are Saying
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="flex flex-col rounded-2xl border border-[#1E293B]/10 bg-[#FAFAF9] p-6 shadow-sm sm:p-8">
                <blockquote className="flex-1 text-base leading-7 text-[#1E293B]/80">
                  “The morning brief helps me start the day feeling prepared
                  instead of already behind. Our whole family is on the same
                  page.”
                </blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <span
                    role="img"
                    aria-label="Avatar placeholder for Maya Chen"
                    className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#0D9488]/50 bg-[#0D9488]/10 text-sm font-bold text-[#0D9488]"
                  >
                    MC
                  </span>
                  <div>
                    <p className="font-semibold">Maya Chen</p>
                    <p className="text-sm text-[#1E293B]/70">Working mother</p>
                  </div>
                </footer>
              </article>

              <article className="flex flex-col rounded-2xl border border-[#1E293B]/10 bg-[#FAFAF9] p-6 shadow-sm sm:p-8">
                <blockquote className="flex-1 text-base leading-7 text-[#1E293B]/80">
                  “We used to miss details between school emails and calendar
                  invites. Now I can check one place and know what needs doing.”
                </blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <span
                    role="img"
                    aria-label="Avatar placeholder for Jordan Ellis"
                    className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#FB923C]/60 bg-[#FB923C]/15 text-sm font-bold text-[#1E293B]"
                  >
                    JE
                  </span>
                  <div>
                    <p className="font-semibold">Jordan Ellis</p>
                    <p className="text-sm text-[#1E293B]/70">Father</p>
                  </div>
                </footer>
              </article>

              <article className="flex flex-col rounded-2xl border border-[#1E293B]/10 bg-[#FAFAF9] p-6 shadow-sm sm:p-8">
                <blockquote className="flex-1 text-base leading-7 text-[#1E293B]/80">
                  “The care notes and shared schedule make every handoff
                  smoother. I always know the children’s routines and plans.”
                </blockquote>
                <footer className="mt-6 flex items-center gap-3">
                  <span
                    role="img"
                    aria-label="Avatar placeholder for Sofia Rivera"
                    className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#0D9488]/50 bg-[#0D9488]/10 text-sm font-bold text-[#0D9488]"
                  >
                    SR
                  </span>
                  <div>
                    <p className="font-semibold">Sofia Rivera</p>
                    <p className="text-sm text-[#1E293B]/70">Nanny</p>
                  </div>
                </footer>
              </article>
            </div>
          </div>
        </RevealSection>

        <RevealSection
          id="faq"
          aria-labelledby="faq-heading"
          className="scroll-mt-20 bg-[#FAFAF9] px-5 py-16 sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-3xl">
            <h2
              id="faq-heading"
              className="text-center text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Frequently Asked Questions
            </h2>

            <div className="mt-10 space-y-3">
              {faqItems.map(({ question, answer }, index) => {
                const isExpanded = openFaqIndex === index;
                const answerId = `faq-answer-${index}`;

                return (
                  <article
                    key={question}
                    className="overflow-hidden rounded-xl border border-[#1E293B]/10 bg-white"
                  >
                    <h3>
                      <button
                        id={`faq-question-${index}`}
                        type="button"
                        aria-expanded={isExpanded}
                        aria-controls={answerId}
                        onClick={() =>
                          setOpenFaqIndex(isExpanded ? null : index)
                        }
                        className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[#1E293B] transition-colors hover:text-[#0D9488] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0D9488] sm:px-6"
                      >
                        <span>{question}</span>
                        <span
                          aria-hidden="true"
                          className="shrink-0 text-xl text-[#0D9488]"
                        >
                          {isExpanded ? "−" : "+"}
                        </span>
                      </button>
                    </h3>
                    <div
                      id={answerId}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      hidden={!isExpanded}
                      className="px-5 pb-5 text-sm leading-6 text-[#1E293B]/80 sm:px-6"
                    >
                      {answer}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </RevealSection>

        <RevealSection
          aria-labelledby="final-cta-heading"
          className="bg-[#1E293B] px-5 py-16 text-white sm:px-8 sm:py-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="final-cta-heading"
              className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
            >
              Ready to bring calm to your family&apos;s chaos?
            </h2>

            <div className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <label htmlFor="trial-email" className="sr-only">
                Email address
              </label>
              <input
                id="trial-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                className="min-h-12 min-w-0 flex-1 rounded-full border border-white/30 bg-white px-5 text-base text-[#1E293B] placeholder:text-[#1E293B]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E293B]"
              />
              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#FB923C] px-6 text-base font-semibold text-[#1E293B] transition-colors hover:bg-[#FB923C]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E293B]"
              >
                Start Free Trial
              </button>
            </div>

            <p className="mt-4 text-sm text-white/90">
              No credit card required. 14-day free trial.
            </p>
          </div>
        </RevealSection>

        <footer className="bg-[#1E293B] px-5 pb-8 pt-12 text-white sm:px-8 sm:pt-16">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-8 border-b border-white/15 pb-10 sm:grid-cols-4 lg:gap-12">
              <div className="col-span-2 sm:col-span-1">
                <a
                  href="/"
                  className="text-xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E293B]"
                >
                  Momentality
                </a>
              </div>

              <nav aria-label="Product links">
                <h2 className="text-sm font-semibold text-white">Product</h2>
                <ul className="mt-4 space-y-3 text-sm text-white/90">
                  <li>
                    <a
                      className="transition-colors hover:text-white"
                      href="#features"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-white"
                      href="#pricing"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      className="transition-colors hover:text-white"
                      href="#faq"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </nav>

              <div>
                <h2 className="text-sm font-semibold text-white">Company</h2>
                <ul className="mt-4 space-y-3 text-sm text-white/90">
                  <li>
                    <span aria-disabled="true">
                      Privacy
                    </span>
                  </li>
                  <li>
                    <span aria-disabled="true">
                      Terms
                    </span>
                  </li>
                  <li>
                    <span aria-disabled="true">
                      Contact
                    </span>
                  </li>
                </ul>
              </div>

              <div className="min-w-0">
                <h2 className="text-sm font-semibold text-white">Follow us</h2>
                <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      aria-label="Instagram"
                      className="rounded-sm text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C]"
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="18" cy="6" r="1" className="fill-current stroke-none" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      aria-label="Facebook"
                      className="rounded-sm text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C]"
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
                        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      aria-label="LinkedIn"
                      className="rounded-sm text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C]"
                    >
                      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
                        <path d="M5.2 8.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 10h3v10h-3V10Zm5 0h2.9v1.4h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8V20h-3v-4.9c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V20h-3V10Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <p className="pt-6 text-center text-sm text-white/90 sm:text-left">
              Copyright © 2026 Momentality. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
