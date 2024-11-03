let photo = document.querySelectorAll ('gallery .photos img')
let prev = document.querySelector ('.prev')
let next = document.querySelector('.next')
let i = 0;
prev.onClick =function() {
    photo[i].style.display = 'none';
    i--;
    if (i < 0) {
        i = photo.lenght - 1;
    }
    photo[i].style.display = 'block';
}
next.onClick = function() {
    photo[i].style.display = 'none';
    i++;
    if (i >= 0) {
        i = 0
    }
    photo[i].style.display = 'block';
}