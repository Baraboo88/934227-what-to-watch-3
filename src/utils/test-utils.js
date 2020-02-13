export const promoFilmData = {
  promoFilmName: `The Grand Budapest Hotel`,
  promoFilmGenre: `Drama`,
  promoFilmDate: 2014
};

export const titleClickHandler = () => {};

export const mockFilms = [
  {
    id: 1,
    name: `Fantastic Beasts: The Crimes of Grindelwald`,
    img: `./img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  },
  {
    id: 2,
    name: `Bohemian Rhapsody`,
    img: `./img/bohemian-rhapsody.jpg`
  },
  {
    id: 3,
    name: `Macbeth`,
    img: `./img/macbeth.jpg`
  },
  {
    id: 4,
    name: `Aviator`,
    img: `./img/aviator.jpg`
  },
  {
    id: 5,
    name: `We need to talk about Kevin`,
    img: `./img/we-need-to-talk-about-kevin.jpg`
  }
];

export const findByAttr = (app, attr) => {
  return app.find(`[data-test='${attr}']`);
};
