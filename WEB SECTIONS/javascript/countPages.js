var gridItem = document.querySelectorAll('.gridItem');
for (let i = 0; i < gridItem.length; i++) {
    var itag = document.createElement('i');
    itag.innerHTML = i + 1;
    itag.classList.add('pageCount');
    gridItem[i].appendChild(itag);
}