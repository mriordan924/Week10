// references to the form elements
const songTitleInput = document.getElementById("song-title");
const artistNameInput = document.getElementById("artist-name");
const attendeeNameInput = document.getElementById("attendee-name");
const listenInput = document.getElementById("listen");
const newSongButton = document.getElementById("new-song");
const songsTable = document.getElementById("track");

// add song button click event
newSongButton.addEventListener("click", function (e) {
    // before adding style the rows were adding without issue, then suddenly they would load and immediately vanish. after some research i found that the page was reloading, but that using e.preventDefault would stop that.
    
    e.preventDefault();
    const songTitle = songTitleInput.value;
    const artistName = artistNameInput.value;
    const attendeeName = attendeeNameInput.value;
    const listenLink = listenInput.value;

// create a new row in the table from form
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${songTitle}</td>
        <td>${artistName}</td>
        <td>${attendeeName}</td>
        <td><a href="${listenLink}" target="_blank">Listen</a></td>
    `;

// append the new row to the table body
    songsTable.appendChild(newRow);

// clear input fields
    songTitleInput.value = "";
    artistNameInput.value = "";
    attendeeNameInput.value = "";
    listenInput.value = "";
});






   


    
    
