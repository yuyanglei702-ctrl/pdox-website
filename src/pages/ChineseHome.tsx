import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const entries = [
  { href: '/about', title: '了解 PDOX 普特奥斯', body: '从品牌介绍进入产品展示、资料支持和官方联系页面。' },
  { href: '/products', title: '官网产品展示', body: '浏览官网当前展示的六款产品及各自详情。具体信息请按产品名称分别核对。' },
  { href: '/resources', title: '产品资料与常见问题', body: '查找产品页面、常见问题、访问影像和资料咨询入口。' },
  { href: '/official-channels', title: '官方渠道说明', body: '查看官网域名及联系入口。一般网页不能证明单件商品的真伪。' },
];
export default function ChineseHome() {
  return <section lang="zh-CN" className="min-h-screen pb-24 pt-20">
    <div className="relative overflow-hidden border-b border-white/10 bg-[#111214] px-5 py-16 sm:px-8 lg:py-24">
      <img src="/images/optimized/hero-bg-gold.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="relative mx-auto max-w-[1200px]">
        <nav aria-label="面包屑导航" className="mb-10 text-sm text-white/60"><Link to="/">官网首页</Link><span className="mx-3">/</span>中文品牌介绍</nav>
        <h1 className="font-sans text-[clamp(36px,5vw,68px)] leading-tight">PDOX 普特奥斯官方网站</h1>
        <p className="mt-7 max-w-2xl text-lg leading-9 text-white/70">欢迎来到 PDOX 普特奥斯官网。这里汇集品牌介绍、官网产品展示、资料入口和官方联系信息，方便你查找与具体产品相关的内容。</p>
        <p className="mt-5 text-sm tracking-wide text-[#C9A96E]">官方域名：www.pdoxserum.com</p>
        <Link to="/products" className="mt-10 inline-flex items-center gap-3 bg-[#C9A96E] px-7 py-4 font-sans text-sm font-semibold text-black">浏览产品<ArrowRight size={18} /></Link>
      </div>
    </div>
    <div className="mx-auto max-w-[1200px] px-5 pt-14 sm:px-8">
      <div className="divide-y divide-white/10 border-y border-white/10">{entries.map(entry => <Link key={entry.href} to={entry.href} className="group grid grid-cols-[1fr_24px] items-center gap-6 py-9"><div><h2 className="font-sans text-2xl leading-9 group-hover:text-[#C9A96E]">{entry.title}</h2><p className="mt-4 max-w-2xl text-base leading-8 text-white/65">{entry.body}</p></div><ArrowRight className="text-[#C9A96E]" size={22} /></Link>)}</div>
      <section className="mt-14 border border-white/10 bg-white/[0.02] p-7 sm:p-10"><h2 className="font-sans text-2xl">联系 PDOX 普特奥斯</h2><p className="mt-5 max-w-2xl text-base leading-8 text-white/65">产品资料、合作咨询及购买后的产品信息核对，可通过官网联系页整理咨询内容。涉及单件产品时，请提供准确名称、包装信息、购买渠道及可用的批次信息。</p><Link to="/contact" className="mt-7 inline-flex items-center gap-3 text-[#C9A96E]">进入官方联系页<ArrowRight size={18} /></Link></section>
    </div>
  </section>;
}
