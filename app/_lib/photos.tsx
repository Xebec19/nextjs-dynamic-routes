export type Photos = {
  id: number;
  name: string;
  src: string;
  photographer: string;
  location: string;
};

const photos: Photos[] = [
  {
    id: 1,
    name: "Pic 1",
    src: "/img/1.jpg",
    photographer: "neom on unsplash",
    location: "unsplash",
  },
  {
    id: 2,
    name: "Pic 2",
    src: "/img/2.jpg",
    photographer: "bernd-dittrich on unsplash",
    location: "unsplash",
  },
  {
    id: 3,
    name: "Pic 3",
    src: "/img/3.jpg",
    photographer: "michael-baccin on unsplash",
    location: "unsplash",
  },
  {
    id: 4,
    name: "Pic 4",
    src: "/img/4.jpg",
    photographer: "stephan-louis on unsplash",
    location: "unsplash",
  },
];
export default photos;
