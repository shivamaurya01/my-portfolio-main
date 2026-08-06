import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { Bot, Loader2, Send, User } from "lucide-react";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const suggestions = [
  "What are Shiva's technical skills?",
  "Tell me about Shiva's projects.",
  "What is TalkSync?",
  "What is Shiva's educational background?",
  "How can I contact Shiva?",
];

const greeting =
  "Hi! I’m Shiva’s portfolio assistant. Ask me about his skills, projects, education, or how to get in touch.";

/** Joins the streamed text parts of a message. */
function messageText(message: UIMessage) {
  return message.parts
    .map((part) => (part.type === "text" ? part.text : ""))
    .join("")
    .trim();
}

export function AskMeAnything() {
  const [input, setInput] = useState("");
  const [errorText, setErrorText] = useState<string | null>(null);
  // const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    onError: (error) =>
      setErrorText(
        error.message.includes("429")
          ? "Too many requests right now — please try again in a moment."
          : "The assistant is unavailable right now. Please use the contact form below.",
      ),
  });

  const isBusy = status === "submitted" || status === "streaming";

  // Keep the newest message and the composer in view while streaming.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  // useEffect(() => {
  //   if (!isBusy) inputRef.current?.focus();
  // }, [isBusy]);

  const ask = (question: string) => {
    const text = question.trim();
    if (!text || isBusy) return;
    setErrorText(null);
    setInput("");
    void sendMessage({ text });
  };

  return (
    <Section
      id="ask"
      eyebrow="Ask Me Anything"
      title="Have a question about my profile?"
      description="Explore Shiva's skills, projects, education, and background through his AI-powered portfolio assistant."
      className="bg-surface/40"
    >
      <Reveal>
        <div className="surface-card mx-auto max-w-3xl overflow-hidden rounded-2xl">
          <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-5 py-3">
            <Bot size={16} className="text-primary" aria-hidden="true" />
            <span className="font-mono text-xs text-muted-foreground">portfolio assistant
              
            </span>
          </div>

          <div
            ref={scrollRef}
            className="max-h-80 space-y-4 overflow-y-auto p-5"
            role="log"
            aria-live="polite"
            aria-label="Conversation"
          >
            <ChatBubble from="assistant" text={greeting} />

            {messages.map((message) => {
              const text = messageText(message);
              if (!text) return null;
              return (
                <ChatBubble
                  key={message.id}
                  from={message.role === "user" ? "user" : "assistant"}
                  text={text}
                />
              );
            })}

            {status === "submitted" ? (
              <ChatBubble from="assistant" text="" pending />
            ) : null}

            {errorText ? (
              <p className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                {errorText}
              </p>
            ) : null}
          </div>

          <div className="border-t border-border p-5">
            <ul className="flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <li key={suggestion}>
                  <button
                    type="button"
                    onClick={() => ask(suggestion)}
                    disabled={isBusy}
                    className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary disabled:opacity-50"
                  >
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
            <form
              className="mt-4 flex gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                ask(input);
              }}
            >
              <label htmlFor="ask-input" className="sr-only">
                Your question
              </label>
              <input
                id="ask-input"
                // ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask a question…"
                autoComplete="off"
                className="min-w-0 flex-1 rounded-full border border-input bg-surface-2 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary"
              />
              <button
                type="submit"
                disabled={isBusy || !input.trim()}
                aria-label="Send question"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {isBusy ? (
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                ) : (
                  <Send size={16} aria-hidden="true" />
                )}
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function ChatBubble({
  from,
  text,
  pending = false,
}: {
  from: "assistant" | "user";
  text: string;
  pending?: boolean;
}) {
  return (
    <div className={`flex gap-3 ${from === "user" ? "flex-row-reverse" : ""}`}>
      <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
        {from === "assistant" ? (
          <Bot size={15} aria-hidden="true" />
        ) : (
          <User size={15} aria-hidden="true" />
        )}
      </span>
      <p
        className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          from === "user"
            ? "bg-primary text-primary-foreground"
            : "bg-surface-2 text-muted-foreground"
        }`}
      >
        {pending ? (
          <span className="flex gap-1" aria-label="Thinking">
            <span className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:0ms]" />
            <span className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:150ms]" />
            <span className="size-1.5 animate-bounce rounded-full bg-primary [animation-delay:300ms]" />
          </span>
        ) : (
          text
        )}
      </p>
    </div>
  );
}
