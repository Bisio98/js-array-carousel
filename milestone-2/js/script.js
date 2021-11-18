const imgArray = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const imgContainer = document.querySelector('.big_image');
const descriptionContainerH = document.querySelector('.description')
const imgList = document.querySelector('.list_image')

for( let i = 0; i < imgArray.length; i++ ) {
    const thisPath = imgArray[i];
    const newImg = `<div class="hide"><img src="${thisPath}" alt="Img ${i}"></div>`;

    imgContainer.innerHTML += newImg;

    document.getElementById("where_des").innerHTML= title[i];
    document.getElementById("what_des").innerHTML = text[i]; 

    const newLittleImg = `<li><img class="element" src="${thisPath}" alt="Img ${i}"></li>`; 

    imgList.innerHTML += newLittleImg;
}

let onImage = 0;
const bigPhoto = document.getElementsByClassName('hide');
const smallPhoto = document.getElementsByClassName('element');
bigPhoto[onImage].classList.add('show');
smallPhoto[onImage].classList.add('active');
document.getElementById("where_des").innerHTML = title[onImage];
document.getElementById("what_des").innerHTML = text[onImage]; 