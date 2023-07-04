const giphyApi = "http://api.giphy.com/v1/gifs/search?";
const giphyApiKey = "&api_key=Tk61CN9Ug1nBOIAuNAvR8aOeXE69uj3Q";
const queryString = "q=";

const $userInput = $("#userInput");
const $imgDisplay = $("#imgDisplay");

// Display giphy to the page
function displayGiphy(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIndex = Math.floor(Math.random() * numResults);
    let $newColumn = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGiphy = $("<img>", {
      src: res.data[randomIndex].images.original.url,
      class: "w-100",
    });
    $newColumn.append($newGiphy);
    $imgDisplay.append($newColumn);
  }
}

// Event Listener for search button
$("form").on("submit", async function (evt) {
  evt.preventDefault();

  // Call api using user input
  let searchInput = $userInput.val();
  $userInput.val("");

  const results = await axios.get("http://api.giphy.com/v1/gifs/search?", {
    params: {
      q: searchInput,
      api_key: "Tk61CN9Ug1nBOIAuNAvR8aOeXE69uj3Q",
    },
  });
  console.log(results);
  displayGiphy(results.data);
});

$("#removeBtn").on("click", function () {
  $imgDisplay.empty();
});
