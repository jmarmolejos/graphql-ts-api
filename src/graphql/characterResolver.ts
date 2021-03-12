const https = require('https');

export type Character = {
  name: string;
};

type CharactersResolverResult = {
  items: Character[];
};

const fetchAsync = name => {
  return new Promise((resolve, reject) => {
    https
      .get(`https://swapi.dev/api/people/?search=${name}`, resp => {
        let data = '';

        resp.on('data', chunk => {
          data += chunk;
        });

        resp.on('end', () => {
          resolve(JSON.parse(data));
        });
      })
      .on('error', err => {
        reject(err);
      });
  });
};

const charactersResolver = async (args: { name?: string }): Promise<CharactersResolverResult> => {
  const apiResponse: any = await fetchAsync(args.name ?? "");
  return { items: apiResponse.results.map((i: any) => ({
    ...i,
    hairColor: i.hair_color
  })) };
};

export default charactersResolver;
