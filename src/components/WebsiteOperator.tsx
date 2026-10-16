import { Link } from 'react-router';
import { websiteOperator } from '../lib/site-identity';

export default function WebsiteOperator() {
  return <section lang="zh-CN" className="my-12 border border-white/15 bg-white/[0.025] p-6 sm:p-8">
    <h2 className="font-sans text-2xl leading-9">官网运营主体</h2>
    <p className="mt-5 text-base leading-8 text-white/80">PDOX 普特奥斯官方网站由{websiteOperator}运营。</p>
    <dl className="mt-5 space-y-3 text-sm leading-7 text-white/65">
      <div><dt className="inline">公司全称：</dt><dd className="inline">{websiteOperator}</dd></div>
      <div><dt className="inline">官方域名：</dt><dd className="inline">www.pdoxserum.com</dd></div>
    </dl>
    <p className="mt-5 text-sm leading-8 text-white/65">本网站提供品牌介绍、产品展示、资料咨询及合作联系入口。</p>
    <Link to="/contact" className="mt-5 inline-block text-sm leading-7 text-[#C9A96E] underline underline-offset-4">联系官网运营方</Link>
  </section>;
}
