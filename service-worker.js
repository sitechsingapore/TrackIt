"use strict";var precacheConfig=[["app.ae1c918da5e267f1775dd533cf4f44ac.css","ad4cc7a849b2d01bec1053a64e2acbfd"],["app.b6e929790023f62797d0f7bea1700758.css","f9d16197acfb627adc0a9f80f8a7482f"],["fonts/MaterialIcons-Regular.012cf6a.woff","012cf6a10129e2275d79d6adac7f3b02"],["fonts/Roboto-Bold.ad140ff.woff","ad140ff02a7091257e2b31619106194e"],["fonts/Roboto-Light.37fbbba.woff","37fbbbad5577a95bdf058307c717c882"],["fonts/Roboto-Medium.303ded6.woff","303ded6436dcf7ea75157e2aeff876ce"],["fonts/Roboto-Regular.081b11e.woff","081b11ebaca8ad30fd092e01451015dc"],["fonts/Roboto-Thin.90d3804.woff","90d3804f0231704c15ccc5861245e8ce"],["fonts/mdi.6473d7d.woff","6473d7d5a01bb3f8fccd5bbeaf2be312"],["img/right-graphite@2x.f2e09a9.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["img/trackit.4dbf2ed.png","4dbf2ed5128b084a0b6f9ce268c02558"],["index.html","db3c7d49e8bb3f3a6db818428348689c"],["js/0.51e7799b0fe26a4fa693.js","ff0620dce5120716de34880cd5ba1e81"],["js/0.cb51ea603ff51f3718eb.js","3d289842e4375de9c684dd0ce9bd1d82"],["js/1.025f1bb63d5ac4b36f58.js","5d54f35677e84bd61ce19088697afb06"],["js/1.1593a3d22d21271d4ef5.js","f9b16de86330a95753b66f81fab7e5e7"],["js/1.5aabe59857ae00fc2722.js","525b1f4e947a7c6827c3521f18d9969f"],["js/1.caea3f8feb34403fafdc.js","eeea07d54a2f5738271b8ffa9bc3ea2f"],["js/1.fcc6c2ae1de0d9543c81.js","0eb28f89c090b7d7888ded4d44d7222d"],["js/2.eb05d07bb2066e59f9d7.js","2fe9d6bbc34cdaa3202ac54a2727caab"],["js/app.2603a97a18f03720dfd1.js","581ef83491ef718288d17bee435a70ee"],["js/app.26647761bd59f14b6ae1.js","f51310862685e056a9f986d4bc6c187c"],["js/app.8de87df1fb1a00354608.js","d2c8d8f914e36654410253c4446bba73"],["js/vendor.128e6309c23cce7b9f96.js","988c0e4888e5c75de42e157fc1b20a22"],["js/vendor.1b66497d9a3dac7b6ce3.js","2e9b20a59593c116300819396d11d2fd"],["js/vendor.297df407f99c5c129825.js","39ca874818bf77b0d6208249d4190230"],["js/vendor.7334b9304b464b0a0e88.js","1f444074059236ad8136bd200e47d7e1"],["js/vendor.dd10b80f77cfea3d6a96.js","1eed1cdec328d247bcd04475c8ee6cd9"],["manifest.json","6211a3d5b8a1e4a7cf91bcc9b2c1fe8c"],["service-worker.js","c96763dec671336edf0038b6d2d84868"],["statics/GitHub-Mark-32px.png","f87561b8bb354ef83b09a66e54f70e08"],["statics/GitHub-Mark-Light-32px.png","d56df49a807a9fd06eb1667a84d3810e"],["statics/flespi_logo_black.svg","82f983ec2277961e9878f2bf014b13fc"],["statics/icons/apple-icon-152x152.png","906c193b6d193a65add774107b3923db"],["statics/icons/favicon-16x16.png","c81a3f3a982ad3175edf7a78d797ced3"],["statics/icons/favicon-32x32.png","c2f336f76202bb73019843c7ad316def"],["statics/icons/icon-192x192.png","47fc2bc80d4dc7e7835423c0505302e7"],["statics/icons/icon-512x512.png","9a9bf03959ba3eba0bc007f6c7699a33"],["statics/icons/ms-icon-144x144.png","4ca6116897b45c5c22d8e3d3f21576f5"],["statics/manifest.json","e70b8108d642f3e1eda25442d0a2a629"],["statics/mountain.svg","1e3d1da4cf6d85e6e28cc3aae77e3ead"],["statics/right-graphite@2x.png","f2e09a9743fdb0c7f4dcbe4242441a5d"],["statics/track-it-logo.png","ca2124cb4b54895f85dba5fbf32335f0"],["statics/trackit.png","4dbf2ed5128b084a0b6f9ce268c02558"]],cacheName="sw-precache-v3-track-it-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,!1);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});