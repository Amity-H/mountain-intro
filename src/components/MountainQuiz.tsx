"use client";

import { useEffect, useState } from "react";

type Question = {
  prompt: string;
  answer: boolean;
  explanation: string;
};

const questions: Question[] = [
  {
    prompt: "你知道台灣黑熊胸前有一塊像新月一樣的白色 V 字印記嗎？",
    answer: true,
    explanation: "沒錯！那道白色 V 字胸紋是台灣黑熊的正字標記，也是牠的另一個名字「月熊」的由來。",
  },
  {
    prompt: "你知道玉山是東北亞最高峰，海拔超過 3,950 公尺嗎？",
    answer: true,
    explanation: "答對了！玉山主峰海拔 3,952 公尺，不只是台灣百岳之首，也是整個東北亞的最高點。",
  },
  {
    prompt: "你知道台灣獼猴是台灣唯一原生的野生靈長類動物嗎？",
    answer: true,
    explanation: "正確，台灣獼猴是台灣特有種，也是本島唯一原生的靈長類，山林與海岸林都能見到牠們的蹤跡。",
  },
  {
    prompt: "你知道帝雉（黑長尾雉）全身羽毛都是鮮豔的紅色嗎？",
    answer: false,
    explanation: "其實不是喔！雄性帝雉是深藍紫色的羽毛，尾羽帶有白色橫紋，因此又被稱為「黑長尾雉」。",
  },
  {
    prompt: "你知道台灣山羌又被稱為「吠鹿」，因為牠們會發出像狗一樣的叫聲嗎？",
    answer: true,
    explanation: "答對了！山羌受到驚嚇時會發出短促的「吠叫」聲，在山林間常常被誤認為是狗叫。",
  },
  {
    prompt: "你知道合歡山的武嶺是台灣公路系統的最高點嗎？",
    answer: true,
    explanation: "沒錯，武嶺海拔 3,275 公尺，是台灣公路最高點，冬季降雪時是熱門的賞雪地點。",
  },
  {
    prompt: "你知道台灣藍鵲的尾羽比牠的身體還要長嗎？",
    answer: true,
    explanation: "正確！台灣藍鵲擁有一身鮮豔的藍色羽毛與極長的尾羽，是台灣特有種，也被稱為「長尾山娘」。",
  },
  {
    prompt: "你知道台灣黑熊會像北極熊一樣整個冬天冬眠嗎？",
    answer: false,
    explanation: "其實不會喔！台灣黑熊生活在較溫暖的亞熱帶山林，食物終年不虞匱乏，因此沒有冬眠的習性。",
  },
  {
    prompt: "你知道飛鼠（白面鼯鼠）其實不會真正飛行，只能滑翔嗎？",
    answer: true,
    explanation: "答對了！飛鼠靠著四肢間的皮膜在樹林間滑翔移動，並不是真的用翅膀飛行。",
  },
  {
    prompt: "你知道玉山國家公園是台灣面積最小的國家公園嗎？",
    answer: false,
    explanation: "剛好相反！玉山國家公園面積超過 10 萬公頃，是台灣面積最大的國家公園。",
  },
];

function pickQuestion(excludeIndex?: number) {
  if (questions.length <= 1) return 0;
  let next = Math.floor(Math.random() * questions.length);
  while (next === excludeIndex) {
    next = Math.floor(Math.random() * questions.length);
  }
  return next;
}

