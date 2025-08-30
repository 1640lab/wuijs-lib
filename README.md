# wuijs-lib

Library version: `0.2.0`

Document version: `0.2.0.20250830.1-e` (e: in edition, c: complete)

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
	*   WUITooltip
	*   WUILoader
	*   WUIModal
	*   WUIModalSelector
	*   WUISlider
	*   WUIPaging
	*   WUITabs
	*   WUIList
	*   WUITable
	*   WUIForm
	*   WUIFormat
	*   WUISelectpicker
	*   WUIDatepicker
	*   WUITimepicker
	*   WUIColorpicker
	*   WUICheckbox
	*   WUIIntensity
	*   WUIButton

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
| refresh            | `void`      | `refresh()`<br><br>Reloads JS and CSS files called from the `<head>` section of the HTML document, by appending a dynamic get parameter. |

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
| onCompleted     | `function` | `null`        | Function that is called when all content is imported and loaded into the body of the HTML page. |
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

| Property   | Type       | Default value     | Description |
| ---------- | ---------- | ----------------- | ----------- |
| selector   | `string`   | `".wui-language"` | CSS selector for HTML elements to be loaded. This can be applied to the `content` attribute of the `meta` element, to the `innerHTML` property of the elements: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `i`, `li`, `a`, `legend`, `label`, `option`, `data`, `button`, and to the `placeholder` attribute of the `input` and `textarea` elements. |
| directory  | `string`   | `"Languages/"`    | Path to the directory where the language files are located. |
| sets       | `array`    | `["main"]`        | List of language set names to load. |
| lang       | `string`   | `"es"`            | Language code in ISO 639-1 format. |
| mode       | `string`   | `"js"`            | Language file format.<br><br>Values:<br>• `"js"`<br>• `"json"` |
| dataKey    | `string`   | `"key"`           | Name of the `data-*` attribute that contains the text key in HTML elements. |
| dataOutput | `string`   | `"text"`          | Name of the `data-*` attribute where the loaded text can be placed. |
| onLoad     | `function` | `null`            | Function that is called when the language loading has finished. |

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

| Property    | Type       | Default value | Description |
| ----------- | ---------- | ------------- | ----------- |
| sections    | `array`    | `[]`          | List of objects with the configuration of the sections that will be incorporated into the animation, as defined in **Section Properties**. |
| behavior    | `string`   | `"smooth"`    | Behavior for moving focus to the body of the HTML page.<br><br>Values:<br>• `"auto"`<br>• `"smooth"` |
| dataScrollY | `string`   | `"scrollY"`   | Name of the `data-*` attribute of the main document element (`<html>` / `document.documentElement`) that contains the numeric value measured in pixels of the total vertical scrolling of the HTML page, where `0` represents the top of the document (or no movement). |
| dataDelay   | `string`   | `"delay"`     | Name of the `data-*` attribute that determines the time, measured in milliseconds, that it takes for an HTML element animated using CSS styles to animate once it is given focus. |
| onStart     | `function` | `null`        | Function that is called when the scroll movement starts, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| onMove      | `function` | `null`        | Function that is called when the scroll movement is executed, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| onStop      | `function` | `null`        | Function that is called when the scroll movement ends, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| debug       | `boolean`  | `false`       | Test mode. Prints to the console the `selector` and `height` values ​​of the scenes added in the startup instance, and `scrollY`, `y`, `index`, `sceneIndex`, `step`, `sceneStep`, and `progress` when they change. Enabled when the property value is `true`. |

#### Section Properties

| Property  | Type       | Default value | Description |
| --------- | ---------- | ------------- | ----------- |
| selector  | `string`   | `undefined`   | CSS selector that defines the HTML element to be included as a section. If more than one element matches the selector, only the first match will be included. *oblogatory* |
| target    | `string`   | `undefined`   | Auxiliary name for referencing the section. Used in the `goSection()` method. |
| type      | `string`   | `"auto"`      | Defines the CSS behavior of the section height.<br><br>Values:<br>• `"auto"`<br>• `"static"` |
| height    | `number`   | `undefined`   | Defines the height of the section, this can be expressed as a number associated with pixels or in a CSS compatible format. |
| steps     | `number`   | `undefined`   | Total number of steps defined in the `animation` animation function. |
| pages     | `number`   | `undefined`   | Total number of pages defined in the `animation` animation function. |
| animation | `function` | `undefined`   | `function(step, progress)`<br><br>Arguments:<br>**• step:** `number`, value between `0` and `pages - 1` <br>**• progress:** `number`, value between `0` and `1` <br><br>Function that is called when the scroll movement is executed in a section. |

#### Methods

| Method     | Return type | Description |
| ---------- | ----------- | ----------- |
| init       | `void`      | `init()`<br><br>Initializes the object once the sections you want to animate have been added. |
| stop       | `void`      | `stop()`<br><br>Interrupts the animation in its execution cycle. |
| addSection | `void`      | `addSection({section_properties})`<br><br>Adds a new section configuration to the object's section list, as defined in **Section Properties:**. |
| goSection  | `void`      | `goSection(target[, done[, behavior]])`<br><br>Arguments:<br>**• target:** `string` <br>**• done:** `function` <br>**• behavior:** `string` <br><br>Moves the focus of the HTML page to the section specified by the `target` parameter. |
| selectPage | `void`      | `selectPage(sectionIndex, pageIndex)`<br><br>Arguments:<br>**• sectionIndex:** `number`, values ​​from `0` <br>**• pageIndex:** `number`, value between `0` and `pages - 1` <br><br>Moves the focus of the HTML page to the section specified by the `sectionIndex` parameter and advances to the `pageIndex` page in that section. |
| drawCenter | `void`      | `drawCenter()`<br><br>Draws the center of the visible part of the HTML page in the browser. |
| drawRuler  | `void`      | `drawRuler()`<br><br>Draws a vertical ruler with pixel measurements, on the left side of the HTML page. |

#### Estilos CSS para Animación

| Style         | Description |
| ------------- | ----------- |
| .fadein       | Enter and exits with opacity without movement. |
| .fadein-up    | Enter and exits with opacity from above. |
| .fadein-left  | Enter and exit with opacity from the left. |
| .fadein-right | Enter and exit with opacity from the right. |

#### Implementation

There are two ways to implement the animation library, the simplest is through CSS animation tags, the second is through programming JS animation functions that are loaded in specific sections of the HTML page.

HTML head:

```html
<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Scrolly/WUIScrolly-0.1.css">
<script type="text/javascript" src="./Libraries/WUI/Scrolly/WUIScrolly-0.1.js"></script>
```

CSS code:

```css
.my-section {
	width: 100%;
	margin: 10px 0;
	background-color: lightgray;
}
.my-element {
	width: 50px;
	height: 50px;
	pargin: 20px;
	background-color: dodgerblue;
}
```

HTML code:

