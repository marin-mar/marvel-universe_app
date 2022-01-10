import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const apiKey = 'apikey=fdc3403625ab83ef45aae10672f12243';
  // const apiKey = 'apikey=fdc372f12243';
  let baseCharOffset = 0;
  let baseComicOffset = 0;
  let character = [];
  let comics = [];

  const getAllCharacters = async (limit = 100, offset = baseCharOffset) => {
    const res = await request(`${apiBase}characters?offset=${offset}&limit=${limit}&${apiKey}`);

    res.data.results.forEach((item) => {
      baseCharOffset++;
      if (item.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
        character.push(item);
      }
    });
    return character.map(transformCharacter);
  };

  const getAllComics = async (limit = 100, offset = baseComicOffset) => {
    const res = await request(
      `${apiBase}comics?dateDescriptor=thisMonth&orderBy=issueNumber&limit=${limit}&offset=${offset}&${apiKey}`
    );
    res.data.results.forEach((item) => {
      baseComicOffset++;
      if (item.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
        comics.push(item);
      }
    });
    return comics.map(transformComics);
  };

  const getCharacter = async (id) => {
    const res = await request(`${apiBase}characters/${id}?${apiKey}`);
    return transformCharacter(res.data.results[0]);
  };

  const getCharacterByName = async (charName) => {
    const res = await request(`${apiBase}characters?name=${charName}&${apiKey}`);
    // return transformCharacter(res.data.results[0]);
    return res.data.results.map(transformCharacter);
  };

  const getComic = async (id) => {
    const res = await request(`${apiBase}comics/${id}?${apiKey}`);
    return transformComics(res.data.results[0]);
  };

  const transformCharacter = (character) => {
    return {
      id: character.id,
      name: character.name || 'Character',
      description: character.description || 'There is no description',
      thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
      homepage: character.urls[0].url,
      wiki: character.urls[1].url,
      comics: character.comics.items,
    };
  };

  const transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description || 'There is no description',
      pageCount: comics.pageCount ? `${comics.pageCount} pages` : 'No information about the number of pages',
      thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
      language: comics.textObjects.language || 'en-us',
      price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'not available',
    };
  };

  return { loading, error, getAllCharacters, getCharacter, getCharacterByName, clearError, getAllComics, getComic };
};

export default useMarvelService;
