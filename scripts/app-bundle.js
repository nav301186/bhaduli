define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.message = 'Hello World!';
    }

    App.prototype.configRouter = function configRouter(config, router) {
      config.title = "login";
      config.map([{ route: '', moduleId: 'login', title: "login" }]);
    };

    return App;
  }();
});
define('button-couple',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ButtonCouple = exports.ButtonCouple = function ButtonCouple() {
        _classCallCheck(this, ButtonCouple);
    };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment', 'bootstrap'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('overlay-text',["exports"], function (exports) {
   "use strict";

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var OverlayText = exports.OverlayText = function OverlayText() {
      _classCallCheck(this, OverlayText);
   };
});
define('popup-form',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var PopupForm = exports.PopupForm = function PopupForm() {
        _classCallCheck(this, PopupForm);
    };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"app.css\"></require><require from=\"profile.css\"></require><require from=\"overlay-text\"></require><div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\"><ol class=\"carousel-indicators\"><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner\" role=\"listbox\"><div class=\"carousel-item active\"><div class=\"fill slide1\"></div></div><div class=\"carousel-item\"><div class=\"fill slide2\"></div></div><div class=\"carousel-item\"><div class=\"fill slide3\"></div></div></div><a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Previous</span> </a><a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span></a></div></template>"; });