```html
<!-- CSS animation -->
<section id="section1" class="my-section">
	<div class="my-element fadein-left"></div>
	<div class="my-element fadein-top" data-delay="200"></div>
	<div class="my-element fadein-right" data-delay="400"></div>
</section>

<!-- JS animation -->
<section id="section2" class="my-section">
	<div class="scene">
		<div class="animation"></div>
	</div>
</section>

<!-- JS animation with pagination -->
<section id="section3" class="my-section">
	<div class="scene">
		<div class="animation"></div>
	</div>
	<div class="paging dots"></div>
</section>
```

JS code:

```js
// Create WUIScrolly object
const scrolly = new WUIScrolly({
	behavior: "smooth",
	dataScrollY: "scrollY",
	dataDelay: "delay",
	onStart: null,
	onMove: null,
	onStop: null,
	debug: true
});

// Add sections with JS animation
scrolly.addSection({
	selector: "#section2"
});
scrolly.addSection({
	selector: "#section3"
});

// Initialize object
scrolly.init();
```

<a name="wuiIcon"></a>

### WUIIcon

Versión: `0.1`

Set of pre-designed icons loaded via CSS, for use in interfaces.

#### Signals Icon Table

| Icon                                             | Style                                                     | Icon                                             | Style                                                     | Icon                                         | Style                                                         | Icon                                         | Style                                                          |
| :---:                                            | -----                                                     | :---:                                            | -----                                                     | :---:                                        | -----                                                         | :---:                                        | -----                                                          |
| ![](./imgs/Preview/plus-line.svg)                | .plus-line                                                | ![](./imgs/Preview/plus-lg-line.svg)             | .plus-lg-line                                             | ![](./imgs/Preview/dash-line.svg)            | .dash-line                                                    | ![](./imgs/Preview/dash-lg-line.svg)         | .dash-lg-line                                                  |
| ![](./imgs/Preview/check-line.svg)               | .check-line<br>.successful-line                           | ![](./imgs/Preview/check-lg-line.svg)            | .check-lg-line<br>.successful-lg-line                     | ![](./imgs/Preview/info-line.svg)            | .info-line                                                    | ![](./imgs/Preview/info-lg-line.svg)         | .info-lg-line                                                  |
| ![](./imgs/Preview/question-line.svg)            | .question-line                                            | ![](./imgs/Preview/question-lg-line.svg)         | .question-lg-line                                         | ![](./imgs/Preview/excamation-line.svg)      | .excamation-line<br>.warning-line                             | ![](./imgs/Preview/excamation-lg-line.svg)   | .excamation-lg-line<br>.warning-lg-line                        |
| ![](./imgs/Preview/slash-line.svg)               | .slash-line                                               | ![](./imgs/Preview/slash-lg-line.svg)            | .slash-lg-line                                            | ![](./imgs/Preview/x-line.svg)               | .x-line<br>.close-line<br>.error-line                         | ![](./imgs/Preview/x-lg-line.svg)            | .x-lg-line<br>.close-lg-line<br>.error-lg-line                 |
| ![](./imgs/Preview/filter-line.svg)              | .filter-line                                              | ![](./imgs/Preview/filter-lg-line.svg)           | .filter-lg-line                                           | ![](./imgs/Preview/plus-circle-line.svg)     | .plus-circle-line                                             | ![](./imgs/Preview/plus-circle-fill.svg)     | .plus-circle-fill                                              |
| ![](./imgs/Preview/dash-circle-line.svg)         | .dash-circle-line                                         | ![](./imgs/Preview/dash-circle-fill.svg)         | .dash-circle-fill                                         | ![](./imgs/Preview/check-circle-line.svg)    | .check-circle-line<br>.successful-circle-line                 | ![](./imgs/Preview/check-circle-fill.svg)    | .check-circle-fill<br>.successful-circle-fill                  |
| ![](./imgs/Preview/info-circle-line.svg)         | .info-circle-line                                         | ![](./imgs/Preview/info-circle-fill.svg)         | .info-circle-fill                                         | ![](./imgs/Preview/question-circle-line.svg) | .question-circle-line                                         | ![](./imgs/Preview/question-circle-fill.svg) | .question-circle-fill                                          |
| ![](./imgs/Preview/excamation-circle-line.svg)   | .excamation-circle-line<br>.warning-circle-line           | ![](./imgs/Preview/excamation-circle-fill.svg)   | .excamation-circle-fill<br>.warning-circle-fill           | ![](./imgs/Preview/slash-circle-line.svg)    | .slash-circle-line                                            | ![](./imgs/Preview/slash-circle-fill.svg)    | .slash-circle-fill                                             |
| ![](./imgs/Preview/x-circle-line.svg)            | .x-circle-line<br>.close-circle-line<br>error-circle-line | ![](./imgs/Preview/x-circle-fill.svg)            | .x-circle-fill<br>.close-circle-fill<br>error-circle-fill | ![](./imgs/Preview/filter-circle-line.svg)   | .filter-circle-line                                           | ![](./imgs/Preview/filter-circle-fill.svg)   | .filter-circle-fill                                            |
| ![](./imgs/Preview/excamation-triangle-line.svg) | .excamation-triangle-line<br>.warning-triangle-line       | ![](./imgs/Preview/excamation-triangle-fill.svg) | .excamation-triangle-fill<br>.warning-triangle-fill       | ![](./imgs/Preview/x-octagon-line.svg)       | .x-octagon-line<br>.close-octagon-line<br>.error-octagon-line | ![](./imgs/Preview/x-octagon-fill.svg)       | ..x-octagon-fill<br>.close-octagon-fill<br>.error-octagon-fill |

#### Arrow Icon Table

