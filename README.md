# wuijs-lib

Library version: `0.2.0`

Document version: `0.2.0-1e`

Licence: `Apache License 2.0`

Author: `Sergio E. Belmar V. <sbelmar@1640lab.com>`

## Index

*   [Overview](#overview)
	*   [Classes Table](#classes-table)
*   [Install](#install)
*   [Implementation](#implementation)
*   [Classes](#classes)
    *   [WUICookie](#wuiCookie)
	*   [WUIHead](#wuiHead)
	*   [WUIBody](#wuiBody)
	*   [WUILanguage](#wuiLanguage)
	*   [WUIScrolly](#wuiScrolly)
	*   [WUIIcon](#wuiIcon)
	*   [WUIFade](#wuiFade)

<a name="overview"></a>

## Overview

WUI, an acronym for *Web User Interface JavaScript library*, is an open source JavaScript library for the rapid implementation of Web user interfaces composed of 25 classes, which can be used independently or together.

<a name="classes-table"></a>

### Classes Table

| Class            | Version | Description |
| ---------------- | -------:| ----------- |
| WUICookie        | `0.1`   | Cookie manager. |
| WUIHead          | `0.1`   | HTML header manager. |
| WUIBody          | `0.1`   | HTML body manager. Allows the import of CSS/JS/HTML content and facilitates implementation in native mobile environments. |
| WUILanguage      | `0.2`   | Language manager for web interfaces. Allows you to load language files in JS or JSON format and dynamically update the content of HTML elements based on the language. |
| WUIScrolly       | `0.1`   | Tool for animating HTML elements using the "onscroll" event of the HTML page body. |
| WUIIcon          | `0.1`   | Set of pre-designed icons loaded via CSS, for use in interfaces. |
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
| WUIFormat        | `0.1`   | Tool for managing and validating `string`, `number` and `Date` data formats. |
| WUISelectpicker  | `0.1`   | Composite object for implementing multiple-select or exclusive data entries based on lists based on HTML `<select>` elements. |
| WUIDatepicker    | `0.1`   | Composite object for implementing date type data input. |
| WUITimepicker    | `0.1`   | Composite object for implementing time type data inputs. |
| WUIColorpicker   | `0.1`   | Composite object for implementing color picker type data inputs. |
| WUICheckbox      | `0.1`   | Composite object for implementing checkbox type data inputs. |
| WUIIntensity     | `0.1`   | Composite object for implementing 4-level intensity selector type data inputs: none, low, half, and high. |
| WUIButton        | `0.1`   | Composite object for button implementation. |

<a name="install"></a>

## Install

To install the WUI library, you must clone it from the official distribution repositories en GitHib (`1640lab/wuijs-lib` or `sbelmar/wuijs-lib`). Assuming the project where it will be deployed has a download directory: `./downloads`, a `./src` source directory, and within that, a `./src/Libraries` library directory, you must type the following in the terminal:

```bash
cd ./downloads
git clone https://git@github.com/1640lab/wuijs-lib.git
cp -r ./wuijs-lib/src/WDS ../src/Libraries/
```

<a name="implementation"></a>

## Implementation

To enable all classes, the CSS and JS dependencies of the libraries must be implemented in the HTML header of the web page together with the `Settings.css` and `WUI.css` style configuration files.

CSS code in the `Settings.css` file:

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

CSS code in the `WUI.css` file:

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

Assuming the CSS configuration file is installed in the relative path `./Settings/WUI.css` and the libraries are installed in the relative path `./Libraries/WUI`, the HTML header looks like this:

HTML code:

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
		<script type="text/javascript" src="./Libraries/WUI/Language/WUILanguage-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Body/WUIBody-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Scrolly/WUIScrolly-0.1.js"></script>
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

This implementation method allows for standardization of an application's user interface design, using the `WUI.css` file.

> [!IMPORTANT]
> The style configuration files must be in the paths `./Settings/Main.css` and `./Settings/WUI.css`.

> [!TIP]
> If you only want to implement part of the WUI library set, you must add calls to the JS and CSS files in the HTML header as indicated in each section.
> On the other hand, the `WUI.css` file will only require the definition of the objects you want to implement.

<a name="classes"></a>

## Classes

<a name="wuiCookie"></a>

### WUICookie

Version: `0.1`

Cookie manager.

#### Constructor

| Type      | Description |
| --------- | ----------- |
| WUICookie | `WUICookie([properties])`<br><br>Arguments:<br>**• properties:** `object` |

#### Properties

| Property | Type      | Default value       | Description |
| -------- | --------- | ------------------- | ----------- |
| domain   | `string`  | `location.hostname` | Defines the domain for which the cookie is accessible. By default, it's the current host. Setting it to a parent domain (e.g., example.com for sub.example.com) makes it accessible to subdomains. |
| path     | `string`  | `"./"`              | Specifies the path for which the cookie is valid. The default value is the current path, with an empty value being equivalent to this. Setting "/" makes the cookie accessible across the entire domain. |
| minutes  | `number`  | `525600`            | Specifies the duration, measured in minutes, for the cookie to remain active. The default value is 365 days or one year.
| overssl  | `boolean` | `false`             | If set to `true`, the cookie will only be sent over HTTPS connections. |

#### Methods

| Method    | Return type | Description |
| --------- | ----------- | ----------- |
| set       | `void`      | `set(name, value[, options])`<br><br>Arguments:<br>**• name:** `string` <br>**• value:** `string` <br>**• options:** `object` *optional*<br><br>Add or modify a cookie. |
| get       | `string`    | `get(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Reads the contents of a cookie by its name. |

#### Implementation

HTML head:

```html
<script type="text/javascript" src="./Libraries/WUI/Cookie/WUICookie-0.1.js"></script>
```

JS code:

```js
// Create WUICookie object
const cookie = new WUICookie({
	domain: location.hostname,
	path: "./",
	minutes: 365*24*60,
	overssl: false
});

// Save cookie
cookie.set("test", "value");

// Read cookie
console.log(cookie.get("test"));
```

<a name="wuiHead"></a>

### WUIHead

Version: `0.1`

HTML header manager.

#### Constructor

| Type    | Description |
| ------- | ----------- |
| WUIHead | `WUIHead()` |

#### Properties

Class without properties.

#### Methods

| Method             | Return type | Description |
| ------------------ | ----------- | ----------- |
| setTitle           | `void`      | `setTitle(name)`<br><br>Arguments:<br>**• name:** `string`<br><br>Sets the name of the HTML document using the `<title>` tag. |
| setMetaContent     | `void`      | `setMetaContent(name, content)`<br><br>Arguments:<br>**• name:** `string` <br>**• content:** `string`<br><br>Sets a meta value in the header of the HTML document using the `<meta>` tag.<br>Check specifications and compatibility in [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name). |
| setApplicationName | `void`      | `setApplicationName(content)`<br>Alias of `setMetaContent("application-name", content)`<br><br>Arguments:<br>**• content:** `string`<br><br>Sets the `application-name` meta value in the header of the HTML document. |
| setThemeColor      | `void`      | `setThemeColor(content)`<br>Alias of `setMetaContent("theme-color", content)`<br><br>Arguments:<br>**• content:** `string`<br><br>Sets the `theme-color` meta value in the header of the HTML document.<br>Check specifications and compatibility in [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color). |
| refresh            | `void`       | `refresh()`<br><br>Reloads JS and CSS files called from the `<head>` section of the HTML document, by appending a dynamic get parameter. |

#### Implementation

HTML head:

```html
<title></title>
<meta name="application-name" content="">
<meta name="theme-color" content="">
<script type="text/javascript" src="./Libraries/WUI/Head/WUIHead-0.1.js"></script>
```

JS code:

```js
// Create WUIHead object
const head = new WUIHead();

// Change page title
head.setTitle("Test title");

// Change application name metadata
head.setApplicationName("Test app");

// Change the metadata of the browser's top bar color
head.setThemeColor("#1e90ff");
```

<a name="wuiBody"></a>

### WUIBody

Version: `0.1`

HTML body manager. Allows the import of CSS/JS/HTML content and facilitates implementation in native mobile environments.

#### Constructor

| Type    | Description |
| ------- | ----------- |
| WUIBody | `WUIBody([properties])`<br><br>Arguments:<br>**• properties:** `object` |

#### Properties

| Property        | Type       | Default value | Description |
| --------------- | ---------- | ------------- | ----------- |
| environment     | `string`   | `"web"`       | Web interface deployment environment.<br><br>Values:<br>• `"web"`<br>• `"native.android"`<br>• `"native.ios"` |
| importDirectory | `string`   | `""`          | Relative path of the directory where the subdirectories for content import are hosted. |
| importMode      | `string`   | `"fetch"`     | Content retrieval method for upload.<br><br>Values:<br>• `"fetch"`<br>• `"xhr"`<br><br>When deploying to native environments using WebView for Android or WebKit for iOS, it is recommended to use `"xhr"`. |
| onCompleted     | `function` | `null`        | Function that is executed when all content is imported and loaded into the body of the HTML page. |
| debug           | `boolean`  | `false`       | Test mode. Prints imported content to the console when the property value is `true`. |

#### Methods

| Method  | Return type | Description |
| ------- | ----------- | ----------- |
| import  | `void`      | `import(id, path[, done])`<br><br>Arguments:<br>**• id:** `string`, specifies the id of the HTML element where the content is to be loaded.<br>**• path:** `string`, specifies the subdirectory path and filename of the files with extension `.css`, `.htm` and `.js` that will be imported and loaded.<br>**• done:** `function` *optional*, this function is executed when the content loading has finished.<br><br>Imports CSS/JS/HTML content referenced to an HTML element by its `id`. |
| prepare | `void`      | `prepare()`<br><br>Depending on the value of the `environment` parameter, modifies the HTML elements `a`, `input`, and `select` in the HTML document body to adapt them to native environments. |
| openURL | `void`      | `openURL(url[, download])`<br><br>Arguments:<br><br>**• id:** `string`, specifies the URL that is required to be opened or downloaded.<br>**• download:** `string` *optional*, specifies the name of the file that will be used to download the content referenced by the URL.<br><br>Open or download content using a URL. This method is required in native environments since WebView on Android or WebKit on iOS aren't always supported. |

#### Implementation

HTML head:

```html
<script type="text/javascript" src="./Libraries/WUI/Body/WUIBody-0.1.js"></script>
```

CSS content of the `./Imports/test-content.css` file:

```css
.test a, .test a:visited {
	text-decoration: none;
	font-size: 20px;
	color: blue;
}
```

HTML content of the `./Imports/test-content.htm` file:

```html
<section id="testContent" class="test">
	<a href="https://www.google.com">Google!</a>
</section>
```

JS content of the `./Imports/test-content.js` file:

```js
const testContentLog = (content) => {
	console.log(content);
}
```

HTML code:

```html
<section id="testContent"></section>
```

JS code:

```js
// Create WUIBody object
const body = new WUIBody({
	onCompleted: () => {
		body.prepare();
	}
});

// Import CSS/HTML/JS content from the ./Imports directory
body.import("testContent", "./Imports/test-content", () => {
	testContentLog("test content loaded");
});
```

<a name="wuiLanguage"></a>

### WUILanguage

Version: `0.2`

Language manager for web interfaces. Allows you to load language files in JS or JSON format and dynamically update the content of HTML elements based on the language.

#### Constructor

| Type        | Description |
| ----------- | ----------- |
| WUILanguage | `WUILanguage([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property   | Type       | Default value.    | Description |
| ---------- | ---------- | ----------------- | ----------- |
| selector   | `string`   | `".wui-language"` | CSS selector for HTML elements to be loaded. This can be applied to the `content` attribute of the `meta` element, to the `innerHTML` property of the elements: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `i`, `li`, `a`, `legend`, `label`, `option`, `data`, `button`, and to the `placeholder` attribute of the `input` and `textarea` elements. |
| directory  | `string`   | `"Languages/"`    | Path to the directory where the language files are located. |
| sets       | `array`    | `["main"]`        | List of language set names to load. |
| lang       | `string`   | `"es"`            | Language code in ISO 639-1 format. |
| mode       | `string`   | `"js"`            | Language file format.<br><br>Values:<br>• `"js"`<br>• `"json"` |
| dataKey    | `string`   | `"key"`           | Name of the `data-*` attribute that contains the text key in HTML elements. |
| dataOutput | `string`   | `"text"`          | Name of the `data-*` attribute where the loaded text can be placed. |
| onLoad     | `function` | `null`            | Function that is executed when the language loading has finished. |

#### Methods

| Method | Return type | Description |
| ------ | ----------- | ----------- |
| load   | `void`      | `load([lang[, sets]])`<br><br>Arguments:<br>**• lang:** `string` *optional* (default value the current language)<br>**• sets:** `array` *optional* (default value the current set expressed as an array)<br><br>Loads the language files indicated by language and set, and updates the HTML elements marked with the CSS selector. |

#### Implementation

HTML head:

```html
<script type="text/javascript" src="./Libraries/WUI/Language/WUILanguage-0.2.js"></script>
```

JS code file `main-en.js`:

```js
return {
	titles: {
		test: "Test title"
	},
	texts: {
		test: "Test text"
	}
};
```

> [!IMPORTANT]
> If `js` is used as the format for language files, said file must be initialized by the `return` keyword followed by a `{}` object.

JSON code file `main-en.json`:

```json
{
	"titles": {
		"test": "Test title"
	},
	"texts": {
		"test": "Test text"
	}
}
```

HTML code:

```html
<h1 class="wui-language" data-key="titles.test"></h1>
<div class="wui-language" data-key="texts.test"></div>
```

JS code:

```js
// Create WUILanguage object
const language = new WUILanguage({
    selector: ".wui-language",
    directory: "./Languages/",
    sets: ["main"],
    lang: "en",
    mode: "js",
    dataKey: "key",
    dataOutput: "text",
    onLoad: (...args) => {
		[lang, languages] = args;
        console.log("Language loaded:", lang, languages);
    }
});

// Declaring global variables
let lang = language.lang;
let languages = {};

// Load content from the main-en.js file
language.load(); // Option 1
language.load("en"); // Option 2 (equivalent to option 1)
language.load("en", ["main"]); // Option 3 (equivalent to option 1)
```

> [!IMPORTANT]
> The language file must be in the path `./Languages/main-en.js` or `./Languages/main-en.json` depending on the set, language and mode used. It is important that language files are in the form `{set}-{lang}.{mode}`, otherwise the file cannot be imported.

It is possible to combine sets of files from the same language, for example, if you have a `main-es.js` file and another `main2-es.js` file that complements the first, they can be called simultaneously using the `sets` property.

JS code:

```js
// Option 1: Update the sets property and then reload.
language.sets = ["main", "main2"];
language.load(); 

// Option 2: Reload by passing the combination of sets as a parameter.
language.load("en", ["main", "main2"]);
```

> [!TIP]
> If you want to add dynamic content within a text, It is recommended to use the `js` language file format (`mode: "js"`) and add the text using the string interpolation method, also known as template literals. I.e. ``mykey: `My ${var} text` ``.

<a name="wuiScrolly"></a>

### WUIScrolly

Versión: `0.1`

Tool for animating HTML elements using the "onscroll" event of the HTML page body.

#### Constructor

| Type       | Description |
| ---------- | ----------- |
| WUIScrolly | `WUIScrolly([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

#### Methods

#### Implementation

<a name="wuiIcon"></a>

### WUIIcon

Versión: `0.1`

Set of pre-designed icons loaded via CSS, for use in interfaces.

#### Signals Icon Table

| Icon                                                     | Style                                                     | Icon                                                     | Style                                                     | Icon                                                 | Style                                                         | Icon                                                 | Style                                                          |
| :---:                                                    | :-----                                                    | :---:                                                    | :-----                                                    | :---:                                                | :-----                                                        | :---:                                                | :-----                                                         |
| ![](./src/WUI/Icon/Preview/plus-line.svg)                | .plus-line                                                | ![](./src/WUI/Icon/Preview/plus-lg-line.svg)             | .plus-lg-line                                             | ![](./src/WUI/Icon/Preview/dash-line.svg)            | .dash-line                                                    | ![](./src/WUI/Icon/Preview/dash-lg-line.svg)         | .dash-lg-line                                                  |
| ![](./src/WUI/Icon/Preview/check-line.svg)               | .check-line<br>.successful-line                           | ![](./src/WUI/Icon/Preview/check-lg-line.svg)            | .check-lg-line<br>.successful-lg-line                     | ![](./src/WUI/Icon/Preview/info-line.svg)            | .info-line                                                    | ![](./src/WUI/Icon/Preview/info-lg-line.svg)         | .info-lg-line                                                  |
| ![](./src/WUI/Icon/Preview/question-line.svg)            | .question-line                                            | ![](./src/WUI/Icon/Preview/question-lg-line.svg)         | .question-lg-line                                         | ![](./src/WUI/Icon/Preview/excamation-line.svg)      | .excamation-line<br>.warning-line                             | ![](./src/WUI/Icon/Preview/excamation-lg-line.svg)   | .excamation-lg-line<br>.warning-lg-line                        |
| ![](./src/WUI/Icon/Preview/slash-line.svg)               | .slash-line                                               | ![](./src/WUI/Icon/Preview/slash-lg-line.svg)            | .slash-lg-line                                            | ![](./src/WUI/Icon/Preview/x-line.svg)               | .x-line<br>.close-line<br>.error-line                         | ![](./src/WUI/Icon/Preview/x-lg-line.svg)            | .x-lg-line<br>.close-lg-line<br>.error-lg-line                 |
| ![](./src/WUI/Icon/Preview/filter-line.svg)              | .filter-line                                              | ![](./src/WUI/Icon/Preview/filter-lg-line.svg)           | .filter-lg-line                                           | ![](./src/WUI/Icon/Preview/plus-circle-line.svg)     | .plus-circle-line                                             | ![](./src/WUI/Icon/Preview/plus-circle-fill.svg)     | .plus-circle-fill                                              |
| ![](./src/WUI/Icon/Preview/dash-circle-line.svg)         | .dash-circle-line                                         | ![](./src/WUI/Icon/Preview/dash-circle-fill.svg)         | .dash-circle-fill                                         | ![](./src/WUI/Icon/Preview/check-circle-line.svg)    | .check-circle-line<br>.successful-circle-line                 | ![](./src/WUI/Icon/Preview/check-circle-fill.svg)    | .check-circle-fill<br>.successful-circle-fill                  |
| ![](./src/WUI/Icon/Preview/info-circle-line.svg)         | .info-circle-line                                         | ![](./src/WUI/Icon/Preview/info-circle-fill.svg)         | .info-circle-fill                                         | ![](./src/WUI/Icon/Preview/question-circle-line.svg) | .question-circle-line                                         | ![](./src/WUI/Icon/Preview/question-circle-fill.svg) | .question-circle-fill                                          |
| ![](./src/WUI/Icon/Preview/excamation-circle-line.svg)   | .excamation-circle-line<br>.warning-circle-line           | ![](./src/WUI/Icon/Preview/excamation-circle-fill.svg)   | .excamation-circle-fill<br>.warning-circle-fill           | ![](./src/WUI/Icon/Preview/slash-circle-line.svg)    | .slash-circle-line                                            | ![](./src/WUI/Icon/Preview/slash-circle-fill.svg)    | .slash-circle-fill                                             |
| ![](./src/WUI/Icon/Preview/x-circle-line.svg)            | .x-circle-line<br>.close-circle-line<br>error-circle-line | ![](./src/WUI/Icon/Preview/x-circle-fill.svg)            | .x-circle-fill<br>.close-circle-fill<br>error-circle-fill | ![](./src/WUI/Icon/Preview/filter-circle-line.svg)   | .filter-circle-line                                           | ![](./src/WUI/Icon/Preview/filter-circle-fill.svg)   | .filter-circle-fill                                            |
| ![](./src/WUI/Icon/Preview/excamation-triangle-line.svg) | .excamation-triangle-line<br>.warning-triangle-line       | ![](./src/WUI/Icon/Preview/excamation-triangle-fill.svg) | .excamation-triangle-fill<br>.warning-triangle-fill       | ![](./src/WUI/Icon/Preview/x-octagon-line.svg)       | .x-octagon-line<br>.close-octagon-line<br>.error-octagon-line | ![](./src/WUI/Icon/Preview/x-octagon-fill.svg)       | ..x-octagon-fill<br>.close-octagon-fill<br>.error-octagon-fill |

#### Arrow Icon Table

| Icon                                                          | Style                          | Icon                                                        | Style                        | Icon                                                            | Style                            | Icon                                                          | Style                          |
| :--:                                                          | :----                          | :--:                                                        | :----                        | :--:                                                            | :----                            | :--:                                                          | :----                          |
| ![](./src/WUI/Icon/Preview/arrow-up-line.svg)                 | .arrow-up-line                 | ![](./src/WUI/Icon/Preview/arrow-left-line.svg)             | .arrow-left-line             | ![](./src/WUI/Icon/Preview/arrow-right-line.svg)                | .arrow-right-line                | ![](./src/WUI/Icon/Preview/arrow-down-line.svg)               | .arrow-down-line               |
| ![](./src/WUI/Icon/Preview/arrow-up-lg-line.svg)              | .arrow-up-lg-line              | ![](./src/WUI/Icon/Preview/arrow-left-lg-line.svg)          | .arrow-left-lg-line          | ![](./src/WUI/Icon/Preview/arrow-right-lg-line.svg)             | .arrow-right-lg-line             | ![](./src/WUI/Icon/Preview/arrow-down-lg-line.svg)            | .arrow-down-lg-line            |
| ![](./src/WUI/Icon/Preview/arrow-upleft-lg-line.svg)          | .arrow-upleft-lg-line          | ![](./src/WUI/Icon/Preview/arrow-upright-lg-line.svg)       | .arrow-upright-lg-line       | ![](./src/WUI/Icon/Preview/arrow-downleft-lg-line.svg)          | .arrow-downleft-lg-line          | ![](./src/WUI/Icon/Preview/arrow-downright-lg-line.svg)       | .arrow-downright-lg-line       |
| ![](./src/WUI/Icon/Preview/arrowhead-up-line.svg)             | .arrowhead-up-line             | ![](./src/WUI/Icon/Preview/arrowhead-left-line.svg)         | .arrowhead-left-line         | ![](./src/WUI/Icon/Preview/arrowhead-right-line.svg)            | .arrowhead-right-line            | ![](./src/WUI/Icon/Preview/arrowhead-down-line.svg)           | .arrowhead-down-line           |
| ![](./src/WUI/Icon/Preview/arrowhead-up-lg-line.svg)          | .arrowhead-up-lg-line          | ![](./src/WUI/Icon/Preview/arrowhead-left-lg-line.svg)      | .arrowhead-left-lg-line      | ![](./src/WUI/Icon/Preview/arrowhead-right-lg-line.svg)         | .arrowhead-right-lg-line         | ![](./src/WUI/Icon/Preview/arrowhead-down-lg-line.svg)        | .arrowhead-down-lg-line        |
| ![](./src/WUI/Icon/Preview/arrowhead-up-stg-line.svg)         | .arrowhead-up-stg-line         | ![](./src/WUI/Icon/Preview/arrowhead-left-stg-line.svg)     | .arrowhead-left-stg-line     | ![](./src/WUI/Icon/Preview/arrowhead-right-stg-line.svg)        | .arrowhead-right-stg-line        | ![](./src/WUI/Icon/Preview/arrowhead-down-stg-line.svg)       | .arrowhead-down-stg-line       |
| ![](./src/WUI/Icon/Preview/arrowhead-up-fill.svg)             | .arrowhead-up-fill             | ![](./src/WUI/Icon/Preview/arrowhead-left-fill.svg)         | .arrowhead-left-fill         | ![](./src/WUI/Icon/Preview/arrowhead-right-fill.svg)            | .arrowhead-right-fill            | ![](./src/WUI/Icon/Preview/arrowhead-down-fill.svg)           | .arrowhead-down-fill           |
| ![](./src/WUI/Icon/Preview/arrow-up-circle-line.svg)          | .arrow-up-circle-line          | ![](./src/WUI/Icon/Preview/arrow-left-circle-line.svg)      | .arrow-left-circle-line      | ![](./src/WUI/Icon/Preview/arrow-right-circle-line.svg)         | .arrow-right-circle-line         | ![](./src/WUI/Icon/Preview/arrow-down-circle-line.svg)        | .arrow-down-circle-line        |
| ![](./src/WUI/Icon/Preview/arrow-upleft-circle-line.svg)      | .arrow-upleft-circle-line      | ![](./src/WUI/Icon/Preview/arrow-upright-circle-line.svg)   | .arrow-upright-circle-line   | ![](./src/WUI/Icon/Preview/arrow-downleft-circle-line.svg)      | .arrow-downleft-circle-line      | ![](./src/WUI/Icon/Preview/arrow-downright-circle-line.svg)   | .arrow-downright-circle-line   |
| ![](./src/WUI/Icon/Preview/arrow-up-circle-fill.svg)          | .arrow-up-circle-fill          | ![](./src/WUI/Icon/Preview/arrow-left-circle-fill.svg)      | .arrow-left-circle-fill      | ![](./src/WUI/Icon/Preview/arrow-right-circle-fill.svg)         | .arrow-right-circle-fill         | ![](./src/WUI/Icon/Preview/arrow-down-circle-fill.svg)        | .arrow-down-circle-fill        |
| ![](./src/WUI/Icon/Preview/arrow-upleft-circle-fill.svg)      | .arrow-upleft-circle-fill      | ![](./src/WUI/Icon/Preview/arrow-upright-circle-fill.svg)   | .arrow-upright-circle-fill   | ![](./src/WUI/Icon/Preview/arrow-downleft-circle-fill.svg)      | .arrow-downleft-circle-fill      | ![](./src/WUI/Icon/Preview/arrow-downright-circle-fill.svg)   | .arrow-downright-circle-fill   |
| ![](./src/WUI/Icon/Preview/arrowbar-up-line.svg)              | .arrowbar-up-line              | ![](./src/WUI/Icon/Preview/arrowbar-left-line.svg)          | .arrowbar-left-line          | ![](./src/WUI/Icon/Preview/arrowbar-right-line.svg)             | .arrowbar-right-line             | ![](./src/WUI/Icon/Preview/arrowbar-down-line.svg)            | .arrowbar-down-line            |
| ![](./src/WUI/Icon/Preview/arrows-expand-horizontal-line.svg) | .arrows-expand-horizontal-line | ![](./src/WUI/Icon/Preview/arrows-expand-vertical-line.svg) | .arrows-expand-vertical-line | ![](./src/WUI/Icon/Preview/arrows-collapse-horizontal-line.svg) | .arrows-collapse-horizontal-line | ![](./src/WUI/Icon/Preview/arrows-collapse-vertical-line.svg) | .arrows-collapse-vertical-line |
| ![](./src/WUI/Icon/Preview/arrows-horizontal-line.svg)        | .arrows-horizontal-line        | ![](./src/WUI/Icon/Preview/arrows-vertical-line.svg)        | .arrows-vertical-line        | ![](./src/WUI/Icon/Preview/arrows-expand-diagonal-line.svg)     | .arrows-expand-diagonal-line     | ![](./src/WUI/Icon/Preview/arrows-collapse-diagonal-line.svg) | .arrows-collapse-diagonal-line |
| ![](./src/WUI/Icon/Preview/arrowbox-out-up-line.svg)          | .arrowbox-out-up-line          | ![](./src/WUI/Icon/Preview/arrowbox-out-left-line.svg)      | .arrowbox-out-left-line      | ![](./src/WUI/Icon/Preview/arrowbox-out-right-line.svg)         | .arrowbox-out-right-line         | ![](./src/WUI/Icon/Preview/arrowbox-out-down-line.svg)        | .arrowbox-out-down-line        |
| ![](./src/WUI/Icon/Preview/arrowbox-out-upleft-line.svg)      | .arrowbox-out-upleft-line      | ![](./src/WUI/Icon/Preview/arrowbox-out-upright-line.svg)   | .arrowbox-out-upright-line   | ![](./src/WUI/Icon/Preview/arrowbox-out-downleft-line.svg)      | .arrowbox-out-downleft-line      | ![](./src/WUI/Icon/Preview/arrowbox-out-downright-line.svg)   | .arrowbox-out-downright-line   |
| ![](./src/WUI/Icon/Preview/arrowbox-in-up-line.svg)           | .arrowbox-in-up-line           | ![](./src/WUI/Icon/Preview/arrowbox-in-left-line.svg)       | .arrowbox-in-left-line       | ![](./src/WUI/Icon/Preview/arrowbox-in-right-line.svg)          | .arrowbox-in-right-line          | ![](./src/WUI/Icon/Preview/arrowbox-in-down-line.svg)         | .arrowbox-in-down-line         |
| ![](./src/WUI/Icon/Preview/arrowbox-in-upleft-line.svg)       | .arrowbox-in-upleft-line       | ![](./src/WUI/Icon/Preview/arrowbox-in-upright-line.svg)    | .arrowbox-in-upright-line    | ![](./src/WUI/Icon/Preview/arrowbox-in-downleft-line.svg)       | .arrowbox-in-downleft-line       | ![](./src/WUI/Icon/Preview/arrowbox-in-downright-line.svg)    | .arrowbox-in-downright-line    |

#### Number Icon Table

| Icon                                             | Style             | Icon                                             | Style             | Icon                                             | Style             | Icon                                             | Style             |
| :--:                                             | :----             | :--:                                             | :----             | :--:                                             | :----             | :--:                                             | :----             |
| ![](./src/WUI/Icon/Preview/num0-circle-line.svg) | .num0-circle-line | ![](./src/WUI/Icon/Preview/num0-circle-fill.svg) | .num0-circle-fill | ![](./src/WUI/Icon/Preview/num1-circle-line.svg) | .num1-circle-line | ![](./src/WUI/Icon/Preview/num1-circle-fill.svg) | .num1-circle-fill |
| ![](./src/WUI/Icon/Preview/num2-circle-line.svg) | .num2-circle-line | ![](./src/WUI/Icon/Preview/num2-circle-fill.svg) | .num2-circle-fill | ![](./src/WUI/Icon/Preview/num3-circle-line.svg) | .num3-circle-line | ![](./src/WUI/Icon/Preview/num3-circle-fill.svg) | .num3-circle-fill |
| ![](./src/WUI/Icon/Preview/num4-circle-line.svg) | .num4-circle-line | ![](./src/WUI/Icon/Preview/num4-circle-fill.svg) | .num4-circle-fill | ![](./src/WUI/Icon/Preview/num5-circle-line.svg) | .num5-circle-line | ![](./src/WUI/Icon/Preview/num5-circle-fill.svg) | .num5-circle-fill |
| ![](./src/WUI/Icon/Preview/num6-circle-line.svg) | .num6-circle-line | ![](./src/WUI/Icon/Preview/num6-circle-fill.svg) | .num6-circle-fill | ![](./src/WUI/Icon/Preview/num7-circle-line.svg) | .num7-circle-line | ![](./src/WUI/Icon/Preview/num7-circle-fill.svg) | .num7-circle-fill |
| ![](./src/WUI/Icon/Preview/num8-circle-line.svg) | .num8-circle-line | ![](./src/WUI/Icon/Preview/num8-circle-fill.svg) | .num8-circle-fill | ![](./src/WUI/Icon/Preview/num9-circle-line.svg) | .num9-circle-line | ![](./src/WUI/Icon/Preview/num9-circle-fill.svg) | .num9-circle-fill |

#### Person Icon Table

| Icon                                               | Style               | Icon                                               | Style               | Icon                                                | Style                | Icon                                                | Style                |
| :--:                                               | :----               | :--:                                               | :----               | :--:                                                | :----                | :--:                                                | :----                |
| ![](./src/WUI/Icon/Preview/man-fill.svg)           | .man-fill           | ![](./src/WUI/Icon/Preview/woman-fill.svg)         | .woman-fill         | ![](./src/WUI/Icon/Preview/person-line.svg)         | .person-line         | ![](./src/WUI/Icon/Preview/person-fill.svg)         | .person-fill         |
| ![](./src/WUI/Icon/Preview/person-plus-line.svg)   | .person-plus-line   | ![](./src/WUI/Icon/Preview/person-plus-fill.svg)   | .person-plus-fill   | ![](./src/WUI/Icon/Preview/person-dash-line.svg)    | .person-dash-line    | ![](./src/WUI/Icon/Preview/person-dash-fill.svg)    | .person-dash-fill    |
| ![](./src/WUI/Icon/Preview/person-check-line.svg)  | .person-check-line  | ![](./src/WUI/Icon/Preview/person-check-fill.svg)  | .person-check-fill  | ![](./src/WUI/Icon/Preview/person-x-line.svg)       | .person-x-line       | ![](./src/WUI/Icon/Preview/person-x-fill.svg)       | .person-x-fill       |
| ![](./src/WUI/Icon/Preview/people-line.svg)        | .people-line        | ![](./src/WUI/Icon/Preview/people-fill.svg)        | .people-fill        | ![](./src/WUI/Icon/Preview/person-contact-line.svg) | .person-contact-line | ![](./src/WUI/Icon/Preview/person-contact-fill.svg) | .person-contact-fill |
| ![](./src/WUI/Icon/Preview/person-card-line.svg)   | .person-card-line   | ![](./src/WUI/Icon/Preview/person-card-fill.svg)   | .person-card-fill   | ![](./src/WUI/Icon/Preview/person-names-line.svg)   | .person-names-line   | ![](./src/WUI/Icon/Preview/person-names-fill.svg)   | .person-names-fill   |
| ![](./src/WUI/Icon/Preview/person-circle-line.svg) | .person-circle-line | ![](./src/WUI/Icon/Preview/person-circle-fill.svg) | .person-circle-fill | ![](./src/WUI/Icon/Preview/user-line.svg)           | .user-line           |                                                     |                      |

#### File Icon Table

| Icon                                              | Style              | Icon                                              | Style              | Icon                                               | Style               | Icon                                               | Style               |
| :--:                                              | :----              | :--:                                              | :----              | :--:                                               | :----               | :--:                                               | :----               |
| ![](./src/WUI/Icon/Preview/folder-close-line.svg) | .folder-close-line | ![](./src/WUI/Icon/Preview/folder-close-fill.svg) | .folder-close-fill | ![](./src/WUI/Icon/Preview/folder-open-line.svg)   | .folder-open-line   | ![](./src/WUI/Icon/Preview/folder-open-fill.svg)   | .folder-open-fill   |
| ![](./src/WUI/Icon/Preview/file-line.svg)         | .file-line         | ![](./src/WUI/Icon/Preview/file-fill.svg)         | .file-fill         | ![](./src/WUI/Icon/Preview/file-barchart-line.svg) | .file-barchart-line | ![](./src/WUI/Icon/Preview/file-barchart-fill.svg) | .file-barchart-fill |
| ![](./src/WUI/Icon/Preview/file-check-line.svg)   | .file-check-line   | ![](./src/WUI/Icon/Preview/file-check-fill.svg)   | .file-check-fill   | ![](./src/WUI/Icon/Preview/file-pdf-line.svg)      | .file-pdf-line      | ![](./src/WUI/Icon/Preview/file-pdf-fill.svg)      | .file-pdf-fill      |
| ![](./src/WUI/Icon/Preview/file-image-line.svg)   | .file-image-line    | ![](./src/WUI/Icon/Preview/file-image-fill.svg)  | .file-image-fill   | ![](./src/WUI/Icon/Preview/file-text-line.svg)     | .file-text-line     | ![](./src/WUI/Icon/Preview/file-text-fill.svg)     | .file-text-fill     |
| ![](./src/WUI/Icon/Preview/file-upload-line.svg)  | .file-upload-line  | ![](./src/WUI/Icon/Preview/file-upload-fill.svg)  | .file-upload-fill  | ![](./src/WUI/Icon/Preview/file-zip-line.svg)      | .file-zip-line      | ![](./src/WUI/Icon/Preview/file-zip-fill.svg)      | .file-zip-fill      |

#### Control Icon Table

| Icon                                                 | Style                 | Icon                                                 | Style                 | Icon                                                | Style                | Icon                                                | Style                |
| :--:                                                 | :----                 | :--:                                                 | :----                 | :--:                                                | :----                | :--:                                                | :----                |
| ![](./src/WUI/Icon/Preview/calendar-line.svg)        | .calendar-line        | ![](./src/WUI/Icon/Preview/calendar-fill.svg)        | .calendar-fill        | ![](./src/WUI/Icon/Preview/calendar-day-line.svg)   | .calendar-day-line   | ![](./src/WUI/Icon/Preview/calendar-day-fill.svg)   | .calendar-day-fill   |
| ![](./src/WUI/Icon/Preview/calendar-week-line.svg)   | .calendar-week-line   | ![](./src/WUI/Icon/Preview/calendar-week-fill.svg)   | .calendar-week-fill   | ![](./src/WUI/Icon/Preview/calendar-range-line.svg) | .calendar-range-line | ![](./src/WUI/Icon/Preview/calendar-range-fill.svg) | .calendar-range-fill |
| ![](./src/WUI/Icon/Preview/clipboard-check-line.svg) | .clipboard-check-line | ![](./src/WUI/Icon/Preview/clipboard-check-fill.svg) | .clipboard-check-fill | ![](./src/WUI/Icon/Preview/clipboard-data-line.svg) | .clipboard-data-line | ![](./src/WUI/Icon/Preview/clipboard-data-fill.svg) | .clipboard-data-fill |
| ![](./src/WUI/Icon/Preview/bookmark-line.svg)        | .bookmark-line        | ![](./src/WUI/Icon/Preview/bookmark-fill.svg)        | .bookmark-fill        | ![](./src/WUI/Icon/Preview/bookmarks-line.svg)      | .bookmarks-line      | ![](./src/WUI/Icon/Preview/bookmarks-fill.svg)      | .bookmarks-fill      |
| ![](./src/WUI/Icon/Preview/bookmark-check-line.svg)  | .bookmark-check-line  | ![](./src/WUI/Icon/Preview/bookmark-check-fill.svg)  | .bookmark-check-fill  | ![](./src/WUI/Icon/Preview/bookmark-x-line.svg)     | .bookmark-x-line     | ![](./src/WUI/Icon/Preview/bookmark-x-fill.svg)     | .bookmark-x-fill     |

#### Protection Icons Table

| Icon                                                | Style              | Icon                                              | Style              | Icon                                                | Style                | Icon                                                | Style                |
| :--:                                                | :----              | :--:                                              | :----              | :--:                                                | :----                | :--:                                                | :----                |
| ![](./src/WUI/Icon/Preview/shield-check-line.svg)   | .shield-check-line | ![](./src/WUI/Icon/Preview/shield-check-fill.svg) | .shield-check-fill | ![](./src/WUI/Icon/Preview/shield-lock-line.svg)    | .shield-lock-line    | ![](./src/WUI/Icon/Preview/shield-lock-fill.svg)    | .shield-lock-fill    |
| ![](./src/WUI/Icon/Preview/patch-check-line.svg)    | .patch-check-line  | ![](./src/WUI/Icon/Preview/patch-check-fill.svg)  | .patch-check-fill  | ![](./src/WUI/Icon/Preview/patch-question-line.svg) | .patch-question-line | ![](./src/WUI/Icon/Preview/patch-question-fill.svg) | .patch-question-fill |

#### Communication Icons Table

| Icon                                                 | Style                 | Icon                                                 | Style                 | Icon                                                | Style                | Icon                                                | Style                |
| :--:                                                 | :----                 | :--:                                                 | :----                 | :--:                                                | :----                | :--:                                                | :----                |
| ![](./src/WUI/Icon/Preview/phone-line.svg)           | .phone-line           | ![](./src/WUI/Icon/Preview/phone-fill.svg)           | .phone-fill           | ![](./src/WUI/Icon/Preview/phonebook-line.svg)      | .phonebook-line      | ![](./src/WUI/Icon/Preview/phonebook-fill.svg)      | .phonebook-fill      |
| ![](./src/WUI/Icon/Preview/mail-close-line.svg)      | .mail-close-line      | ![](./src/WUI/Icon/Preview/mail-close-fill.svg)      | .mail-close-fill      | ![](./src/WUI/Icon/Preview/chat-dots-line.svg)      | .chat-dots-line      | ![](./src/WUI/Icon/Preview/chat-dots-fill.svg)      | .chat-dots-fill      |
| ![](./src/WUI/Icon/Preview/chat-left-quote-line.svg) | .chat-left-quote-line | ![](./src/WUI/Icon/Preview/chat-left-quote-fill.svg) | .chat-left-quote-fill | ![](./src/WUI/Icon/Preview/chat-left-text-line.svg) | .chat-left-text-line | ![](./src/WUI/Icon/Preview/chat-left-text-fill.svg) | .chat-left-text-fill |
| ![](./src/WUI/Icon/Preview/emoji-neutral-line.svg)   | .emoji-neutral-line   | ![](./src/WUI/Icon/Preview/emoji-neutral-fill.svg)   | .emoji-neutral-fill   | ![](./src/WUI/Icon/Preview/emoji-smile-line.svg)    | .emoji-smile-line    | ![](./src/WUI/Icon/Preview/emoji-smile-fill.svg)    | .emoji-smile-fill    |
| ![](./src/WUI/Icon/Preview/emoji-frown-line.svg)     | .emoji-frown-line     | ![](./src/WUI/Icon/Preview/emoji-frown-fill.svg)     | .emoji-frown-fill     | ![](./src/WUI/Icon/Preview/emoji-surprise-line.svg) | .emoji-surprise-line | ![](./src/WUI/Icon/Preview/emoji-surprise-fill.svg) | .emoji-surprise-fill |

#### Cloud Icon Table

| Icon                                              | Style              | Icon                                              | Style              | Icon                                                | Style                | Icon                                                | Style                |
| :--:                                              | :----              | :--:                                              | :----              | :--:                                                | :----                | :--:                                                | :----                |
| ![](./src/WUI/Icon/Preview/cloud-line.svg)        | .cloud-line        | ![](./src/WUI/Icon/Preview/cloud-fill.svg)        | .cloud-fill        | ![](./src/WUI/Icon/Preview/cloud-slash-line.svg)    | .cloud-slash-line    | ![](./src/WUI/Icon/Preview/cloud-slash-fill.svg)    | .cloud-slash-fill    |
| ![](./src/WUI/Icon/Preview/cloud-upload-line.svg) | .cloud-upload-line | ![](./src/WUI/Icon/Preview/cloud-upload-fill.svg) | .cloud-upload-fill | ![](./src/WUI/Icon/Preview/cloud-download-line.svg) | .cloud-download-line | ![](./src/WUI/Icon/Preview/cloud-download-fill.svg) | .cloud-download-fill |

#### Map Icon Table

| Icon                                               | Style               | Icon                                                 | Style                 | Icon                                            | Style            |
| :--:                                               | :----               | :--:                                                 | :----                 | :--:                                            | :----            |
| ![](./src/WUI/Icon/Preview/map-line.svg)           | .map-line           | ![](./src/WUI/Icon/Preview/map-fill.svg)             | .map-fill             |                                                 |                  |
| ![](./src/WUI/Icon/Preview/map-alt-line.svg)       | .map-alt-line       | ![](./src/WUI/Icon/Preview/map-alt-fill.svg)         | .map-alt-fill         |                                                 |                  |
| ![](./src/WUI/Icon/Preview/mapmarker-line.svg)     | .mapmarker-line     | ![](./src/WUI/Icon/Preview/mapmarker-fill.svg)       | .mapmarker-fill       | ![](./src/WUI/Icon/Preview/mapmarker-color.svg) | .mapmarker-color |
| ![](./src/WUI/Icon/Preview/mappin-line.svg)        | .mappin-line        | ![](./src/WUI/Icon/Preview/mappin-fill.svg)          | .mappin-fill          | ![](./src/WUI/Icon/Preview/mappin-color.svg)    | .mappin-color    |
| ![](./src/WUI/Icon/Preview/mappointer-line.svg)    | .mappointer-line    | ![](./src/WUI/Icon/Preview/mappointer-fill.svg)      | .mappointer-fill      |                                                 |                  |
| ![](./src/WUI/Icon/Preview/mapchart-line.svg)      | .mapchart-line      | ![](./src/WUI/Icon/Preview/mapchart-fill.svg)        | .mapchart-fill        |                                                 |                  |
| ![](./src/WUI/Icon/Preview/globe-line.svg)         | .globe-line         | ![](./src/WUI/Icon/Preview/globe-alt-line.svg)       | .globe-alt-line       |                                                 |                  |
| ![](./src/WUI/Icon/Preview/globe-america-fill.svg) | .globe-america-fill | ![](./src/WUI/Icon/Preview/globe-africa-fill.svg)    | .globe-africa-fill    |                                                 |                  |
| ![](./src/WUI/Icon/Preview/globe-asia-fill.svg)    | .globe-asia-fill    | ![](./src/WUI/Icon/Preview/globe-australia-fill.svg) | .globe-australia-fill |                                                 |                  |
| ![](./src/WUI/Icon/Preview/h-circle-line.svg)      | .h-circle-line      | ![](./src/WUI/Icon/Preview/h-circle-fill.svg)        | .h-circle-fill        |                                                 |                  |
| ![](./src/WUI/Icon/Preview/highway-66-fill.svg)    | .highway-66-fill    | ![](./src/WUI/Icon/Preview/highway-75-fill.svg)      | .highway-75-fill      | ![](./src/WUI/Icon/Preview/highway-94-fill.svg) | .highway-94-fill |

#### Device Icon Table

| Icon                                             | Style             | Icon                                             | Style             | Icon                                          | Style          | Icon                                            | Style            |
| :--:                                             | :----             | :--:                                             | :----             | :--:                                          | :----          | :--:                                            | :----            |
| ![](./src/WUI/Icon/Preview/devices-line.svg)     | .devices-line     | ![](./src/WUI/Icon/Preview/laptop-line.svg)      | .laptop-line      | ![](./src/WUI/Icon/Preview/mobile-line.svg)   | .mobile-line   | ![](./src/WUI/Icon/Preview/mobile-alt-line.svg) | .mobile-alt-line |
| ![](./src/WUI/Icon/Preview/mobile-apps-line.svg) | .mobile-apps-line | ![](./src/WUI/Icon/Preview/mobile-apps-fill.svg) | .mobile-apps-fill | ![](./src/WUI/Icon/Preview/computer-line.svg) | .computer-line | ![](./src/WUI/Icon/Preview/camera-fill.svg)     | .camera-fill     |

#### Brand Icon Table

| Icon                                         | Style         | Icon                                       | Style       | Icon                                        | Style        |
| :--:                                         | :----         | :--:                                       | :----       | :--:                                        | :----        |
| ![](./src/WUI/Icon/Preview/android-fill.svg) | .android-fill | ![](./src/WUI/Icon/Preview/apple-fill.svg) | .apple-fill | ![](./src/WUI/Icon/Preview/huawei-fill.svg) | .huawei-fill |

#### Apps Icons Table

| Icon                                              | Style              | Icon                                                  | Style                  | Icon                                               | Style               | Icon                                                | Style                |
| :--:                                              | :----              | :--:                                                  | :----                  | :--:                                               | :----               | :--:                                                | :----                |
| ![](./src/WUI/Icon/Preview/app-line.svg)          | .app-line          | ![](./src/WUI/Icon/Preview/app-notification-line.svg) | .app-notification-line | ![](./src/WUI/Icon/Preview/applemail-fill.svg)     | .applemail-fill     | ![](./src/WUI/Icon/Preview/applemail-color.svg)     | .applemail-color     |
| ![](./src/WUI/Icon/Preview/appstore-fill.svg)     | .appstore-fill     | ![](./src/WUI/Icon/Preview/appstore-color.svg)        | .appstore-color        | ![](./src/WUI/Icon/Preview/appstore-alt-fill.svg)  | .appstore-alt-fill  | ![](./src/WUI/Icon/Preview/appstore-alt-color.svg)  | .appstore-alt-color  |
| ![](./src/WUI/Icon/Preview/bcardy-fill.svg)       | .bcardy-fill       | ![](./src/WUI/Icon/Preview/bcardy-color.svg)          | .bcardy-color          | ![](./src/WUI/Icon/Preview/behance-fill.svg)       | .behance-fill       | ![](./src/WUI/Icon/Preview/behance-color.svg)       | .behance-color       |
| ![](./src/WUI/Icon/Preview/facebook-fill.svg)     | .facebook-fill     | ![](./src/WUI/Icon/Preview/facebook-color.svg)        | .facebook-color        | ![](./src/WUI/Icon/Preview/facebook-alt-fill.svg)  | .facebook-alt-fill  | ![](./src/WUI/Icon/Preview/facebook-alt-color.svg)  | .facebook-alt-color  |
| ![](./src/WUI/Icon/Preview/github-fill.svg)       | .github-fill       | ![](./src/WUI/Icon/Preview/github-color.svg)          | .github-color          | ![](./src/WUI/Icon/Preview/gmail-fill.svg)         | .gmail-fill         | ![](./src/WUI/Icon/Preview/gmail-color.svg)         | .gmail-color         |
| ![](./src/WUI/Icon/Preview/googlemaps-fill.svg)   | .googlemaps-fill   | ![](./src/WUI/Icon/Preview/googlemaps-color.svg)      | .googlemaps-color      | ![](./src/WUI/Icon/Preview/googleplay-fill.svg)    | .googleplay-fill    | ![](./src/WUI/Icon/Preview/googleplay-color.svg)    | .googleplay-color    |
| ![](./src/WUI/Icon/Preview/instagram-fill.svg)    | .instagram-fill    | ![](./src/WUI/Icon/Preview/instagram-color.svg)       | .instagram-color       | ![](./src/WUI/Icon/Preview/instagram-alt-fill.svg) | .instagram-alt-fill | ![](./src/WUI/Icon/Preview/instagram-alt-color.svg) | .instagram-alt-color |
| ![](./src/WUI/Icon/Preview/line-fill.svg)         | .line-fill         | ![](./src/WUI/Icon/Preview/line-color.svg)            | .line-color            | ![](./src/WUI/Icon/Preview/line-alt-fill.svg)      | .line-alt-fill      | ![](./src/WUI/Icon/Preview/line-alt-color.svg)      | .line-alt-color      |
| ![](./src/WUI/Icon/Preview/linkedin-fill.svg)     | .linkedin-fill     | ![](./src/WUI/Icon/Preview/linkedin-color.svg)        | .linkedin-color        | ![](./src/WUI/Icon/Preview/linkedin-alt-fill.svg)  | .linkedin-alt-fill  | ![](./src/WUI/Icon/Preview/linkedin-alt-color.svg)  | .linkedin-alt-color  |
| ![](./src/WUI/Icon/Preview/messenger-fill.svg)    | .messenger-fill    | ![](./src/WUI/Icon/Preview/messenger-color.svg)       | .messenger-color       | ![](./src/WUI/Icon/Preview/outlook-fill.svg)       | .outlook-fill       | ![](./src/WUI/Icon/Preview/outlook-color.svg)       | .outlook-color       |
| ![](./src/WUI/Icon/Preview/pdf-fill.svg)          | .pdf-fill          | ![](./src/WUI/Icon/Preview/pdf-color.svg)             | .pdf-color             | ![](./src/WUI/Icon/Preview/samsungemail-fill.svg)  | .samsungemail-fill  | ![](./src/WUI/Icon/Preview/samsungemail-color.svg)  | .samsungemail-color  |
| ![](./src/WUI/Icon/Preview/skype-fill.svg)        | .skype-fill        | ![](./src/WUI/Icon/Preview/skype-color.svg)           | .skype-color           | ![](./src/WUI/Icon/Preview/telegram-fill.svg)      | .telegram-fill      | ![](./src/WUI/Icon/Preview/telegram-color.svg)      | .telegram-color      |
| ![](./src/WUI/Icon/Preview/telegram-alt-fill.svg) | .telegram-alt-fill | ![](./src/WUI/Icon/Preview/telegram-alt-color.svg)    | .telegram-alt-color    | ![](./src/WUI/Icon/Preview/tiktok-fill.svg)        | .tiktok-fill        | ![](./src/WUI/Icon/Preview/tiktok-color.svg)        | .tiktok-color        |
| ![](./src/WUI/Icon/Preview/twitter-fill.svg)      | .twitter-fill      | ![](./src/WUI/Icon/Preview/twitter-color.svg)         | .twitter-color         | ![](./src/WUI/Icon/Preview/twitter-alt-fill.svg)   | .twitter-alt-fill   | ![](./src/WUI/Icon/Preview/twitter-alt-color.svg)   | .twitter-alt-color   |
| ![](./src/WUI/Icon/Preview/twitter-x-fill.svg)    | .twitter-x-fill    | ![](./src/WUI/Icon/Preview/twitter-x-color.svg)       | .twitter-x-color       | ![](./src/WUI/Icon/Preview/vimeo-fill.svg)         | .vimeo-fill         | ![](./src/WUI/Icon/Preview/vimeo-color.svg)         | .vimeo-color         |
| ![](./src/WUI/Icon/Preview/vimeo-alt-fill.svg)    | .vimeo-alt-fill    | ![](./src/WUI/Icon/Preview/vimeo-alt-color.svg)       | .vimeo-alt-color       | ![](./src/WUI/Icon/Preview/yahoo-fill.svg)         | .yahoo-fill         | ![](./src/WUI/Icon/Preview/yahoo-color.svg)         | .yahoo-color         |
| ![](./src/WUI/Icon/Preview/yahoo-alt-fill.svg)    | .yahoo-alt-fill    | ![](./src/WUI/Icon/Preview/yahoo-alt-color.svg)       | .yahoo-alt-color       | ![](./src/WUI/Icon/Preview/youtube-fill.svg)       | .youtube-fill       | ![](./src/WUI/Icon/Preview/youtube-color.svg)       | .youtube-color       |
| ![](./src/WUI/Icon/Preview/whatsapp-fill.svg)     | .whatsapp-fill     | ![](./src/WUI/Icon/Preview/whatsapp-color.svg)        | .whatsapp-color        | ![](./src/WUI/Icon/Preview/whatsapp-alt-fill.svg)  | .whatsapp-alt-fill  | ![](./src/WUI/Icon/Preview/whatsapp-alt-color.svg)  | .whatsapp-alt-color  |

#### Options Icon Table

| Icon                                             | Style             | Icon                                             | Style             | Icon                                            | Style            | Icon                                            | Style            |
| :--:                                             | :----             | :--:                                             | :----             | :--:                                            | :----            | :--:                                            | :----            |
| ![](./src/WUI/Icon/Preview/at-line.svg)          | .at-line          | ![](./src/WUI/Icon/Preview/at-lg-line.svg)       | .at-lg-line       | ![](./src/WUI/Icon/Preview/award-line.svg)      | .award-line      | ![](./src/WUI/Icon/Preview/award-fill.svg)      | .award-fill      |
| ![](./src/WUI/Icon/Preview/basket-line.svg)      | .basket-line      | ![](./src/WUI/Icon/Preview/basket-fill.svg)      | .basket-fill      | ![](./src/WUI/Icon/Preview/bell-line.svg)       | .bell-line       | ![](./src/WUI/Icon/Preview/bell-fill.svg)       | .bell-fill       |
| ![](./src/WUI/Icon/Preview/bluetooth-line.svg)   | .bluetooth-line   | ![](./src/WUI/Icon/Preview/bluetooth-fill.svg)   | .bluetooth-fill   | ![](./src/WUI/Icon/Preview/bug-line.svg)        | .bug-line        | ![](./src/WUI/Icon/Preview/bug-fill.svg)        | .bug-fill        |
| ![](./src/WUI/Icon/Preview/cash-line.svg)        | .cash-line        | ![](./src/WUI/Icon/Preview/cash-alt-fill.svg)    | .cash-alt-fill    | ![](./src/WUI/Icon/Preview/circle-line.svg)     | .circle-line     | ![](./src/WUI/Icon/Preview/circle-fill.svg)     | .circle-fill     |
| ![](./src/WUI/Icon/Preview/contacts-line.svg)    | .contacts-line    | ![](./src/WUI/Icon/Preview/contacts-fill.svg)    | .contacts-fill    | ![](./src/WUI/Icon/Preview/copy-link-line.svg)  | .copy-link-line  | ![](./src/WUI/Icon/Preview/copy-link-fill.svg)  | .copy-link-fill  |
| ![](./src/WUI/Icon/Preview/easel-line.svg)       | .easel-line       | ![](./src/WUI/Icon/Preview/easel-fill.svg)       | .easel-fill       | ![](./src/WUI/Icon/Preview/eye-line.svg)        | .eye-line        | ![](./src/WUI/Icon/Preview/eye-fill.svg)        | .eye-fill        |
| ![](./src/WUI/Icon/Preview/eye-slash-line.svg)   | .eye-slash-line   | ![](./src/WUI/Icon/Preview/eye-slash-fill.svg)   | .eye-slash-fill   | ![](./src/WUI/Icon/Preview/flag-line.svg)       | .flag-line       | ![](./src/WUI/Icon/Preview/flag-fill.svg)       | .flag-fill       |
| ![](./src/WUI/Icon/Preview/floppy-line.svg)      | .floppy-line      | ![](./src/WUI/Icon/Preview/floppy-fill.svg)      | .floppy-fill      | ![](./src/WUI/Icon/Preview/gear-line.svg)       | .gear-line       | ![](./src/WUI/Icon/Preview/gear-fill.svg)       | .gear-fill       |
| ![](./src/WUI/Icon/Preview/gears-line.svg)       | .gears-line       | ![](./src/WUI/Icon/Preview/gears-fill.svg)       | .gears-fill       | ![](./src/WUI/Icon/Preview/grid3x2-line.svg)    | .grid3x2-line    | ![](./src/WUI/Icon/Preview/grid3x3-line.svg)    | .grid3x3-line    |
| ![](./src/WUI/Icon/Preview/health-line.svg)      | .health-line      | ![](./src/WUI/Icon/Preview/health-fill.svg)      | .health-fill      | ![](./src/WUI/Icon/Preview/home-line.svg)       | .home-line       | ![](./src/WUI/Icon/Preview/home-fill.svg)       | .home-fill       |
| ![](./src/WUI/Icon/Preview/image-line.svg)       | .image-line       | ![](./src/WUI/Icon/Preview/image-fill.svg)       | .image-fill       | ![](./src/WUI/Icon/Preview/image-alt-line.svg)  | .image-alt-line  | ![](./src/WUI/Icon/Preview/images-line.svg)     | .images-line     |
| ![](./src/WUI/Icon/Preview/key-line.svg)         | .key-line         | ![](./src/WUI/Icon/Preview/key-fill.svg)         | .key-fill         | ![](./src/WUI/Icon/Preview/keyboard-line.svg)   | .keyboard-line   | ![](./src/WUI/Icon/Preview/keyboard-fill.svg)   | .keyboard-fill   |
| ![](./src/WUI/Icon/Preview/layers-line.svg)      | .layers-line      | ![](./src/WUI/Icon/Preview/layers-fill.svg)      | .layers-fill      | ![](./src/WUI/Icon/Preview/lightbulb-line.svg)  | .lightbulb-line  | ![](./src/WUI/Icon/Preview/lightbulb-fill.svg)  | .lightbulb-fill  |
| ![](./src/WUI/Icon/Preview/lock-line.svg)        | .lock-line        | ![](./src/WUI/Icon/Preview/lock-fill.svg)        | .lock-fill        | ![](./src/WUI/Icon/Preview/mailbox-line.svg)    | .mailbox-line    | ![](./src/WUI/Icon/Preview/mailbox-fill.svg)    | .mailbox-fill    |
| ![](./src/WUI/Icon/Preview/mortarboard-line.svg) | .mortarboard-line | ![](./src/WUI/Icon/Preview/mortarboard-fill.svg) | .mortarboard-fill | ![](./src/WUI/Icon/Preview/piechart-line.svg)   | .piechart-line   | ![](./src/WUI/Icon/Preview/piechart-fill.svg)   | .piechart-fill   |
| ![](./src/WUI/Icon/Preview/palette-line.svg)     | .palette-line     | ![](./src/WUI/Icon/Preview/palette-fill.svg)     | .palette-fill     | ![](./src/WUI/Icon/Preview/pen-line.svg)        | .pen-line        | ![](./src/WUI/Icon/Preview/pen-fill.svg)        | .pen-fill        |
| ![](./src/WUI/Icon/Preview/pencil-line.svg)      | .pencil-line      | ![](./src/WUI/Icon/Preview/pencil-fill.svg)      | .pencil-fill      | ![](./src/WUI/Icon/Preview/pin-line.svg)        | .pin-line        | ![](./src/WUI/Icon/Preview/pin-fill.svg)        | .pin-fill        |
| ![](./src/WUI/Icon/Preview/plant-line.svg)       | .plant-line       | ![](./src/WUI/Icon/Preview/plant-fill.svg)       | .plant-fill       | ![](./src/WUI/Icon/Preview/play-line.svg)       | .play-line       | ![](./src/WUI/Icon/Preview/play-fill.svg)       | .play-fill       |
| ![](./src/WUI/Icon/Preview/play-circle-line.svg) | .play-circle-line | ![](./src/WUI/Icon/Preview/play-circle-fill.svg) | .play-circle-fill | ![](./src/WUI/Icon/Preview/send-line.svg)       | .send-line       | ![](./src/WUI/Icon/Preview/send-fill.svg)       | .send-fill       |
| ![](./src/WUI/Icon/Preview/separationh-line.svg) | .separationh-line | ![](./src/WUI/Icon/Preview/separationv-line.svg) | .separationv-line | ![](./src/WUI/Icon/Preview/share-line.svg)      | .share-line      | ![](./src/WUI/Icon/Preview/share-fill.svg)      | .share-fill      |
| ![](./src/WUI/Icon/Preview/shop-line.svg)        | .shop-line        | ![](./src/WUI/Icon/Preview/shop-alt-fill.svg)    | .shop-alt-fill    | ![](./src/WUI/Icon/Preview/signpost-line.svg)   | .signpost-line   | ![](./src/WUI/Icon/Preview/signpost-fill.svg)   | .signpost-fill   |
| ![](./src/WUI/Icon/Preview/sim-line.svg)         | .sim-line         | ![](./src/WUI/Icon/Preview/sim-fill.svg)         | .sim-fill         | ![](./src/WUI/Icon/Preview/star-line.svg)       | .star-line       | ![](./src/WUI/Icon/Preview/star-fill.svg)       | .star-fill       |
| ![](./src/WUI/Icon/Preview/star-circle-line.svg) | .star-circle-line | ![](./src/WUI/Icon/Preview/star-circle-fill.svg) | .star-circle-fill | ![](./src/WUI/Icon/Preview/stoplights-line.svg) | .stoplights-line | ![](./src/WUI/Icon/Preview/stoplights-fill.svg) | .stoplights-fill |
| ![](./src/WUI/Icon/Preview/time-line.svg)        | .time-line        | ![](./src/WUI/Icon/Preview/time-fill.svg)        | .time-fill        | ![](./src/WUI/Icon/Preview/trash-line.svg)      | .trash-line      | ![](./src/WUI/Icon/Preview/trash-fill.svg)      | .trash-fill      |
| ![](./src/WUI/Icon/Preview/trophy-line.svg)      | .trophy-line      | ![](./src/WUI/Icon/Preview/trophy-fill.svg)      | .trophy-fill      | ![](./src/WUI/Icon/Preview/unlock-line.svg)     | .unlock-line     | ![](./src/WUI/Icon/Preview/unlock-fill.svg)     | .unlock-fill     |
| ![](./src/WUI/Icon/Preview/wallet-line.svg)      | .wallet-line      | ![](./src/WUI/Icon/Preview/wallet-fill.svg)      | .wallet-fill      | ![](./src/WUI/Icon/Preview/wifi-on-line.svg)    | .wifi-on-line    | ![](./src/WUI/Icon/Preview/wifi-off-line.svg)   | .wifi-off-line   |
| ![](./src/WUI/Icon/Preview/window-app-line.svg)  | .window-app-line  | ![](./src/WUI/Icon/Preview/window-app-fill.svg)  | .window-app-fill  | ![](./src/WUI/Icon/Preview/zoomin-line.svg)     | .zoomin-line     | ![](./src/WUI/Icon/Preview/zoomout-line.svg)    | .zoomout-line    |

#### Composer Icon Table

| Icon                                                   | Style                   | Icon                                                    | Style                    | Icon                                             | Style             | Icon                                              | Style              |
| :--:                                                   | :----                   | :--:                                                    | :----                    | :--:                                             | :----             | :--:                                              | :----              |
| ![](./src/WUI/Icon/Preview/doublequotes-left-fill.svg) | .doublequotes-left-fill | ![](./src/WUI/Icon/Preview/doublequotes-right-fill.svg) | .doublequotes-right-fill | ![](./src/WUI/Icon/Preview/indent-left-line.svg) | .indent-left-line | ![](./src/WUI/Icon/Preview/indent-right-line.svg) | .indent-right-line |
| ![](./src/WUI/Icon/Preview/link-line.svg)              | .link-line              | ![](./src/WUI/Icon/Preview/link-alt-line.svg)           | .link-alt-line           | ![](./src/WUI/Icon/Preview/list-check-line.svg)  | .list-check-line  | ![](./src/WUI/Icon/Preview/list-number-line.svg)  | .list-number-line  |
| ![](./src/WUI/Icon/Preview/list-stars-line.svg)        | .list-stars-line        | ![](./src/WUI/Icon/Preview/list-unorderd-line.svg)      | .list-unorderd-line      | ![](./src/WUI/Icon/Preview/textleft-line.svg)    | .textleft-line    | ![](./src/WUI/Icon/Preview/textright-line.svg)    | .textright-line    |

#### Other Icons Table

| Icon                                               | Style               | Icon                                                  | Style                  | Icon                                            | Style            | Icon                                                  | Style                  |
| :--:                                               | :----               | :--:                                                  | :----                  | :--:                                            | :----            | :--:                                                  | :----                  |
| ![](./src/WUI/Icon/Preview/ai-fill.svg)            | .ai-fill            | ![](./src/WUI/Icon/Preview/bullseye-line.svg)         | .bullseye-line         | ![](./src/WUI/Icon/Preview/columnsgap-line.svg) | .columnsgap-line | ![](./src/WUI/Icon/Preview/dart-fill.svg)             | .dart-fill             |
| ![](./src/WUI/Icon/Preview/datasheet-line.svg)     | .datasheet-line     | ![](./src/WUI/Icon/Preview/datasheet-health-line.svg) | .datasheet-health-line | ![](./src/WUI/Icon/Preview/hash-line.svg)       | .hash-line       | ![](./src/WUI/Icon/Preview/headphones-line.svg)       | .headphones-line       |
| ![](./src/WUI/Icon/Preview/headset-line.svg)       | .headset-line       | ![](./src/WUI/Icon/Preview/logout-line.svg)           | .logout-line           | ![](./src/WUI/Icon/Preview/medal-line.svg)      | .medal-line      | ![](./src/WUI/Icon/Preview/menu-line.svg)             | .menu-line             |
| ![](./src/WUI/Icon/Preview/pencil-square-fill.svg) | .pencil-square-fill | ![](./src/WUI/Icon/Preview/polygon-editable-line.svg) | .polygon-editable-line | ![](./src/WUI/Icon/Preview/qr-line.svg)         | .qr-line         | ![](./src/WUI/Icon/Preview/qr-scan-line.svg)          | .qr-scan-line          |
| ![](./src/WUI/Icon/Preview/quote-fill.svg)         | .quote-fill         | ![](./src/WUI/Icon/Preview/rotate-line.svg)           | .rotate-line           | ![](./src/WUI/Icon/Preview/search-line.svg)     | .search-line     | ![](./src/WUI/Icon/Preview/speedometer-line.svg)      | .speedometer-line      |
| ![](./src/WUI/Icon/Preview/translate-fill.svg)     | .translate-fill     | ![](./src/WUI/Icon/Preview/web-line.svg)              | .web-line              | ![](./src/WUI/Icon/Preview/universal-line.svg)  | .universal-line  | ![](./src/WUI/Icon/Preview/universal-circle-line.svg) | .universal-circle-line |

#### Animated Icons Table

| Icon                                                    | Style                    | Icon                                                   | Style                   | Icon                                                       | Style                       |
| :--:                                                    | :----                    | :--:                                                   | :----                   | :--:                                                       | :----                       |
| ![](./src/WUI/Icon/Preview/animation-loarder-comet.svg) | .animation-loarder-comet | ![](./src/WUI/Icon/Preview/animation-loarder-ring.svg) | .animation-loarder-ring | ![](./src/WUI/Icon/Preview/animation-loarder-ringpath.svg) | .animation-loarder-ringpath |

#### Implementation

HTML head:

```html
<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Icon/WUIIcon-0.1.css">
```

CSS code:

```css
.my-icon {
	width: 24px;
	height: 24px;
	background-color: dodgerblue;
}
```

HTML code:

```html
<div class="my-icon wui-icon patch-check-fill"></div>
```

<a name="wuiFade"></a>

### WUIFade

Versión: `0.1`

Tool for fading out and fading in HTML elements with opacity.

#### Constructor

Static class without constructor.

#### Properties

Static class with no object properties.

#### Methods

##### Static methods of the `WUIFade` class:

One way to use the library is by calling static methods directly on the `WUIFade` class:

| Method | Return type | Description |
| -------| ----------- | ----------- |
| in     | `void`      | `in(element[, options])`<br><br>Arguments:<br>**• element:** `HTMLElement` <br>**• options:** `object` *optional*<br><br>Execute the fadein transition. |
| out    | `void`      | `out(element[, options])`<br><br>Arguments:<br>**• element:** `HTMLElement` <br>**• options:** `object` *optional*<br><br>Execute the fadeout transition. |

##### Extended methods of the `HTMLElement` class:

Another alternative way is through extended methods of the `HTMLElement` class through its prototype:

| Method.    | Return type | Description |
| -----------| ----------- | ----------- |
| wuiFadein  | `void`      | `wuiFadein([options])`<br><br>Arguments:<br>**• options:** `object` *optional*<br><br>Execute the fadein transition. |
| wuiFadeout | `void`      | `wuiFadeout([options])`<br><br>Arguments:<br>**• options:** `object` *optional*<br><br>Execute the fadeout transition. |

> [!IMPORTANT]
> Each method call mode is performed on different types of classes, the first is signaled on `WUIFade`, while the second on `HTMLElement`.

##### Options

| Option  | Type      | Default value | Description |
| ------- | --------- | ------------- | ----------- |
| delay   | `number`  | `400`         | Defines the time it will take for the transition effect  in and out, measured in milliseconds. |
| display | `string`  | `"block"`     | Sets the value of the CSS `display` property of the HTML element on which the transition effect is executed, once the incoming transition ends. |
| force   | `boolean` | `false`       | Both the entrance and exit effects are executed as long as the CSS `display` property is different from `options.display` and `none`, respectively. The `force` option ignores this validation. |

#### Implementation

HTML head:

```html
<script type="text/javascript" src="./Libraries/WUI/Fade/WUIFade-0.1.js"></script>
```

CSS code:

```CSS
.element {
	display: none;
	width: 24px;
	height: 24px;
	margin: 10px;
	backgroind-color: red;
}
```

HTML code:

```html
<div id="myElement1" class="element"></div>
<div id="myElement2" class="element"></div>
```

JS code:
```js
// Options
const options = {
	display: "block",
	delay: 200
};

// WUIFade mode
const element1 = document.getElementById("myElement1");
WUIFade.in(element1, options);

// HTMLElement mode
const element2 = document.getElementById("myElement2");
element2.wuiFadein(options);
```