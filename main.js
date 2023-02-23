const apiManager = new APIManager();
const renderer = new Renderer();

$("#load").click(function () {
  apiManager.loadData();
});

$("#display").click(function () {
  $(".user-container").empty();
  $(".friends-container").empty();
  $(".quote-container").empty();
  $(".meat-container").empty();
  $(".pokemon-container").empty();
  renderer.render(apiManager.data);
});
