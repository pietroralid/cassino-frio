import Slideshow from "./slideshow";

const slides = [
  {
    src: "/images/cassino-praia.jpg",
    title: "Praia do Cassino",
    caption: "A faixa de areia ampla no litoral de Rio Grande, RS.",
  },
  {
    src: "/images/cassino-maior-praia.jpg",
    title: "Cassino, Rio Grande",
    caption: "Um registro da praia conhecida pela sua longa extensao.",
  },
];

export default function Home() {
  return <Slideshow slides={slides} />;
}
