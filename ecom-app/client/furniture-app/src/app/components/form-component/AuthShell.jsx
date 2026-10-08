import Link from 'next/link'

export default function AuthShell({ children }) {
  return (
    <main className="min-h-screen bg-[#f1f2ed] md:p-5 lg:p-8">
      <div className="mx-auto grid min-h-screen max-w-[1440px] overflow-hidden bg-white md:min-h-[calc(100vh-2.5rem)] md:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] md:rounded-md md:shadow-[0_24px_80px_rgba(31,39,34,0.12)] lg:min-h-[calc(100vh-4rem)]">
        <section
          aria-label="Furniture and home"
          className="relative flex min-h-[240px] flex-col justify-between bg-[#38433b] bg-cover bg-[center_62%] px-7 py-6 text-white sm:min-h-[280px] sm:px-10 sm:py-8 md:min-h-full md:px-12 md:py-10 lg:px-16 lg:py-12"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(22, 31, 26, 0.08) 15%, rgba(22, 31, 26, 0.78) 100%), url(/Trends-banner.jpg)',
          }}
        >
          <Link href="/" className="relative z-10 w-fit text-sm font-semibold uppercase tracking-[0.18em]">
            Home / Furniture
          </Link>
          <div className="relative z-10 max-w-md pb-2">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-white/75">
              Made for everyday living
            </p>
            <h1 className="font-playfair text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Make room for what matters.
            </h1>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
              Thoughtful pieces for the spaces you call home.
            </p>
          </div>
        </section>
        <section className="flex items-center justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-14 xl:px-20">
          <div className="w-full max-w-md">{children}</div>
        </section>
      </div>
    </main>
  )
}