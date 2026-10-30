import type { ReactNode } from "react";
import Link from "next/link";

/** Inline formatting: **bold** and [text](/internal-or-https-link). Nothing else is interpreted. */
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      out.push(<strong key={k++} className="font-semibold text-foreground">{m[1]}</strong>);
    } else if (m[3].startsWith("/")) {
      out.push(<Link key={k++} href={m[3]} className="font-medium text-brand-600 underline underline-offset-4 dark:text-brand-300">{m[2]}</Link>);
    } else {
      out.push(<a key={k++} href={m[3]} className="font-medium text-brand-600 underline underline-offset-4 dark:text-brand-300" rel="noopener noreferrer">{m[2]}</a>);
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const cells = (row: string) => row.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

/**
 * Renders a post body written in the light markup used by the blog: "## " and "### " headings,
 * "- " bullets, "1. " numbered items, "| a | b |" tables (first row is the header), plus inline
 * bold and links.
 */
export function BlogContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const nodes: ReactNode[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) rows.push(cells(lines[i++]));
      i--;
      const [head, ...body] = rows;
      nodes.push(
        <div key={`t${i}`} className="my-6 overflow-x-auto rounded-xl border">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <thead className="bg-muted/60">
              <tr>
                {head.map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {body.map((r, ri) => (
                <tr key={ri}>
                  {r.map((c, ci) => (
                    <td key={ci} className="px-4 py-3 align-top text-muted-foreground">{inline(c)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }
    if (line.startsWith("## ")) nodes.push(<h2 key={i} className="text-2xl font-semibold mt-8 mb-4">{line.slice(3)}</h2>);
    else if (line.startsWith("### ")) nodes.push(<h3 key={i} className="text-xl font-semibold mt-6 mb-3">{line.slice(4)}</h3>);
    else if (line.startsWith("- ")) nodes.push(<li key={i} className="ml-4 mb-1 text-muted-foreground">{inline(line.slice(2))}</li>);
    else if (/^\d+\. /.test(line)) nodes.push(<li key={i} className="ml-4 mb-1 text-muted-foreground list-decimal">{inline(line.replace(/^\d+\. /, ""))}</li>);
    else if (line.trim() === "") nodes.push(<div key={i} className="h-2" />);
    else nodes.push(<p key={i} className="text-muted-foreground leading-relaxed mb-3">{inline(line)}</p>);
  }
  return <>{nodes}</>;
}
