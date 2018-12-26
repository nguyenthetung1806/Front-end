document.addEventListener("DOMContentLoaded", function (event) {
    console.log('Yeu cau 1')
    console.log(document.getElementById('song_container'));

    console.log('Yeu cau 2')
    var songContainerChilds = document.getElementById('song_container').childNodes;
    for (var i = 0; i < songContainerChilds.length; i++) {
        if (songContainerChilds[i].className == "song") {
            console.log(songContainerChilds[i])
        }
    }

    console.log('Yeu cau 3')
    var songsChilds = document.getElementsByClassName('song');
    for (var i = 0; i < songsChilds.length; i++) {
        console.log(songsChilds[i])
        subSongsChilds = songsChilds[i].childNodes;
        for (var j = 0; j < subSongsChilds.length; j++) {
            if (subSongsChilds[j].className == "artist" || subSongsChilds[j].className == "title") {
                console.log(subSongsChilds[j].innerHTML)
            }
        }
    }

    // yeu cau 4
    var buttons = document.getElementsByTagName('i');

    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML == "Delete") {
            buttons[i].addEventListener('click', function () {
                console.log("Yeu cau 4")
                this.parentElement.remove()
            })
        }
    }

    // yeu cau 5
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML == "Edit") {
            buttons[i].addEventListener('click', function () {
                console.log("Yeu cau 5")
                console.log(this.parentElement.getAttribute('song_id'))
            })
        }
    }

    // yeu cau 6
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].innerHTML == "More") {
            buttons[i].addEventListener('click', function () {
                console.log(this.parentElement.getAttribute('song_id'))
                var siblings = this.parentElement.childNodes;
                console.log("Yeu cau 6")
                for (j = 0; j < siblings.length; j++) {
                    if (siblings[j].className == "artist" || siblings[j].className == "title") {
                        console.log(siblings[j].innerHTML)
                    }
                }
            })
        }
    }

    // yeu cau 7
    addTimes = 0
    document.getElementById('btn-add').addEventListener('click', function () {
        if (addTimes == 0) {
            addTimes = 1
            document.getElementById('song_container').innerHTML += `<hr>`
        }
        document.getElementById('song_container').innerHTML +=
            `       <div class="song" song_id="78ab12">
                        <h4 class="title" > Girls like you</h4>
                        <h5 class="artist">Maroon 5</h5>
                        <i>Delete</i>
                        <i>Edit</i>
                        <i>More</i>
                    </div > 
                    <hr>`
    })


});