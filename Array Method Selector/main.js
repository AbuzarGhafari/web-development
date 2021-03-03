const want = document.getElementById('want');
let previouslyShow = [document.getElementById('info-nothing')];

want.addEventListener('change', (e) => {
    if (previouslyShow.length > 0) {
        previouslyShow.forEach((elem) => {
            elem.classList.remove('show');
        });
        previouslyShow = [];
    }
    const want_values = want.value.split('-');
    want_values.forEach((elem) => {
        const option = document.getElementById(`info-${elem}`);
        option.classList.add('show');
        previouslyShow.push(option);
    });
});
