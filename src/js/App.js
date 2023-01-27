//버튼
const btnCalc = document.querySelector('.btn-calc');
const btnShare = document.querySelector('.btn-share');
const btnClose = document.querySelector('.btn-close');
const btnBuy = document.querySelector('.a-buy');

function calculate() {
  const priceValue = document.querySelector('#inp-cost');
  const itemValue = document.querySelector('#inp-want');
  const dateValue = document.querySelector('#useDate');
  const result = document.querySelector('.result');

  if (priceValue.value === '') {
    alert('입력이 잘못 되었습니다~!');
    return;
  }
  if (isNaN(parseInt(priceValue.value))) {
    alert('입력이 잘못 되었습니다~!');
    return;
  }
  if (itemValue.value === '') {
    alert('입력이 잘못 되었습니다~!');
    return;
  }
  if (dateValue.value === '') {
    alert('입력이 잘못 되었습니다~!');
    return;
  }
  if (isNaN(parseInt(dateValue.value))) {
    alert('입력이 잘못 되었습니다~!');
    return;
  }

  result.textContent = Math.floor(priceValue.value / useDate.value / 365).toLocaleString();

  document.querySelector('#modal').style.display = 'flex';
  console.log(itemValue.value);
  btnBuy.setAttribute('href', `https://search.shopping.naver.com/search/all?query=${itemValue.value}`);
}

function closeModal() {
  document.querySelector('#modal').style.display = 'none';
}

function copyUrl() {
  let url = window.location.href;
  navigator.clipboard
    .writeText(url)
    .then(() => {
      alert('URL이 복사되었습니다.');
    })
    .catch((err) => {
      alert('URL이 복사되지 않았습니다. 호환되는 브라우저가 아닙니다.');
      console.log(err);
    });
}

btnCalc.addEventListener('click', calculate);
btnShare.addEventListener('click', copyUrl);
btnClose.addEventListener('click', closeModal);
