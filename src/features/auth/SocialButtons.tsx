export function SocialButtons() {
  return (
    <>
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-xs text-slate-400">O</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <button className="h-10 rounded-md border border-slate-200 hover:bg-slate-50 flex items-center justify-center" aria-label="Facebook">
          <span className="text-[#1877F2]" style={{ fontWeight: 700 }}>f</span>
        </button>
        <button className="h-10 rounded-md border border-slate-200 hover:bg-slate-50 flex items-center justify-center gap-1.5 text-sm" aria-label="Google">
          <span style={{ fontWeight: 600 }} className="text-[#4285F4]">G</span>
          <span className="text-slate-600">oogle</span>
        </button>
        <button className="h-10 rounded-md border border-slate-200 hover:bg-slate-50 flex items-center justify-center" aria-label="Apple">
          <span className="text-slate-900" style={{ fontWeight: 600 }}></span>
        </button>
      </div>
    </>
  );
}

