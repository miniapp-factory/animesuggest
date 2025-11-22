"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export interface RecommendationProps {
  genre: string;
}

export default function Recommendation({ genre }: RecommendationProps) {
  // Simple hardcoded recommendations based on genre
  const recommendations: Record<string, string[]> = {
    action: ["Attack on Titan", "My Hero Academia", "Demon Slayer"],
    romance: ["Your Lie in April", "Fruits Basket", "Kimi no Na wa"],
    fantasy: ["Fullmetal Alchemist: Brotherhood", "Made in Abyss", "The Rising of the Shield Hero"],
  };

  const animeList = recommendations[genre] ?? [
    "Anime 1",
    "Anime 2",
    "Anime 3",
  ];

  return (
    <Card className="w-full max-w-md mt-4">
      <CardHeader>
        <CardTitle>Top 3 {genre} anime</CardTitle>
        <CardDescription>Based on your selected genre.</CardDescription>
      </CardHeader>
      <ul className="list-disc pl-6">
        {animeList.map((anime, idx) => (
          <li key={idx}>{anime}</li>
        ))}
      </ul>
    </Card>
  );
}