| Icon                                                  | Style                          | Icon                                                | Style                        | Icon                                                    | Style                            | Icon                                                  | Style                          |
| :--:                                                  | -----                          | :--:                                                | -----                        | :--:                                                    | -----                            | :--:                                                  | -----                          |
| ![](./imgs/Preview/arrow-up-line.svg)                 | .arrow-up-line                 | ![](./imgs/Preview/arrow-left-line.svg)             | .arrow-left-line             | ![](./imgs/Preview/arrow-right-line.svg)                | .arrow-right-line                | ![](./imgs/Preview/arrow-down-line.svg)               | .arrow-down-line               |
| ![](./imgs/Preview/arrow-up-lg-line.svg)              | .arrow-up-lg-line              | ![](./imgs/Preview/arrow-left-lg-line.svg)          | .arrow-left-lg-line          | ![](./imgs/Preview/arrow-right-lg-line.svg)             | .arrow-right-lg-line             | ![](./imgs/Preview/arrow-down-lg-line.svg)            | .arrow-down-lg-line            |
| ![](./imgs/Preview/arrow-upleft-lg-line.svg)          | .arrow-upleft-lg-line          | ![](./imgs/Preview/arrow-upright-lg-line.svg)       | .arrow-upright-lg-line       | ![](./imgs/Preview/arrow-downleft-lg-line.svg)          | .arrow-downleft-lg-line          | ![](./imgs/Preview/arrow-downright-lg-line.svg)       | .arrow-downright-lg-line       |
| ![](./imgs/Preview/arrowhead-up-line.svg)             | .arrowhead-up-line             | ![](./imgs/Preview/arrowhead-left-line.svg)         | .arrowhead-left-line         | ![](./imgs/Preview/arrowhead-right-line.svg)            | .arrowhead-right-line            | ![](./imgs/Preview/arrowhead-down-line.svg)           | .arrowhead-down-line           |
| ![](./imgs/Preview/arrowhead-up-lg-line.svg)          | .arrowhead-up-lg-line          | ![](./imgs/Preview/arrowhead-left-lg-line.svg)      | .arrowhead-left-lg-line      | ![](./imgs/Preview/arrowhead-right-lg-line.svg)         | .arrowhead-right-lg-line         | ![](./imgs/Preview/arrowhead-down-lg-line.svg)        | .arrowhead-down-lg-line        |
| ![](./imgs/Preview/arrowhead-up-stg-line.svg)         | .arrowhead-up-stg-line         | ![](./imgs/Preview/arrowhead-left-stg-line.svg)     | .arrowhead-left-stg-line     | ![](./imgs/Preview/arrowhead-right-stg-line.svg)        | .arrowhead-right-stg-line        | ![](./imgs/Preview/arrowhead-down-stg-line.svg)       | .arrowhead-down-stg-line       |
| ![](./imgs/Preview/arrowhead-up-fill.svg)             | .arrowhead-up-fill             | ![](./imgs/Preview/arrowhead-left-fill.svg)         | .arrowhead-left-fill         | ![](./imgs/Preview/arrowhead-right-fill.svg)            | .arrowhead-right-fill            | ![](./imgs/Preview/arrowhead-down-fill.svg)           | .arrowhead-down-fill           |
| ![](./imgs/Preview/arrow-up-circle-line.svg)          | .arrow-up-circle-line          | ![](./imgs/Preview/arrow-left-circle-line.svg)      | .arrow-left-circle-line      | ![](./imgs/Preview/arrow-right-circle-line.svg)         | .arrow-right-circle-line         | ![](./imgs/Preview/arrow-down-circle-line.svg)        | .arrow-down-circle-line        |
| ![](./imgs/Preview/arrow-upleft-circle-line.svg)      | .arrow-upleft-circle-line      | ![](./imgs/Preview/arrow-upright-circle-line.svg)   | .arrow-upright-circle-line   | ![](./imgs/Preview/arrow-downleft-circle-line.svg)      | .arrow-downleft-circle-line      | ![](./imgs/Preview/arrow-downright-circle-line.svg)   | .arrow-downright-circle-line   |
| ![](./imgs/Preview/arrow-up-circle-fill.svg)          | .arrow-up-circle-fill          | ![](./imgs/Preview/arrow-left-circle-fill.svg)      | .arrow-left-circle-fill      | ![](./imgs/Preview/arrow-right-circle-fill.svg)         | .arrow-right-circle-fill         | ![](./imgs/Preview/arrow-down-circle-fill.svg)        | .arrow-down-circle-fill        |
| ![](./imgs/Preview/arrow-upleft-circle-fill.svg)      | .arrow-upleft-circle-fill      | ![](./imgs/Preview/arrow-upright-circle-fill.svg)   | .arrow-upright-circle-fill   | ![](./imgs/Preview/arrow-downleft-circle-fill.svg)      | .arrow-downleft-circle-fill      | ![](./imgs/Preview/arrow-downright-circle-fill.svg)   | .arrow-downright-circle-fill   |
| ![](./imgs/Preview/arrowbar-up-line.svg)              | .arrowbar-up-line              | ![](./imgs/Preview/arrowbar-left-line.svg)          | .arrowbar-left-line          | ![](./imgs/Preview/arrowbar-right-line.svg)             | .arrowbar-right-line             | ![](./imgs/Preview/arrowbar-down-line.svg)            | .arrowbar-down-line            |
| ![](./imgs/Preview/arrows-expand-horizontal-line.svg) | .arrows-expand-horizontal-line | ![](./imgs/Preview/arrows-expand-vertical-line.svg) | .arrows-expand-vertical-line | ![](./imgs/Preview/arrows-collapse-horizontal-line.svg) | .arrows-collapse-horizontal-line | ![](./imgs/Preview/arrows-collapse-vertical-line.svg) | .arrows-collapse-vertical-line |
| ![](./imgs/Preview/arrows-horizontal-line.svg)        | .arrows-horizontal-line        | ![](./imgs/Preview/arrows-vertical-line.svg)        | .arrows-vertical-line        | ![](./imgs/Preview/arrows-expand-diagonal-line.svg)     | .arrows-expand-diagonal-line     | ![](./imgs/Preview/arrows-collapse-diagonal-line.svg) | .arrows-collapse-diagonal-line |
| ![](./imgs/Preview/arrowbox-out-up-line.svg)          | .arrowbox-out-up-line          | ![](./imgs/Preview/arrowbox-out-left-line.svg)      | .arrowbox-out-left-line      | ![](./imgs/Preview/arrowbox-out-right-line.svg)         | .arrowbox-out-right-line         | ![](./imgs/Preview/arrowbox-out-down-line.svg)        | .arrowbox-out-down-line        |
| ![](./imgs/Preview/arrowbox-out-upleft-line.svg)      | .arrowbox-out-upleft-line      | ![](./imgs/Preview/arrowbox-out-upright-line.svg)   | .arrowbox-out-upright-line   | ![](./imgs/Preview/arrowbox-out-downleft-line.svg)      | .arrowbox-out-downleft-line      | ![](./imgs/Preview/arrowbox-out-downright-line.svg)   | .arrowbox-out-downright-line   |
| ![](./imgs/Preview/arrowbox-in-up-line.svg)           | .arrowbox-in-up-line           | ![](./imgs/Preview/arrowbox-in-left-line.svg)       | .arrowbox-in-left-line       | ![](./imgs/Preview/arrowbox-in-right-line.svg)          | .arrowbox-in-right-line          | ![](./imgs/Preview/arrowbox-in-down-line.svg)         | .arrowbox-in-down-line         |
| ![](./imgs/Preview/arrowbox-in-upleft-line.svg)       | .arrowbox-in-upleft-line       | ![](./imgs/Preview/arrowbox-in-upright-line.svg)    | .arrowbox-in-upright-line    | ![](./imgs/Preview/arrowbox-in-downleft-line.svg)       | .arrowbox-in-downleft-line       | ![](./imgs/Preview/arrowbox-in-downright-line.svg)    | .arrowbox-in-downright-line    |

#### Number Icon Table

