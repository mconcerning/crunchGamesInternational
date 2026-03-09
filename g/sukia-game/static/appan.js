async function checkAnalytics() {
  fetch('https://www.google-analytics.com/g/collect?v=2&tid=', {
    method: 'POST',
  }).catch((reason) => sendStat(2));
}

function sendStat(method) {
  fetch(`/api/appan?method=${method}`, {
    method: 'GET',
  });
}

if (!document.getElementById('FJLxklWNSvpA')) {
  showAdblockMessage();
  sendStat(1);
} else {
  checkAnalytics();
}

function showAdblockMessage() {
  const div = document.createElement('div');
  div.className = 'disable-adblock';

  const pathname = location.pathname;
  var text = '';
  if (pathname == '/') {
    text =
      'We rely on ads to keep the website running. Please consider disabling your adblocker.';
  } else if (pathname == '/jp') {
    text =
      'ウェブサイトの運営には広告収入が必要です。 アドブロッカーを無効にすることをご検討ください';
  } else if (pathname == '/ko') {
    text =
      '저희는 웹사이트 운영을 광고에 의존하고 있습니다. 광고 차단기를 비활성화해 주시기 바랍니다.';
  } else if (pathname == '/zh-tw') {
    text = '我们依靠广告来维持网站运营。请考虑禁用广告拦截器。';
  }
  const content = document.createTextNode(text);
  div.appendChild(content);

  const game = document.getElementById('game');
  game.insertAdjacentElement('afterend', div);
}
