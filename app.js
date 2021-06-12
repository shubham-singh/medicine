document.addEventListener('DOMContentLoaded', () => {
    const mg = document.createElement('h1');
    const today = new Date();
    const startDate = new Date(2021, 05, 11, 0, 0, 0);
    const difference = today - startDate;
    const days =  parseInt(difference / (1000 * 3600 * 24));
    if(days % 3 === 0) {
        mg.innerHTML = '3mg';
    } else {
        mg.innerHTML = '2mg';
    }
    document.body.appendChild(mg);
});