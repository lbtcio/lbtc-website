/**
 * News
 * 
 * newFrom：
 * 1: is index.html
 * 2: is En/index.html
 * 3: is news.html
 * 4: is EN/news.html
 *  https://api.lbtc.io/mgetngnews2?cate=news_EN
 */ 

let baseAjaxURL = 'https://api.lbtc.io/mgetngnews2?';
let ajaxParam = 'cate=website_news'
let ajaxURL  = '';
let errorImg = './img/backgrounds/news.png';
if (newFrom == 1) {
  ajaxParam    = 'cate=news_CN&page=1&count=4';
}
if (newFrom == 2) {
  ajaxParam    = 'cate=news_EN&page=1&count=4';
  errorImg   = '../img/backgrounds/news.png';
}
if (newFrom == 3) {
  ajaxParam    = 'cate=news_CN';
}
if (newFrom == 4) {
  ajaxParam    = 'cate=news_EN';
  errorImg   = '../img/backgrounds/news.png';
}
ajaxURL = baseAjaxURL + ajaxParam;

$.getJSON( ajaxURL, function(res, status) {
  if (res.error) {
      $("#news").hide();
  } else {
    var htmlc = ""
    for (let i = 0; i < res.msg.length; i++) {
      const item  = res.msg[i];
      let img     = encodeURI(item.thumbnail_images.medium.url);
      let title   = decodeURI(item.title);
      let excerpt = $(decodeURI(item.excerpt)).text();
      let URL     = $(decodeURI(item.content)).text();
      let date    = item.date.split(' ')[0];

      /**
       * 
        <div class="post-date">
          <span class="year">${date}</span>
        </div>
        */

      let str = `
                  <div class="cbp-item wander lifestyle bg-white">
                    
                    <a rel="nofollow" href="${URL}" class="cbp-caption" target=_blank>
                      <div class="cbp-caption-defaultWrap">
                        <img src="${img}" alt="Medium" onerror="javascript:this.src='${errorImg}';">
                      </div>
                      <div class="cbp-caption-activeWrap">
                        <div class="cbp-l-caption-alignCenter">
                          <div class="cbp-l-caption-body">
                            <div class="cbp-l-caption-desc">
                              <i class="ion-android-more-horizontal"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div class="blog-thumb-desc">
                        <a class="link-to-post" href="${URL}" target=_blank>
                          <h4 class="ellipsis_2">${title}</h4>
                        </a>
                        <p class="excerpt ellipsis_4">${excerpt}</p>
                    </div>
                  </div>
                `;
      htmlc = htmlc + str;
    }
    $("#blog-grid").html(htmlc);
    $('#blog-grid,#js-gallery-5').cubeportfolio({
      filters: '#js-filters',
      layoutMode: 'grid',
      sortToPreventGaps: true,
      mediaQueries: [{
          width: 1500,
          cols: 5
      }, {
          width: 1100,
          cols: 4
      }, {
          width: 800,
          cols: 2
      }, {
          width: 480,
          cols: 2
      }, {
          width: 320,
          cols: 1
      }],
      defaultFilter: '*',
      animationType: 'sequentially',
      gapHorizontal: 15,
      gapVertical: 15,
      caption: 'zoom',
      displayType: 'sequentially',
      displayTypeSpeed: 100
    });
    $("#news").show();
  }
});

function catchAhref(str) {
  str = String(str)
  let hrefReg = /href=[\'\"]?([^\'\"]*)[\'\"]?/i;
  let href = str.match(hrefReg);
  return href[1]
}