import { Send, Sparkles } from "lucide-react";

const conversation = [
  {
    speaker: "Elle",
    message:
      "Good morning, Sarah! Would you like me to walk you through your schedule?",
  },
  {
    speaker: "Sarah",
    message: "What's on Emma's schedule this week?",
  },
  {
    speaker: "Elle",
    message:
      "Emma has soccer, piano, a field trip, and Olivia's birthday party this week.",
  },
  {
    speaker: "Sarah",
    message: "Can you remind me to sign Emma's permission slip?",
  },
  {
    speaker: "Elle",
    message:
      "Of course. I'll remind you at 8 PM. Have you had a chance to RSVP to Olivia's birthday party?",
  },
  {
    speaker: "Sarah",
    message: "Can you move Marcus's dentist appointment to Thursday?",
  },
  {
    speaker: "Elle",
    message: "Thursday is open at 10 AM, 1 PM, or 2 PM.",
  },
  {
    speaker: "Sarah",
    message: "Let's move it to 2 PM.",
  },
  {
    speaker: "Elle",
    message:
      "Marcus's dentist appointment is rescheduled for Thursday at 2 PM. I'll notify Marcus.",
  },
  {
    speaker: "Sarah",
    message: "Remind me Wednesday night to pack Emma's soccer gear.",
  },
  {
    speaker: "Elle",
    message:
      "I'll remind you Wednesday night to pack the soccer gear. You may also want to order new cleats.",
  },
];

export default function EllePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <header>
        <p className="text-sm font-medium text-[#0D9488]">
          Your family assistant
        </p>
        <h1 className="mt-1 text-3xl font-bold tracking-tight">Ask Elle</h1>
        <p className="mt-2 text-[#64748B]">
          A fictional sample conversation.
        </p>
      </header>

      <section className="overflow-hidden rounded-2xl border border-[#1E293B]/10 bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-[#1E293B]/10 p-4 sm:px-6">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#0D9488]/10 text-[#0D9488]">
            <Sparkles aria-hidden="true" className="size-5" />
          </span>
          <div>
            <h2 className="font-bold">Elle</h2>
            <p className="text-xs text-[#64748B]">
              Family planning assistant · Demo
            </p>
          </div>
        </div>

        <div
          aria-label="Sample conversation with Elle"
          className="max-h-[min(65vh,680px)] space-y-4 overflow-y-auto bg-[#FAFAF9] p-4 sm:p-6"
        >
          {conversation.map(({ speaker, message }, index) => {
            const fromSarah = speaker === "Sarah";
            return (
              <div
                key={`${speaker}-${index}`}
                className={`flex ${fromSarah ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[90%] sm:max-w-[82%] ${
                    fromSarah ? "items-end" : "items-start"
                  } flex flex-col`}
                >
                  <span
                    className={`mb-1 px-1 text-[11px] font-semibold ${
                      fromSarah ? "text-[#64748B]" : "text-[#0D9488]"
                    }`}
                  >
                    {speaker}
                  </span>
                  <p
                    className={`rounded-2xl px-4 py-3 text-sm leading-6 ${
                      fromSarah
                        ? "rounded-br-md bg-[#0D9488] text-white"
                        : "rounded-bl-md border border-[#1E293B]/10 bg-white text-[#1E293B]"
                    }`}
                  >
                    {message}
                  </p>
                </div>
              </div>
            );
          })}
          <div
            role="status"
            aria-label="Elle is typing..."
            className="flex justify-start"
          >
            <div className="flex items-center gap-2 rounded-2xl rounded-bl-md border border-[#1E293B]/10 bg-white px-4 py-3 text-sm text-[#64748B]">
              <span>Elle is typing...</span>
              <span aria-hidden="true" className="flex items-center gap-1">
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="size-1.5 animate-bounce rounded-full bg-[#0D9488]"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1E293B]/10 bg-white p-3 sm:p-4">
          <div className="flex min-w-0 items-center gap-2 rounded-xl border border-[#1E293B]/15 bg-[#FAFAF9] p-1.5 pl-3 focus-within:border-[#0D9488] focus-within:ring-2 focus-within:ring-[#0D9488]/20">
            <label className="sr-only" htmlFor="elle-prompt">
              Ask Elle anything
            </label>
            <input
              id="elle-prompt"
              type="text"
              placeholder="Ask Elle anything..."
              readOnly
              className="min-w-0 flex-1 bg-transparent py-2 text-sm text-[#1E293B] outline-none placeholder:text-[#64748B]"
            />
            <button
              type="button"
              aria-label="Send message"
              disabled
              className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#0D9488] text-white opacity-50"
            >
              <Send aria-hidden="true" className="size-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
