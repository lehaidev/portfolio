define(['dart_sdk', 'packages/flutter_web/animation'], (function load__packages__portfolio__widgets__responsive_widget(dart_sdk, packages__flutter_web__animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_query = packages__flutter_web__animation.src__widgets__media_query;
  const layout_builder = packages__flutter_web__animation.src__widgets__layout_builder;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const box = packages__flutter_web__animation.src__rendering__box;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  var responsive_widget = Object.create(dart.library);
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var BuildContextL = () => (BuildContextL = dart.constFn(dart.legacy(framework.BuildContext)))();
  var BoxConstraintsL = () => (BoxConstraintsL = dart.constFn(dart.legacy(box.BoxConstraints)))();
  var BuildContextLAndBoxConstraintsLToWidgetL = () => (BuildContextLAndBoxConstraintsLToWidgetL = dart.constFn(dart.fnType(WidgetL(), [BuildContextL(), BoxConstraintsL()])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  const CT = Object.create(null);
  var L0 = "package:portfolio/widgets/responsive_widget.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], _LocationL());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 30,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/widgets/responsive_widget.dart"
      });
    }
  }, false);
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C1;
  var C0;
  var largeScreen$ = dart.privateName(responsive_widget, "ResponsiveWidget.largeScreen");
  var mediumScreen$ = dart.privateName(responsive_widget, "ResponsiveWidget.mediumScreen");
  var smallScreen$ = dart.privateName(responsive_widget, "ResponsiveWidget.smallScreen");
  responsive_widget.ResponsiveWidget = class ResponsiveWidget extends framework.StatelessWidget {
    get largeScreen() {
      return this[largeScreen$];
    }
    set largeScreen(value) {
      super.largeScreen = value;
    }
    get mediumScreen() {
      return this[mediumScreen$];
    }
    set mediumScreen(value) {
      super.mediumScreen = value;
    }
    get smallScreen() {
      return this[smallScreen$];
    }
    set smallScreen(value) {
      super.smallScreen = value;
    }
    static isSmallScreen(context) {
      return dart.notNull(media_query.MediaQuery.of(context).size.width) < 768;
    }
    static isLargeScreen(context) {
      return dart.notNull(media_query.MediaQuery.of(context).size.width) > 768;
    }
    static isMediumScreen(context) {
      return dart.notNull(media_query.MediaQuery.of(context).size.width) > 768 && dart.notNull(media_query.MediaQuery.of(context).size.width) < 1200;
    }
    build(context) {
      return new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          let t0, t0$;
          if (dart.notNull(constraints.maxWidth) > 768) {
            return this.largeScreen;
          } else if (dart.notNull(constraints.maxWidth) < 1200 && dart.notNull(constraints.maxWidth) > 425) {
            t0 = this.mediumScreen;
            return t0 == null ? this.largeScreen : t0;
          } else {
            t0$ = this.smallScreen;
            return t0$ == null ? this.largeScreen : t0$;
          }
        }, BuildContextLAndBoxConstraintsLToWidgetL()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (responsive_widget.ResponsiveWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let largeScreen = opts && 'largeScreen' in opts ? opts.largeScreen : null;
    let mediumScreen = opts && 'mediumScreen' in opts ? opts.mediumScreen : null;
    let smallScreen = opts && 'smallScreen' in opts ? opts.smallScreen : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[largeScreen$] = largeScreen;
    this[mediumScreen$] = mediumScreen;
    this[smallScreen$] = smallScreen;
    responsive_widget.ResponsiveWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = responsive_widget.ResponsiveWidget.prototype;
  dart.addTypeTests(responsive_widget.ResponsiveWidget);
  dart.addTypeCaches(responsive_widget.ResponsiveWidget);
  dart.setMethodSignature(responsive_widget.ResponsiveWidget, () => ({
    __proto__: dart.getMethods(responsive_widget.ResponsiveWidget.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)])
  }));
  dart.setLibraryUri(responsive_widget.ResponsiveWidget, L0);
  dart.setFieldSignature(responsive_widget.ResponsiveWidget, () => ({
    __proto__: dart.getFields(responsive_widget.ResponsiveWidget.__proto__),
    largeScreen: dart.finalFieldType(dart.legacy(framework.Widget)),
    mediumScreen: dart.finalFieldType(dart.legacy(framework.Widget)),
    smallScreen: dart.finalFieldType(dart.legacy(framework.Widget))
  }));
  dart.trackLibraries("packages/portfolio/widgets/responsive_widget", {
    "package:portfolio/widgets/responsive_widget.dart": responsive_widget
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["responsive_widget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;IACA;;;;;;IACA;;;;;;yBAS0B;AACrC,YAAyC,cAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe;IAC7C;yBAEuC;AACrC,YAAyC,cAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe;IAC7C;0BAEwC;AACtC,YAAyC,AAAM,cAA7B,AAAY,AAAK,0BAAd,OAAO,gBAAe,OACL,aAAvB,AAAY,AAAK,0BAAd,OAAO,gBAAe;IAC1C;UAG0B;AACxB,YAAO,gDACI,SAAC,SAAS;;AACjB,cAAyB,aAArB,AAAY,WAAD,aAAY;AACzB,kBAAO;gBACF,KAAyB,aAArB,AAAY,WAAD,aAAY,QAA6B,aAArB,AAAY,WAAD,aAAY;AAC/D,iBAAO;gCAAgB;;AAEvB,kBAAO;iCAAe;;;IAI9B;;;QAhCS;QACU;QACV;QACA;;IAFU;IACV;IACA;AACH,sEAAW,GAAG;;EAAC","file":"responsive_widget.unsound.ddc.js"}');
  // Exports:
  return {
    widgets__responsive_widget: responsive_widget
  };
}));

//# sourceMappingURL=responsive_widget.unsound.ddc.js.map
