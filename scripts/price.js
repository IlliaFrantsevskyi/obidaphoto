Array.prototype.last = function(){
    return this[this.length - 1];
};

window.addEventListener('DOMContentLoaded', function () {
    generateStudioComponents();
});

function generateStudioComponents() {    
    for (const studio of studios) {
        generateStudioComponent(studio);
    }
}

function generateStudioComponent(studio) {
    const id = studio.link.split('/').filter(el => el !== "").last();

    const studioDiv = document.createElement('div');
    const studioInfoDiv = document.createElement('div');
    const carouselDiv = document.createElement('div');
    const studioNameHeading = document.createElement('h2');
    const studioNameSpan = document.createElement('span');
    const studioAddressParagraph = document.createElement('p');
    const studioAddressSpan = document.createElement('span');
    const studioAddressIcon = document.createElement('i');
    const studioInstaParagraph = document.createElement('p');
    const studioInstaIcon = document.createElement('i');
    const studioInstaAnchor = document.createElement('a');
    const studioPricesDiv = document.createElement('div');
    const studioPricesHeading = document.createElement('h3');
    const studioPricesHeadingSpan = document.createElement('span');
    const studioPrice1Paragraph = document.createElement('p');
    const studioPrice1Span = document.createElement('span');
    const studioPrice2Paragraph = document.createElement('p');
    const studioPrice2Span = document.createElement('span');
    const studioPrice3Paragraph = document.createElement('p');
    const studioPrice3Span = document.createElement('span');
    const studioPriceHryvnia = document.createElement("span");
    const studioPrice1Hour = document.createElement("span");
    const studioPrice2Hours = document.createElement("span");
    const studioPrice3Hours = document.createElement("span");

    studioDiv.classList.add("studio"/*, "row"*/);
    studioInfoDiv.classList.add("studio-info"/*, "col-4"*/);
    carouselDiv.classList.add("carousel", "carousel" + "-" + id/*, "col-8"*/);
    studioNameHeading.classList.add("studio-name");
    studioAddressParagraph.classList.add("studio-location");
    studioInstaParagraph.classList.add("studio-insta");
    studioPrice1Paragraph.classList.add("studio-price");
    studioPrice2Paragraph.classList.add("studio-price");
    studioPrice3Paragraph.classList.add("studio-price");
    studioAddressIcon.classList.add("fas", "fa-map-marker-alt", "studio-icon");
    studioInstaIcon.classList.add("fab", "fa-instagram", "studio-icon");
    studioPricesDiv.classList.add("studio-prices");
    studioPricesHeading.classList.add("prices-heading");
    studioPrice1Span.classList.add("price-number");
    studioPrice2Span.classList.add("price-number");
    studioPrice3Span.classList.add("price-number");

    // carouselDiv.setAttribute("data-flickity", '{ "imagesLoaded": true, "percentPosition": false, "wrapAround": true }');
    studioInstaAnchor.setAttribute("href", studio.link);

    studioInstaAnchor.innerText = studio.link;
    studioNameSpan.innerText = studio.name;
    studioAddressSpan.innerText = studio.address;
    studioPrice1Hour.innerText = "1 час - ";
    studioPrice2Hours.innerText = "2 часа - ";
    studioPrice3Hours.innerText = "3 часа - ";
    studioPrice1Span.innerText = studio.price_1;
    studioPrice2Span.innerText = studio.price_2;
    studioPrice3Span.innerText = studio.price_3;
    studioPriceHryvnia.innerText = " грн";
    studioPricesHeadingSpan.innerText = "Цены за фотосессию"

    studioDiv.appendChild(studioInfoDiv);
    studioDiv.appendChild(carouselDiv);
    studioInfoDiv.appendChild(studioNameHeading);
    studioNameHeading.appendChild(studioNameSpan);
    studioInfoDiv.appendChild(studioAddressParagraph);
    studioAddressParagraph.appendChild(studioAddressIcon);
    studioAddressParagraph.appendChild(studioAddressSpan);
    studioInfoDiv.appendChild(studioInstaParagraph);
    studioInstaParagraph.appendChild(studioInstaIcon);
    studioInstaParagraph.appendChild(studioInstaAnchor);
    studioInfoDiv.appendChild(studioPricesDiv);
    
    studioPricesDiv.appendChild(studioPricesHeading);
    studioPricesHeading.appendChild(studioPricesHeadingSpan);
    studioPricesDiv.appendChild(studioPrice1Paragraph);
    studioPrice1Paragraph.appendChild(studioPrice1Hour)
    studioPrice1Paragraph.appendChild(studioPrice1Span)
    studioPricesDiv.appendChild(studioPrice2Paragraph);
    studioPrice2Paragraph.appendChild(studioPrice2Hours);
    studioPrice2Paragraph.appendChild(studioPrice2Span);
    studioPricesDiv.appendChild(studioPrice3Paragraph);
    studioPrice3Paragraph.appendChild(studioPrice3Hours);
    studioPrice3Paragraph.appendChild(studioPrice3Span);

    studioPrice1Paragraph.appendChild(studioPriceHryvnia.cloneNode(true));
    studioPrice2Paragraph.appendChild(studioPriceHryvnia.cloneNode(true));
    studioPrice3Paragraph.appendChild(studioPriceHryvnia.cloneNode(true));

    for (const photoUrl of studio.photo_urls) {
        const img = document.createElement("img");
        img.setAttribute("src", photoUrl);

        carouselDiv.appendChild(img);
    }

    document.getElementsByClassName("main-content")[0].appendChild(studioDiv);

    $(".carousel" + "-" + id).flickity({ "imagesLoaded": true, "wrapAround": true });
}