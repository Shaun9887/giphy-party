const $input = $("#search");
const $gifs = $("#gifs");

function getGif(term) {
    let numResults = term.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newGif = $("<img>", { src: term.data[randomIdx].images.original.url });
        $gifs.append($newGif);
    }
}

$("form").on('submit', async function (e) {
    e.preventDefault();
    
    let searchTerm = $input.val();
    $input.val('');

    const res = await axios.get('http://api.giphy.com/v1/gifs/search', { params: { q: searchTerm, api_key: 'y7OilMZPYshpO3jtQmTl9RdKjRCVOwUx' } });
    
    getGif(res.data);
});

$("#removeBtn").on("click", function() {
  $gifs.empty();
});

