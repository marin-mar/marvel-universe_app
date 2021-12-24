import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {

  const { loading, request, error, clearError } = useHttp();

  const apiBase = 'https://gateway.marvel.com:443/v1/public/';
  const apiKey = 'apikey=fdc3403625ab83ef45aae10672f12243';
  // const apiKey = 'apikey=fdc372f12243';
  let baseCharactersOffset = 0;
  let character = [];

  const getAllCharacters = async (limit = 100, offset = baseCharactersOffset) => {
    const res = await request(
      `${apiBase}characters?offset=${offset}&limit=${limit}&${apiKey}`
    );

    res.data.results.forEach((item) => {
      baseCharactersOffset++;
      if (item.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
        character.push(item);
      }
    });
    return character.map(transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(`${apiBase}characters/${id}?${apiKey}`);
    return transformCharacter(res.data.results[0]);
  };

  const transformCharacter = (character) => {
    return {
      id: character.id,
      name: character.name,
      description: character.description,
      thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
      homepage: character.urls[0].url,
      wiki: character.urls[1].url,
      comics: character.comics.items,
    };
  };

  return { loading, error, getAllCharacters, getCharacter, clearError };
}

export default useMarvelService;
