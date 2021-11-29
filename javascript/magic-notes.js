showNotes()
document.querySelector(".inputContainer button").addEventListener('click', (e) => {
        let inputs = document.querySelector("textarea")
        let notes = localStorage.getItem("notes")
        console.log(inputs.value)
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes)
        }

        notesObj.push(inputs.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        inputs.value = ''
        console.log(notesObj)

        //make a box for note
        showNotes()

});
function showNotes() {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        } else {
            notesObj = JSON.parse(notes)
        }
        let html = "";
        notesObj.forEach((a, index) => {
            html += `<div class="cards-preview ${index} ">
                       <p>${a}</p>
                       <button id="${index}" onclick="deleteButton(this.id)">delete</button>
                     </div>
                    `;
        });
        let card = document.getElementById("cards");
        if (notesObj.length != 0) {
            card.innerHTML = html;
        } else {
            card.innerHTML = "Nothing to show!";
        }

}

    //delete function/////

function deleteButton(index) {
        console.log("i am deleting ", index)
        const notes = localStorage.getItem("notes")
        if (notes == null) {
            notesObj = []
        } else {
            notesObj = JSON.parse(notes);
        }
        notesObj.splice(index,1);
        localStorage.setItem("notes", JSON.stringify(notesObj))
        showNotes()

}
    //search bar
let search = document.getElementById("searchTxt");
search.addEventListener("input", () => {
        let inputval = search.value.toLowerCase();
        let cards = document.getElementsByClassName("cards-preview");
        Array.from(cards).forEach((element) => {
            let cardtxt = element.getElementsByTagName("p")[0].innerText;
            if (cardtxt.includes(inputval)) {
                element.style.display = "inline-block";
            } else {
                element.style.display = "none";
            }

        })

})
