/**
 * 轮播图Carousel
 * Powered by microzz.com
 */
(function () {
  let oPrevBtn = document.querySelector('#prev');
  let oNextBtn = document.querySelector('#next');
  let oList = document.querySelector('#list');
  let oSpans = document.querySelectorAll('span');
  let imgs = document.querySelectorAll('img');
  // 获取每张图片的宽度
  let imgLen = imgs[0].width;
  // left值，之后根据这个变量实现切换不同图片
  let dis = 0;

  // 定时函数，实现自动轮播
  setInterval(function() {
    goNext();
    pointChange();
  }, 3000);

    // 切换下一张图片函数
    function goNext() {
      if (dis < 0 - imgLen * (imgs.length - 2)) {
        dis = 0;
        oList.style.left = dis + 'px';
      } else {
        dis -= imgLen;
        oList.style.left = dis + 'px';
      }
    }

    // 切换上一张图片函数
    function goPrev() {
      if (dis > 0 - imgLen) {
        dis = 0 - imgLen * (imgs.length - 1);
        oList.style.left = dis + 'px';
      } else {
        dis += imgLen;
        oList.style.left = dis + 'px';
      }
    }

    // 改变导航小圆点
    function pointChange() {
      Array.prototype.forEach.call(oSpans, function (item, index) {
        if (Math.abs(dis/imgLen) == (index)) {
          item.className = 'on';
        } else {
          item.className = '';
        }
      });
    }

  // 下一张点击事件
  oNextBtn.onclick = function () {
    goNext();
    pointChange();
  };

  // 上一张点击事件
  oPrevBtn.onclick = function () {
    goPrev();
    pointChange();
  };

  // 点击小圆点导航切换到对应图片
  oSpans.forEach(function(item, index) {
    item.onclick = function(){
      dis = 0 - index * imgLen;
      oList.style.left = dis + 'px';
      pointChange();
    }
  });

})();
