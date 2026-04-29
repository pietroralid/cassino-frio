import Slideshow from "./slideshow";

const slides = [
  {
    src: "/images/cassino-extensao.jpg",
    eyebrow: "A maior praia em extensao",
    title: "Um horizonte que parece nao terminar",
    description:
      "A Praia do Cassino se estende pelo extremo sul do Brasil, em Rio Grande, e e conhecida como uma das maiores faixas de areia continua do mundo.",
    fact: "Mais de 200 km de costa entre Rio Grande e a regiao do Chui.",
    credit: "Foto: Juliao Freitas Martinez, CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Maior_praia_do_Mundo_-_Praia_do_Cassino.jpg",
  },
  {
    src: "/images/cassino-molhes.jpg",
    eyebrow: "Entrada da Barra",
    title: "Os molhes marcam a paisagem",
    description:
      "No norte do Cassino, os Molhes da Barra aparecem como um dos pontos mais reconhecidos da regiao, ligados ao acesso ao porto de Rio Grande.",
    fact: "E um dos passeios classicos para quem visita o balneario.",
    credit: "Foto: Paula Cavalheiro, CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Molhes_da_Barra.JPG",
  },
  {
    src: "/images/cassino-pescadores.jpg",
    eyebrow: "Vida local",
    title: "Pesca, vento e rotina de beira-mar",
    description:
      "A praia nao e so paisagem: ela tambem faz parte da rotina de moradores, pescadores, veranistas e gente que atravessa o litoral gaucho.",
    fact: "O litoral aberto costuma ter vento forte e mar em constante mudanca.",
    credit: "Foto: Ronaldo Morgado Segundo, CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Praia_do_Cassino_-_Pescadores.jpg",
  },
  {
    src: "/images/cassino-praia.jpg",
    eyebrow: "Balneario Cassino",
    title: "Areia larga, ceu baixo e Atlantico Sul",
    description:
      "O visual do Cassino tem cara propria: uma praia extensa, plana e aberta, com espaco de sobra para caminhar, pedalar e acompanhar o tempo virar.",
    fact: "Fica no municipio de Rio Grande, no sul do Rio Grande do Sul.",
    credit: "Foto: Mauren da Silva Rodrigues, CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Praia_do_Cassino.JPG",
  },
  {
    src: "/images/cassino-maior-praia.jpg",
    eyebrow: "Fim de tarde",
    title: "Quando a escala da praia aparece",
    description:
      "Nas imagens mais abertas, a principal impressao e a escala: pouca coisa interrompe a linha entre areia, agua e ceu.",
    fact: "O trecho e frequentemente citado como a maior praia maritima continua do planeta.",
    credit: "Foto: Juliao Freitas Martinez, CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Maior_praia_do_Mundo_-_Praia_do_Cassino.jpg",
  },
];

export default function Home() {
  return <Slideshow slides={slides} />;
}
