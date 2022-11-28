export const setCurrentDate = (footer) => {
    let date = new Date(),
        year = date.getFullYear();
    footer.innerText = year;
}