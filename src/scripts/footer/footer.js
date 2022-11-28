export const setCurrentDate = (footer) => {
    const date = new Date(),
        year = date.getFullYear();
    footer.innerText = year;
}