| Icon                                     | Style             | Icon                                     | Style             | Icon                                     | Style             | Icon                                     | Style             |
| :--:                                     | -----             | :--:                                     | -----             | :--:                                     | -----             | :--:                                     | -----             |
| ![](./imgs/Preview/num0-circle-line.svg) | .num0-circle-line | ![](./imgs/Preview/num0-circle-fill.svg) | .num0-circle-fill | ![](./imgs/Preview/num1-circle-line.svg) | .num1-circle-line | ![](./imgs/Preview/num1-circle-fill.svg) | .num1-circle-fill |
| ![](./imgs/Preview/num2-circle-line.svg) | .num2-circle-line | ![](./imgs/Preview/num2-circle-fill.svg) | .num2-circle-fill | ![](./imgs/Preview/num3-circle-line.svg) | .num3-circle-line | ![](./imgs/Preview/num3-circle-fill.svg) | .num3-circle-fill |
| ![](./imgs/Preview/num4-circle-line.svg) | .num4-circle-line | ![](./imgs/Preview/num4-circle-fill.svg) | .num4-circle-fill | ![](./imgs/Preview/num5-circle-line.svg) | .num5-circle-line | ![](./imgs/Preview/num5-circle-fill.svg) | .num5-circle-fill |
| ![](./imgs/Preview/num6-circle-line.svg) | .num6-circle-line | ![](./imgs/Preview/num6-circle-fill.svg) | .num6-circle-fill | ![](./imgs/Preview/num7-circle-line.svg) | .num7-circle-line | ![](./imgs/Preview/num7-circle-fill.svg) | .num7-circle-fill |
| ![](./imgs/Preview/num8-circle-line.svg) | .num8-circle-line | ![](./imgs/Preview/num8-circle-fill.svg) | .num8-circle-fill | ![](./imgs/Preview/num9-circle-line.svg) | .num9-circle-line | ![](./imgs/Preview/num9-circle-fill.svg) | .num9-circle-fill |

#### Person Icon Table

| Icon                                       | Style               | Icon                                       | Style               | Icon                                        | Style                | Icon                                        | Style                |
| :--:                                       | -----               | :--:                                       | -----               | :--:                                        | -----                | :--:                                        | -----                |
| ![](./imgs/Preview/man-fill.svg)           | .man-fill           | ![](./imgs/Preview/woman-fill.svg)         | .woman-fill         | ![](./imgs/Preview/person-line.svg)         | .person-line         | ![](./imgs/Preview/person-fill.svg)         | .person-fill         |
| ![](./imgs/Preview/person-plus-line.svg)   | .person-plus-line   | ![](./imgs/Preview/person-plus-fill.svg)   | .person-plus-fill   | ![](./imgs/Preview/person-dash-line.svg)    | .person-dash-line    | ![](./imgs/Preview/person-dash-fill.svg)    | .person-dash-fill    |
| ![](./imgs/Preview/person-check-line.svg)  | .person-check-line  | ![](./imgs/Preview/person-check-fill.svg)  | .person-check-fill  | ![](./imgs/Preview/person-x-line.svg)       | .person-x-line       | ![](./imgs/Preview/person-x-fill.svg)       | .person-x-fill       |
| ![](./imgs/Preview/people-line.svg)        | .people-line        | ![](./imgs/Preview/people-fill.svg)        | .people-fill        | ![](./imgs/Preview/person-contact-line.svg) | .person-contact-line | ![](./imgs/Preview/person-contact-fill.svg) | .person-contact-fill |
| ![](./imgs/Preview/person-card-line.svg)   | .person-card-line   | ![](./imgs/Preview/person-card-fill.svg)   | .person-card-fill   | ![](./imgs/Preview/person-names-line.svg)   | .person-names-line   | ![](./imgs/Preview/person-names-fill.svg)   | .person-names-fill   |
| ![](./imgs/Preview/person-circle-line.svg) | .person-circle-line | ![](./imgs/Preview/person-circle-fill.svg) | .person-circle-fill | ![](./imgs/Preview/user-line.svg)           | .user-line           |                                                     |                      |

#### File Icon Table

| Icon                                      | Style              | Icon                                      | Style              | Icon                                       | Style               | Icon                                       | Style               |
| :--:                                      | -----              | :--:                                      | -----              | :--:                                       | -----               | :--:                                       | -----               |
| ![](./imgs/Preview/folder-close-line.svg) | .folder-close-line | ![](./imgs/Preview/folder-close-fill.svg) | .folder-close-fill | ![](./imgs/Preview/folder-open-line.svg)   | .folder-open-line   | ![](./imgs/Preview/folder-open-fill.svg)   | .folder-open-fill   |
| ![](./imgs/Preview/file-line.svg)         | .file-line         | ![](./imgs/Preview/file-fill.svg)         | .file-fill         | ![](./imgs/Preview/file-barchart-line.svg) | .file-barchart-line | ![](./imgs/Preview/file-barchart-fill.svg) | .file-barchart-fill |
| ![](./imgs/Preview/file-check-line.svg)   | .file-check-line   | ![](./imgs/Preview/file-check-fill.svg)   | .file-check-fill   | ![](./imgs/Preview/file-pdf-line.svg)      | .file-pdf-line      | ![](./imgs/Preview/file-pdf-fill.svg)      | .file-pdf-fill      |
| ![](./imgs/Preview/file-image-line.svg)   | .file-image-line    | ![](./imgs/Preview/file-image-fill.svg)  | .file-image-fill   | ![](./imgs/Preview/file-text-line.svg)     | .file-text-line     | ![](./imgs/Preview/file-text-fill.svg)     | .file-text-fill     |
| ![](./imgs/Preview/file-upload-line.svg)  | .file-upload-line  | ![](./imgs/Preview/file-upload-fill.svg)  | .file-upload-fill  | ![](./imgs/Preview/file-zip-line.svg)      | .file-zip-line      | ![](./imgs/Preview/file-zip-fill.svg)      | .file-zip-fill      |

#### Control Icon Table

| Icon                                         | Style                 | Icon                                         | Style                 | Icon                                        | Style                | Icon                                        | Style                |
| :--:                                         | -----                 | :--:                                         | -----                 | :--:                                        | -----                | :--:                                        | -----                |
| ![](./imgs/Preview/calendar-line.svg)        | .calendar-line        | ![](./imgs/Preview/calendar-fill.svg)        | .calendar-fill        | ![](./imgs/Preview/calendar-day-line.svg)   | .calendar-day-line   | ![](./imgs/Preview/calendar-day-fill.svg)   | .calendar-day-fill   |
| ![](./imgs/Preview/calendar-week-line.svg)   | .calendar-week-line   | ![](./imgs/Preview/calendar-week-fill.svg)   | .calendar-week-fill   | ![](./imgs/Preview/calendar-range-line.svg) | .calendar-range-line | ![](./imgs/Preview/calendar-range-fill.svg) | .calendar-range-fill |
| ![](./imgs/Preview/clipboard-check-line.svg) | .clipboard-check-line | ![](./imgs/Preview/clipboard-check-fill.svg) | .clipboard-check-fill | ![](./imgs/Preview/clipboard-data-line.svg) | .clipboard-data-line | ![](./imgs/Preview/clipboard-data-fill.svg) | .clipboard-data-fill |
| ![](./imgs/Preview/bookmark-line.svg)        | .bookmark-line        | ![](./imgs/Preview/bookmark-fill.svg)        | .bookmark-fill        | ![](./imgs/Preview/bookmarks-line.svg)      | .bookmarks-line      | ![](./imgs/Preview/bookmarks-fill.svg)      | .bookmarks-fill      |
| ![](./imgs/Preview/bookmark-check-line.svg)  | .bookmark-check-line  | ![](./imgs/Preview/bookmark-check-fill.svg)  | .bookmark-check-fill  | ![](./imgs/Preview/bookmark-x-line.svg)     | .bookmark-x-line     | ![](./imgs/Preview/bookmark-x-fill.svg)     | .bookmark-x-fill     |

