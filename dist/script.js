var listaFilmes = [
  "https://img.elo7.com.br/product/original/3E882D1/big-poster-filme-homem-aranha-sem-volta-para-casa-90x60-cm-3-poster.jpg",
  "https://br.web.img2.acsta.net/pictures/19/07/05/17/30/5167951.jpg",
  "https://lumiere-a.akamaihd.net/v1/images/homem_aranha_de_volta_ao_lar_954680af.jpeg?region=0,0,1080,1350"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}