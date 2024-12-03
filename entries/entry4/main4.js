const leftImages = document.querySelectorAll('.left .toggle-image');
const rightImages = document.querySelectorAll('.right .toggle-image');

let leftIndex = 0;
let rightIndex = 0;

function toggleImages() {
    // 왼쪽 이미지 전환
    leftImages.forEach(img => img.classList.remove('active'));
    leftImages[leftIndex].classList.add('active');
    leftIndex = (leftIndex + 1) % leftImages.length;

    // 오른쪽 이미지 전환
    rightImages.forEach(img => img.classList.remove('active'));
    rightImages[rightIndex].classList.add('active');
    rightIndex = (rightIndex + 1) % rightImages.length;
}

// 2초마다 실행
setInterval(toggleImages, 2000);

document.addEventListener('DOMContentLoaded', function() {
    // 모든 텍스트에 대해 반복적으로 opacity 값을 변경하는 함수
    const fadeTextElements = document.querySelectorAll('.fade-text');

    function fadeInOut() {
        fadeTextElements.forEach(element => {
            let opacity = parseFloat(window.getComputedStyle(element).getPropertyValue('opacity'));
            
            if (opacity === 0) {
                element.style.opacity = 1; // 텍스트를 보이게
            } else {
                element.style.opacity = 0; // 텍스트를 숨기기
            }
        });
    }

    // 4초마다 fadeInOut 함수 실행
    setInterval(fadeInOut, 3000); // 4초마다 깜빡이기
});

