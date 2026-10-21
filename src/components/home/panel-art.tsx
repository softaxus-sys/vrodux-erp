import { cn } from "@/lib/utils";

/** Grid cells are 56px squares anchored to the top-right corner, matching GRID_STYLE. */
const CELL = 56;

const CELL_COLORS = {
  yellow: "bg-[#FFD84D]",
  violet: "bg-[#A97BFF]",
  mint: "bg-[#3FD9A0]",
  sky: "bg-[#3CB8FF]",
  pink: "bg-[#FF7FA8]",
} as const;

export type CellColor = keyof typeof CELL_COLORS;

/** A few solid colour-filled grid squares, for a bit of life behind the artwork on dark panels. */
export function GridCells({ cells, className }: { cells: { right: number; top: number; color: CellColor; opacity?: number }[]; className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 hidden lg:block", className)}>
      {cells.map((c, i) => (
        <span
          key={i}
          className={cn("absolute", CELL_COLORS[c.color])}
          style={{ right: c.right * CELL, top: c.top * CELL, width: CELL, height: CELL, opacity: c.opacity ?? 0.9 }}
        />
      ))}
    </div>
  );
}

/** Browser-style frame used to present real product screenshots. */
export function BrowserFrame({ url, children, className }: { url: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl shadow-black/30", className)}>
      <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#EEF1F7] px-3.5 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6159]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c940]" />
        <span className="ml-2 truncate text-[11px] text-slate-500">{url}</span>
      </div>
      {children}
    </div>
  );
}
