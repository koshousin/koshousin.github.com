console.log();
$('html').click(utils.generateStar);
$('.switcher').click((e) => {
  //console.log(e.target.src)
  if (/sun.png/.test(e.target.src)) {
    e.target.src = e.target.src.replace('sun.png', 'moon.png')
  } else {
    e.target.src = e.target.src.replace("moon.png", "sun.png");
  }
   $("html").toggleClass("color-revert");
})


// 随机RGB
