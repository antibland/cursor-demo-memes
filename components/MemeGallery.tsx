"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

type Meme = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
};

type MemeGalleryProps = {
  memes: Meme[];
};

export function MemeGallery({ memes }: MemeGalleryProps) {
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

  const getMemesByColumn = (columnIndex: number, totalColumns: number) => {
    return memes.filter((_, index) => index % totalColumns === columnIndex);
  };

  const columnAnimations = [
    // First column: Move up
    {
      animate: {
        y: [-5, 5],
      },
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
    // Second column: Move down
    {
      animate: {
        y: [5, -5],
      },
      transition: {
        duration: 4.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
    // Third column: Move up
    {
      animate: {
        y: [-5, 5],
      },
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  ];

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex w-auto -ml-6"
      columnClassName="pl-6 bg-clip-padding"
    >
      {[0, 1, 2].map((columnIndex) => (
        <motion.div key={columnIndex} {...columnAnimations[columnIndex]}>
          {getMemesByColumn(columnIndex, 3).map((meme) => (
            <Card
              key={meme.id}
              className="mb-6 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-4">
                <div className="relative w-full">
                  <Image
                    src={meme.url}
                    alt={meme.name}
                    width={meme.width}
                    height={meme.height}
                    className="rounded-md w-full h-auto"
                  />
                </div>
                <h2 className="mt-4 text-sm font-medium text-center line-clamp-2">
                  {meme.name}
                </h2>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      ))}
    </Masonry>
  );
}
