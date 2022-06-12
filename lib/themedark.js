const cardToggle = document.querySelector('.card_toggle'),
    body = document.querySelector('.page');

cardToggle.onclick = () => {
    body.classList.toggle('is-dark');
}
