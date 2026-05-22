# PDOX 品牌官网 - 项目指南

> 生成日期：2026-05-21  
> 用途：供 Codex 后续修改和维护参考

---

## 一、项目基本信息

| 项目 | 内容 |
|------|------|
| **品牌名** | PDOX（西班牙独立精准生物酶护肤品牌） |
| **定位** | 与 PBSerum/MOEHS 完全断开，独立品牌 |
| **总部** | 西班牙马德里（2010年创立） |
| **GitHub 仓库** | `https://github.com/yuyanglei702-ctrl/pdox-website` |
| **部署平台** | Vercel（计划绑定 `pdoxserum.com`） |
| **技术栈** | React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui |
| **构建命令** | `npm run build` |
| **输出目录** | `dist/` |
| **当前预览** | `https://5jd6soe2molbu.ok.kimi.link`（临时） |

---

## 二、技术架构

### 2.1 依赖
- **React 18** + TypeScript
- **Vite**（构建工具）
- **Tailwind CSS 3.4.19**（样式框架）
- **shadcn/ui**（UI组件库，40+组件已安装）
- **Lucide React**（图标库）
- **无 Three.js / 无 heavy animation 库**（为性能考虑）

### 2.2 项目结构
```
/mnt/agents/output/app/
├── index.html              # 入口HTML
├── package.json            # 依赖配置
├── vite.config.ts          # Vite配置
├── tailwind.config.js      # Tailwind主题配置
├── public/
│   ├── images/             # 所有图片资源
│   │   ├── logo.png        # PDOX 品牌LOGO（原版，需invert变白）
│   │   ├── logo-nav.png    # 导航栏专用LOGO
│   │   ├── logo-clean.png  # 清理版LOGO
│   │   ├── hero-bg.jpg     # Hero背景（当前CSS渐变替代）
│   │   ├── lab-scene.jpg   # 实验室场景图
│   │   ├── enzyme-*.jpg    # 4张酶图片（脂肪酶/胶原酶/透明质酸酶/角质酶）
│   │   ├── enzyme-*.png    # 4张大图备用
│   │   ├── product-*.jpg   # 5张产品图（绷带/重塑/橡皮擦/胶原/激活）
│   │   ├── product-liquid-bandage.png  # 液态绷带（用户上传）
│   │   ├── ref-product-*.jpg           # 参考产品图
│   │   └── tech-scan-overlay.jpg       # 科技扫描覆盖层素材
│   └── videos/
│       └── brand-hero.mp4  # 视差滚动视频素材（当前未推送GitHub，太大）
├── src/
│   ├── main.tsx            # 入口组件（含BrowserRouter）
│   ├── App.tsx             # ===== 主组件（所有Section在此） =====
│   ├── index.css           # 全局样式 + CSS动画keyframes
│   ├── App.css             # 组件级样式
│   ├── components/
│   │   ├── InteractiveMolecule.tsx  # 3D分子球组件（当前未使用）
│   │   ├── ParallaxVideoSection.tsx # 视差滚动视频组件
│   │   ├── ProductHoverReveal.tsx   # 产品Hover科技扫描效果
│   │   ├── SplashScreen.tsx         # 开场动画组件（已废弃未使用）
│   │   ├── splash.css               # 开场动画样式（已废弃）
│   │   └── ui/                      # shadcn/ui 40+组件库
│   ├── sections/           # 页面区块（预留目录，当前未使用）
│   ├── hooks/              # 自定义hooks（含 use-mobile）
│   ├── pages/              # 页面级组件（预留）
│   ├── types/              # 类型定义（预留）
│   └── lib/                # 工具函数（含 cn 合并）
└── dist/                   # 构建输出（npm run build 生成）
```

---

## 三、App.tsx 核心架构

### 3.1 State 管理
```typescript
const [lang, setLang] = useState<Lang>('es');        // 三语切换：es/en/zh
const [scrolled, setScrolled] = useState(false);     // 导航栏滚动状态
const [mobileOpen, setMobileOpen] = useState(false); // 移动端菜单
const [selectedProduct, setSelectedProduct] = useState<number | null>(null); // 产品弹窗
const [selectedEnzyme, setSelectedEnzyme] = useState<number | null>(null);   // 酶弹窗
```

