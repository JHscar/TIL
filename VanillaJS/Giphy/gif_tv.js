const content = ['cat','dog','gd','bigbang'];

function searchTV() {
    const keyword = content[Math.floor(Math.random() * content.length)];
    const URL = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${API_KEY}`;

    const GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET',URL);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', e => {
        const rawData = e.target.response;
        const parseData = JSON.parse(rawData);
        pushToTvDOM(parseData);
    });
}

const tvArea = document.querySelector('#js-tv-area');

function pushToTvDOM(parseData) {
    tvArea.innerHTML = null;
    const dataSet = parseData.data;
    let i = 0;

    setInterval(() => {
        const imgURL = dataSet[i].images.fixed_height.url;
        tvArea.innerHTML = `<img src="${imgURL}" class="img-center" />`;
        i++;
        if(i>=dataSet.length) i = 0;
    }, 3000);
}

document.addEventListener("DOMContentLoaded", searchTV);

