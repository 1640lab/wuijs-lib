# wuijs-lib

## Contents Table

*   [Overview](#overview)
	*   [Classes Table](#classes-table)
	*   [Global Implementation](#global-implementation)
*   [Classes](#classes)
    *   [WUICookie Class](#class-wuiCookie)

<a name="overview"></a>

## Overview

Global Version: `0.2`

Licence: `Apache License 2.0`

WUI, an acronym for *Web User Interface JavaScript library*, is an open source
JavaScript library for the rapid implementation of Web user interfaces composed
of 25 classes, which can be used independently or together.

<a name="classes-table"></a>

### Classes Table

| Class            | Version | Description |
| ---------------- | -------:| ----------- |
| WUICookie        | `0.1`   | Cookie manager. |
| WUIHead          | `0.1`   | HTML header manager. |
| WUIBody          | `0.1`   | HTML body manager. Allows the import of CSS/JS/HTML sections and facilitates implementation in native mobile environments. |
| WUILanguage      | `0.2`   | Language manager. Allows the import of interfaces that dynamically change languages based on JSON objects. |
| WUIScrolly       | `0.1`   | Tool for animating HTML elements using the "on scroll" event of the HTML page body.
| WUIIcon          | `0.1`   | Set of pre-designed icons loaded via CSS, for use in interfaces.
| WUIFade          | `0.1`   | Tool for fading out and fading in HTML elements with opacity. |
| WUITooltip       | `0.1`   | Simple object for hover text. |
| WUILoader        | `0.1`   | Simple object for loading animation. |
| WUIModal         | `0.1`   | Composite object for implementing dialog boxes (type `message`) and pop-up windows (type `page`). |
| WUIModalSelector | `0.1`   | Extended object of `WUIModal` for implementing selection lists based on arrays or data inputs of type `<select>`. |
| WUISlider        | `0.1`   | Composite object for implementing mouse-controlled and/or event-controlled blinds. |
| WUIPaging        | `0.1`   | Composite object for implementing paginated views. |
| WUITabs          | `0.1`   | Composite object for implementing views accessible by tab selection. |
| WUIList          | `0.1`   | Composite object for implementing data lists and buttons for each row optionally. |
| WUITable         | `0.1`   | Composite object for implementing data tables. Unlike the `WUIList` object, the `WUITable` object includes a column header. |
| WUIForm          | `0.1`   | Composite object for implementing data forms. This object allows the implementation of HTML data input elements such as `<input>`, `<select>`, and `<textarea>`, and WUI library objects such as `WUISelectpicker`, `WUIDatepicker`, `WUITimepicker`, `WUIColorpicker`, `WUICheckbox`, `WUIIntensity`, and `WUIButton`. |
| WUIFormat        | `0.1`   | Tool for managing and validating `String`, `Number` and `Date` data formats. |
| WUISelectpicker  | `0.1`   | Composite object for implementing multiple-select or exclusive data entries based on lists based on HTML `<select>` elements. |
| WUIDatepicker    | `0.1`   | Composite object for implementing date type data input. |
| WUITimepicker    | `0.1`   | Composite object for implementing time type data inputs. |
| WUIColorpicker   | `0.1`   | Composite object for implementing color picker type data inputs. |
| WUICheckbox      | `0.1`   | Composite object for implementing checkbox type data inputs. |
| WUIIntensity     | `0.1`   | Composite object for implementing 4-level intensity selector type data inputs: none, low, half, and high. |
| WUIButton        | `0.1`   | Composite object for button implementation. |

<a name="global-implementation"></a>

### Global Implementation

To enable all classes, the CSS and JS dependencies of the libraries must be
implemented in the HTML header of the web page together with the
`Settings.css` and `WUI.css` style configuration files.

Código CSS archivo `/examples/Global/Settings.css`:

```css
/* Main settings */

:root {
	--app-light1color: #f6f6fa;
	--app-light2color: #fdfdfe;
	--app-dark1color: #3b404a;
	--app-dark2color: #353a40;
	--app-dark3color: #1f2429;
	--app-dark4color: #3c4d5a;
	--app-dark5color: #2f3c48;
	--app-primarycolor: #f4a261;
	--app-hightlightcolor: #1e90ff;
	--app-warningcolor: #f44343;
	--app-disabledcolor: #d5dce3;
	--app-softcolor: #353a401a;
	--app-titlefont: "SanFrancisco";
}
```

CSS code in the `/examples/Global/WUI.css` file:

```css
/* WUI settings */

:root {

	/* wui-loader */

	--wui-loader-color: var(--app-light1color);

	/* wui-scrolly */

	--wui-scrolly-paging-bgcolor: var(--app-light1color);

	/* wui-icon */

	--wui-icon-size: 24px;
	--wui-icon-smallsize: 14px;
	--wui-icon-bgcolor-out: rgb(from var(--app-dark5color) r g b / 70%);
	--wui-icon-bgcolor-over: var(--app-dark5color);

	/* wui-tooltip */

	--wui-tooltip-open-delay: .2s;
	--wui-tooltip-bgcolor: var(--app-dark3color);
	--wui-tooltip-textcolor: #fff;

	/* wui-modal */

	--max-modal-width: 380px;
	--wui-modal-bgcolor: rgba(1, 2, 3, .2); /* rgba required */
	--wui-modal-bgcolor-under: rgba(1, 2, 3, 0);
	--wui-modal-box-radius: 17px;
	--wui-modal-box-bgcolor: rgb(from var(--app-light1color) r g b / 95%);
	--wui-modal-back-textcolor: var(--app-hightlightcolor);
	--wui-modal-topbar-height: 4px;
	--wui-modal-title-textfont: var(--app-titlefont);
	--wui-modal-title-textcase: none;
	--wui-modal-title-textcolor: #000;
	--wui-modal-body-scroll-bgcolor-out: rgb(from var(--app-dark5color) r g b / 20%);
	--wui-modal-body-scroll-bgcolor-over: rgb(from var(--app-dark5color) r g b / 40%);
	--wui-modal-footer-bordercolor: transparent;
	--wui-modal-message-box-width: 280px;
	--wui-modal-message-box-bgcolor: rgba(255, 255, 255, .8);
	--wui-modal-message-box-textcolor: var(--app-dark4color);
	--wui-modal-message-mobile-box-width: 280px;
	--wui-modal-message-mobile-footer-bordercolor: var(--app-softcolor);
	--wui-modal-message-mobile-button-bordercolor: var(--app-softcolor);
	--wui-modal-message-linkcolor: var(--app-hightlightcolor);
	--wui-modal-page-box-width: 800px;
	--wui-modal-page-box-height: 90%;
	--wui-modal-page-box-radius: 10px;
	--wui-modal-page-box-maxheight: 640px;
	--wui-modal-page-box-bgcolor: rgb(from var(--app-light1color) r g b / 95%);
	--wui-modal-page-header-topbar-bgcolor: rgb(from var(--app-dark1color) r g b / 20%);
	--wui-modal-page-header-bordercolor: var(--app-softcolor);
	--wui-modal-slidepage-box-margin: 10px;
	--wui-modal-smallpage-box-width: 340px;
	--wui-modal-smallpage-box-height: 280px;
	--max-modal-mobile-width: 430px;

	/* wui-modal select */

	--wui-modal-select-box-width: 280px;
	--wui-modal-select-box-bgcolor: rgba(255, 255, 255, .8);
	--wui-modal-select-option-bordercolor-out: var(--app-softcolor);
	--wui-modal-select-option-bordercolor-over: var(--app-softcolor);
	--wui-modal-select-option-bgcolor-out: transparent;
	--wui-modal-select-option-bgcolor-over: rgb(from var(--app-dark1color) r g b / 4%);
	--wui-modal-select-option-iconcolor-out: var(--app-hightlightcolor);
	--wui-modal-select-option-iconcolor-over: var(--app-hightlightcolor);
	--wui-modal-select-option-iconcolor-disabled: rgb(112, 128, 144, .4);
	--wui-modal-select-option-textcolor-out: var(--app-dark4color);
	--wui-modal-select-option-textcolor-over: var(--app-hightlightcolor);
	--wui-modal-select-option-textcolor-selected: var(--app-hightlightcolor);
	--wui-modal-select-option-textcolor-disabled: rgb(112, 128, 144, .4);
	--wui-modal-select-option-checker-bordercolor-out: var(--app-hightlightcolor);
	--wui-modal-select-option-checker-bordercolor-selected: var(--app-hightlightcolor);
	--wui-modal-select-option-checker-bgcolor-out: transparent;
	--wui-modal-select-option-checker-bgcolor-selected: var(--app-hightlightcolor);
	--wui-modal-select-button-bordercolor: var(--app-softcolor);

	/* wui-slider */

	--wui-slider-dots-bgcolor: transparent;
	--wui-slider-dot-bgcolor: rgba(255, 255, 255, .6);
	--wui-slider-dot-bgcolor-elected: rgba(255, 255, 255, .9);

	/* wui-paging */

	--wui-paging-page-transition-time: .4s;
	--wui-paging-page-bgcolor: transparent;
	--wui-paging-page-scroll-bgcolor-out: rgb(from var(--app-dark4color) r g b / 20%);
	--wui-paging-page-scroll-bgcolor-over: rgb(from var(--app-dark4color) r g b / 40%);

	/* wui-tabs */

	--wui-tabs-tab-bgcolor-out: var(--app-light2color);
	--wui-tabs-tab-bgcolor-over: var(--app-light1color);
	--wui-tabs-tab-iconcolor-out: var(--app-hightlightcolor);
	--wui-tabs-tab-iconcolor-over: var(--app-hightlightcolor);
	--wui-tabs-tab-iconcolor-mobile: var(--app-hightlightcolor);
	--wui-tabs-tab-textcolor-out: var(--app-dark4color);
	--wui-tabs-tab-textcolor-over: var(--app-hightlightcolor);

	/* wui-list */

	--wui-list-radius: 10px;
	--wui-list-borderwidth: 0;
	--wui-list-bordercolor: var(--app-softcolor);
	--wui-list-scroll-bgcolor-out: rgb(from var(--app-dark4color) r g b / 20%);
	--wui-list-scroll-bgcolor-over: rgb(from var(--app-dark4color) r g b / 40%);
	--wui-list-row-height: 44px;
	--wui-list-row-borderwidth: 1px;
	--wui-list-row-bordercolor-out: var(--app-softcolor);
	--wui-list-row-bordercolor-over: var(--app-softcolor);
	--wui-list-row-bgcolor-out: var(--app-light2color);
	--wui-list-row-bgcolor-over: var(--app-light1color);
	--wui-list-row-textcolor-out: var(--app-dark4color);
	--wui-list-row-textcolor-over: var(--app-dark4color);
	--wui-list-row-textcolor-disabled: var(--app-disabledcolor);
	--wui-list-innerrow-borderwidth: 1px;
	--wui-list-innerrow-bordercolor: rgb(from var(--app-dark2color) r g b / 10%);
	--wui-list-innerrow-bgcolor: var(--app-light1color);
	--wui-list-innerrow-textcolor: rgb(from var(--app-dark4color) r g b / 60%);
	--wui-list-buttons-bgcolor: transparent;
	--wui-list-button-size: 48px; /* 34px */
	--wui-list-button-hmargin: 8px;
	--wui-list-button-radius: 50%;
	--wui-list-button-bgcolor-enabled: var(--app-hightlightcolor);
	--wui-list-button-bgcolor-disabled: var(--app-disabledcolor);
	--wui-list-message-textcolor: var(--app-dark4color);
	--max-list-width: 600px;
	--max-list-mobile-width: 430px;

	/* wui-table */

	--wui-table-column-bordercolor-width: 1px;
	--wui-table-column-bordercolor-out: rgb(from var(--app-hightlightcolor) r g b / 10%);
	--wui-table-column-bordercolor-over: rgba(255, 255, 255, .8);
	--wui-table-column-bordercolor-selected: rgba(255, 255, 255, .8);
	--wui-table-column-bgcolor-out: transparent;
	--wui-table-column-bgcolor-over: transparent;
	--wui-table-column-bgcolor-selectd: var(--app-hightlightcolor);
	--wui-table-column-textcolor-out: #444;
	--wui-table-column-textcolor-over: #000;
	--wui-table-column-textcolor-disabled: var(--app-disabledcolor);
	--wui-table-row-radius: 10px;
	--wui-table-row-bordercolor-width: 1px;
	--wui-table-row-bordercolor-out: rgb(from var(--app-hightlightcolor) r g b / 10%);
	--wui-table-row-bordercolor-over: rgba(255, 255, 255, .8);
	--wui-table-row-bordercolor-selected: rgba(255, 255, 255, .8);
	--wui-table-row-bgcolor-out: transparent;
	--wui-table-row-bgcolor-over: transparent;
	--wui-table-row-bgcolor-selectd: var(--app-hightlightcolor);
	--wui-table-row-textcolor-out: var(--app-dark1color);
	--wui-table-row-textcolor-over: var(--app-dark3color);
	--wui-table-row-textcolor-disabled: var(--app-disabledcolor);
	--wui-table-row-textcolor-selected: #fff;

	/* wui-form */

	--wui-form-header-bordercolor: var(--app-softcolor);
	--wui-form-body-scroll-bgcolor-out: rgb(from var(--app-dark5color) r g b / 20%);
	--wui-form-body-scroll-bgcolor-over: rgb(from var(--app-dark5color) r g b / 40%);
	--wui-form-line-bgcolor: rgba(204, 204, 204, .4);
	--wui-form-fieldset-bgcolor: #fff;
	--wui-form-legend-texttransform: uppercase;
	--wui-form-legend-textcolor: rgb(from var(--app-dark4color) r g b / 60%);
	--wui-form-label-textcolor-out: var(--app-dark4color);
	--wui-form-label-textcolor-focus: var(--app-hightlightcolor);
	--wui-form-label-textcolor-notempty: rgb(from var(--app-dark4color) r g b / 40%);
	--wui-form-label-textcolor-disabled: var(--app-disabledcolor);
	--wui-form-input-height: 30px;
	--wui-form-input-borderwidth: 1px;
	--wui-form-input-borderradius: 15px;
	--wui-form-input-bordercolor-out: rgb(from var(--app-hightlightcolor) r g b / 20%);
	--wui-form-input-bordercolor-focus: var(--app-hightlightcolor);
	--wui-form-input-bordercolor-invalid: var(--app-warningcolor);
	--wui-form-input-bordercolor-disabled: var(--app-disabledcolor);
	--wui-form-input-bgcolor-out: rgb(from var(--app-hightlightcolor) r g b / 4%);
	--wui-form-input-bgcolor-focus: rgb(from var(--app-hightlightcolor) r g b / 4%);
	--wui-form-input-bgcolor-disabled: var(--app-disabledcolor);
	--wui-form-input-textcolor-out: #000;
	--wui-form-input-textcolor-disabled: var(--app-disabledcolor);
	--wui-form-date-openicon-src: none;
	--wui-form-date-openicon-size: 30px;
	--wui-form-date-opencolor-out: #000;
	--wui-form-date-opencolor-over: var(--app-hightlightcolor);
	--wui-form-date-opencolor-focus: var(--app-hightlightcolor);
	--wui-form-date-opencolor-disabled: var(--app-disabledcolor);
	--wui-form-time-openicon-src: none;
	--wui-form-time-openicon-size: 30px;
	--wui-form-time-opencolor-out: #000;
	--wui-form-time-opencolor-over: var(--app-hightlightcolor);
	--wui-form-time-opencolor-focus: var(--app-hightlightcolor);
	--wui-form-time-opencolor-disabled: var(--app-disabledcolor);
	--wui-form-time-textcolor-out: var(--app-hightlightcolor);
	--wui-form-time-textcolor-disabled: var(--app-disabledcolor);
	--wui-form-range-thumb-size: 20px;
	--wui-form-range-thumb-bgcolor-out: var(--app-hightlightcolor);
	--wui-form-range-thumb-bgcolor-over: var(--app-hightlightcolor);
	--wui-form-range-thumb-bgcolor-disabled: var(--app-disabledcolor);
	--wui-form-range-trackbar-height: 7px;
	--wui-form-range-trackbar-borderwidth: 1px;
	--wui-form-range-trackbar-bordercolor: var(--app-softcolor);
	--wui-form-range-trackbar-bgcolor-out: rgb(from var(--app-dark1color) r g b / 4%);
	--wui-form-range-trackbar-bgcolor-over: var(--app-hightlightcolor);
	--wui-form-range-trackbar-bgcolor-disabled: var(--app-disabledcolor);
	--wui-form-select-openicon-src: none;
	--wui-form-select-openicon-size: 30px;
	--wui-form-select-opencolor-out: #000;
	--wui-form-select-opencolor-over: var(--app-hightlightcolor);
	--wui-form-select-opencolor-focus: var(--app-hightlightcolor);
	--wui-form-select-opencolor-disabled: var(--app-disabledcolor);
	--wui-form-data-textcolor-out: var(--app-hightlightcolor);
	--wui-form-data-textcolor-disabled: var(--app-disabledcolor);
	--wui-form-progress-borderwidth: 1px;
	--wui-form-progress-bordercolor: rgb(from var(--app-hightlightcolor) r g b / 20%);
	--wui-form-progress-valuecolor: var(--app-hightlightcolor);
	--wui-form-progress-bgcolor: var(--app-softcolor);
	--wui-form-text-textcolor-out: #888;
	--wui-form-text-textcolor-disabled: var(--app-disabledcolor);
	--wui-form-text-linkcolor-out: var(--app-hightlightcolor);
	--wui-form-text-linkcolor-highlight: var(--app-hightlightcolor);
	--wui-form-message-bgcolor: rgba(255, 255, 255, .6);
	--wui-form-message-textcolor: #888;
	--wui-form-message-highlight-bgcolor: var(--app-hightlightcolor);
	--wui-form-message-highlight-textcolor: #fff;
	--wui-form-mobile-field-bordercolor: rgb(from var(--app-hightlightcolor) r g b / 10%);
	--wui-form-mobile-label-textcolor: #444;
	--wui-form-mobile-input-height: 40px;
	--wui-form-mobile-input-bgcolor: rgb(from var(--app-hightlightcolor) r g b / 4%);
	--wui-form-mobile-input-height: 34px;
	--wui-form-mobile-input-borderradius: 17px;

	/* wui-selectpicker */

	--wui-selectpicker-openicon-src: none;
	--wui-selectpicker-openicon-size: var(--wui-form-select-openicon-src);
	--wui-selectpicker-opencolor-out: var(--wui-form-select-opencolor-out);
	--wui-selectpicker-opencolor-over: var(--wui-form-select-opencolor-over);
	--wui-selectpicker-opencolor-focus: var(--wui-form-select-opencolor-focus);
	--wui-selectpicker-opencolor-disabled: var(--wui-form-select-opencolor-disabled);
	--wui-selectpicker-input-textcolor-out: var(--wui-form-input-textcolor-out);
	--wui-selectpicker-input-textcolor-over: var(--wui-form-input-textcolor-over);
	--wui-selectpicker-input-textcolor-disabled: var(--wui-form-input-textcolor-disabled);
	--wui-selectpicker-box-radius: 10px;
	--wui-selectpicker-box-bordercolor: var(--app-softcolor);
	--wui-selectpicker-box-bgcolor: rgba(255, 255, 255, .8);
	--wui-selectpicker-box-option-bordercolor-out: var(--app-softcolor);
	--wui-selectpicker-box-option-bordercolor-over: var(--app-softcolor);
	--wui-selectpicker-box-option-bgcolor-out: transparent;
	--wui-selectpicker-box-option-bgcolor-over: rgb(from var(--app-dark4color) r g b / 4%);
	--wui-selectpicker-box-option-checkicon-src: none;
	--wui-selectpicker-box-option-checkcolor-out: var(--app-hightlightcolor);
	--wui-selectpicker-box-option-checkcolor-over: var(--app-hightlightcolor);
	--wui-selectpicker-box-option-checkcolor-selected: var(--app-hightlightcolor);
	--wui-selectpicker-box-option-checkcolor-disabled: rgb(112, 128, 144, .4);
	--wui-selectpicker-box-option-textcolor-out: var(--app-dark4color);
	--wui-selectpicker-box-option-textcolor-empty: rgb(from var(--app-dark4color) r g b / 60%);
	--wui-selectpicker-box-option-textcolor-over: var(--app-dark4color);
	--wui-selectpicker-box-option-textcolor-selected: var(--app-hightlightcolor);
	--wui-selectpicker-box-option-textcolor-disabled: rgb(112, 128, 144, .4);
	--wui-selectpicker-box-button-bordercolor: var(--app-softcolor);
	--wui-selectpicker-box-button-textcolor-out: var(--app-hightlightcolor);
	--wui-selectpicker-box-button-textcolor-over: var(--app-hightlightcolor);
	--wui-selectpicker-mobile-bgcolor: rgba(1, 2, 3, .2);
	--wui-selectpicker-mobile-box-width: var(--wui-modal-select-box-width);
	--wui-selectpicker-mobile-box-radius: var(--wui-modal-box-radius);

	/* wui-datepicker */

	--wui-datepicker-openicon-src: none;
	--wui-datepicker-openicon-size: var(--wui-form-select-openicon-src);
	--wui-datepicker-opencolor-out: var(--wui-form-select-opencolor-out);
	--wui-datepicker-opencolor-over: var(--wui-form-select-opencolor-over);
	--wui-datepicker-opencolor-focus: var(--wui-form-select-opencolor-focus);
	--wui-datepicker-opencolor-disabled: var(--wui-form-select-opencolor-disabled);
	--wui-datepicker-box-radius: 10px;
	--wui-datepicker-box-bordercolor: var(--app-softcolor);
	--wui-datepicker-box-bgcolor: rgba(255, 255, 255, .8);
	--wui-datepicker-box-upicon-src: none;
	--wui-datepicker-box-upcolor-out: #000;
	--wui-datepicker-box-upcolor-over: var(--app-hightlightcolor);
	--wui-datepicker-box-upcolor-disabled: var(--app-disabledcolor);
	--wui-datepicker-box-downicon-src: none;
	--wui-datepicker-box-downcolor-out: #000;
	--wui-datepicker-box-downcolor-over: var(--app-hightlightcolor);
	--wui-datepicker-box-downcolor-disabled: var(--app-disabledcolor);
	--wui-datepicker-box-previcon-src: none;
	--wui-datepicker-box-prevcolor-out: var(--app-hightlightcolor);
	--wui-datepicker-box-prevcolor-over: var(--app-hightlightcolor);
	--wui-datepicker-box-prevcolor-disabled: var(--app-disabledcolor);
	--wui-datepicker-box-nexticon-src: none;
	--wui-datepicker-box-nextcolor-out: var(--app-hightlightcolor);
	--wui-datepicker-box-nextcolor-over: var(--app-hightlightcolor);
	--wui-datepicker-box-nextcolor-disabled: var(--app-disabledcolor);
	--wui-datepicker-box-month-titlecolor: #888;
	--wui-datepicker-box-month-bgcolor-today: var(--app-softcolor);
	--wui-datepicker-box-month-bgcolor-over: rgb(from var(--app-hightlightcolor) r g b / 20%);
	--wui-datepicker-box-month-bgcolor-selected: var(--app-hightlightcolor);
	--wui-datepicker-box-month-textcolor-out: #000;
	--wui-datepicker-box-month-textcolor-over: var(--app-hightlightcolor);
	--wui-datepicker-box-month-textcolor-selected: #fff;
	--wui-datepicker-box-day-bgcolor-today: var(--app-softcolor);
	--wui-datepicker-box-day-bgcolor-over: rgb(from var(--app-hightlightcolor) r g b / 20%);
	--wui-datepicker-box-day-bgcolor-selected: var(--app-hightlightcolor);
	--wui-datepicker-box-day-textcolor-out: #000;
	--wui-datepicker-box-day-textcolor-over: var(--app-hightlightcolor);
	--wui-datepicker-box-day-textcolor-selected: #fff;
	--wui-datepicker-box-button-textcolor-out: var(--app-hightlightcolor);
	--wui-datepicker-box-button-textcolor-over: var(--app-hightlightcolor);
	--wui-datepicker-mobile-bgcolor: rgba(1, 2, 3, .2);

	/* wui-timepicker */

	--wui-timepicker-openicon-src: none;
	--wui-timepicker-openicon-size: var(--wui-form-select-openicon-src);
	--wui-timepicker-opencolor-out: var(--wui-form-select-opencolor-out);
	--wui-timepicker-opencolor-over: var(--wui-form-select-opencolor-over);
	--wui-timepicker-opencolor-focus: var(--wui-form-select-opencolor-focus);
	--wui-timepicker-opencolor-disabled: var(--wui-form-select-opencolor-disabled);
	--wui-timepicker-box-radius: 10px;
	--wui-timepicker-box-bordercolor: var(--app-softcolor);
	--wui-timepicker-box-bgcolor: rgba(255, 255, 255, .8);
	--wui-timepicker-box-option-bgcolor-now: var(--app-softcolor);
	--wui-timepicker-box-option-bgcolor-over: rgb(from var(--app-hightlightcolor) r g b / 20%);
	--wui-timepicker-box-option-bgcolor-selected: var(--app-hightlightcolor);
	--wui-timepicker-box-option-textcolor-out: #000;
	--wui-timepicker-box-option-textcolor-over: var(--app-hightlightcolor);
	--wui-timepicker-box-option-textcolor-selected: #fff;
	--wui-timepicker-box-button-textcolor-out: var(--app-hightlightcolor);
	--wui-timepicker-box-button-textcolor-over: var(--app-hightlightcolor);
	--wui-timepicker-mobile-bgcolor: rgba(1, 2, 3, .2);

	/* wui-colorpicker */

	--wui-colorpicker-button-size: 30px;
	--wui-colorpicker-button-bordercolor-out: rgb(from var(--app-hightlightcolor) r g b / 20%);
	--wui-colorpicker-button-bordercolor-over: var(--app-hightlightcolor);
	--wui-colorpicker-button-bordercolor-invalid: var(--app-warningcolor);
	--wui-colorpicker-button-bordercolor-disabled: var(--app-disabledcolor);
	--wui-colorpicker-button-bgcolor-out: transparent;
	--wui-colorpicker-button-bgcolor-over: transparent;
	--wui-colorpicker-button-bgcolor-disabled: transparent;
	--wui-colorpicker-viewicon-borderwidth: 1px;
	--wui-colorpicker-viewicon-bordercolor: rgb(from var(--app-hightlightcolor) r g b / 20%);
	--wui-colorpicker-openicon-src: none;
	--wui-colorpicker-openicon-size: var(--wui-form-select-pickericon-size);
	--wui-colorpicker-opencolor-out: var(--wui-form-select-opencolor-out);
	--wui-colorpicker-opencolor-over: var(--wui-form-select-opencolor-over);
	--wui-colorpicker-opencolor-focus: var(--wui-form-select-opencolor-focus);
	--wui-colorpicker-opencolor-disabled: var(--wui-form-select-opencolor-disabled);
	--wui-colorpicker-emptyicon-src: none;
	--wui-colorpicker-emptycolor-out: var(--app-dark1color);
	--wui-colorpicker-box-radius: 10px;
	--wui-colorpicker-box-bordercolor: var(--app-softcolor);
	--wui-colorpicker-box-bgcolor: rgba(255, 255, 255, .8);
	--wui-colorpicker-box-tab-textcolor-out: var(--app-dark1color);
	--wui-colorpicker-box-tab-textcolor-selected: var(--app-hightlightcolor);
	--wui-colorpicker-box-option-bordercolor-out: var(--app-softcolor);
	--wui-colorpicker-box-option-bordercolor-over: var(--app-softcolor);
	--wui-colorpicker-box-option-bgcolor-out: transparent;
	--wui-colorpicker-box-option-bgcolor-over: rgb(from var(--app-dark1color) r g b / 4%);
	--wui-colorpicker-box-option-bgcolor-selected: var(--app-hightlightcolor);
	--wui-colorpicker-box-option-textcolor-out: #000;
	--wui-colorpicker-box-option-textcolor-over: var(--app-hightlightcolor);
	--wui-colorpicker-box-option-textcolor-selected: #fff;
	--wui-colorpicker-box-preview-textcolor-out: #000;
	--wui-colorpicker-box-preview-textcolor-empty: rgb(from var(--app-dark1color) r g b / 70%);
	--wui-colorpicker-box-button-textcolor-out: var(--app-hightlightcolor);
	--wui-colorpicker-box-button-textcolor-over: var(--app-hightlightcolor);
	--wui-colorpicker-mobile-bgcolor: rgba(1, 2, 3, .2);

	/* wui-checkbox */

	--wui-checkbox-button-size: 30px;
	--wui-checkbox-bordercolor-out: rgb(from var(--app-hightlightcolor) r g b / 20%);
	--wui-checkbox-bordercolor-over: var(--app-hightlightcolor);
	--wui-checkbox-bordercolor-checked: var(--app-hightlightcolor);
	--wui-checkbox-bordercolor-invalid: var(--app-warningcolor);
	--wui-checkbox-bordercolor-disabled: var(--app-disabledcolor);
	--wui-checkbox-bgcolor-out: rgb(from var(--app-hightlightcolor) r g b / 4%);
	--wui-checkbox-bgcolor-over: rgb(from var(--app-hightlightcolor) r g b / 4%);
	--wui-checkbox-bgcolor-checked: var(--app-hightlightcolor);
	--wui-checkbox-bgcolor-disabled: rgb(from var(--app-disabledcolor) r g b / 20%);
	--wui-checkbox-button-bordercolor-out: rgb(from var(--app-hightlightcolor) r g b / 20%);
	--wui-checkbox-button-bordercolor-over: var(--app-hightlightcolor);
	--wui-checkbox-button-bordercolor-checked: var(--app-hightlightcolor);
	--wui-checkbox-button-bordercolor-disabled: var(--app-disabledcolor);
	--wui-checkbox-button-bgcolor-out: var(--app-light1color);
	--wui-checkbox-button-bgcolor-over: rgb(from var(--app-hightlightcolor) r g b / 4%);
	--wui-checkbox-button-bgcolor-checked: var(--app-light1color);
	--wui-checkbox-button-bgcolor-disabled: var(--app-disabledcolor);

	/* wui-intensity */

	--wui-intensity-height: 30px;
	--wui-intensity-radius: 15px;
	--wui-intensity-bordercolor-out: rgb(from var(--app-hightlightcolor) r g b / 20%);
	--wui-intensity-bordercolor-disabled: var(--app-disabledcolor);
	--wui-intensity-bgcolor-none: var(--app-light2color);
	--wui-intensity-bgcolor-low: mediumaquamarine;
	--wui-intensity-bgcolor-half: darkorange;
	--wui-intensity-bgcolor-high: orangered;

	/* wui-button */

	--wui-button-default-minwidth: 200px;
	--wui-button-default-height: 34px;
	--wui-button-default-bordercolor-out: rgb(from var(--app-dark1color) r g b / 15%);
	--wui-button-default-bordercolor-over: var(--app-hightlightcolor);
	--wui-button-default-bordercolor-selected: var(--app-hightlightcolor);
	--wui-button-default-bordercolor-disabled: var(--app-disabledcolor);
	--wui-button-default-bgcolor-out: transparent;
	--wui-button-default-bgcolor-over: transparent;
	--wui-button-default-bgcolor-selected: var(--app-hightlightcolor);
	--wui-button-default-bgcolor-disabled: transparent;
	--wui-button-default-textcolor-out: var(--app-hightlightcolor);
	--wui-button-default-textcolor-over: var(--app-hightlightcolor);
	--wui-button-default-textcolor-selected: #fff;
	--wui-button-default-textcolor-disabled: var(--app-disabledcolor);
	--wui-button-default-textsize: 15px;
	--wui-button-submit-minwidth: 200px;
	--wui-button-submit-height: 34px;
	--wui-button-submit-bordercolor-out: rgb(from var(--app-hightlightcolor) r g b / 20%);
	--wui-button-submit-bordercolor-over: var(--app-hightlightcolor);
	--wui-button-submit-bordercolor-selected: var(--app-hightlightcolor);
	--wui-button-submit-bordercolor-disabled: var(--wui-button-default-bordercolor-disabled);
	--wui-button-submit-bgcolor-out: var(--app-hightlightcolor);
	--wui-button-submit-bgcolor-over: var(--app-hightlightcolor);
	--wui-button-submit-bgcolor-selected: var(--app-hightlightcolor);
	--wui-button-submit-bgcolor-disabled: var(--app-disabledcolor);
	--wui-button-submit-textcolor-out: #fff;
	--wui-button-submit-textcolor-over: #fff;
	--wui-button-submit-textcolor-mobile: var(--app-hightlightcolor);
	--wui-button-submit-textcolor-selected: #fff;
	--wui-button-submit-textcolor-disabled: var(--wui-disabledcolor);
	--wui-button-submit-textsize: 15px;
	--wui-button-warning-bordercolor-out: rgb(from var(--app-warningcolor) r g b / 25%);
	--wui-button-warning-bordercolor-over: var(--app-warningcolor);
	--wui-button-warning-bordercolor-selected: var(--app-warningcolor);
	--wui-button-warning-bordercolor-disabled: var(--wui-button-default-bordercolor-disabled);
	--wui-button-warning-bgcolor-out: var(--app-warningcolor);
	--wui-button-warning-bgcolor-over: var(--app-warningcolor);
	--wui-button-warning-bgcolor-selected: var(--app-warningcolor);
	--wui-button-warning-bgcolor-disabled: var(--app-disabledcolor);
	--wui-button-warning-textcolor-out: #fff;
	--wui-button-warning-textcolor-over: #fff;
	--wui-button-warning-textcolor-mobile: var(--app-warningcolor);
	--wui-button-warning-textcolor-selected: #fff;
	--wui-button-warning-textcolor-disabled: var(--wui-disabledcolor);
	--wui-button-icon-float-padding: 5px;
	--wui-button-mobile-default-height: 40px;
	--wui-button-mobile-submit-height: 40px;
	--wui-button-mobile-icon-float-padding: 10px;
	--wui-button-form-default-minwidth: 100px;
}
```

Assuming the CSS configuration file is installed in the relative path
`./Settings/WUI.css` and the libraries are installed in the relative path
`./Libraries/WUI`, the HTML header looks like this:

HTML code for the `/examples/Global/Global.html` file:

```html
<!doctype html>
<html>
	<head>
		<title></title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
		<meta name="application-name" content="">
		<meta name="theme-color" content="">
		<link type="text/css" rel="stylesheet" href="./Settings/Main.css">
		<link type="text/css" rel="stylesheet" href="./Settings/WUI.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Scrolly/WUIScrolly-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Icon/WUIIcon-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Tooltip/WUITooltip-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Loader/WUILoader-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Modal/WUIModal-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Modal/WUIModalSelect-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Slider/WUISlider-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Paging/WUIPaging-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Tabs/WUITabs-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/List/WUIList-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Table/WUITable-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Form/WUIForm-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Selectpicker/WUISelectpicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Datepicker/WUIDatepicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Timepicker/WUITimepicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Colorpicker/WUIColorpicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Checkbox/WUICheckbox-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Intensity/WUIIntensity-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Button/WUIButton-0.1.css">
		<script type="text/javascript" src="./Libraries/WUI/Cookie/WUICookie-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Head/WUIHead-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Body/WUIBody-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Language/WUILanguage-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Scrolly/WUIScrolly-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Icon/WUIIcon-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Fade/WUIFade-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Tooltip/WUITooltip-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Loader/WUILoader-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Modal/WUIModal-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Modal/WUIModalSelect-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Slider/WUISlider-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Paging/WUIPaging-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Tabs/WUITabs-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/List/WUIList-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Table/WUITable-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Form/WUIForm-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Format/WUIFormat-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Selectpicker/WUISelectpicker-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Datepicker/WUIDatepicker-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Timepicker/WUITimepicker-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Colorpicker/WUIColorpicker-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Checkbox/WUICheckbox-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Intensity/WUIIntensity-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Button/WUIButton-0.1.js"></script>
	</head>
	<body>
	</body>
</html>
```

This implementation method allows for standardization of an application's user
interface design, using the `WUI.css` file.

<a name="classes"></a>

## Classes

<a name="class-wuiCookie"></a>

### WUICookie Class

Version: `0.1`

Cookie manager.

#### Constructor

| Type      | Description |
| --------- | ----------- |
| WUICookie | `WUICookie([properties])`<br><br>Arguments:<br><br>**• properties:** `Object` |

#### Properties

| Property | Type      | Default value.      | Description |
| -------- | --------- | ------------------- | ----------- |
| domain   | `String`  | `location.hostname` | Defines the domain for which the cookie is accessible. By default, it's the current host. Setting it to a parent domain (e.g., example.com for sub.example.com) makes it accessible to subdomains. |
| path     | `String`  | `"./"`              | Specifies the path for which the cookie is valid. The default value is the current path, with an empty value being equivalent to this. Setting "/" makes the cookie accessible across the entire domain. |
| minutes  | `Number`  | `525600`            | Specifies the duration, measured in minutes, for the cookie to remain active. The default value is 365 days or one year.
| overssl  | `Boolean` | `false`             | If set to `true`, the cookie will only be sent over HTTPS connections. |

#### Methods

| Method    | Return type | Description |
| --------- | ----------- | ----------- |
| set       | `Void`      | `set(name, value[, options])`<br><br>Arguments:<br><br>**• name:** `String` <br>**• value:** `String` <br>**• options:** `Object` *optional* |
| get       | `String`    | `get(name)`<br><br>Arguments:<br><br>**• name:** `String` |

#### Implementation

JS code:

```js
const cookie = new WUICookie({
	domain: location.hostname,
	path: "./",
	minutes: 365*24*60,
	overssl: false
});

cookie.set("test", "value");

console.log(cookie.get("test"));
```