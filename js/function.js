(function (context) {
  // 生成小爱心形
  function generateStar(event) {
    //console.log('clicked..', event.clientX);
    if (event.clientY < 65) {
      return;
    }
    const x = event.clientX + 'px';
    const y = event.clientY + 'px';
    const span = document.createElement('div');
    span.classList.add('heart');
    span.style.top = y;
    span.style.left = x;
    span.style.position = 'fixed';
    span.style.backgroundColor = generateRGB();
    $('body').append(span);
    setTimeout(function () {
      span.parentNode.removeChild(span);
    },900)
  }

  function generateRGB() {    // 返回值是一个 Rgb string
    const r = (Math.random() * 255).toFixed();
    const g = (Math.random() * 255).toFixed();
    const b = (Math.random() * 255).toFixed();
    return `rgb(${r},${g},${b})`;
  }

  context.utils = {
    generateStar,
    generateRGB
  }
})(window)