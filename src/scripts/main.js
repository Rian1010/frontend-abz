const currentDate = document.getElementById('currentDate');

const getCurrentDate = async () => {
    const { setCurrentDate } = await import('./footer/footer.js');
    setCurrentDate(currentDate);
}

if (currentDate !== null) {
    getCurrentDate();
}
