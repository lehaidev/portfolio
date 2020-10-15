define(['dart_sdk'], (function load__packages__portfolio__constants__fonts(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var fonts = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:portfolio/constants/fonts.dart";
  fonts.Fonts = class Fonts extends core.Object {};
  (fonts.Fonts.__ = function() {
    ;
  }).prototype = fonts.Fonts.prototype;
  dart.addTypeTests(fonts.Fonts);
  dart.addTypeCaches(fonts.Fonts);
  dart.setLibraryUri(fonts.Fonts, L0);
  dart.defineLazy(fonts.Fonts, {
    /*fonts.Fonts.product*/get product() {
      return "ProductSans";
    },
    /*fonts.Fonts.nexa_light*/get nexa_light() {
      return "NexaLight";
    },
    /*fonts.Fonts.nexa_bold*/get nexa_bold() {
      return "NexaBold";
    }
  }, true);
  dart.trackLibraries("packages/portfolio/constants/fonts", {
    "package:portfolio/constants/fonts.dart": fonts
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fonts.dart"],"names":[],"mappings":";;;;;;;;;;;EACW;;;;;MAEW,mBAAO;;;MACP,sBAAU;;;MACV,qBAAS","file":"fonts.unsound.ddc.js"}');
  // Exports:
  return {
    constants__fonts: fonts
  };
}));

//# sourceMappingURL=fonts.unsound.ddc.js.map
