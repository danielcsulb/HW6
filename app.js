const candidates = [
    { name: 'Peter Parker', likes: '700' },
    { name: 'Tony Stark', likes: '135' },
    { name: 'dash', likes: '0' },
]


var likes = 0;

function like() {
    document.getElementById("show").innerHTML = likes;
    likes = likes + 1;
}

function candidatesList() {

    var item = document.getElementById('candidateInput').value

    var text = document.createTextNode(item)

    var newItem = document.createElement('li')

    newItem.appendChild(text)

    document.getElementById('candidatesList').appendChild(newItem)
}

// function list() {
// for (var i = 0; i < candidates.length; i++) {
// document.write((i + 1) + ": " + candidates[i] + "<br/>")

// }
// }

// const output = document.getElementById("output");
// output.innerHTML = 'The current messages are: ';
// output2.innerHTML = list().innerHTML;