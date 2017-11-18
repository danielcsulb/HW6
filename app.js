// var CandidateList = [
//     { name: 'Peter Parker', likes: '700' },
//     { name: 'Tony Stark', likes: '135' },
//     { name: 'Dash', likes: '0' },
// ];

// var printList = function() {
//     candidateList.innerHTML = name;
// }



function addLike(r) {
    var a = r.parentNode.parentNode.cells[1].textContent;
    var b = parseInt(a) + 1;
    r.parentNode.parentNode.cells[1].innerHTML = b;

}


function deleteRow(r) {
    var c = r.parentNode.parentNode.rowIndex;
    document.getElementById("candidateTable").deleteRow(c);
}




function createCandidate() {

    if (document.getElementById('candidateInput').value == '') {
        alert('Please enter a name');
        return;

    } else {


        var x = document.getElementById("candidateTable").rows.length;
        var table = document.getElementById("candidateTable");
        var row = table.insertRow(x);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = document.getElementById('candidateInput').value;
        cell2.innerHTML = '<p id ="likeNum"> 0 </p>';
        cell3.innerHTML = '<button style="font-size:20px" onclick="addLike(this)">Like <i class="fa fa-thumbs-o-up"></i></button>';
        cell4.innerHTML = '<button style="font-size:20px" onclick="deleteRow(this)">Delete <i class="fa fa-eraser"></i></button>';
        document.getElementById('candidateForm').innerHTML = '<h3>Create a Candidate</h3><input style="font-size:20px" type="text" id="candidateInput" placeholder="Name"><button style="font-size:20px" onclick="createCandidate()">Create<i class="fa fa-user-plus"></i></button>';
    }
}