### 3.2 I18N 三语系统
- 所有文案集中在 `I18N` 常量对象中
- 每种语言都有 `es` / `en` / `zh` 三个字段
- `t(key)` 函数根据当前 `lang` 返回对应语言
- **注意**：部分视差视频区域的文案是直接内联的 `lang === 'es' ? '...' : ...` 判断

### 3.3 数据数组
| 数组名 | 内容 | 数量 |
|--------|------|------|
| `PRODUCTS` | 6款产品数据 | 6 |
| `ENZYMES` | 4种酶复合物 | 4 |
| `ENZYME_DETAILS` | 酶的详细技术信息 | 12条key |
| `INNOVATIONS` | 4大创新特色 | 4 |
| `MESO_CARDS` | 3张鸡尾酒美塑卡片 | 3 |
| `TIMELINE` | 品牌时间线 | 7个节点 |

### 3.4 页面区块（Section）从上到下顺序
1. **PRODUCT DETAIL MODAL** - 产品详情弹窗（全屏覆盖）
2. **ENZYME DETAIL MODAL** - 酶详情弹窗（全屏覆盖）
3. **NAVBAR** - 固定导航栏（滚动后加背景色+边框）
4. **MOBILE MENU** - 移动端全屏菜单
5. **HERO** - 首屏大标题区（PDOX + 标语 + CTA按钮）
6. **CERT BAR** - 认证标识条（R&D Madrid / CE EU / GMP EU / 15Y）
7. **BRAND STORY** - 品牌故事区（左右布局：文字+实验室图）
8. **TECHNOLOGY** - 4种酶复合物卡片网格
9. **PRODUCTS** - 6款产品卡片网格（含Hover叠加效果）
10. **HERITAGE/TIMELINE** - 品牌传承+时间线
11. **PARALLAX VIDEO** - 视差滚动视频背景（创新区前）
12. **INNOVATION** - 4大创新特色网格
13. **CTA** - 金色行动号召区
14. **FOOTER** - 页脚（导航/产品/联系信息）

---

## 四、自定义组件说明

### 4.1 ParallaxVideoSection（视差滚动视频）
- **Props**: `videoSrc`, `children`, `className`, `scrollHeight`（默认250vh）
- **原理**: `position: sticky` + `IntersectionObserver` + 滚动进度控制 `video.currentTime`
- **性能优化**: 使用 `requestAnimationFrame` 节流 + `ref` 直接操作DOM，零React重渲染
- **使用位置**: Innovation Section 之前
- **当前视频**: `/videos/brand-hero.mp4`（金色精华滴落水面的8秒视频）

### 4.2 ProductHoverReveal（产品Hover科技扫描）
- **原理**: CSS `:hover` 驱动 + `ref` 追踪鼠标位置
- **效果**: 悬停时显示金色网格、扫描线、角落括号、数据读数、十字准星
- **性能**: 纯CSS + RAF，零React重渲染
- **使用位置**: Products Section 的6张产品卡片

### 4.3 InteractiveMolecule（3D分子球）【已废弃】
- **状态**: 已开发但**未在App.tsx中使用**
- **废弃原因**: 每帧 `setState` 导致严重卡顿，且与护肤品牌视觉不搭
- **文件位置**: `src/components/InteractiveMolecule.tsx`（可删除或未来改造）

---

## 五、CSS 动画 Keyframes（index.css）

| 动画名 | 用途 | 当前使用位置 |
|--------|------|-------------|
| `fadeInUp` | 向上淡入 | Hero入场动画 |
| `fadeIn` | 纯淡入 | 底部滚动提示 |
| `goldPulse` | 金色脉冲 | 滚动指示器竖线 |
| `floatParticle` | 粒子上浮 | Hero背景粒子 |
| `shimmer` | 闪光扫过 | 未使用 |
| `slideIn` | 左侧滑入 | 未使用 |
| `scanLine` | 扫描线 | ProductHoverReveal |
| `moleculeFloat` | 分子浮动 | 已废弃 |
| `.reveal` / `.active` | 滚动揭示 | 所有section的reveal类 |
| `.gold-text` | 金色渐变文字 | 未使用 |

