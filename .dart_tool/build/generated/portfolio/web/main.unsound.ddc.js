define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/portfolio/main'], (function load__web__main(dart_sdk, packages__flutter_web_ui__ui, packages__portfolio__main) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui = packages__flutter_web_ui__ui.ui;
  const main = packages__portfolio__main.main;
  var main$ = Object.create(dart.library);
  const CT = Object.create(null);
  main$.main = function main$0() {
    return async.async(dart.void, function* main$() {
      yield ui.webOnlyInitializePlatform();
      yield main.main();
    });
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;AAGiB;AACqB,MAApC,MAAM;AACU,MAAhB,MAAM;IACR","file":"main.unsound.ddc.js"}');
  // Exports:
  return {
    web__main: main$
  };
}));

//# sourceMappingURL=main.unsound.ddc.js.map
