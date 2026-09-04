import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/components/ui/cn";
import type { Game } from "./types";

function formatCompactNumber(n: number) {
  try {
    return new Intl.NumberFormat("en", { notation: "compact" }).format(n);
  } catch {
    return String(n);
  }
}

export function GameCard({ game }: { game: Game }) {
  const thumbStyle = {
    backgroundImage: [
      `radial-gradient(1200px 400px at 20% 20%, ${game.accent.from}55 0%, transparent 45%)`,
      game.accent.via
        ? `radial-gradient(900px 340px at 85% 40%, ${game.accent.via}55 0%, transparent 42%)`
        : "",
      `radial-gradient(900px 380px at 45% 90%, ${game.accent.to}55 0%, transparent 45%)`,
      "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
      "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.25))",
    ]
      .filter(Boolean)
      .join(", "),
  } as const;

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white/[0.03] ring-1 ring-white/10",
        "transition duration-300 hover:-translate-y-1 hover:ring-white/20 hover:shadow-[0_28px_70px_-40px_rgba(0,0,0,0.9)]",
      )}
    >
      <div className="relative">
        <div
          className={cn(
            "aspect-[16/9] w-full",
            "bg-[#0b1022] ring-1 ring-inset ring-white/10",
          )}
          style={thumbStyle}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070A12]/80 via-[#070A12]/10 to-transparent opacity-90" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          {game.isTrending ? (
            <Badge className="bg-amber-400/10 text-amber-200 ring-amber-300/15">
              Trending
            </Badge>
          ) : null}
          {game.isNew ? (
            <Badge className="bg-emerald-400/10 text-emerald-200 ring-emerald-300/15">
              New
            </Badge>
          ) : null}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold text-zinc-50">
              {game.title}
            </h3>
            <p className="truncate text-xs text-zinc-300/80">
              by {game.creator} · {formatCompactNumber(game.plays)} plays ·{" "}
              {game.rating.toFixed(1)}★
            </p>
          </div>

          <ButtonLink
            href="#"
            variant="primary"
            size="sm"
            className={cn(
              "shrink-0",
              "translate-y-1 opacity-90 group-hover:translate-y-0 group-hover:opacity-100",
              "transition duration-300",
            )}
            aria-label={`Play ${game.title}`}
          >
            Play
          </ButtonLink>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 px-4 py-4">
        {game.tags.slice(0, 3).map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </article>
  );
}

