class APIManager {
  constructor() {
    this.data = {};
  }
  createNewMainUser = (randomUsers) => {
    const firstName = randomUsers.results[0].name.first;
    const lastName = randomUsers.results[0].name.last;
    const picture = randomUsers.results[0].picture.medium;
    const city = randomUsers.results[0].location.city;
    const state = randomUsers.results[0].location.state;
    let friends = {};
    for (let i = 1; i < randomUsers.results.length; i++) {
      let firstName = randomUsers.results[i].name.first;
      let lastName = randomUsers.results[i].name.last;
      friends[i] = { firstName: firstName, lastName: lastName };
    }
    const mainUser = {
      FirstName: firstName,
      LastName: lastName,
      Picture: picture,
      city: city,
      state: state,
      friends: friends,
    };
    return mainUser;
  };
  loadUserData() {
    return $.get("https://randomuser.me/api/?results=7").then(
      this.createNewMainUser
    );
  }
  createNewQuote(loadedQuote) {
    const quote = loadedQuote.quote;
    return quote;
  }
  loadQuoteData() {
    return $.get("https://api.kanye.rest/").then(this.createNewQuote);
  }

  createNewText(loadedText) {
    const text = loadedText[0];

    return text;
  }
  loadTextData() {
    return $.get("https://baconipsum.com/api/?type=all-meat&paras=1").then(
      this.createNewText
    );
  }
  createPokemon = (loadedPokemon) => {
    const pokemonName = loadedPokemon.name;
    const pokemonPicture = loadedPokemon.sprites.front_default;
    let pokemon = { pokemonName, pokemonPicture };
    return pokemon;
  };
  loadPokemonData() {
    let randomId = Math.floor(Math.random() * 949);
    return $.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(
      this.createPokemon
    );
  }
  loadData() {
    let userPromise = this.loadUserData();
    let pokemonPromise = this.loadPokemonData();
    let quotePromise = this.loadQuoteData();
    let textPromise = this.loadTextData();

    return Promise.all([
      userPromise,
      pokemonPromise,
      quotePromise,
      textPromise,
    ]).then((result) => {
      this.data = {
        mainUser: result[0],
        pokemon: result[1],
        quote: result[2],
        text: result[3],
      };
    });
  }
}
