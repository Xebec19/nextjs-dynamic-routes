import Link from "next/link";
import photos from "../_lib/photos";
import Image from "next/image";

export default function Page() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {photos.map(({ id, src, name }) => (
          <Link key={id} href={`/photo-feed/${id}`}>
            <div className="relative aspect-square border rounded-md overflow-hidden object-cover">
              <Image
                alt={name}
                src={src}
                fill
                sizes="(min-width: 768px) 20vw, 100vw"
                className="w-full object-cover aspect-square"
              />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