export default function MountainQuiz() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<number | null>(null);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const startQuiz = () => {
    setIndex(pickQuestion());
    setResult(null);
    setOpen(true);
  };

  const nextQuestion = () => {
    setIndex((current) => pickQuestion(current ?? undefined));
    setResult(null);
  };

  const answer = (choice: boolean) => {
    if (index === null) return;
    setResult(choice === questions[index].answer ? "correct" : "wrong");
  };

  const question = index !== null ? questions[index] : null;

  return (
    <>
      <button
        type="button"
        onClick={startQuiz}
        aria-label="台灣山林小測驗"
        title="台灣山林小測驗"
        className="group fixed bottom-6 right-6 z-40 transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-none"
      >
        <svg
          viewBox="0 0 100 92"
          className="h-16 w-16 drop-shadow-[0_6px_10px_rgba(15,40,25,0.35)] sm:h-[4.5rem] sm:w-[4.5rem]"
        >
          <circle cx="74" cy="20" r="9" fill="#c8862c" className="transition-opacity duration-300 group-hover:opacity-70" />
          <path d="M0 88 L28 40 L44 62 L60 24 L100 88 Z" fill="#1f3d2c" />
          <path d="M18 88 L60 30 L74 50 L100 88 Z" fill="#2f5c3f" />
          <path d="M50 44 L60 30 L70 46 L60 40 Z" fill="#f0e7cd" opacity="0.85" />
        </svg>
      </button>

      {open && question && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-emerald-950/60 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md border border-emerald-900/15 bg-[#f7f1e1] p-8 text-emerald-950 sm:p-10"
          >
            <div className="pointer-events-none absolute -left-2 -top-2 h-5 w-5 border-l-2 border-t-2 border-emerald-900/30" />
            <div className="pointer-events-none absolute -right-2 -top-2 h-5 w-5 border-r-2 border-t-2 border-emerald-900/30" />
            <div className="pointer-events-none absolute -bottom-2 -left-2 h-5 w-5 border-b-2 border-l-2 border-emerald-900/30" />
            <div className="pointer-events-none absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-emerald-900/30" />

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="關閉"
              className="absolute right-4 top-4 text-emerald-900/50 transition-colors hover:text-amber-700"
            >
              ✕
            </button>

            <p className="text-xs uppercase tracking-[0.3em] text-amber-700">山林小測驗 — True or False</p>

            {result === null && (
              <>
                <p className="mt-6 font-serif text-xl leading-relaxed text-emerald-950 sm:text-2xl">
                  {question.prompt}
                </p>
                <div className="mt-8 flex gap-4">
                  <button
                    type="button"
                    onClick={() => answer(true)}
                    className="flex-1 border border-emerald-950 py-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-950 transition-colors hover:bg-emerald-950 hover:text-amber-50"
                  >
                    是
                  </button>
                  <button
                    type="button"
                    onClick={() => answer(false)}
                    className="flex-1 border border-emerald-950 py-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-950 transition-colors hover:bg-emerald-950 hover:text-amber-50"
                  >
                    不是
                  </button>
                </div>
              </>
            )}

            {result === "correct" && (
              <div className="mt-6">
                <DancingBear />
                <p className="mt-6 text-center font-serif text-xl font-bold text-emerald-950 sm:text-2xl">
                  答對了！
                </p>
                <p className="mt-3 text-center text-sm leading-7 text-emerald-900/70">
                  {question.explanation}
                </p>
                <div className="mt-8 flex gap-4">
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="flex-1 border border-emerald-950 py-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-950 transition-colors hover:bg-emerald-950 hover:text-amber-50"
                  >
                    再來一題
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex-1 border border-transparent bg-amber-700 py-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-50 transition-colors hover:bg-amber-800"
                  >
                    關閉
                  </button>
                </div>
              </div>
            )}

            {result === "wrong" && (
              <div className="mt-6">
                <p className="text-center font-serif text-xl font-bold text-emerald-950 sm:text-2xl">
                  答錯了，再想想
                </p>
                <p className="mt-3 text-center text-sm leading-7 text-emerald-900/70">
                  {question.explanation}
                </p>
                <div className="mt-8 flex gap-4">
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="flex-1 border border-emerald-950 py-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-950 transition-colors hover:bg-emerald-950 hover:text-amber-50"
                  >
                    再試一題
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="flex-1 border border-transparent bg-amber-700 py-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-50 transition-colors hover:bg-amber-800"
                  >
                    關閉
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function DancingBear() {
  return (
    <div className="flex justify-center">
      <svg viewBox="0 0 120 120" className="h-28 w-28">
        <g className="origin-[60px_78px] animate-bear-bounce">
          <ellipse cx="60" cy="86" rx="26" ry="22" fill="#231b16" />
          <path
            d="M42 78 Q60 100 78 78 Q68 92 60 92 Q52 92 42 78 Z"
            fill="#f4ede0"
          />
          <circle cx="60" cy="48" r="20" fill="#231b16" />
          <circle cx="46" cy="32" r="8" fill="#231b16" />
          <circle cx="74" cy="32" r="8" fill="#231b16" />
          <circle cx="46" cy="32" r="4" fill="#3b2e24" />
          <circle cx="74" cy="32" r="4" fill="#3b2e24" />
          <circle cx="52" cy="46" r="2.6" fill="#f4ede0" />
          <circle cx="68" cy="46" r="2.6" fill="#f4ede0" />
          <ellipse cx="60" cy="55" rx="6" ry="4.5" fill="#3b2e24" />

          <g className="origin-[38px_66px] animate-bear-arm-left">
            <ellipse cx="34" cy="72" rx="8" ry="16" fill="#231b16" />
          </g>
          <g className="origin-[82px_66px] animate-bear-arm-right">
            <ellipse cx="86" cy="72" rx="8" ry="16" fill="#231b16" />
          </g>

          <g className="origin-[48px_104px] animate-bear-leg-left">
            <ellipse cx="48" cy="106" rx="8" ry="10" fill="#231b16" />
          </g>
          <g className="origin-[72px_104px] animate-bear-leg-right">
            <ellipse cx="72" cy="106" rx="8" ry="10" fill="#231b16" />
          </g>
        </g>
      </svg>
    </div>
  );
}
