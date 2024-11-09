// Xử lý rent-sale header-search
function handleActive (list, classActive) {
    list.forEach((item) => {
        item.onclick = () => {
            if(item.classList.contains(classActive)) return;
            list.forEach((item) => {
                item.classList.remove(classActive);
            })
            item.classList.add(classActive);
        }
    })
}
var searchTabElements = document.querySelectorAll('.header__search-tab');
if(searchTabElements) {
    handleActive(searchTabElements, 'header__search-tab--active');
}

// Xử lý chọn Properties Service
var servicesItems = document.querySelectorAll('.services__item');
if(servicesItems) {
    handleActive(servicesItems, 'services__item--active');
}

// Xử lý click icon trái tim
var heartElements = document.querySelectorAll('.fa-heart.author-affection-icon');
if(heartElements) {
    heartElements.forEach((heartElement) => {
        heartElement.onclick = () => {
            heartElement.classList.toggle('active');
        }
    })
}

// Xử lý Properties lider
// Nếu không có nút hot-offer
// var propertiesSliderElements = document.querySelectorAll('.properties-slider__item');
// propertiesSliderElements.forEach((propertiesSliderElement) => {
//     if(!propertiesSliderElement.querySelector('.btn--hot-offer')) {
//         propertiesSliderElement.querySelector('.properties-slider__item--descriptions').style.position = 'relative';
//         propertiesSliderElement.querySelector('.properties-slider__item--descriptions').style.top = 'calc(100% - 22px)';
//     }
// })

// Xử lý nút bấm Prev - Next
const sliderList = document.querySelector('.properties-slider__list');
const sliderItems = document.querySelectorAll('.properties-slider__item');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const itemsToShow = 5; // Số lượng slide muốn hiển thị
let currentIndex = 0; // Chỉ số của slide đầu tiên trong nhóm đang hiển thị

// Cập nhật trạng thái nút
function updateButtons() {
    prevBtn.classList.toggle('properties-slider__nav-btn--disable', currentIndex === 0);
    nextBtn.classList.toggle('properties-slider__nav-btn--disable', currentIndex >= sliderItems.length - itemsToShow);
}

// Hàm cập nhật hiển thị các slide và opacity cho các slide ngoài vùng hiển thị
function updateSliderPosition() {
    const itemWidth = sliderItems[0].offsetWidth;
    const gap = 24; // Khoảng cách giữa các slide
    const offset = -(currentIndex * (itemWidth + gap)); // Tính toán khoảng cách để di chuyển
    sliderList.style.transform = `translateX(${offset}px)`;
    
    sliderItems.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + itemsToShow) {
            item.classList.remove('properties-slider__item--hidden'); // Hiển thị slide
        } else {
            item.classList.add('properties-slider__item--hidden'); // Ẩn slide với lớp phủ opacity
        }
    });

    updateButtons();
}

// Sự kiện khi nhấn nút Prev
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    }
});

// Sự kiện khi nhấn nút Next
nextBtn.addEventListener('click', () => {
    if (currentIndex < sliderItems.length - itemsToShow) {
        currentIndex++;
        updateSliderPosition();
    }
});

// Khởi tạo lần đầu khi load trang
updateSliderPosition();