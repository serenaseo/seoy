// 배경 이미지 경로 배열
const backgroundImages = [
  'img11/bg1.jpg',  // 배경 이미지 1
  'img11/bg2.jpg',  // 배경 이미지 2
  'img11/bg3.jpg',  // 배경 이미지 3
  'img11/bg4.jpg',  // 배경 이미지 4
  'img11/bg5.jpg',  // 배경 이미지 5
  'img11/bg6.jpg',  // 배경 이미지 6
  'img11/bg7.jpg',  // 배경 이미지 7
  'img11/bg8.jpg',  // 배경 이미지 8
];

// 클릭 이벤트 추가
document.addEventListener('click', function () {
  // 랜덤 인덱스 생성
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);

  // 배경 이미지 변경
  const backgroundDiv = document.getElementById('background');
  backgroundDiv.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;
});