#### Protection Icons Table

| Icon                                        | Style              | Icon                                      | Style              | Icon                                        | Style                | Icon                                        | Style                |
| :--:                                        | -----              | :--:                                      | -----              | :--:                                        | -----                | :--:                                        | -----                |
| ![](./imgs/Preview/shield-check-line.svg)   | .shield-check-line | ![](./imgs/Preview/shield-check-fill.svg) | .shield-check-fill | ![](./imgs/Preview/shield-lock-line.svg)    | .shield-lock-line    | ![](./imgs/Preview/shield-lock-fill.svg)    | .shield-lock-fill    |
| ![](./imgs/Preview/patch-check-line.svg)    | .patch-check-line  | ![](./imgs/Preview/patch-check-fill.svg)  | .patch-check-fill  | ![](./imgs/Preview/patch-question-line.svg) | .patch-question-line | ![](./imgs/Preview/patch-question-fill.svg) | .patch-question-fill |

#### Communication Icons Table

| Icon                                         | Style                 | Icon                                         | Style                 | Icon                                        | Style                | Icon                                        | Style                |
| :--:                                         | -----                 | :--:                                         | -----                 | :--:                                        | -----                | :--:                                        | -----                |
| ![](./imgs/Preview/phone-line.svg)           | .phone-line           | ![](./imgs/Preview/phone-fill.svg)           | .phone-fill           | ![](./imgs/Preview/phonebook-line.svg)      | .phonebook-line      | ![](./imgs/Preview/phonebook-fill.svg)      | .phonebook-fill      |
| ![](./imgs/Preview/mail-close-line.svg)      | .mail-close-line      | ![](./imgs/Preview/mail-close-fill.svg)      | .mail-close-fill      | ![](./imgs/Preview/chat-dots-line.svg)      | .chat-dots-line      | ![](./imgs/Preview/chat-dots-fill.svg)      | .chat-dots-fill      |
| ![](./imgs/Preview/chat-left-quote-line.svg) | .chat-left-quote-line | ![](./imgs/Preview/chat-left-quote-fill.svg) | .chat-left-quote-fill | ![](./imgs/Preview/chat-left-text-line.svg) | .chat-left-text-line | ![](./imgs/Preview/chat-left-text-fill.svg) | .chat-left-text-fill |
| ![](./imgs/Preview/emoji-neutral-line.svg)   | .emoji-neutral-line   | ![](./imgs/Preview/emoji-neutral-fill.svg)   | .emoji-neutral-fill   | ![](./imgs/Preview/emoji-smile-line.svg)    | .emoji-smile-line    | ![](./imgs/Preview/emoji-smile-fill.svg)    | .emoji-smile-fill    |
| ![](./imgs/Preview/emoji-frown-line.svg)     | .emoji-frown-line     | ![](./imgs/Preview/emoji-frown-fill.svg)     | .emoji-frown-fill     | ![](./imgs/Preview/emoji-surprise-line.svg) | .emoji-surprise-line | ![](./imgs/Preview/emoji-surprise-fill.svg) | .emoji-surprise-fill |

#### Cloud Icon Table

| Icon                                      | Style              | Icon                                      | Style              | Icon                                        | Style                | Icon                                        | Style                |
| :--:                                      | -----              | :--:                                      | -----              | :--:                                        | -----                | :--:                                        | -----                |
| ![](./imgs/Preview/cloud-line.svg)        | .cloud-line        | ![](./imgs/Preview/cloud-fill.svg)        | .cloud-fill        | ![](./imgs/Preview/cloud-slash-line.svg)    | .cloud-slash-line    | ![](./imgs/Preview/cloud-slash-fill.svg)    | .cloud-slash-fill    |
| ![](./imgs/Preview/cloud-upload-line.svg) | .cloud-upload-line | ![](./imgs/Preview/cloud-upload-fill.svg) | .cloud-upload-fill | ![](./imgs/Preview/cloud-download-line.svg) | .cloud-download-line | ![](./imgs/Preview/cloud-download-fill.svg) | .cloud-download-fill |

#### Map Icon Table

| Icon                                       | Style               | Icon                                         | Style                 | Icon                                    | Style            |
| :--:                                       | -----               | :--:                                         | -----                 | :--:                                    | -----            |
| ![](./imgs/Preview/map-line.svg)           | .map-line           | ![](./imgs/Preview/map-fill.svg)             | .map-fill             |                                                 |                  |
| ![](./imgs/Preview/map-alt-line.svg)       | .map-alt-line       | ![](./imgs/Preview/map-alt-fill.svg)         | .map-alt-fill         |                                                 |                  |
| ![](./imgs/Preview/mapmarker-line.svg)     | .mapmarker-line     | ![](./imgs/Preview/mapmarker-fill.svg)       | .mapmarker-fill       | ![](./imgs/Preview/mapmarker-color.svg) | .mapmarker-color |
| ![](./imgs/Preview/mappin-line.svg)        | .mappin-line        | ![](./imgs/Preview/mappin-fill.svg)          | .mappin-fill          | ![](./imgs/Preview/mappin-color.svg)    | .mappin-color    |
| ![](./imgs/Preview/mappointer-line.svg)    | .mappointer-line    | ![](./imgs/Preview/mappointer-fill.svg)      | .mappointer-fill      |                                                 |                  |
| ![](./imgs/Preview/mapchart-line.svg)      | .mapchart-line      | ![](./imgs/Preview/mapchart-fill.svg)        | .mapchart-fill        |                                                 |                  |
| ![](./imgs/Preview/globe-line.svg)         | .globe-line         | ![](./imgs/Preview/globe-alt-line.svg)       | .globe-alt-line       |                                                 |                  |
| ![](./imgs/Preview/globe-america-fill.svg) | .globe-america-fill | ![](./imgs/Preview/globe-africa-fill.svg)    | .globe-africa-fill    |                                                 |                  |
| ![](./imgs/Preview/globe-asia-fill.svg)    | .globe-asia-fill    | ![](./imgs/Preview/globe-australia-fill.svg) | .globe-australia-fill |                                                 |                  |
| ![](./imgs/Preview/h-circle-line.svg)      | .h-circle-line      | ![](./imgs/Preview/h-circle-fill.svg)        | .h-circle-fill        |                                                 |                  |
| ![](./imgs/Preview/highway-66-fill.svg)    | .highway-66-fill    | ![](./imgs/Preview/highway-75-fill.svg)      | .highway-75-fill      | ![](./imgs/Preview/highway-94-fill.svg) | .highway-94-fill |

