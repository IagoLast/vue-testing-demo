interface IGetDetailsArgs {
  /**
   * A string with a query containing the name of a cocktail
   */
  query?: string;
}

interface ISearchResponse {
  drinks: IDrink[];
}

function getDetails(args: IGetDetailsArgs): Promise<ISearchResponse> {
  const url = new URL(`http://localhost:3001/search/${args.query}`);

  return fetch(url, { method: "GET" })
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

export default {
  getDetails,
};
