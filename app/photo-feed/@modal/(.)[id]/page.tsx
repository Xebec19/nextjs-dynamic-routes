import photos, { Photos } from "@/app/_lib/photos";
import Modal from "@/app/components/modal";
import Image from "next/image";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: Photos = photos.find((p) => p.id === +id)!;

  return (
    <Modal>
      <div className="max-w-sm bg-black mx-auto">
        <div className="mx-auto border rounded-lg p-2">
          <div>
            <h1 className="text-center text-3xl font-bold my-4">
              {photo.name}
            </h1>
          </div>
          <div className="relative aspect-square rounded-md overflow-hidden">
            <Image
              alt={photo.name}
              src={photo.src}
              fill
              sizes="(min-width: 768px) 80vw, 100vw"
              className="w-full object-cover aspect-square"
            />
          </div>
          <div className=" py-4">
            <h3>{photo.photographer}</h3>
            <h3>{photo.location}</h3>
          </div>
        </div>
      </div>
    </Modal>
  );
}
