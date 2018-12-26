document.addEventListener("DOMContentLoaded", function (event) {
    var removeButton = document.getElementsByClassName('remove_button');

    for (var i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', function () {
            console.log(this.parentElement.remove())
        })
    }


});