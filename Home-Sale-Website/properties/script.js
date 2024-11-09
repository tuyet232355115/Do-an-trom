// Xử lý click icon trái tim
var heartElements = document.querySelectorAll('.fa-heart.author-affection-icon');
if(heartElements) {
    heartElements.forEach((heartElement) => {
        heartElement.onclick = () => {
            heartElement.classList.toggle('active');
        }
    })
}

// Xử lý Sort By theo list - block
var sortList = document.querySelector('.sort__list');
var sortBlock = document.querySelector('.sort__block');
var sortElements = document.querySelectorAll('.sort--icon');
var letestList = document.querySelector('.letest-rent__block');

function handleActive (list, classActive) {
    list.forEach((item) => {
        item.onclick = () => {
            if(item.classList.contains(classActive)) return;
            list.forEach((item) => {
                item.classList.remove(classActive);
            })
            requestAnimationFrame(() => {
                item.classList.add(classActive);
                if(sortBlock.classList.contains('sort--active')) {
                    document.querySelector('.letest-rent__block').style.display = 'flex';
                    document.querySelector('.letest-rent__list').style.display = 'none';
                } else {
                    document.querySelector('.letest-rent__block').style.display = 'none';
                    document.querySelector('.letest-rent__list').style.display = 'flex';
                }
            });
        }
    })
}
handleActive(sortElements, 'sort--active');
