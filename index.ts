const jsonReq = new XMLHttpRequest();
jsonReq.open("GET", 'data.json', false);
// jsonReq.send();
// const json = JSON.parse(jsonReq.responseText);
const json = [
    {
        text: "Choice 1",
        choices: [
            ["Be awesome", 1],
            ["Destroy the world", 2]
        ],
        isEnd: false
    },
    {
        text: "Be awesome",
        choices: [],
        isEnd: true
    },
    {
        text: "Destroy the world",
        choices: [],
        isEnd: true
    }
]
var textArea;
var choicesList;
window.addEventListener('load', () => {
    console.log('dont');
    textArea = document.getElementById('textarea');
    choicesList = document.getElementById('choices');

    // const choicesText = (json[0].choices as Array<[string, number]>).map(x => `<button onclick="clickChoice(${x[1]})">${x[0]}</button>`).join();
    // choicesList.innerHTML = choicesText;
    // textArea.innerHTML = json[0].text;
    clickChoice(0);
});


function clickChoice(x: number) {
    textArea.innerHTML = json[x].text;
    if(json[x].isEnd) {
        choicesList.outerHTML = `<button onclick="window.location.reload(true)">Reload</button>`;
        return;
    }
    const choicesText = (json[x].choices as Array<[string, number]>).map(x => `<li><button onclick="clickChoice(${x[1]})">${x[0]}</button></li>`).join('');
    choicesList.innerHTML = choicesText;
}