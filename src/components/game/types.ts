export type GameTag =
  | "Puzzle"
  | "Weird"
  | "AI Experiment"
  | "Action"
  | "Cozy"
  | "30s";

export type Game = {
  id: string;
  title: string;
  creator: string;
  plays: number;
  rating: number; // 0..5
  tags: GameTag[];
  accent: {
    from: string;
    via?: string;
    to: string;
  };
  isNew?: boolean;
  isTrending?: boolean;
};

