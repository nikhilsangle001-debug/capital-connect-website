import { Logo } from '@/components/logo'

const columns = [
  {
    title: 'Debt Solutions',
    links: ['Home Loans', 'Business Loans', 'Project Finance', 'Structured Debt', 'Private Debt'],
  },
  {
    title: 'Equity Solutions',
    links: ['Startup Funding', 'Growth Capital', 'Private Equity', 'Joint Ventures'],
  },
  {
    title: 'Company',
    links: ['About', 'Leadership', 'Core Strengths', 'Contact'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-primary-foreground/10 bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="h-9 w-9 text-accent" />
              <span className="font-serif text-lg font-semibold text-primary-foreground">
                Capital Connect
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              An integrated debt, equity and capital advisory platform delivering
              structured funding solutions across India.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Capital Connect. All rights reserved.
          </p>
          <p className="max-w-xl text-xs leading-relaxed text-primary-foreground/40">
            Capital Connect acts as a capital advisory intermediary. All facilities
            are subject to lender approval and applicable terms.
          </p>
        </div>
      </div>
    </footer>
  )
}
