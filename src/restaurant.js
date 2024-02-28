const createRestaurantHomePage = () => {
    const content =  document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const image = document.createElement('img');
    image.src = 'https://as2.ftcdn.net/v2/jpg/03/03/62/45/1000_F_303624505_u0bFT1Rnoj8CMUSs8wMCwoKlnWlh5Jiq.jpg'
    image.height='300';
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome';
    pageContent.appendChild(headline);

    const copy = document.createElement('p');
    copy.textContent = 'Good food';
    pageContent.appendChild(copy);
    content.appendChild(pageContent);

}
export default createRestaurantHomePage;