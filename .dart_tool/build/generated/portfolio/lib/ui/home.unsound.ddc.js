define(['dart_sdk', 'packages/portfolio/models/education', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui', 'packages/flutter_web/animation', 'packages/portfolio/utils/screen/screen_utils', 'packages/portfolio/widgets/responsive_widget', 'packages/flutter_web/src/animation/animation', 'packages/portfolio/constants/text_styles', 'packages/portfolio/constants/strings'], (function load__packages__portfolio__ui__home(dart_sdk, packages__portfolio__models__education, packages__flutter_web__material, packages__flutter_web_ui__ui, packages__flutter_web__animation, packages__portfolio__utils__screen__screen_utils, packages__portfolio__widgets__responsive_widget, packages__flutter_web__src__animation__animation, packages__portfolio__constants__text_styles, packages__portfolio__constants__strings) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const education = packages__portfolio__models__education.models__education;
  const material = packages__flutter_web__material.src__material__material;
  const scaffold = packages__flutter_web__material.src__material__scaffold;
  const colors = packages__flutter_web__material.src__material__colors;
  const app_bar = packages__flutter_web__material.src__material__app_bar;
  const material_button = packages__flutter_web__material.src__material__material_button;
  const drawer = packages__flutter_web__material.src__material__drawer;
  const divider = packages__flutter_web__material.src__material__divider;
  const chip = packages__flutter_web__material.src__material__chip;
  const ui = packages__flutter_web_ui__ui.ui;
  const basic = packages__flutter_web__animation.src__widgets__basic;
  const edge_insets = packages__flutter_web__animation.src__painting__edge_insets;
  const preferred_size = packages__flutter_web__animation.src__widgets__preferred_size;
  const layout_builder = packages__flutter_web__animation.src__widgets__layout_builder;
  const framework = packages__flutter_web__animation.src__widgets__framework;
  const box = packages__flutter_web__animation.src__rendering__box;
  const widget_inspector = packages__flutter_web__animation.src__widgets__widget_inspector;
  const text_span = packages__flutter_web__animation.src__painting__text_span;
  const text = packages__flutter_web__animation.src__widgets__text;
  const scroll_view = packages__flutter_web__animation.src__widgets__scroll_view;
  const single_child_scroll_view = packages__flutter_web__animation.src__widgets__single_child_scroll_view;
  const flex = packages__flutter_web__animation.src__rendering__flex;
  const image = packages__flutter_web__animation.src__widgets__image;
  const gesture_detector = packages__flutter_web__animation.src__widgets__gesture_detector;
  const screen_utils = packages__portfolio__utils__screen__screen_utils.utils__screen__screen_utils;
  const responsive_widget = packages__portfolio__widgets__responsive_widget.widgets__responsive_widget;
  const text_style = packages__flutter_web__src__animation__animation.src__painting__text_style;
  const alignment = packages__flutter_web__src__animation__animation.src__painting__alignment;
  const text_styles = packages__portfolio__constants__text_styles.constants__text_styles;
  const strings = packages__portfolio__constants__strings.constants__strings;
  var home = Object.create(dart.library);
  var $replaceFirst = dartx.replaceFirst;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $open = dartx.open;
  var StringL = () => (StringL = dart.constFn(dart.legacy(core.String)))();
  var JSArrayOfStringL = () => (JSArrayOfStringL = dart.constFn(_interceptors.JSArray$(StringL())))();
  var EducationL = () => (EducationL = dart.constFn(dart.legacy(education.Education)))();
  var JSArrayOfEducationL = () => (JSArrayOfEducationL = dart.constFn(_interceptors.JSArray$(EducationL())))();
  var doubleL = () => (doubleL = dart.constFn(dart.legacy(core.double)))();
  var PreferredSizeWidgetL = () => (PreferredSizeWidgetL = dart.constFn(dart.legacy(preferred_size.PreferredSizeWidget)))();
  var WidgetL = () => (WidgetL = dart.constFn(dart.legacy(framework.Widget)))();
  var BuildContextL = () => (BuildContextL = dart.constFn(dart.legacy(framework.BuildContext)))();
  var BoxConstraintsL = () => (BoxConstraintsL = dart.constFn(dart.legacy(box.BoxConstraints)))();
  var BuildContextLAndBoxConstraintsLToWidgetL = () => (BuildContextLAndBoxConstraintsLToWidgetL = dart.constFn(dart.fnType(WidgetL(), [BuildContextL(), BoxConstraintsL()])))();
  var _LocationL = () => (_LocationL = dart.constFn(dart.legacy(widget_inspector._Location)))();
  var TextSpanL = () => (TextSpanL = dart.constFn(dart.legacy(text_span.TextSpan)))();
  var JSArrayOfTextSpanL = () => (JSArrayOfTextSpanL = dart.constFn(_interceptors.JSArray$(TextSpanL())))();
  var VoidToNullN = () => (VoidToNullN = dart.constFn(dart.fnType(core.Null, [])))();
  var JSArrayOfWidgetL = () => (JSArrayOfWidgetL = dart.constFn(_interceptors.JSArray$(WidgetL())))();
  var PaddingL = () => (PaddingL = dart.constFn(dart.legacy(basic.Padding)))();
  var StringLToPaddingL = () => (StringLToPaddingL = dart.constFn(dart.fnType(PaddingL(), [StringL()])))();
  var EducationLToWidgetL = () => (EducationLToWidgetL = dart.constFn(dart.fnType(WidgetL(), [EducationL()])))();
  const CT = Object.create(null);
  var L0 = "package:portfolio/ui/home.dart";
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 31,
        [_Location_line]: 23,
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
        [_Location_column]: 17,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 11,
        [_Location_line]: 20,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 11,
        [_Location_line]: 21,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "drawer",
        [_Location_column]: 11,
        [_Location_line]: 22,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 11,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], _LocationL());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 19,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 9,
        [_Location_line]: 17,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 19,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], _LocationL());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 16,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 15,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 16,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15, C16 || CT.C16], _LocationL());
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 14,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "titleSpacing",
        [_Location_column]: 7,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 7,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "backgroundColor",
        [_Location_column]: 7,
        [_Location_line]: 36,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "elevation",
        [_Location_column]: 7,
        [_Location_line]: 37,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 7,
        [_Location_line]: 38,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], _LocationL());
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C18 || CT.C18,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 33,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 7,
        [_Location_line]: 45,
        [_Location_file]: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], _LocationL());
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C25 || CT.C25,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 44,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 73,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], _LocationL());
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33, C34 || CT.C34], _LocationL());
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C32 || CT.C32,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], _LocationL());
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], _LocationL());
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 79,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 19,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 11,
        [_Location_line]: 89,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46], _LocationL());
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 87,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 9,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], _LocationL());
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C48 || CT.C48,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 86,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets__bottom]: 20,
        [EdgeInsets__right]: 20,
        [EdgeInsets__top]: 20,
        [EdgeInsets__left]: 20
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55], _LocationL());
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 99,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58], _LocationL());
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C57 || CT.C57,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "largeScreen",
        [_Location_column]: 11,
        [_Location_line]: 114,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mediumScreen",
        [_Location_column]: 11,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "smallScreen",
        [_Location_column]: 11,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61, C62 || CT.C62, C63 || CT.C63], _LocationL());
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C60 || CT.C60,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 113,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "constraints",
        [_Location_column]: 9,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 9,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], _LocationL());
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 110,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 110,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70], _LocationL());
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 26,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74], _LocationL());
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C72 || CT.C72,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 15,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 131,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], _LocationL());
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81], _LocationL());
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C80 || CT.C80,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 128,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 125,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 126,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 127,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85, C86 || CT.C86], _LocationL());
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C83 || CT.C83,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 124,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 124,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89], _LocationL());
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C88 || CT.C88,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 123,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 26,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 35,
        [_Location_line]: 153,
        [_Location_file]: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93], _LocationL());
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C91 || CT.C91,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 153,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 15,
        [_Location_line]: 151,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 152,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], _LocationL());
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 150,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 150,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100], _LocationL());
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 149,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 146,
        [_Location_file]: null
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 147,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 148,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103, C104 || CT.C104, C105 || CT.C105], _LocationL());
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 145,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108], _LocationL());
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C107 || CT.C107,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 144,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 20,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 168,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111, C112 || CT.C112], _LocationL());
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C110 || CT.C110,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 168,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C114() {
      return C114 = dart.constList([], _LocationL());
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 169,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 172,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117], _LocationL());
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C116 || CT.C116,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 171,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 175,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120], _LocationL());
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C119 || CT.C119,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 174,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 9,
        [_Location_line]: 166,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 167,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124], _LocationL());
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C122 || CT.C122,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 165,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 165,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], _LocationL());
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 164,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 14,
        [_Location_line]: 184,
        [_Location_file]: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 7,
        [_Location_line]: 185,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131], _LocationL());
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 183,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 18,
        [_Location_line]: 195,
        [_Location_file]: null
      });
    },
    get C133() {
      return C133 = dart.constList([C134 || CT.C134], _LocationL());
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C133 || CT.C133,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 195,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 18,
        [_Location_line]: 197,
        [_Location_file]: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137], _LocationL());
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C136 || CT.C136,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 197,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 18,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.constList([C140 || CT.C140], _LocationL());
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C139 || CT.C139,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 18,
        [_Location_line]: 201,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.constList([C143 || CT.C143], _LocationL());
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C142 || CT.C142,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 201,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 28,
        [_Location_line]: 208,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146], _LocationL());
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C145 || CT.C145,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 208,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 17,
        [_Location_line]: 204,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 17,
        [_Location_line]: 205,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 206,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150, C151 || CT.C151], _LocationL());
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C148 || CT.C148,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 203,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 7,
        [_Location_line]: 191,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 192,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 193,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155, C156 || CT.C156, C157 || CT.C157], _LocationL());
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C153 || CT.C153,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 190,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 7,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160], _LocationL());
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C159 || CT.C159,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 218,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 11,
        [_Location_line]: 249,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 251,
        [_Location_file]: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164], _LocationL());
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C162 || CT.C162,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 247,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 17,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 260,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167, C168 || CT.C168], _LocationL());
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C166 || CT.C166,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 258,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 257,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171, C172 || CT.C172], _LocationL());
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C170 || CT.C170,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 256,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 11,
        [_Location_line]: 270,
        [_Location_file]: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 271,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175, C176 || CT.C176], _LocationL());
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C174 || CT.C174,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 269,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 18,
        [_Location_line]: 273,
        [_Location_file]: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179], _LocationL());
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C178 || CT.C178,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 273,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 11,
        [_Location_line]: 275,
        [_Location_file]: null
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 276,
        [_Location_file]: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182, C183 || CT.C183], _LocationL());
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C181 || CT.C181,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 274,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 267,
        [_Location_file]: null
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 268,
        [_Location_file]: null
      });
    },
    get C185() {
      return C185 = dart.constList([C186 || CT.C186, C187 || CT.C187], _LocationL());
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C185 || CT.C185,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 266,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 298,
        [_Location_file]: null
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 299,
        [_Location_file]: null
      });
    },
    get C189() {
      return C189 = dart.constList([C190 || CT.C190, C191 || CT.C191], _LocationL());
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C189 || CT.C189,
        [_Location_name]: null,
        [_Location_column]: 25,
        [_Location_line]: 297,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 14,
        [_Location_line]: 308,
        [_Location_file]: null
      });
    },
    get C193() {
      return C193 = dart.constList([C194 || CT.C194], _LocationL());
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C193 || CT.C193,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 308,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 7,
        [_Location_line]: 304,
        [_Location_file]: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 305,
        [_Location_file]: null
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 306,
        [_Location_file]: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197, C198 || CT.C198, C199 || CT.C199], _LocationL());
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C196 || CT.C196,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 303,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 316,
        [_Location_file]: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 317,
        [_Location_file]: null
      });
    },
    get C201() {
      return C201 = dart.constList([C202 || CT.C202, C203 || CT.C203], _LocationL());
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C201 || CT.C201,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 315,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 9,
        [_Location_line]: 324,
        [_Location_file]: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 9,
        [_Location_line]: 325,
        [_Location_file]: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206, C207 || CT.C207], _LocationL());
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C205 || CT.C205,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 323,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "label",
        [_Location_column]: 7,
        [_Location_line]: 323,
        [_Location_file]: null
      });
    },
    get C209() {
      return C209 = dart.constList([C210 || CT.C210], _LocationL());
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C209 || CT.C209,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 322,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 18,
        [_Location_line]: 360,
        [_Location_file]: null
      });
    },
    get C212() {
      return C212 = dart.constList([C213 || CT.C213], _LocationL());
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C212 || CT.C212,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 360,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 356,
        [_Location_file]: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 357,
        [_Location_file]: null
      });
    },
    get C215() {
      return C215 = dart.constList([C216 || CT.C216, C217 || CT.C217], _LocationL());
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C215 || CT.C215,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 355,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 368,
        [_Location_file]: null
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 369,
        [_Location_file]: null
      });
    },
    get C219() {
      return C219 = dart.constList([C220 || CT.C220, C221 || CT.C221], _LocationL());
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C219 || CT.C219,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 367,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 7,
        [_Location_line]: 375,
        [_Location_file]: null
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 376,
        [_Location_file]: null
      });
    },
    get C223() {
      return C223 = dart.constList([C224 || CT.C224, C225 || CT.C225], _LocationL());
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C223 || CT.C223,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 374,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 384,
        [_Location_file]: null
      });
    },
    get C227() {
      return C227 = dart.constList([C228 || CT.C228], _LocationL());
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C227 || CT.C227,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 384,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 32,
        [_Location_line]: 394,
        [_Location_file]: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 395,
        [_Location_file]: null
      });
    },
    get C230() {
      return C230 = dart.constList([C231 || CT.C231, C232 || CT.C232], _LocationL());
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C230 || CT.C230,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 393,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 40,
        [_Location_line]: 398,
        [_Location_file]: null
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 399,
        [_Location_file]: null
      });
    },
    get C234() {
      return C234 = dart.constList([C235 || CT.C235, C236 || CT.C236], _LocationL());
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C234 || CT.C234,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 397,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 48,
        [_Location_line]: 404,
        [_Location_file]: null
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 13,
        [_Location_line]: 405,
        [_Location_file]: null
      });
    },
    get C238() {
      return C238 = dart.constList([C239 || CT.C239, C240 || CT.C240], _LocationL());
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C238 || CT.C238,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 403,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 9,
        [_Location_line]: 391,
        [_Location_file]: null
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 392,
        [_Location_file]: null
      });
    },
    get C242() {
      return C242 = dart.constList([C243 || CT.C243, C244 || CT.C244], _LocationL());
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C242 || CT.C242,
        [_Location_name]: null,
        [_Location_column]: 14,
        [_Location_line]: 390,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 389,
        [_Location_file]: null
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 390,
        [_Location_file]: null
      });
    },
    get C246() {
      return C246 = dart.constList([C247 || CT.C247, C248 || CT.C248], _LocationL());
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C246 || CT.C246,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 388,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C114 || CT.C114,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 416,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 424,
        [_Location_file]: null
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 17,
        [_Location_line]: 425,
        [_Location_file]: null
      });
    },
    get C251() {
      return C251 = dart.constList([C252 || CT.C252, C253 || CT.C253], _LocationL());
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C251 || CT.C251,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 423,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 428,
        [_Location_file]: null
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 17,
        [_Location_line]: 429,
        [_Location_file]: null
      });
    },
    get C255() {
      return C255 = dart.constList([C256 || CT.C256, C257 || CT.C257], _LocationL());
    },
    get C254() {
      return C254 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C255 || CT.C255,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 427,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 13,
        [_Location_line]: 420,
        [_Location_file]: null
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 13,
        [_Location_line]: 421,
        [_Location_file]: null
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 422,
        [_Location_file]: null
      });
    },
    get C259() {
      return C259 = dart.constList([C260 || CT.C260, C261 || CT.C261, C262 || CT.C262], _LocationL());
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C259 || CT.C259,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 419,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 11,
        [_Location_line]: 418,
        [_Location_file]: null
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 419,
        [_Location_file]: null
      });
    },
    get C264() {
      return C264 = dart.constList([C265 || CT.C265, C266 || CT.C266], _LocationL());
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C264 || CT.C264,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 417,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 415,
        [_Location_file]: null
      });
    },
    get C268() {
      return C268 = dart.constList([C269 || CT.C269], _LocationL());
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C268 || CT.C268,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 414,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 15,
        [_Location_line]: 440,
        [_Location_file]: null
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 7,
        [_Location_line]: 441,
        [_Location_file]: null
      });
    },
    get C271() {
      return C271 = dart.constList([C272 || CT.C272, C273 || CT.C273], _LocationL());
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C271 || CT.C271,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 439,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 20,
        [_Location_line]: 458,
        [_Location_file]: null
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 459,
        [_Location_file]: null
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 460,
        [_Location_file]: null
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 461,
        [_Location_file]: null
      });
    },
    get C275() {
      return C275 = dart.constList([C276 || CT.C276, C277 || CT.C277, C278 || CT.C278, C279 || CT.C279], _LocationL());
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C275 || CT.C275,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 457,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 453,
        [_Location_file]: null
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 457,
        [_Location_file]: null
      });
    },
    get C281() {
      return C281 = dart.constList([C282 || CT.C282, C283 || CT.C283], _LocationL());
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C281 || CT.C281,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 452,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 18,
        [_Location_line]: 464,
        [_Location_file]: null
      });
    },
    get C285() {
      return C285 = dart.constList([C286 || CT.C286], _LocationL());
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C285 || CT.C285,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 464,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 20,
        [_Location_line]: 470,
        [_Location_file]: null
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 471,
        [_Location_file]: null
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 472,
        [_Location_file]: null
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 473,
        [_Location_file]: null
      });
    },
    get C288() {
      return C288 = dart.constList([C289 || CT.C289, C290 || CT.C290, C291 || CT.C291, C292 || CT.C292], _LocationL());
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C288 || CT.C288,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 469,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 466,
        [_Location_file]: null
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 469,
        [_Location_file]: null
      });
    },
    get C294() {
      return C294 = dart.constList([C295 || CT.C295, C296 || CT.C296], _LocationL());
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C294 || CT.C294,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 465,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 18,
        [_Location_line]: 476,
        [_Location_file]: null
      });
    },
    get C298() {
      return C298 = dart.constList([C299 || CT.C299], _LocationL());
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C298 || CT.C298,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 476,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 20,
        [_Location_line]: 482,
        [_Location_file]: null
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 483,
        [_Location_file]: null
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 484,
        [_Location_file]: null
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 485,
        [_Location_file]: null
      });
    },
    get C301() {
      return C301 = dart.constList([C302 || CT.C302, C303 || CT.C303, C304 || CT.C304, C305 || CT.C305], _LocationL());
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C301 || CT.C301,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 481,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 478,
        [_Location_file]: null
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 481,
        [_Location_file]: null
      });
    },
    get C307() {
      return C307 = dart.constList([C308 || CT.C308, C309 || CT.C309], _LocationL());
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C307 || CT.C307,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 477,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 18,
        [_Location_line]: 488,
        [_Location_file]: null
      });
    },
    get C311() {
      return C311 = dart.constList([C312 || CT.C312], _LocationL());
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C311 || CT.C311,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 488,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 20,
        [_Location_line]: 494,
        [_Location_file]: null
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 13,
        [_Location_line]: 495,
        [_Location_file]: null
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 13,
        [_Location_line]: 496,
        [_Location_file]: null
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 13,
        [_Location_line]: 497,
        [_Location_file]: null
      });
    },
    get C314() {
      return C314 = dart.constList([C315 || CT.C315, C316 || CT.C316, C317 || CT.C317, C318 || CT.C318], _LocationL());
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C314 || CT.C314,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 493,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 11,
        [_Location_line]: 490,
        [_Location_file]: null
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 493,
        [_Location_file]: null
      });
    },
    get C320() {
      return C320 = dart.constList([C321 || CT.C321, C322 || CT.C322], _LocationL());
    },
    get C319() {
      return C319 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C320 || CT.C320,
        [_Location_name]: null,
        [_Location_column]: 9,
        [_Location_line]: 489,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisSize",
        [_Location_column]: 7,
        [_Location_line]: 449,
        [_Location_file]: null
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "mainAxisAlignment",
        [_Location_column]: 7,
        [_Location_line]: 450,
        [_Location_file]: null
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 451,
        [_Location_file]: null
      });
    },
    get C324() {
      return C324 = dart.constList([C325 || CT.C325, C326 || CT.C326, C327 || CT.C327], _LocationL());
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C324 || CT.C324,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 448,
        [_Location_file]: "org-dartlang-app:///packages/portfolio/ui/home.dart"
      });
    }
  }, false);
  var _buildAppBar = dart.privateName(home, "_buildAppBar");
  var _buildDrawer = dart.privateName(home, "_buildDrawer");
  var _buildBody = dart.privateName(home, "_buildBody");
  var _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  var _Location_name = dart.privateName(widget_inspector, "_Location.name");
  var _Location_column = dart.privateName(widget_inspector, "_Location.column");
  var _Location_line = dart.privateName(widget_inspector, "_Location.line");
  var _Location_file = dart.privateName(widget_inspector, "_Location.file");
  var C2;
  var C1;
  var C0;
  var C5;
  var C6;
  var C7;
  var C8;
  var C4;
  var C3;
  var C11;
  var C12;
  var C10;
  var C9;
  var C15;
  var C16;
  var C14;
  var C13;
  var _buildTitle = dart.privateName(home, "_buildTitle");
  var _buildActions = dart.privateName(home, "_buildActions");
  var C19;
  var C20;
  var C21;
  var C22;
  var C23;
  var C18;
  var C17;
  var C26;
  var C25;
  var C24;
  var C29;
  var C30;
  var C28;
  var C27;
  var C33;
  var C34;
  var C32;
  var C31;
  var C37;
  var C38;
  var C36;
  var C35;
  var C41;
  var C42;
  var C40;
  var C39;
  var C45;
  var C46;
  var C44;
  var C43;
  var C49;
  var C50;
  var C48;
  var C47;
  var EdgeInsets__bottom = dart.privateName(edge_insets, "EdgeInsets._bottom");
  var EdgeInsets__right = dart.privateName(edge_insets, "EdgeInsets._right");
  var EdgeInsets__top = dart.privateName(edge_insets, "EdgeInsets._top");
  var EdgeInsets__left = dart.privateName(edge_insets, "EdgeInsets._left");
  var C51;
  var C54;
  var C55;
  var C53;
  var C52;
  var C58;
  var C57;
  var C56;
  var _buildLargeScreen = dart.privateName(home, "_buildLargeScreen");
  var _buildMediumScreen = dart.privateName(home, "_buildMediumScreen");
  var _buildSmallScreen = dart.privateName(home, "_buildSmallScreen");
  var C61;
  var C62;
  var C63;
  var C60;
  var C59;
  var C66;
  var C67;
  var C65;
  var C64;
  var C70;
  var C69;
  var C68;
  var _buildContent = dart.privateName(home, "_buildContent");
  var C73;
  var C74;
  var C72;
  var C71;
  var _buildIllustration = dart.privateName(home, "_buildIllustration");
  var C77;
  var C78;
  var C76;
  var C75;
  var C81;
  var C80;
  var C79;
  var _buildFooter = dart.privateName(home, "_buildFooter");
  var C84;
  var C85;
  var C86;
  var C83;
  var C82;
  var C89;
  var C88;
  var C87;
  var C92;
  var C93;
  var C91;
  var C90;
  var C96;
  var C97;
  var C95;
  var C94;
  var C100;
  var C99;
  var C98;
  var C103;
  var C104;
  var C105;
  var C102;
  var C101;
  var C108;
  var C107;
  var C106;
  var C111;
  var C112;
  var C110;
  var C109;
  var C114;
  var C113;
  var _buildCopyRightText = dart.privateName(home, "_buildCopyRightText");
  var C117;
  var C116;
  var C115;
  var _buildSocialIcons = dart.privateName(home, "_buildSocialIcons");
  var C120;
  var C119;
  var C118;
  var C123;
  var C124;
  var C122;
  var C121;
  var C127;
  var C126;
  var C125;
  var C130;
  var C131;
  var C129;
  var C128;
  var C134;
  var C133;
  var C132;
  var _buildAboutMe = dart.privateName(home, "_buildAboutMe");
  var C137;
  var C136;
  var C135;
  var _buildHeadline = dart.privateName(home, "_buildHeadline");
  var C140;
  var C139;
  var C138;
  var _buildSummary = dart.privateName(home, "_buildSummary");
  var C143;
  var C142;
  var C141;
  var _buildEducation = dart.privateName(home, "_buildEducation");
  var C146;
  var C145;
  var C144;
  var _buildSkills = dart.privateName(home, "_buildSkills");
  var C149;
  var C150;
  var C151;
  var C148;
  var C147;
  var _buildSkillsAndEducation = dart.privateName(home, "_buildSkillsAndEducation");
  var C154;
  var C155;
  var C156;
  var C157;
  var C153;
  var C152;
  var C160;
  var C159;
  var C158;
  var C163;
  var C164;
  var C162;
  var C161;
  var C167;
  var C168;
  var C166;
  var C165;
  var C171;
  var C172;
  var C170;
  var C169;
  var C175;
  var C176;
  var C174;
  var C173;
  var C179;
  var C178;
  var C177;
  var C182;
  var C183;
  var C181;
  var C180;
  var C186;
  var C187;
  var C185;
  var C184;
  var _buildSkillChip = dart.privateName(home, "_buildSkillChip");
  var C190;
  var C191;
  var C189;
  var C188;
  var _buildSkillsContainerHeading = dart.privateName(home, "_buildSkillsContainerHeading");
  var C194;
  var C193;
  var C192;
  var C197;
  var C198;
  var C199;
  var C196;
  var C195;
  var C202;
  var C203;
  var C201;
  var C200;
  var C206;
  var C207;
  var C205;
  var C204;
  var C210;
  var C209;
  var C208;
  var _buildEducationContainerHeading = dart.privateName(home, "_buildEducationContainerHeading");
  var _buildEducationSummary = dart.privateName(home, "_buildEducationSummary");
  var C213;
  var C212;
  var C211;
  var _buildEducationTimeline = dart.privateName(home, "_buildEducationTimeline");
  var C216;
  var C217;
  var C215;
  var C214;
  var C220;
  var C221;
  var C219;
  var C218;
  var C224;
  var C225;
  var C223;
  var C222;
  var _buildEducationTile = dart.privateName(home, "_buildEducationTile");
  var C228;
  var C227;
  var C226;
  var C231;
  var C232;
  var C230;
  var C229;
  var C235;
  var C236;
  var C234;
  var C233;
  var C239;
  var C240;
  var C238;
  var C237;
  var C243;
  var C244;
  var C242;
  var C241;
  var C247;
  var C248;
  var C246;
  var C245;
  var C249;
  var C252;
  var C253;
  var C251;
  var C250;
  var C256;
  var C257;
  var C255;
  var C254;
  var C260;
  var C261;
  var C262;
  var C259;
  var C258;
  var C265;
  var C266;
  var C264;
  var C263;
  var C269;
  var C268;
  var C267;
  var C272;
  var C273;
  var C271;
  var C270;
  var C276;
  var C277;
  var C278;
  var C279;
  var C275;
  var C274;
  var C282;
  var C283;
  var C281;
  var C280;
  var C286;
  var C285;
  var C284;
  var C289;
  var C290;
  var C291;
  var C292;
  var C288;
  var C287;
  var C295;
  var C296;
  var C294;
  var C293;
  var C299;
  var C298;
  var C297;
  var C302;
  var C303;
  var C304;
  var C305;
  var C301;
  var C300;
  var C308;
  var C309;
  var C307;
  var C306;
  var C312;
  var C311;
  var C310;
  var C315;
  var C316;
  var C317;
  var C318;
  var C314;
  var C313;
  var C321;
  var C322;
  var C320;
  var C319;
  var C325;
  var C326;
  var C327;
  var C324;
  var C323;
  var skills = dart.privateName(home, "HomePage.skills");
  var educationList = dart.privateName(home, "HomePage.educationList");
  home.HomePage = class HomePage extends framework.StatelessWidget {
    get skills() {
      return this[skills];
    }
    set skills(value) {
      super.skills = value;
    }
    get educationList() {
      return this[educationList];
    }
    set educationList(value) {
      super.educationList = value;
    }
    build(context) {
      return new material.Material.new({color: new ui.Color.new(4294441210), child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({horizontal: doubleL().as(screen_utils.ScreenUtil.getInstance().setWidth(108.0))}), child: new scaffold.Scaffold.new({backgroundColor: colors.Colors.transparent, appBar: PreferredSizeWidgetL().as(this[_buildAppBar](context)), drawer: this[_buildDrawer](context), body: new layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => this[_buildBody](context, constraints), BuildContextLAndBoxConstraintsLToWidgetL()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13});
    }
    [_buildAppBar](context) {
      return new app_bar.AppBar.new({titleSpacing: 0.0, title: this[_buildTitle](), backgroundColor: colors.Colors.transparent, elevation: 0.0, actions: !dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? this[_buildActions]() : null, $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
    }
    [_buildTitle]() {
      return new basic.RichText.new({text: new text_span.TextSpan.new({style: new text_style.TextStyle.new({fontSize: 14.0, color: colors.Colors.black}), children: JSArrayOfTextSpanL().of([new text_span.TextSpan.new({text: "Portfoli", style: text_styles.TextStyles.logo}), new text_span.TextSpan.new({text: "o", style: text_styles.TextStyles.logo.copyWith({color: new ui.Color.new(4283477952)})})])}), $creationLocationd_0dea112b090073317d4: C24 || CT.C24});
    }
    [_buildActions]() {
      return JSArrayOfWidgetL().of([new material_button.MaterialButton.new({child: new text.Text.new("Home", {style: text_styles.TextStyles.menu_item.copyWith({color: new ui.Color.new(4283477952)}), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), onPressed: dart.fn(() => {
          }, VoidToNullN()), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new material_button.MaterialButton.new({child: new text.Text.new("About", {style: text_styles.TextStyles.menu_item, $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), onPressed: dart.fn(() => {
          }, VoidToNullN()), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), new material_button.MaterialButton.new({child: new text.Text.new("Contact", {style: text_styles.TextStyles.menu_item, $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), onPressed: dart.fn(() => {
          }, VoidToNullN()), $creationLocationd_0dea112b090073317d4: C47 || CT.C47})]);
    }
    [_buildDrawer](context) {
      return dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? new drawer.Drawer.new({child: new scroll_view.ListView.new({padding: C51 || CT.C51, children: this[_buildActions](), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}) : null;
    }
    [_buildBody](context, constraints) {
      return new single_child_scroll_view.SingleChildScrollView.new({child: new basic.ConstrainedBox.new({constraints: new box.BoxConstraints.new({minWidth: constraints.maxWidth, minHeight: constraints.maxHeight}), child: new responsive_widget.ResponsiveWidget.new({largeScreen: this[_buildLargeScreen](context), mediumScreen: this[_buildMediumScreen](context), smallScreen: this[_buildSmallScreen](context), $creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), $creationLocationd_0dea112b090073317d4: C68 || CT.C68});
    }
    [_buildLargeScreen](context) {
      return new basic.IntrinsicHeight.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidgetL().of([new basic.Expanded.new({child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, children: JSArrayOfWidgetL().of([new basic.Expanded.new({flex: 1, child: this[_buildContent](context), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), this[_buildIllustration]()]), $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), this[_buildFooter](context)]), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), $creationLocationd_0dea112b090073317d4: C87 || CT.C87});
    }
    [_buildMediumScreen](context) {
      return new basic.IntrinsicHeight.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, mainAxisAlignment: flex.MainAxisAlignment.start, children: JSArrayOfWidgetL().of([new basic.Expanded.new({child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, children: JSArrayOfWidgetL().of([new basic.Expanded.new({flex: 1, child: this[_buildContent](context), $creationLocationd_0dea112b090073317d4: C90 || CT.C90})]), $creationLocationd_0dea112b090073317d4: C94 || CT.C94}), $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), this[_buildFooter](context)]), $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), $creationLocationd_0dea112b090073317d4: C106 || CT.C106});
    }
    [_buildSmallScreen](context) {
      return new basic.IntrinsicHeight.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidgetL().of([new basic.Expanded.new({flex: 1, child: this[_buildContent](context), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C113 || CT.C113}), this[_buildCopyRightText](context), new basic.SizedBox.new({height: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 12.0 : 0.0, $creationLocationd_0dea112b090073317d4: C115 || CT.C115}), this[_buildSocialIcons](), new basic.SizedBox.new({height: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 12.0 : 0.0, $creationLocationd_0dea112b090073317d4: C118 || CT.C118})]), $creationLocationd_0dea112b090073317d4: C121 || CT.C121}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125});
    }
    [_buildIllustration]() {
      return new image.Image.network("assets/images/programmer-3.gif", {height: doubleL().as(screen_utils.ScreenUtil.getInstance().setWidth(345.0)), $creationLocationd_0dea112b090073317d4: C128 || CT.C128});
    }
    [_buildContent](context) {
      return new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, mainAxisAlignment: flex.MainAxisAlignment.center, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidgetL().of([new basic.SizedBox.new({height: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 24.0 : 0.0, $creationLocationd_0dea112b090073317d4: C132 || CT.C132}), this[_buildAboutMe](context), new basic.SizedBox.new({height: 4.0, $creationLocationd_0dea112b090073317d4: C135 || CT.C135}), this[_buildHeadline](context), new basic.SizedBox.new({height: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 12.0 : 24.0, $creationLocationd_0dea112b090073317d4: C138 || CT.C138}), this[_buildSummary](), new basic.SizedBox.new({height: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 24.0 : 48.0, $creationLocationd_0dea112b090073317d4: C141 || CT.C141}), dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidgetL().of([this[_buildEducation](), new basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: C144 || CT.C144}), this[_buildSkills](context)]), $creationLocationd_0dea112b090073317d4: C147 || CT.C147}) : this[_buildSkillsAndEducation](context)]), $creationLocationd_0dea112b090073317d4: C152 || CT.C152});
    }
    [_buildAboutMe](context) {
      return new basic.RichText.new({text: new text_span.TextSpan.new({style: new text_style.TextStyle.new({fontSize: 14.0, color: colors.Colors.black}), children: JSArrayOfTextSpanL().of([new text_span.TextSpan.new({text: "About", style: text_styles.TextStyles.heading.copyWith({fontFamily: "NexaLight", fontSize: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 36.0 : 45.0})}), new text_span.TextSpan.new({text: " Me", style: text_styles.TextStyles.heading.copyWith({color: new ui.Color.new(4283477952), fontSize: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 36.0 : 45.0})})])}), $creationLocationd_0dea112b090073317d4: C158 || CT.C158});
    }
    [_buildHeadline](context) {
      return new text.Text.new(dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? strings.Strings.headline : strings.Strings.headline[$replaceFirst](core.RegExp.new(" f"), "\nf"), {style: text_styles.TextStyles.sub_heading, $creationLocationd_0dea112b090073317d4: C161 || CT.C161});
    }
    [_buildSummary]() {
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 80.0}), child: new text.Text.new(strings.Strings.summary, {style: text_styles.TextStyles.body, $creationLocationd_0dea112b090073317d4: C165 || CT.C165}), $creationLocationd_0dea112b090073317d4: C169 || CT.C169});
    }
    [_buildSkillsAndEducation](context) {
      return new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidgetL().of([new basic.Expanded.new({flex: 1, child: this[_buildEducation](), $creationLocationd_0dea112b090073317d4: C173 || CT.C173}), new basic.SizedBox.new({width: 40.0, $creationLocationd_0dea112b090073317d4: C177 || CT.C177}), new basic.Expanded.new({flex: 1, child: this[_buildSkills](context), $creationLocationd_0dea112b090073317d4: C180 || CT.C180})]), $creationLocationd_0dea112b090073317d4: C184 || CT.C184});
    }
    [_buildSkills](context) {
      let widgets = this.skills[$map](PaddingL(), dart.fn(skill => new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({right: 8.0}), child: this[_buildSkillChip](context, skill), $creationLocationd_0dea112b090073317d4: C188 || CT.C188}), StringLToPaddingL()))[$toList]();
      return new basic.Column.new({mainAxisSize: flex.MainAxisSize.max, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidgetL().of([this[_buildSkillsContainerHeading](), new basic.Wrap.new({children: widgets, $creationLocationd_0dea112b090073317d4: C192 || CT.C192})]), $creationLocationd_0dea112b090073317d4: C195 || CT.C195});
    }
    [_buildSkillsContainerHeading]() {
      return new text.Text.new("What Skill I Have", {style: text_styles.TextStyles.sub_heading, $creationLocationd_0dea112b090073317d4: C200 || CT.C200});
    }
    [_buildSkillChip](context, label) {
      return new chip.Chip.new({label: new text.Text.new(label, {style: text_styles.TextStyles.chip.copyWith({fontSize: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 10.0 : 11.0}), $creationLocationd_0dea112b090073317d4: C204 || CT.C204}), $creationLocationd_0dea112b090073317d4: C208 || CT.C208});
    }
    [_buildEducation]() {
      return new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidgetL().of([this[_buildEducationContainerHeading](), this[_buildEducationSummary](), new basic.SizedBox.new({height: 8.0, $creationLocationd_0dea112b090073317d4: C211 || CT.C211}), this[_buildEducationTimeline]()]), $creationLocationd_0dea112b090073317d4: C214 || CT.C214});
    }
    [_buildEducationContainerHeading]() {
      return new text.Text.new("Experience", {style: text_styles.TextStyles.sub_heading, $creationLocationd_0dea112b090073317d4: C218 || CT.C218});
    }
    [_buildEducationSummary]() {
      return new text.Text.new("Lorem Ipsum is simply dummy text of the printing and typesetting industry.", {style: text_styles.TextStyles.body, $creationLocationd_0dea112b090073317d4: C222 || CT.C222});
    }
    [_buildEducationTimeline]() {
      let widgets = this.educationList[$map](WidgetL(), dart.fn(education => this[_buildEducationTile](education), EducationLToWidgetL()))[$toList]();
      return new basic.Column.new({children: widgets, $creationLocationd_0dea112b090073317d4: C226 || CT.C226});
    }
    [_buildEducationTile](education) {
      return new basic.Padding.new({padding: new edge_insets.EdgeInsets.symmetric({vertical: 8.0}), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.stretch, children: JSArrayOfWidgetL().of([new text.Text.new(dart.str(education.post), {style: text_styles.TextStyles.company, $creationLocationd_0dea112b090073317d4: C229 || CT.C229}), new text.Text.new(dart.str(education.organization), {style: text_styles.TextStyles.body.copyWith({color: new ui.Color.new(4282728539)}), $creationLocationd_0dea112b090073317d4: C233 || CT.C233}), new text.Text.new(dart.str(education.from) + "-" + dart.str(education.to), {style: text_styles.TextStyles.body, $creationLocationd_0dea112b090073317d4: C237 || CT.C237})]), $creationLocationd_0dea112b090073317d4: C241 || CT.C241}), $creationLocationd_0dea112b090073317d4: C245 || CT.C245});
    }
    [_buildFooter](context) {
      return new basic.Column.new({children: JSArrayOfWidgetL().of([new divider.Divider.new({$creationLocationd_0dea112b090073317d4: C249 || CT.C249}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(12.0), child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidgetL().of([new basic.Align.new({child: this[_buildCopyRightText](context), alignment: alignment.Alignment.centerLeft, $creationLocationd_0dea112b090073317d4: C250 || CT.C250}), new basic.Align.new({child: this[_buildSocialIcons](), alignment: alignment.Alignment.centerRight, $creationLocationd_0dea112b090073317d4: C254 || CT.C254})]), $creationLocationd_0dea112b090073317d4: C258 || CT.C258}), $creationLocationd_0dea112b090073317d4: C263 || CT.C263})]), $creationLocationd_0dea112b090073317d4: C267 || CT.C267});
    }
    [_buildCopyRightText](context) {
      return new text.Text.new("© 2020 ALL RIGHTS RESERVED.", {style: text_styles.TextStyles.body1.copyWith({fontSize: dart.test(responsive_widget.ResponsiveWidget.isSmallScreen(context)) ? 8.0 : 10.0}), $creationLocationd_0dea112b090073317d4: C270 || CT.C270});
    }
    [_buildSocialIcons]() {
      return new basic.Row.new({mainAxisSize: flex.MainAxisSize.max, mainAxisAlignment: flex.MainAxisAlignment.center, children: JSArrayOfWidgetL().of([new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
              html.window[$open]("https://www.linkedin.com/in/zubairehman/", "LinkedIn");
            }, VoidToNullN()), child: new image.Image.network("assets/icons/ic_linkedIn.png", {color: new ui.Color.new(4282728539), height: 20.0, width: 20.0, $creationLocationd_0dea112b090073317d4: C274 || CT.C274}), $creationLocationd_0dea112b090073317d4: C280 || CT.C280}), new basic.SizedBox.new({width: 16.0, $creationLocationd_0dea112b090073317d4: C284 || CT.C284}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
              html.window[$open]("https://medium.com/@zubairehman.work", "Medium");
            }, VoidToNullN()), child: new image.Image.network("assets/icons/ic_evernote.png", {color: new ui.Color.new(4282728539), height: 20.0, width: 20.0, $creationLocationd_0dea112b090073317d4: C287 || CT.C287}), $creationLocationd_0dea112b090073317d4: C293 || CT.C293}), new basic.SizedBox.new({width: 16.0, $creationLocationd_0dea112b090073317d4: C297 || CT.C297}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
              html.window[$open]("https://github.com/zubairehman", "Github");
            }, VoidToNullN()), child: new image.Image.network("assets/icons/ic_google.png", {color: new ui.Color.new(4282728539), height: 20.0, width: 20.0, $creationLocationd_0dea112b090073317d4: C300 || CT.C300}), $creationLocationd_0dea112b090073317d4: C306 || CT.C306}), new basic.SizedBox.new({width: 16.0, $creationLocationd_0dea112b090073317d4: C310 || CT.C310}), new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
              html.window[$open]("https://twitter.com/zubair340", "Twitter");
            }, VoidToNullN()), child: new image.Image.network("assets/icons/ic_twitter.png", {color: new ui.Color.new(4282728539), height: 20.0, width: 20.0, $creationLocationd_0dea112b090073317d4: C313 || CT.C313}), $creationLocationd_0dea112b090073317d4: C319 || CT.C319})]), $creationLocationd_0dea112b090073317d4: C323 || CT.C323});
    }
  };
  (home.HomePage.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[skills] = JSArrayOfStringL().of(["Java", "Kotlin", "Dart", "Flutter", "Android", "iOS", "Reactive Programming", "Photoshop", "Fastlane"]);
    this[educationList] = JSArrayOfEducationL().of([new education.Education.new("Feb 2016", "Present", "Hai Le", "Sr. Mobile Engineer"), new education.Education.new("Apr 2016", "Apr 2018", "TEO International", "Sr. Software Engineer"), new education.Education.new("July 2014", "March 2016", "Citrusbits", "Software Engineer")]);
    home.HomePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.HomePage.prototype;
  dart.addTypeTests(home.HomePage);
  dart.addTypeCaches(home.HomePage);
  dart.setMethodSignature(home.HomePage, () => ({
    __proto__: dart.getMethods(home.HomePage.__proto__),
    build: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildAppBar]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildTitle]: dart.fnType(dart.legacy(framework.Widget), []),
    [_buildActions]: dart.fnType(dart.legacy(core.List$(dart.legacy(framework.Widget))), []),
    [_buildDrawer]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildBody]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(box.BoxConstraints)]),
    [_buildLargeScreen]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildMediumScreen]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildSmallScreen]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildIllustration]: dart.fnType(dart.legacy(framework.Widget), []),
    [_buildContent]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildAboutMe]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildHeadline]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildSummary]: dart.fnType(dart.legacy(framework.Widget), []),
    [_buildSkillsAndEducation]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildSkills]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildSkillsContainerHeading]: dart.fnType(dart.legacy(framework.Widget), []),
    [_buildSkillChip]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext), dart.legacy(core.String)]),
    [_buildEducation]: dart.fnType(dart.legacy(framework.Widget), []),
    [_buildEducationContainerHeading]: dart.fnType(dart.legacy(framework.Widget), []),
    [_buildEducationSummary]: dart.fnType(dart.legacy(framework.Widget), []),
    [_buildEducationTimeline]: dart.fnType(dart.legacy(framework.Widget), []),
    [_buildEducationTile]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(education.Education)]),
    [_buildFooter]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildCopyRightText]: dart.fnType(dart.legacy(framework.Widget), [dart.legacy(framework.BuildContext)]),
    [_buildSocialIcons]: dart.fnType(dart.legacy(framework.Widget), [])
  }));
  dart.setLibraryUri(home.HomePage, L0);
  dart.setFieldSignature(home.HomePage, () => ({
    __proto__: dart.getFields(home.HomePage.__proto__),
    skills: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(core.String)))),
    educationList: dart.finalFieldType(dart.legacy(core.List$(dart.legacy(education.Education))))
  }));
  dart.trackLibraries("packages/portfolio/ui/home", {
    "package:portfolio/ui/home.dart": home
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA0RQ;;;;;;IAkDA;;;;;;UAhUoB;AACxB,YAAO,mCACE,iBAAM,oBACN,gCACe,+DACQ,AAAc,+CAAS,kBAC5C,4CACmB,6DAChB,mBAAa,OAAO,YACpB,mBAAa,OAAO,SACtB,+CAAuB,SAAC,SAAS,gBAC9B,iBAAW,OAAO,EAAE,WAAW;IAKhD;mBAGiC;AAC/B,YAAO,uCACS,YACP,sCACiB,sCACb,cAEP,WAAkB,iDAAc,OAAO,KAAI,wBAAkB;IAErE;;AAGE,YAAO,+BACC,mCAGG,wCACK,aACI,iCAEI,yBAClB,qDAEoB,+BAEpB,8CAEoB,AAAK,6CACd,iBAAM;IAMzB;;AAGE,YAAe,wBACb,+CACS,kCAEa,AAAU,kDACnB,iBAAM,mFAGN;sFAEb,+CACS,mCAEa,sGAET;sFAEb,+CACS,qCAEa,sGAET;;IAGjB;mBAEiC;AAC/B,uBAAwB,iDAAc,OAAO,KACvC,8BACS,gEAEK,0IAGd;IACR;iBAG+B,SAAwB;AACrD,YAAO,gEACE,2CACQ,sCACC,AAAY,WAAD,sBAAsB,AAAY,WAAD,qBACnD,yDACQ,wBAAkB,OAAO,iBACxB,yBAAmB,OAAO,gBAC3B,wBAAkB,OAAO;IAI9C;wBAEsC;AACpC,YAAO,uCACE,oCACsB,0CACU,wCACnB,uBAChB,+BACS,iCACsB,iCACT,uBAChB,8BAAe,UAAU,oBAAc,OAAO,4DAC9C,gJAIN,mBAAa,OAAO;IAI5B;yBAEuC;AACrC,YAAO,uCACE,oCACsB,0CACU,wCACnB,uBAChB,+BACS,iCACsB,iCACT,uBAChB,8BAAe,UAAU,oBAAc,OAAO,gLAIpD,mBAAa,OAAO;IAI5B;wBAEsC;AACpC,YAAO,uCACE,oCACsB,iCACT,uBAChB,8BAAe,UAAU,oBAAc,OAAO,8DAC9C,oFACA,0BAAoB,OAAO,GAC3B,0CAC6B,iDAAc,OAAO,KAAI,OAAO,gEAC7D,2BACA,0CAC6B,iDAAc,OAAO,KAAI,OAAO;IAIrE;;AAIE,YAAa,iFAEQ,AAAc,+CAAS;IAE9C;oBAEkC;AAChC,YAAO,qCACsB,0CACU,mDACE,yCACrB,uBAChB,0CAAkC,iDAAc,OAAO,KAAI,OAAO,gEAClE,oBAAc,OAAO,GACrB,gCAAiB,gEACjB,qBAAe,OAAO,GACtB,0CAAkC,iDAAc,OAAO,KAAI,OAAO,iEAClE,uBACA,0CAAkC,iDAAc,OAAO,KAAI,OAAO,2EACjD,iDAAc,OAAO,KAChC,oCAC6B,2CACY,yCACrB,uBAChB,yBACA,gCAAiB,iEACjB,mBAAa,OAAO,iEAGxB,+BAAyB,OAAO;IAG5C;oBAEkC;AAChC,YAAO,+BACC,mCAGG,wCACK,aACI,iCAEI,yBAClB,kDAEoB,AAAQ,sFAEG,iDAAc,OAAO,KAAI,OAAK,UAG7D,gDAEoB,AAAQ,gDACjB,iBAAM,iCACc,iDAAc,OAAO,KAAI,OAAK;IAMrE;qBAEmC;AACjC,YAAO,6BACY,iDAAc,OAAO,KACxB,2BACA,AAAS,wCAAa,gBAAO,OAAQ,gBACjC;IAEtB;;AAGE,YAAO,iCACe,wCAAY,eACzB,kBACG,iCACU;IAGxB;+BAE6C;AAC3C,YAAO,wCACkC,yCACrB,uBAChB,8BACQ,UACC,oFAET,+BAAgB,iEAChB,8BACQ,UACC,mBAAa,OAAO;IAInC;mBAeiC;AACZ,oBAAU,AACxB,AAIA,8BAJI,QAAC,SAAU,gCACU,wCAAY,cACzB,sBAAgB,OAAO,EAAE,KAAK;AAI/C,YAAO,qCACsB,2CACY,yCACrB,uBAChB,sCACA,8BAAe,OAAO;IAI5B;;AAGE,YAAO,gDAEa;IAEtB;sBAEoC,SAAgB;AAClD,YAAO,2BACE,kBACL,KAAK,UACa,AAAK,0DACM,iDAAc,OAAO,KAAI,OAAO;IAInE;;AAyBE,YAAO,2CACkC,yCACrB,uBAChB,yCACA,gCACA,gCAAiB,gEACjB;IAGN;;AAGE,YAAO,yCAEa;IAEtB;;AAGE,YAAO,mBACL,sFACkB;IAEtB;;AAGQ,oBAAU,AACX,AACA,oCADI,QAAC,aAAc,0BAAoB,SAAS;AAErD,YAAO,iCAAiB,OAAO;IACjC;0BAEqC;AACnC,YAAO,iCACe,gDAAoB,cACjC,0CACkC,2CACrB,uBAChB,kBACqB,SAAhB,AAAU,SAAD,gBACM,2FAEpB,kBAC6B,SAAxB,AAAU,SAAD,wBACM,AAAK,6CACd,iBAAM,0EAGjB,kBACqC,SAAhC,AAAU,SAAD,SAAM,eAAG,AAAU,SAAD,cACZ;IAK5B;mBAGiC;AAC/B,YAAO,iCACa,uBAChB,oFACA,gCACsB,+BAAI,cACjB,iCACsB,0CACU,+CACnB,uBAChB,4BACS,0BAAoB,OAAO,cACb,2FAEvB,4BACS,sCACc;IAOnC;0BAEwC;AACtC,YAAO,0DAEa,AAAM,2DACK,iDAAc,OAAO,KAAI,MAAI;IAG9D;;AAGE,YAAO,kCACsB,0CACU,yCACnB,uBAChB,iDACS;AAE4D,cAD5D,AACA,mBAAK,4CAA4C;sCAE3C,gEAEJ,iBAAM,qBACL,aACD,4HAGX,+BAAgB,iEAChB,iDACS;AAC6D,cAA7D,AAAO,mBAAK,wCAAwC;sCAE9C,gEAEJ,iBAAM,qBACL,aACD,4HAGX,+BAAgB,iEAChB,iDACS;AACuD,cAAvD,AAAO,mBAAK,kCAAkC;sCAExC,8DAEJ,iBAAM,qBACL,aACD,4HAGX,+BAAgB,iEAChB,iDACS;AACuD,cAAvD,AAAO,mBAAK,iCAAiC;sCAEvC,+DAEJ,iBAAM,qBACL,aACD;IAKjB;;;;IA3NM,eAAS,uBACb,QACA,UACA,QACA,WACA,WACA,OACA,wBACA,aACA;IAyCI,sBAAgB,0BACpB,4BACE,YACA,WACA,UACA,wBAEF,4BACE,YACA,YACA,qBACA,0BAEF,4BACE,aACA,cACA,cACA;;;EAyJN","file":"home.unsound.ddc.js"}');
  // Exports:
  return {
    ui__home: home
  };
}));

//# sourceMappingURL=home.unsound.ddc.js.map
