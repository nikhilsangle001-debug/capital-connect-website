'use client'

import { useState, useRef, useEffect, type FormEvent } from 'react'
import { Sparkles, X, Send, Bot, User, ArrowRight, Calculator, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

type Message = {
  role: 'bot' | 'user'
  text: string
  options?: string[]
}

type Stage = 'greeting' | 'purpose' | 'amount' | 'entity' | 'timeline' | 'summary'

const FLOW: Record<Stage, Message> = {
  greeting: {
    role: 'bot',
    text: "Hi, I'm Ava — your AI capital advisor. I'll help you find the right funding solution in under a minute. Let's start.",
    options: ['Get started'],
  },
  purpose: {
    role: 'bot',
    text: 'What do you need capital for?',
    options: ['Home / Property', 'Business Growth', 'Project / Construction', 'Debt Restructuring', 'Equity Raise', 'Something else'],
  },
  amount: {
    role: 'bot',
    text: 'Roughly how much funding are you looking for?',
    options: ['Under ₹50 L', '₹50 L – ₹2 Cr', '₹2 Cr – ₹10 Cr', 'Above ₹10 Cr', 'Not sure yet'],
  },
  entity: {
    role: 'bot',
    text: 'Who is the borrower / applicant?',
    options: ['Individual', 'MSME / SME', 'Private Company', 'Real Estate Developer', 'Startup'],
  },
  timeline: {
    role: 'bot',
    text: 'How soon do you need the funds?',
    options: ['Urgent (within 30 days)', '1–3 months', '3–6 months', 'Just exploring'],
  },
  summary: {
    role: 'bot',
    text: 'Based on your inputs, here are the solutions I recommend. A senior advisor will tailor the structure for you.',
    options: ['Talk to an advisor', 'Start over'],
  },
}

const SOLUTION_MAP: Record<string, { icon: string; title: string; tag: string }> = {
  'Home / Property': { icon: 'home', title: 'Home Loan / LAP', tag: 'Debt' },
  'Business Growth': { icon: 'briefcase', title: 'Business / Working Capital', tag: 'Debt' },
  'Project / Construction': { icon: 'hardhat', title: 'Project & Construction Finance', tag: 'Debt' },
  'Debt Restructuring': { icon: 'scale', title: 'Debt Consolidation & Restructuring', tag: 'Debt' },
  'Equity Raise': { icon: 'trending', title: 'Equity / Growth Capital', tag: 'Equity' },
  'Something else': { icon: 'layers', title: 'Structured Custom Solution', tag: 'Bespoke' },
}

export function AiAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([FLOW.greeting])
  const [stage, setStage] = useState<Stage>('greeting')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [typing, setTyping] = useState(false)
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  function pushBot(msg: Message) {
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, msg])
    }, 650)
  }

  function handleOption(option: string) {
    setMessages((m) => [...m, { role: 'user', text: option }])

    if (stage === 'greeting') {
      pushBot(FLOW.purpose)
      setStage('purpose')
      return
    }

    const key = stage === 'summary' ? 'restart' : stage
    setAnswers((a) => ({ ...a, [key]: option }))

    if (stage === 'purpose') {
      pushBot(FLOW.amount)
      setStage('amount')
    } else if (stage === 'amount') {
      pushBot(FLOW.entity)
      setStage('entity')
    } else if (stage === 'entity') {
      pushBot(FLOW.timeline)
      setStage('timeline')
    } else if (stage === 'timeline') {
      const sol = SOLUTION_MAP[answers.purpose] ?? SOLUTION_MAP['Something else']
      const summary: Message = {
        role: 'bot',
        text: `For your ${sol.title.toLowerCase()} requirement (${answers.amount || 'flexible amount'}, ${answers.timeline || 'flexible timeline'}), I recommend our ${sol.title} offering. This falls under ${sol.tag} advisory.`,
        options: ['Talk to an advisor', 'Start over'],
      }
      pushBot(summary)
      setStage('summary')
    } else if (stage === 'summary') {
      if (option === 'Start over') {
        setMessages([FLOW.greeting])
        setStage('greeting')
        setAnswers({})
      } else if (option === 'Talk to an advisor') {
        const lead: Message = {
          role: 'bot',
          text: "Great choice. Scroll to the contact section below or tap 'Schedule Consultation' — our advisory team will reach out within 24 hours.",
          options: ['Start over'],
        }
        pushBot(lead)
      }
    }
  }

  function handleText(e: FormEvent) {
    e.preventDefault()
    if (!input.trim()) return
    setMessages((m) => [...m, { role: 'user', text: input }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [
        ...m,
        {
          role: 'bot',
          text: "Thanks for sharing that. To give you the most accurate recommendation, pick the option that fits best below — or reach our team directly via the contact form.",
          options: stage === 'summary' ? ['Talk to an advisor', 'Start over'] : ['Continue'],
        },
      ])
    }, 800)
  }

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen(true)}
        className={cn(
          'group fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-primary px-5 py-4 text-white shadow-[0_12px_40px_-8px_rgba(22,35,63,0.6)] transition-all duration-500 hover:scale-105',
          open && 'pointer-events-none scale-90 opacity-0',
        )}
        aria-label="Open AI assistant"
      >
        <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent">
          <span className="absolute inset-0 rounded-full bg-accent ai-orb-ring" />
          <Sparkles className="relative h-5 w-5 text-accent-foreground" />
        </span>
        <span className="flex flex-col items-start leading-none">
          <span className="text-sm font-semibold">Ask Ava</span>
          <span className="mt-0.5 text-[11px] text-white/60">AI Capital Advisor</span>
        </span>
      </button>

      {/* Panel */}
      <div
        className={cn(
          'fixed bottom-6 right-6 z-50 flex h-[600px] max-h-[88vh] w-[400px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl bg-card shadow-[0_30px_80px_-20px_rgba(22,35,63,0.5)] transition-all duration-400',
          open ? 'translate-y-0 scale-100 opacity-100' : 'pointer-events-none translate-y-8 scale-95 opacity-0',
        )}
      >
        {/* Header */}
        <div className="relative flex items-center gap-3 bg-primary px-5 py-4 text-white">
          <div className="absolute inset-0 mesh-bg opacity-30" />
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent">
            <Sparkles className="h-5 w-5 text-accent-foreground" />
          </div>
          <div className="relative flex-1">
            <p className="text-sm font-semibold">Ava — AI Capital Advisor</p>
            <p className="flex items-center gap-1.5 text-[11px] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Online · Find your loan in 60s
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="relative rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close assistant"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="nice-scroll flex-1 space-y-4 overflow-y-auto bg-secondary/40 px-4 py-5">
          {messages.map((msg, i) => (
            <MessageBubble key={i} msg={msg} onOption={handleOption} />
          ))}
          {typing && (
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <Bot className="h-4 w-4" />
              </div>
              <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-card px-4 py-3 shadow-sm">
                <span className="typing-dot h-2 w-2 rounded-full bg-muted-foreground/50" />
                <span className="typing-dot h-2 w-2 rounded-full bg-muted-foreground/50" />
                <span className="typing-dot h-2 w-2 rounded-full bg-muted-foreground/50" />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleText} className="flex items-center gap-2 border-t border-border bg-card px-4 py-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message…"
            className="flex-1 rounded-full bg-secondary px-4 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-accent/40"
          />
          <button
            type="submit"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary/90"
            aria-label="Send"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </>
  )
}

function MessageBubble({ msg, onOption }: { msg: Message; onOption: (o: string) => void }) {
  const isBot = msg.role === 'bot'
  return (
    <div className={cn('flex items-end gap-2', !isBot && 'flex-row-reverse')}>
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
          isBot ? 'bg-primary text-white' : 'bg-accent text-accent-foreground',
        )}
      >
        {isBot ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
      </div>
      <div className={cn('max-w-[78%]', !isBot && 'flex flex-col items-end')}>
        <div
          className={cn(
            'rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm',
            isBot
              ? 'rounded-tl-sm bg-card text-foreground'
              : 'rounded-tr-sm bg-primary text-primary-foreground',
          )}
        >
          {msg.text}
        </div>
        {msg.options && msg.options.length > 0 && (
          <div className={cn('mt-2 flex flex-wrap gap-2', !isBot && 'justify-end')}>
            {msg.options.map((opt) => (
              <button
                key={opt}
                onClick={() => onOption(opt)}
                className="group inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-2 text-xs font-medium text-primary transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                {opt}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
