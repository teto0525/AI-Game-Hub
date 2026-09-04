import { GameSection } from "@/components/game/GameSection";
import type { Game } from "@/components/game/types";
import { Badge } from "@/components/ui/Badge";
import { Button, ButtonLink } from "@/components/ui/Button";

const demoGames: Game[] = [
  {
    id: "neon-drift",
    title: "Neon Drift Circuit",
    creator: "SynthPanda",
    plays: 18420,
    rating: 4.6,
    tags: ["Action", "AI Experiment", "30s"],
    accent: { from: "#22d3ee", via: "#a78bfa", to: "#f472b6" },
    isTrending: true,
  },
  {
    id: "maze-of-maybe",
    title: "Maze of Maybe",
    creator: "LoopLab",
    plays: 9123,
    rating: 4.3,
    tags: ["Puzzle", "Cozy", "30s"],
    accent: { from: "#34d399", via: "#60a5fa", to: "#a78bfa" },
    isTrending: true,
  },
  {
    id: "tiny-alchemy",
    title: "Tiny Alchemy: Glitch Edition",
    creator: "itchoAI",
    plays: 14402,
    rating: 4.7,
    tags: ["Weird", "Puzzle", "AI Experiment"],
    accent: { from: "#f59e0b", via: "#f472b6", to: "#22c55e" },
    isTrending: true,
  },
  {
    id: "echoes-30",
    title: "Echoes in 30 Seconds",
    creator: "PixelSage",
    plays: 6021,
    rating: 4.1,
    tags: ["30s", "Cozy", "Weird"],
    accent: { from: "#60a5fa", via: "#22c55e", to: "#f472b6" },
    isTrending: true,
  },
  {
    id: "orbital-puzzle",
    title: "Orbital Logic",
    creator: "NovaNook",
    plays: 835,
    rating: 4.5,
    tags: ["Puzzle", "AI Experiment"],
    accent: { from: "#a78bfa", via: "#22d3ee", to: "#f59e0b" },
    isNew: true,
  },
  {
    id: "garden-keeper",
    title: "Garden Keeper: Idle Bloom",
    creator: "CozyForge",
    plays: 1230,
    rating: 4.2,
    tags: ["Cozy", "30s"],
    accent: { from: "#22c55e", via: "#34d399", to: "#60a5fa" },
    isNew: true,
  },
  {
    id: "void-merchant",
    title: "Void Merchant",
    creator: "MoonStack",
    plays: 1560,
    rating: 4.4,
    tags: ["Weird", "Action", "AI Experiment"],
    accent: { from: "#f472b6", via: "#a78bfa", to: "#22d3ee" },
    isNew: true,
  },
  {
    id: "micro-myth",
    title: "Micro Myth: One Turn",
    creator: "TurnBasedAI",
    plays: 990,
    rating: 4.0,
    tags: ["Puzzle", "Weird", "30s"],
    accent: { from: "#f59e0b", via: "#60a5fa", to: "#a78bfa" },
    isNew: true,
  },
];

const trending = demoGames.filter((g) => g.isTrending);
const newlyAdded = demoGames.filter((g) => g.isNew);

export default function Home() {
  return (
    <div className="min-h-dvh">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#070A12]" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="absolute top-24 left-[-180px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-220px] h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-10 border-b border-white/8 bg-[#070A12]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/6 ring-1 ring-white/10">
              <span className="text-base font-semibold">AI</span>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-zinc-50">AI Game Hub</p>
              <p className="text-xs text-zinc-400">Play instantly. No downloads.</p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {["All", "Trending", "New", "30s", "Puzzle", "Weird"].map((t) => (
              <Button key={t} variant="ghost" size="sm">
                {t}
              </Button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href="#" variant="secondary" size="sm">
              Upload
            </ButtonLink>
            <ButtonLink href="#" variant="primary" size="sm">
              Login
            </ButtonLink>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-violet-400/10 text-violet-200 ring-violet-300/15">
                Steam-inspired
              </Badge>
              <Badge className="bg-white/6 text-zinc-200">Card grid</Badge>
              <Badge className="bg-white/6 text-zinc-200">Instant play</Badge>
            </div>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
              Discover AI-made mini games — and play in one click.
            </h1>
            <p className="mt-3 max-w-2xl text-pretty text-sm leading-6 text-zinc-300/80">
              A modern, dark, itch-style marketplace for tiny experiments, puzzles,
              and weird prototypes. Curated sections, big thumbnails, and clear
              CTAs.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="relative flex-1">
                <input
                  placeholder="Search games, creators, tags…"
                  className="h-11 w-full rounded-xl bg-white/4 px-4 pr-24 text-sm text-zinc-50 ring-1 ring-white/10 outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-violet-500/50"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <Button size="sm" variant="secondary">
                    Filters
                  </Button>
                </div>
              </div>
              <Button variant="primary" className="h-11 px-5">
                Explore
              </Button>
            </div>
          </div>

          <div className="rounded-3xl bg-white/[0.03] p-5 ring-1 ring-white/10">
            <p className="text-sm font-semibold text-zinc-50">Today’s picks</p>
            <p className="mt-1 text-sm text-zinc-400">
              Fast to try, fun to share.
            </p>
            <div className="mt-4 grid gap-3">
              {[
                { label: "⚡ 30-second games", value: "12 new" },
                { label: "🔥 Trending now", value: "4 hot" },
                { label: "🧠 Puzzle drops", value: "7 fresh" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between rounded-2xl bg-white/4 px-4 py-3 ring-1 ring-white/8"
                >
                  <span className="text-sm text-zinc-200">{s.label}</span>
                  <span className="text-xs text-zinc-400">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <GameSection
          title="Trending"
          subtitle="Popular right now — big thumbnails, instant play."
          games={trending}
          rightSlot={
            <Button variant="secondary" size="sm">
              View all
            </Button>
          }
        />

        <GameSection
          title="New games"
          subtitle="Fresh uploads from creators."
          games={newlyAdded}
          rightSlot={
            <Button variant="secondary" size="sm">
              Latest
            </Button>
          }
        />

        <footer className="mt-14 border-t border-white/8 pt-8 text-sm text-zinc-400">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} AI Game Hub</p>
            <div className="flex items-center gap-3">
              <ButtonLink href="#" variant="ghost" size="sm">
                About
              </ButtonLink>
              <ButtonLink href="#" variant="ghost" size="sm">
                Terms
              </ButtonLink>
              <ButtonLink href="#" variant="ghost" size="sm">
                Contact
              </ButtonLink>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

