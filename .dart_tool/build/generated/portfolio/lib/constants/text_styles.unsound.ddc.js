define(['dart_sdk', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], (function load__packages__portfolio__constants__text_styles(dart_sdk, packages__flutter_web__src__animation__animation, packages__flutter_web_ui__ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const ui = packages__flutter_web_ui__ui.ui;
  var text_styles = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:portfolio/constants/text_styles.dart";
  text_styles.TextStyles = class TextStyles extends core.Object {
    static get logo() {
      return new text_style.TextStyle.new({fontFamily: "ProductSans", color: new ui.Color.new(4282728539), fontSize: 22.0, fontWeight: ui.FontWeight.bold, letterSpacing: 1.0});
    }
    static get menu_item() {
      return new text_style.TextStyle.new({fontFamily: "ProductSans", fontSize: 12.0, letterSpacing: 1.0, color: new ui.Color.new(4282728539)});
    }
    static get heading() {
      return new text_style.TextStyle.new({fontFamily: "NexaBold", color: new ui.Color.new(4282728539), fontSize: 45.0, fontWeight: ui.FontWeight.bold, letterSpacing: 1.0});
    }
    static get sub_heading() {
      return new text_style.TextStyle.new({color: new ui.Color.new(4282728539), fontFamily: "ProductSans", fontSize: 17.0, letterSpacing: 1.2});
    }
    static get company() {
      return new text_style.TextStyle.new({fontFamily: "ProductSans", color: new ui.Color.new(4282728539), height: 1.5, fontSize: 15.0, letterSpacing: 1.0});
    }
    static get body() {
      return new text_style.TextStyle.new({fontFamily: "ProductSans", color: new ui.Color.new(4286939548), height: 1.5, fontSize: 12.0, letterSpacing: 1.0});
    }
    static get body1() {
      return new text_style.TextStyle.new({fontFamily: "ProductSans", color: new ui.Color.new(4286939548), height: 1.5, fontSize: 10.0, letterSpacing: 1.0});
    }
    static get chip() {
      return new text_style.TextStyle.new({fontFamily: "ProductSans", color: new ui.Color.new(4286939548), height: 1.5, fontSize: 12.0, letterSpacing: 1.0});
    }
  };
  (text_styles.TextStyles.__ = function() {
    ;
  }).prototype = text_styles.TextStyles.prototype;
  dart.addTypeTests(text_styles.TextStyles);
  dart.addTypeCaches(text_styles.TextStyles);
  dart.setLibraryUri(text_styles.TextStyles, L0);
  dart.trackLibraries("packages/portfolio/constants/text_styles", {
    "package:portfolio/constants/text_styles.dart": text_styles
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["text_styles.dart"],"names":[],"mappings":";;;;;;;;;;;;AAM+B,6EAEhB,iBAAM,uBACH,kBAEa,mCACR;IAChB;;AAE6B,gFAElB,qBACK,YACR,iBAAM;IACd;;AAE2B,0EAEnB,iBAAM,uBACH,kBAEa,mCACR;IAChB;;AAE+B,kDACvB,iBAAM,kDAEH,qBACK;IAChB;;AAE2B,6EAEnB,iBAAM,qBACL,eACE,qBAEK;IAChB;;AAEwB,6EAEhB,iBAAM,qBACL,eACE,qBAEK;IAChB;;AAEyB,6EAEjB,iBAAM,qBACL,eACE,qBAEK;IAChB;;AAEwB,6EAEhB,iBAAM,qBACL,eACE,qBAEK;IAChB;;;;EApES","file":"text_styles.unsound.ddc.js"}');
  // Exports:
  return {
    constants__text_styles: text_styles
  };
}));

//# sourceMappingURL=text_styles.unsound.ddc.js.map
