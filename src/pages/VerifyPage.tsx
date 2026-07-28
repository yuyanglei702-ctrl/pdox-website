import { ShieldCheck, ArrowLeft, MapPin, Award, Globe2, Mail } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function VerifyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Simplified Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3"
            aria-label="PDOX home"
          >
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
            className="flex items-center gap-2 text-[13px] uppercase tracking-wide text-white/55 transition-colors hover:text-[#C9A96E]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Verification Banner */}
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(201,169,110,0.12),transparent_50%)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/10">
              <ShieldCheck className="h-10 w-10 text-[#C9A96E]" />
            </div>
            <p className="mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
              Official Authenticity Check
            </p>
            <h1 className="text-[clamp(32px,5vw,56px)] leading-tight">
              Official PDOX Product
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/55">
              You have scanned an official PDOX authenticity verification code. 
              This product is part of the PDOX Spanish bio-enzyme skincare system,
              developed in European laboratories and distributed through authorized channels.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#C9A96E]/30 bg-[#C9A96E]/10 px-6 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-emerald-400">
                Verification Passed — Genuine Product
              </span>
            </div>
          </div>
        </section>

        {/* Source Traceability */}
        <section className="border-y border-white/10 bg-[#0D0C0A] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-[1500px]">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
                European Laboratory Visit
              </p>
              <h2 className="text-[clamp(32px,4vw,52px)] leading-tight">
                Source Traceability
              </h2>
              <p className="mt-6 text-base leading-8 text-white/55">
                PDOX highlights source transparency through documented European laboratory visits, 
                presenting a professional skincare technology narrative built on selected sources, 
                traceable quality, and trusted assurance.
              </p>
            </div>
            <div className="mt-12 flex justify-center px-4 sm:px-6 lg:px-8">
              <div className="relative w-full max-w-[560px] overflow-hidden rounded-[18px] border border-white/10 bg-black/35 shadow-[0_24px_70px_-18px_rgba(0,0,0,0.65)] sm:max-w-[600px] lg:max-w-[620px]">
                <img
                  src="/images/optimized/source-traceability-en.webp"
                  alt="PDOX Spain Source Traceability European Laboratory Visit"
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Brand Credentials */}
        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
                Brand Credentials
              </p>
              <h2 className="text-[clamp(32px,4vw,52px)] leading-tight">
                Why PDOX Is Trusted
              </h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              <div className="border border-white/10 bg-black/25 p-8 text-center transition hover:border-[#C9A96E]/30">
                <MapPin className="mx-auto mb-5 h-8 w-8 text-[#C9A96E]" />
                <h3 className="font-sans text-base font-medium uppercase tracking-wide text-white">
                  Madrid Origin
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  Developed in Spain with European laboratory research and formulation culture.
                </p>
              </div>
              <div className="border border-white/10 bg-black/25 p-8 text-center transition hover:border-[#C9A96E]/30">
                <Award className="mx-auto mb-5 h-8 w-8 text-[#C9A96E]" />
                <h3 className="font-sans text-base font-medium uppercase tracking-wide text-white">
                  EU Quality Standard
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  Manufactured following strict European cosmetic safety and quality protocols.
                </p>
              </div>
              <div className="border border-white/10 bg-black/25 p-8 text-center transition hover:border-[#C9A96E]/30">
                <Globe2 className="mx-auto mb-5 h-8 w-8 text-[#C9A96E]" />
                <h3 className="font-sans text-base font-medium uppercase tracking-wide text-white">
                  Global Distribution
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/50">
                  Authorized distribution through official clinics, partners, and certified online stores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Official Channels */}
        <section className="border-y border-white/10 bg-[#0F0E0B] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-[13px] uppercase tracking-[0.38em] text-[#C9A96E]">
              Purchase Channels
            </p>
            <h2 className="text-[clamp(32px,4vw,52px)] leading-tight">
              Buy From Official Sources
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/55">
              To ensure product authenticity and quality, please purchase through the following official channels. 
              Products from unauthorized sources cannot be guaranteed for quality or after-sales service.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="border border-white/10 bg-black/30 p-8 text-left">
                <h3 className="font-sans text-base font-medium uppercase tracking-wide text-white">
                  Douyin Official Store
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/50">
                  PDOX普特奥斯官方旗舰店<br />
                  抖音搜索：PDOX普特奥斯
                </p>
              </div>
              <div className="border border-white/10 bg-black/30 p-8 text-left">
                <h3 className="font-sans text-base font-medium uppercase tracking-wide text-white">
                  Authorized Partners
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/50">
                  Certified clinics and dermatology partners.<br />
                  Contact us for the nearest authorized location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-[#C9A96E] px-4 py-20 text-black sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Mail className="mx-auto mb-6 h-9 w-9" />
            <h2 className="text-[clamp(28px,4vw,48px)] leading-tight">
              Questions About Your Product?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/65">
              If you have any questions about product authenticity, usage, or after-sales service, 
              please contact our official customer service team.
            </p>
            <a
              href="mailto:info@pdoxserum.com"
              className="mt-8 inline-flex items-center gap-2 bg-black px-8 py-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A96E] transition hover:bg-white hover:text-black"
            >
              Contact Official Support
              <ArrowLeft className="rotate-180" size={18} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0A0A0A] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1500px] text-center">
          <img
            src="/images/logo.png"
            alt="PDOX"
            loading="lazy"
            decoding="async"
            className="mx-auto h-8 w-auto invert brightness-200"
          />
          <p className="mt-4 text-sm text-white/40">
            (c) 2026 PDOX — Madrid — Global Distribution — All Rights Reserved
          </p>
          <p className="mt-2 text-xs text-white/25">
            This verification page is provided by PDOX official. If you suspect counterfeit products, please report to info@pdoxserum.com
          </p>
        </div>
      </footer>
    </div>
  );
}