#### Device Icon Table

| Icon                                     | Style             | Icon                                     | Style             | Icon                                  | Style          | Icon                                    | Style            |
| :--:                                     | -----             | :--:                                     | -----             | :--:                                  | -----          | :--:                                    | -----            |
| ![](./imgs/Preview/devices-line.svg)     | .devices-line     | ![](./imgs/Preview/laptop-line.svg)      | .laptop-line      | ![](./imgs/Preview/mobile-line.svg)   | .mobile-line   | ![](./imgs/Preview/mobile-alt-line.svg) | .mobile-alt-line |
| ![](./imgs/Preview/mobile-apps-line.svg) | .mobile-apps-line | ![](./imgs/Preview/mobile-apps-fill.svg) | .mobile-apps-fill | ![](./imgs/Preview/computer-line.svg) | .computer-line | ![](./imgs/Preview/camera-fill.svg)     | .camera-fill     |

#### Brand Icon Table

| Icon                                 | Style         | Icon                               | Style       | Icon                                | Style        |
| :--:                                 | -----         | :--:                               | -----       | :--:                                | -----        |
| ![](./imgs/Preview/android-fill.svg) | .android-fill | ![](./imgs/Preview/apple-fill.svg) | .apple-fill | ![](./imgs/Preview/huawei-fill.svg) | .huawei-fill |

#### Apps Icons Table

| Icon                                       | Style               | Icon                                          | Style                  | Icon                                      | Style              | Icon                                       | Style               |
| :--:                                       | -----               | :--:                                          | -----                  | :--:                                      | -----              | :--:                                       | -----               |
| ![](./imgs/Preview/app-line.svg)           | .app-line           | ![](./imgs/Preview/app-notification-line.svg) | .app-notification-line | ![](./imgs/Preview/acrobat-fill.svg)      | .acrobat-fill      | ![](./imgs/Preview/acrobat-color.svg)      | .acrobat-color      |      
| ![](./imgs/Preview/applemail-fill.svg)     | .applemail-fill     | ![](./imgs/Preview/applemail-color.svg)       | .applemail-color       | ![](./imgs/Preview/appstore-fill.svg)     | .appstore-fill     | ![](./imgs/Preview/appstore-color.svg)     | .appstore-color     |  
| ![](./imgs/Preview/appstore-alt-fill.svg)  | .appstore-alt-fill  | ![](./imgs/Preview/appstore-alt-color.svg)    | .appstore-alt-color    | ![](./imgs/Preview/bcardy-fill.svg)       | .bcardy-fill       | ![](./imgs/Preview/bcardy-color.svg)       | .bcardy-color       |  
| ![](./imgs/Preview/behance-fill.svg)       | .behance-fill       | ![](./imgs/Preview/behance-color.svg)         | .behance-color         | ![](./imgs/Preview/facebook-fill.svg)     | .facebook-fill     | ![](./imgs/Preview/facebook-color.svg)     | .facebook-color     |  
| ![](./imgs/Preview/facebook-alt-fill.svg)  | .facebook-alt-fill  | ![](./imgs/Preview/facebook-alt-color.svg)    | .facebook-alt-color    | ![](./imgs/Preview/github-fill.svg)       | .github-fill       | ![](./imgs/Preview/github-color.svg)       | .github-color       |  
| ![](./imgs/Preview/gmail-fill.svg)         | .gmail-fill         | ![](./imgs/Preview/gmail-color.svg)           | .gmail-color           | ![](./imgs/Preview/googlemaps-fill.svg)   | .googlemaps-fill   | ![](./imgs/Preview/googlemaps-color.svg)   | .googlemaps-color   |  
| ![](./imgs/Preview/googleplay-fill.svg)    | .googleplay-fill    | ![](./imgs/Preview/googleplay-color.svg)      | .googleplay-color      | ![](./imgs/Preview/instagram-fill.svg)    | .instagram-fill    | ![](./imgs/Preview/instagram-color.svg)    | .instagram-color    |  
| ![](./imgs/Preview/instagram-alt-fill.svg) | .instagram-alt-fill | ![](./imgs/Preview/instagram-alt-color.svg)   | .instagram-alt-color   | ![](./imgs/Preview/line-fill.svg)         | .line-fill         | ![](./imgs/Preview/line-color.svg)         | .line-color         |  
| ![](./imgs/Preview/line-alt-fill.svg)      | .line-alt-fill      | ![](./imgs/Preview/line-alt-color.svg)        | .line-alt-color        | ![](./imgs/Preview/linkedin-fill.svg)     | .linkedin-fill     | ![](./imgs/Preview/linkedin-color.svg)     | .linkedin-color     |  
| ![](./imgs/Preview/linkedin-alt-fill.svg)  | .linkedin-alt-fill  | ![](./imgs/Preview/linkedin-alt-color.svg)    | .linkedin-alt-color    | ![](./imgs/Preview/messenger-fill.svg)    | .messenger-fill    | ![](./imgs/Preview/messenger-color.svg)    | .messenger-color    |   
| ![](./imgs/Preview/outlook-fill.svg)       | .outlook-fill       | ![](./imgs/Preview/outlook-color.svg)         | .outlook-color         | ![](./imgs/Preview/samsungemail-fill.svg) | .samsungemail-fill | ![](./imgs/Preview/samsungemail-color.svg) | .samsungemail-color |
| ![](./imgs/Preview/skype-fill.svg)         | .skype-fill         | ![](./imgs/Preview/skype-color.svg)           | .skype-color           | ![](./imgs/Preview/telegram-fill.svg)     | .telegram-fill     | ![](./imgs/Preview/telegram-color.svg)     | .telegram-color     |
| ![](./imgs/Preview/telegram-alt-fill.svg)  | .telegram-alt-fill  | ![](./imgs/Preview/telegram-alt-color.svg)    | .telegram-alt-color    | ![](./imgs/Preview/tiktok-fill.svg)       | .tiktok-fill       | ![](./imgs/Preview/tiktok-color.svg)       | .tiktok-color       |
| ![](./imgs/Preview/twitter-fill.svg)       | .twitter-fill       | ![](./imgs/Preview/twitter-color.svg)         | .twitter-color         | ![](./imgs/Preview/twitter-alt-fill.svg)  | .twitter-alt-fill  | ![](./imgs/Preview/twitter-alt-color.svg)  | .twitter-alt-color  |
| ![](./imgs/Preview/twitter-x-fill.svg)     | .twitter-x-fill     | ![](./imgs/Preview/twitter-x-color.svg)       | .twitter-x-color       | ![](./imgs/Preview/vimeo-fill.svg)        | .vimeo-fill        | ![](./imgs/Preview/vimeo-color.svg)        | .vimeo-color        |
| ![](./imgs/Preview/vimeo-alt-fill.svg)     | .vimeo-alt-fill     | ![](./imgs/Preview/vimeo-alt-color.svg)       | .vimeo-alt-color       | ![](./imgs/Preview/yahoo-fill.svg)        | .yahoo-fill        | ![](./imgs/Preview/yahoo-color.svg)        | .yahoo-color        |
| ![](./imgs/Preview/yahoo-alt-fill.svg)     | .yahoo-alt-fill     | ![](./imgs/Preview/yahoo-alt-color.svg)       | .yahoo-alt-color       | ![](./imgs/Preview/youtube-fill.svg)      | .youtube-fill      | ![](./imgs/Preview/youtube-color.svg)      | .youtube-color      |
| ![](./imgs/Preview/whatsapp-fill.svg)      | .whatsapp-fill      | ![](./imgs/Preview/whatsapp-color.svg)        | .whatsapp-color        | ![](./imgs/Preview/whatsapp-alt-fill.svg) | .whatsapp-alt-fill | ![](./imgs/Preview/whatsapp-alt-color.svg) | .whatsapp-alt-color |

