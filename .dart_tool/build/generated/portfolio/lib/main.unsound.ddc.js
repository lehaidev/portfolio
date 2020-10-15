define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/portfolio/utils/screen/screen_utils', 'packages/portfolio/ui/home'], (function load__packages__portfolio__main(dart_sdk, packages__flutter_web__material, packages__flutter_web_ui__ui, packages__flutter_web__animation, packages__portfolio__utils__screen__screen_utils, packages__portfolio__ui__home) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const app = packages__flutter_web__material.src__material__app;
  const theme_data = packages__flutter_web__material.src__material__theme_data;
  const ui = packages__flutter_web_ui__ui.ui;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const binding = packages__flutter_web__animation.src__widgets__binding;
  const screen_utils = packages__portfolio__utils__screen__screen_utils.utils__screen__screen_utils;
  const home = packages__portfolio__ui__home.ui__home;
  var main = Object.create(dart.library);
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L0 = "package:portfolio/main.dart";
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 21,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/main.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "debugShowCheckedModeBanner",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "theme",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "home",
        [_Location_column]: 7,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], _LocationL());
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C3 || CT.C3,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/main.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 37,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/main.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 10,
        [_Location_line]: 8,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/main.dart"
      });
    }
  }, false);
  var C1;
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C0;
  var C4;
  var C5;
  var C6;
  var C3;
  var C2;
  main.MyApp = class MyApp extends framework.StatelessWidget {
    build(context) {
      return new app.MaterialApp.new({debugShowCheckedModeBanner: false, theme: theme_data.ThemeData.new({brightness: ui.Brightness.light, primaryColorBrightness: ui.Brightness.light, accentColorBrightness: ui.Brightness.light}), home: new main.MyAppChild.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
    }
  };
  (main.MyApp.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(main.MyApp, L0);
  main.MyAppChild = class MyAppChild extends framework.StatefulWidget {
    createState() {
      return new main._MyAppChildState.new();
    }
  };
  (main.MyAppChild.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyAppChild.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyAppChild.prototype;
  dart.addTypeTests(main.MyAppChild);
  dart.addTypeCaches(main.MyAppChild);
  dart.setMethodSignature(main.MyAppChild, () => ({
    __proto__: dart.getMethods(main.MyAppChild.__proto__),
    createState: dart.fnType(dart.legacy(main._MyAppChildState), [])
  }));
  dart.setLibraryUri(main.MyAppChild, L0);
  var C7;
  main._MyAppChildState = class _MyAppChildState extends framework.State$(dart.legacy(main.MyAppChild)) {
    build(context) {
      let t0;
      screen_utils.ScreenUtil.instance = (t0 = screen_utils.ScreenUtil.getInstance(), (() => {
        t0.init(context);
        return t0;
      })());
      return new home.HomePage.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
  };
  (main._MyAppChildState.new = function() {
    main._MyAppChildState.__proto__.new.call(this);
    ;
  }).prototype = main._MyAppChildState.prototype;
  dart.addTypeTests(main._MyAppChildState);
  dart.addTypeCaches(main._MyAppChildState);
  dart.setMethodSignature(main._MyAppChildState, () => ({
    __proto__: dart.getMethods(main._MyAppChildState.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(main._MyAppChildState, L0);
  var C8;
  main.main = function main$() {
    return async.async(dart.void, function* main$() {
      yield ui.webOnlyInitializePlatform();
      binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C8 || CT.C8}));
    });
  };
  dart.trackLibraries("packages/portfolio/main", {
    "package:portfolio/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAY4B;AACxB,YAAO,sDACuB,cACrB,sCACkB,6CACY,4CACD,6BAE9B;IAEV;;;;;;EACF;;;;;;;;;;AAIoC;IAAkB;;;;;;EACtD;;;;;;;;;;UAI4B;;AAGqC,MAAlD,gFAAsB;AAAe,gBAAK,OAAO;;;AAC5D,YAAO;IACT;;;;;EACF;;;;;;;;;;AAjCiB;AACqB,MAApC,MAAM;AACS,MAAf,eAAO;IACT","file":"main.unsound.ddc.js"}');
  // Exports:
  return {
    main: main
  };
}));

//# sourceMappingURL=main.unsound.ddc.js.map
