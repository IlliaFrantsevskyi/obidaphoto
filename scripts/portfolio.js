$(document).ready(function () {
    $('.work-title-block').click(function (event) {
        $(event.currentTarget).closest(".work").find('.modal').modal('toggle');
    });
})

window.addEventListener('DOMContentLoaded', function () {
    generateWorkComponents();
});

function generateWorkComponents() {
    for (const work of works) {
        generateWorkComponent(work);
    }
}

function generateWorkComponent(work) {
    let isActiveUsed = false;

    const id = generateUniqueId();

    const workDiv = document.createElement('div');
    
    const workTitleBlockDiv = document.createElement('div');
    const workTitleBlockImageContainerDiv = document.createElement('div');
    const workMainPhotoImg = document.createElement('img');

    const workModalDiv = document.createElement('div');
    const modalDiv = document.createElement('div');
    const modalDialogDiv = document.createElement('div');
    const modalContentDiv = document.createElement('div');
    const carouselDiv = document.createElement('div');
    const carouselInnerDiv = document.createElement('div');

    const leftCarouselAnchor = document.createElement('a');
    const leftCarouselSpan = document.createElement('span');
    const rightCarouselAnchor = document.createElement('a');
    const rightCarouselSpan = document.createElement('span');

    workDiv.classList.add("work");

    workTitleBlockDiv.classList.add('work-title-block');
    workTitleBlockImageContainerDiv.classList.add("work-title-block-image-container");
    workMainPhotoImg.setAttribute('src', work.main_photo_url);

    workModalDiv.classList.add('work-modal');
    modalDiv.classList.add("modal", "centered-modal", "fade", "bs-example-modal-lg");
    modalDiv.setAttribute("tabindex", "-1");
    modalDiv.setAttribute("role", "dialog");
    modalDiv.setAttribute("aria-hidden", "true");

    modalDialogDiv.classList.add("modal-dialog", "modal-lg");
    modalContentDiv.classList.add("modal-content");

    carouselDiv.id = id;
    carouselDiv.classList.add("carousel", "slide");
    carouselDiv.setAttribute("data-ride", "carousel");
    carouselDiv.setAttribute("data-interval", "false");

    carouselInnerDiv.classList.add("carousel-inner");

    leftCarouselAnchor.classList.add("left", "carousel-control");
    leftCarouselAnchor.setAttribute("href", `#${id}`);
    leftCarouselAnchor.setAttribute("role", "button");
    leftCarouselAnchor.setAttribute("data-slide", "prev");

    leftCarouselSpan.classList.add("glyphicon", "glyphicon-chevron-left");

    rightCarouselAnchor.classList.add("right", "carousel-control");
    rightCarouselAnchor.setAttribute("href", `#${id}`);
    rightCarouselAnchor.setAttribute("role", "button");
    rightCarouselAnchor.setAttribute("data-slide", "next");

    rightCarouselSpan.classList.add("glyphicon", "glyphicon-chevron-right");

    workDiv.appendChild(workTitleBlockDiv);
    workDiv.appendChild(workModalDiv);

    workTitleBlockDiv.appendChild(workTitleBlockImageContainerDiv);
    workTitleBlockImageContainerDiv.appendChild(workMainPhotoImg);

    workModalDiv.appendChild(modalDiv);
    modalDiv.appendChild(modalDialogDiv);
    modalDialogDiv.appendChild(modalContentDiv);
    modalContentDiv.appendChild(carouselDiv);

    carouselDiv.appendChild(carouselInnerDiv);
    carouselDiv.appendChild(leftCarouselAnchor);
    carouselDiv.appendChild(rightCarouselAnchor);

    leftCarouselAnchor.appendChild(leftCarouselSpan);
    rightCarouselAnchor.appendChild(rightCarouselSpan);

    for (const photoUrl of work.photo_urls) {
        const itemDiv = document.createElement("div");
        const img = document.createElement("img");
        
        itemDiv.classList.add("item");

        if(!isActiveUsed) {
            itemDiv.classList.add("active");

            isActiveUsed = true;
        }

        img.classList.add("img-responsive");
        img.setAttribute("src", photoUrl);

        itemDiv.appendChild(img);
        carouselInnerDiv.appendChild(itemDiv);
    }

    document.getElementsByClassName("works")[0].appendChild(workDiv);
}

function generateUniqueId() {
    return '' + Math.random().toString(36).substr(2, 9);
}