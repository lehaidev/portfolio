define(['dart_sdk'], (function load__packages__portfolio__models__education(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var education = Object.create(dart.library);
  const CT = Object.create(null);
  var L0 = "package:portfolio/models/education.dart";
  var from$ = dart.privateName(education, "Education.from");
  var to$ = dart.privateName(education, "Education.to");
  var organization$ = dart.privateName(education, "Education.organization");
  var post$ = dart.privateName(education, "Education.post");
  education.Education = class Education extends core.Object {
    get from() {
      return this[from$];
    }
    set from(value) {
      this[from$] = value;
    }
    get to() {
      return this[to$];
    }
    set to(value) {
      this[to$] = value;
    }
    get organization() {
      return this[organization$];
    }
    set organization(value) {
      this[organization$] = value;
    }
    get post() {
      return this[post$];
    }
    set post(value) {
      this[post$] = value;
    }
  };
  (education.Education.new = function(from, to, organization, post) {
    this[from$] = from;
    this[to$] = to;
    this[organization$] = organization;
    this[post$] = post;
    ;
  }).prototype = education.Education.prototype;
  dart.addTypeTests(education.Education);
  dart.addTypeCaches(education.Education);
  dart.setLibraryUri(education.Education, L0);
  dart.setFieldSignature(education.Education, () => ({
    __proto__: dart.getFields(education.Education.__proto__),
    from: dart.fieldType(dart.legacy(core.String)),
    to: dart.fieldType(dart.legacy(core.String)),
    organization: dart.fieldType(dart.legacy(core.String)),
    post: dart.fieldType(dart.legacy(core.String))
  }));
  dart.trackLibraries("packages/portfolio/models/education", {
    "package:portfolio/models/education.dart": education
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["education.dart"],"names":[],"mappings":";;;;;;;;;;;;;IACS;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;sCAEQ,MAAW,IAAS,cAAmB;IAAvC;IAAW;IAAS;IAAmB;;EAAK","file":"education.unsound.ddc.js"}');
  // Exports:
  return {
    models__education: education
  };
}));

//# sourceMappingURL=education.unsound.ddc.js.map
