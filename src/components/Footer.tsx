export default function Footer() {
  return (
    <footer id="footer" className="border-t border-emerald-900/10 bg-emerald-950 text-emerald-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-[1.3fr_1fr_1fr] md:gap-12">
        <div>
          <p className="font-serif text-2xl font-bold text-amber-50">台灣山林</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-emerald-300/70">
            一份寫給島嶼高山的紀錄。願每一次上山，都帶著敬意而來，帶著故事而歸。
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-400/60">導覽</p>
          <ul className="mt-4 space-y-3 text-sm text-emerald-200/80">
            <li><a href="/#about" className="transition hover:text-amber-200">山之誌</a></li>
            <li><a href="/#mountains" className="transition hover:text-amber-200">山林秘境</a></li>
            <li><a href="/blog" className="transition hover:text-amber-200">山林生態</a></li>
            <li><a href="/" className="transition hover:text-amber-200">回到頂端</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-emerald-400/60">山岳筆記</p>
          <ul className="mt-4 space-y-3 text-sm text-emerald-200/80">
            <li>玉山主峰 · 3,952m</li>
            <li>雪山主峰 · 3,886m</li>
            <li>合歡群峰 · 3,417m</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-3 px-4 py-6 text-xs text-emerald-400/60 sm:px-6 sm:flex-row">
          <p>© {new Date().getFullYear()} 台灣山林誌 · 走進森林，記得帶走垃圾</p>
          <p className="font-serif tracking-[0.2em] text-emerald-300/80">谷 · 稜 · 峰</p>
        </div>
      </div>
    </footer>
  );
}
