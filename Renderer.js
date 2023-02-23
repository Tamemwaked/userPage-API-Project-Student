class Renderer {
  constructor() {}

  renderUser(mainUser) {
    const source = $("#user-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template(mainUser);
    $(".user-container").append(newHTML);
  }

  renderFriends(friends) {
    const source = $("#friends-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template({ friends });
    $(".friends-container").append(newHTML);
  }

  renderQuote(quote) {
    const source = $("#quote-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template({ quote });
    $(".quote-container").append(newHTML);
  }

  renderText(text) {
    const source = $("#meat-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template({ text });
    $(".meat-container").append(newHTML);
  }

  renderPokemon(pokemon) {
    const source = $("#pokemon-template").html();
    const template = Handlebars.compile(source);
    const newHTML = template(pokemon);
    $(".pokemon-container").append(newHTML);
  }
  render(loadData) {
    this.renderUser(loadData.mainUser);
    this.renderFriends(loadData.mainUser.friends);
    this.renderQuote(loadData.quote);
    this.renderText(loadData.text);
    this.renderPokemon(loadData.pokemon);
  }
}
