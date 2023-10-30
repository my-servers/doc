
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?97121c966908fdb33bc4437555a2d772";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);

  var jsonLDData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MyServers",
    "operatingSystem": "iOS",
    "applicationCategory":"UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CNY"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "ratingCount": "2"
    },
    "screenshot": "https://myservers.codeloverme.cn/img/app.webp",
    "downloadUrl": [
      {
        "@type": "PropertyValue",
        "name": "App Store",
        "url": "https://apps.apple.com/app/myservers/id6466196656"
      }
    ],
    "description": "一个App监控管理个人所有的服务器和应用。"
  }

  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.innerHTML = JSON.stringify(jsonLDData);
  document.head.appendChild(scriptTag);

})();


// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'G-4966Y3DK52');

// function gtag_report_conversion(url) {
//   var callback = function () {
//     if (typeof(url) != 'undefined') {
//       window.location = url;
//     }
//   };
//   gtag('event', 'conversion', {
//       'send_to': 'AW-11371629200/gSd_CP6agO8YEJCVta4q',
//       'event_callback': callback
//   });
//   gtag('event', 'click', {
//     'id': 'app_store',
//   });
//   return false;
// }


(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "jiq9x9e6bk");