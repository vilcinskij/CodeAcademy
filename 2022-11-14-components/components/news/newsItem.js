import { createElement } from "../functions.js";

export default function (itemClass) {
    const newsItem = createElement({ tag: 'a' });
    const newsItemLink = createElement({ tag: 'div', classes: itemClass });
    const newsItemImgContainer = createElement({ tag: 'div'});
    const newsItemImg = createElement({ tag: 'img', src: './img/main-news-1.jpg', alt: 'main-news-1' });
    const newsItemContent = createElement({ tag: 'div', classes: 'new-card-info' });
    const newsItemCategory = createElement({ tag: 'span', content: 'NAUJIENOS' });
    const newsItemTitle = createElement({ tag: 'h3', content: 'Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?' });
    const newsItemDate = createElement({ tag: 'span', content: '2022-03-23' });
   
    newsItemImgContainer.append(newsItemImg);
    newsItemContent.append(newsItemCategory, newsItemTitle, newsItemDate);
    newsItemLink.append(newsItemImgContainer, newsItemContent);
    newsItem.append(newsItemLink);
   
    return newsItem
}