---

## 六、设计风格

### 6.1 色彩系统
```css
--gold: #C9A96E;           /* 主金色 */
--gold-light: #D4B876;     /* 亮金色 */
--gold-dark: #A68B52;      /* 暗金色 */
--gold-glow: rgba(201,169,110,0.2);  /* 金色光晕 */
--black: #0E0D0B;          /* 主背景 */
--black-warm: #141310;     /* 暖黑色 */
--black-gold1~5: #181610, #1A1712, #161410, #13110D, #181611; /* 黑金渐变层 */
--black-soft: #1A1815;     /* 软黑色（卡片/弹窗背景） */
--white: #FFFFFF;
--white-soft: rgba(255,255,255,0.9);
--white-muted: rgba(255,255,255,0.55);
--white-faint: rgba(255,255,255,0.18);
--cream: #F5F1E8;          /* 奶油色 */
--warm-gray: #8A8278;      /* 暖灰色 */
```

### 6.2 字体
- **标题**: `Cormorant Garamond`（衬线，优雅）
- **正文**: `Montserrat`（无衬线，现代）

### 6.3 设计调性
- 黑金奢华风格
- 大量留白 + 极简排版
- 金色渐变光晕装饰
- 粒子浮动效果
- 小字大写+宽字距的标签风格

---

## 七、已知问题 & TODO

### 7.1 当前问题
| 问题 | 状态 | 备注 |
|------|------|------|
| 视频文件未推送到GitHub | 待处理 | `brand-hero.mp4` 太大导致推送超时，需压缩或手动上传 |
| 视差视频区文案 | 待优化 | 内联三元判断，未使用I18N系统 |
| 3D分子球组件 | 已废弃 | 文件存在但未引用，可删除 |
| SplashScreen组件 | 已废弃 | 用户多次反馈不满意，已移除引用 |

### 7.2 用户可能的后续需求
- 绑定 `pdoxserum.com` 域名（Token需重新生成）
- 更换/添加产品图片
- 修改文案内容
- 调整颜色风格
- 添加新页面/区块
- 优化移动端体验
- 添加表单/联系功能
- 多语言SEO优化

---

## 八、重要注意事项

1. **不要恢复 InteractiveMolecule 到 Hero** - 用户明确反对，认为卡顿且不符合品牌
2. **不要重新添加 SplashScreen 开场动画** - 用户多次反馈太长、丑、阻塞浏览
3. **产品图片用 `object-contain`** - 不要裁切，用户强调过液态绷带被遮挡的问题
4. **三语切换必须保持** - 所有新增文案都要有 es/en/zh 三个版本
5. **移动端优先** - 用户会iOS测试，导航栏和网格布局必须响应式
6. **品牌独立性** - 不要出现 PBSerum / MOEHS / 中国代理 等关联信息
7. **视频大小注意** - Vercel免费版单个文件50MB限制，大视频需外部CDN或压缩

---

## 九、快速修改指南

### 修改文案
```typescript
// 在 App.tsx 的 I18N 常量中找到对应 key，修改三语内容
const I18N: I18nMap = {
  hero_title: { es: '...', en: '...', zh: '...' },
  // ...
};
```

### 添加/修改产品
```typescript
// 在 PRODUCTS 数组中修改
const PRODUCTS = [
  { img: '/images/product-xxx.jpg', key_name: 'prodX_name', key_sub: 'prodX_sub', key_desc: 'prodX_desc', badge: 'badge_new', tags: ['tag_repair'] },
];
// 记得在 I18N 中添加对应的 prodX_name / prodX_sub / prodX_desc 文案
```

### 添加新 Section
在 App.tsx 的 return 中按顺序插入新的 `<section>`，使用相同的 Tailwind 类模式：
```tsx
<section id="new-section" className="relative py-20 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-12 bg-[#0A0A0A] overflow-hidden">
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/25 to-transparent" />
  <div className="max-w-[1200px] mx-auto">
    {/* 内容 */}
  </div>
</section>
```

### 添加CSS动画
在 `src/index.css` 中添加 `@keyframes`，然后在组件中用 `style={{ animation: 'name duration timing' }}` 使用。

---

*文档结束。有任何问题随时问。*