#### Options Icon Table

| Icon                                     | Style             | Icon                                     | Style             | Icon                                    | Style            | Icon                                    | Style            |
| :--:                                     | -----             | :--:                                     | -----             | :--:                                    | -----            | :--:                                    | -----            |
| ![](./imgs/Preview/at-line.svg)          | .at-line          | ![](./imgs/Preview/at-lg-line.svg)       | .at-lg-line       | ![](./imgs/Preview/award-line.svg)      | .award-line      | ![](./imgs/Preview/award-fill.svg)      | .award-fill      |
| ![](./imgs/Preview/basket-line.svg)      | .basket-line      | ![](./imgs/Preview/basket-fill.svg)      | .basket-fill      | ![](./imgs/Preview/bell-line.svg)       | .bell-line       | ![](./imgs/Preview/bell-fill.svg)       | .bell-fill       |
| ![](./imgs/Preview/bluetooth-line.svg)   | .bluetooth-line   | ![](./imgs/Preview/bluetooth-fill.svg)   | .bluetooth-fill   | ![](./imgs/Preview/bug-line.svg)        | .bug-line        | ![](./imgs/Preview/bug-fill.svg)        | .bug-fill        |
| ![](./imgs/Preview/cash-line.svg)        | .cash-line        | ![](./imgs/Preview/cash-alt-fill.svg)    | .cash-alt-fill    | ![](./imgs/Preview/circle-line.svg)     | .circle-line     | ![](./imgs/Preview/circle-fill.svg)     | .circle-fill     |
| ![](./imgs/Preview/contacts-line.svg)    | .contacts-line    | ![](./imgs/Preview/contacts-fill.svg)    | .contacts-fill    | ![](./imgs/Preview/copy-link-line.svg)  | .copy-link-line  | ![](./imgs/Preview/copy-link-fill.svg)  | .copy-link-fill  |
| ![](./imgs/Preview/easel-line.svg)       | .easel-line       | ![](./imgs/Preview/easel-fill.svg)       | .easel-fill       | ![](./imgs/Preview/eye-line.svg)        | .eye-line        | ![](./imgs/Preview/eye-fill.svg)        | .eye-fill        |
| ![](./imgs/Preview/eye-slash-line.svg)   | .eye-slash-line   | ![](./imgs/Preview/eye-slash-fill.svg)   | .eye-slash-fill   | ![](./imgs/Preview/flag-line.svg)       | .flag-line       | ![](./imgs/Preview/flag-fill.svg)       | .flag-fill       |
| ![](./imgs/Preview/floppy-line.svg)      | .floppy-line      | ![](./imgs/Preview/floppy-fill.svg)      | .floppy-fill      | ![](./imgs/Preview/gear-line.svg)       | .gear-line       | ![](./imgs/Preview/gear-fill.svg)       | .gear-fill       |
| ![](./imgs/Preview/gears-line.svg)       | .gears-line       | ![](./imgs/Preview/gears-fill.svg)       | .gears-fill       | ![](./imgs/Preview/grid3x2-line.svg)    | .grid3x2-line    | ![](./imgs/Preview/grid3x3-line.svg)    | .grid3x3-line    |
| ![](./imgs/Preview/health-line.svg)      | .health-line      | ![](./imgs/Preview/health-fill.svg)      | .health-fill      | ![](./imgs/Preview/home-line.svg)       | .home-line       | ![](./imgs/Preview/home-fill.svg)       | .home-fill       |
| ![](./imgs/Preview/image-line.svg)       | .image-line       | ![](./imgs/Preview/image-fill.svg)       | .image-fill       | ![](./imgs/Preview/image-alt-line.svg)  | .image-alt-line  | ![](./imgs/Preview/images-line.svg)     | .images-line     |
| ![](./imgs/Preview/key-line.svg)         | .key-line         | ![](./imgs/Preview/key-fill.svg)         | .key-fill         | ![](./imgs/Preview/keyboard-line.svg)   | .keyboard-line   | ![](./imgs/Preview/keyboard-fill.svg)   | .keyboard-fill   |
| ![](./imgs/Preview/layers-line.svg)      | .layers-line      | ![](./imgs/Preview/layers-fill.svg)      | .layers-fill      | ![](./imgs/Preview/lightbulb-line.svg)  | .lightbulb-line  | ![](./imgs/Preview/lightbulb-fill.svg)  | .lightbulb-fill  |
| ![](./imgs/Preview/lock-line.svg)        | .lock-line        | ![](./imgs/Preview/lock-fill.svg)        | .lock-fill        | ![](./imgs/Preview/mailbox-line.svg)    | .mailbox-line    | ![](./imgs/Preview/mailbox-fill.svg)    | .mailbox-fill    |
| ![](./imgs/Preview/mortarboard-line.svg) | .mortarboard-line | ![](./imgs/Preview/mortarboard-fill.svg) | .mortarboard-fill | ![](./imgs/Preview/piechart-line.svg)   | .piechart-line   | ![](./imgs/Preview/piechart-fill.svg)   | .piechart-fill   |
| ![](./imgs/Preview/palette-line.svg)     | .palette-line     | ![](./imgs/Preview/palette-fill.svg)     | .palette-fill     | ![](./imgs/Preview/pen-line.svg)        | .pen-line        | ![](./imgs/Preview/pen-fill.svg)        | .pen-fill        |
| ![](./imgs/Preview/pencil-line.svg)      | .pencil-line      | ![](./imgs/Preview/pencil-fill.svg)      | .pencil-fill      | ![](./imgs/Preview/pin-line.svg)        | .pin-line        | ![](./imgs/Preview/pin-fill.svg)        | .pin-fill        |
| ![](./imgs/Preview/plant-line.svg)       | .plant-line       | ![](./imgs/Preview/plant-fill.svg)       | .plant-fill       | ![](./imgs/Preview/play-line.svg)       | .play-line       | ![](./imgs/Preview/play-fill.svg)       | .play-fill       |
| ![](./imgs/Preview/play-circle-line.svg) | .play-circle-line | ![](./imgs/Preview/play-circle-fill.svg) | .play-circle-fill | ![](./imgs/Preview/send-line.svg)       | .send-line       | ![](./imgs/Preview/send-fill.svg)       | .send-fill       |
| ![](./imgs/Preview/separationh-line.svg) | .separationh-line | ![](./imgs/Preview/separationv-line.svg) | .separationv-line | ![](./imgs/Preview/share-line.svg)      | .share-line      | ![](./imgs/Preview/share-fill.svg)      | .share-fill      |
| ![](./imgs/Preview/shop-line.svg)        | .shop-line        | ![](./imgs/Preview/shop-alt-fill.svg)    | .shop-alt-fill    | ![](./imgs/Preview/signpost-line.svg)   | .signpost-line   | ![](./imgs/Preview/signpost-fill.svg)   | .signpost-fill   |
| ![](./imgs/Preview/sim-line.svg)         | .sim-line         | ![](./imgs/Preview/sim-fill.svg)         | .sim-fill         | ![](./imgs/Preview/star-line.svg)       | .star-line       | ![](./imgs/Preview/star-fill.svg)       | .star-fill       |
| ![](./imgs/Preview/star-circle-line.svg) | .star-circle-line | ![](./imgs/Preview/star-circle-fill.svg) | .star-circle-fill | ![](./imgs/Preview/stoplights-line.svg) | .stoplights-line | ![](./imgs/Preview/stoplights-fill.svg) | .stoplights-fill |
| ![](./imgs/Preview/time-line.svg)        | .time-line        | ![](./imgs/Preview/time-fill.svg)        | .time-fill        | ![](./imgs/Preview/trash-line.svg)      | .trash-line      | ![](./imgs/Preview/trash-fill.svg)      | .trash-fill      |
| ![](./imgs/Preview/trophy-line.svg)      | .trophy-line      | ![](./imgs/Preview/trophy-fill.svg)      | .trophy-fill      | ![](./imgs/Preview/unlock-line.svg)     | .unlock-line     | ![](./imgs/Preview/unlock-fill.svg)     | .unlock-fill     |
| ![](./imgs/Preview/wallet-line.svg)      | .wallet-line      | ![](./imgs/Preview/wallet-fill.svg)      | .wallet-fill      | ![](./imgs/Preview/wifi-on-line.svg)    | .wifi-on-line    | ![](./imgs/Preview/wifi-off-line.svg)   | .wifi-off-line   |
| ![](./imgs/Preview/window-app-line.svg)  | .window-app-line  | ![](./imgs/Preview/window-app-fill.svg)  | .window-app-fill  | ![](./imgs/Preview/zoomin-line.svg)     | .zoomin-line     | ![](./imgs/Preview/zoomout-line.svg)    | .zoomout-line    |

