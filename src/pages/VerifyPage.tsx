import { ArrowLeft, ArrowRight, Globe2, Mail, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function VerifyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate('/')} aria-label="PDOX home">
            <img
              src="/images/logo.png"
              alt="PDOX"
              decoding="async"
              fetchPriority="high"
              className="h-10 w-auto invert brightness-200"
            />
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[13px] uppercase tracking-wide text-white/60 transition-colors hover:text-[#C9A96E]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative overflow-hidden border-b border-white/10 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <img
            src="/images/optimized/hero-bg-gold.webp"
            alt=""
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_26%,rgba(201,169,110,0.16),transparent_45%),linear-gradient(to_bottom,rgba(10,10,10,0.74),#0A0A0A)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/10">
              <ShieldCheck className="h-10 w-10 text-[#C9A96E]" />
            </div>
            <p className="mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
              Official Information
            </p>
            <h1 className="text-[clamp(36px,5vw,64px)] leading-tight">Official PDOX channels and product support.</h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/60">
              This page confirms the official PDOX website and contact route. It does not authenticate an individual item unless a product-specific system validates its unique code.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 border border-white/15 bg-black/35 px-5 py-3 text-sm text-white/70">
              <Globe2 className="h-5 w-5 text-[#C9A96E]" />
              Official website information page
            </div>
          </div>
        </section>

        <section className="bg-[#111214] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">Official Channels</p>
              <h2 className="text-[clamp(32px,4vw,52px)] leading-tight">Use verified PDOX contact routes.</h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <article className="border border-white/10 bg-black/25 p-8">
                <Globe2 className="mb-5 h-8 w-8 text-[#C9A96E]" />
                <h3 className="font-sans text-lg font-medium">Official Website</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">www.pdoxserum.com is the official public brand website referenced on this page.</p>
              </article>
              <article className="border border-white/10 bg-black/25 p-8">
                <Mail className="mb-5 h-8 w-8 text-[#C9A96E]" />
                <h3 className="font-sans text-lg font-medium">Official Email</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">Product, distribution and documentation enquiries route to info@pdoxserum.com.</p>
              </article>
              <article className="border border-white/10 bg-black/25 p-8">
                <ShieldCheck className="mb-5 h-8 w-8 text-[#C9A96E]" />
                <h3 className="font-sans text-lg font-medium">Item Verification</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">A packaging image or general webpage cannot verify a specific item. Contact PDOX with the product details for review.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0B0C0E] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <img
              src="/images/optimized/source-traceability-en.webp"
              alt="PDOX European laboratory visit archive"
              loading="lazy"
              decoding="async"
              className="mx-auto w-full max-w-[420px] border border-white/10 bg-black/30 p-3"
            />
            <div>
              <p className="text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">Visit Archive</p>
              <h2 className="mt-4 text-[clamp(32px,4vw,52px)] leading-tight">Context before conclusions.</h2>
              <p className="mt-6 text-base leading-8 text-white/58">
                Laboratory-visit imagery is presented as a brand archive. It does not by itself certify a specific product, manufacturing site, formulation or performance claim.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(115deg,#D6BC83_0%,#C9A96E_48%,#B89455_100%)] px-4 py-20 text-black sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Mail className="mx-auto mb-6 h-9 w-9" />
            <h2 className="text-[clamp(30px,4vw,50px)] leading-tight">Need help reviewing a PDOX product?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/65">
              Include the product name, packaging photographs, purchase channel and any available code or batch information in your enquiry.
            </p>
            <a
              href="mailto:info@pdoxserum.com?subject=PDOX%20Product%20Support"
              className="mt-8 inline-flex items-center gap-2 bg-black px-8 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A96E] transition hover:bg-white hover:text-black"
            >
              Contact Official Support
              <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0A0A0A] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] text-center">
          <img src="/images/logo.png" alt="PDOX" loading="lazy" decoding="async" className="mx-auto h-8 w-auto invert brightness-200" />
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/35">Official Website | www.pdoxserum.com</p>
          <p className="mt-2 text-xs text-white/25">This page provides official channel information and does not automatically authenticate an individual item.</p>
        </div>
      </footer>
    </div>
  );
}
