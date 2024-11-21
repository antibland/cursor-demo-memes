import { MemeGallery } from "@/components/MemeGallery";

type Meme = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
};

type MemeResponse = {
  success: boolean;
  data: {
    memes: Meme[];
  };
};

async function getMemes() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const data: MemeResponse = await res.json();

  const shuffled = data.data.memes.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 20);
}

export default async function Home() {
  const memes = await getMemes();

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Random Meme Gallery
      </h1>

      <MemeGallery memes={memes} />
    </main>
  );
}
