define(['dart_sdk', 'packages/flutter_web/animation'], (function load__packages__portfolio__utils__screen__screen_utils(dart_sdk, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  var screen_utils = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:portfolio/utils/screen/screen_utils.dart";
  var width$ = dart.privateName(screen_utils, "ScreenUtil.width");
  var height$ = dart.privateName(screen_utils, "ScreenUtil.height");
  var allowFontScaling$ = dart.privateName(screen_utils, "ScreenUtil.allowFontScaling");
  screen_utils.ScreenUtil = class ScreenUtil extends core.Object {
    get width() {
      return this[width$];
    }
    set width(value) {
      this[width$] = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      this[height$] = value;
    }
    get allowFontScaling() {
      return this[allowFontScaling$];
    }
    set allowFontScaling(value) {
      this[allowFontScaling$] = value;
    }
    static getInstance() {
      return screen_utils.ScreenUtil.instance;
    }
    init(context) {
      let mediaQuery = media_query.MediaQuery.of(context);
      screen_utils.ScreenUtil._mediaQueryData = mediaQuery;
      screen_utils.ScreenUtil._pixelRatio = mediaQuery.devicePixelRatio;
      screen_utils.ScreenUtil._screenWidth = mediaQuery.size.width;
      screen_utils.ScreenUtil._screenHeight = mediaQuery.size.height;
      screen_utils.ScreenUtil._statusBarHeight = mediaQuery.padding.top;
      screen_utils.ScreenUtil._bottomBarHeight = screen_utils.ScreenUtil._mediaQueryData.padding.bottom;
      screen_utils.ScreenUtil._textScaleFactor = mediaQuery.textScaleFactor;
    }
    static get mediaQueryData() {
      return screen_utils.ScreenUtil._mediaQueryData;
    }
    static get textScaleFactory() {
      return screen_utils.ScreenUtil._textScaleFactor;
    }
    static get pixelRatio() {
      return screen_utils.ScreenUtil._pixelRatio;
    }
    static get screenWidthDp() {
      return screen_utils.ScreenUtil._screenWidth;
    }
    static get screenHeightDp() {
      return screen_utils.ScreenUtil._screenHeight;
    }
    static get screenWidth() {
      return dart.notNull(screen_utils.ScreenUtil._screenWidth) * dart.notNull(screen_utils.ScreenUtil._pixelRatio);
    }
    static get screenHeight() {
      return dart.notNull(screen_utils.ScreenUtil._screenHeight) * dart.notNull(screen_utils.ScreenUtil._pixelRatio);
    }
    static get statusBarHeight() {
      return screen_utils.ScreenUtil._statusBarHeight;
    }
    static get bottomBarHeight() {
      return screen_utils.ScreenUtil._bottomBarHeight;
    }
    get scaleWidth() {
      return dart.notNull(screen_utils.ScreenUtil._screenWidth) / dart.notNull(screen_utils.ScreenUtil.instance.width);
    }
    get scaleHeight() {
      return dart.notNull(screen_utils.ScreenUtil._screenHeight) / dart.notNull(screen_utils.ScreenUtil.instance.height);
    }
    setWidth(width) {
      return dart.notNull(width) * dart.notNull(core.num.as(this.scaleWidth));
    }
    setHeight(height) {
      return dart.notNull(height) * dart.notNull(core.num.as(this.scaleHeight));
    }
    setSp(fontSize) {
      return dart.test(this.allowFontScaling) ? this.setWidth(fontSize) : dart.dsend(this.setWidth(fontSize), '/', [screen_utils.ScreenUtil._textScaleFactor]);
    }
  };
  (screen_utils.ScreenUtil.new = function(opts) {
    let width = opts && 'width' in opts ? opts.width : 1080;
    let height = opts && 'height' in opts ? opts.height : 1920;
    let allowFontScaling = opts && 'allowFontScaling' in opts ? opts.allowFontScaling : false;
    this[width$] = width;
    this[height$] = height;
    this[allowFontScaling$] = allowFontScaling;
    ;
  }).prototype = screen_utils.ScreenUtil.prototype;
  dart.addTypeTests(screen_utils.ScreenUtil);
  dart.addTypeCaches(screen_utils.ScreenUtil);
  dart.setMethodSignature(screen_utils.ScreenUtil, () => ({
    __proto__: dart.getMethods(screen_utils.ScreenUtil.__proto__),
    init: dart.fnType(dart.void, [dart.legacy(framework.BuildContext)]),
    setWidth: dart.fnType(dart.dynamic, [dart.legacy(core.double)]),
    setHeight: dart.fnType(dart.dynamic, [dart.legacy(core.double)]),
    setSp: dart.fnType(dart.dynamic, [dart.legacy(core.double)])
  }));
  dart.setGetterSignature(screen_utils.ScreenUtil, () => ({
    __proto__: dart.getGetters(screen_utils.ScreenUtil.__proto__),
    scaleWidth: dart.dynamic,
    scaleHeight: dart.dynamic
  }));
  dart.setLibraryUri(screen_utils.ScreenUtil, L0);
  dart.setFieldSignature(screen_utils.ScreenUtil, () => ({
    __proto__: dart.getFields(screen_utils.ScreenUtil.__proto__),
    width: dart.fieldType(dart.legacy(core.double)),
    height: dart.fieldType(dart.legacy(core.double)),
    allowFontScaling: dart.fieldType(dart.legacy(core.bool))
  }));
  dart.defineLazy(screen_utils.ScreenUtil, {
    /*screen_utils.ScreenUtil.instance*/get instance() {
      return new screen_utils.ScreenUtil.new();
    },
    set instance(_) {},
    /*screen_utils.ScreenUtil._mediaQueryData*/get _mediaQueryData() {
      return null;
    },
    set _mediaQueryData(_) {},
    /*screen_utils.ScreenUtil._screenWidth*/get _screenWidth() {
      return null;
    },
    set _screenWidth(_) {},
    /*screen_utils.ScreenUtil._screenHeight*/get _screenHeight() {
      return null;
    },
    set _screenHeight(_) {},
    /*screen_utils.ScreenUtil._pixelRatio*/get _pixelRatio() {
      return null;
    },
    set _pixelRatio(_) {},
    /*screen_utils.ScreenUtil._statusBarHeight*/get _statusBarHeight() {
      return null;
    },
    set _statusBarHeight(_) {},
    /*screen_utils.ScreenUtil._bottomBarHeight*/get _bottomBarHeight() {
      return null;
    },
    set _bottomBarHeight(_) {},
    /*screen_utils.ScreenUtil._textScaleFactor*/get _textScaleFactor() {
      return null;
    },
    set _textScaleFactor(_) {}
  }, true);
  dart.trackLibraries("packages/portfolio/utils/screen/screen_utils", {
    "package:portfolio/utils/screen/screen_utils.dart": screen_utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["screen_utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;;IAWS;;;;;;IACA;;;;;;IACF;;;;;;;AAmBH,YAAO;IACT;SAEuB;AACN,uBAAwB,0BAAG,OAAO;AACrB,MAA5B,0CAAkB,UAAU;AACa,MAAzC,sCAAc,AAAW,UAAD;AACY,MAApC,uCAAe,AAAW,AAAK,UAAN;AACa,MAAtC,wCAAgB,AAAW,AAAK,UAAN;AACe,MAAzC,2CAAmB,AAAW,AAAQ,UAAT;AACoB,MAAjD,2CAAmB,AAAgB,AAAQ;AACE,MAA7C,2CAAmB,AAAW,UAAD;IAC/B;;AAE4C;IAAe;;AAGrB;IAAgB;;AAGtB;IAAW;;AAGR;IAAY;;AAGX;IAAa;;AAGhB,YAAa,cAAb,qDAAe;IAAW;;AAGzB,YAAc,cAAd,sDAAgB;IAAW;;AAGxB;IAAgB;;AAGhB;IAAgB;;AAGnC,YAAa,cAAb,qDAAe,AAAS;IAAK;;AAE5B,YAAc,cAAd,sDAAgB,AAAS;IAAM;aAIlC;AAAU,YAAM,cAAN,KAAK,6BAAG;IAAU;cAM3B;AAAW,YAAO,cAAP,MAAM,6BAAG;IAAW;UAMnC;AAAa,gDACpB,cAAS,QAAQ,IACE,WAAnB,cAAS,QAAQ,SAAI;IAAgB;;;QAnEpC;QACA;QACA;IAFA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;;;MArBgB,gCAAQ;YAAO;;;MAOX,uCAAe;;;;MACvB,oCAAY;;;;MACZ,qCAAa;;;;MACb,mCAAW;;;;MACX,wCAAgB;;;;MAEhB,wCAAgB;;;;MAEhB,wCAAgB","file":"screen_utils.unsound.ddc.js"}');
  // Exports:
  return {
    utils__screen__screen_utils: screen_utils
  };
}));

//# sourceMappingURL=screen_utils.unsound.ddc.js.map
