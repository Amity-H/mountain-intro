import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";

export const metadata: Metadata = {
  title: "山林生態誌 | 台灣山林",
  description: "認識台灣黑熊、帝雉與台灣獼猴 — 三種與玉山、雪山、溪頭山林共生的特有動物。",
};

const animals = [
  {
    name: "台灣黑熊",
    latin: "Ursus thibetanus formosanus",
    tag: "臺灣特有亞種 · 瀕臨絕種保育類",
    mountain: "玉山",
    desc: "胸前一抹V字白紋，是台灣體型最大的陸生食肉動物，山林裡人稱「月熊」。棲息於海拔1,000至3,500公尺的中高海拔森林，玉山國家公園是牠們重要的原始棲地。生性機警、獨居，靠敏銳的嗅覺尋找漿果、橡實與昆蟲，偶爾也會爬樹折枝取食，留下特有的「熊窩」痕跡。近年因棲地零碎化與獵捕壓力，數量估計僅剩數百隻，保育刻不容緩。",
    image: "/images/formosan-black-bear.jpg",
    credit: "smartneddy · CC BY-SA 3.0, via Wikimedia Commons",
  },
  {
    name: "帝雉",
    latin: "Syrmaticus mikado",
    tag: "臺灣特有種 · 珍貴稀有保育類",
    mountain: "雪山",
    desc: "雄鳥通體深藍紫色，泛著金屬光澤，尾羽長而挺立，白色橫紋如霧中霜痕，因此被稱為「霧林中的王者」。棲息於海拔2,000至3,600公尺的針葉林與箭竹草原交界帶，性情機警而隱密，雪山主稜與翠池一帶清晨薄霧中偶可驚鴻一瞥。1906年由英國博物學家古費洛命名，是台灣山林最具代表性的高山鳥類之一。",
    image: "/images/mikado-pheasant.jpg",
    credit: "Robert tdc · CC BY-SA 2.0, via Wikimedia Commons",
  },
  {
    name: "台灣獼猴",
    latin: "Macaca cyclopis",
    tag: "臺灣特有種 · 群居靈長類",
    mountain: "溪頭",
    desc: "台灣唯一原生的靈長類動物，也是除了人類以外，全島分布最廣的哺乳類之一。群體social性強，一群往往由數十隻組成，在溪頭孟宗竹林與紅檜林間穿梭覓食，取食竹筍、果實與嫩葉。牠們聰明、好奇，善於利用地形跳躍於林冠之間，是森林生態系中重要的種子傳播者，也是遊客在森林步道最容易邂逅的野生動物。",
    image: "/images/formosan-rock-macaque.jpg",
    credit: "ufoncz · CC BY 2.0, via Wikimedia Commons",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-1 flex-col overflow-x-hidden bg-[#f7f1e1] text-emerald-950">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
          <Reveal>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-amber-700">
              <span className="h-px w-8 bg-amber-700" />
              Wildlife / 山林生態誌
            </p>
            <h1 className="mt-7 font-serif text-4xl font-bold leading-[1.15] text-emerald-950 sm:text-5xl lg:text-6xl">
              與山共生的
              <br />
              三種特有身影
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-emerald-900/70">
              從玉山的森林深處到溪頭的竹林小徑，台灣的高山與森林孕育出獨一無二的生命。
              這裡記錄三種只能在台灣山林邂逅的特有動物。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Animals — editorial list */}
      <section className="bg-emerald-950 py-16 text-amber-50 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal className="border-b border-white/10 pb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400/80">Endemic Species</p>
            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">三種山林特有動物</h2>
          </Reveal>

          <div>
            {animals.map((a, i) => (
              <Reveal key={a.name} delay={i * 100}>
                <div className="grid grid-cols-1 gap-8 border-b border-white/10 py-12 md:grid-cols-[18rem_1fr] md:items-center md:gap-12">
                  <div>
                    <div className="relative mx-auto h-56 w-56 overflow-hidden border border-white/10 md:mx-0 md:h-56 md:w-72">
                      <Parallax speed={0.08} max={12} className="absolute -inset-y-4 inset-x-0">
                        <Image
                          src={a.image}
                          alt={`${a.name}（${a.latin}）`}
                          fill
                          sizes="(min-width: 768px) 288px, 224px"
                          className="object-cover grayscale-[20%] contrast-[1.05] saturate-[0.95]"
                        />
                      </Parallax>
                      <div className="pointer-events-none absolute inset-0 bg-emerald-950/20 mix-blend-multiply" />
                      <span className="absolute left-4 top-4 font-serif text-lg text-amber-400/70 drop-shadow">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mx-auto mt-2 max-w-56 text-center text-[10px] uppercase tracking-[0.15em] text-emerald-300/40 md:mx-0 md:max-w-72 md:text-left">
                      {a.credit}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-serif text-3xl font-bold text-amber-50 sm:text-4xl">{a.name}</h3>
                      <span className="font-serif text-sm italic text-emerald-300/60">{a.latin}</span>
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-emerald-300/50">
                      {a.tag} · 常見於{a.mountain}
                    </p>
                    <p className="mt-5 max-w-2xl text-sm leading-8 text-emerald-200/70">{a.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[#f7f1e1] py-16 sm:py-20">
        <Reveal className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="font-serif text-xl leading-relaxed text-emerald-950 sm:text-2xl lg:text-3xl">
            每一次上山，都是與這些山林住民的一次無聲會面。
          </p>
          <a
            href="/#mountains"
            className="group mt-8 inline-flex items-center gap-3 border-b border-emerald-950 pb-1 text-sm font-medium text-emerald-950 transition-colors hover:border-amber-700 hover:text-amber-700"
          >
            回到山林紀錄
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </section>
    </div>
  );
}
