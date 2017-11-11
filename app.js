const candidates = [
    { name: 'Peter Parker', likes: '700' },
    { name: 'Tony Stark', likes: '135' },
    { name: 'dash', likes: '0' },
]

function list() {
    for (var i = 0; i < candidates.length; i++) {
        document.write((i + 1) + ": " + candidates[i] + "<br/>")

    }
}

const output = document.getElementById("output");
// output.innerHTML = 'The current messages are: ';
output2.innerHTML = list().innerHTML;