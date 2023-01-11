(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/Gfa":
    /*!***************************************************!*\
      !*** ./src/app/dictionaries/locale.dictionary.ts ***!
      \***************************************************/

    /*! exports provided: LocaleDictionary */

    /***/
    function Gfa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english, _portuguese, _LocaleDictionary;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocaleDictionary", function () {
        return LocaleDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/locale.enum */
      "Q8ZI");

      var english = (_english = {}, _defineProperty(_english, _models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].SOROCABA, 'Sorocaba, SP, Brazil'), _defineProperty(_english, _models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].ROME, 'Rome, Italy'), _defineProperty(_english, _models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].SAO_PAULO, 'São Paulo, SP, Brazil'), _english);
      var portuguese = (_portuguese = {}, _defineProperty(_portuguese, _models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].SOROCABA, 'Sorocaba, SP, Brasil'), _defineProperty(_portuguese, _models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].ROME, 'Roma, Itália'), _defineProperty(_portuguese, _models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_1__["LocaleEnum"].SAO_PAULO, 'São Paulo, SP, Brasil'), _portuguese);
      var LocaleDictionary = (_LocaleDictionary = {}, _defineProperty(_LocaleDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, english), _defineProperty(_LocaleDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, portuguese), _LocaleDictionary);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Pessoais\Projetos\CV\mcamilasilva.github.io\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0Eox":
    /*!********************************************!*\
      !*** ./src/app/models/enums/month.enum.ts ***!
      \********************************************/

    /*! exports provided: MonthEnum */

    /***/
    function Eox(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MonthEnum", function () {
        return MonthEnum;
      });

      var MonthEnum;

      (function (MonthEnum) {
        MonthEnum[MonthEnum["JAN"] = 0] = "JAN";
        MonthEnum[MonthEnum["FEB"] = 1] = "FEB";
        MonthEnum[MonthEnum["MAR"] = 2] = "MAR";
        MonthEnum[MonthEnum["APR"] = 3] = "APR";
        MonthEnum[MonthEnum["MAY"] = 4] = "MAY";
        MonthEnum[MonthEnum["JUN"] = 5] = "JUN";
        MonthEnum[MonthEnum["JUL"] = 6] = "JUL";
        MonthEnum[MonthEnum["AUG"] = 7] = "AUG";
        MonthEnum[MonthEnum["SEP"] = 8] = "SEP";
        MonthEnum[MonthEnum["OCT"] = 9] = "OCT";
        MonthEnum[MonthEnum["NOV"] = 10] = "NOV";
        MonthEnum[MonthEnum["DEC"] = 11] = "DEC";
      })(MonthEnum || (MonthEnum = {}));
      /***/

    },

    /***/
    "0MSi":
    /*!******************************************************!*\
      !*** ./src/app/models/enums/work-experience.enum.ts ***!
      \******************************************************/

    /*! exports provided: WorkExperienceEnum */

    /***/
    function MSi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkExperienceEnum", function () {
        return WorkExperienceEnum;
      });

      var WorkExperienceEnum;

      (function (WorkExperienceEnum) {
        WorkExperienceEnum[WorkExperienceEnum["OPUS_SENIOR_TECH_LEAD"] = 0] = "OPUS_SENIOR_TECH_LEAD";
        WorkExperienceEnum[WorkExperienceEnum["OPUS_INTERMEDIATE_DEVELOPER"] = 1] = "OPUS_INTERMEDIATE_DEVELOPER";
        WorkExperienceEnum[WorkExperienceEnum["AUDAXWARE"] = 2] = "AUDAXWARE";
        WorkExperienceEnum[WorkExperienceEnum["OPUS_JR_SYSTEM_ANALYST"] = 3] = "OPUS_JR_SYSTEM_ANALYST";
        WorkExperienceEnum[WorkExperienceEnum["UBER_SOFTWARE_ENGINEER"] = 4] = "UBER_SOFTWARE_ENGINEER";
      })(WorkExperienceEnum || (WorkExperienceEnum = {}));
      /***/

    },

    /***/
    "0qEk":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/ms-language-level/ms-language-level.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: MsLanguageLevelComponent */

    /***/
    function qEk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsLanguageLevelComponent", function () {
        return MsLanguageLevelComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var src_app_models_language_level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/language-level */
      "emc5");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../pipes/translate.pipe */
      "Eioz");

      var MsLanguageLevelComponent = /*#__PURE__*/function () {
        function MsLanguageLevelComponent() {
          _classCallCheck(this, MsLanguageLevelComponent);

          this.info = new src_app_models_language_level__WEBPACK_IMPORTED_MODULE_2__["LanguageLevel"]();
          this.systemLanguage = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US;
        }

        _createClass(MsLanguageLevelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.progressClass = _defineProperty({}, "progress-".concat(this.info.level), true);
          }
        }]);

        return MsLanguageLevelComponent;
      }();

      MsLanguageLevelComponent.ɵfac = function MsLanguageLevelComponent_Factory(t) {
        return new (t || MsLanguageLevelComponent)();
      };

      MsLanguageLevelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsLanguageLevelComponent,
        selectors: [["ms-language-level"]],
        inputs: {
          info: "info",
          systemLanguage: ["system-language", "systemLanguage"]
        },
        decls: 10,
        vars: 7,
        consts: [[1, "circular-progress", 3, "ngClass"], [1, "progress-left"], [1, "progress-bar"], [1, "progress-right"], [1, "progress-value"], [1, "text-center"]],
        template: function MsLanguageLevelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.progressClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.info.level, "%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 3, ctx.info.language, "LANGUAGE", ctx.systemLanguage));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
        pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: [".circular-progress[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    background: none;\r\n    margin: 0 auto;\r\n    box-shadow: none;\r\n    position: relative;\r\n  }\r\n  \r\n  .circular-progress[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n    border: 2px solid #fff;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n  }\r\n  \r\n  .circular-progress[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 0;\r\n    z-index: 1;\r\n  }\r\n  \r\n  .circular-progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%] {\r\n    left: 0;\r\n  }\r\n  \r\n  .circular-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: none;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    position: absolute;\r\n    top: 0;\r\n  }\r\n  \r\n  .circular-progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\r\n    left: 100%;\r\n    border-top-right-radius: 82px;\r\n    border-bottom-right-radius: 80px;\r\n    border-left: 0;\r\n    transform-origin: center left;\r\n  }\r\n  \r\n  .circular-progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%] {\r\n    right: 0;\r\n  }\r\n  \r\n  .circular-progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\r\n    left: -100%;\r\n    border-top-left-radius: 80px;\r\n    border-bottom-left-radius: 80px;\r\n    border-right: 0;\r\n    transform-origin: center right;\r\n    animation: loading-100 1.8s linear forwards;\r\n  }\r\n  \r\n  .circular-progress[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: 90%;\r\n    border-radius: 50%;\r\n    background: white;\r\n    font-size: 12px;\r\n    color: black;\r\n    line-height: 55px;\r\n    text-align: center;\r\n    position: absolute;\r\n    top: 5%;\r\n    left: 5%;\r\n  }\r\n  \r\n  .circular-progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\r\n    border-color: #049dff;\r\n  }\r\n  \r\n  .circular-progress.progress-90[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\r\n    animation: loading-90 1.5s linear forwards 1.8s;\r\n  }\r\n  \r\n  .circular-progress.progress-100[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\r\n    animation: loading-100 1s linear forwards 1.8s;\r\n  }\r\n  \r\n  .circular-progress.progress-60[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\r\n    animation: loading-60 0.4s linear forwards 1.8s;\r\n  }\r\n  \r\n  @keyframes loading-100 {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(180deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes loading-90 {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(144deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes loading-60 {\r\n    0% {\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      transform: rotate(36deg);\r\n    }\r\n  }\r\n  \r\n  @media only screen and (max-width: 990px) {\r\n    .progress[_ngcontent-%COMP%] {\r\n      margin-bottom: 20px;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zLWxhbmd1YWdlLWxldmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztFQUNUOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxPQUFPO0VBQ1Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixNQUFNO0VBQ1I7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGdDQUFnQztJQUNoQyxjQUFjO0lBRWQsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsV0FBVztJQUNYLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsZUFBZTtJQUVmLDhCQUE4QjtJQUM5QiwyQ0FBMkM7RUFDN0M7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtFQUNWOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsK0NBQStDO0VBQ2pEOztFQUVBO0lBQ0UsOENBQThDO0VBQ2hEOztFQUVBO0lBQ0UsK0NBQStDO0VBQ2pEOztFQUVBO0lBQ0U7TUFFRSx1QkFBdUI7SUFDekI7SUFDQTtNQUVFLHlCQUF5QjtJQUMzQjtFQUNGOztFQUVBO0lBQ0U7TUFFRSx1QkFBdUI7SUFDekI7SUFDQTtNQUVFLHlCQUF5QjtJQUMzQjtFQUNGOztFQUVBO0lBQ0U7TUFFRSx1QkFBdUI7SUFDekI7SUFDQTtNQUVFLHdCQUF3QjtJQUMxQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxtQkFBbUI7SUFDckI7RUFDRiIsImZpbGUiOiJtcy1sYW5ndWFnZS1sZXZlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpcmN1bGFyLXByb2dyZXNzIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAuY2lyY3VsYXItcHJvZ3Jlc3M6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXJjdWxhci1wcm9ncmVzcz5zcGFuIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmNpcmN1bGFyLXByb2dyZXNzIC5wcm9ncmVzcy1sZWZ0IHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXJjdWxhci1wcm9ncmVzcyAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci13aWR0aDogNXB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNpcmN1bGFyLXByb2dyZXNzIC5wcm9ncmVzcy1sZWZ0IC5wcm9ncmVzcy1iYXIge1xyXG4gICAgbGVmdDogMTAwJTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4MnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDgwcHg7XHJcbiAgICBib3JkZXItbGVmdDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGxlZnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLmNpcmN1bGFyLXByb2dyZXNzIC5wcm9ncmVzcy1yaWdodCB7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLmNpcmN1bGFyLXByb2dyZXNzIC5wcm9ncmVzcy1yaWdodCAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogODBweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDgwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZy0xMDAgMS44cyBsaW5lYXIgZm9yd2FyZHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXJjdWxhci1wcm9ncmVzcyAucHJvZ3Jlc3MtdmFsdWUge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNSU7XHJcbiAgICBsZWZ0OiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLmNpcmN1bGFyLXByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDQ5ZGZmO1xyXG4gIH1cclxuICBcclxuICAuY2lyY3VsYXItcHJvZ3Jlc3MucHJvZ3Jlc3MtOTAgLnByb2dyZXNzLWxlZnQgLnByb2dyZXNzLWJhciB7XHJcbiAgICBhbmltYXRpb246IGxvYWRpbmctOTAgMS41cyBsaW5lYXIgZm9yd2FyZHMgMS44cztcclxuICB9XHJcbiAgXHJcbiAgLmNpcmN1bGFyLXByb2dyZXNzLnByb2dyZXNzLTEwMCAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZy0xMDAgMXMgbGluZWFyIGZvcndhcmRzIDEuOHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXJjdWxhci1wcm9ncmVzcy5wcm9ncmVzcy02MCAucHJvZ3Jlc3MtbGVmdCAucHJvZ3Jlc3MtYmFyIHtcclxuICAgIGFuaW1hdGlvbjogbG9hZGluZy02MCAwLjRzIGxpbmVhciBmb3J3YXJkcyAxLjhzO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGxvYWRpbmctMTAwIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGxvYWRpbmctOTAge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE0NGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgbG9hZGluZy02MCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzZkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNmRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgIC5wcm9ncmVzcyB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsLanguageLevelComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-language-level',
            templateUrl: './ms-language-level.component.html',
            styleUrls: ['./ms-language-level.component.css']
          }]
        }], function () {
          return [];
        }, {
          info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          systemLanguage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['system-language']
          }]
        });
      })();
      /***/

    },

    /***/
    "1/i9":
    /*!******************************************************************************!*\
      !*** ./src/app/components/skills/ms-hard-skills/ms-hard-skills.component.ts ***!
      \******************************************************************************/

    /*! exports provided: MsHardSkillsComponent */

    /***/
    function i9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsHardSkillsComponent", function () {
        return MsHardSkillsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ms_hard_skills_item_ms_hard_skills_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../ms-hard-skills-item/ms-hard-skills-item.component */
      "ggRj");

      function MsHardSkillsComponent_ms_hard_skills_item_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ms-hard-skills-item", 2);
        }

        if (rf & 2) {
          var skill_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skill", skill_r1)("language", ctx_r0.language);
        }
      }

      var MsHardSkillsComponent = /*#__PURE__*/function () {
        function MsHardSkillsComponent() {
          _classCallCheck(this, MsHardSkillsComponent);

          this.skills = [];
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US;
          this.skillGroups = new Array(2);
        }

        _createClass(MsHardSkillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MsHardSkillsComponent;
      }();

      MsHardSkillsComponent.ɵfac = function MsHardSkillsComponent_Factory(t) {
        return new (t || MsHardSkillsComponent)();
      };

      MsHardSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsHardSkillsComponent,
        selectors: [["ms-hard-skills"]],
        inputs: {
          skills: "skills",
          language: "language"
        },
        decls: 2,
        vars: 1,
        consts: [[1, "row"], ["class", "col-md-6", 3, "skill", "language", 4, "ngFor", "ngForOf"], [1, "col-md-6", 3, "skill", "language"]],
        template: function MsHardSkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MsHardSkillsComponent_ms_hard_skills_item_1_Template, 1, 2, "ms-hard-skills-item", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ms_hard_skills_item_ms_hard_skills_item_component__WEBPACK_IMPORTED_MODULE_3__["MsHardSkillsItemComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtcy1oYXJkLXNraWxscy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsHardSkillsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-hard-skills',
            templateUrl: './ms-hard-skills.component.html',
            styleUrls: ['./ms-hard-skills.component.css']
          }]
        }], function () {
          return [];
        }, {
          skills: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "27Kp":
    /*!********************************************************************************************!*\
      !*** ./src/app/components/certifications/ms-certifications/ms-certifications.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: MsCertificationsComponent */

    /***/
    function Kp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsCertificationsComponent", function () {
        return MsCertificationsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var src_app_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/enums/title.enum */
      "Mwsn");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ms_certification_item_ms_certification_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ms-certification-item/ms-certification-item.component */
      "HPPL");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../pipes/translate.pipe */
      "Eioz");

      function MsCertificationsComponent_ms_certification_item_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ms-certification-item", 2);
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", item_r1);
        }
      }

      var MsCertificationsComponent = /*#__PURE__*/function () {
        function MsCertificationsComponent() {
          _classCallCheck(this, MsCertificationsComponent);

          this.items = [];
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US;
          this.title = src_app_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_2__["TitleEnum"].CERTIFICATIONS;
        }

        _createClass(MsCertificationsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MsCertificationsComponent;
      }();

      MsCertificationsComponent.ɵfac = function MsCertificationsComponent_Factory(t) {
        return new (t || MsCertificationsComponent)();
      };

      MsCertificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsCertificationsComponent,
        selectors: [["ms-certifications"]],
        inputs: {
          items: "items",
          language: "language"
        },
        decls: 4,
        vars: 6,
        consts: [[1, "h4", "text-center", "mb-4", "title"], [3, "info", 4, "ngFor", "ngForOf"], [3, "info"]],
        template: function MsCertificationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MsCertificationsComponent_ms_certification_item_3_Template, 1, 1, "ms-certification-item", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx.title, "TITLE", ctx.language));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ms_certification_item_ms_certification_item_component__WEBPACK_IMPORTED_MODULE_4__["MsCertificationItemComponent"]],
        pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtcy1jZXJ0aWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsCertificationsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-certifications',
            templateUrl: './ms-certifications.component.html',
            styleUrls: ['./ms-certifications.component.css']
          }]
        }], function () {
          return [];
        }, {
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "2W8z":
    /*!*****************************************************!*\
      !*** ./src/app/dictionaries/position.dictionary.ts ***!
      \*****************************************************/

    /*! exports provided: PositionDictionary */

    /***/
    function W8z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english2, _portuguese2, _PositionDictionary;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PositionDictionary", function () {
        return PositionDictionary;
      });
      /* harmony import */


      var _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/position.enum */
      "bDRz");
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");

      var english = (_english2 = {}, _defineProperty(_english2, _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_0__["PositionEnum"].TECH_LEAD, 'Tech Lead'), _defineProperty(_english2, _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_0__["PositionEnum"].SENIOR_SOFTWARE_DEVELOPER, 'Senior Software Developer'), _defineProperty(_english2, _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_0__["PositionEnum"].INTERMEDIATE_SOFTWARE_DEVELOPER, 'Software Developer'), _defineProperty(_english2, _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_0__["PositionEnum"].WEB_DEVELOPER, 'Web Developer'), _defineProperty(_english2, _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_0__["PositionEnum"].SYSTEM_ANALYST, 'Jr. System Analyst'), _defineProperty(_english2, _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_0__["PositionEnum"].SOFTWARE_ENGINEER, "Software Engineer"), _english2);
      var portuguese = (_portuguese2 = {}, _defineProperty(_portuguese2, _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_0__["PositionEnum"].TECH_LEAD, 'Tech Lead'), _defineProperty(_portuguese2, _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_0__["PositionEnum"].SENIOR_SOFTWARE_DEVELOPER, 'Desenvolvedora de Software Sênior'), _defineProperty(_portuguese2, _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_0__["PositionEnum"].INTERMEDIATE_SOFTWARE_DEVELOPER, 'Desenvolvedora de Software Pleno'), _defineProperty(_portuguese2, _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_0__["PositionEnum"].WEB_DEVELOPER, 'Desenvolvedora Web'), _defineProperty(_portuguese2, _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_0__["PositionEnum"].SYSTEM_ANALYST, 'Analista de Sistemas Jr.'), _defineProperty(_portuguese2, _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_0__["PositionEnum"].SOFTWARE_ENGINEER, "Engenheira de Software"), _portuguese2);
      var PositionDictionary = (_PositionDictionary = {}, _defineProperty(_PositionDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US, english), _defineProperty(_PositionDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].PT_BR, portuguese), _PositionDictionary);
      /***/
    },

    /***/
    "4jwZ":
    /*!**************************************!*\
      !*** ./src/app/models/month-year.ts ***!
      \**************************************/

    /*! exports provided: MonthYear */

    /***/
    function jwZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MonthYear", function () {
        return MonthYear;
      });

      var MonthYear = /*#__PURE__*/function () {
        function MonthYear(month, year) {
          _classCallCheck(this, MonthYear);

          this._month = month;
          this._year = year;
        }

        _createClass(MonthYear, [{
          key: "month",
          get: function get() {
            return this._month;
          },
          set: function set(month) {
            this._month = month;
          }
        }, {
          key: "year",
          get: function get() {
            return this._year;
          },
          set: function set(year) {
            this._year = year;
          }
        }]);

        return MonthYear;
      }();
      /***/

    },

    /***/
    "4qPO":
    /*!**************************************************************************!*\
      !*** ./src/app/components/about-me/ms-about-me/ms-about-me.component.ts ***!
      \**************************************************************************/

    /*! exports provided: MsAboutMeComponent */

    /***/
    function qPO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsAboutMeComponent", function () {
        return MsAboutMeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_dictionaries_about_me_info_dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/dictionaries/about-me-info.dictionary */
      "8Mqy");
      /* harmony import */


      var src_app_models_about_me__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/about-me */
      "VIhu");
      /* harmony import */


      var src_app_models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/enums/about-me-info.enum */
      "Q1Gu");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var src_app_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/models/enums/title.enum */
      "Mwsn");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ms_about_me_detail_item_ms_about_me_detail_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../ms-about-me-detail-item/ms-about-me-detail-item.component */
      "7BXS");
      /* harmony import */


      var _ms_language_level_ms_language_level_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../ms-language-level/ms-language-level.component */
      "0qEk");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../pipes/translate.pipe */
      "Eioz");

      function MsAboutMeComponent_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var paragraph_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](paragraph_r3);
        }
      }

      function MsAboutMeComponent_ms_about_me_detail_item_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ms-about-me-detail-item", 11);
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", item_r4)("language", ctx_r1.language);
        }
      }

      function MsAboutMeComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ms-language-level", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var languageLevel_r5 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", languageLevel_r5)("system-language", ctx_r2.language);
        }
      }

      var MsAboutMeComponent = /*#__PURE__*/function () {
        function MsAboutMeComponent() {
          _classCallCheck(this, MsAboutMeComponent);

          this.info = new src_app_models_about_me__WEBPACK_IMPORTED_MODULE_2__["AboutMe"]();
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_4__["SystemLanguageEnum"].EN_US;
          this.title = src_app_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_5__["TitleEnum"].ABOUT_ME;
          this.detailsSectionTitle = src_app_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_5__["TitleEnum"].DETAILS;
          this.languagesSectionTitle = src_app_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_5__["TitleEnum"].LANGUAGES;
        }

        _createClass(MsAboutMeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "bioParagraphs",
          get: function get() {
            return this.info.bioParagraphs || src_app_dictionaries_about_me_info_dictionary__WEBPACK_IMPORTED_MODULE_1__["AboutMeInfoDictionary"][this.language][src_app_models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_3__["AboutMeInfoEnum"].BIO];
          }
        }]);

        return MsAboutMeComponent;
      }();

      MsAboutMeComponent.ɵfac = function MsAboutMeComponent_Factory(t) {
        return new (t || MsAboutMeComponent)();
      };

      MsAboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsAboutMeComponent,
        selectors: [["ms-about-me"]],
        inputs: {
          info: "info",
          language: "language"
        },
        decls: 22,
        vars: 18,
        consts: [[1, "container"], [1, "card"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "card-body"], [1, "h5", "mt-0", "title"], [1, "text-justify"], [4, "ngFor", "ngForOf"], [3, "info", "language", 4, "ngFor", "ngForOf"], [1, "row", "languages"], ["class", "col-4", 4, "ngFor", "ngForOf"], [3, "info", "language"], [1, "col-4"], [3, "info", "system-language"]],
        template: function MsAboutMeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MsAboutMeComponent_p_9_Template, 2, 1, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MsAboutMeComponent_ms_about_me_detail_item_15_Template, 1, 2, "ms-about-me-detail-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MsAboutMeComponent_div_21_Template, 2, 2, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 6, ctx.title, "TITLE", ctx.language));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bioParagraphs);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](14, 10, ctx.detailsSectionTitle, "TITLE", ctx.language));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.info.details);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](19, 14, ctx.languagesSectionTitle, "TITLE", ctx.language));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.info.languages);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ms_about_me_detail_item_ms_about_me_detail_item_component__WEBPACK_IMPORTED_MODULE_7__["MsAboutMeDetailItemComponent"], _ms_language_level_ms_language_level_component__WEBPACK_IMPORTED_MODULE_8__["MsLanguageLevelComponent"]],
        pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
        styles: ["@media (max-width: 575.98px) {\r\n    .languages[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n      margin-top: 1rem!important\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zLWFib3V0LW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtNQUNFO0lBQ0Y7QUFDSiIsImZpbGUiOiJtcy1hYm91dC1tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAubGFuZ3VhZ2VzID4gZGl2IHtcclxuICAgICAgbWFyZ2luLXRvcDogMXJlbSFpbXBvcnRhbnRcclxuICAgIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsAboutMeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-about-me',
            templateUrl: './ms-about-me.component.html',
            styleUrls: ['./ms-about-me.component.css']
          }]
        }], function () {
          return [];
        }, {
          info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "64Rh":
    /*!****************************************************!*\
      !*** ./src/app/service/system-language.service.ts ***!
      \****************************************************/

    /*! exports provided: SystemLanguageService */

    /***/
    function Rh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystemLanguageService", function () {
        return SystemLanguageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-webstorage-service */
      "SX+u");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");

      var SystemLanguageService = /*#__PURE__*/function () {
        function SystemLanguageService(storage) {
          _classCallCheck(this, SystemLanguageService);

          this.storage = storage;
          this.LANGUAGE_KEY = "language";
          this.languageSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(SystemLanguageService, [{
          key: "language",
          set: function set(language) {
            this.storage.set(this.LANGUAGE_KEY, language);
            this.languageSubject$.next(language);
          },
          get: function get() {
            var currentLanguage = this.storage.get(this.LANGUAGE_KEY);

            if (!Object.keys(_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_3__["SystemLanguageEnum"]).includes(currentLanguage)) {
              currentLanguage = _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_3__["SystemLanguageEnum"].EN_US;
              this.language = currentLanguage;
            }

            return currentLanguage;
          }
        }, {
          key: "languageObservable",
          get: function get() {
            return this.languageSubject$;
          }
        }, {
          key: "format",
          get: function get() {
            switch (this.language) {
              case _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_3__["SystemLanguageEnum"].EN_US:
                return 'en-US';

              case _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_3__["SystemLanguageEnum"].PT_BR:
                return 'pt-BR';
            }
          }
        }]);

        return SystemLanguageService;
      }();

      SystemLanguageService.ɵfac = function SystemLanguageService_Factory(t) {
        return new (t || SystemLanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"]));
      };

      SystemLanguageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SystemLanguageService,
        factory: SystemLanguageService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemLanguageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "6FGy":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/ms-back-to-top-button/ms-back-to-top-button.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: MsBackToTopButtonComponent */

    /***/
    function FGy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsBackToTopButtonComponent", function () {
        return MsBackToTopButtonComponent;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_fixed_labels_and_tooltips_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/enums/fixed-labels-and-tooltips.enum */
      "zp+8");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var src_app_models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/models/enums/translation-type.enum */
      "U3m8");
      /* harmony import */


      var src_app_service_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/translation.service */
      "UXmV");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var MsBackToTopButtonComponent = /*#__PURE__*/function () {
        function MsBackToTopButtonComponent(document, translationService) {
          _classCallCheck(this, MsBackToTopButtonComponent);

          this.document = document;
          this.translationService = translationService;
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_3__["SystemLanguageEnum"].EN_US;
          this.showButton = false;
        }

        _createClass(MsBackToTopButtonComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onWindowScroll",

          /**
           * Credits about the logic to https://www.techtrek.io/Adding-a-Scroll-to-Top-button-in-Angular
           */
          value: function onWindowScroll() {
            if (window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop > 100) {
              this.showButton = true;
            } else if (this.showButton && window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop < 10) {
              this.showButton = false;
            }
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            (function smoothscroll() {
              var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

              if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - currentScroll / 8);
              }
            })();
          }
        }, {
          key: "tooltip",
          get: function get() {
            return this.translationService.translate(this.language, src_app_models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_4__["TranslationTypeEnum"].FIXED_LABELS_AND_TOOLTIPS, src_app_models_enums_fixed_labels_and_tooltips_enum__WEBPACK_IMPORTED_MODULE_2__["FixedLabelsAndTooltipsEnum"].BACK_TO_TOP_BTN_TOOLTIP);
          }
        }]);

        return MsBackToTopButtonComponent;
      }();

      MsBackToTopButtonComponent.ɵfac = function MsBackToTopButtonComponent_Factory(t) {
        return new (t || MsBackToTopButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_translation_service__WEBPACK_IMPORTED_MODULE_5__["TranslationService"]));
      };

      MsBackToTopButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MsBackToTopButtonComponent,
        selectors: [["ms-back-to-top-button"]],
        hostBindings: function MsBackToTopButtonComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function MsBackToTopButtonComponent_scroll_HostBindingHandler() {
              return ctx.onWindowScroll();
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        inputs: {
          language: "language"
        },
        decls: 3,
        vars: 2,
        consts: [["id", "back-to-top", 1, "btn-fab", 3, "hidden"], ["type", "button", "placement", "left", 1, "btn", "btn-info", "btn-icon", "btn-round", 3, "ngbTooltip", "click"], [1, "fa", "fa-arrow-up"]],
        template: function MsBackToTopButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MsBackToTopButtonComponent_Template_button_click_1_listener() {
              return ctx.scrollToTop();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.showButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbTooltip", ctx.tooltip);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltip"]],
        styles: ["#back-to-top[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: 20px;\r\n    width: 50px;\r\n    height: auto;\r\n    right: 20px;\r\n    background-color: #2CA8FF;\r\n  }\r\n  \r\n#back-to-top[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    bottom: 0;\r\n    border-radius: 50%;\r\n    display: block;\r\n    margin-bottom: 4px;\r\n    width: 50px; \r\n    height: 50px;\r\n    margin: 4px auto;\r\n  }\r\n  \r\n#back-to-top[_ngcontent-%COMP%]    > .btn-icon[_ngcontent-%COMP%]    > i.fa-2x[_ngcontent-%COMP%] {\r\n    left: 48% !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zLWJhY2stdG8tdG9wLWJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0FBRUY7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCOztBQUVGO0lBQ0ksb0JBQW9CO0VBQ3RCIiwiZmlsZSI6Im1zLWJhY2stdG8tdG9wLWJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JhY2stdG8tdG9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkNBOEZGO1xyXG4gIH1cclxuICBcclxuI2JhY2stdG8tdG9wIC5idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB3aWR0aDogNTBweDsgXHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW46IDRweCBhdXRvO1xyXG4gIH1cclxuICBcclxuI2JhY2stdG8tdG9wID4gLmJ0bi1pY29uID4gaS5mYS0yeCB7XHJcbiAgICBsZWZ0OiA0OCUgIWltcG9ydGFudDtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MsBackToTopButtonComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'ms-back-to-top-button',
            templateUrl: './ms-back-to-top-button.component.html',
            styleUrls: ['./ms-back-to-top-button.component.css']
          }]
        }], function () {
          return [{
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }]
          }, {
            type: src_app_service_translation_service__WEBPACK_IMPORTED_MODULE_5__["TranslationService"]
          }];
        }, {
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["window:scroll", []]
          }]
        });
      })();
      /***/

    },

    /***/
    "7BXS":
    /*!**************************************************************************************************!*\
      !*** ./src/app/components/about-me/ms-about-me-detail-item/ms-about-me-detail-item.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: MsAboutMeDetailItemComponent */

    /***/
    function BXS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsAboutMeDetailItemComponent", function () {
        return MsAboutMeDetailItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_about_me_detail_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/about-me-detail-item */
      "Ovvk");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../pipes/translate.pipe */
      "Eioz");

      var MsAboutMeDetailItemComponent = /*#__PURE__*/function () {
        function MsAboutMeDetailItemComponent() {
          _classCallCheck(this, MsAboutMeDetailItemComponent);

          this.info = new src_app_models_about_me_detail_item__WEBPACK_IMPORTED_MODULE_1__["AboutMeDetailItem"]();
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_2__["SystemLanguageEnum"].EN_US;
        }

        _createClass(MsAboutMeDetailItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MsAboutMeDetailItemComponent;
      }();

      MsAboutMeDetailItemComponent.ɵfac = function MsAboutMeDetailItemComponent_Factory(t) {
        return new (t || MsAboutMeDetailItemComponent)();
      };

      MsAboutMeDetailItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsAboutMeDetailItemComponent,
        selectors: [["ms-about-me-detail-item"]],
        inputs: {
          info: "info",
          language: "language"
        },
        decls: 8,
        vars: 10,
        consts: [[1, "row", "mt-3"], [1, "col-lg-3"], [1, "text-capitalize"], [1, "col-lg-9"]],
        template: function MsAboutMeDetailItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 2, ctx.info.title, "TITLE", ctx.language), ":");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 6, ctx.info.info, "ABOUT_ME_INFO", ctx.language));
          }
        },
        pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtcy1hYm91dC1tZS1kZXRhaWwtaXRlbS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsAboutMeDetailItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-about-me-detail-item',
            templateUrl: './ms-about-me-detail-item.component.html',
            styleUrls: ['./ms-about-me-detail-item.component.css']
          }]
        }], function () {
          return [];
        }, {
          info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "8Mqy":
    /*!**********************************************************!*\
      !*** ./src/app/dictionaries/about-me-info.dictionary.ts ***!
      \**********************************************************/

    /*! exports provided: AboutMeInfoDictionary */

    /***/
    function Mqy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _commons, _english3, _portuguese3, _AboutMeInfoDictionar;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutMeInfoDictionary", function () {
        return AboutMeInfoDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/about-me-info.enum */
      "Q1Gu");
      /* harmony import */


      var _locale_dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./locale.dictionary */
      "/Gfa");
      /* harmony import */


      var _models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/enums/locale.enum */
      "Q8ZI");
      /**
       * Calculates the age based on the birthdate and the current date
       *
       */


      function calculateAge() {
        var birthdate = new Date();
        birthdate.setDate(7);
        birthdate.setMonth(8); //September

        birthdate.setFullYear(1992);
        var timeDiff = Math.abs(Date.now() - birthdate.getTime());
        return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      }

      var commons = (_commons = {}, _defineProperty(_commons, _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_1__["AboutMeInfoEnum"].AGE, String(calculateAge())), _defineProperty(_commons, _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_1__["AboutMeInfoEnum"].EMAIL, 'manoelacamila.silva@gmail.com'), _commons);
      var english = (_english3 = {}, _defineProperty(_english3, _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_1__["AboutMeInfoEnum"].PHONE, '+55 11 94989-8386'), _defineProperty(_english3, _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_1__["AboutMeInfoEnum"].LOCATION, _locale_dictionary__WEBPACK_IMPORTED_MODULE_2__["LocaleDictionary"][_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US][_models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_3__["LocaleEnum"].SAO_PAULO]), _defineProperty(_english3, _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_1__["AboutMeInfoEnum"].BIO, ["I am a Software Engineer/Developer who is passionate about technology. Seeing an idea getting off the ground and becoming something that improves people's lives brings me real joy.", "Although I have a proper knowledge of front-end techniques, my inclination is towards back-end. I am also really fond of good development techniques, such as clean code, design patterns, and so on, and I try to apply them as much as possible.", "Additionally, I have a strong can-do, hands-on attitude, and I am a true believer of teamwork. I am from the opinion that \"two heads are better than one\" and knowledge can always be improved. I just love learning new things and acquiring new skills."]), _english3);
      var portuguese = (_portuguese3 = {}, _defineProperty(_portuguese3, _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_1__["AboutMeInfoEnum"].PHONE, '(11) 94989-8386'), _defineProperty(_portuguese3, _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_1__["AboutMeInfoEnum"].LOCATION, _locale_dictionary__WEBPACK_IMPORTED_MODULE_2__["LocaleDictionary"][_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR][_models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_3__["LocaleEnum"].SAO_PAULO]), _defineProperty(_portuguese3, _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_1__["AboutMeInfoEnum"].BIO, ['Engenheira/Desenvolvedora de Software apaixonada por tecnologia. Ver uma ideia sair do papel e virar algo que melhora a vida das pessoas, direta ou indiretamente, me traz imensa satisfação.', 'Embora eu possua um conhecimento apropriado de front-end, minha paixão encontra-se no back-end. Também sou adepta de técnicas de boas práticas de desenvolvimento, tais como código limpo, design patterns e similares, e me empenho em aplicá-las sempre que possível.', "Al\xE9m disso, eu tenho uma atitude pr\xE1tica e positiva, al\xE9m de ser uma verdadeira entusiasta de traballho em equipe. Eu sou da opni\xE3o de que \"duas cabe\xE7as pensam melhor do que uma\" e conhecimento pode sempre ser aprimorado. Basicamente, eu amo aprender assuntos novos e adquirir novas habilidades."]), _portuguese3);
      var AboutMeInfoDictionary = (_AboutMeInfoDictionar = {}, _defineProperty(_AboutMeInfoDictionar, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, Object.assign({}, commons, english)), _defineProperty(_AboutMeInfoDictionar, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, Object.assign({}, commons, portuguese)), _AboutMeInfoDictionar);
      /***/
    },

    /***/
    "A0Sh":
    /*!**********************************!*\
      !*** ./src/app/models/resume.ts ***!
      \**********************************/

    /*! exports provided: Resume */

    /***/
    function A0Sh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Resume", function () {
        return Resume;
      });

      var Resume = /*#__PURE__*/function () {
        function Resume(aboutMe, workExperiences, education, certifications, skills) {
          _classCallCheck(this, Resume);

          this._aboutMe = aboutMe;
          this._workExperiences = workExperiences;
          this._education = education;
          this._certifications = certifications;
          this._skills = skills;
        }

        _createClass(Resume, [{
          key: "aboutMe",
          get: function get() {
            return this._aboutMe;
          },
          set: function set(aboutMe) {
            this._aboutMe = aboutMe;
          }
        }, {
          key: "workExperiences",
          get: function get() {
            return this._workExperiences;
          },
          set: function set(workExperiences) {
            this._workExperiences = workExperiences;
          }
        }, {
          key: "education",
          get: function get() {
            return this._education;
          },
          set: function set(education) {
            this._education = education;
          }
        }, {
          key: "certifications",
          get: function get() {
            return this._certifications;
          },
          set: function set(certifications) {
            this._certifications = certifications;
          }
        }, {
          key: "skills",
          get: function get() {
            return this._skills;
          },
          set: function set(skills) {
            this._skills = skills;
          }
        }]);

        return Resume;
      }();
      /***/

    },

    /***/
    "A4JV":
    /*!*****************************************************************************!*\
      !*** ./src/app/components/education/ms-education/ms-education.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: MsEducationComponent */

    /***/
    function A4JV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsEducationComponent", function () {
        return MsEducationComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var src_app_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/enums/title.enum */
      "Mwsn");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ms_education_item_ms_education_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ms-education-item/ms-education-item.component */
      "g7ud");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../pipes/translate.pipe */
      "Eioz");

      function MsEducationComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ms-education-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("timeline-inverted", ctx_r0.isInvertedCard(i_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", item_r1)("language", ctx_r0.language);
        }
      }

      var MsEducationComponent = /*#__PURE__*/function () {
        function MsEducationComponent() {
          _classCallCheck(this, MsEducationComponent);

          this.items = [];
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US;
          this.title = src_app_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_2__["TitleEnum"].EDUCATION;
        }

        _createClass(MsEducationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * Indicates if should be an inverted card or not
           *
           * @param index
           */

        }, {
          key: "isInvertedCard",
          value: function isInvertedCard(index) {
            return index % 2 > 0;
          }
        }]);

        return MsEducationComponent;
      }();

      MsEducationComponent.ɵfac = function MsEducationComponent_Factory(t) {
        return new (t || MsEducationComponent)();
      };

      MsEducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsEducationComponent,
        selectors: [["ms-education"]],
        inputs: {
          items: "items",
          language: "language"
        },
        decls: 6,
        vars: 6,
        consts: [[1, "h4", "text-center", "mb-4", "title"], [1, "timeline"], [3, "timeline-inverted", 4, "ngFor", "ngForOf"], [1, "clearfix", 2, "float", "none"], [1, "timeline-badge"], [1, "fa", "fa-graduation-cap"], [1, "timeline-card"], [3, "info", "language"]],
        template: function MsEducationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MsEducationComponent_li_4_Template, 6, 4, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx.title, "TITLE", ctx.language));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ms_education_item_ms_education_item_component__WEBPACK_IMPORTED_MODULE_4__["MsEducationItemComponent"]],
        pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtcy1lZHVjYXRpb24uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsEducationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-education',
            templateUrl: './ms-education.component.html',
            styleUrls: ['./ms-education.component.css']
          }]
        }], function () {
          return [];
        }, {
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ArwO":
    /*!************************************************************************!*\
      !*** ./src/app/dictionaries/work-experience-description.dictionary.ts ***!
      \************************************************************************/

    /*! exports provided: WorkExperienceDescriptionDictionary */

    /***/
    function ArwO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _portuguese4, _english4, _WorkExperienceDescri;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkExperienceDescriptionDictionary", function () {
        return WorkExperienceDescriptionDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/work-experience.enum */
      "0MSi");

      var portuguese = (_portuguese4 = {}, _defineProperty(_portuguese4, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceEnum"].UBER_SOFTWARE_ENGINEER, "Uber \xE9 uma Big Tech com foco em mobilidade urbana, cujo os servi\xE7os incluem: \n        transporte privado, entrega de comida/pacotes, transporte de carga, entre outros. O time de \"Session Management\",  do qual eu fa\xE7o parte, \xE9 respons\xE1vel por \n        cuidar de toda a parte de autentica\xE7\xE3o dos usu\xE1rios assim como gerenciamento de sess\xF5es. Como Engenheira Backend no time minhas atividades incluem:"), _defineProperty(_portuguese4, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceEnum"].OPUS_SENIOR_TECH_LEAD, "A OPUS Software \xE9 uma consultoria localizada em S\xE3o Paulo - SP. Como Tech Lead e Desenvolvedor S\xEAnior, minhas \n        responsabilidades consistiam principalmente do design de solu\xE7\xF5es, codifica\xE7\xE3o, realiza\xE7\xE3o de code review and assist\xEAncia aos meus colegas no intuito de \n        atingir as melhores solu\xE7\xF5es utilizando-se das melhores pr\xE1ticas. Alguma dos projetos que eu estive envolvida foram:"), _defineProperty(_portuguese4, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceEnum"].OPUS_INTERMEDIATE_DEVELOPER, "Devido ao fato de que a OPUS \xE9 uma empresa de consultoria, eu tive a oportunidade de trabalhar em diversos \n        projetos e com uma ampla variedade de tecnologias. Os principais projetos que eu trabalhei durante meu tempo como desenvolvedor pleno foram:"), _defineProperty(_portuguese4, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceEnum"].AUDAXWARE, "A Audaxware \xE9 uma startup localizada em Austin, Texas cujo produto \xE9 um sistema de planejamento de projeto. Em 2015, quando eu \n        fui contratada, eles possu\xEDam um sistema legado que estava desenvolvido em ASP.Net com PostgreSQL e eles queriam construir um novo em C#, AngularJS e SQL \n        Server. Minhas principais contribui\xE7\xF5es foram:"), _defineProperty(_portuguese4, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceEnum"].OPUS_JR_SYSTEM_ANALYST, "Esse foi o meu primeiro trabalho relacionado \xE0 tecnologia. Eu havia estava terminado minha gradua\xE7\xE3o e me foi \n        fornecido um excelente ambiente para aprender e crescer como profissional. Os principais projetos que eu participei durante esse tempo foram:"), _portuguese4);
      var english = (_english4 = {}, _defineProperty(_english4, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceEnum"].UBER_SOFTWARE_ENGINEER, "Uber is Big Tech focused on urban mobility and transportation, whose services include,\n        but are not limited to: ride-sharing, food and package delivery, couriers and freight transportation. The \"Session Management\" team, from which I am a member,\n        is responsible for taking care of all matters related to user's authentication and user's identity evaluation, as well as control of user's sessions. As a Backend Engineer,\n        my responsibilities include:"), _defineProperty(_english4, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceEnum"].OPUS_SENIOR_TECH_LEAD, "OPUS Software is a software development consulting company based in S\xE3o Paulo - Brazil. As Tech Lead and Senior \n        Developer, my responsibilities consisted mostly of designing solutions, coding, performing code review and assisting my colleagues in order to come out \n        with the best solutions and practices. Some of the projects I was involved are given as follows:"), _defineProperty(_english4, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceEnum"].OPUS_INTERMEDIATE_DEVELOPER, "Due to the fact that OPUS Software is a consulting company, I had the opportunity of working in many different \n        projects and with a variety of technologies. As a Software Developer, the main projects I was involved to were:"), _defineProperty(_english4, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceEnum"].AUDAXWARE, "Audaxware is a startup based in Austin - Texas whose product is a project planning system. Back in 2015 they had legacy system \n        which was developed using ASP.Net with a PostgreSQL database, and they wanted to change it to C#, AngularJS and SQL Server. My main contributions were:"), _defineProperty(_english4, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_1__["WorkExperienceEnum"].OPUS_JR_SYSTEM_ANALYST, "This one was my first job related to technology. I was just finishing my Bachelor's Degree when I got there, and \n        it provided a great environment for me to learn and grow as professional. The main projects I was involved were:"), _english4);
      var WorkExperienceDescriptionDictionary = (_WorkExperienceDescri = {}, _defineProperty(_WorkExperienceDescri, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, english), _defineProperty(_WorkExperienceDescri, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, portuguese), _WorkExperienceDescri);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Boz4":
    /*!********************************************************!*\
      !*** ./src/app/dictionaries/hard-skills.dictionary.ts ***!
      \********************************************************/

    /*! exports provided: HardSkillsDictionary */

    /***/
    function Boz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _commons2, _english5, _portuguese5, _HardSkillsDictionary;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HardSkillsDictionary", function () {
        return HardSkillsDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/hard-skill.enum */
      "DW9G");

      var commons = (_commons2 = {}, _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].ANGULAR, 'AngularJS / Angular 2+'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].AWS, 'AWS'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].C_SHARP, 'C#'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].DATA_WAREHOUSE, 'Data Warehouse'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].DESIGN_PATTERNS, 'Design Patterns'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].DDD, 'DDD'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].ENTITY_FRAMEWORK, 'Entity Framework'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].FRONT_TECHNOLOGIES, 'HTML / CSS '), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].GIT, 'Git'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].HIBERNATE, 'Hibernate'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].JAVA, 'Java'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].JAVASCRIPT_TYPESCRIPT, 'Javascript / Typescript'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].JENKINS, 'Jenkins'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].JIRA_CONFLUENCE, 'Jira / Confluence'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].JSON, 'JSON'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].JUNIT, 'JUnit'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].KENDO_UI, 'Kendo UI'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].MAVEN, 'Maven'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].MONGO_DB, 'MongoDB'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].MY_SQL, 'My SQL'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].NEO4J, 'Neo4j'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].OLAP, 'OLAP'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].POSTGRESQL, 'PostgreSQL'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].POSTMAN, 'Postman'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].REST, 'REST / RESTFul'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].SCRUM_KANBAN, 'Scrum / Kanban'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].SOAPUI, 'SoapUI'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].SPRING_BOOT, 'Spring Boot'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].SQL_SERVER, 'SQL Server'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].SWAGGER, 'Swagger'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].TDD, 'TDD'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].TFS, 'TFS'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].XML, 'XML'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].SONAR_QUBE, 'SonarQube'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].CI_CD, 'CI/CD'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].KIBANA, 'Kibana'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].GRAFANA, 'Grafana'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].M3, 'M3'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].CASSANDRA, 'Cassandra'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].PHABRICATOR_ARCANIST, 'Phabricator/Arcanist'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].OAUTH20, 'OAuth 2.0'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].JWT, 'JWT'), _defineProperty(_commons2, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].GOLANG, 'GoLang'), _commons2);
      var english = (_english5 = {}, _defineProperty(_english5, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].API_DESIGN, 'API Design'), _defineProperty(_english5, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].OOP, 'OOP'), _defineProperty(_english5, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].PROGRAMMING_LOGIC, 'Programming Logic'), _english5);
      var portuguese = (_portuguese5 = {}, _defineProperty(_portuguese5, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].API_DESIGN, 'Design de API'), _defineProperty(_portuguese5, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].OOP, 'POO'), _defineProperty(_portuguese5, _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_1__["HardSkillEnum"].PROGRAMMING_LOGIC, 'Lógica de Programação'), _portuguese5);
      var HardSkillsDictionary = (_HardSkillsDictionary = {}, _defineProperty(_HardSkillsDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, Object.assign({}, commons, english)), _defineProperty(_HardSkillsDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, Object.assign({}, commons, portuguese)), _HardSkillsDictionary);
      /***/
    },

    /***/
    "BzGd":
    /*!**********************************************************************!*\
      !*** ./src/app/dictionaries/fixed-labels-and-tooltips.dictionary.ts ***!
      \**********************************************************************/

    /*! exports provided: FixedLabelsAndTooltipsDictionary */

    /***/
    function BzGd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english6, _portuguese6, _FixedLabelsAndToolti;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedLabelsAndTooltipsDictionary", function () {
        return FixedLabelsAndTooltipsDictionary;
      });
      /* harmony import */


      var _models_enums_fixed_labels_and_tooltips_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/fixed-labels-and-tooltips.enum */
      "zp+8");
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");

      var english = (_english6 = {}, _defineProperty(_english6, _models_enums_fixed_labels_and_tooltips_enum__WEBPACK_IMPORTED_MODULE_0__["FixedLabelsAndTooltipsEnum"].BACK_TO_TOP_BTN_TOOLTIP, 'Back to Top'), _defineProperty(_english6, _models_enums_fixed_labels_and_tooltips_enum__WEBPACK_IMPORTED_MODULE_0__["FixedLabelsAndTooltipsEnum"].CURRENT_LABEL, 'Current'), _english6);
      var portuguese = (_portuguese6 = {}, _defineProperty(_portuguese6, _models_enums_fixed_labels_and_tooltips_enum__WEBPACK_IMPORTED_MODULE_0__["FixedLabelsAndTooltipsEnum"].BACK_TO_TOP_BTN_TOOLTIP, 'Voltar ao Início'), _defineProperty(_portuguese6, _models_enums_fixed_labels_and_tooltips_enum__WEBPACK_IMPORTED_MODULE_0__["FixedLabelsAndTooltipsEnum"].CURRENT_LABEL, 'Atual'), _portuguese6);
      var FixedLabelsAndTooltipsDictionary = (_FixedLabelsAndToolti = {}, _defineProperty(_FixedLabelsAndToolti, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US, english), _defineProperty(_FixedLabelsAndToolti, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].PT_BR, portuguese), _FixedLabelsAndToolti);
      /***/
    },

    /***/
    "CLJp":
    /*!**************************************************!*\
      !*** ./src/app/models/enums/skill-level.enum.ts ***!
      \**************************************************/

    /*! exports provided: SkillLevelEnum */

    /***/
    function CLJp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillLevelEnum", function () {
        return SkillLevelEnum;
      });

      var SkillLevelEnum;

      (function (SkillLevelEnum) {
        SkillLevelEnum[SkillLevelEnum["ONE"] = 1] = "ONE";
        SkillLevelEnum[SkillLevelEnum["ONE_AND_HALF"] = 1.5] = "ONE_AND_HALF";
        SkillLevelEnum[SkillLevelEnum["TWO"] = 2] = "TWO";
        SkillLevelEnum[SkillLevelEnum["TWO_AND_HALF"] = 2.5] = "TWO_AND_HALF";
        SkillLevelEnum[SkillLevelEnum["THREE"] = 3] = "THREE";
        SkillLevelEnum[SkillLevelEnum["THREE_AND_HALF"] = 3.5] = "THREE_AND_HALF";
        SkillLevelEnum[SkillLevelEnum["FOUR"] = 4] = "FOUR";
        SkillLevelEnum[SkillLevelEnum["FOUR_AND_HALF"] = 4.5] = "FOUR_AND_HALF";
        SkillLevelEnum[SkillLevelEnum["MAX"] = 5] = "MAX";
      })(SkillLevelEnum || (SkillLevelEnum = {}));
      /***/

    },

    /***/
    "CYLe":
    /*!***************************************************!*\
      !*** ./src/app/dictionaries/school.dictionary.ts ***!
      \***************************************************/

    /*! exports provided: SchoolDictionary */

    /***/
    function CYLe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english7, _portuguese7, _SchoolDictionary;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchoolDictionary", function () {
        return SchoolDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_school_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/school.enum */
      "vrTo");

      var english = (_english7 = {}, _defineProperty(_english7, _models_enums_school_enum__WEBPACK_IMPORTED_MODULE_1__["SchoolEnum"].UFSCAR, 'Federal University of São Carlos'), _defineProperty(_english7, _models_enums_school_enum__WEBPACK_IMPORTED_MODULE_1__["SchoolEnum"].SAPIENZA, 'Sapienza Univerity of Rome'), _english7);
      var portuguese = (_portuguese7 = {}, _defineProperty(_portuguese7, _models_enums_school_enum__WEBPACK_IMPORTED_MODULE_1__["SchoolEnum"].UFSCAR, 'Universidade Federal de São Carlos'), _defineProperty(_portuguese7, _models_enums_school_enum__WEBPACK_IMPORTED_MODULE_1__["SchoolEnum"].SAPIENZA, 'Università degli Studi di Roma "La Sapienza"'), _portuguese7);
      var SchoolDictionary = (_SchoolDictionary = {}, _defineProperty(_SchoolDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, english), _defineProperty(_SchoolDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, portuguese), _SchoolDictionary);
      /***/
    },

    /***/
    "CoLN":
    /*!**************************************************!*\
      !*** ./src/app/models/enums/thesis-info.enum.ts ***!
      \**************************************************/

    /*! exports provided: ThesisInfoEnum */

    /***/
    function CoLN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThesisInfoEnum", function () {
        return ThesisInfoEnum;
      });

      var ThesisInfoEnum;

      (function (ThesisInfoEnum) {
        ThesisInfoEnum[ThesisInfoEnum["LINK_LABEL"] = 0] = "LINK_LABEL";
        ThesisInfoEnum[ThesisInfoEnum["THESIS_TITLE"] = 1] = "THESIS_TITLE";
        ThesisInfoEnum[ThesisInfoEnum["TITLE_LABEL"] = 2] = "TITLE_LABEL";
      })(ThesisInfoEnum || (ThesisInfoEnum = {}));
      /***/

    },

    /***/
    "DW9G":
    /*!*************************************************!*\
      !*** ./src/app/models/enums/hard-skill.enum.ts ***!
      \*************************************************/

    /*! exports provided: HardSkillEnum */

    /***/
    function DW9G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HardSkillEnum", function () {
        return HardSkillEnum;
      });

      var HardSkillEnum;

      (function (HardSkillEnum) {
        HardSkillEnum[HardSkillEnum["PROGRAMMING_LOGIC"] = 0] = "PROGRAMMING_LOGIC";
        HardSkillEnum[HardSkillEnum["OOP"] = 1] = "OOP";
        HardSkillEnum[HardSkillEnum["DATA_WAREHOUSE"] = 2] = "DATA_WAREHOUSE";
        HardSkillEnum[HardSkillEnum["OLAP"] = 3] = "OLAP";
        HardSkillEnum[HardSkillEnum["SQL_SERVER"] = 4] = "SQL_SERVER";
        HardSkillEnum[HardSkillEnum["POSTGRESQL"] = 5] = "POSTGRESQL";
        HardSkillEnum[HardSkillEnum["MY_SQL"] = 6] = "MY_SQL";
        HardSkillEnum[HardSkillEnum["MONGO_DB"] = 7] = "MONGO_DB";
        HardSkillEnum[HardSkillEnum["NEO4J"] = 8] = "NEO4J";
        HardSkillEnum[HardSkillEnum["SCRUM_KANBAN"] = 9] = "SCRUM_KANBAN";
        HardSkillEnum[HardSkillEnum["JIRA_CONFLUENCE"] = 10] = "JIRA_CONFLUENCE";
        HardSkillEnum[HardSkillEnum["DDD"] = 11] = "DDD";
        HardSkillEnum[HardSkillEnum["TDD"] = 12] = "TDD";
        HardSkillEnum[HardSkillEnum["API_DESIGN"] = 13] = "API_DESIGN";
        HardSkillEnum[HardSkillEnum["DESIGN_PATTERNS"] = 14] = "DESIGN_PATTERNS";
        HardSkillEnum[HardSkillEnum["SWAGGER"] = 15] = "SWAGGER";
        HardSkillEnum[HardSkillEnum["POSTMAN"] = 16] = "POSTMAN";
        HardSkillEnum[HardSkillEnum["SOAPUI"] = 17] = "SOAPUI";
        HardSkillEnum[HardSkillEnum["JAVA"] = 18] = "JAVA";
        HardSkillEnum[HardSkillEnum["SPRING_BOOT"] = 19] = "SPRING_BOOT";
        HardSkillEnum[HardSkillEnum["HIBERNATE"] = 20] = "HIBERNATE";
        HardSkillEnum[HardSkillEnum["C_SHARP"] = 21] = "C_SHARP";
        HardSkillEnum[HardSkillEnum["ENTITY_FRAMEWORK"] = 22] = "ENTITY_FRAMEWORK";
        HardSkillEnum[HardSkillEnum["JUNIT"] = 23] = "JUNIT";
        HardSkillEnum[HardSkillEnum["ANGULAR"] = 24] = "ANGULAR";
        HardSkillEnum[HardSkillEnum["JAVASCRIPT_TYPESCRIPT"] = 25] = "JAVASCRIPT_TYPESCRIPT";
        HardSkillEnum[HardSkillEnum["KENDO_UI"] = 26] = "KENDO_UI";
        HardSkillEnum[HardSkillEnum["JSON"] = 27] = "JSON";
        HardSkillEnum[HardSkillEnum["XML"] = 28] = "XML";
        HardSkillEnum[HardSkillEnum["FRONT_TECHNOLOGIES"] = 29] = "FRONT_TECHNOLOGIES";
        HardSkillEnum[HardSkillEnum["REST"] = 30] = "REST";
        HardSkillEnum[HardSkillEnum["GIT"] = 31] = "GIT";
        HardSkillEnum[HardSkillEnum["MAVEN"] = 32] = "MAVEN";
        HardSkillEnum[HardSkillEnum["JENKINS"] = 33] = "JENKINS";
        HardSkillEnum[HardSkillEnum["AWS"] = 34] = "AWS";
        HardSkillEnum[HardSkillEnum["TFS"] = 35] = "TFS";
        HardSkillEnum[HardSkillEnum["SONAR_QUBE"] = 36] = "SONAR_QUBE";
        HardSkillEnum[HardSkillEnum["CI_CD"] = 37] = "CI_CD";
        HardSkillEnum[HardSkillEnum["KIBANA"] = 38] = "KIBANA";
        HardSkillEnum[HardSkillEnum["GRAFANA"] = 39] = "GRAFANA";
        HardSkillEnum[HardSkillEnum["M3"] = 40] = "M3";
        HardSkillEnum[HardSkillEnum["CASSANDRA"] = 41] = "CASSANDRA";
        HardSkillEnum[HardSkillEnum["PHABRICATOR_ARCANIST"] = 42] = "PHABRICATOR_ARCANIST";
        HardSkillEnum[HardSkillEnum["OAUTH20"] = 43] = "OAUTH20";
        HardSkillEnum[HardSkillEnum["JWT"] = 44] = "JWT";
        HardSkillEnum[HardSkillEnum["GOLANG"] = 45] = "GOLANG";
      })(HardSkillEnum || (HardSkillEnum = {}));
      /***/

    },

    /***/
    "Df9M":
    /*!***********************************************************************!*\
      !*** ./src/app/components/ms-header-menu/ms-header-menu.component.ts ***!
      \***********************************************************************/

    /*! exports provided: MsHeaderMenuComponent */

    /***/
    function Df9M(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsHeaderMenuComponent", function () {
        return MsHeaderMenuComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      "KZTq");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ms_system_language_modal_ms_system_language_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../ms-system-language-modal/ms-system-language-modal.component */
      "X6lm");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../pipes/translate.pipe */
      "Eioz");

      function MsHeaderMenuComponent_li_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MsHeaderMenuComponent_li_12_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var item_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.scrollTo(item_r1.target);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 1, item_r1.name, "MENU_ITEM", ctx_r0.language));
        }
      }

      var MsHeaderMenuComponent = /*#__PURE__*/function () {
        function MsHeaderMenuComponent(scrollToService) {
          _classCallCheck(this, MsHeaderMenuComponent);

          this.scrollToService = scrollToService;
          this.items = [];
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US;
        }

        _createClass(MsHeaderMenuComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /*
           * Scrolls the screen to the target element
           */

        }, {
          key: "scrollTo",
          value: function scrollTo(target) {
            var config = {
              target: target
            };
            this.scrollToService.scrollTo(config);
          }
        }]);

        return MsHeaderMenuComponent;
      }();

      MsHeaderMenuComponent.ɵfac = function MsHeaderMenuComponent_Factory(t) {
        return new (t || MsHeaderMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"]));
      };

      MsHeaderMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsHeaderMenuComponent,
        selectors: [["ms-header-menu"]],
        inputs: {
          items: "items",
          language: "language"
        },
        decls: 14,
        vars: 3,
        consts: [[1, "profile-page", "sidebar-collapse"], ["color-on-scroll", "400", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent", "bg-info"], [1, "container"], [1, "navbar-translate"], ["data-toggle", "modal", "data-target", "#systemLanguageModal", 1, "navbar-brand"], [1, "fa", "fa-language", "fa-2x"], ["type", "button", "data-toggle", "collapse", "data-target", "#menu", "aria-controls", "menu", "aria-expanded", "false", "aria-label", "Toggle menu", 1, "navbar-toggler"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "menu", 1, "collapse", "navbar-collapse", "justify-content-end"], [1, "navbar-nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [3, "id", "language"], [1, "nav-item"], [1, "nav-link", 3, "click"]],
        template: function MsHeaderMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MsHeaderMenuComponent_li_12_Template, 4, 5, "li", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ms-system-language-modal", 13);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "systemLanguageModal")("language", ctx.language);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ms_system_language_modal_ms_system_language_modal_component__WEBPACK_IMPORTED_MODULE_5__["MsSystemLanguageModalComponent"]],
        pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        styles: [".sidebar-collapse[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-toggler-bar.bar2[_ngcontent-%COMP%] {\r\n    width: 22px;\r\n  }\r\n  \r\n  .navbar[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    letter-spacing: 1px;\r\n  }\r\n  \r\n  .nav-link[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n}\r\n  \r\n  .navbar-brand[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n  \r\n  .navbar-brand[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(255,255,255,.2);\r\n  border-radius: .1875rem;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zLWhlYWRlci1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVGO0lBQ0ksZUFBZTtBQUNuQjs7RUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztFQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCIiwiZmlsZSI6Im1zLWhlYWRlci1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhci1jb2xsYXBzZSAubmF2YmFyIC5uYXZiYXItdG9nZ2xlci1iYXIuYmFyMiB7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICB9XHJcbiAgXHJcbiAgLm5hdmJhciB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIH1cclxuXHJcbi5uYXYtbGluazpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAuMTg3NXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsHeaderMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-header-menu',
            templateUrl: './ms-header-menu.component.html',
            styleUrls: ['./ms-header-menu.component.css']
          }]
        }], function () {
          return [{
            type: _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToService"]
          }];
        }, {
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Dw63":
    /*!*****************************************!*\
      !*** ./src/app/models/external-link.ts ***!
      \*****************************************/

    /*! exports provided: ExternalLink */

    /***/
    function Dw63(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExternalLink", function () {
        return ExternalLink;
      });

      var ExternalLink = /*#__PURE__*/function () {
        function ExternalLink(uri, label) {
          _classCallCheck(this, ExternalLink);

          this._uri = uri;
          this._label = label;
        }

        _createClass(ExternalLink, [{
          key: "uri",
          get: function get() {
            return this._uri;
          },
          set: function set(uri) {
            this._uri = uri;
          }
        }, {
          key: "label",
          get: function get() {
            return this._label;
          },
          set: function set(label) {
            this._label = label;
          }
        }]);

        return ExternalLink;
      }();
      /***/

    },

    /***/
    "Eioz":
    /*!*****************************************!*\
      !*** ./src/app/pipes/translate.pipe.ts ***!
      \*****************************************/

    /*! exports provided: TranslatePipe */

    /***/
    function Eioz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslatePipe", function () {
        return TranslatePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _dictionaries_major_dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../dictionaries/major.dictionary */
      "hrcU");
      /* harmony import */


      var _dictionaries_position_dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../dictionaries/position.dictionary */
      "2W8z");
      /* harmony import */


      var _service_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/translation.service */
      "UXmV");
      /* harmony import */


      var _service_system_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/system-language.service */
      "64Rh");

      var TranslatePipe = /*#__PURE__*/function () {
        function TranslatePipe(translationService, languageService) {
          _classCallCheck(this, TranslatePipe);

          this.translationService = translationService;
          this.languageService = languageService;
        }

        _createClass(TranslatePipe, [{
          key: "transform",
          value: function transform(value) {
            if (value == null || value == undefined) {
              return value;
            }

            var type = arguments.length <= 1 ? undefined : arguments[1];
            var language = arguments.length <= 2 ? undefined : arguments[2];
            return this.translationService.translate(language, type, value);
          }
          /**
           * Join the Majors by using '/' as delimiter
           *
           * @param value
           */

        }, {
          key: "transformMajors",
          value: function transformMajors(value) {
            var majors = new Array(value.length);

            for (var i = 0; i < value.length; i++) {
              if (_dictionaries_major_dictionary__WEBPACK_IMPORTED_MODULE_1__["MajorDictionary"][this.languageService.language][value[i]] != null) {
                majors[i] = _dictionaries_major_dictionary__WEBPACK_IMPORTED_MODULE_1__["MajorDictionary"][this.languageService.language][value[i]];
              }
            }

            return this.filterAndJoin(majors);
          }
          /**
           * Join the Positions by using '/' as delimiter
           *
           * @param value
           */

        }, {
          key: "transformPositions",
          value: function transformPositions(value) {
            var positions = new Array(value.length);

            for (var i = 0; i < value.length; i++) {
              if (_dictionaries_position_dictionary__WEBPACK_IMPORTED_MODULE_2__["PositionDictionary"][this.languageService.language][value[i]] != null) {
                positions[i] = _dictionaries_position_dictionary__WEBPACK_IMPORTED_MODULE_2__["PositionDictionary"][this.languageService.language][value[i]];
              }
            }

            return this.filterAndJoin(positions);
          }
          /**
           * Filters the items by removing the ones that have no value and then join them
           *
           * @param items
           */

        }, {
          key: "filterAndJoin",
          value: function filterAndJoin(items) {
            // Join only the ones that are not null
            return items.filter(function (item) {
              return item;
            }).join(" / ");
          }
        }]);

        return TranslatePipe;
      }();

      TranslatePipe.ɵfac = function TranslatePipe_Factory(t) {
        return new (t || TranslatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_service__WEBPACK_IMPORTED_MODULE_3__["TranslationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_system_language_service__WEBPACK_IMPORTED_MODULE_4__["SystemLanguageService"]));
      };

      TranslatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "translate",
        type: TranslatePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslatePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'translate'
          }]
        }], function () {
          return [{
            type: _service_translation_service__WEBPACK_IMPORTED_MODULE_3__["TranslationService"]
          }, {
            type: _service_system_language_service__WEBPACK_IMPORTED_MODULE_4__["SystemLanguageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "G+Xz":
    /*!**********************************************************!*\
      !*** ./src/app/dictionaries/linkedin-info.dictionary.ts ***!
      \**********************************************************/

    /*! exports provided: LinkedinInfoDictionary */

    /***/
    function GXz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english8, _portuguese8, _LinkedinInfoDictiona;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkedinInfoDictionary", function () {
        return LinkedinInfoDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_linkedin_info_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/linkedin-info.enum */
      "L/nR");

      var english = (_english8 = {}, _defineProperty(_english8, _models_enums_linkedin_info_enum__WEBPACK_IMPORTED_MODULE_1__["LinkedinInfoEnum"].LINK, 'https://www.linkedin.com/in/mcbsilva'), _defineProperty(_english8, _models_enums_linkedin_info_enum__WEBPACK_IMPORTED_MODULE_1__["LinkedinInfoEnum"].TOOLTIP, 'Profile on LinkedIn'), _english8);
      var portuguese = (_portuguese8 = {}, _defineProperty(_portuguese8, _models_enums_linkedin_info_enum__WEBPACK_IMPORTED_MODULE_1__["LinkedinInfoEnum"].LINK, 'https://www.linkedin.com/in/mcbsilva/?locale=pt_BR'), _defineProperty(_portuguese8, _models_enums_linkedin_info_enum__WEBPACK_IMPORTED_MODULE_1__["LinkedinInfoEnum"].TOOLTIP, 'Página do LinkedIn'), _portuguese8);
      var LinkedinInfoDictionary = (_LinkedinInfoDictiona = {}, _defineProperty(_LinkedinInfoDictiona, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, english), _defineProperty(_LinkedinInfoDictiona, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, portuguese), _LinkedinInfoDictiona);
      /***/
    },

    /***/
    "GD4a":
    /*!**************************************!*\
      !*** ./src/app/pipes/period.pipe.ts ***!
      \**************************************/

    /*! exports provided: PeriodPipe */

    /***/
    function GD4a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PeriodPipe", function () {
        return PeriodPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_enums_fixed_labels_and_tooltips_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/fixed-labels-and-tooltips.enum */
      "zp+8");
      /* harmony import */


      var _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/enums/translation-type.enum */
      "U3m8");
      /* harmony import */


      var _service_translation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/translation.service */
      "UXmV");
      /* harmony import */


      var _date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./date.pipe */
      "wRGf");

      var PeriodPipe = /*#__PURE__*/function () {
        function PeriodPipe(translationService, datePipe) {
          _classCallCheck(this, PeriodPipe);

          this.translationService = translationService;
          this.datePipe = datePipe;
        }

        _createClass(PeriodPipe, [{
          key: "transform",
          value: function transform(value, format, language) {
            if (!value || !format) {
              return value;
            }

            if (value.end != null) {
              return "".concat(this.datePipe.transform(value.start, format), " - ").concat(this.datePipe.transform(value.end, format));
            }

            return "".concat(this.datePipe.transform(value.start, format), " - \n      ").concat(this.translationService.translate(language, _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_2__["TranslationTypeEnum"].FIXED_LABELS_AND_TOOLTIPS, _models_enums_fixed_labels_and_tooltips_enum__WEBPACK_IMPORTED_MODULE_1__["FixedLabelsAndTooltipsEnum"].CURRENT_LABEL));
          }
        }]);

        return PeriodPipe;
      }();

      PeriodPipe.ɵfac = function PeriodPipe_Factory(t) {
        return new (t || PeriodPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_service__WEBPACK_IMPORTED_MODULE_3__["TranslationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_date_pipe__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]));
      };

      PeriodPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "period",
        type: PeriodPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeriodPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'period'
          }]
        }], function () {
          return [{
            type: _service_translation_service__WEBPACK_IMPORTED_MODULE_3__["TranslationService"]
          }, {
            type: _date_pipe__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "GIsv":
    /*!*****************************************************!*\
      !*** ./src/app/dictionaries/language.dictionary.ts ***!
      \*****************************************************/

    /*! exports provided: LanguageDictionary */

    /***/
    function GIsv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english9, _portuguese9, _LanguageDictionary;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageDictionary", function () {
        return LanguageDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/language.enum */
      "x5lf");

      var english = (_english9 = {}, _defineProperty(_english9, _models_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__["LanguageEnum"].PORTUGUESE, 'Portuguese'), _defineProperty(_english9, _models_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__["LanguageEnum"].ENGLISH, 'English'), _defineProperty(_english9, _models_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__["LanguageEnum"].ITALIAN, 'Italian'), _defineProperty(_english9, _models_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__["LanguageEnum"].SPANISH, 'Spanish'), _defineProperty(_english9, _models_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__["LanguageEnum"].FRENCH, 'French'), _english9);
      var portuguese = (_portuguese9 = {}, _defineProperty(_portuguese9, _models_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__["LanguageEnum"].PORTUGUESE, 'Português'), _defineProperty(_portuguese9, _models_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__["LanguageEnum"].ENGLISH, 'Inglês'), _defineProperty(_portuguese9, _models_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__["LanguageEnum"].ITALIAN, 'Italiano'), _defineProperty(_portuguese9, _models_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__["LanguageEnum"].SPANISH, 'Espanhol'), _defineProperty(_portuguese9, _models_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__["LanguageEnum"].FRENCH, 'Francês'), _portuguese9);
      var LanguageDictionary = (_LanguageDictionary = {}, _defineProperty(_LanguageDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, english), _defineProperty(_LanguageDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, portuguese), _LanguageDictionary);
      /***/
    },

    /***/
    "HPPL":
    /*!****************************************************************************************************!*\
      !*** ./src/app/components/certifications/ms-certification-item/ms-certification-item.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: MsCertificationItemComponent */

    /***/
    function HPPL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsCertificationItemComponent", function () {
        return MsCertificationItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_certification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/certification */
      "Z9Ty");
      /* harmony import */


      var src_app_service_system_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/system-language.service */
      "64Rh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../pipes/date.pipe */
      "wRGf");

      var MsCertificationItemComponent = /*#__PURE__*/function () {
        function MsCertificationItemComponent(systemLanguageService) {
          _classCallCheck(this, MsCertificationItemComponent);

          this.systemLanguageService = systemLanguageService;
          this.info = new src_app_models_certification__WEBPACK_IMPORTED_MODULE_1__["Certification"]();
        }

        _createClass(MsCertificationItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "format",
          get: function get() {
            return this.systemLanguageService.format;
          }
        }]);

        return MsCertificationItemComponent;
      }();

      MsCertificationItemComponent.ɵfac = function MsCertificationItemComponent_Factory(t) {
        return new (t || MsCertificationItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_system_language_service__WEBPACK_IMPORTED_MODULE_2__["SystemLanguageService"]));
      };

      MsCertificationItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsCertificationItemComponent,
        selectors: [["ms-certification-item"]],
        inputs: {
          info: "info"
        },
        decls: 12,
        vars: 8,
        consts: [[1, "card", "ms-certification"], [1, "row"], [1, "col-sm-3", "bg-info", "ms-certification-header", "card-body"], [1, "date"], [1, "provider"], [1, "col-sm-9", "ms-certification-body", "card-body"], [1, "h5"]],
        template: function MsCertificationItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 5, ctx.info.date, ctx.format)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.provider);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.name);
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _pipes_date_pipe__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
        styles: [".ms-certification-header[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #FFFFFF;\r\n    align-content: center;\r\n    padding: 25px 0px 15px 15px;\r\n  }\r\n  \r\n  .ms-certification-header[_ngcontent-%COMP%]    > .provider[_ngcontent-%COMP%] {\r\n    font-size: 1.57em;\r\n    line-height: 1.4em;\r\n    margin-bottom: 15px;\r\n    font-weight: 600;\r\n  }\r\n  \r\n  .ms-certification[_ngcontent-%COMP%], .ms-certification-header[_ngcontent-%COMP%], .ms-certification-body[_ngcontent-%COMP%] {\r\n    min-height: 120px !important;\r\n  }\r\n  \r\n  @media (min-width: 576px) {\r\n    .ms-certification[_ngcontent-%COMP%], .ms-certification-header[_ngcontent-%COMP%], .ms-certification-body[_ngcontent-%COMP%] {\r\n      max-height: 120px;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 575.98px) {\r\n    .ms-certification-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n      margin-left: 1.25rem;\r\n    }\r\n  \r\n    .ms-certification-header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n      margin-left: -1.25rem;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 576px) and (max-width: 767.98px) {\r\n    .ms-certification-header[_ngcontent-%COMP%]    > .provider[_ngcontent-%COMP%] {\r\n      font-size: 1.2em;\r\n      \r\n    }\r\n    .ms-certification-header[_ngcontent-%COMP%] > .date[_ngcontent-%COMP%] {\r\n      font-size: 1em;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zLWNlcnRpZmljYXRpb24taXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0U7TUFDRSxpQkFBaUI7SUFDbkI7RUFDRjs7RUFFQTtJQUNFO01BQ0Usb0JBQW9CO0lBQ3RCOztJQUVBO01BQ0UscUJBQXFCO0lBQ3ZCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGdCQUFnQjs7SUFFbEI7SUFDQTtNQUNFLGNBQWM7SUFDaEI7RUFDRiIsImZpbGUiOiJtcy1jZXJ0aWZpY2F0aW9uLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tcy1jZXJ0aWZpY2F0aW9uLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDI1cHggMHB4IDE1cHggMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLm1zLWNlcnRpZmljYXRpb24taGVhZGVyID4gLnByb3ZpZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41N2VtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5tcy1jZXJ0aWZpY2F0aW9uLCAubXMtY2VydGlmaWNhdGlvbi1oZWFkZXIsIC5tcy1jZXJ0aWZpY2F0aW9uLWJvZHkge1xyXG4gICAgbWluLWhlaWdodDogMTIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgICAubXMtY2VydGlmaWNhdGlvbiwgLm1zLWNlcnRpZmljYXRpb24taGVhZGVyLCAubXMtY2VydGlmaWNhdGlvbi1ib2R5IHtcclxuICAgICAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gICAgLm1zLWNlcnRpZmljYXRpb24tYm9keSA+IHAge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcclxuICAgIH1cclxuICBcclxuICAgIC5tcy1jZXJ0aWZpY2F0aW9uLWhlYWRlciA+IHAge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTEuMjVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgICAubXMtY2VydGlmaWNhdGlvbi1oZWFkZXIgPiAucHJvdmlkZXIge1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5tcy1jZXJ0aWZpY2F0aW9uLWhlYWRlcj4uZGF0ZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsCertificationItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-certification-item',
            templateUrl: './ms-certification-item.component.html',
            styleUrls: ['./ms-certification-item.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_system_language_service__WEBPACK_IMPORTED_MODULE_2__["SystemLanguageService"]
          }];
        }, {
          info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "HTrS":
    /*!*********************************************************!*\
      !*** ./src/app/dictionaries/major-degree.dictionary.ts ***!
      \*********************************************************/

    /*! exports provided: MajorDegreeDictionary */

    /***/
    function HTrS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english10, _portuguese10, _MajorDegreeDictionar;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MajorDegreeDictionary", function () {
        return MajorDegreeDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_major_degree_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/major-degree.enum */
      "mEXy");

      var english = (_english10 = {}, _defineProperty(_english10, _models_enums_major_degree_enum__WEBPACK_IMPORTED_MODULE_1__["MajorDegreeEnum"].MASTER, "Master's Degree"), _defineProperty(_english10, _models_enums_major_degree_enum__WEBPACK_IMPORTED_MODULE_1__["MajorDegreeEnum"].BACHELOR, "Bachelor's Degree"), _defineProperty(_english10, _models_enums_major_degree_enum__WEBPACK_IMPORTED_MODULE_1__["MajorDegreeEnum"].ACADEMIC_EXCHANGE, "Academic Exchange"), _english10);
      var portuguese = (_portuguese10 = {}, _defineProperty(_portuguese10, _models_enums_major_degree_enum__WEBPACK_IMPORTED_MODULE_1__["MajorDegreeEnum"].MASTER, 'Mestrado Acadêmico'), _defineProperty(_portuguese10, _models_enums_major_degree_enum__WEBPACK_IMPORTED_MODULE_1__["MajorDegreeEnum"].BACHELOR, 'Bacharelado'), _defineProperty(_portuguese10, _models_enums_major_degree_enum__WEBPACK_IMPORTED_MODULE_1__["MajorDegreeEnum"].ACADEMIC_EXCHANGE, 'Intercâmbio Acadêmico'), _portuguese10);
      var MajorDegreeDictionary = (_MajorDegreeDictionar = {}, _defineProperty(_MajorDegreeDictionar, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, english), _defineProperty(_MajorDegreeDictionar, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, portuguese), _MajorDegreeDictionar);
      /***/
    },

    /***/
    "IGpC":
    /*!*************************************************************!*\
      !*** ./src/app/components/ms-footer/ms-footer.component.ts ***!
      \*************************************************************/

    /*! exports provided: MsFooterComponent */

    /***/
    function IGpC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsFooterComponent", function () {
        return MsFooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _ms_btn_linkedin_ms_btn_linkedin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../ms-btn-linkedin/ms-btn-linkedin.component */
      "zjWv");

      var MsFooterComponent = /*#__PURE__*/function () {
        function MsFooterComponent() {
          _classCallCheck(this, MsFooterComponent);

          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US;
          this.currentYear = new Date().getFullYear();
        }

        _createClass(MsFooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MsFooterComponent;
      }();

      MsFooterComponent.ɵfac = function MsFooterComponent_Factory(t) {
        return new (t || MsFooterComponent)();
      };

      MsFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsFooterComponent,
        selectors: [["ms-footer"]],
        inputs: {
          language: "language"
        },
        decls: 8,
        vars: 3,
        consts: [[1, "footer"], [1, "text-center"], [3, "position", "language"], [1, "h4", "title", "text-center", "mt-0"], [1, "text-center", "text-muted"]],
        template: function MsFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ms-btn-linkedin", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Camila Silva");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", "top")("language", ctx.language);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA9 ", ctx.currentYear, "");
          }
        },
        directives: [_ms_btn_linkedin_ms_btn_linkedin_component__WEBPACK_IMPORTED_MODULE_2__["MsBtnLinkedinComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtcy1mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsFooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-footer',
            templateUrl: './ms-footer.component.html',
            styleUrls: ['./ms-footer.component.css']
          }]
        }], function () {
          return [];
        }, {
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "L/nR":
    /*!****************************************************!*\
      !*** ./src/app/models/enums/linkedin-info.enum.ts ***!
      \****************************************************/

    /*! exports provided: LinkedinInfoEnum */

    /***/
    function LNR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LinkedinInfoEnum", function () {
        return LinkedinInfoEnum;
      });

      var LinkedinInfoEnum;

      (function (LinkedinInfoEnum) {
        LinkedinInfoEnum[LinkedinInfoEnum["LINK"] = 0] = "LINK";
        LinkedinInfoEnum[LinkedinInfoEnum["TOOLTIP"] = 1] = "TOOLTIP";
      })(LinkedinInfoEnum || (LinkedinInfoEnum = {}));
      /***/

    },

    /***/
    "LFmQ":
    /*!******************************************************!*\
      !*** ./src/app/models/enums/system-language.enum.ts ***!
      \******************************************************/

    /*! exports provided: SystemLanguageEnum */

    /***/
    function LFmQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystemLanguageEnum", function () {
        return SystemLanguageEnum;
      });

      var SystemLanguageEnum;

      (function (SystemLanguageEnum) {
        SystemLanguageEnum["EN_US"] = "EN_US";
        SystemLanguageEnum["PT_BR"] = "PT_BR";
      })(SystemLanguageEnum || (SystemLanguageEnum = {}));
      /***/

    },

    /***/
    "LapD":
    /*!********************************************!*\
      !*** ./src/app/models/enums/major.enum.ts ***!
      \********************************************/

    /*! exports provided: MajorEnum */

    /***/
    function LapD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MajorEnum", function () {
        return MajorEnum;
      });

      var MajorEnum;

      (function (MajorEnum) {
        MajorEnum[MajorEnum["COMPUTER_SCIENCE"] = 0] = "COMPUTER_SCIENCE";
        MajorEnum[MajorEnum["BUSINESS_INTELLIGENCE"] = 1] = "BUSINESS_INTELLIGENCE";
      })(MajorEnum || (MajorEnum = {}));
      /***/

    },

    /***/
    "Mwsn":
    /*!********************************************!*\
      !*** ./src/app/models/enums/title.enum.ts ***!
      \********************************************/

    /*! exports provided: TitleEnum */

    /***/
    function Mwsn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleEnum", function () {
        return TitleEnum;
      });

      var TitleEnum;

      (function (TitleEnum) {
        TitleEnum[TitleEnum["ABOUT_ME"] = 0] = "ABOUT_ME";
        TitleEnum[TitleEnum["DETAILS"] = 1] = "DETAILS";
        TitleEnum[TitleEnum["AGE"] = 2] = "AGE";
        TitleEnum[TitleEnum["EMAIL"] = 3] = "EMAIL";
        TitleEnum[TitleEnum["PHONE"] = 4] = "PHONE";
        TitleEnum[TitleEnum["LOCATION"] = 5] = "LOCATION";
        TitleEnum[TitleEnum["LANGUAGES"] = 6] = "LANGUAGES";
        TitleEnum[TitleEnum["WORK_EXPERIENCE"] = 7] = "WORK_EXPERIENCE";
        TitleEnum[TitleEnum["EDUCATION"] = 8] = "EDUCATION";
        TitleEnum[TitleEnum["SKILLS"] = 9] = "SKILLS";
        TitleEnum[TitleEnum["CERTIFICATIONS"] = 10] = "CERTIFICATIONS";
      })(TitleEnum || (TitleEnum = {}));
      /***/

    },

    /***/
    "Ovvk":
    /*!************************************************!*\
      !*** ./src/app/models/about-me-detail-item.ts ***!
      \************************************************/

    /*! exports provided: AboutMeDetailItem */

    /***/
    function Ovvk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutMeDetailItem", function () {
        return AboutMeDetailItem;
      });

      var AboutMeDetailItem = /*#__PURE__*/function () {
        function AboutMeDetailItem(title, info) {
          _classCallCheck(this, AboutMeDetailItem);

          this._title = title;
          this._info = info;
        }

        _createClass(AboutMeDetailItem, [{
          key: "title",
          get: function get() {
            return this._title;
          },
          set: function set(title) {
            this._title = title;
          }
        }, {
          key: "info",
          get: function get() {
            return this._info;
          },
          set: function set(info) {
            this._info = info;
          }
        }]);

        return AboutMeDetailItem;
      }();
      /***/

    },

    /***/
    "PdCN":
    /*!*****************************************************************!*\
      !*** ./src/app/models/enums/work-experience-technology.enum.ts ***!
      \*****************************************************************/

    /*! exports provided: WorkExperienceTechnologyEnum */

    /***/
    function PdCN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkExperienceTechnologyEnum", function () {
        return WorkExperienceTechnologyEnum;
      });

      var WorkExperienceTechnologyEnum;

      (function (WorkExperienceTechnologyEnum) {
        WorkExperienceTechnologyEnum["JAVA_11"] = "Java11";
        WorkExperienceTechnologyEnum["SPRING_BOOT"] = "Spring Boot";
        WorkExperienceTechnologyEnum["ANGULAR_6"] = "Angular 6";
        WorkExperienceTechnologyEnum["POSTGRESQL"] = "POstgreSQL";
        WorkExperienceTechnologyEnum["AWS"] = "AWS";
        WorkExperienceTechnologyEnum["GIT"] = "Git";
        WorkExperienceTechnologyEnum["JIRA"] = "Jira";
        WorkExperienceTechnologyEnum["SCRUM"] = "Scrum";
        WorkExperienceTechnologyEnum["JENKINS"] = "Jenkins";
        WorkExperienceTechnologyEnum["SONAR_QUBE"] = "SonarQube";
        WorkExperienceTechnologyEnum["JAVA_8"] = "Java8";
        WorkExperienceTechnologyEnum["ANGULAR_2"] = "Angular 2";
        WorkExperienceTechnologyEnum["MY_SQL"] = "My SQL";
        WorkExperienceTechnologyEnum["C_SHARP"] = "C#";
        WorkExperienceTechnologyEnum["SQL_SERVER"] = "SQL Server";
        WorkExperienceTechnologyEnum["ANGULAR_JS"] = "AngularJS";
        WorkExperienceTechnologyEnum["KENDO_UI"] = "Kendo UI";
        WorkExperienceTechnologyEnum["MATERIAL"] = "Material";
        WorkExperienceTechnologyEnum["AZURE"] = "Azure";
        WorkExperienceTechnologyEnum["WEB_JOB"] = "Web Job";
        WorkExperienceTechnologyEnum["TFS"] = "TFS";
        WorkExperienceTechnologyEnum["KANBAN"] = "Kanban";
        WorkExperienceTechnologyEnum["KNOCKOUT"] = "Knockout";
        WorkExperienceTechnologyEnum["BOOTSTRAP"] = "Bootstrap";
        WorkExperienceTechnologyEnum["GO"] = "GoLang";
        WorkExperienceTechnologyEnum["KIBANA"] = "Kibana";
        WorkExperienceTechnologyEnum["GRAFANA"] = "Grafana";
        WorkExperienceTechnologyEnum["CPLUS2"] = "C++";
        WorkExperienceTechnologyEnum["LUA"] = "Lua";
        WorkExperienceTechnologyEnum["M3"] = "M3";
        WorkExperienceTechnologyEnum["CASSANDRA"] = "Cassandra";
        WorkExperienceTechnologyEnum["PHABRICATOR"] = "Phabricator";
        WorkExperienceTechnologyEnum["ARCANIST"] = "Arcanist";
        WorkExperienceTechnologyEnum["CICD"] = "CI/CD";
        WorkExperienceTechnologyEnum["OAUTH20"] = "OAuth 2.0";
      })(WorkExperienceTechnologyEnum || (WorkExperienceTechnologyEnum = {}));
      /***/

    },

    /***/
    "Pxv9":
    /*!*****************************************!*\
      !*** ./src/app/models/activity-item.ts ***!
      \*****************************************/

    /*! exports provided: ActivityItem */

    /***/
    function Pxv9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityItem", function () {
        return ActivityItem;
      });
      /* harmony import */


      var _enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./enums/activity-type.enum */
      "SWqd");

      var ActivityItem = /*#__PURE__*/function () {
        function ActivityItem(type, description) {
          _classCallCheck(this, ActivityItem);

          this._type = type;
          this._description = description;
        }

        _createClass(ActivityItem, [{
          key: "description",
          get: function get() {
            return this._description;
          },
          set: function set(description) {
            this._description = description;
          }
        }, {
          key: "iconClass",
          get: function get() {
            switch (this._type) {
              case _enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_0__["ActivityTypeEnum"].CODING:
                return 'fa-code';

              case _enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_0__["ActivityTypeEnum"].DATABASE:
                return 'fa-database';

              case _enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_0__["ActivityTypeEnum"].SUPPORT:
                return 'fa-info-circle';

              case _enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_0__["ActivityTypeEnum"].ARCHITECTURE:
                return 'fa-duotone fa-sitemap';

              default:
                return 'fa-code';
            }
          }
        }]);

        return ActivityItem;
      }();
      /***/

    },

    /***/
    "Q1Gu":
    /*!****************************************************!*\
      !*** ./src/app/models/enums/about-me-info.enum.ts ***!
      \****************************************************/

    /*! exports provided: AboutMeInfoEnum */

    /***/
    function Q1Gu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutMeInfoEnum", function () {
        return AboutMeInfoEnum;
      });

      var AboutMeInfoEnum;

      (function (AboutMeInfoEnum) {
        AboutMeInfoEnum[AboutMeInfoEnum["BIO"] = 0] = "BIO";
        AboutMeInfoEnum[AboutMeInfoEnum["AGE"] = 1] = "AGE";
        AboutMeInfoEnum[AboutMeInfoEnum["PHONE"] = 2] = "PHONE";
        AboutMeInfoEnum[AboutMeInfoEnum["EMAIL"] = 3] = "EMAIL";
        AboutMeInfoEnum[AboutMeInfoEnum["LOCATION"] = 4] = "LOCATION";
      })(AboutMeInfoEnum || (AboutMeInfoEnum = {}));
      /***/

    },

    /***/
    "Q8ZI":
    /*!*********************************************!*\
      !*** ./src/app/models/enums/locale.enum.ts ***!
      \*********************************************/

    /*! exports provided: LocaleEnum */

    /***/
    function Q8ZI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocaleEnum", function () {
        return LocaleEnum;
      });

      var LocaleEnum;

      (function (LocaleEnum) {
        LocaleEnum[LocaleEnum["SOROCABA"] = 0] = "SOROCABA";
        LocaleEnum[LocaleEnum["ROME"] = 1] = "ROME";
        LocaleEnum[LocaleEnum["SAO_PAULO"] = 2] = "SAO_PAULO";
      })(LocaleEnum || (LocaleEnum = {}));
      /***/

    },

    /***/
    "RcYm":
    /*!*****************************************!*\
      !*** ./src/app/pipes/positions.pipe.ts ***!
      \*****************************************/

    /*! exports provided: PositionsPipe */

    /***/
    function RcYm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PositionsPipe", function () {
        return PositionsPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/translation-type.enum */
      "U3m8");
      /* harmony import */


      var _service_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/translation.service */
      "UXmV");

      var PositionsPipe = /*#__PURE__*/function () {
        function PositionsPipe(translationService) {
          _classCallCheck(this, PositionsPipe);

          this.translationService = translationService;
        }

        _createClass(PositionsPipe, [{
          key: "transform",
          value: function transform(positions, language) {
            var _this = this;

            if (!positions || positions.length <= 0) {
              return null;
            }

            if (language !== undefined) {
              positions = positions.map(function (position) {
                return _this.translationService.translate(language, _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_1__["TranslationTypeEnum"].POSITION, position);
              });
            }

            return positions.join(" / ");
          }
        }]);

        return PositionsPipe;
      }();

      PositionsPipe.ɵfac = function PositionsPipe_Factory(t) {
        return new (t || PositionsPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_service__WEBPACK_IMPORTED_MODULE_2__["TranslationService"]));
      };

      PositionsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "positions",
        type: PositionsPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PositionsPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'positions'
          }]
        }], function () {
          return [{
            type: _service_translation_service__WEBPACK_IMPORTED_MODULE_2__["TranslationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "SNyX":
    /*!************************************************!*\
      !*** ./src/app/models/enums/menu-item.enum.ts ***!
      \************************************************/

    /*! exports provided: MenuItemEnum */

    /***/
    function SNyX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuItemEnum", function () {
        return MenuItemEnum;
      });

      var MenuItemEnum;

      (function (MenuItemEnum) {
        MenuItemEnum[MenuItemEnum["ABOUT_ME"] = 0] = "ABOUT_ME";
        MenuItemEnum[MenuItemEnum["WORK_EXPERIENCE"] = 1] = "WORK_EXPERIENCE";
        MenuItemEnum[MenuItemEnum["EDUCATION"] = 2] = "EDUCATION";
        MenuItemEnum[MenuItemEnum["SKILLS"] = 3] = "SKILLS";
        MenuItemEnum[MenuItemEnum["CERTIFICATION"] = 4] = "CERTIFICATION";
      })(MenuItemEnum || (MenuItemEnum = {}));
      /***/

    },

    /***/
    "SWqd":
    /*!****************************************************!*\
      !*** ./src/app/models/enums/activity-type.enum.ts ***!
      \****************************************************/

    /*! exports provided: ActivityTypeEnum */

    /***/
    function SWqd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActivityTypeEnum", function () {
        return ActivityTypeEnum;
      });

      var ActivityTypeEnum;

      (function (ActivityTypeEnum) {
        ActivityTypeEnum["CODING"] = "fa-code";
        ActivityTypeEnum["DATABASE"] = "fa-database";
        ActivityTypeEnum["SUPPORT"] = "fa-info-circle";
        ActivityTypeEnum["ARCHITECTURE"] = "fa-duotone fa-sitemap";
      })(ActivityTypeEnum || (ActivityTypeEnum = {}));
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./models/enums/menu-item.enum */
      "SNyX");
      /* harmony import */


      var _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./models/enums/position.enum */
      "bDRz");
      /* harmony import */


      var _models_header_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./models/header-info */
      "fEhN");
      /* harmony import */


      var _models_menu_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./models/menu-item */
      "lqUS");
      /* harmony import */


      var _service_system_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./service/system-language.service */
      "64Rh");
      /* harmony import */


      var _service_resume_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./service/resume.service */
      "zDtx");
      /* harmony import */


      var _components_ms_header_menu_ms_header_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/ms-header-menu/ms-header-menu.component */
      "Df9M");
      /* harmony import */


      var _components_ms_header_body_ms_header_body_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/ms-header-body/ms-header-body.component */
      "mlED");
      /* harmony import */


      var _components_about_me_ms_about_me_ms_about_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/about-me/ms-about-me/ms-about-me.component */
      "4qPO");
      /* harmony import */


      var _components_work_experience_ms_work_experience_ms_work_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/work-experience/ms-work-experience/ms-work-experience.component */
      "saQB");
      /* harmony import */


      var _components_education_ms_education_ms_education_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/education/ms-education/ms-education.component */
      "A4JV");
      /* harmony import */


      var _components_skills_ms_skills_ms_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/skills/ms-skills/ms-skills.component */
      "sVuK");
      /* harmony import */


      var _components_certifications_ms_certifications_ms_certifications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/certifications/ms-certifications/ms-certifications.component */
      "27Kp");
      /* harmony import */


      var _components_ms_back_to_top_button_ms_back_to_top_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/ms-back-to-top-button/ms-back-to-top-button.component */
      "6FGy");
      /* harmony import */


      var _components_ms_footer_ms_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/ms-footer/ms-footer.component */
      "IGpC");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(systemLanguageService, resumeService) {
          _classCallCheck(this, AppComponent);

          this.systemLanguageService = systemLanguageService;
          this.resumeService = resumeService;
          this.systemLanguage = this.systemLanguageService.language;
          this.menuItems = [new _models_menu_item__WEBPACK_IMPORTED_MODULE_4__["MenuItem"](_models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].ABOUT_ME, '#about'), new _models_menu_item__WEBPACK_IMPORTED_MODULE_4__["MenuItem"](_models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].WORK_EXPERIENCE, '#experience'), new _models_menu_item__WEBPACK_IMPORTED_MODULE_4__["MenuItem"](_models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].EDUCATION, '#education'), new _models_menu_item__WEBPACK_IMPORTED_MODULE_4__["MenuItem"](_models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].SKILLS, '#mySkills'), new _models_menu_item__WEBPACK_IMPORTED_MODULE_4__["MenuItem"](_models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].CERTIFICATION, '#certifications')];
          this.headerInfo = new _models_header_info__WEBPACK_IMPORTED_MODULE_3__["HeaderInfo"]('Camila Silva', [_models_enums_position_enum__WEBPACK_IMPORTED_MODULE_2__["PositionEnum"].SOFTWARE_ENGINEER], 'assets/images/me.jpeg');
          this.resume = this.resumeService.get();
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.systemLanguageService.languageObservable.subscribe(function (language) {
              _this2.systemLanguage = language;
              _this2.resume = _this2.resumeService.get();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.systemLanguageService.languageObservable.unsubscribe();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_system_language_service__WEBPACK_IMPORTED_MODULE_5__["SystemLanguageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_resume_service__WEBPACK_IMPORTED_MODULE_6__["ResumeService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 20,
        vars: 16,
        consts: [[3, "items", "language"], [1, "page-content"], [3, "info", "language"], ["id", "about", 1, "section", "pb-0"], ["id", "experience", 1, "section", "pb-0"], [1, "container"], [3, "experiences", "language"], ["id", "education", 1, "section", "pb-0"], ["id", "mySkills", 1, "section", "pb-0"], [3, "skills", "language"], ["id", "certifications", 1, "section", "pb-0"], [3, "language"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ms-header-menu", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ms-header-body", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ms-about-me", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ms-work-experience", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ms-education", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ms-skills", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ms-certifications", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ms-back-to-top-button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "ms-footer", 11);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.menuItems)("language", ctx.systemLanguage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", ctx.headerInfo)("language", ctx.systemLanguage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", ctx.resume.aboutMe)("language", ctx.systemLanguage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("experiences", ctx.resume.workExperiences)("language", ctx.systemLanguage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.resume.education)("language", ctx.systemLanguage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skills", ctx.resume.skills)("language", ctx.systemLanguage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.resume.certifications)("language", ctx.systemLanguage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("language", ctx.systemLanguage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("language", ctx.systemLanguage);
          }
        },
        directives: [_components_ms_header_menu_ms_header_menu_component__WEBPACK_IMPORTED_MODULE_7__["MsHeaderMenuComponent"], _components_ms_header_body_ms_header_body_component__WEBPACK_IMPORTED_MODULE_8__["MsHeaderBodyComponent"], _components_about_me_ms_about_me_ms_about_me_component__WEBPACK_IMPORTED_MODULE_9__["MsAboutMeComponent"], _components_work_experience_ms_work_experience_ms_work_experience_component__WEBPACK_IMPORTED_MODULE_10__["MsWorkExperienceComponent"], _components_education_ms_education_ms_education_component__WEBPACK_IMPORTED_MODULE_11__["MsEducationComponent"], _components_skills_ms_skills_ms_skills_component__WEBPACK_IMPORTED_MODULE_12__["MsSkillsComponent"], _components_certifications_ms_certifications_ms_certifications_component__WEBPACK_IMPORTED_MODULE_13__["MsCertificationsComponent"], _components_ms_back_to_top_button_ms_back_to_top_button_component__WEBPACK_IMPORTED_MODULE_14__["MsBackToTopButtonComponent"], _components_ms_footer_ms_footer_component__WEBPACK_IMPORTED_MODULE_15__["MsFooterComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _service_system_language_service__WEBPACK_IMPORTED_MODULE_5__["SystemLanguageService"]
          }, {
            type: _service_resume_service__WEBPACK_IMPORTED_MODULE_6__["ResumeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "T2mY":
    /*!**************************************!*\
      !*** ./src/app/models/hard-skill.ts ***!
      \**************************************/

    /*! exports provided: HardSkill */

    /***/
    function T2mY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HardSkill", function () {
        return HardSkill;
      });

      var HardSkill = /*#__PURE__*/function () {
        function HardSkill(skill, level) {
          _classCallCheck(this, HardSkill);

          this._skill = skill;
          this._level = level;
        }

        _createClass(HardSkill, [{
          key: "skill",
          get: function get() {
            return this._skill;
          },
          set: function set(skill) {
            this._skill = skill;
          }
        }, {
          key: "level",
          get: function get() {
            return this._level;
          },
          set: function set(level) {
            this._level = level;
          }
        }]);

        return HardSkill;
      }();
      /***/

    },

    /***/
    "U3m8":
    /*!*******************************************************!*\
      !*** ./src/app/models/enums/translation-type.enum.ts ***!
      \*******************************************************/

    /*! exports provided: TranslationTypeEnum */

    /***/
    function U3m8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationTypeEnum", function () {
        return TranslationTypeEnum;
      });

      var TranslationTypeEnum;

      (function (TranslationTypeEnum) {
        TranslationTypeEnum["MAJOR_DEGREE"] = "MAJOR_DEGREE";
        TranslationTypeEnum["MAJOR"] = "MAJOR";
        TranslationTypeEnum["LOCALE"] = "LOCALE";
        TranslationTypeEnum["SCHOOL"] = "SCHOOL";
        TranslationTypeEnum["LANGUAGE"] = "LANGUAGE";
        TranslationTypeEnum["TITLE"] = "TITLE";
        TranslationTypeEnum["MENU_ITEM"] = "MENU_ITEM";
        TranslationTypeEnum["SOFT_SKILL"] = "SOFT_SKILL";
        TranslationTypeEnum["HARD_SKILL"] = "HARD_SKILL";
        TranslationTypeEnum["POSITION"] = "POSITION";
        TranslationTypeEnum["SYSTEM_LANGUAGE"] = "SYSTEM_LANGUAGE";
        TranslationTypeEnum["ABOUT_ME_INFO"] = "ABOUT_ME_INFO";
        TranslationTypeEnum["WORK_EXPERIENCE_DESCRIPTION"] = "WORK_EXPERIENCE_DESCRIPTION";
        TranslationTypeEnum["WORK_EXPERIENCE_ACTIVITY"] = "WORK_EXPERIENCE_ACTIVITY";
        TranslationTypeEnum["PERIOD"] = "PERIOD";
        TranslationTypeEnum["THESIS_INFO"] = "THESIS_INFO";
        TranslationTypeEnum["LINKEDIN_INFO"] = "LINKEDIN_INFO";
        TranslationTypeEnum["FIXED_LABELS_AND_TOOLTIPS"] = "FIXED_LABELS_AND_TOOLTIPS";
        TranslationTypeEnum["RESUME_INFO"] = "RESUME_INFO";
        TranslationTypeEnum["COMPANY_WEBSITE"] = "COMPANY_WEBSITE";
        TranslationTypeEnum["SCHOOL_WEBSITE"] = "SCHOOL_WEBSITE";
      })(TranslationTypeEnum || (TranslationTypeEnum = {}));
      /***/

    },

    /***/
    "UXmV":
    /*!************************************************!*\
      !*** ./src/app/service/translation.service.ts ***!
      \************************************************/

    /*! exports provided: TranslationService */

    /***/
    function UXmV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TranslationService", function () {
        return TranslationService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _dictionaries_about_me_info_dictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../dictionaries/about-me-info.dictionary */
      "8Mqy");
      /* harmony import */


      var _dictionaries_company_website_dictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../dictionaries/company-website.dictionary */
      "V7Ze");
      /* harmony import */


      var _dictionaries_fixed_labels_and_tooltips_dictionary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../dictionaries/fixed-labels-and-tooltips.dictionary */
      "BzGd");
      /* harmony import */


      var _dictionaries_hard_skills_dictionary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../dictionaries/hard-skills.dictionary */
      "Boz4");
      /* harmony import */


      var _dictionaries_language_dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../dictionaries/language.dictionary */
      "GIsv");
      /* harmony import */


      var _dictionaries_linkedin_info_dictionary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../dictionaries/linkedin-info.dictionary */
      "G+Xz");
      /* harmony import */


      var _dictionaries_locale_dictionary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../dictionaries/locale.dictionary */
      "/Gfa");
      /* harmony import */


      var _dictionaries_major_degree_dictionary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../dictionaries/major-degree.dictionary */
      "HTrS");
      /* harmony import */


      var _dictionaries_major_dictionary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../dictionaries/major.dictionary */
      "hrcU");
      /* harmony import */


      var _dictionaries_menu_item_dictionary__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../dictionaries/menu-item.dictionary */
      "mwU9");
      /* harmony import */


      var _dictionaries_position_dictionary__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../dictionaries/position.dictionary */
      "2W8z");
      /* harmony import */


      var _dictionaries_resume_info_dictionary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../dictionaries/resume-info.dictionary */
      "z6Ts");
      /* harmony import */


      var _dictionaries_school_website_dictionary__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../dictionaries/school-website.dictionary */
      "ezFT");
      /* harmony import */


      var _dictionaries_school_dictionary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../dictionaries/school.dictionary */
      "CYLe");
      /* harmony import */


      var _dictionaries_soft_skill_dictionary__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../dictionaries/soft-skill.dictionary */
      "dFk/");
      /* harmony import */


      var _dictionaries_system_language_dictionary__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../dictionaries/system-language.dictionary */
      "i7Io");
      /* harmony import */


      var _dictionaries_thesis_info_dictionary__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../dictionaries/thesis-info.dictionary */
      "tSEg");
      /* harmony import */


      var _dictionaries_title_dictionary__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../dictionaries/title.dictionary */
      "dHpg");
      /* harmony import */


      var _dictionaries_work_experience_activities_dictionary__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../dictionaries/work-experience-activities.dictionary */
      "q0iP");
      /* harmony import */


      var _dictionaries_work_experience_description_dictionary__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../dictionaries/work-experience-description.dictionary */
      "ArwO");
      /* harmony import */


      var _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../models/enums/translation-type.enum */
      "U3m8");

      var TranslationService = /*#__PURE__*/function () {
        function TranslationService() {
          _classCallCheck(this, TranslationService);
        }

        _createClass(TranslationService, [{
          key: "translate",
          value: function translate(language, type, value) {
            if (value == null || value == undefined) {
              return value;
            }

            var translatedValue;

            switch (type) {
              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].MAJOR_DEGREE:
                translatedValue = _dictionaries_major_degree_dictionary__WEBPACK_IMPORTED_MODULE_8__["MajorDegreeDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].MAJOR:
                translatedValue = _dictionaries_major_dictionary__WEBPACK_IMPORTED_MODULE_9__["MajorDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].LOCALE:
                translatedValue = _dictionaries_locale_dictionary__WEBPACK_IMPORTED_MODULE_7__["LocaleDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].SCHOOL:
                translatedValue = _dictionaries_school_dictionary__WEBPACK_IMPORTED_MODULE_14__["SchoolDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].LANGUAGE:
                translatedValue = _dictionaries_language_dictionary__WEBPACK_IMPORTED_MODULE_5__["LanguageDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].TITLE:
                translatedValue = _dictionaries_title_dictionary__WEBPACK_IMPORTED_MODULE_18__["TitleDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].MENU_ITEM:
                translatedValue = _dictionaries_menu_item_dictionary__WEBPACK_IMPORTED_MODULE_10__["MenuItemDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].SOFT_SKILL:
                translatedValue = _dictionaries_soft_skill_dictionary__WEBPACK_IMPORTED_MODULE_15__["SoftSkillsDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].HARD_SKILL:
                translatedValue = _dictionaries_hard_skills_dictionary__WEBPACK_IMPORTED_MODULE_4__["HardSkillsDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].POSITION:
                translatedValue = _dictionaries_position_dictionary__WEBPACK_IMPORTED_MODULE_11__["PositionDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].SYSTEM_LANGUAGE:
                translatedValue = _dictionaries_system_language_dictionary__WEBPACK_IMPORTED_MODULE_16__["SystemLanguageDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].ABOUT_ME_INFO:
                translatedValue = _dictionaries_about_me_info_dictionary__WEBPACK_IMPORTED_MODULE_1__["AboutMeInfoDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].WORK_EXPERIENCE_DESCRIPTION:
                translatedValue = _dictionaries_work_experience_description_dictionary__WEBPACK_IMPORTED_MODULE_20__["WorkExperienceDescriptionDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].WORK_EXPERIENCE_ACTIVITY:
                translatedValue = _dictionaries_work_experience_activities_dictionary__WEBPACK_IMPORTED_MODULE_19__["WorkExperienceActivitiesDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].THESIS_INFO:
                translatedValue = _dictionaries_thesis_info_dictionary__WEBPACK_IMPORTED_MODULE_17__["ThesisInfoDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].LINKEDIN_INFO:
                translatedValue = _dictionaries_linkedin_info_dictionary__WEBPACK_IMPORTED_MODULE_6__["LinkedinInfoDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].FIXED_LABELS_AND_TOOLTIPS:
                translatedValue = _dictionaries_fixed_labels_and_tooltips_dictionary__WEBPACK_IMPORTED_MODULE_3__["FixedLabelsAndTooltipsDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].RESUME_INFO:
                translatedValue = _dictionaries_resume_info_dictionary__WEBPACK_IMPORTED_MODULE_12__["ResumeInfoDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].COMPANY_WEBSITE:
                translatedValue = _dictionaries_company_website_dictionary__WEBPACK_IMPORTED_MODULE_2__["CompanyWebsiteDictionary"][language][value];
                break;

              case _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_21__["TranslationTypeEnum"].SCHOOL_WEBSITE:
                translatedValue = _dictionaries_school_website_dictionary__WEBPACK_IMPORTED_MODULE_13__["SchoolWebsiteDictionary"][language][value];
                break;

              default:
                return value;
            }

            if (translatedValue == null || translatedValue == undefined) {
              return value;
            }

            return translatedValue;
          }
        }]);

        return TranslationService;
      }();

      TranslationService.ɵfac = function TranslationService_Factory(t) {
        return new (t || TranslationService)();
      };

      TranslationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TranslationService,
        factory: TranslationService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslationService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "V7Ze":
    /*!************************************************************!*\
      !*** ./src/app/dictionaries/company-website.dictionary.ts ***!
      \************************************************************/

    /*! exports provided: CompanyWebsiteDictionary */

    /***/
    function V7Ze(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english11, _portuguese11, _CompanyWebsiteDictio;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyWebsiteDictionary", function () {
        return CompanyWebsiteDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_company_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/company.enum */
      "udzz");

      var english = (_english11 = {}, _defineProperty(_english11, _models_enums_company_enum__WEBPACK_IMPORTED_MODULE_1__["CompanyEnum"].AUDAXWARE, 'https://www.audaxware.com'), _defineProperty(_english11, _models_enums_company_enum__WEBPACK_IMPORTED_MODULE_1__["CompanyEnum"].OPUS, 'https://www.opus-software.com.br/en/better-for-enus'), _defineProperty(_english11, _models_enums_company_enum__WEBPACK_IMPORTED_MODULE_1__["CompanyEnum"].UBER, 'https://www.uber.com'), _english11);
      var portuguese = (_portuguese11 = {}, _defineProperty(_portuguese11, _models_enums_company_enum__WEBPACK_IMPORTED_MODULE_1__["CompanyEnum"].AUDAXWARE, 'https://www.audaxware.com'), _defineProperty(_portuguese11, _models_enums_company_enum__WEBPACK_IMPORTED_MODULE_1__["CompanyEnum"].OPUS, 'https://www.opus-software.com.br'), _defineProperty(_portuguese11, _models_enums_company_enum__WEBPACK_IMPORTED_MODULE_1__["CompanyEnum"].UBER, 'https://www.uber.com/br/pt-br'), _portuguese11);
      var CompanyWebsiteDictionary = (_CompanyWebsiteDictio = {}, _defineProperty(_CompanyWebsiteDictio, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, english), _defineProperty(_CompanyWebsiteDictio, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, portuguese), _CompanyWebsiteDictio);
      /***/
    },

    /***/
    "VIhu":
    /*!************************************!*\
      !*** ./src/app/models/about-me.ts ***!
      \************************************/

    /*! exports provided: AboutMe */

    /***/
    function VIhu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutMe", function () {
        return AboutMe;
      });

      var AboutMe = /*#__PURE__*/function () {
        function AboutMe(details, languages, bioParagraphs) {
          _classCallCheck(this, AboutMe);

          this._bioParagraphs = bioParagraphs;
          this._details = details;
          this._languages = languages;
        }

        _createClass(AboutMe, [{
          key: "bioParagraphs",
          get: function get() {
            return this._bioParagraphs;
          },
          set: function set(bioParagraphs) {
            this._bioParagraphs = bioParagraphs;
          }
        }, {
          key: "details",
          get: function get() {
            return this._details;
          },
          set: function set(details) {
            this._details = details;
          }
        }, {
          key: "languages",
          get: function get() {
            return this._languages;
          },
          set: function set(languages) {
            this._languages = languages;
          }
        }]);

        return AboutMe;
      }();
      /***/

    },

    /***/
    "VXVq":
    /*!******************************************************************************!*\
      !*** ./src/app/components/skills/ms-soft-skills/ms-soft-skills.component.ts ***!
      \******************************************************************************/

    /*! exports provided: MsSoftSkillsComponent */

    /***/
    function VXVq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsSoftSkillsComponent", function () {
        return MsSoftSkillsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../pipes/translate.pipe */
      "Eioz");

      function MsSoftSkillsComponent_div_0_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var skill_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, skill_r3, "SOFT_SKILL", ctx_r2.language));
        }
      }

      function MsSoftSkillsComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MsSoftSkillsComponent_div_0_p_1_Template, 3, 5, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pair_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pair_r1);
        }
      }

      var MsSoftSkillsComponent = /*#__PURE__*/function () {
        function MsSoftSkillsComponent() {
          _classCallCheck(this, MsSoftSkillsComponent);

          this.skills = [];
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US;
          this.skillPairs = [];
        }

        _createClass(MsSoftSkillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // Splits the skills into pairs for the responsive layout
            this.skillPairs = this.splitIntoPairs(this.skills);
          }
          /**
           * Splits a set of skills into pairs
           *
           * @param skills
           */

        }, {
          key: "splitIntoPairs",
          value: function splitIntoPairs(skills) {
            var pairs = [];
            var pairIdx = -1;

            for (var i = 0; i < skills.length; i++) {
              if (i % 2 == 0) {
                pairIdx++;
                pairs[pairIdx] = [];
              }

              pairs[pairIdx][i % 2] = skills[i];
            }

            return pairs;
          }
        }]);

        return MsSoftSkillsComponent;
      }();

      MsSoftSkillsComponent.ɵfac = function MsSoftSkillsComponent_Factory(t) {
        return new (t || MsSoftSkillsComponent)();
      };

      MsSoftSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsSoftSkillsComponent,
        selectors: [["ms-soft-skills"]],
        inputs: {
          skills: "skills",
          language: "language"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "row ms-skill-group", 4, "ngFor", "ngForOf"], [1, "row", "ms-skill-group"], ["class", "ms-skill col-lg-12 col-sm-6", 4, "ngFor", "ngForOf"], [1, "ms-skill", "col-lg-12", "col-sm-6"]],
        template: function MsSoftSkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MsSoftSkillsComponent_div_0_Template, 2, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillPairs);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: ["@media (min-width: 576px) and (max-width: 991.98px) {\r\n    .ms-skill-group[_ngcontent-%COMP%]:nth-child(even) {\r\n      color: #2CA8FF;\r\n    }\r\n  }\r\n\r\n  .ms-skill-group[_ngcontent-%COMP%]:first-of-type {\r\n    margin-top: 30px;\r\n  }\r\n\r\n  @media (max-width: 575.98px) {\r\n    .ms-skill[_ngcontent-%COMP%]:nth-child(even) {\r\n      color: #2CA8FF;\r\n    }\r\n  }\r\n\r\n  @media (min-width: 992px) {\r\n    .ms-skill[_ngcontent-%COMP%]:nth-child(even) {\r\n      color: #2CA8FF;\r\n    }\r\n  }\r\n\r\n  .ms-skill[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .ms-skill[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n  .ms-skill[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.4, 1.4);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zLXNvZnQtc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtNQUNFLGNBQWM7SUFDaEI7RUFDRjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFO01BQ0UsY0FBYztJQUNoQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBRUUsMEJBQTBCO0VBQzVCIiwiZmlsZSI6Im1zLXNvZnQtc2tpbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgLm1zLXNraWxsLWdyb3VwOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgIGNvbG9yOiAjMkNBOEZGO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1zLXNraWxsLWdyb3VwOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAubXMtc2tpbGw6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgY29sb3I6ICMyQ0E4RkY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLm1zLXNraWxsOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgIGNvbG9yOiAjMkNBOEZGO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubXMtc2tpbGwge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLm1zLXNraWxsID4gcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAubXMtc2tpbGw6aG92ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuNCwgMS40KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40LCAxLjQpO1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsSoftSkillsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-soft-skills',
            templateUrl: './ms-soft-skills.component.html',
            styleUrls: ['./ms-soft-skills.component.css']
          }]
        }], function () {
          return [];
        }, {
          skills: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "VeWk":
    /*!*************************************************!*\
      !*** ./src/app/models/enums/soft-skill.enum.ts ***!
      \*************************************************/

    /*! exports provided: SoftSkillEnum */

    /***/
    function VeWk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoftSkillEnum", function () {
        return SoftSkillEnum;
      });

      var SoftSkillEnum;

      (function (SoftSkillEnum) {
        SoftSkillEnum[SoftSkillEnum["TEAM_WORK"] = 0] = "TEAM_WORK";
        SoftSkillEnum[SoftSkillEnum["COLLABORATION"] = 1] = "COLLABORATION";
        SoftSkillEnum[SoftSkillEnum["COMMITMENT"] = 2] = "COMMITMENT";
        SoftSkillEnum[SoftSkillEnum["CRITICAL_THINKING"] = 3] = "CRITICAL_THINKING";
        SoftSkillEnum[SoftSkillEnum["SELF_LEARNING"] = 4] = "SELF_LEARNING";
        SoftSkillEnum[SoftSkillEnum["ADAPTABILITY"] = 5] = "ADAPTABILITY";
        SoftSkillEnum[SoftSkillEnum["COMMUNICATION"] = 6] = "COMMUNICATION";
        SoftSkillEnum[SoftSkillEnum["TIME_MANAGEMENT"] = 7] = "TIME_MANAGEMENT";
        SoftSkillEnum[SoftSkillEnum["RESILIENCE"] = 8] = "RESILIENCE";
        SoftSkillEnum[SoftSkillEnum["PROBLEM_SOLVING"] = 9] = "PROBLEM_SOLVING";
        SoftSkillEnum[SoftSkillEnum["LEADERSHIP"] = 10] = "LEADERSHIP";
        SoftSkillEnum[SoftSkillEnum["ATTENTION_TO_DETAIL"] = 11] = "ATTENTION_TO_DETAIL";
      })(SoftSkillEnum || (SoftSkillEnum = {}));
      /***/

    },

    /***/
    "Vn8Q":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/components/work-experience/ms-work-experience-item/ms-work-experience-item.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: MsWorkExperienceItemComponent */

    /***/
    function Vn8Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsWorkExperienceItemComponent", function () {
        return MsWorkExperienceItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var src_app_models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/enums/translation-type.enum */
      "U3m8");
      /* harmony import */


      var src_app_models_work_experience__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/work-experience */
      "r2L+");
      /* harmony import */


      var src_app_service_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/translation.service */
      "UXmV");
      /* harmony import */


      var _ms_btn_period_ms_btn_period_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ms-btn-period/ms-btn-period.component */
      "WZ0R");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_positions_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../pipes/positions.pipe */
      "RcYm");

      function MsWorkExperienceItemComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var activity_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", activity_r2.iconClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r2.description, " ");
        }
      }

      function MsWorkExperienceItemComponent_a_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var MsWorkExperienceItemComponent = /*#__PURE__*/function () {
        function MsWorkExperienceItemComponent(translationService) {
          _classCallCheck(this, MsWorkExperienceItemComponent);

          this.translationService = translationService;
          this.TECHNOLOGIES_THRESHOLD = 9;
          this.info = new src_app_models_work_experience__WEBPACK_IMPORTED_MODULE_3__["WorkExperience"]();
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US;
        }

        _createClass(MsWorkExperienceItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "technologies",
          get: function get() {
            if (this.info && this.info.technologies && this.info.technologies.length > 0) {
              if (this.info.technologies.length > this.TECHNOLOGIES_THRESHOLD) {
                return this.info.technologies.slice(0, this.TECHNOLOGIES_THRESHOLD).join(', ');
              }

              return this.info.technologies.join(', ');
            }

            return '';
          }
        }, {
          key: "showMoreTechnologiesIcon",
          get: function get() {
            if (!this.info) {
              return false;
            }

            return this.info.technologies && this.info.technologies.length > this.TECHNOLOGIES_THRESHOLD;
          }
        }, {
          key: "description",
          get: function get() {
            return this.translationService.translate(this.language, src_app_models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_2__["TranslationTypeEnum"].WORK_EXPERIENCE_DESCRIPTION, this.info.identifier);
          }
        }, {
          key: "activities",
          get: function get() {
            return this.translationService.translate(this.language, src_app_models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_2__["TranslationTypeEnum"].WORK_EXPERIENCE_ACTIVITY, this.info.identifier);
          }
        }, {
          key: "companyWebsite",
          get: function get() {
            return this.translationService.translate(this.language, src_app_models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_2__["TranslationTypeEnum"].COMPANY_WEBSITE, this.info.company);
          }
        }]);

        return MsWorkExperienceItemComponent;
      }();

      MsWorkExperienceItemComponent.ɵfac = function MsWorkExperienceItemComponent_Factory(t) {
        return new (t || MsWorkExperienceItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"]));
      };

      MsWorkExperienceItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsWorkExperienceItemComponent,
        selectors: [["ms-work-experience-item"]],
        inputs: {
          info: "info",
          language: "language"
        },
        decls: 19,
        vars: 11,
        consts: [[1, "timeline-card-title"], [1, "position"], [1, "h5"], [1, "company"], ["target", "_blank", 3, "href"], [1, "period"], [3, "period"], [1, "timeline-card-body"], [1, "list-unstyled", "ms-main-projects"], [4, "ngFor", "ngForOf"], [1, "timeline-footer"], [1, "text-info"], ["class", "scroll-behavior-smooth", "href", "#mySkills", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "ms-bullet", 3, "ngClass"], ["href", "#mySkills", 1, "scroll-behavior-smooth"], [1, "fa", "fa-plus-circle"]],
        template: function MsWorkExperienceItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ms-btn-period", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MsWorkExperienceItemComponent_li_14_Template, 3, 2, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MsWorkExperienceItemComponent_a_18_Template, 2, 0, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 8, ctx.info.positions, ctx.language));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.companyWebsite, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.company);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("period", ctx.info.period);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.activities);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.technologies, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMoreTechnologiesIcon);
          }
        },
        directives: [_ms_btn_period_ms_btn_period_component__WEBPACK_IMPORTED_MODULE_5__["MsBtnPeriodComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]],
        pipes: [_pipes_positions_pipe__WEBPACK_IMPORTED_MODULE_7__["PositionsPipe"]],
        styles: [".timeline-card-title[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .timeline-card-title[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zLXdvcmstZXhwZXJpZW5jZS1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoibXMtd29yay1leHBlcmllbmNlLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZS1jYXJkLXRpdGxlIC5jb21wYW55PnNwYW4sIC50aW1lbGluZS1jYXJkLXRpdGxlIC5jb21wYW55PnAge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsWorkExperienceItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-work-experience-item',
            templateUrl: './ms-work-experience-item.component.html',
            styleUrls: ['./ms-work-experience-item.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"]
          }];
        }, {
          info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "WFQj":
    /*!**************************************!*\
      !*** ./src/app/pipes/majors.pipe.ts ***!
      \**************************************/

    /*! exports provided: MajorsPipe */

    /***/
    function WFQj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MajorsPipe", function () {
        return MajorsPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/translation-type.enum */
      "U3m8");
      /* harmony import */


      var _service_translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/translation.service */
      "UXmV");

      var MajorsPipe = /*#__PURE__*/function () {
        function MajorsPipe(translationService) {
          _classCallCheck(this, MajorsPipe);

          this.translationService = translationService;
        }

        _createClass(MajorsPipe, [{
          key: "transform",
          value: function transform(majors, language) {
            var _this3 = this;

            if (!majors || majors.length <= 0) {
              return null;
            }

            if (language !== undefined) {
              majors = majors.map(function (major) {
                return _this3.translationService.translate(language, _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_1__["TranslationTypeEnum"].MAJOR, major);
              });
            }

            return majors.join(" / ");
          }
        }]);

        return MajorsPipe;
      }();

      MajorsPipe.ɵfac = function MajorsPipe_Factory(t) {
        return new (t || MajorsPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_translation_service__WEBPACK_IMPORTED_MODULE_2__["TranslationService"]));
      };

      MajorsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "majors",
        type: MajorsPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MajorsPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'majors'
          }]
        }], function () {
          return [{
            type: _service_translation_service__WEBPACK_IMPORTED_MODULE_2__["TranslationService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "WZ0R":
    /*!*********************************************************************!*\
      !*** ./src/app/components/ms-btn-period/ms-btn-period.component.ts ***!
      \*********************************************************************/

    /*! exports provided: MsBtnPeriodComponent */

    /***/
    function WZ0R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsBtnPeriodComponent", function () {
        return MsBtnPeriodComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_period__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/period */
      "cHcX");
      /* harmony import */


      var src_app_service_system_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/system-language.service */
      "64Rh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_period_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../pipes/period.pipe */
      "GD4a");

      var MsBtnPeriodComponent = /*#__PURE__*/function () {
        function MsBtnPeriodComponent(SystemLanguageService) {
          _classCallCheck(this, MsBtnPeriodComponent);

          this.SystemLanguageService = SystemLanguageService;
          this.period = new src_app_models_period__WEBPACK_IMPORTED_MODULE_1__["Period"]();
        }

        _createClass(MsBtnPeriodComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "format",
          get: function get() {
            return this.SystemLanguageService.format;
          }
        }, {
          key: "language",
          get: function get() {
            return this.SystemLanguageService.language;
          }
        }]);

        return MsBtnPeriodComponent;
      }();

      MsBtnPeriodComponent.ɵfac = function MsBtnPeriodComponent_Factory(t) {
        return new (t || MsBtnPeriodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_system_language_service__WEBPACK_IMPORTED_MODULE_2__["SystemLanguageService"]));
      };

      MsBtnPeriodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsBtnPeriodComponent,
        selectors: [["ms-btn-period"]],
        inputs: {
          period: "period"
        },
        decls: 4,
        vars: 7,
        consts: [[1, "btn", "btn-dark", "btn-round", "ms-btn-period"]],
        template: function MsBtnPeriodComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "period");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 3, ctx.period, ctx.format, ctx.language)));
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"], _pipes_period_pipe__WEBPACK_IMPORTED_MODULE_4__["PeriodPipe"]],
        styles: [".ms-btn-period[_ngcontent-%COMP%], .ms-btn-period[_ngcontent-%COMP%]:hover, .ms-btn-period[_ngcontent-%COMP%]:focus, .ms-btn-period[_ngcontent-%COMP%]:active {\r\n    background: #2ca8ff !important;\r\n    opacity: 0.7;\r\n    box-shadow: none;\r\n    cursor: default !important;\r\n    font-weight: bold;\r\n    margin-left: -5px;\r\n    height: 30px;\r\n    line-height: 10px;\r\n    box-shadow: none !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zLWJ0bi1wZXJpb2QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztJQUlJLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7SUFFakIsMkJBQTJCO0VBQzdCIiwiZmlsZSI6Im1zLWJ0bi1wZXJpb2QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tcy1idG4tcGVyaW9kLCBcclxuLm1zLWJ0bi1wZXJpb2Q6aG92ZXIsIFxyXG4ubXMtYnRuLXBlcmlvZDpmb2N1cywgXHJcbi5tcy1idG4tcGVyaW9kOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmNhOGZmICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsBtnPeriodComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-btn-period',
            templateUrl: './ms-btn-period.component.html',
            styleUrls: ['./ms-btn-period.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_system_language_service__WEBPACK_IMPORTED_MODULE_2__["SystemLanguageService"]
          }];
        }, {
          period: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "WcGD":
    /*!**************************************************!*\
      !*** ./src/app/models/enums/resume-info.enum.ts ***!
      \**************************************************/

    /*! exports provided: ResumeInfoEnum */

    /***/
    function WcGD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResumeInfoEnum", function () {
        return ResumeInfoEnum;
      });

      var ResumeInfoEnum;

      (function (ResumeInfoEnum) {
        ResumeInfoEnum[ResumeInfoEnum["FILE_NAME_SUFFIX"] = 0] = "FILE_NAME_SUFFIX";
        ResumeInfoEnum[ResumeInfoEnum["URI"] = 1] = "URI";
      })(ResumeInfoEnum || (ResumeInfoEnum = {}));
      /***/

    },

    /***/
    "X6lm":
    /*!*******************************************************************************************!*\
      !*** ./src/app/components/ms-system-language-modal/ms-system-language-modal.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: MsSystemLanguageModalComponent */

    /***/
    function X6lm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsSystemLanguageModalComponent", function () {
        return MsSystemLanguageModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var src_app_service_system_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/service/system-language.service */
      "64Rh");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../pipes/translate.pipe */
      "Eioz");

      var _c0 = ["closeModalBtn"];

      function MsSystemLanguageModalComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MsSystemLanguageModalComponent_div_4_Template_div_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var option_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.changeSystemLanguage(option_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 1, option_r2, "SYSTEM_LANGUAGE", ctx_r0.language));
        }
      }

      var MsSystemLanguageModalComponent = /*#__PURE__*/function () {
        function MsSystemLanguageModalComponent(systemLanguageService) {
          _classCallCheck(this, MsSystemLanguageModalComponent);

          this.systemLanguageService = systemLanguageService;
          this.id = '';
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US;
          this.options = Object.keys(src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"]);
        }

        _createClass(MsSystemLanguageModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "changeSystemLanguage",
          value: function changeSystemLanguage(language) {
            if (language !== this.systemLanguageService.language) {
              this.systemLanguageService.language = language;
            }

            this.closeModalBtn.nativeElement.click();
          }
        }]);

        return MsSystemLanguageModalComponent;
      }();

      MsSystemLanguageModalComponent.ɵfac = function MsSystemLanguageModalComponent_Factory(t) {
        return new (t || MsSystemLanguageModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_system_language_service__WEBPACK_IMPORTED_MODULE_2__["SystemLanguageService"]));
      };

      MsSystemLanguageModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsSystemLanguageModalComponent,
        selectors: [["ms-system-language-modal"]],
        viewQuery: function MsSystemLanguageModalComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.closeModalBtn = _t.first);
          }
        },
        inputs: {
          id: "id",
          language: "language"
        },
        decls: 10,
        vars: 2,
        consts: [["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade", 3, "id"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-content"], [1, "modal-body", "text-center"], [4, "ngFor", "ngForOf"], [1, "dropdown-divider"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["closeModalBtn", ""], [1, "option", 3, "click"]],
        template: function MsSystemLanguageModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MsSystemLanguageModalComponent_div_4_Template, 5, 5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
        styles: [".modal-body[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    font-size: 1em;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:hover {\r\n    color: #049dff;\r\n    cursor: pointer;\r\n    transform: scale(1.2, 1.2);\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zLXN5c3RlbS1sYW5ndWFnZS1tb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6Im1zLXN5c3RlbS1sYW5ndWFnZS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHkgLm9wdGlvbiB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSAub3B0aW9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDQ5ZGZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XHJcbn1cclxuXHJcbi5tb2RhbC1mb290ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsSystemLanguageModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-system-language-modal',
            templateUrl: './ms-system-language-modal.component.html',
            styleUrls: ['./ms-system-language-modal.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_system_language_service__WEBPACK_IMPORTED_MODULE_2__["SystemLanguageService"]
          }];
        }, {
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          closeModalBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['closeModalBtn']
          }]
        });
      })();
      /***/

    },

    /***/
    "Xkib":
    /*!******************************************!*\
      !*** ./src/app/models/education-item.ts ***!
      \******************************************/

    /*! exports provided: EducationItem */

    /***/
    function Xkib(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationItem", function () {
        return EducationItem;
      });

      var EducationItem = /*#__PURE__*/function () {
        function EducationItem(school, degree, major, period, locale, externalLink, additionalInfo) {
          _classCallCheck(this, EducationItem);

          this._school = school;
          this._degree = degree;
          this._major = major;
          this._period = period;
          this._locale = locale;
          this._externalLink = externalLink;
          this._additionalInfo = additionalInfo;
        }

        _createClass(EducationItem, [{
          key: "school",
          get: function get() {
            return this._school;
          },
          set: function set(school) {
            this._school = school;
          }
        }, {
          key: "degree",
          get: function get() {
            return this._degree;
          },
          set: function set(degree) {
            this._degree = degree;
          }
        }, {
          key: "major",
          get: function get() {
            return this._major;
          },
          set: function set(major) {
            this._major = major;
          }
        }, {
          key: "period",
          get: function get() {
            return this._period;
          },
          set: function set(period) {
            this._period = period;
          }
        }, {
          key: "locale",
          get: function get() {
            return this._locale;
          },
          set: function set(locale) {
            this._locale = locale;
          }
        }, {
          key: "externalLink",
          get: function get() {
            return this._externalLink;
          },
          set: function set(externalLink) {
            this._externalLink = externalLink;
          }
        }, {
          key: "additionalInfo",
          get: function get() {
            return this._additionalInfo;
          },
          set: function set(additionalInfo) {
            this._additionalInfo = additionalInfo;
          }
        }]);

        return EducationItem;
      }();
      /***/

    },

    /***/
    "Z9Ty":
    /*!*****************************************!*\
      !*** ./src/app/models/certification.ts ***!
      \*****************************************/

    /*! exports provided: Certification */

    /***/
    function Z9Ty(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Certification", function () {
        return Certification;
      });

      var Certification = /*#__PURE__*/function () {
        function Certification(name, provider, date) {
          _classCallCheck(this, Certification);

          this._name = name;
          this._provider = provider;
          this._date = date;
        }

        _createClass(Certification, [{
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name;
          }
        }, {
          key: "provider",
          get: function get() {
            return this._provider;
          },
          set: function set(provider) {
            this._provider = provider;
          }
        }, {
          key: "date",
          get: function get() {
            return this._date;
          },
          set: function set(date) {
            this._date = date;
          }
        }]);

        return Certification;
      }();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @nicky-lenaers/ngx-scroll-to */
      "KZTq");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_ms_back_to_top_button_ms_back_to_top_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/ms-back-to-top-button/ms-back-to-top-button.component */
      "6FGy");
      /* harmony import */


      var _components_ms_header_menu_ms_header_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/ms-header-menu/ms-header-menu.component */
      "Df9M");
      /* harmony import */


      var _components_ms_header_body_ms_header_body_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/ms-header-body/ms-header-body.component */
      "mlED");
      /* harmony import */


      var _components_about_me_ms_about_me_ms_about_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/about-me/ms-about-me/ms-about-me.component */
      "4qPO");
      /* harmony import */


      var _components_ms_language_level_ms_language_level_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/ms-language-level/ms-language-level.component */
      "0qEk");
      /* harmony import */


      var _components_work_experience_ms_work_experience_ms_work_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/work-experience/ms-work-experience/ms-work-experience.component */
      "saQB");
      /* harmony import */


      var _components_work_experience_ms_work_experience_item_ms_work_experience_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/work-experience/ms-work-experience-item/ms-work-experience-item.component */
      "Vn8Q");
      /* harmony import */


      var _components_education_ms_education_ms_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/education/ms-education/ms-education.component */
      "A4JV");
      /* harmony import */


      var _components_education_ms_education_item_ms_education_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/education/ms-education-item/ms-education-item.component */
      "g7ud");
      /* harmony import */


      var _components_ms_btn_period_ms_btn_period_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/ms-btn-period/ms-btn-period.component */
      "WZ0R");
      /* harmony import */


      var _components_about_me_ms_about_me_detail_item_ms_about_me_detail_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/about-me/ms-about-me-detail-item/ms-about-me-detail-item.component */
      "7BXS");
      /* harmony import */


      var _components_certifications_ms_certifications_ms_certifications_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/certifications/ms-certifications/ms-certifications.component */
      "27Kp");
      /* harmony import */


      var _components_certifications_ms_certification_item_ms_certification_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/certifications/ms-certification-item/ms-certification-item.component */
      "HPPL");
      /* harmony import */


      var _components_skills_ms_skills_ms_skills_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/skills/ms-skills/ms-skills.component */
      "sVuK");
      /* harmony import */


      var _components_skills_ms_soft_skills_ms_soft_skills_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/skills/ms-soft-skills/ms-soft-skills.component */
      "VXVq");
      /* harmony import */


      var _components_skills_ms_hard_skills_ms_hard_skills_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/skills/ms-hard-skills/ms-hard-skills.component */
      "1/i9");
      /* harmony import */


      var _components_skills_ms_hard_skills_item_ms_hard_skills_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/skills/ms-hard-skills-item/ms-hard-skills-item.component */
      "ggRj");
      /* harmony import */


      var _components_ms_footer_ms_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/ms-footer/ms-footer.component */
      "IGpC");
      /* harmony import */


      var _components_ms_btn_linkedin_ms_btn_linkedin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/ms-btn-linkedin/ms-btn-linkedin.component */
      "zjWv");
      /* harmony import */


      var _components_ms_system_language_modal_ms_system_language_modal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/ms-system-language-modal/ms-system-language-modal.component */
      "X6lm");
      /* harmony import */


      var _pipes_positions_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./pipes/positions.pipe */
      "RcYm");
      /* harmony import */


      var _pipes_majors_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./pipes/majors.pipe */
      "WFQj");
      /* harmony import */


      var _pipes_period_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./pipes/period.pipe */
      "GD4a");
      /* harmony import */


      var _pipes_date_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./pipes/date.pipe */
      "wRGf");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./pipes/translate.pipe */
      "Eioz"); // Components
      // Pipes


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_28__["DatePipe"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [// Components
          _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_ms_back_to_top_button_ms_back_to_top_button_component__WEBPACK_IMPORTED_MODULE_5__["MsBackToTopButtonComponent"], _components_ms_header_menu_ms_header_menu_component__WEBPACK_IMPORTED_MODULE_6__["MsHeaderMenuComponent"], _components_ms_header_body_ms_header_body_component__WEBPACK_IMPORTED_MODULE_7__["MsHeaderBodyComponent"], _components_about_me_ms_about_me_ms_about_me_component__WEBPACK_IMPORTED_MODULE_8__["MsAboutMeComponent"], _components_ms_language_level_ms_language_level_component__WEBPACK_IMPORTED_MODULE_9__["MsLanguageLevelComponent"], _components_work_experience_ms_work_experience_ms_work_experience_component__WEBPACK_IMPORTED_MODULE_10__["MsWorkExperienceComponent"], _components_work_experience_ms_work_experience_item_ms_work_experience_item_component__WEBPACK_IMPORTED_MODULE_11__["MsWorkExperienceItemComponent"], _components_education_ms_education_ms_education_component__WEBPACK_IMPORTED_MODULE_12__["MsEducationComponent"], _components_education_ms_education_item_ms_education_item_component__WEBPACK_IMPORTED_MODULE_13__["MsEducationItemComponent"], _components_ms_btn_period_ms_btn_period_component__WEBPACK_IMPORTED_MODULE_14__["MsBtnPeriodComponent"], _components_about_me_ms_about_me_detail_item_ms_about_me_detail_item_component__WEBPACK_IMPORTED_MODULE_15__["MsAboutMeDetailItemComponent"], _components_certifications_ms_certifications_ms_certifications_component__WEBPACK_IMPORTED_MODULE_16__["MsCertificationsComponent"], _components_certifications_ms_certification_item_ms_certification_item_component__WEBPACK_IMPORTED_MODULE_17__["MsCertificationItemComponent"], _components_skills_ms_skills_ms_skills_component__WEBPACK_IMPORTED_MODULE_18__["MsSkillsComponent"], _components_skills_ms_soft_skills_ms_soft_skills_component__WEBPACK_IMPORTED_MODULE_19__["MsSoftSkillsComponent"], _components_skills_ms_hard_skills_ms_hard_skills_component__WEBPACK_IMPORTED_MODULE_20__["MsHardSkillsComponent"], _components_skills_ms_hard_skills_item_ms_hard_skills_item_component__WEBPACK_IMPORTED_MODULE_21__["MsHardSkillsItemComponent"], _components_ms_footer_ms_footer_component__WEBPACK_IMPORTED_MODULE_22__["MsFooterComponent"], _components_ms_btn_linkedin_ms_btn_linkedin_component__WEBPACK_IMPORTED_MODULE_23__["MsBtnLinkedinComponent"], _components_ms_system_language_modal_ms_system_language_modal_component__WEBPACK_IMPORTED_MODULE_24__["MsSystemLanguageModalComponent"], // Pipes
          _pipes_period_pipe__WEBPACK_IMPORTED_MODULE_27__["PeriodPipe"], _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_29__["TranslatePipe"], _pipes_date_pipe__WEBPACK_IMPORTED_MODULE_28__["DatePipe"], _pipes_positions_pipe__WEBPACK_IMPORTED_MODULE_25__["PositionsPipe"], _pipes_majors_pipe__WEBPACK_IMPORTED_MODULE_26__["MajorsPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [// Components
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_ms_back_to_top_button_ms_back_to_top_button_component__WEBPACK_IMPORTED_MODULE_5__["MsBackToTopButtonComponent"], _components_ms_header_menu_ms_header_menu_component__WEBPACK_IMPORTED_MODULE_6__["MsHeaderMenuComponent"], _components_ms_header_body_ms_header_body_component__WEBPACK_IMPORTED_MODULE_7__["MsHeaderBodyComponent"], _components_about_me_ms_about_me_ms_about_me_component__WEBPACK_IMPORTED_MODULE_8__["MsAboutMeComponent"], _components_ms_language_level_ms_language_level_component__WEBPACK_IMPORTED_MODULE_9__["MsLanguageLevelComponent"], _components_work_experience_ms_work_experience_ms_work_experience_component__WEBPACK_IMPORTED_MODULE_10__["MsWorkExperienceComponent"], _components_work_experience_ms_work_experience_item_ms_work_experience_item_component__WEBPACK_IMPORTED_MODULE_11__["MsWorkExperienceItemComponent"], _components_education_ms_education_ms_education_component__WEBPACK_IMPORTED_MODULE_12__["MsEducationComponent"], _components_education_ms_education_item_ms_education_item_component__WEBPACK_IMPORTED_MODULE_13__["MsEducationItemComponent"], _components_ms_btn_period_ms_btn_period_component__WEBPACK_IMPORTED_MODULE_14__["MsBtnPeriodComponent"], _components_about_me_ms_about_me_detail_item_ms_about_me_detail_item_component__WEBPACK_IMPORTED_MODULE_15__["MsAboutMeDetailItemComponent"], _components_certifications_ms_certifications_ms_certifications_component__WEBPACK_IMPORTED_MODULE_16__["MsCertificationsComponent"], _components_certifications_ms_certification_item_ms_certification_item_component__WEBPACK_IMPORTED_MODULE_17__["MsCertificationItemComponent"], _components_skills_ms_skills_ms_skills_component__WEBPACK_IMPORTED_MODULE_18__["MsSkillsComponent"], _components_skills_ms_soft_skills_ms_soft_skills_component__WEBPACK_IMPORTED_MODULE_19__["MsSoftSkillsComponent"], _components_skills_ms_hard_skills_ms_hard_skills_component__WEBPACK_IMPORTED_MODULE_20__["MsHardSkillsComponent"], _components_skills_ms_hard_skills_item_ms_hard_skills_item_component__WEBPACK_IMPORTED_MODULE_21__["MsHardSkillsItemComponent"], _components_ms_footer_ms_footer_component__WEBPACK_IMPORTED_MODULE_22__["MsFooterComponent"], _components_ms_btn_linkedin_ms_btn_linkedin_component__WEBPACK_IMPORTED_MODULE_23__["MsBtnLinkedinComponent"], _components_ms_system_language_modal_ms_system_language_modal_component__WEBPACK_IMPORTED_MODULE_24__["MsSystemLanguageModalComponent"], // Pipes
            _pipes_period_pipe__WEBPACK_IMPORTED_MODULE_27__["PeriodPipe"], _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_29__["TranslatePipe"], _pipes_date_pipe__WEBPACK_IMPORTED_MODULE_28__["DatePipe"], _pipes_positions_pipe__WEBPACK_IMPORTED_MODULE_25__["PositionsPipe"], _pipes_majors_pipe__WEBPACK_IMPORTED_MODULE_26__["MajorsPipe"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_2__["ScrollToModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]],
            providers: [_pipes_date_pipe__WEBPACK_IMPORTED_MODULE_28__["DatePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bDRz":
    /*!***********************************************!*\
      !*** ./src/app/models/enums/position.enum.ts ***!
      \***********************************************/

    /*! exports provided: PositionEnum */

    /***/
    function bDRz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PositionEnum", function () {
        return PositionEnum;
      });

      var PositionEnum;

      (function (PositionEnum) {
        PositionEnum[PositionEnum["TECH_LEAD"] = 0] = "TECH_LEAD";
        PositionEnum[PositionEnum["SENIOR_SOFTWARE_DEVELOPER"] = 1] = "SENIOR_SOFTWARE_DEVELOPER";
        PositionEnum[PositionEnum["INTERMEDIATE_SOFTWARE_DEVELOPER"] = 2] = "INTERMEDIATE_SOFTWARE_DEVELOPER";
        PositionEnum[PositionEnum["WEB_DEVELOPER"] = 3] = "WEB_DEVELOPER";
        PositionEnum[PositionEnum["SYSTEM_ANALYST"] = 4] = "SYSTEM_ANALYST";
        PositionEnum[PositionEnum["SOFTWARE_ENGINEER"] = 5] = "SOFTWARE_ENGINEER";
      })(PositionEnum || (PositionEnum = {}));
      /***/

    },

    /***/
    "cHcX":
    /*!**********************************!*\
      !*** ./src/app/models/period.ts ***!
      \**********************************/

    /*! exports provided: Period */

    /***/
    function cHcX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Period", function () {
        return Period;
      });

      var Period = /*#__PURE__*/function () {
        function Period(start, end) {
          _classCallCheck(this, Period);

          this._start = start;
          this._end = end;
        }

        _createClass(Period, [{
          key: "start",
          get: function get() {
            return this._start;
          },
          set: function set(start) {
            this._start = start;
          }
        }, {
          key: "end",
          get: function get() {
            return this._end;
          },
          set: function set(end) {
            this._end = end;
          }
        }]);

        return Period;
      }();
      /***/

    },

    /***/
    "dFk/":
    /*!*******************************************************!*\
      !*** ./src/app/dictionaries/soft-skill.dictionary.ts ***!
      \*******************************************************/

    /*! exports provided: SoftSkillsDictionary */

    /***/
    function dFk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english12, _portuguese12, _SoftSkillsDictionary;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SoftSkillsDictionary", function () {
        return SoftSkillsDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/soft-skill.enum */
      "VeWk");

      var english = (_english12 = {}, _defineProperty(_english12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].ADAPTABILITY, 'Adaptability'), _defineProperty(_english12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].ATTENTION_TO_DETAIL, 'Attention to Detail'), _defineProperty(_english12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].COLLABORATION, 'Collaboration'), _defineProperty(_english12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].COMMITMENT, 'Commitment'), _defineProperty(_english12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].COMMUNICATION, 'Communication'), _defineProperty(_english12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].CRITICAL_THINKING, 'Critical Thinking'), _defineProperty(_english12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].LEADERSHIP, 'Leadership'), _defineProperty(_english12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].PROBLEM_SOLVING, 'Problem Solving'), _defineProperty(_english12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].RESILIENCE, 'Resilience'), _defineProperty(_english12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].SELF_LEARNING, 'Self-learning'), _defineProperty(_english12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].TEAM_WORK, 'Teamwork'), _defineProperty(_english12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].TIME_MANAGEMENT, 'Time Management'), _english12);
      var portuguese = (_portuguese12 = {}, _defineProperty(_portuguese12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].ADAPTABILITY, 'Adaptabilidade'), _defineProperty(_portuguese12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].ATTENTION_TO_DETAIL, 'Atenção aos Detalhes'), _defineProperty(_portuguese12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].COLLABORATION, 'Colaboração'), _defineProperty(_portuguese12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].COMMITMENT, 'Comprometimento'), _defineProperty(_portuguese12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].COMMUNICATION, 'Comunicação'), _defineProperty(_portuguese12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].CRITICAL_THINKING, 'Pensamento Crítico'), _defineProperty(_portuguese12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].LEADERSHIP, 'Liderança'), _defineProperty(_portuguese12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].PROBLEM_SOLVING, 'Resolução de Problemas'), _defineProperty(_portuguese12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].RESILIENCE, 'Resiliência'), _defineProperty(_portuguese12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].SELF_LEARNING, 'Autoaprendizagem'), _defineProperty(_portuguese12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].TEAM_WORK, 'Trabalho em Equipe'), _defineProperty(_portuguese12, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_1__["SoftSkillEnum"].TIME_MANAGEMENT, 'Gerenciamento de Tempo'), _portuguese12);
      var SoftSkillsDictionary = (_SoftSkillsDictionary = {}, _defineProperty(_SoftSkillsDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, english), _defineProperty(_SoftSkillsDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, portuguese), _SoftSkillsDictionary);
      /***/
    },

    /***/
    "dHpg":
    /*!**************************************************!*\
      !*** ./src/app/dictionaries/title.dictionary.ts ***!
      \**************************************************/

    /*! exports provided: TitleDictionary */

    /***/
    function dHpg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english13, _portuguese13, _TitleDictionary;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TitleDictionary", function () {
        return TitleDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/title.enum */
      "Mwsn");

      var english = (_english13 = {}, _defineProperty(_english13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].ABOUT_ME, 'About me'), _defineProperty(_english13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].AGE, 'Age'), _defineProperty(_english13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].CERTIFICATIONS, 'Certifications'), _defineProperty(_english13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].DETAILS, 'Details'), _defineProperty(_english13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].EDUCATION, 'Education'), _defineProperty(_english13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].EMAIL, 'Email'), _defineProperty(_english13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].LANGUAGES, 'Languages'), _defineProperty(_english13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].LOCATION, 'Location'), _defineProperty(_english13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].PHONE, 'Phone'), _defineProperty(_english13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].SKILLS, 'My Skills'), _defineProperty(_english13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].WORK_EXPERIENCE, 'Work Experience'), _english13);
      var portuguese = (_portuguese13 = {}, _defineProperty(_portuguese13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].ABOUT_ME, 'Sobre mim'), _defineProperty(_portuguese13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].AGE, 'Idade'), _defineProperty(_portuguese13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].CERTIFICATIONS, 'Certificações'), _defineProperty(_portuguese13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].DETAILS, 'Detalhes'), _defineProperty(_portuguese13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].EDUCATION, 'Formação'), _defineProperty(_portuguese13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].EMAIL, 'Email'), _defineProperty(_portuguese13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].LANGUAGES, 'Idiomas'), _defineProperty(_portuguese13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].LOCATION, 'Localização'), _defineProperty(_portuguese13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].PHONE, 'Telefone'), _defineProperty(_portuguese13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].SKILLS, 'Skills'), _defineProperty(_portuguese13, _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_1__["TitleEnum"].WORK_EXPERIENCE, 'Experiência'), _portuguese13);
      var TitleDictionary = (_TitleDictionary = {}, _defineProperty(_TitleDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, english), _defineProperty(_TitleDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, portuguese), _TitleDictionary);
      /***/
    },

    /***/
    "emc5":
    /*!******************************************!*\
      !*** ./src/app/models/language-level.ts ***!
      \******************************************/

    /*! exports provided: LanguageLevel */

    /***/
    function emc5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageLevel", function () {
        return LanguageLevel;
      });

      var LanguageLevel = /*#__PURE__*/function () {
        function LanguageLevel(language, level) {
          _classCallCheck(this, LanguageLevel);

          this._language = language;
          this._level = level;
        }

        _createClass(LanguageLevel, [{
          key: "language",
          get: function get() {
            return this._language;
          },
          set: function set(language) {
            this._language = language;
          }
        }, {
          key: "level",
          get: function get() {
            return this._level;
          },
          set: function set(level) {
            this._level = level;
          }
        }]);

        return LanguageLevel;
      }();
      /***/

    },

    /***/
    "ezFT":
    /*!***********************************************************!*\
      !*** ./src/app/dictionaries/school-website.dictionary.ts ***!
      \***********************************************************/

    /*! exports provided: SchoolWebsiteDictionary */

    /***/
    function ezFT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _websites, _SchoolWebsiteDiction;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchoolWebsiteDictionary", function () {
        return SchoolWebsiteDictionary;
      });
      /* harmony import */


      var _models_enums_school_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/school.enum */
      "vrTo");
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");

      var websites = (_websites = {}, _defineProperty(_websites, _models_enums_school_enum__WEBPACK_IMPORTED_MODULE_0__["SchoolEnum"].SAPIENZA, 'https://www.uniroma1.it/it/pagina-strutturale/home'), _defineProperty(_websites, _models_enums_school_enum__WEBPACK_IMPORTED_MODULE_0__["SchoolEnum"].UFSCAR, 'https://www.sorocaba.ufscar.br'), _websites);
      var SchoolWebsiteDictionary = (_SchoolWebsiteDiction = {}, _defineProperty(_SchoolWebsiteDiction, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US, websites), _defineProperty(_SchoolWebsiteDiction, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].PT_BR, websites), _SchoolWebsiteDiction);
      /***/
    },

    /***/
    "fEhN":
    /*!***************************************!*\
      !*** ./src/app/models/header-info.ts ***!
      \***************************************/

    /*! exports provided: HeaderInfo */

    /***/
    function fEhN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderInfo", function () {
        return HeaderInfo;
      });

      var HeaderInfo = /*#__PURE__*/function () {
        function HeaderInfo(name, positions, photoUrl) {
          _classCallCheck(this, HeaderInfo);

          this._name = name;
          this._positions = positions;
          this._photoUrl = photoUrl;
        }

        _createClass(HeaderInfo, [{
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name;
          }
        }, {
          key: "positions",
          get: function get() {
            return this._positions;
          },
          set: function set(positions) {
            this._positions = positions;
          }
        }, {
          key: "photoUrl",
          get: function get() {
            return this._photoUrl;
          }
        }]);

        return HeaderInfo;
      }();
      /***/

    },

    /***/
    "g7ud":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/education/ms-education-item/ms-education-item.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: MsEducationItemComponent */

    /***/
    function g7ud(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsEducationItemComponent", function () {
        return MsEducationItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_education_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/education-item */
      "Xkib");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var src_app_models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/enums/translation-type.enum */
      "U3m8");
      /* harmony import */


      var src_app_service_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/translation.service */
      "UXmV");
      /* harmony import */


      var _ms_btn_period_ms_btn_period_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../ms-btn-period/ms-btn-period.component */
      "WZ0R");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../pipes/translate.pipe */
      "Eioz");
      /* harmony import */


      var _pipes_majors_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../pipes/majors.pipe */
      "WFQj");

      function MsEducationItemComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.info.additionalInfo.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.info.additionalInfo.info);
        }
      }

      function MsEducationItemComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r1.info.externalLink.uri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.info.externalLink.label, " ");
        }
      }

      var MsEducationItemComponent = /*#__PURE__*/function () {
        function MsEducationItemComponent(translationService) {
          _classCallCheck(this, MsEducationItemComponent);

          this.translationService = translationService;
          this.info = new src_app_models_education_item__WEBPACK_IMPORTED_MODULE_1__["EducationItem"]();
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_2__["SystemLanguageEnum"].EN_US;
        }

        _createClass(MsEducationItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "schoolWebsite",
          get: function get() {
            return this.translationService.translate(this.language, src_app_models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_3__["TranslationTypeEnum"].SCHOOL_WEBSITE, this.info.school);
          }
        }]);

        return MsEducationItemComponent;
      }();

      MsEducationItemComponent.ɵfac = function MsEducationItemComponent_Factory(t) {
        return new (t || MsEducationItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"]));
      };

      MsEducationItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsEducationItemComponent,
        selectors: [["ms-education-item"]],
        inputs: {
          info: "info",
          language: "language"
        },
        decls: 24,
        vars: 27,
        consts: [[1, "timeline-card-title"], [1, "title"], [1, "h5"], [1, "major"], [1, "h6"], [1, "school"], ["target", "_blank", 3, "href"], [1, "period"], [3, "period"], ["class", "timeline-card-body", 4, "ngIf"], [1, "timeline-footer"], [1, "row"], ["class", "ms-external-link col-5", 4, "ngIf"], [1, "text-right"], [1, "fa", "fa-map-marker", "text-info"], [1, "timeline-card-body"], [1, "mb-2"], [1, "ms-external-link", "col-5"], ["rel", "external", "target", "_blank", 3, "href"], [1, "fa", "fa-external-link", "text-info"]],
        template: function MsEducationItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "majors");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ms-btn-period", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MsEducationItemComponent_div_15_Template, 7, 2, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, MsEducationItemComponent_div_18_Template, 4, 2, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 12, ctx.info.degree, "MAJOR_DEGREE", ctx.language));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 16, ctx.info.major, ctx.language));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.schoolWebsite, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 19, ctx.info.school, "SCHOOL", ctx.language));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("period", ctx.info.period);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.additionalInfo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info.externalLink);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("col-7", ctx.info.externalLink)("col-12", !ctx.info.externalLink);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](22, 23, ctx.info.locale, "LOCALE", ctx.language));
          }
        },
        directives: [_ms_btn_period_ms_btn_period_component__WEBPACK_IMPORTED_MODULE_5__["MsBtnPeriodComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _pipes_majors_pipe__WEBPACK_IMPORTED_MODULE_8__["MajorsPipe"]],
        styles: [".ms-external-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    outline: none;\r\n}\r\n  \r\n.timeline-card-title[_ngcontent-%COMP%]   .school[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], .timeline-card-title[_ngcontent-%COMP%]   .school[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n    font-style: italic;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zLWVkdWNhdGlvbi1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJtcy1lZHVjYXRpb24taXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1zLWV4dGVybmFsLWxpbmsgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiAgXHJcbi50aW1lbGluZS1jYXJkLXRpdGxlIC5zY2hvb2wgPiBzcGFuLCAudGltZWxpbmUtY2FyZC10aXRsZSAuc2Nob29sID4gcCB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsEducationItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-education-item',
            templateUrl: './ms-education-item.component.html',
            styleUrls: ['./ms-education-item.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"]
          }];
        }, {
          info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "ggRj":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/skills/ms-hard-skills-item/ms-hard-skills-item.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: MsHardSkillsItemComponent */

    /***/
    function ggRj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsHardSkillsItemComponent", function () {
        return MsHardSkillsItemComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/skill-level.enum */
      "CLJp");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var src_app_models_hard_skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/hard-skill */
      "T2mY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../pipes/translate.pipe */
      "Eioz");

      function MsHardSkillsItemComponent_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 4);
        }

        if (rf & 2) {
          var class_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", class_r1);
        }
      }

      var MsHardSkillsItemComponent = /*#__PURE__*/function () {
        function MsHardSkillsItemComponent() {
          _classCallCheck(this, MsHardSkillsItemComponent);

          this.skill = new src_app_models_hard_skill__WEBPACK_IMPORTED_MODULE_3__["HardSkill"]();
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_2__["SystemLanguageEnum"].EN_US;
          this.levelClasses = new Array(src_app_models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_1__["SkillLevelEnum"].MAX);
        }

        _createClass(MsHardSkillsItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.populateLevelClasses();
          }
          /**
           * Populate the classes to be used for the given level
           *
           */

        }, {
          key: "populateLevelClasses",
          value: function populateLevelClasses() {
            var FULL_STAR_CLASS = 'fa-star';
            var EMPTY_STAR_CLASS = 'fa-star-o';
            var HALF_STAR_CLASS = 'fa-star-half-o';

            for (var i = 1; i <= src_app_models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_1__["SkillLevelEnum"].MAX; i++) {
              if (this.skill.level >= i) {
                this.levelClasses[i - 1] = FULL_STAR_CLASS;
              } else if (this.skill.level < i && this.skill.level > i - 1) {
                this.levelClasses[i - 1] = HALF_STAR_CLASS;
              } else {
                this.levelClasses[i - 1] = EMPTY_STAR_CLASS;
              }
            }
          }
        }]);

        return MsHardSkillsItemComponent;
      }();

      MsHardSkillsItemComponent.ɵfac = function MsHardSkillsItemComponent_Factory(t) {
        return new (t || MsHardSkillsItemComponent)();
      };

      MsHardSkillsItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsHardSkillsItemComponent,
        selectors: [["ms-hard-skills-item"]],
        inputs: {
          skill: "skill",
          language: "language"
        },
        decls: 6,
        vars: 6,
        consts: [[1, "row", "ms-skill"], [1, "col-7"], [1, "col-5", "ms-level"], ["class", "fa", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "fa", 3, "ngClass"]],
        template: function MsHardSkillsItemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MsHardSkillsItemComponent_span_5_Template, 1, 1, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](3, 2, ctx.skill.skill, "HARD_SKILL", ctx.language));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.levelClasses);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
        pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: [".ms-skill[_ngcontent-%COMP%]:hover    > .ms-level[_ngcontent-%COMP%] {\r\n    transform: scale(1.2, 1.2);\r\n  }\r\n  \r\n  .ms-skill[_ngcontent-%COMP%]:hover {\r\n    background-color: #F4F4F4;\r\n  }\r\n  \r\n  .ms-skill[_ngcontent-%COMP%]    > .ms-level[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-right: 0px;\r\n    text-align: right;\r\n  }\r\n  \r\n  .ms-skill[_ngcontent-%COMP%]    > .ms-level[_ngcontent-%COMP%] {\r\n    color: #2CA8FF;\r\n  }\r\n  \r\n  .ms-skill[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zLWhhcmQtc2tpbGxzLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVJLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFRjtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJtcy1oYXJkLXNraWxscy1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXMtc2tpbGw6aG92ZXIgPiAubXMtbGV2ZWwge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpO1xyXG4gIH1cclxuICBcclxuICAubXMtc2tpbGw6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDtcclxuICB9ICBcclxuICBcclxuICAubXMtc2tpbGwgPiAubXMtbGV2ZWwge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgLm1zLXNraWxsID4gLm1zLWxldmVsIHtcclxuICAgIGNvbG9yOiAjMkNBOEZGO1xyXG4gIH1cclxuXHJcbi5tcy1za2lsbCA+IHAge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsHardSkillsItemComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-hard-skills-item',
            templateUrl: './ms-hard-skills-item.component.html',
            styleUrls: ['./ms-hard-skills-item.component.css']
          }]
        }], function () {
          return [];
        }, {
          skill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "hrcU":
    /*!**************************************************!*\
      !*** ./src/app/dictionaries/major.dictionary.ts ***!
      \**************************************************/

    /*! exports provided: MajorDictionary */

    /***/
    function hrcU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english14, _portuguese14, _MajorDictionary;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MajorDictionary", function () {
        return MajorDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_major_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/major.enum */
      "LapD");

      var english = (_english14 = {}, _defineProperty(_english14, _models_enums_major_enum__WEBPACK_IMPORTED_MODULE_1__["MajorEnum"].BUSINESS_INTELLIGENCE, 'Business Intelligence'), _defineProperty(_english14, _models_enums_major_enum__WEBPACK_IMPORTED_MODULE_1__["MajorEnum"].COMPUTER_SCIENCE, 'Computer Science'), _english14);
      var portuguese = (_portuguese14 = {}, _defineProperty(_portuguese14, _models_enums_major_enum__WEBPACK_IMPORTED_MODULE_1__["MajorEnum"].BUSINESS_INTELLIGENCE, 'Business Intelligence'), _defineProperty(_portuguese14, _models_enums_major_enum__WEBPACK_IMPORTED_MODULE_1__["MajorEnum"].COMPUTER_SCIENCE, 'Ciência da Computação'), _portuguese14);
      var MajorDictionary = (_MajorDictionary = {}, _defineProperty(_MajorDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, english), _defineProperty(_MajorDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, portuguese), _MajorDictionary);
      /***/
    },

    /***/
    "i7Io":
    /*!************************************************************!*\
      !*** ./src/app/dictionaries/system-language.dictionary.ts ***!
      \************************************************************/

    /*! exports provided: SystemLanguageDictionary */

    /***/
    function i7Io(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _languages, _SystemLanguageDictio;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystemLanguageDictionary", function () {
        return SystemLanguageDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");

      var languages = (_languages = {}, _defineProperty(_languages, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, 'English'), _defineProperty(_languages, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, 'Português'), _languages);
      var SystemLanguageDictionary = (_SystemLanguageDictio = {}, _defineProperty(_SystemLanguageDictio, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, languages), _defineProperty(_SystemLanguageDictio, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, languages), _SystemLanguageDictio);
      /***/
    },

    /***/
    "lqUS":
    /*!*************************************!*\
      !*** ./src/app/models/menu-item.ts ***!
      \*************************************/

    /*! exports provided: MenuItem */

    /***/
    function lqUS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuItem", function () {
        return MenuItem;
      });

      var MenuItem = /*#__PURE__*/function () {
        function MenuItem(name, target) {
          _classCallCheck(this, MenuItem);

          this._name = name;
          this._target = target;
        }

        _createClass(MenuItem, [{
          key: "name",
          get: function get() {
            return this._name;
          },
          set: function set(name) {
            this._name = name;
          }
        }, {
          key: "target",
          get: function get() {
            return this._target;
          },
          set: function set(target) {
            this._target = target;
          }
        }]);

        return MenuItem;
      }();
      /***/

    },

    /***/
    "mEXy":
    /*!***************************************************!*\
      !*** ./src/app/models/enums/major-degree.enum.ts ***!
      \***************************************************/

    /*! exports provided: MajorDegreeEnum */

    /***/
    function mEXy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MajorDegreeEnum", function () {
        return MajorDegreeEnum;
      });

      var MajorDegreeEnum;

      (function (MajorDegreeEnum) {
        MajorDegreeEnum[MajorDegreeEnum["BACHELOR"] = 0] = "BACHELOR";
        MajorDegreeEnum[MajorDegreeEnum["MASTER"] = 1] = "MASTER";
        MajorDegreeEnum[MajorDegreeEnum["ACADEMIC_EXCHANGE"] = 2] = "ACADEMIC_EXCHANGE";
      })(MajorDegreeEnum || (MajorDegreeEnum = {}));
      /***/

    },

    /***/
    "mlED":
    /*!***********************************************************************!*\
      !*** ./src/app/components/ms-header-body/ms-header-body.component.ts ***!
      \***********************************************************************/

    /*! exports provided: MsHeaderBodyComponent */

    /***/
    function mlED(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsHeaderBodyComponent", function () {
        return MsHeaderBodyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_resume_info_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/resume-info.enum */
      "WcGD");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var src_app_models_header_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/header-info */
      "fEhN");
      /* harmony import */


      var _ms_btn_linkedin_ms_btn_linkedin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ms-btn-linkedin/ms-btn-linkedin.component */
      "zjWv");
      /* harmony import */


      var _pipes_positions_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../pipes/positions.pipe */
      "RcYm");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../pipes/translate.pipe */
      "Eioz");

      var MsHeaderBodyComponent = /*#__PURE__*/function () {
        function MsHeaderBodyComponent() {
          _classCallCheck(this, MsHeaderBodyComponent);

          this.info = new src_app_models_header_info__WEBPACK_IMPORTED_MODULE_3__["HeaderInfo"]();
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_2__["SystemLanguageEnum"].EN_US;
          this.resumeDownloadInfo = src_app_models_enums_resume_info_enum__WEBPACK_IMPORTED_MODULE_1__["ResumeInfoEnum"].FILE_NAME_SUFFIX;
          this.resumeURI = src_app_models_enums_resume_info_enum__WEBPACK_IMPORTED_MODULE_1__["ResumeInfoEnum"].URI;
        }

        _createClass(MsHeaderBodyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MsHeaderBodyComponent;
      }();

      MsHeaderBodyComponent.ɵfac = function MsHeaderBodyComponent_Factory(t) {
        return new (t || MsHeaderBodyComponent)();
      };

      MsHeaderBodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsHeaderBodyComponent,
        selectors: [["ms-header-body"]],
        inputs: {
          info: "info",
          language: "language"
        },
        decls: 21,
        vars: 18,
        consts: [[1, "profile-page"], [1, "wrapper"], ["filter-color", "blue", 1, "page-header", "page-header-small"], ["data-parallax", "true", 1, "page-header-image", 2, "background-image", "url('assets/images/header_background.jpg')"], [1, "container"], [1, "content-center"], [1, "ms-personal-photo"], ["alt", "me", 3, "src"], [1, "h2", "title"], [1, "category", "text-white"], [3, "position", "language"], [1, "section", "pb-0"], [1, "button-container"], [1, "btn", "btn-info", "btn-round", 3, "href", "download"]],
        template: function MsHeaderBodyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "positions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ms-btn-linkedin", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Download CV");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.info.photoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 7, ctx.info.positions, ctx.language));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("position", "bottom")("language", ctx.language);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](18, 10, ctx.resumeURI, "RESUME_INFO", ctx.language), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("download", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](19, 14, ctx.resumeDownloadInfo, "RESUME_INFO", ctx.language));
          }
        },
        directives: [_ms_btn_linkedin_ms_btn_linkedin_component__WEBPACK_IMPORTED_MODULE_4__["MsBtnLinkedinComponent"]],
        pipes: [_pipes_positions_pipe__WEBPACK_IMPORTED_MODULE_5__["PositionsPipe"], _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        styles: [".profile-page[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\r\n    margin-top: -95px;\r\n}\r\n\r\n.ms-personal-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    border-radius: 50%;\r\n    height: 180px;\r\n    width: 180px;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 15px solid transparent;\r\n    z-index: 9999;\r\n    transition: all .3s ease-out;\r\n}\r\n\r\n.ms-personal-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.06, 1.06);\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zLWhlYWRlci1ib2R5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsYUFBYTtJQUViLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUVJLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25CIiwiZmlsZSI6Im1zLWhlYWRlci1ib2R5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1wYWdlIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IC05NXB4O1xyXG59XHJcblxyXG4ubXMtcGVyc29uYWwtcGhvdG8gaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgei1pbmRleDogOTk5OTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuICBcclxuLm1zLXBlcnNvbmFsLXBob3RvIGltZzpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNiwgMS4wNik7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDYsIDEuMDYpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsHeaderBodyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-header-body',
            templateUrl: './ms-header-body.component.html',
            styleUrls: ['./ms-header-body.component.css']
          }]
        }], function () {
          return [];
        }, {
          info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "mwU9":
    /*!******************************************************!*\
      !*** ./src/app/dictionaries/menu-item.dictionary.ts ***!
      \******************************************************/

    /*! exports provided: MenuItemDictionary */

    /***/
    function mwU9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english15, _portuguese15, _MenuItemDictionary;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuItemDictionary", function () {
        return MenuItemDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/menu-item.enum */
      "SNyX");

      var english = (_english15 = {}, _defineProperty(_english15, _models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].ABOUT_ME, 'About me'), _defineProperty(_english15, _models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].CERTIFICATION, 'Certifications'), _defineProperty(_english15, _models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].EDUCATION, 'Education'), _defineProperty(_english15, _models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].SKILLS, 'Skills'), _defineProperty(_english15, _models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].WORK_EXPERIENCE, 'Experience'), _english15);
      var portuguese = (_portuguese15 = {}, _defineProperty(_portuguese15, _models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].ABOUT_ME, 'Sobre'), _defineProperty(_portuguese15, _models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].CERTIFICATION, 'Certificações'), _defineProperty(_portuguese15, _models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].EDUCATION, 'Formação'), _defineProperty(_portuguese15, _models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].SKILLS, 'Skills'), _defineProperty(_portuguese15, _models_enums_menu_item_enum__WEBPACK_IMPORTED_MODULE_1__["MenuItemEnum"].WORK_EXPERIENCE, 'Experiência'), _portuguese15);
      var MenuItemDictionary = (_MenuItemDictionary = {}, _defineProperty(_MenuItemDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, english), _defineProperty(_MenuItemDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, portuguese), _MenuItemDictionary);
      /***/
    },

    /***/
    "q0iP":
    /*!***********************************************************************!*\
      !*** ./src/app/dictionaries/work-experience-activities.dictionary.ts ***!
      \***********************************************************************/

    /*! exports provided: WorkExperienceActivitiesDictionary */

    /***/
    function q0iP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english16, _portuguese16, _WorkExperienceActivi;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkExperienceActivitiesDictionary", function () {
        return WorkExperienceActivitiesDictionary;
      });
      /* harmony import */


      var _models_activity_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/activity-item */
      "Pxv9");
      /* harmony import */


      var _models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/activity-type.enum */
      "SWqd");
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/enums/work-experience.enum */
      "0MSi");

      var english = (_english16 = {}, _defineProperty(_english16, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_3__["WorkExperienceEnum"].UBER_SOFTWARE_ENGINEER, [new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].ARCHITECTURE, "Design and architecture of solutions, through elaboration of RFCs"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].SUPPORT, "Leadership of initiatives end-to-end, which requires collaboration and coordination with multiple LoBs and stakeholders from multiple seniority and multiple platforms (Androi, iOS, Web, etc)"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Development of Backend codebase in languages like GoLang, C++ and Lua"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Code review from projects that I am directly involved and also the ones that I am not"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].SUPPORT, "Mentoring of other engineers")]), _defineProperty(_english16, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_3__["WorkExperienceEnum"].OPUS_SENIOR_TECH_LEAD, [new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Development of one of the company's first own products in many years, which is a Open Banking solution, following all of Brazil's Central Bank regulations and specifications, to be offered to banks and financial institutions, be it on the client's cloud infraestructure or as SaaS"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Evolution of a bank loan application into a white label platform which allowed the client to offer the platform to key partners with minimal effort and profit from the loans provided by the partners"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Study and initiation of the use of AWS Batch for batch processing"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].SUPPORT, "Recording of a training on how the white label platform works, in both technical and user's experience levels, to facilitate the onboarding of new members to the team. Before that, a member of the team had to give the same training over and over again every time a new person would come along")]), _defineProperty(_english16, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_3__["WorkExperienceEnum"].OPUS_INTERMEDIATE_DEVELOPER, [new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Development of an Open API architecture and responsive web app that provide bank loans for individuals, which soon achieved the mark of R$1M in loans granted and allowed the client to close several loan dedicated branches reducing their expenses"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Remodeling of the database and API structure of the main Brazilian FoodTech company, creating a well-defined ETL process and increasing their code-efficiency by 10x"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Development of a platform that allows individuals and companies to join consortiums of real estate, vehicles and/or services")]), _defineProperty(_english16, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_3__["WorkExperienceEnum"].AUDAXWARE, [new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Rewrite of the legacy system by using the technologies above mentioned and improvement of it after it was released, which not only improved the user experience, but also the code efficiency, allowing the onboarding of two new big companies to the software"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].DATABASE, "Data migration from PostgreSQL to SQL Server"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Support to the old system until the new one was ready to be released and the data migration was done"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].SUPPORT, "Support to clients on how to use the system")]), _defineProperty(_english16, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_3__["WorkExperienceEnum"].OPUS_JR_SYSTEM_ANALYST, [new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Development of an online learning responsive web app for an English school"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Development of a repository containing front-end components to be used internally on new projects. The idea here was to have something like a internal bootstrap to optimize developers' time when initiating new projects")]), _english16);
      var portuguese = (_portuguese16 = {}, _defineProperty(_portuguese16, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_3__["WorkExperienceEnum"].UBER_SOFTWARE_ENGINEER, [new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].ARCHITECTURE, "Design e elabora\xE7\xE3o da arquitetura de solu\xE7oes, atrav\xE9s da escrita de RFCs"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].SUPPORT, "Lideran\xE7a de iniciativas do in\xEDcio ao fim, o que inclue colabor\xE7\xE3o e cordena\xE7\xE3o com diversos times e stakeholders de m\xFAltiplas senioridades e plataformas (android, iOS, Web e etc)"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Desenvolvimento da parte Backend de solu\xE7\xF5es em linguagens como GoLang, C++ e Lua"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Revis\xE3o de c\xF3digo n\xE3o somente de projetos que estou envolvida mas da Org como um todo"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].SUPPORT, "Mentoria de outros engenheiros")]), _defineProperty(_portuguese16, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_3__["WorkExperienceEnum"].OPUS_SENIOR_TECH_LEAD, [new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Criação de uma solução pronta de Open Banking, conforme resoluções e especificações do Banco Central, como um produto próprio da empresa a ser oferecido para bancos e instuições financeiras"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Evolução de uma plataforma de empréstimo bancário para transformá-la em white label, permitindo que o nosso cliente possa oferecer a plataforma para parceiros chave com mínimo esforço e obter lucro a partir disso"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Estudo e implementação do uso do AWS Batch para processamentos em lote"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].SUPPORT, "Gravação de um treinamento sobre a plataforma white label, tanto em nível técnico quanto de experiência do usuário. Antes disso, membros do time precisavam dar esse mesmo treinamento toda vez que algum colaborador novo se juntava ao time")]), _defineProperty(_portuguese16, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_3__["WorkExperienceEnum"].OPUS_INTERMEDIATE_DEVELOPER, [new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Desenvolvimento de uma Open API e plataforma web responsiva que fornecem empréstimo bancários para indivíduos, a qual rapidamente atingiu a marca de R$1M em empréstimos e permitiu ao nosso cliente realizar o fechamento de diversas lojas físicas, diminuindo custos"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Remodelagem da base de dados e API da principal FoodTech brasileira, o que resultou na criação de um processo de ETL bem definido e aumento de performance da API na grandeza de 10x"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Desenvolvimento de uma plataforma web para consórcio de imóveis, automóveis e/ou serviços")]), _defineProperty(_portuguese16, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_3__["WorkExperienceEnum"].AUDAXWARE, [new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Reescrita do sistema legado usando as tecnologias acima mencionadas e evolução do sistema após finalizado. Essa mudança não somente melhorou a experiência do usuário mas também a eficiência do código, o que permitiu a aquisição de duas novas grandes empresas como clientes"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].DATABASE, "Migração dos dados de PostgreSQL para SQL Server"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Suporte ao sistema legado até que o novo estivesse pronto e a migração de dados realizada"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].SUPPORT, "Suporte aos clientes em como utilizar o novo sistema")]), _defineProperty(_portuguese16, _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_3__["WorkExperienceEnum"].OPUS_JR_SYSTEM_ANALYST, [new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Desenvolvimento de uma plataforma web responsiva de aprendizado online para uma escola de inglês"), new _models_activity_item__WEBPACK_IMPORTED_MODULE_0__["ActivityItem"](_models_enums_activity_type_enum__WEBPACK_IMPORTED_MODULE_1__["ActivityTypeEnum"].CODING, "Desenvolvimento de um repositório de componentes front-end a ser utilizado internamente em novos projetos. A ideia era ter uma espécie de bootstrap interna, com a identidade da empresa, para otimizar o tempo dos desenvolvedores quando iniciando novos projetos")]), _portuguese16);
      var WorkExperienceActivitiesDictionary = (_WorkExperienceActivi = {}, _defineProperty(_WorkExperienceActivi, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_2__["SystemLanguageEnum"].EN_US, english), _defineProperty(_WorkExperienceActivi, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_2__["SystemLanguageEnum"].PT_BR, portuguese), _WorkExperienceActivi);
      /***/
    },

    /***/
    "r2L+":
    /*!*******************************************!*\
      !*** ./src/app/models/work-experience.ts ***!
      \*******************************************/

    /*! exports provided: WorkExperience */

    /***/
    function r2L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkExperience", function () {
        return WorkExperience;
      });

      var WorkExperience = /*#__PURE__*/function () {
        function WorkExperience(identifier, positions, company, period, technologies) {
          _classCallCheck(this, WorkExperience);

          this._identifier = identifier;
          this._positions = positions;
          this._company = company;
          this._period = period;
          this._technologies = technologies;
        }

        _createClass(WorkExperience, [{
          key: "identifier",
          get: function get() {
            return this._identifier;
          },
          set: function set(identifier) {
            this._identifier = identifier;
          }
        }, {
          key: "positions",
          get: function get() {
            return this._positions;
          },
          set: function set(positions) {
            this._positions = positions;
          }
        }, {
          key: "company",
          get: function get() {
            return this._company;
          },
          set: function set(company) {
            this._company = company;
          }
        }, {
          key: "period",
          get: function get() {
            return this._period;
          },
          set: function set(period) {
            this._period = period;
          }
        }, {
          key: "technologies",
          get: function get() {
            return this._technologies;
          },
          set: function set(technologies) {
            this._technologies = technologies;
          }
        }]);

        return WorkExperience;
      }();
      /***/

    },

    /***/
    "rZw3":
    /*!**********************************!*\
      !*** ./src/app/models/skills.ts ***!
      \**********************************/

    /*! exports provided: Skills */

    /***/
    function rZw3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Skills", function () {
        return Skills;
      });

      var Skills = /*#__PURE__*/function () {
        function Skills(hardSkills, softSkills) {
          _classCallCheck(this, Skills);

          this._hardSkills = hardSkills;
          this._softSkills = softSkills;
        }

        _createClass(Skills, [{
          key: "hardSkills",
          get: function get() {
            return this._hardSkills;
          },
          set: function set(hardSkills) {
            this._hardSkills = hardSkills;
          }
        }, {
          key: "softSkills",
          get: function get() {
            return this._softSkills;
          },
          set: function set(softSkills) {
            this._softSkills = softSkills;
          }
        }]);

        return Skills;
      }();
      /***/

    },

    /***/
    "sVuK":
    /*!********************************************************************!*\
      !*** ./src/app/components/skills/ms-skills/ms-skills.component.ts ***!
      \********************************************************************/

    /*! exports provided: MsSkillsComponent */

    /***/
    function sVuK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsSkillsComponent", function () {
        return MsSkillsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var src_app_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/enums/title.enum */
      "Mwsn");
      /* harmony import */


      var src_app_models_skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/skills */
      "rZw3");
      /* harmony import */


      var _ms_hard_skills_ms_hard_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ms-hard-skills/ms-hard-skills.component */
      "1/i9");
      /* harmony import */


      var _ms_soft_skills_ms_soft_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../ms-soft-skills/ms-soft-skills.component */
      "VXVq");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../pipes/translate.pipe */
      "Eioz");

      var MsSkillsComponent = /*#__PURE__*/function () {
        function MsSkillsComponent() {
          _classCallCheck(this, MsSkillsComponent);

          this.skills = new src_app_models_skills__WEBPACK_IMPORTED_MODULE_3__["Skills"]();
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US;
          this.title = src_app_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_2__["TitleEnum"].SKILLS;
        }

        _createClass(MsSkillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MsSkillsComponent;
      }();

      MsSkillsComponent.ɵfac = function MsSkillsComponent_Factory(t) {
        return new (t || MsSkillsComponent)();
      };

      MsSkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsSkillsComponent,
        selectors: [["ms-skills"]],
        inputs: {
          skills: "skills",
          language: "language"
        },
        decls: 16,
        vars: 9,
        consts: [[1, "h4", "text-center", "mb-4", "title"], [1, "row", "justify-content-between", "ms-skills"], [1, "card", "col-lg-9", "col-md-12", "ms-hard-skills"], [1, "card-body"], [1, "h5", "mt-0", "title"], [3, "skills", "language"], [1, "card", "col-lg-3", "col-md-12", "ms-soft-skills"]],
        template: function MsSkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hard Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ms-hard-skills", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Soft Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ms-soft-skills", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 5, ctx.title, "TITLE", ctx.language));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skills", ctx.skills.hardSkills)("language", ctx.language);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("skills", ctx.skills.softSkills)("language", ctx.language);
          }
        },
        directives: [_ms_hard_skills_ms_hard_skills_component__WEBPACK_IMPORTED_MODULE_4__["MsHardSkillsComponent"], _ms_soft_skills_ms_soft_skills_component__WEBPACK_IMPORTED_MODULE_5__["MsSoftSkillsComponent"]],
        pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        styles: ["@media (min-width: 992px) {\r\n  .ms-hard-skills[_ngcontent-%COMP%] {\r\n    max-width: 74%;\r\n  }\r\n}\r\n\r\n.ms-skills[_ngcontent-%COMP%] {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zLXNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im1zLXNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLm1zLWhhcmQtc2tpbGxzIHtcclxuICAgIG1heC13aWR0aDogNzQlO1xyXG4gIH1cclxufVxyXG5cclxuLm1zLXNraWxscyB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsSkillsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-skills',
            templateUrl: './ms-skills.component.html',
            styleUrls: ['./ms-skills.component.css']
          }]
        }], function () {
          return [];
        }, {
          skills: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "saQB":
    /*!***********************************************************************************************!*\
      !*** ./src/app/components/work-experience/ms-work-experience/ms-work-experience.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: MsWorkExperienceComponent */

    /***/
    function saQB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsWorkExperienceComponent", function () {
        return MsWorkExperienceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var src_app_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/enums/title.enum */
      "Mwsn");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ms_work_experience_item_ms_work_experience_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../ms-work-experience-item/ms-work-experience-item.component */
      "Vn8Q");
      /* harmony import */


      var _pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../pipes/translate.pipe */
      "Eioz");

      function MsWorkExperienceComponent_li_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ms-work-experience-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var experience_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("timeline-inverted", ctx_r0.isInvertedCard(i_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", experience_r1)("language", ctx_r0.language);
        }
      }

      var MsWorkExperienceComponent = /*#__PURE__*/function () {
        function MsWorkExperienceComponent() {
          _classCallCheck(this, MsWorkExperienceComponent);

          this.experiences = [];
          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US;
          this.title = src_app_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_2__["TitleEnum"].WORK_EXPERIENCE;
        }

        _createClass(MsWorkExperienceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * Indicates if should be an inverted card or not
           *
           * @param index
           */

        }, {
          key: "isInvertedCard",
          value: function isInvertedCard(index) {
            return index % 2 > 0;
          }
        }]);

        return MsWorkExperienceComponent;
      }();

      MsWorkExperienceComponent.ɵfac = function MsWorkExperienceComponent_Factory(t) {
        return new (t || MsWorkExperienceComponent)();
      };

      MsWorkExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsWorkExperienceComponent,
        selectors: [["ms-work-experience"]],
        inputs: {
          experiences: "experiences",
          language: "language"
        },
        decls: 6,
        vars: 6,
        consts: [[1, "h4", "text-center", "mb-4", "title"], [1, "timeline"], [3, "timeline-inverted", 4, "ngFor", "ngForOf"], [1, "clearfix", 2, "float", "none"], [1, "timeline-badge"], [1, "fa", "fa-dot-circle-o"], [1, "timeline-card"], [3, "info", "language"]],
        template: function MsWorkExperienceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MsWorkExperienceComponent_li_4_Template, 6, 4, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 2, ctx.title, "TITLE", ctx.language));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ms_work_experience_item_ms_work_experience_item_component__WEBPACK_IMPORTED_MODULE_4__["MsWorkExperienceItemComponent"]],
        pipes: [_pipes_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtcy13b3JrLWV4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsWorkExperienceComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-work-experience',
            templateUrl: './ms-work-experience.component.html',
            styleUrls: ['./ms-work-experience.component.css']
          }]
        }], function () {
          return [];
        }, {
          experiences: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "tSEg":
    /*!********************************************************!*\
      !*** ./src/app/dictionaries/thesis-info.dictionary.ts ***!
      \********************************************************/

    /*! exports provided: ThesisInfoDictionary */

    /***/
    function tSEg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english17, _portuguese17, _ThesisInfoDictionary;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ThesisInfoDictionary", function () {
        return ThesisInfoDictionary;
      });
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var _models_enums_thesis_info_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/thesis-info.enum */
      "CoLN");

      var english = (_english17 = {}, _defineProperty(_english17, _models_enums_thesis_info_enum__WEBPACK_IMPORTED_MODULE_1__["ThesisInfoEnum"].LINK_LABEL, 'Thesis (pt-br)'), _defineProperty(_english17, _models_enums_thesis_info_enum__WEBPACK_IMPORTED_MODULE_1__["ThesisInfoEnum"].TITLE_LABEL, 'Thesis title'), _defineProperty(_english17, _models_enums_thesis_info_enum__WEBPACK_IMPORTED_MODULE_1__["ThesisInfoEnum"].THESIS_TITLE, 'Take your time but do not wait too long: Decision-making by user demand using web data'), _english17);
      var portuguese = (_portuguese17 = {}, _defineProperty(_portuguese17, _models_enums_thesis_info_enum__WEBPACK_IMPORTED_MODULE_1__["ThesisInfoEnum"].LINK_LABEL, 'Dissertação'), _defineProperty(_portuguese17, _models_enums_thesis_info_enum__WEBPACK_IMPORTED_MODULE_1__["ThesisInfoEnum"].TITLE_LABEL, 'Título da dissertação'), _defineProperty(_portuguese17, _models_enums_thesis_info_enum__WEBPACK_IMPORTED_MODULE_1__["ThesisInfoEnum"].THESIS_TITLE, 'Faça no seu ritmo mas não perca a hora: tomada de decisão sob demandado usuário utilizando dados da Web'), _portuguese17);
      var ThesisInfoDictionary = (_ThesisInfoDictionary = {}, _defineProperty(_ThesisInfoDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].EN_US, english), _defineProperty(_ThesisInfoDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_0__["SystemLanguageEnum"].PT_BR, portuguese), _ThesisInfoDictionary);
      /***/
    },

    /***/
    "udzz":
    /*!**********************************************!*\
      !*** ./src/app/models/enums/company.enum.ts ***!
      \**********************************************/

    /*! exports provided: CompanyEnum */

    /***/
    function udzz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CompanyEnum", function () {
        return CompanyEnum;
      });

      var CompanyEnum;

      (function (CompanyEnum) {
        CompanyEnum["OPUS"] = "OPUS Software Ltda.";
        CompanyEnum["AUDAXWARE"] = "Audaxware LLC";
        CompanyEnum["UBER"] = "Uber Technologies Inc.";
      })(CompanyEnum || (CompanyEnum = {}));
      /***/

    },

    /***/
    "vrTo":
    /*!*********************************************!*\
      !*** ./src/app/models/enums/school.enum.ts ***!
      \*********************************************/

    /*! exports provided: SchoolEnum */

    /***/
    function vrTo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SchoolEnum", function () {
        return SchoolEnum;
      });

      var SchoolEnum;

      (function (SchoolEnum) {
        SchoolEnum[SchoolEnum["UFSCAR"] = 0] = "UFSCAR";
        SchoolEnum[SchoolEnum["SAPIENZA"] = 1] = "SAPIENZA";
      })(SchoolEnum || (SchoolEnum = {}));
      /***/

    },

    /***/
    "wRGf":
    /*!************************************!*\
      !*** ./src/app/pipes/date.pipe.ts ***!
      \************************************/

    /*! exports provided: DatePipe */

    /***/
    function wRGf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatePipe", function () {
        return DatePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DatePipe = /*#__PURE__*/function () {
        function DatePipe() {
          _classCallCheck(this, DatePipe);
        }

        _createClass(DatePipe, [{
          key: "transform",
          value: function transform(date, format) {
            if (!date || !format) {
              return date;
            }

            var formatter = new Intl.DateTimeFormat(format, {
              year: 'numeric',
              month: "short"
            }); // The replace it's necessary due to the default pt-BR format

            return formatter.format(new Date(date.year, date.month)).replace('. de', '');
          }
        }]);

        return DatePipe;
      }();

      DatePipe.ɵfac = function DatePipe_Factory(t) {
        return new (t || DatePipe)();
      };

      DatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "date",
        type: DatePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'date'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "x5lf":
    /*!***********************************************!*\
      !*** ./src/app/models/enums/language.enum.ts ***!
      \***********************************************/

    /*! exports provided: LanguageEnum */

    /***/
    function x5lf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageEnum", function () {
        return LanguageEnum;
      });

      var LanguageEnum;

      (function (LanguageEnum) {
        LanguageEnum[LanguageEnum["PORTUGUESE"] = 0] = "PORTUGUESE";
        LanguageEnum[LanguageEnum["ENGLISH"] = 1] = "ENGLISH";
        LanguageEnum[LanguageEnum["ITALIAN"] = 2] = "ITALIAN";
        LanguageEnum[LanguageEnum["SPANISH"] = 3] = "SPANISH";
        LanguageEnum[LanguageEnum["FRENCH"] = 4] = "FRENCH";
      })(LanguageEnum || (LanguageEnum = {}));
      /***/

    },

    /***/
    "xr2q":
    /*!*****************************************************!*\
      !*** ./src/app/models/education-additional-info.ts ***!
      \*****************************************************/

    /*! exports provided: EducationAdditionalInfo */

    /***/
    function xr2q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EducationAdditionalInfo", function () {
        return EducationAdditionalInfo;
      });

      var EducationAdditionalInfo = /*#__PURE__*/function () {
        function EducationAdditionalInfo(title, info) {
          _classCallCheck(this, EducationAdditionalInfo);

          this._title = title;
          this._info = info;
        }

        _createClass(EducationAdditionalInfo, [{
          key: "title",
          get: function get() {
            return this._title;
          },
          set: function set(title) {
            this._title = title;
          }
        }, {
          key: "info",
          get: function get() {
            return this._info;
          },
          set: function set(info) {
            this._info = info;
          }
        }]);

        return EducationAdditionalInfo;
      }();
      /***/

    },

    /***/
    "z6Ts":
    /*!********************************************************!*\
      !*** ./src/app/dictionaries/resume-info.dictionary.ts ***!
      \********************************************************/

    /*! exports provided: ResumeInfoDictionary */

    /***/
    function z6Ts(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      var _english18, _portuguese18, _ResumeInfoDictionary;

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResumeInfoDictionary", function () {
        return ResumeInfoDictionary;
      });
      /* harmony import */


      var _models_enums_resume_info_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/enums/resume-info.enum */
      "WcGD");
      /* harmony import */


      var _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/enums/system-language.enum */
      "LFmQ");

      var english = (_english18 = {}, _defineProperty(_english18, _models_enums_resume_info_enum__WEBPACK_IMPORTED_MODULE_0__["ResumeInfoEnum"].FILE_NAME_SUFFIX, 'Resume'), _defineProperty(_english18, _models_enums_resume_info_enum__WEBPACK_IMPORTED_MODULE_0__["ResumeInfoEnum"].URI, 'https://drive.google.com/uc?export=download&id=15Jvl7DESK0ieoPxH-vCqz-NcAHK-eU9J'), _english18);
      var portuguese = (_portuguese18 = {}, _defineProperty(_portuguese18, _models_enums_resume_info_enum__WEBPACK_IMPORTED_MODULE_0__["ResumeInfoEnum"].FILE_NAME_SUFFIX, 'Curriculo'), _defineProperty(_portuguese18, _models_enums_resume_info_enum__WEBPACK_IMPORTED_MODULE_0__["ResumeInfoEnum"].URI, 'https://drive.google.com/uc?export=download&id=1seTtbjV6C10fe9duf4ll8eoRe42ij0yT'), _portuguese18);
      var ResumeInfoDictionary = (_ResumeInfoDictionary = {}, _defineProperty(_ResumeInfoDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].EN_US, english), _defineProperty(_ResumeInfoDictionary, _models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_1__["SystemLanguageEnum"].PT_BR, portuguese), _ResumeInfoDictionary);
      /***/
    },

    /***/
    "zDtx":
    /*!*******************************************!*\
      !*** ./src/app/service/resume.service.ts ***!
      \*******************************************/

    /*! exports provided: ResumeService */

    /***/
    function zDtx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResumeService", function () {
        return ResumeService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_about_me__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/about-me */
      "VIhu");
      /* harmony import */


      var _models_about_me_detail_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../models/about-me-detail-item */
      "Ovvk");
      /* harmony import */


      var _models_certification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../models/certification */
      "Z9Ty");
      /* harmony import */


      var _models_education_additional_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../models/education-additional-info */
      "xr2q");
      /* harmony import */


      var _models_education_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../models/education-item */
      "Xkib");
      /* harmony import */


      var _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../models/enums/about-me-info.enum */
      "Q1Gu");
      /* harmony import */


      var _models_enums_company_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../models/enums/company.enum */
      "udzz");
      /* harmony import */


      var _models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../models/enums/hard-skill.enum */
      "DW9G");
      /* harmony import */


      var _models_enums_language_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../models/enums/language.enum */
      "x5lf");
      /* harmony import */


      var _models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../models/enums/locale.enum */
      "Q8ZI");
      /* harmony import */


      var _models_enums_major_degree_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../models/enums/major-degree.enum */
      "mEXy");
      /* harmony import */


      var _models_enums_major_enum__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../models/enums/major.enum */
      "LapD");
      /* harmony import */


      var _models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../models/enums/month.enum */
      "0Eox");
      /* harmony import */


      var _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../models/enums/position.enum */
      "bDRz");
      /* harmony import */


      var _models_enums_school_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../models/enums/school.enum */
      "vrTo");
      /* harmony import */


      var _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../models/enums/skill-level.enum */
      "CLJp");
      /* harmony import */


      var _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../models/enums/soft-skill.enum */
      "VeWk");
      /* harmony import */


      var _models_enums_thesis_info_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../models/enums/thesis-info.enum */
      "CoLN");
      /* harmony import */


      var _models_enums_title_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../models/enums/title.enum */
      "Mwsn");
      /* harmony import */


      var _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../models/enums/translation-type.enum */
      "U3m8");
      /* harmony import */


      var _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../models/enums/work-experience-technology.enum */
      "PdCN");
      /* harmony import */


      var _models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../models/enums/work-experience.enum */
      "0MSi");
      /* harmony import */


      var _models_external_link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../models/external-link */
      "Dw63");
      /* harmony import */


      var _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../models/hard-skill */
      "T2mY");
      /* harmony import */


      var _models_language_level__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../models/language-level */
      "emc5");
      /* harmony import */


      var _models_month_year__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../models/month-year */
      "4jwZ");
      /* harmony import */


      var _models_period__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../models/period */
      "cHcX");
      /* harmony import */


      var _models_resume__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ../models/resume */
      "A0Sh");
      /* harmony import */


      var _models_skills__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../models/skills */
      "rZw3");
      /* harmony import */


      var _models_work_experience__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../models/work-experience */
      "r2L+");
      /* harmony import */


      var _translation_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./translation.service */
      "UXmV");
      /* harmony import */


      var _system_language_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./system-language.service */
      "64Rh");

      var ResumeService = /*#__PURE__*/function () {
        function ResumeService(translationService, systemLanguageService) {
          _classCallCheck(this, ResumeService);

          this.translationService = translationService;
          this.systemLanguageService = systemLanguageService;
        }

        _createClass(ResumeService, [{
          key: "get",
          value: function get() {
            return new _models_resume__WEBPACK_IMPORTED_MODULE_28__["Resume"](this.aboutMe, this.workExperiences, this.education, this.certifications, this.skills);
          }
        }, {
          key: "aboutMe",
          get: function get() {
            return new _models_about_me__WEBPACK_IMPORTED_MODULE_1__["AboutMe"]([new _models_about_me_detail_item__WEBPACK_IMPORTED_MODULE_2__["AboutMeDetailItem"](_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_19__["TitleEnum"].AGE, _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_6__["AboutMeInfoEnum"].AGE), new _models_about_me_detail_item__WEBPACK_IMPORTED_MODULE_2__["AboutMeDetailItem"](_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_19__["TitleEnum"].EMAIL, _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_6__["AboutMeInfoEnum"].EMAIL), new _models_about_me_detail_item__WEBPACK_IMPORTED_MODULE_2__["AboutMeDetailItem"](_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_19__["TitleEnum"].PHONE, _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_6__["AboutMeInfoEnum"].PHONE), new _models_about_me_detail_item__WEBPACK_IMPORTED_MODULE_2__["AboutMeDetailItem"](_models_enums_title_enum__WEBPACK_IMPORTED_MODULE_19__["TitleEnum"].LOCATION, _models_enums_about_me_info_enum__WEBPACK_IMPORTED_MODULE_6__["AboutMeInfoEnum"].LOCATION)], [new _models_language_level__WEBPACK_IMPORTED_MODULE_25__["LanguageLevel"](_models_enums_language_enum__WEBPACK_IMPORTED_MODULE_9__["LanguageEnum"].ENGLISH, 90), new _models_language_level__WEBPACK_IMPORTED_MODULE_25__["LanguageLevel"](_models_enums_language_enum__WEBPACK_IMPORTED_MODULE_9__["LanguageEnum"].PORTUGUESE, 100), new _models_language_level__WEBPACK_IMPORTED_MODULE_25__["LanguageLevel"](_models_enums_language_enum__WEBPACK_IMPORTED_MODULE_9__["LanguageEnum"].ITALIAN, 60)]);
          }
        }, {
          key: "workExperiences",
          get: function get() {
            return [new _models_work_experience__WEBPACK_IMPORTED_MODULE_30__["WorkExperience"](_models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_22__["WorkExperienceEnum"].UBER_SOFTWARE_ENGINEER, [_models_enums_position_enum__WEBPACK_IMPORTED_MODULE_14__["PositionEnum"].SOFTWARE_ENGINEER], _models_enums_company_enum__WEBPACK_IMPORTED_MODULE_7__["CompanyEnum"].UBER, new _models_period__WEBPACK_IMPORTED_MODULE_27__["Period"](new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].JUL, 2021)), [_models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].OAUTH20, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].GO, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].KANBAN, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].CASSANDRA, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].KIBANA, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].PHABRICATOR, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].CPLUS2, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].M3, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].GIT, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].LUA, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].ARCANIST, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].GRAFANA, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].SCRUM, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].CICD]), new _models_work_experience__WEBPACK_IMPORTED_MODULE_30__["WorkExperience"](_models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_22__["WorkExperienceEnum"].OPUS_SENIOR_TECH_LEAD, [_models_enums_position_enum__WEBPACK_IMPORTED_MODULE_14__["PositionEnum"].SENIOR_SOFTWARE_DEVELOPER, _models_enums_position_enum__WEBPACK_IMPORTED_MODULE_14__["PositionEnum"].TECH_LEAD], _models_enums_company_enum__WEBPACK_IMPORTED_MODULE_7__["CompanyEnum"].OPUS, new _models_period__WEBPACK_IMPORTED_MODULE_27__["Period"](new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].NOV, 2019), new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].JUL, 2021)), [_models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].JAVA_11, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].SPRING_BOOT, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].ANGULAR_6, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].POSTGRESQL, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].AWS, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].GIT, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].JIRA, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].SCRUM, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].JENKINS, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].SONAR_QUBE]), new _models_work_experience__WEBPACK_IMPORTED_MODULE_30__["WorkExperience"](_models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_22__["WorkExperienceEnum"].OPUS_INTERMEDIATE_DEVELOPER, [_models_enums_position_enum__WEBPACK_IMPORTED_MODULE_14__["PositionEnum"].INTERMEDIATE_SOFTWARE_DEVELOPER], _models_enums_company_enum__WEBPACK_IMPORTED_MODULE_7__["CompanyEnum"].OPUS, new _models_period__WEBPACK_IMPORTED_MODULE_27__["Period"](new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].NOV, 2017), new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].NOV, 2019)), [_models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].JAVA_8, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].SPRING_BOOT, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].ANGULAR_2, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].MY_SQL, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].AWS, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].GIT, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].JIRA, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].SCRUM, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].JENKINS, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].SONAR_QUBE]), new _models_work_experience__WEBPACK_IMPORTED_MODULE_30__["WorkExperience"](_models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_22__["WorkExperienceEnum"].AUDAXWARE, [_models_enums_position_enum__WEBPACK_IMPORTED_MODULE_14__["PositionEnum"].WEB_DEVELOPER], _models_enums_company_enum__WEBPACK_IMPORTED_MODULE_7__["CompanyEnum"].AUDAXWARE, new _models_period__WEBPACK_IMPORTED_MODULE_27__["Period"](new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].NOV, 2015), new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].APR, 2020)), [_models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].C_SHARP, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].SQL_SERVER, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].ANGULAR_JS, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].KENDO_UI, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].MATERIAL, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].AZURE, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].WEB_JOB, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].TFS, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].KANBAN]), new _models_work_experience__WEBPACK_IMPORTED_MODULE_30__["WorkExperience"](_models_enums_work_experience_enum__WEBPACK_IMPORTED_MODULE_22__["WorkExperienceEnum"].OPUS_JR_SYSTEM_ANALYST, [_models_enums_position_enum__WEBPACK_IMPORTED_MODULE_14__["PositionEnum"].SYSTEM_ANALYST], _models_enums_company_enum__WEBPACK_IMPORTED_MODULE_7__["CompanyEnum"].OPUS, new _models_period__WEBPACK_IMPORTED_MODULE_27__["Period"](new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].JAN, 2015), new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].NOV, 2015)), [_models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].C_SHARP, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].SQL_SERVER, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].ANGULAR_JS, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].KNOCKOUT, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].BOOTSTRAP, _models_enums_work_experience_technology_enum__WEBPACK_IMPORTED_MODULE_21__["WorkExperienceTechnologyEnum"].SCRUM])];
          }
        }, {
          key: "education",
          get: function get() {
            return [new _models_education_item__WEBPACK_IMPORTED_MODULE_5__["EducationItem"](_models_enums_school_enum__WEBPACK_IMPORTED_MODULE_15__["SchoolEnum"].UFSCAR, _models_enums_major_degree_enum__WEBPACK_IMPORTED_MODULE_11__["MajorDegreeEnum"].MASTER, [_models_enums_major_enum__WEBPACK_IMPORTED_MODULE_12__["MajorEnum"].COMPUTER_SCIENCE, _models_enums_major_enum__WEBPACK_IMPORTED_MODULE_12__["MajorEnum"].BUSINESS_INTELLIGENCE], new _models_period__WEBPACK_IMPORTED_MODULE_27__["Period"](new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].AUG, 2015), new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].AUG, 2017)), _models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_10__["LocaleEnum"].SOROCABA, new _models_external_link__WEBPACK_IMPORTED_MODULE_23__["ExternalLink"]('https://repositorio.ufscar.br/handle/ufscar/9154', this.translationService.translate(this.systemLanguageService.language, _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_20__["TranslationTypeEnum"].THESIS_INFO, _models_enums_thesis_info_enum__WEBPACK_IMPORTED_MODULE_18__["ThesisInfoEnum"].LINK_LABEL)), new _models_education_additional_info__WEBPACK_IMPORTED_MODULE_4__["EducationAdditionalInfo"](this.translationService.translate(this.systemLanguageService.language, _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_20__["TranslationTypeEnum"].THESIS_INFO, _models_enums_thesis_info_enum__WEBPACK_IMPORTED_MODULE_18__["ThesisInfoEnum"].TITLE_LABEL), this.translationService.translate(this.systemLanguageService.language, _models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_20__["TranslationTypeEnum"].THESIS_INFO, _models_enums_thesis_info_enum__WEBPACK_IMPORTED_MODULE_18__["ThesisInfoEnum"].THESIS_TITLE))), new _models_education_item__WEBPACK_IMPORTED_MODULE_5__["EducationItem"](_models_enums_school_enum__WEBPACK_IMPORTED_MODULE_15__["SchoolEnum"].UFSCAR, _models_enums_major_degree_enum__WEBPACK_IMPORTED_MODULE_11__["MajorDegreeEnum"].BACHELOR, [_models_enums_major_enum__WEBPACK_IMPORTED_MODULE_12__["MajorEnum"].COMPUTER_SCIENCE], new _models_period__WEBPACK_IMPORTED_MODULE_27__["Period"](new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].FEB, 2011), new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].JUL, 2015)), _models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_10__["LocaleEnum"].SOROCABA), new _models_education_item__WEBPACK_IMPORTED_MODULE_5__["EducationItem"](_models_enums_school_enum__WEBPACK_IMPORTED_MODULE_15__["SchoolEnum"].SAPIENZA, _models_enums_major_degree_enum__WEBPACK_IMPORTED_MODULE_11__["MajorDegreeEnum"].ACADEMIC_EXCHANGE, [_models_enums_major_enum__WEBPACK_IMPORTED_MODULE_12__["MajorEnum"].COMPUTER_SCIENCE], new _models_period__WEBPACK_IMPORTED_MODULE_27__["Period"](new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].AUG, 2013), new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].AUG, 2014)), _models_enums_locale_enum__WEBPACK_IMPORTED_MODULE_10__["LocaleEnum"].ROME)];
          }
        }, {
          key: "certifications",
          get: function get() {
            return [new _models_certification__WEBPACK_IMPORTED_MODULE_3__["Certification"]('IELTS General Training Overall Band Scores 8', 'IELTS', new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].FEB, 2022)), new _models_certification__WEBPACK_IMPORTED_MODULE_3__["Certification"]('MCSA: SQL 2016 Database Development', 'MCSA', new _models_month_year__WEBPACK_IMPORTED_MODULE_26__["MonthYear"](_models_enums_month_enum__WEBPACK_IMPORTED_MODULE_13__["MonthEnum"].OCT, 2018))];
          }
        }, {
          key: "softSkills",
          get: function get() {
            return [_models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_17__["SoftSkillEnum"].TEAM_WORK, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_17__["SoftSkillEnum"].COLLABORATION, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_17__["SoftSkillEnum"].COMMITMENT, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_17__["SoftSkillEnum"].CRITICAL_THINKING, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_17__["SoftSkillEnum"].SELF_LEARNING, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_17__["SoftSkillEnum"].ADAPTABILITY, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_17__["SoftSkillEnum"].COMMUNICATION, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_17__["SoftSkillEnum"].TIME_MANAGEMENT, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_17__["SoftSkillEnum"].RESILIENCE, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_17__["SoftSkillEnum"].PROBLEM_SOLVING, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_17__["SoftSkillEnum"].LEADERSHIP, _models_enums_soft_skill_enum__WEBPACK_IMPORTED_MODULE_17__["SoftSkillEnum"].ATTENTION_TO_DETAIL];
          }
        }, {
          key: "hardSkills",
          get: function get() {
            return [// Languages
            new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].OOP, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].MAX), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].GOLANG, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR_AND_HALF), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].JAVA, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].MAX), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].SPRING_BOOT, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].HIBERNATE, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE_AND_HALF), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].C_SHARP, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].ENTITY_FRAMEWORK, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), // Databases
            new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].POSTGRESQL, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR_AND_HALF), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].SQL_SERVER, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].MY_SQL, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE_AND_HALF), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].CASSANDRA, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR_AND_HALF), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].MONGO_DB, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE_AND_HALF), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].DATA_WAREHOUSE, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE_AND_HALF), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].OLAP, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE_AND_HALF), // Management tools
            new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].SCRUM_KANBAN, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].MAX), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].JIRA_CONFLUENCE, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), // Patterns
            new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].DDD, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE_AND_HALF), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].TDD, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].MAX), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].DESIGN_PATTERNS, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE_AND_HALF), // Version control
            new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].GIT, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].TFS, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].PHABRICATOR_ARCANIST, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE_AND_HALF), // Frontend
            new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].ANGULAR, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].JAVASCRIPT_TYPESCRIPT, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE_AND_HALF), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].FRONT_TECHNOLOGIES, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].KENDO_UI, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE), // Formats
            new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].JSON, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].MAX), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].JWT, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].MAX), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].XML, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE), // General
            new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].OAUTH20, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].JUNIT, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE), // API
            new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].API_DESIGN, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].REST, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR_AND_HALF), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].SWAGGER, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].POSTMAN, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].SOAPUI, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].TWO_AND_HALF), // CI/CD and build tools
            new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].MAVEN, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].JENKINS, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].SONAR_QUBE, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR_AND_HALF), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].AWS, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE_AND_HALF), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].CI_CD, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE_AND_HALF), // Observability
            new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].KIBANA, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].GRAFANA, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].FOUR), new _models_hard_skill__WEBPACK_IMPORTED_MODULE_24__["HardSkill"](_models_enums_hard_skill_enum__WEBPACK_IMPORTED_MODULE_8__["HardSkillEnum"].M3, _models_enums_skill_level_enum__WEBPACK_IMPORTED_MODULE_16__["SkillLevelEnum"].THREE_AND_HALF)];
          }
        }, {
          key: "skills",
          get: function get() {
            return new _models_skills__WEBPACK_IMPORTED_MODULE_29__["Skills"](this.hardSkills, this.softSkills);
          }
        }]);

        return ResumeService;
      }();

      ResumeService.ɵfac = function ResumeService_Factory(t) {
        return new (t || ResumeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_translation_service__WEBPACK_IMPORTED_MODULE_31__["TranslationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_system_language_service__WEBPACK_IMPORTED_MODULE_32__["SystemLanguageService"]));
      };

      ResumeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ResumeService,
        factory: ResumeService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _translation_service__WEBPACK_IMPORTED_MODULE_31__["TranslationService"]
          }, {
            type: _system_language_service__WEBPACK_IMPORTED_MODULE_32__["SystemLanguageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zjWv":
    /*!*************************************************************************!*\
      !*** ./src/app/components/ms-btn-linkedin/ms-btn-linkedin.component.ts ***!
      \*************************************************************************/

    /*! exports provided: MsBtnLinkedinComponent */

    /***/
    function zjWv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MsBtnLinkedinComponent", function () {
        return MsBtnLinkedinComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_models_enums_linkedin_info_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/models/enums/linkedin-info.enum */
      "L/nR");
      /* harmony import */


      var src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/models/enums/system-language.enum */
      "LFmQ");
      /* harmony import */


      var src_app_models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/models/enums/translation-type.enum */
      "U3m8");
      /* harmony import */


      var src_app_service_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/translation.service */
      "UXmV");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var MsBtnLinkedinComponent = /*#__PURE__*/function () {
        function MsBtnLinkedinComponent(translationService) {
          _classCallCheck(this, MsBtnLinkedinComponent);

          this.translationService = translationService;
          this.position = 'right'; // Default

          this.language = src_app_models_enums_system_language_enum__WEBPACK_IMPORTED_MODULE_2__["SystemLanguageEnum"].EN_US;
        }

        _createClass(MsBtnLinkedinComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "tooltip",
          get: function get() {
            return this.translationService.translate(this.language, src_app_models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_3__["TranslationTypeEnum"].LINKEDIN_INFO, src_app_models_enums_linkedin_info_enum__WEBPACK_IMPORTED_MODULE_1__["LinkedinInfoEnum"].TOOLTIP);
          }
        }, {
          key: "uri",
          get: function get() {
            return this.translationService.translate(this.language, src_app_models_enums_translation_type_enum__WEBPACK_IMPORTED_MODULE_3__["TranslationTypeEnum"].LINKEDIN_INFO, src_app_models_enums_linkedin_info_enum__WEBPACK_IMPORTED_MODULE_1__["LinkedinInfoEnum"].LINK);
          }
        }]);

        return MsBtnLinkedinComponent;
      }();

      MsBtnLinkedinComponent.ɵfac = function MsBtnLinkedinComponent_Factory(t) {
        return new (t || MsBtnLinkedinComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"]));
      };

      MsBtnLinkedinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MsBtnLinkedinComponent,
        selectors: [["ms-btn-linkedin"]],
        inputs: {
          position: "position",
          language: "language"
        },
        decls: 2,
        vars: 3,
        consts: [["rel", "external", "target", "_blank", 1, "btn", "btn-icon", "btn-round", "btn-linkedin", 3, "placement", "ngbTooltip", "href"], [1, "fa", "fa-linkedin-square"]],
        template: function MsBtnLinkedinComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placement", ctx.position)("ngbTooltip", ctx.tooltip)("href", ctx.uri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltip"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtcy1idG4tbGlua2VkaW4uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MsBtnLinkedinComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'ms-btn-linkedin',
            templateUrl: './ms-btn-linkedin.component.html',
            styleUrls: ['./ms-btn-linkedin.component.css']
          }]
        }], function () {
          return [{
            type: src_app_service_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"]
          }];
        }, {
          position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          language: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zp+8":
    /*!****************************************************************!*\
      !*** ./src/app/models/enums/fixed-labels-and-tooltips.enum.ts ***!
      \****************************************************************/

    /*! exports provided: FixedLabelsAndTooltipsEnum */

    /***/
    function zp8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FixedLabelsAndTooltipsEnum", function () {
        return FixedLabelsAndTooltipsEnum;
      });

      var FixedLabelsAndTooltipsEnum;

      (function (FixedLabelsAndTooltipsEnum) {
        FixedLabelsAndTooltipsEnum[FixedLabelsAndTooltipsEnum["BACK_TO_TOP_BTN_TOOLTIP"] = 0] = "BACK_TO_TOP_BTN_TOOLTIP";
        FixedLabelsAndTooltipsEnum[FixedLabelsAndTooltipsEnum["CURRENT_LABEL"] = 1] = "CURRENT_LABEL";
      })(FixedLabelsAndTooltipsEnum || (FixedLabelsAndTooltipsEnum = {}));
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map