#### Composer Icon Table

| Icon                                           | Style                   | Icon                                            | Style                    | Icon                                     | Style             | Icon                                      | Style              |
| :--:                                           | -----                   | :--:                                            | -----                    | :--:                                     | -----             | :--:                                      | -----              |
| ![](./imgs/Preview/doublequotes-left-fill.svg) | .doublequotes-left-fill | ![](./imgs/Preview/doublequotes-right-fill.svg) | .doublequotes-right-fill | ![](./imgs/Preview/indent-left-line.svg) | .indent-left-line | ![](./imgs/Preview/indent-right-line.svg) | .indent-right-line |
| ![](./imgs/Preview/link-line.svg)              | .link-line              | ![](./imgs/Preview/link-alt-line.svg)           | .link-alt-line           | ![](./imgs/Preview/list-check-line.svg)  | .list-check-line  | ![](./imgs/Preview/list-number-line.svg)  | .list-number-line  |
| ![](./imgs/Preview/list-stars-line.svg)        | .list-stars-line        | ![](./imgs/Preview/list-unorderd-line.svg)      | .list-unorderd-line      | ![](./imgs/Preview/textleft-line.svg)    | .textleft-line    | ![](./imgs/Preview/textright-line.svg)    | .textright-line    |

#### Other Icons Table

| Icon                                       | Style               | Icon                                          | Style                  | Icon                                    | Style            | Icon                                          | Style                  |
| :--:                                       | -----               | :--:                                          | -----                  | :--:                                    | -----            | :--:                                          | -----                  |
| ![](./imgs/Preview/ai-fill.svg)            | .ai-fill            | ![](./imgs/Preview/bullseye-line.svg)         | .bullseye-line         | ![](./imgs/Preview/columnsgap-line.svg) | .columnsgap-line | ![](./imgs/Preview/dart-fill.svg)             | .dart-fill             |
| ![](./imgs/Preview/datasheet-line.svg)     | .datasheet-line     | ![](./imgs/Preview/datasheet-health-line.svg) | .datasheet-health-line | ![](./imgs/Preview/hash-line.svg)       | .hash-line       | ![](./imgs/Preview/headphones-line.svg)       | .headphones-line       |
| ![](./imgs/Preview/headset-line.svg)       | .headset-line       | ![](./imgs/Preview/logout-line.svg)           | .logout-line           | ![](./imgs/Preview/medal-line.svg)      | .medal-line      | ![](./imgs/Preview/menu-line.svg)             | .menu-line             |
| ![](./imgs/Preview/pencil-square-fill.svg) | .pencil-square-fill | ![](./imgs/Preview/polygon-editable-line.svg) | .polygon-editable-line | ![](./imgs/Preview/qr-line.svg)         | .qr-line         | ![](./imgs/Preview/qr-scan-line.svg)          | .qr-scan-line          |
| ![](./imgs/Preview/quote-fill.svg)         | .quote-fill         | ![](./imgs/Preview/rotate-line.svg)           | .rotate-line           | ![](./imgs/Preview/search-line.svg)     | .search-line     | ![](./imgs/Preview/speedometer-line.svg)      | .speedometer-line      |
| ![](./imgs/Preview/translate-fill.svg)     | .translate-fill     | ![](./imgs/Preview/web-line.svg)              | .web-line              | ![](./imgs/Preview/universal-line.svg)  | .universal-line  | ![](./imgs/Preview/universal-circle-line.svg) | .universal-circle-line |

#### Animated Icons Table

| Icon                                            | Style                    | Icon                                           | Style                   | Icon                                               | Style                       |
| :--:                                            | -----                    | :--:                                           | -----                   | :--:                                               | -----                       |
| ![](./imgs/Preview/animation-loarder-comet.svg) | .animation-loarder-comet | ![](./imgs/Preview/animation-loarder-ring.svg) | .animation-loarder-ring | ![](./imgs/Preview/animation-loarder-ringpath.svg) | .animation-loarder-ringpath |

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
	pargin: 20px;
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
.my-element {
	display: none;
	width: 24px;
	height: 24px;
	margin: 10px;
	backgroind-color: red;
}
```

HTML code:

```html
<div id="myElement" class="my-element"></div>
```

JS code:
```js
// Element and options definition
const element = document.getElementById("myElement");
const options = {
	display: "block",
	delay: 200
};

// Option 1: WUIFade mode
WUIFade.in(element, options);

// Option 2: HTMLElement mode
element.wuiFadein(options);
```