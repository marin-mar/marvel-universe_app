class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=fdc3403625ab83ef45aae10672f12243';
  // _apiKey = 'apikey=fdc372f12243';
  baseCharactersOffset = 0;
  character = [];

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async (limit = 100, offset = this.baseCharactersOffset) => {
    const res = await this.getResource(
      // `${this._apiBase}characters?modifiedSince=2000-01-01&orderBy=modified&offset=${offset}&limit=${limit}&${this._apiKey}`
      `${this._apiBase}characters?offset=${offset}&limit=${limit}&${this._apiKey}`
    );

    res.data.results.forEach((item) => {
      this.baseCharactersOffset++;
      if (item.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') {
        this.character.push(item);
      }
    });
    return this.character.map(this._transformCharacter);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    return this._transformCharacter(res.data.results[0]);
  };

  _transformCharacter = (character) => {
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
}

export default MarvelService;
