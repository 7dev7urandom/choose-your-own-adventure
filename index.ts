const jsonReq = new XMLHttpRequest();
jsonReq.open("GET", 'data.json', false);
jsonReq.send();
const json = JSON.parse(jsonReq.responseText);

var textArea;
var choicesList;
window.addEventListener('load', () => {
    textArea = document.getElementById('textarea');
    choicesList = document.getElementById('choices');

    clickChoice(0, false);
    history.replaceState({ page: 0 }, '');
});

window.onpopstate = ({ state }) => clickChoice(state.page, false);

function clickChoice(x: number, historyMod = true) {
    textArea.innerHTML = json[x].text;
    if(historyMod) history.pushState({ page: x }, json[x].text);
    if(json[x].isEnd) choicesList.innerHTML = `<button onclick="window.location.reload(true)">Reload</button>`;
    else {
        const choicesText = (json[x].choices as Array<[string, number]>).map(x => `<li><button onclick="clickChoice(${x[1]}, true)">${x[0]}</button></li>`).join('');
        choicesList.innerHTML = choicesText;
    }
}