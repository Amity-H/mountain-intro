import Image from "next/image";
import Parallax from "@/components/Parallax";
import Reveal from "@/components/Reveal";

const mountains = [
  {
    name: "玉山",
    english: "Yushan",
    elevation: "3,952m",
    tag: "百岳之首",
    desc: "台灣最高峰，也是東北亞第一高峰。攀登主峰可迎接第一道曙光，站在雲海之上俯瞰群山，是無數登山者一生必訪的朝聖之地。",
    image: "/images/yushan.jpg",
  },
  {
    name: "阿里山",
    english: "Alishan",
    elevation: "2,216m",
    tag: "日出雲海",
    desc: "以日出、雲海、晚霞、森林與高山鐵路聞名的「阿里山五奇」。搭乘百年小火車穿越紅檜林，晨霧中的神木群靜靜訴說千年歲月。",
    image: "/images/alishan.jpg",
  },
  {
    name: "太魯閣",
    english: "Taroko",
    elevation: "峽谷地形",
    tag: "鬼斧神工",
    desc: "立霧溪切穿大理岩層，鑿出深邃壯麗的峽谷景觀。燕子口、九曲洞步道行走其間，抬頭是一線天光，兩側是垂直峭壁。",
    image: "/images/taroko.jpg",
  },
  {
    name: "雪山",
    english: "Xueshan",
    elevation: "3,886m",
    tag: "台灣第二峰",
    desc: "翠池、雪山圈谷保留冰河遺跡地形，秋季山毛櫸金黃遍野。從黑森林到主峰稜線，是進階登山者心中的夢幻路線。",
    image: "/images/xueshan.jpg",
  },
  {
    name: "合歡山",
    english: "Hehuanshan",
    elevation: "3,417m",
    tag: "賞雪聖地",
    desc: "台灣公路最高點武嶺就在此處，是入門百岳首選。冬季降雪時銀白覆頂，四季皆能輕鬆親近三千公尺的壯闊天際線。",
    image: "/images/hehuanshan.jpg",
  },
  {
    name: "溪頭",
    english: "Xitou",
    elevation: "森林遊樂區",
    tag: "竹林秘境",
    desc: "台大實驗林孟宗竹林隨風搖曳，空中走廊穿梭在紅檜、柳杉林冠之間。清晨薄霧與灑落的陽光，是最療癒的森林浴場域。",
    image: "/images/xitou.jpg",
    credit: "Joe Lewis · CC BY-SA 2.0, via Wikimedia Commons",
  },
];

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col overflow-x-hidden bg-[#f7f1e1] text-emerald-950">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:gap-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <Parallax speed={-0.06} max={20}>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-amber-700">
              <span className="h-px w-8 bg-amber-700" />
              Taiwan / 台灣山林誌
            </p>
            <h1 className="mt-7 font-serif text-4xl font-bold leading-[1.08] text-emerald-950 sm:text-6xl lg:text-7xl">
              走進山
              <br />
              與光的懷抱
            </h1>
            <p className="mt-8 max-w-md text-base leading-8 text-emerald-900/70">
              從高聳的百岳到靜謐的森林秘境，台灣的山林交織著雲霧、光影與四季的呼吸。
              這是一份寫給六座山林的紀錄。
            </p>
            <a
              href="#mountains"
              className="group mt-10 inline-flex items-center gap-3 border-b border-emerald-950 pb-1 text-sm font-medium text-emerald-950 transition-colors hover:border-amber-700 hover:text-amber-700"
            >
              閱讀山林紀錄
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </Parallax>

          <Parallax speed={0.14} max={40} className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="pointer-events-none absolute -left-2 -top-2 h-5 w-5 border-l-2 border-t-2 border-emerald-900/30" />
            <div className="pointer-events-none absolute -right-2 -top-2 h-5 w-5 border-r-2 border-t-2 border-emerald-900/30" />
            <div className="pointer-events-none absolute -bottom-2 -left-2 h-5 w-5 border-b-2 border-l-2 border-emerald-900/30" />
            <div className="pointer-events-none absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-emerald-900/30" />
            <div className="overflow-hidden border border-emerald-900/15">
              <svg viewBox="0 0 480 560" className="h-full w-full">
                <rect width="480" height="560" fill="#f0e7cd" />
                <circle cx="380" cy="86" r="42" fill="none" stroke="#b8791f" strokeWidth="1.5" />
                <g stroke="#b8791f" strokeWidth="1.5" opacity="0.7">
                  {[0, 36, 72, 108, 144, 180, 216, 252, 288, 324].map((deg) => (
                    <line
                      key={deg}
                      x1="380"
                      y1="18"
                      x2="380"
                      y2="32"
                      transform={`rotate(${deg} 380 86)`}
                    />
                  ))}
                </g>
                <path
                  d="M0 320 L60 230 L120 300 L180 190 L240 280 L300 200 L360 270 L420 210 L480 300 L480 560 L0 560 Z"
                  fill="#1f3d2c"
                />
                <path
                  d="M0 380 L70 300 L140 360 L210 260 L280 340 L350 280 L420 350 L480 300 L480 560 L0 560 Z"
                  fill="#2f5c3f"
                />
                <path
                  d="M0 440 L80 360 L150 410 L230 330 L300 400 L380 340 L480 410 L480 560 L0 560 Z"
                  fill="#4c7c4f"
                />
                <g stroke="#f0e7cd" strokeWidth="1" opacity="0.5" fill="none">
                  <path d="M0 430 Q120 410 240 430 T480 425" />
                  <path d="M0 460 Q120 445 240 462 T480 455" />
                  <path d="M0 492 Q120 478 240 494 T480 486" />
                  <path d="M0 524 Q120 510 240 526 T480 518" />
                </g>
              </svg>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-emerald-700/60">
              Fig. 01 — 群峰疊嶂，晨光初起
            </p>
          </Parallax>
        </div>

        {/* Marquee ticker */}
        <div className="overflow-hidden border-y border-emerald-950/10 bg-emerald-900 py-3">
          <div className="flex w-max animate-marquee gap-10">
            {[0, 1].map((rep) => (
              <div key={rep} className="flex shrink-0 gap-10 pr-10">
                {mountains.map((m) => (
                  <span
                    key={m.name}
                    className="flex items-center gap-10 text-sm uppercase tracking-[0.3em] text-amber-100/80"
                  >
                    {m.name}
                    <span className="text-amber-500">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / statement */}
      <section id="about" className="bg-[#f7f1e1] py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:gap-16 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-700">山之誌 — Statement</p>
            <p className="mt-6 font-serif text-3xl leading-relaxed text-emerald-950 sm:text-4xl">
              台灣，一座被高山環抱的島嶼。
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-emerald-900/70">
              超過兩百座三千公尺以上的高峰，孕育出從亞熱帶闊葉林到高山寒原的豐富林相。
              晨曦穿過林間灑落金色光斑，雲海在稜線間流動——這片山林，值得用一生慢慢走。
            </p>
          </Reveal>
          <Reveal delay={150} className="space-y-8 border-l border-emerald-900/15 pl-8">
            <Parallax speed={0.06} max={12}>
              <p className="font-serif text-4xl font-bold text-emerald-950">
                268<span className="ml-1 text-base font-sans font-normal text-emerald-700/60">座</span>
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-emerald-700/60">三千公尺以上高峰</p>
            </Parallax>
            <Parallax speed={0.09} max={16}>
              <p className="font-serif text-4xl font-bold text-emerald-950">
                3,952<span className="ml-1 text-base font-sans font-normal text-emerald-700/60">m</span>
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-emerald-700/60">玉山主峰，台灣之巔</p>
            </Parallax>
            <Parallax speed={0.12} max={20}>
              <p className="font-serif text-4xl font-bold text-emerald-950">
                06<span className="ml-1 text-base font-sans font-normal text-emerald-700/60">處</span>
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-emerald-700/60">本篇精選山林秘境</p>
            </Parallax>
          </Reveal>
        </div>
      </section>

      {/* Mountains — editorial list */}
      <section id="mountains" className="bg-emerald-950 py-16 text-amber-50 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="flex flex-col justify-between gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-400/80">Selected Peaks</p>
              <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">六座山林秘境</h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-emerald-200/60">
              從最高的百岳到靜謐的竹林步道，逐一走過台灣最具代表性的六處山林風景。
            </p>
          </Reveal>

          <div>
            {mountains.map((m, i) => (
              <Reveal key={m.name} delay={Math.min(i, 4) * 80}>
                <div className="group grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-4 border-b border-white/10 py-8 transition-colors hover:bg-white/[0.03] md:grid-cols-[48px_9rem_1.1fr_1.2fr_auto] md:items-center md:gap-8 md:px-4">
                  <span className="font-serif text-lg text-amber-400/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative order-first col-span-2 h-44 w-full overflow-hidden border border-white/10 md:order-none md:col-span-1 md:h-24 md:w-36">
                    {m.image ? (
                      <>
                        <Parallax speed={0.1} max={10} className="absolute -inset-y-3 inset-x-0">
                          <Image
                            src={m.image}
                            alt={`${m.name}山林風景`}
                            fill
                            sizes="(min-width: 768px) 144px, 100vw"
                            className="object-cover grayscale-[35%] contrast-[1.05] saturate-[0.9] transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                          />
                        </Parallax>
                        <div className="pointer-events-none absolute inset-0 bg-emerald-950/35 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0" />
                      </>
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-800 to-emerald-900">
                        <svg viewBox="0 0 144 96" className="h-full w-full opacity-60">
                          <g stroke="#f0e7cd" strokeWidth="1" opacity="0.5" fill="none">
                            <path d="M0 30 Q36 20 72 30 T144 26" />
                            <path d="M0 48 Q36 40 72 50 T144 44" />
                            <path d="M0 66 Q36 58 72 68 T144 62" />
                          </g>
                        </svg>
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-amber-50 sm:text-3xl">{m.name}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-emerald-300/50">
                      {m.english} · {m.elevation} · {m.tag}
                    </p>
                  </div>
                  <p className="text-sm leading-7 text-emerald-200/70">{m.desc}</p>
                  <span
                    aria-hidden
                    className="hidden text-amber-400 transition-transform group-hover:translate-x-1 md:inline-block"
                  >
                    →
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="bg-[#f7f1e1] py-16 sm:py-20">
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="font-serif text-xl leading-relaxed text-emerald-950 sm:text-2xl lg:text-3xl">
            山永遠在那裡，用你的腳步，寫下屬於自己的那一段。
          </p>
          <a
            href="#mountains"
            className="group mt-8 inline-flex items-center gap-3 border-b border-emerald-950 pb-1 text-sm font-medium text-emerald-950 transition-colors hover:border-amber-700 hover:text-amber-700"
          >
            重新探索山林
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </section>
    </div>
  );
}