define('text!app.css', ['module'], function(module) { module.exports = "\nhtml,\nbody {\n    height: 100%;\n    background-color: #f5f8fa;\n}\n\n.heading-card {\n  background-color: #f5f8fa;\n height: 60px;\n}\n\n#rv > .card > img {\n    width: 100%;\n}\n\n.card > .label {\n  height: 100%;\n}\n\n.black-bg {\n  background-color: black;\n}\n.white-bg {\n  background-color: white;\n}\n\n.light-blue-bg {\n  background-color: #2882b5 !important;\n}\n\n.font-100 {\n  font-size: 100% !important\n}\n.container {\n\n    background-color: #ffffff;\n}\n\n.icon-circle {\n\tdisplay: inline-block;\n\tbackground: #4C5259;\n\tcolor: #fff;\n\twidth: 36px;\n\theight: 36px;\n\tdisplay: table;\n\ttext-align: center;\n\tborder-radius: 300px;\n\t-webkit-transition: all .35s ease;\n}\n\n\t.icon-circle .fa {\n\t\tdisplay: table-cell;\n\t\tvertical-align: middle;\n\t\tfont-size: 20px;\n\t}\n\n\t\t.icon-circle-twitter:hover {\n\t\t\tbackground: #55ACEE;\n\t\t}\n\n\t\t.icon-circle-facebook:hover {\n\t\t\tbackground: #3B5998;\n\t\t}\n\n\t\t.icon-circle-google:hover {\n\t\t\tbackground: #D21A10;\n\t\t}\n\n\t\t.icon-circle-linkedin:hover {\n\t\t\tbackground: #0079B8;\n\t\t}\n\n\n\n.icon {\n\tbackground-repeat: no-repeat;;\n\tbackground-image: url('sprites.png');\n\tposition: relative;\n\tmargin-right: 20px;\n}\n\n\n\n\n\n\t.icon-support-doc {\n\t\tbackground-position: -436px -193px;\n\t\twidth: 19px;\n\t\theight: 24px;\n\t}\n\n\n\n\n\n\n\t/* ! Circle icons */\n\n\t.icon-phone {\n\t\tbackground-image: url('#{$cloudfront}assets/img/sprites/icon-contact@1x.png');\n\t\tdisplay: block;\n\t\tbackground-position: 0 0;\n\t\twidth: 16px;\n\t\theight: 16px;\n\t\ttop: 0px;\n\t\tbackground-size: 16px 16px;\n\t}\n\n\t\t@media only screen and (-webkit-min-device-pixel-ratio: 2),\n\t\tonly screen and (min-device-pixel-ratio: 2) {\n\t\t\t.icon-phone {\n\t\t\t\tbackground-image: url('#{$cloudfront}assets/img/sprites/icon-contact@2x.png');\n\t\t\t}\n\t\t}\n\n\n\t/* ! Resources icons (Popover) */\n\n\t.icon-popover {\n\t\tdisplay: inline-block;\n\t\twidth: 48px;\n\t\theight: 42px;\n\t}\n\n\t\t.icon .icon-blog {\n\t\t\tbackground-position: -101px -105px;\n\t\t}\n\n\t\t.icon.icon-articles {\n\t\t\tbackground-position: -22px -104px;\n\t\t}\n\n\t\t.icon.icon-customers {\n\t\t\tbackground-position: -181px -108px;\n\t\t}\n\n\n\n\t\t/* ! Connect popover icons */\n\n\t\t.icon-microphone {\n\t\t\twidth: 12px;\n\t\t\theight: 16px;\n\t\t\tbackground-position: -279px -117px;\n\t\t\tdisplay: inline-block;\n\t\t}\n\n\t\t.icon-caret {\n\t\t\tdisplay: inline-block;\n\t\t\twidth: 12px;\n\t\t\theight: 6px;\n\t\t\tbackground-position: -359px -122px;\n\t\t\tmargin-left: 3px;\n\t\t\topacity: .5;\n\t\t\ttransition: opacity .35s ease;\n\t\t\ttop: -2px;\n\t\t}\n\n\t\t\ta:hover .icon-caret {\n\t\t\t\topacity: 1;\n\t\t\t}\n\n\n\n\t/* Video player icon */\n\n\t.icon-play-video {\n\t\twidth: 28px;\n\t\theight: 28px;\n\t\tbackground-position: -431px -111px;\n\t\tdisplay: inline-block;\n\t}\n\n\n\n\t/* ! Feature icons */\n\n\t.icon-feature {\n\t\tdisplay: block;\n\t\twidth: 60px;\n\t\theight: 60px;\n\t}\n\n\t\t.icon-meter {\n\t\t\tbackground-position: -16px -16px;\n\t\t}\n\n\t\t.icon-chart {\n\t\t\tbackground-position: -95px -15px;\n\t\t}\n\n\t\t.icon-life-saver {\n\t\t\tbackground-position: -175px -15px;\n\t\t}\n\n\t\t.icon-buildings {\n\t\t\tbackground-position: -255px -12px;\n\t\t}\n\n\t.icon-feature.icon-xs {\n\t\tdisplay: inline-block;\n\t\twidth: 49px;\n\t\theight: 49px;\n\t}\n\n\t\t.icon-xs.icon-meter {\n\t\t\tbackground-position: -341px -20px;\n\t\t}\n\n\t\t.icon-xs.icon-chart {\n\t\t\tbackground-position: -421px -20px;\n\t\t}\n\n\t\t.icon-xs.icon-life-saver {\n\t\t\tbackground-position: -501px -20px;\n\t\t}\n\n\t\t.icon-xs.icon-buildings {\n\t\t\tbackground-position: -581px -20px;\n\t\t}\n\n\n\n\t/* ! eBook icons */\n\n\t.icon-ebook {\n\t\tdisplay: block;\n\t\twidth: 128px;\n\t\theight: 167px;\n\t}\n\n\t\t.icon-ebook-purple {\n\t\t\tbackground-position: -21px -347px;\n\t\t}\n\n\t\t.icon-ebook-orange {\n\t\t\tbackground-position: -181px -347px;\n\t\t}\n\n\t\t.icon-ebook-green {\n\t\t\tbackground-position: -341px -347px;\n\t\t}\n\n\n\n\t/* ! Social icons */\n\n\t.icon-social {\n\t\twidth: 36px;\n\t\theight: 36px;\n\t\tdisplay: inline-block;\n\t}\n\n\t\t.icon-twitter {\n\t\t\tbackground-position: -27px -187px;\n\t\t}\n\n\t\t\t.icon-twitter:hover {\n\t\t\t\tbackground-position: -107px -187px;\n\t\t\t}\n\n\t\t.icon-facebook {\n\t\t\tbackground-position: -187px -187px;\n\t\t}\n\n\t\t\t.icon-facebook:hover {\n\t\t\t\tbackground-position: -267px -187px;\n\t\t\t}\n\n\n\n.icon-type {\n\twidth: 48px;\n\theight: 48px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n\n\t.icon-type-webinar, .icon-type-video {\n\t\tbackground-position: -21px -181px;\n\t}\n\n\t.icon-type-e-book {\n\t\tbackground-position: -102px -183px;\n\t}\n\n\t.icon-type-infographic {\n\t\tbackground-position: -181px -181px;\n\t}\n\n\t.icon-type-slideshare {\n\t\tbackground-position: -261px -181px;\n\t}\n\n\t.icon-type-article {\n\t\tbackground-position: -342px -183px;\n\t}\n\n\t.icon-type-datasheet {\n\t\tbackground-position: -421px -20px;\n\t}\n\n\n\n\t.icon-salesforce-cloud {\n\t\tdisplay: block;\n\t\twidth: 52px;\n\t\theight: 38px;\n\t\tposition: relative;\n\t\ttop: 17px !important;\n\t\tbackground-image: url('#{$cloudfront}assets/img/sprites/icon-salesforce-cloud.png');\n\t}\n\n\t.icon.icon-video-player-lg {\n\t\tbackground-image: url('#{$cloudfront}assets/img/sprites/customer-sprites.png');\n\t\tdisplay: block;\n\t\twidth: 104px;\n\t\theight: 104px;\n\t\tposition: relative;\n\t}\n\n\t.icon.icon-video-player-sm {\n\t\tbackground-image: url('#{$cloudfront}assets/img/sprites/customer-sprites.png');\n\t\tbackground-position: 0 -104px;\n\t\tdisplay: inline-block;\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tposition: relative;\n\t\tvertical-align: middle;\n\t\ttop: -2px;\n\t\tmargin-right: 8px;\n\t}\n\n\n/* ===================================================\n\n\tLogos\n\n=================================================== */\n\n.logo {\n\tdisplay: inline-block;\n\tbackground-repeat: none;\n\tbackground-image: url('#{$cloudfront}assets/img/slider/home/sprites-logos@1x.png');\n\tposition: relative;\n}\n\n\t@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2) {\n\n\t\t.logo {\n\t\t\tbackground-image: url('#{$cloudfront}assets/img/slider/home/sprites-logos@2x.png') !important;\n\t\t\tbackground-size: 970px 740px !important;\n\t\t}\n\n\t}\n\n\t.logo-feature {\n\t\twidth: 310px;\n\t\theight: 210px;\n\t}\n\n  .logo-word {\n    font-family: 'Pacifico', cursive;\n  \tfont-weight: 500;\n  \tfont-style: normal;\n    overflow: hidden;\n    margin: auto;\n    width: 232px;\n    height: 50px;\n    padding: 0;\n    border-bottom: 5px solid skyblue;\n}\n\n.blue-border {\n  border : 1px solid skyblue;\n}\n\n.navbar li { color: #000 }\n\n  .carousel-overlay h3 {\n\t  font-family: 'Pacifico', cursive;\n\t   text-shadow: 0 5px rgba(0,0,0,0.1);\n\t   color: black;\n\t}\n  .carousel-overlay {\n\t\tposition: absolute;\n\t\tbottom: 40%;\n\t\tright: 0;\n\t\tleft: 0;\n\t}\n\n  .carousel-overlay .button {\n  \t    background: #F46A6A;\n  \t    -webkit-box-shadow: 0 6px rgb(194, 107, 107);\n  \t            box-shadow: 0 6px rgb(194, 107, 107);\n  \t    border: none;\n  \t    -webkit-border-radius: 6px;\n  \t            border-radius: 6px;\n  \t    color: #fff !important;\n  \t    display: block;\n  \t    font-size: 16px;\n  \t    font-weight: 700;\n  \t    outline: none;\n  \t    margin-top: 25px;\n  \t    padding: 8px 24px;\n  \t    position: relative;\n  \t    text-align: center;\n  \t    text-decoration: none !important;\n  \t    width: 180px;\n  \t}\n\n       \n    .left-arrow {\n      background-image: url(../images/arrows-1.png);\n    }\n    .right-arrow {\n      background-image: url(../images/arrows-3.png);\n    }\n\n    .slide1 {\n  \t  background-image: url(../images/bg-1.jpg);\n\n  \t}\n  \t.slide2 {\n  \t  background-image:url(../images/bg-2.jpg);\n  \t}\n  \t.slide3 {\n  \t  background-image:url(../images/bg-3.jpg);\n  \t}\n\n\n\t.slide1, .slide2, .slide3 {\n\t  min-height:750px;\n\t  background-size: cover;\n\t  background-position: center center;\n\n\t}\n\n  .slide11 {\n    background-image: url(bg-2.jpg);\n\n  }\n\n  .slide22 {\n    background-image:url(bg-1.jpg);\n  }\n  .slide33 {\n    background-image:url(bg-3.jpg);\n  }\n\n.slide11, .slide22, .slide33 {\n  min-height: 425px;\n  background-size: cover;\n  background-position: center center;\n\n}\n\thr {\n\t  background: none repeat scroll 0 0 #F46A6A;\n\t  border: 0 none;\n\t  height: 5px;\n\t  width: 50px;\n\t}\n\n  .hr-tag {\n    background: none repeat scroll 0 0 rgba(255,255,255,.25);\n  }\n\n\t.ih-item.square {\n\t    position: relative;\n\t     width: 100% !important;\n\t    height: 216px!important;\n\t    border: 0 !important;\n\t    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n\t}\n\n\t/*------------------------------------------Hover gallary ------------------------------------------*/\n\t.nopadding {\n\t   padding: 0 !important;\n\t   margin: 0 !important;\n\t}\n .no-padding-left {\n   padding-left: 0 !important;\n }\n\n .no-padding-right {\n   padding-right: 0 !important;\n }\n\t#gallary-images {\n\t  margin: auto auto 20px auto;\n\t}\n\n\t.zig-zag-white {\n\t    padding-top: 0;\n\t    background: #fff;\n\t}\n\n\t.zig-zag-white:before {\n\t    content: ' ';\n\t    position: relative;\n\t    top: -6px;\n\t    display: block;\n\t    height: 6px;\n\t    background: url(zig-zag-white.png) left top repeat-x;\n\t}\n\n\t.font-special {\n\t  font-family: 'Roboto', sans-serif;\n\t  font-weight: 900;\n\t  color: white;\n\t  font-size: 2rem;\n\t  font-size: 35px;\n\t  line-height: 30px;\n\t  letter-spacing: 3px;\n\t  font-family: 'Pacifico', cursive;\n\t   text-shadow: 0 5px rgba(0,0,0,0.1);\n\t   color: black;\n\t}\n  .font-test {\n    color: #fff;\nfont-size: 28px;\n/* font-size: 2.8rem; */\nline-height: 46px;\nline-height: 4.6rem;\nmargin-bottom: 1.22em;\nfont-family: \"open-sans\",sans-serif;\nfont-weight: 400;\n  }\n\n.logon-banner\tp {\n\t    height: 80vh;\n      margin-top: -60px;\n\t}\n\n\t.logon-banner p {\n\t    display: block;\n\t    -webkit-margin-before: 1em;\n\t    -webkit-margin-after: 1em;\n\t    -webkit-margin-start: 0px;\n\t    -webkit-margin-end: 0px;\n\t\t\tcolor:white;\n\t}\n\t.page-header {\n    padding: 10px;\n\t  border:none;\n\t}\n\t.icon-text {\n\t    font-size: 18px;\n\t    line-height: 28px;\n\t    font-family: \"open-sans\",sans-serif;\n\t    font-weight: 400;\n\t}\n/*-------------------------------------------------------------------------------------------------------*/\n\n.section-feature {\n\tpadding: 4.79em 0px 6.15em;\n}\n#with-background {\n\tbackground: url(slider-1.jpg) no-repeat fixed 0px 50px /cover ;\n\tpadding: 0px;\nmargin: 0px auto;\nheight: 754px;\nwidth: 100%;\nmin-height: 754px;\n}\n\n.mask {\n    width: 100%;\n    padding-top: 640px;\n    position: relative;\n    background: transparent url(\"aboutmask.png\") no-repeat scroll center center;\n}\n\n#text {\n    top: 37%;\n    height: 100%;\n    position: relative;\n    margin: 0;\n    color: rgba(255, 255, 255, 0.6);\n}\n\n\n.image-item {\n  /*height:400px;*/\n  overflow: hidden;\n}\n\n.banner {\n\theight: 400px;\n\t/*width: 100%;*/\n\n\toverflow: hidden;\n\t/*background: green;*/\n}\n.green-bg {\n\tbackground-color: #56bc8a;\n}\n.orange-bg {\n\tbackground-color: #FF744C;\n}\n.blue-bg {\n\tbackground-color: #4169E1;\n}\n.blue2_bg {\n\tbackground-color: #009DDC;\n}\n\n.nopadding {\n   padding: 0 !important;\n   margin: 0;\n}\n.nomargin {\n   margin: 0 !important;\n}\n.logon-banner {\n\tpadding:6.4em 0px 5em;\n}\n.btn-round {\n\tborder-radius: 100px;\n}\n/*.btn\n {\n    font-family: \"proxima-nova\",sans-serif;\n    font-weight: 900;\n    -webkit-transition: background .2s ease;\n}*/\n\n.btn-outline-default {\n    border-color: rgba(255,255,255,.3);\n    color: #fff;\n}\n\n.logon-banner .btn{\n    text-transform: uppercase;\n    font-size: 1.5rem;\n}\n.logon-banner h2{\n\tcolor:white;\n}\n.carousel {\n  height: 95vh !important;\n}\n\n.carousel,\n.item,\n.active {\n    height: 100%;\n}\n\n.carousel-inner {\n    height: 100%;\n}\n\n/* Background images are set within the HTML using inline CSS, not here */\n\n.fill {\n    width: 100%;\n    height: 100%;\n    background-position: center;\n    -webkit-background-size: cover;\n    -moz-background-size: cover;\n    background-size: cover;\n    -o-background-size: cover;\n    /*-webkit-filter: blur(3px);\n    -moz-filter: blur(3px);\n    -o-filter: blur(3px);\n    -ms-filter: blur(3px);\n    filter: blur(3px);*/\n}\n\n.fill-2 {\n  display: block;\n  /*z-index: 9999;*/\n  /*position: fixed;*/\n  width: 100%;\n  height: 100vh;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  overflow: auto;\n}\n\nfooter {\n    margin: 50px 0;\n}\n\n#landing-image {\n\theight: 100% !important;\n\twidows: 100% !important;\n}\n\n.reg-log {\n  width: 30%;\n  margin: auto auto auto 35%;\n}\n\n\n\n.no-border-radius {\n  border-radius: 0 !important;\n}\n\n.chevron{\n        width:20%;\n        position:absolute;\n        top:40%;\n      }\n\n      .chevron-left{left:5%;}\n      .chevron-right{right:5%;}\n\n.down-arrow {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    right: 0;\n    bottom: 20px;\n    height: 50px;\n    width: 50px;\n    /*background-image: url('../images/chevron-down.png');*/\n    background-repeat: no-repeat;\n    background-position: center center;\n    z-index: 5;\n    opacity: .5;\n    filter: alpha(opacity=50);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=50)\";\n    -webkit-transition: opacity .4s ease, bottom .2s ease;\n    -moz-transition: opacity .4s ease, bottom .2s ease;\n    -ms-transition: opacity .4s ease, bottom .2s ease;\n    -o-transition: opacity .4s ease, bottom .2s ease;\n    transition: opacity .4s ease, bottom .2s ease;\n}\n\n.intro {\n    bottom: -45px;\n    cursor: pointer;\n    font-weight: 800;\n    /*line-height: 45px;*/\n    position: absolute;\n    text-align: center;\n    width: 100%;\n    z-index: 2;\n    height: 45px;\n    transition: bottom .3s ease-out 1.7s;\n}\n\n.second-page {\n  /*height: 100vh;*/\n}\n\n.bubble{\n\t\tbackground-color: skyblue;\n\t\t/*border-radius: 5px;*/\n\t\t/*box-shadow: 0 0 6px skyblue;*/\n\t\t/*display: inline-block;*/\n\t\t/*padding: 10px 18px;*/\n\t\tposition: relative;\n\t\tvertical-align: top;\n\t\t/*margin: 20px 10px;*/\n    min-height: 400px;\n    overflow: hidden;\n\t}\n\n\t.bubble::before {\n\t\tbackground-color: skyblue;\n\t\tcontent: \"\\00a0\";\n\t\tdisplay: block;\n\t\theight: 30px;\n\t\twidth: 30px;\n\t\tposition: absolute;\n\t\tbottom: -18.5px;\n\t\ttransform: rotate(47deg) skew(5deg);\n\t\t-moz-transform: rotate(47deg) skew(5deg);\n\t\t-ms-transform: rotate(47deg) skew(5deg);\n\t\t-o-transform: rotate(47deg) skew(5deg);\n\t\t-webkit-transform: rotate(47deg) skew(5deg);\n\t\tbox-shadow: 2px 2px 2px 0 rgba( 178, 178, 178, .4 );\n\t}\n\n  .max-width {\n    max-width: 480px;\n    display: block;\n    margin: 0 auto;\n    text-align: center;\n}\n  .table-cell {\n    display: table-cell;;\n}\nblockquote {\n    border: none;\n}\n.customer-test {\n  font-weight: 700;\n  font-style: normal;\n  overflow: hidden;\n  text-align: center;\n}\n\n.sub-titles {\n  font-family: \"proxima-nova\",sans-serif;\nfont-weight: 600;\ncolor: #fff;\nfont-size: 16px;\nfont-size: 1.6rem;\nline-height: 20px;\nline-height: 2rem;\ntext-transform: uppercase;\nfont-style: normal;\nletter-spacing: .015em;\n}\n\n.padding-bottom-40 {\n  padding-bottom: 40px;\n}\n\n.zero-opacity {\n  opacity: 0.5;\n}\n\n.padding-30  {\n  padding-top: 30vh;\n}\n\n.section-title {\n  margin-top: 20px;\n  color: #fff;\nfont-family: \"Gibson\",\"Helvetica Neue\",\"HelveticaNeue\",Helvetica,Arial,sans-serif;\nfont-size: 34px;\nline-height: 1;\nmargin-bottom: 15px;\n}\n.section-desc {\n  font-family: \"Helvetica Neue\",\"HelveticaNeue\",Helvetica,Arial,sans-serif;\nfont-weight: 400;\nline-height: 1.4;\nfont-size: 14px;\nfont-style: normal;\n}\n/*#reg-button {\n  height: 45px;\nwidth: 80%;\nfont-size: 20px;\n}*/\n\n#reg-button, #login-button {\nwidth: 50%;\nfont-size: 20px;\n}\n\n.login-reg-container {\n  width: 40%;\n  padding-top: 10px;\n}\n\n.seperator {\n  margin-top: 20px\n}\n#reg-from {\n  display: none;\n  opacity: 0;\n}\n#reg-from-2 {\n  display: none;\n  opacity: 0;\n}\n\n.profile-bg {\n  background-image: url(slide3.jpg);\n  max-height: 20%;\n}\n\n#profile {\n  background-color: #EDEDED;\n}\n#filters {\n\n}\n#profile-card .card {\n  max-width: 20%;\n}\n\n#profile-card > img {\n  width: 100%;\n}\n\n.sub-heading {\n  display: block;\n  font-weight: bolder;\n  font-size: smaller;\n}\n\n.lighten {\n  font-weight:lighter;\n}\n.embedded {\n  font-weight: lighter;\n     font-size: medium;\n\n}\n.visitor-1 {\n  background-image: url(wed-1.jpg);\n}\n.visitor-2 {\n  background-image: url(wed-2.jpg);\n}\n.visitor-3 {\n  background-image: url(wed-3.jpg);\n}\n.visitor-4 {\n  background-image: url(wed-4.jpg);\n}\n\n.visitor-1,.visitor-2,.visitor-3,.visitor-4 {\n  min-height: 270px;\n  background-size: contain;;\n  background-position: center center;\n  min-width: 318px;\n  background-repeat: no-repeat;\n}\n\n.padding-top-30 {\n  padding-top: 30px;\n}\n\n.card {\nborder: 1px solid #d3e0e9 !important;\nfont-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n.card-columns {\n  border: 1px solid #d3e0e9 !important;\n  }\n\nborder-first {\n    border: 1px solid #d3e0e9 !important;\n}\n.profile-bg {\n  background-image: url(party.jpg);\nmin-height: 400px;\nbackground-repeat: no-repeat;\nbackground-size: cover;\n margin-left: auto;\n margin-right: auto;\n/* float: right; */\n/*margin-left: 100px;*/\n}\n\n.aoh   {\n  max-width: 200px;\n  margin-top: -170px;\n  margin-bottom: 5px;\n  /* border: 3px solid #fff; */\n  /* border-radius: 100%; */\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n  position: absolute;\n  background-color: #fff;\n  border: 4px solid #fff;\n  border-radius: 2px;\n}\n\n.poh {\n    max-width: 30px;\n    width: 100%;\n    height: 80%;\n    margin-right: 5%;\n    border-radius: 50%;\n    margin: 0;\n    padding: 0;\n}\n\n#about-profile {\n  /*margin-top: 40px;*/\n      border-top: 0 !important;\n}\n\n.margin-top-40 {\n  margin-top: 40px;\n}\n\n.font-heading {\n  font-family: helvetica, arial, sans-serif;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 18px;\n}\n\n\n#basic-info {\n  margin-bottom: 0;\n}\n\n\n#noti_Container {\n    position: relative;\n    margin-top: 4px;\n    height: 16px;\n    display: inline-block;\n}\n\n.noti_bubble {\n    position: relative;\n    top: -30px;\n    left: 13px;\n    padding: 1px 2px 1px 2px;\n    background-color: red;\n    color: white;\n    font-weight: bold;\n    font-size: 0.55em;\n    border-radius: 30px;\n    box-shadow: 1px 1px 1px gray;\n    z-index: 5;\n}\n\n#notification {\n    position: relative;\n    z-index: 1;\n    /* left: -25px; */\n    top: 1px;\n    color: #7B7B7B;\n    cursor: pointer;\n    width: 0;\n    color: white;\n    color: rgba(255, 255, 255, 0.8);\n}\n\n.ws:before {\n    content: \"\\EA2E\";\n}\n\n.fa-bell {\n  color: white;\n}\n.search-title {\n  color: #888;\nfont-size: 14px;\n/*height: 100%;*/\n}\n\n.inline-block {\n  display: inline-block !important;\n}\n\n#selfie-bar {\n  background-color: inherit;\n}\n#filter-panel {\n  margin-top: 40px;\n}\n"; });
define('text!button-couple.html', ['module'], function(module) { module.exports = "<template><div class=\"container-fluid login-reg-container\"><button id=\"reg-button\" class=\"btn btn-info btn-md\">Get Started</button> <button id=\"login-button\" class=\"btn btn-success btn-md\">Login</button></div></template>"; });
define('text!profile.css', ['module'], function(module) { module.exports = "@import url(https://fonts.googleapis.com/css?family=Roboto:300,400,600);\n.snip1336 {\n  font-family: 'Roboto', Arial, sans-serif;\n  position: relative;\n  float: left;\n  overflow: hidden;\n  margin: 10px 1%;\n  min-width: 230px;\n  max-width: 315px;\n  width: 100%;\n  color: #ffffff;\n  text-align: left;\n  line-height: 1.4em;\n  background-color: #141414;\n}\n.snip1336 * {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-transition: all 0.25s ease;\n  transition: all 0.25s ease;\n}\n.snip1336 img {\n  max-width: 100%;\n  vertical-align: top;\n  opacity: 0.85;\n}\n.snip1336 figcaption {\n  width: 100%;\n  background-color: #141414;\n  padding: 25px;\n  position: relative;\n}\n.snip1336 figcaption:before {\n  position: absolute;\n  content: '';\n  bottom: 100%;\n  left: 0;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 55px 0 0 400px;\n  border-color: transparent transparent transparent #141414;\n}\n.snip1336 figcaption a {\n  padding: 5px;\n  border: 1px solid #ffffff;\n  color: #ffffff;\n  font-size: 0.7em;\n  text-transform: uppercase;\n  margin: 10px 0;\n  display: inline-block;\n  opacity: 0.65;\n  width: 47%;\n  text-align: center;\n  text-decoration: none;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n.snip1336 figcaption a:hover {\n  opacity: 1;\n}\n.snip1336 .profile {\n  border-radius: 50%;\n  position: absolute;\n  bottom: 100%;\n  left: 25px;\n  z-index: 1;\n  max-width: 90px;\n  opacity: 1;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);\n}\n.snip1336 .follow {\n  margin-right: 4%;\n  border-color: #2980b9;\n  color: #2980b9;\n}\n.snip1336 h2 {\n  margin: 0 0 5px;\n  font-weight: 300;\n}\n.snip1336 h2 span {\n  display: block;\n  font-size: 0.5em;\n  color: #2980b9;\n}\n.snip1336 p {\n  margin: 0 0 10px;\n  font-size: 0.8em;\n  letter-spacing: 1px;\n  opacity: 0.8;\n}\n/* Demo purposes only */\nbody {\n  background-color: #212121;\n}\n"; });
define('text!overlay-text.html', ['module'], function(module) { module.exports = "<template><require from=\"popup-form\"></require><require from=\"button-couple\"></require><div><div class=\"container-fluid carousel-overlay text-center\"><h1 class=\"logo-word\">Bhaduli.</h1><h3>Some awesome tagline.</h3><popup-form></popup-form><button-couple></button-couple></div></div></template>"; });
define('text!popup-form.html', ['module'], function(module) { module.exports = "<template><form class=\"reg-log\"><div class=\"form-group\"><input type=\"email\" class=\"form-control no-border-radius blue-border\" id=\"inputEmail3\" placeholder=\"Email\"> <input type=\"password\" class=\"form-control no-border-radius blue-border\" id=\"inputPassword3\" placeholder=\"Password\"> <input type=\"username\" class=\"form-control no-border-radius blue-border\" id=\"username\" placeholder=\"Username\"></div></form></template>"; });
//# sourceMappingURL=app-bundle.js.map