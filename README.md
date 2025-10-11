# wuijs-lib

Library version: `0.2.0` ([Change Log](./CHANGELOG.md))

Document version: `0.2.0.20250927.1-e` (e: in edition, c: complete)

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
	*   [WUIList](#WUIList)
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
| WUIModal         | `0.2`   | Advanced object for implementing dialog boxes (type `message`) and pop-up windows (type `page`). |
| WUIModalSelector | `0.1`   | Extended object of `WUIModal` for implementing selection lists based on arrays or data inputs of type `<select>`. |
| WUISlider        | `0.2`   | Advanced object for implementing mouse-controlled and/or event-controlled blinds. |
| WUIPaging        | `0.1`   | Advanced object for implementing paginated views. |
| WUITabs          | `0.1`   | Advanced object for implementing views accessible by tab selection. |
| WUIList          | `0.2`   | Advanced object for implementing data lists and buttons for each row optionally. |
| WUITable         | `0.1`   | Advanced object for implementing data tables. Unlike the `WUIList` object, the `WUITable` object includes a column header. |
| WUIForm          | `0.1`   | Advanced object for implementing data forms. This object allows the implementation of HTML data input elements such as `<input>`, `<select>`, and `<textarea>`, and WUI library objects such as `WUISelectpicker`, `WUIDatepicker`, `WUITimepicker`, `WUIColorpicker`, `WUICheckbox`, `WUIIntensity`, and `WUIButton`. |
| WUIFormat        | `0.1`   | Tool for managing and validating `string`, `number` and `Date` data formats. |
| WUISelectpicker  | `0.1`   | Advanced object for implementing multiple-select or exclusive data entries based on lists based on HTML `<select>` elements. |
| WUIDatepicker    | `0.1`   | Advanced object for implementing date type data input. |
| WUITimepicker    | `0.1`   | Advanced object for implementing time type data inputs. |
| WUIColorpicker   | `0.1`   | Advanced object for implementing color picker type data inputs. |
| WUICheckbox      | `0.2`   | Advanced object for implementing checkbox type data inputs. |
| WUIIntensity     | `0.1`   | Advanced object for implementing 4-level intensity selector type data inputs: none, low, half, and high. |
| WUIButton        | `0.1`   | Advanced object for button implementation. |

<a name="install"></a>

## Install

To install the WUI library, must be cloned from the official distribution repositories en GitHib (`1640lab/wuijs-lib` or `sbelmar/wuijs-lib`). Assuming the project where it will be deployed has a download directory: `./downloads`, a `./src` source directory, and within that, a `./src/Libraries` library directory, you must type the following in the terminal:

```bash
cd ./downloads
git clone https://git@github.com/1640lab/wuijs-lib.git
cp -r ./wuijs-lib/src/WDS ../src/Libraries/
```

Optionally, it can be downloaded from the same repositories in ZIP format.

```bash
cd ./downloads
wget https://github.com/1640lab/wuijs-lib/archive/refs/heads/main.zip
tar -xzf main.zip
cp -p ./wuijs-lib-main/src/WDS ../src/Libraries/
````

<a name="implementation"></a>

## Implementation

To enable all classes, the CSS and JS dependencies of the libraries must be implemented in the HTML header of the web page together with the `Settings.css` and `WUI.css` style settings files.

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
	--wui-table-column-bordercolor-over: var(--app-hightlightcolor);
	--wui-table-column-bordercolor-selected: var(--app-hightlightcolor);
	--wui-table-column-bgcolor-out: var(--app-light1color);
	--wui-table-column-bgcolor-over: var(--app-light1color);
	--wui-table-column-bgcolor-selectd: var(--app-hightlightcolor);
	--wui-table-column-textcolor-out: #444;
	--wui-table-column-textcolor-over: #000;
	--wui-table-column-textcolor-selected: var(--app-hightlightcolor);
	--wui-table-column-textcolor-disabled: var(--app-disabledcolor);
	--wui-table-column-sorted-asccolor-out: #444;
	--wui-table-column-sorted-asccolor-over: #000;
	--wui-table-column-sorted-asccolor-disabled: var(--app-disabledcolor);
	--wui-table-column-sorted-ascicon-src: none;
	--wui-table-column-sorted-desccolor-out: #444;
	--wui-table-column-sorted-desccolor-over: #000;
	--wui-table-column-sorted-desccolor-disabled: var(--app-disabledcolor);
	--wui-table-column-sorted-descicon-src: none;
	--wui-table-row-radius: 10px;
	--wui-table-row-bordercolor-width: 1px;
	--wui-table-row-bordercolor-out: var(--app-softcolor);
	--wui-table-row-bordercolor-over: var(--app-softcolor);
	--wui-table-row-bordercolor-selected: var(--app-hightlightcolor);
	--wui-table-row-bgcolor-out: var(--app-light2color);
	--wui-table-row-bgcolor-over: var(--app-light1color);
	--wui-table-row-bgcolor-selectd: var(--app-hightlightcolor);
	--wui-table-row-textcolor-out: var(--app-dark4color);
	--wui-table-row-textcolor-over: var(--app-dark4color);
	--wui-table-row-textcolor-disabled: var(--app-disabledcolor);
	--wui-table-row-textcolor-selected: var(--app-hightlightcolor);

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

Assuming the CSS settings file is installed in the relative path `./Settings/WUI.css` and the libraries are installed in the relative path `./Libraries/WUI`, the HTML header looks like this:

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
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Modal/WUIModal-0.2.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Modal/WUIModalSelect-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Slider/WUISlider-0.2.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Paging/WUIPaging-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Tabs/WUITabs-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/List/WUIList-0.2.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Table/WUITable-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Form/WUIForm-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Selectpicker/WUISelectpicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Datepicker/WUIDatepicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Timepicker/WUITimepicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Colorpicker/WUIColorpicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Checkbox/WUICheckbox-0.2.css">
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
		<script type="text/javascript" src="./Libraries/WUI/Modal/WUIModal-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Modal/WUIModalSelect-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Slider/WUISlider-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Paging/WUIPaging-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Tabs/WUITabs-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/List/WUIList-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Table/WUITable-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Form/WUIForm-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Format/WUIFormat-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Selectpicker/WUISelectpicker-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Datepicker/WUIDatepicker-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Timepicker/WUITimepicker-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Colorpicker/WUIColorpicker-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Checkbox/WUICheckbox-0.2.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Intensity/WUIIntensity-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Button/WUIButton-0.1.js"></script>
	</head>
	<body>
	</body>
</html>
```

This implementation method allows for standardization of an application's user interface design, using the `WUI.css` file.

> [!IMPORTANT]
> The style settings files must be in the paths `./Settings/Main.css` and `./Settings/WUI.css`.

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
| domain   | `string`  | `location.hostname` | (get/set)<br><br>Defines the domain for which the cookie is accessible. By default, it's the current host. Setting it to a parent domain (e.g., example.com for sub.example.com) makes it accessible to subdomains. |
| path     | `string`  | `"./"`              | (get/set)<br><br>Specifies the path for which the cookie is valid. The default value is the current path, with an empty value being equivalent to this. Setting "/" makes the cookie accessible across the entire domain. |
| minutes  | `number`  | `525600`            | (get/set)<br><br>Specifies the duration, measured in minutes, for the cookie to remain active. The default value is 365 days. |
| overssl  | `boolean` | `false`             | (get/set)<br><br>If set to `true`, the cookie will only be sent over HTTPS connections. |

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
// Create object
const cookie = new WUICookie({
	domain: location.hostname,  // Default value, property can be omitted
	path: "./",                 // Default value, property can be omitted
	minutes: 365*24*60,         // Default value, property can be omitted
	overssl: false              // Default value, property can be omitted
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
// Create object
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
| environment     | `string`   | `"web"`       | (get/set)<br><br>Web interface deployment environment.<br><br>Values:<br>• `"web"`<br>• `"native.android"`<br>• `"native.ios"` |
| importDirectory | `string`   | `""`          | (get/set)<br><br>Relative path of the directory where the subdirectories for content import are hosted. |
| importMode      | `string`   | `"fetch"`     | (get/set)<br><br>Content retrieval method for upload.<br><br>Values:<br>• `"fetch"`<br>• `"xhr"`<br><br>When deploying to native environments using WebView for Android or WebKit for iOS, it is recommended to use `"xhr"`. |
| onCompleted     | `function` | `null`        | (get/set)<br><br>Function that is called when all content is imported and loaded into the body of the HTML page. |
| debug           | `boolean`  | `false`       | (get/set)<br><br>Test mode. Prints imported content to the console when the property value is `true`. |

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
// Create object
const body = new WUIBody({
	environment: "web",             // Default value, property can be omitted
	importDirectory: "./Imports/",
	importMode: "fetch",            // Default value, property can be omitted
	onCompleted: () => {
		body.prepare();
	},
	debug: true
});

// Import CSS/HTML/JS content from the ./Imports directory
body.import("testContent", "test-content", () => {
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
| selector   | `string`   | `".wui-language"` | (get/set)<br><br>CSS selector for HTML elements to be loaded. This can be applied to the `content` attribute of the `meta` element, to the `innerHTML` property of the elements: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `i`, `li`, `a`, `legend`, `label`, `option`, `data`, `button`, and to the `placeholder` attribute of the `input` and `textarea` elements. |
| directory  | `string`   | `"Languages/"`    | (get/set)<br><br>Path to the directory where the language files are located. |
| sets       | `array`    | `["main"]`        | (get/set)<br><br>List of language set names to load. |
| lang       | `string`   | `"en"`            | (get/set)<br><br>Language code in ISO 639-1 format. |
| mode       | `string`   | `"js"`            | (get/set)<br><br>Language file format.<br><br>Values:<br>• `"js"`<br>• `"json"` |
| dataKey    | `string`   | `"key"`           | (get/set)<br><br>Name of the `data-*` attribute that contains the text key in HTML elements. |
| dataOutput | `string`   | `"text"`          | (get/set)<br><br>Name of the `data-*` attribute where the loaded text can be placed. |
| onLoad     | `function` | `null`            | (get/set)<br><br>Function that is called when the language loading has finished. |

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
// Create object
const language = new WUILanguage({
    selector: ".wui-language",  // Valor por defecto, propiedad puede ser omitida
    directory: "./Languages/",  // Valor por defecto, propiedad puede ser omitida
    sets: ["main"],             // Valor por defecto, propiedad puede ser omitida
    lang: "en",                 // Valor por defecto, propiedad puede ser omitida
    mode: "js",                 // Valor por defecto, propiedad puede ser omitida
    dataKey: "key",             // Valor por defecto, propiedad puede ser omitida
    dataOutput: "text",         // Valor por defecto, propiedad puede ser omitida
    onLoad: (...args) => {
		[lang, languages] = args;
        console.log("Language loaded:", lang, languages);
    }
});

// Declaring global variables
let lang = language.lang;
let languages = {};

// Load content from the main-en.js file
language.load();                // Option 1
language.load("en");            // Option 2 equivalent to option 1
language.load("en", ["main"]);  // Option 3 equivalent to option 1
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
| sections    | `array`    | `[]`          | (get/set)<br><br>List of objects with the settings of the sections that will be incorporated into the animation, as defined in **Section Options**. These can be defined directly on this property or using the `addSection()` method. |
| behavior    | `string`   | `"smooth"`    | (get/set)<br><br>Behavior for moving focus to the body of the HTML page.<br><br>Values:<br>• `"auto"`<br>• `"smooth"` |
| dataScrollY | `string`   | `"scrollY"`   | (get/set)<br><br>Name of the `data-*` attribute of the main document element (`<html>` / `document.documentElement`) that contains the numeric value measured in pixels of the total vertical scrolling of the HTML page, where `0` represents the top of the document (or no movement). |
| dataDelay   | `string`   | `"delay"`     | (get/set)<br><br>Name of the `data-*` attribute that determines the time, measured in milliseconds, that it takes for an HTML element animated using CSS styles to animate once it is given focus. |
| onStart     | `function` | `null`        | (get/set)<br><br>Function that is called when the scroll movement starts, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| onMove      | `function` | `null`        | (get/set)<br><br>Function that is called when the scroll movement is executed, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| onStop      | `function` | `null`        | (get/set)<br><br>Function that is called when the scroll movement ends, either through the `scroll` events for the mouse or `touchmove` for the touch screen. |
| debug       | `boolean`  | `false`       | (get/set)<br><br>Test mode. Prints to the console the `selector` and `height` values ​​of the scenes added in the startup instance, and `scrollY`, `y`, `index`, `sceneIndex`, `step`, `sceneStep`, and `progress` when they change. Enabled when the property value is `true`. |

#### Section Options

| Property  | Type       | Default value | Description |
| --------- | ---------- | ------------- | ----------- |
| selector  | `string`   | `undefined`   | CSS selector that defines the HTML element to be included as a section. If more than one element matches the selector, only the first match will be included. *oblogatory* |
| target    | `string`   | `undefined`   | Auxiliary name for referencing the section. Used in the `goSection()` method. |
| type      | `string`   | `"auto"`      | CSS behavior of the section height.<br><br>Values:<br>• `"auto"`<br>• `"static"` |
| height    | `number`   | `undefined`   | Section height. This can be expressed as a number associated with pixels or in a CSS compatible format. |
| steps     | `number`   | `undefined`   | Total number of steps defined in the `animation` animation function. |
| pages     | `number`   | `undefined`   | Total number of pages defined in the `animation` animation function. |
| animation | `function` | `undefined`   | `function(step, progress)`<br><br>Arguments:<br>**• step:** `number`, value between `0` and `pages - 1` <br>**• progress:** `number`, value between `0` and `1` <br><br>Function that is called when the scroll movement is executed in a section. |

#### Methods

| Method     | Return type | Description |
| ---------- | ----------- | ----------- |
| init       | `void`      | `init()`<br><br>Initializes the object once the sections that make up the HTML page have been added. |
| stop       | `void`      | `stop()`<br><br>Interrupts the animation in its execution cycle. |
| addSection | `void`      | `addSection(options)`<br><br>Adds a new animated section settings to the object's section list, as defined in **Section Options:**. |
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

There are two ways to implement the animation library, the simplest is through CSS animation tags, the second is through programming JS animation functions that are loaded through section settings.

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

<!-- JS animation with paging -->
<section id="section3" class="my-section">
	<div class="scene">
		<div class="animation"></div>
	</div>
	<div class="paging dots"></div>
</section>
```

JS code:

```js
// Create object
const scrolly = new WUIScrolly({
	sections: [],            // Default value, property can be omitted
	behavior: "smooth",      // Default value, property can be omitted
	dataScrollY: "scrollY",  // Default value, property can be omitted
	dataDelay: "delay",      // Default value, property can be omitted
	onStart: () => {},
	onMove: () => {},
	onStop: () => {},
	debug: true
});

// Add sections
scrolly.addSection({
	selector: "#section1",
	target: "css-animation",
	type: "static",
	height: "100%"
});
scrolly.addSection({
	selector: "#section2",
	target: "js-animation",
	type: "static",
	height: 400,
	animation: (step = 0, progress = 0) => {
		// ...
	}
});
scrolly.addSection({
	selector: "#section3",
	target: "js-animation-paging",
	type: "static",
	height: 480,
	steps: 8,
	pages: 3,
	animation: (step = 0, progress = 0) => {
		// ...
	}
});

// Initialize object
scrolly.init();
```

<a name="wuiIcon"></a>

### WUIIcon

Versión: `0.1`

Set of pre-designed icons loaded via CSS, for use in interfaces.

#### Signals Icon Table

| Icon                                           | Style                                                     | Icon                                           | Style                                                     | Icon                                       | Style                                                         | Icon                                       | Style                                                          |
| :---:                                          | -----                                                     | :---:                                          | -----                                                     | :---:                                      | -----                                                         | :---:                                      | -----                                                          |
| ![](./imgs/Icons/plus-line.svg)                | .plus-line                                                | ![](./imgs/Icons/plus-lg-line.svg)             | .plus-lg-line                                             | ![](./imgs/Icons/dash-line.svg)            | .dash-line                                                    | ![](./imgs/Icons/dash-lg-line.svg)         | .dash-lg-line                                                  |
| ![](./imgs/Icons/check-line.svg)               | .check-line<br>.successful-line                           | ![](./imgs/Icons/check-lg-line.svg)            | .check-lg-line<br>.successful-lg-line                     | ![](./imgs/Icons/info-line.svg)            | .info-line                                                    | ![](./imgs/Icons/info-lg-line.svg)         | .info-lg-line                                                  |
| ![](./imgs/Icons/question-line.svg)            | .question-line                                            | ![](./imgs/Icons/question-lg-line.svg)         | .question-lg-line                                         | ![](./imgs/Icons/excamation-line.svg)      | .excamation-line<br>.warning-line                             | ![](./imgs/Icons/excamation-lg-line.svg)   | .excamation-lg-line<br>.warning-lg-line                        |
| ![](./imgs/Icons/slash-line.svg)               | .slash-line                                               | ![](./imgs/Icons/slash-lg-line.svg)            | .slash-lg-line                                            | ![](./imgs/Icons/x-line.svg)               | .x-line<br>.close-line<br>.error-line                         | ![](./imgs/Icons/x-lg-line.svg)            | .x-lg-line<br>.close-lg-line<br>.error-lg-line                 |
| ![](./imgs/Icons/filter-line.svg)              | .filter-line                                              | ![](./imgs/Icons/filter-lg-line.svg)           | .filter-lg-line                                           | ![](./imgs/Icons/plus-circle-line.svg)     | .plus-circle-line                                             | ![](./imgs/Icons/plus-circle-fill.svg)     | .plus-circle-fill                                              |
| ![](./imgs/Icons/dash-circle-line.svg)         | .dash-circle-line                                         | ![](./imgs/Icons/dash-circle-fill.svg)         | .dash-circle-fill                                         | ![](./imgs/Icons/check-circle-line.svg)    | .check-circle-line<br>.successful-circle-line                 | ![](./imgs/Icons/check-circle-fill.svg)    | .check-circle-fill<br>.successful-circle-fill                  |
| ![](./imgs/Icons/info-circle-line.svg)         | .info-circle-line                                         | ![](./imgs/Icons/info-circle-fill.svg)         | .info-circle-fill                                         | ![](./imgs/Icons/question-circle-line.svg) | .question-circle-line                                         | ![](./imgs/Icons/question-circle-fill.svg) | .question-circle-fill                                          |
| ![](./imgs/Icons/excamation-circle-line.svg)   | .excamation-circle-line<br>.warning-circle-line           | ![](./imgs/Icons/excamation-circle-fill.svg)   | .excamation-circle-fill<br>.warning-circle-fill           | ![](./imgs/Icons/slash-circle-line.svg)    | .slash-circle-line                                            | ![](./imgs/Icons/slash-circle-fill.svg)    | .slash-circle-fill                                             |
| ![](./imgs/Icons/x-circle-line.svg)            | .x-circle-line<br>.close-circle-line<br>error-circle-line | ![](./imgs/Icons/x-circle-fill.svg)            | .x-circle-fill<br>.close-circle-fill<br>error-circle-fill | ![](./imgs/Icons/filter-circle-line.svg)   | .filter-circle-line                                           | ![](./imgs/Icons/filter-circle-fill.svg)   | .filter-circle-fill                                            |
| ![](./imgs/Icons/excamation-triangle-line.svg) | .excamation-triangle-line<br>.warning-triangle-line       | ![](./imgs/Icons/excamation-triangle-fill.svg) | .excamation-triangle-fill<br>.warning-triangle-fill       | ![](./imgs/Icons/x-octagon-line.svg)       | .x-octagon-line<br>.close-octagon-line<br>.error-octagon-line | ![](./imgs/Icons/x-octagon-fill.svg)       | ..x-octagon-fill<br>.close-octagon-fill<br>.error-octagon-fill |

#### Arrow Icon Table

| Icon                                                | Style                          | Icon                                              | Style                        | Icon                                                  | Style                            | Icon                                                | Style                          |
| :--:                                                | -----                          | :--:                                              | -----                        | :--:                                                  | -----                            | :--:                                                | -----                          |
| ![](./imgs/Icons/arrow-up-line.svg)                 | .arrow-up-line                 | ![](./imgs/Icons/arrow-left-line.svg)             | .arrow-left-line             | ![](./imgs/Icons/arrow-right-line.svg)                | .arrow-right-line                | ![](./imgs/Icons/arrow-down-line.svg)               | .arrow-down-line               |
| ![](./imgs/Icons/arrow-up-lg-line.svg)              | .arrow-up-lg-line              | ![](./imgs/Icons/arrow-left-lg-line.svg)          | .arrow-left-lg-line          | ![](./imgs/Icons/arrow-right-lg-line.svg)             | .arrow-right-lg-line             | ![](./imgs/Icons/arrow-down-lg-line.svg)            | .arrow-down-lg-line            |
| ![](./imgs/Icons/arrow-upleft-lg-line.svg)          | .arrow-upleft-lg-line          | ![](./imgs/Icons/arrow-upright-lg-line.svg)       | .arrow-upright-lg-line       | ![](./imgs/Icons/arrow-downleft-lg-line.svg)          | .arrow-downleft-lg-line          | ![](./imgs/Icons/arrow-downright-lg-line.svg)       | .arrow-downright-lg-line       |
| ![](./imgs/Icons/arrowhead-up-line.svg)             | .arrowhead-up-line             | ![](./imgs/Icons/arrowhead-left-line.svg)         | .arrowhead-left-line         | ![](./imgs/Icons/arrowhead-right-line.svg)            | .arrowhead-right-line            | ![](./imgs/Icons/arrowhead-down-line.svg)           | .arrowhead-down-line           |
| ![](./imgs/Icons/arrowhead-up-lg-line.svg)          | .arrowhead-up-lg-line          | ![](./imgs/Icons/arrowhead-left-lg-line.svg)      | .arrowhead-left-lg-line      | ![](./imgs/Icons/arrowhead-right-lg-line.svg)         | .arrowhead-right-lg-line         | ![](./imgs/Icons/arrowhead-down-lg-line.svg)        | .arrowhead-down-lg-line        |
| ![](./imgs/Icons/arrowhead-up-stg-line.svg)         | .arrowhead-up-stg-line         | ![](./imgs/Icons/arrowhead-left-stg-line.svg)     | .arrowhead-left-stg-line     | ![](./imgs/Icons/arrowhead-right-stg-line.svg)        | .arrowhead-right-stg-line        | ![](./imgs/Icons/arrowhead-down-stg-line.svg)       | .arrowhead-down-stg-line       |
| ![](./imgs/Icons/arrowhead-up-fill.svg)             | .arrowhead-up-fill             | ![](./imgs/Icons/arrowhead-left-fill.svg)         | .arrowhead-left-fill         | ![](./imgs/Icons/arrowhead-right-fill.svg)            | .arrowhead-right-fill            | ![](./imgs/Icons/arrowhead-down-fill.svg)           | .arrowhead-down-fill           |
| ![](./imgs/Icons/arrow-up-circle-line.svg)          | .arrow-up-circle-line          | ![](./imgs/Icons/arrow-left-circle-line.svg)      | .arrow-left-circle-line      | ![](./imgs/Icons/arrow-right-circle-line.svg)         | .arrow-right-circle-line         | ![](./imgs/Icons/arrow-down-circle-line.svg)        | .arrow-down-circle-line        |
| ![](./imgs/Icons/arrow-upleft-circle-line.svg)      | .arrow-upleft-circle-line      | ![](./imgs/Icons/arrow-upright-circle-line.svg)   | .arrow-upright-circle-line   | ![](./imgs/Icons/arrow-downleft-circle-line.svg)      | .arrow-downleft-circle-line      | ![](./imgs/Icons/arrow-downright-circle-line.svg)   | .arrow-downright-circle-line   |
| ![](./imgs/Icons/arrow-up-circle-fill.svg)          | .arrow-up-circle-fill          | ![](./imgs/Icons/arrow-left-circle-fill.svg)      | .arrow-left-circle-fill      | ![](./imgs/Icons/arrow-right-circle-fill.svg)         | .arrow-right-circle-fill         | ![](./imgs/Icons/arrow-down-circle-fill.svg)        | .arrow-down-circle-fill        |
| ![](./imgs/Icons/arrow-upleft-circle-fill.svg)      | .arrow-upleft-circle-fill      | ![](./imgs/Icons/arrow-upright-circle-fill.svg)   | .arrow-upright-circle-fill   | ![](./imgs/Icons/arrow-downleft-circle-fill.svg)      | .arrow-downleft-circle-fill      | ![](./imgs/Icons/arrow-downright-circle-fill.svg)   | .arrow-downright-circle-fill   |
| ![](./imgs/Icons/arrowbar-up-line.svg)              | .arrowbar-up-line              | ![](./imgs/Icons/arrowbar-left-line.svg)          | .arrowbar-left-line          | ![](./imgs/Icons/arrowbar-right-line.svg)             | .arrowbar-right-line             | ![](./imgs/Icons/arrowbar-down-line.svg)            | .arrowbar-down-line            |
| ![](./imgs/Icons/arrows-expand-horizontal-line.svg) | .arrows-expand-horizontal-line | ![](./imgs/Icons/arrows-expand-vertical-line.svg) | .arrows-expand-vertical-line | ![](./imgs/Icons/arrows-collapse-horizontal-line.svg) | .arrows-collapse-horizontal-line | ![](./imgs/Icons/arrows-collapse-vertical-line.svg) | .arrows-collapse-vertical-line |
| ![](./imgs/Icons/arrows-horizontal-line.svg)        | .arrows-horizontal-line        | ![](./imgs/Icons/arrows-vertical-line.svg)        | .arrows-vertical-line        | ![](./imgs/Icons/arrows-expand-diagonal-line.svg)     | .arrows-expand-diagonal-line     | ![](./imgs/Icons/arrows-collapse-diagonal-line.svg) | .arrows-collapse-diagonal-line |
| ![](./imgs/Icons/arrowbox-out-up-line.svg)          | .arrowbox-out-up-line          | ![](./imgs/Icons/arrowbox-out-left-line.svg)      | .arrowbox-out-left-line      | ![](./imgs/Icons/arrowbox-out-right-line.svg)         | .arrowbox-out-right-line         | ![](./imgs/Icons/arrowbox-out-down-line.svg)        | .arrowbox-out-down-line        |
| ![](./imgs/Icons/arrowbox-out-upleft-line.svg)      | .arrowbox-out-upleft-line      | ![](./imgs/Icons/arrowbox-out-upright-line.svg)   | .arrowbox-out-upright-line   | ![](./imgs/Icons/arrowbox-out-downleft-line.svg)      | .arrowbox-out-downleft-line      | ![](./imgs/Icons/arrowbox-out-downright-line.svg)   | .arrowbox-out-downright-line   |
| ![](./imgs/Icons/arrowbox-in-up-line.svg)           | .arrowbox-in-up-line           | ![](./imgs/Icons/arrowbox-in-left-line.svg)       | .arrowbox-in-left-line       | ![](./imgs/Icons/arrowbox-in-right-line.svg)          | .arrowbox-in-right-line          | ![](./imgs/Icons/arrowbox-in-down-line.svg)         | .arrowbox-in-down-line         |
| ![](./imgs/Icons/arrowbox-in-upleft-line.svg)       | .arrowbox-in-upleft-line       | ![](./imgs/Icons/arrowbox-in-upright-line.svg)    | .arrowbox-in-upright-line    | ![](./imgs/Icons/arrowbox-in-downleft-line.svg)       | .arrowbox-in-downleft-line       | ![](./imgs/Icons/arrowbox-in-downright-line.svg)    | .arrowbox-in-downright-line    |

#### Number Icon Table

| Icon                                   | Style             | Icon                                   | Style             | Icon                                   | Style             | Icon                                   | Style             |
| :--:                                   | -----             | :--:                                   | -----             | :--:                                   | -----             | :--:                                   | -----             |
| ![](./imgs/Icons/num0-circle-line.svg) | .num0-circle-line | ![](./imgs/Icons/num0-circle-fill.svg) | .num0-circle-fill | ![](./imgs/Icons/num1-circle-line.svg) | .num1-circle-line | ![](./imgs/Icons/num1-circle-fill.svg) | .num1-circle-fill |
| ![](./imgs/Icons/num2-circle-line.svg) | .num2-circle-line | ![](./imgs/Icons/num2-circle-fill.svg) | .num2-circle-fill | ![](./imgs/Icons/num3-circle-line.svg) | .num3-circle-line | ![](./imgs/Icons/num3-circle-fill.svg) | .num3-circle-fill |
| ![](./imgs/Icons/num4-circle-line.svg) | .num4-circle-line | ![](./imgs/Icons/num4-circle-fill.svg) | .num4-circle-fill | ![](./imgs/Icons/num5-circle-line.svg) | .num5-circle-line | ![](./imgs/Icons/num5-circle-fill.svg) | .num5-circle-fill |
| ![](./imgs/Icons/num6-circle-line.svg) | .num6-circle-line | ![](./imgs/Icons/num6-circle-fill.svg) | .num6-circle-fill | ![](./imgs/Icons/num7-circle-line.svg) | .num7-circle-line | ![](./imgs/Icons/num7-circle-fill.svg) | .num7-circle-fill |
| ![](./imgs/Icons/num8-circle-line.svg) | .num8-circle-line | ![](./imgs/Icons/num8-circle-fill.svg) | .num8-circle-fill | ![](./imgs/Icons/num9-circle-line.svg) | .num9-circle-line | ![](./imgs/Icons/num9-circle-fill.svg) | .num9-circle-fill |

#### Person Icon Table

| Icon                                     | Style               | Icon                                     | Style               | Icon                                      | Style                | Icon                                      | Style                |
| :--:                                     | -----               | :--:                                     | -----               | :--:                                      | -----                | :--:                                      | -----                |
| ![](./imgs/Icons/man-fill.svg)           | .man-fill           | ![](./imgs/Icons/woman-fill.svg)         | .woman-fill         | ![](./imgs/Icons/person-line.svg)         | .person-line         | ![](./imgs/Icons/person-fill.svg)         | .person-fill         |
| ![](./imgs/Icons/person-plus-line.svg)   | .person-plus-line   | ![](./imgs/Icons/person-plus-fill.svg)   | .person-plus-fill   | ![](./imgs/Icons/person-dash-line.svg)    | .person-dash-line    | ![](./imgs/Icons/person-dash-fill.svg)    | .person-dash-fill    |
| ![](./imgs/Icons/person-check-line.svg)  | .person-check-line  | ![](./imgs/Icons/person-check-fill.svg)  | .person-check-fill  | ![](./imgs/Icons/person-x-line.svg)       | .person-x-line       | ![](./imgs/Icons/person-x-fill.svg)       | .person-x-fill       |
| ![](./imgs/Icons/people-line.svg)        | .people-line        | ![](./imgs/Icons/people-fill.svg)        | .people-fill        | ![](./imgs/Icons/person-contact-line.svg) | .person-contact-line | ![](./imgs/Icons/person-contact-fill.svg) | .person-contact-fill |
| ![](./imgs/Icons/person-card-line.svg)   | .person-card-line   | ![](./imgs/Icons/person-card-fill.svg)   | .person-card-fill   | ![](./imgs/Icons/person-names-line.svg)   | .person-names-line   | ![](./imgs/Icons/person-names-fill.svg)   | .person-names-fill   |
| ![](./imgs/Icons/person-circle-line.svg) | .person-circle-line | ![](./imgs/Icons/person-circle-fill.svg) | .person-circle-fill | ![](./imgs/Icons/user-line.svg)           | .user-line           |                                           |                      |

#### File Icon Table

| Icon                                    | Style              | Icon                                    | Style              | Icon                                     | Style               | Icon                                     | Style               |
| :--:                                    | -----              | :--:                                    | -----              | :--:                                     | -----               | :--:                                     | -----               |
| ![](./imgs/Icons/folder-close-line.svg) | .folder-close-line | ![](./imgs/Icons/folder-close-fill.svg) | .folder-close-fill | ![](./imgs/Icons/folder-open-line.svg)   | .folder-open-line   | ![](./imgs/Icons/folder-open-fill.svg)   | .folder-open-fill   |
| ![](./imgs/Icons/file-line.svg)         | .file-line         | ![](./imgs/Icons/file-fill.svg)         | .file-fill         | ![](./imgs/Icons/file-barchart-line.svg) | .file-barchart-line | ![](./imgs/Icons/file-barchart-fill.svg) | .file-barchart-fill |
| ![](./imgs/Icons/file-check-line.svg)   | .file-check-line   | ![](./imgs/Icons/file-check-fill.svg)   | .file-check-fill   | ![](./imgs/Icons/file-pdf-line.svg)      | .file-pdf-line      | ![](./imgs/Icons/file-pdf-fill.svg)      | .file-pdf-fill      |
| ![](./imgs/Icons/file-image-line.svg)   | .file-image-line    | ![](./imgs/Icons/file-image-fill.svg)  | .file-image-fill   | ![](./imgs/Icons/file-text-line.svg)     | .file-text-line     | ![](./imgs/Icons/file-text-fill.svg)     | .file-text-fill     |
| ![](./imgs/Icons/file-upload-line.svg)  | .file-upload-line  | ![](./imgs/Icons/file-upload-fill.svg)  | .file-upload-fill  | ![](./imgs/Icons/file-zip-line.svg)      | .file-zip-line      | ![](./imgs/Icons/file-zip-fill.svg)      | .file-zip-fill      |

#### Control Icon Table

| Icon                                       | Style                 | Icon                                       | Style                 | Icon                                      | Style                | Icon                                      | Style                |
| :--:                                       | -----                 | :--:                                       | -----                 | :--:                                      | -----                | :--:                                      | -----                |
| ![](./imgs/Icons/calendar-line.svg)        | .calendar-line        | ![](./imgs/Icons/calendar-fill.svg)        | .calendar-fill        | ![](./imgs/Icons/calendar-day-line.svg)   | .calendar-day-line   | ![](./imgs/Icons/calendar-day-fill.svg)   | .calendar-day-fill   |
| ![](./imgs/Icons/calendar-week-line.svg)   | .calendar-week-line   | ![](./imgs/Icons/calendar-week-fill.svg)   | .calendar-week-fill   | ![](./imgs/Icons/calendar-range-line.svg) | .calendar-range-line | ![](./imgs/Icons/calendar-range-fill.svg) | .calendar-range-fill |
| ![](./imgs/Icons/clipboard-check-line.svg) | .clipboard-check-line | ![](./imgs/Icons/clipboard-check-fill.svg) | .clipboard-check-fill | ![](./imgs/Icons/clipboard-data-line.svg) | .clipboard-data-line | ![](./imgs/Icons/clipboard-data-fill.svg) | .clipboard-data-fill |
| ![](./imgs/Icons/bookmark-line.svg)        | .bookmark-line        | ![](./imgs/Icons/bookmark-fill.svg)        | .bookmark-fill        | ![](./imgs/Icons/bookmarks-line.svg)      | .bookmarks-line      | ![](./imgs/Icons/bookmarks-fill.svg)      | .bookmarks-fill      |
| ![](./imgs/Icons/bookmark-check-line.svg)  | .bookmark-check-line  | ![](./imgs/Icons/bookmark-check-fill.svg)  | .bookmark-check-fill  | ![](./imgs/Icons/bookmark-x-line.svg)     | .bookmark-x-line     | ![](./imgs/Icons/bookmark-x-fill.svg)     | .bookmark-x-fill     |

#### Protection Icons Table

| Icon                                      | Style              | Icon                                    | Style              | Icon                                      | Style                | Icon                                      | Style                |
| :--:                                      | -----              | :--:                                    | -----              | :--:                                      | -----                | :--:                                      | -----                |
| ![](./imgs/Icons/shield-check-line.svg)   | .shield-check-line | ![](./imgs/Icons/shield-check-fill.svg) | .shield-check-fill | ![](./imgs/Icons/shield-lock-line.svg)    | .shield-lock-line    | ![](./imgs/Icons/shield-lock-fill.svg)    | .shield-lock-fill    |
| ![](./imgs/Icons/patch-check-line.svg)    | .patch-check-line  | ![](./imgs/Icons/patch-check-fill.svg)  | .patch-check-fill  | ![](./imgs/Icons/patch-question-line.svg) | .patch-question-line | ![](./imgs/Icons/patch-question-fill.svg) | .patch-question-fill |

#### Communication Icons Table

| Icon                                       | Style                 | Icon                                       | Style                 | Icon                                      | Style                | Icon                                      | Style                |
| :--:                                       | -----                 | :--:                                       | -----                 | :--:                                      | -----                | :--:                                      | -----                |
| ![](./imgs/Icons/phone-line.svg)           | .phone-line           | ![](./imgs/Icons/phone-fill.svg)           | .phone-fill           | ![](./imgs/Icons/phonebook-line.svg)      | .phonebook-line      | ![](./imgs/Icons/phonebook-fill.svg)      | .phonebook-fill      |
| ![](./imgs/Icons/mail-close-line.svg)      | .mail-close-line      | ![](./imgs/Icons/mail-close-fill.svg)      | .mail-close-fill      | ![](./imgs/Icons/chat-dots-line.svg)      | .chat-dots-line      | ![](./imgs/Icons/chat-dots-fill.svg)      | .chat-dots-fill      |
| ![](./imgs/Icons/chat-left-quote-line.svg) | .chat-left-quote-line | ![](./imgs/Icons/chat-left-quote-fill.svg) | .chat-left-quote-fill | ![](./imgs/Icons/chat-left-text-line.svg) | .chat-left-text-line | ![](./imgs/Icons/chat-left-text-fill.svg) | .chat-left-text-fill |
| ![](./imgs/Icons/emoji-neutral-line.svg)   | .emoji-neutral-line   | ![](./imgs/Icons/emoji-neutral-fill.svg)   | .emoji-neutral-fill   | ![](./imgs/Icons/emoji-smile-line.svg)    | .emoji-smile-line    | ![](./imgs/Icons/emoji-smile-fill.svg)    | .emoji-smile-fill    |
| ![](./imgs/Icons/emoji-frown-line.svg)     | .emoji-frown-line     | ![](./imgs/Icons/emoji-frown-fill.svg)     | .emoji-frown-fill     | ![](./imgs/Icons/emoji-surprise-line.svg) | .emoji-surprise-line | ![](./imgs/Icons/emoji-surprise-fill.svg) | .emoji-surprise-fill |

#### Cloud Icon Table

| Icon                                    | Style              | Icon                                    | Style              | Icon                                      | Style                | Icon                                      | Style                |
| :--:                                    | -----              | :--:                                    | -----              | :--:                                      | -----                | :--:                                      | -----                |
| ![](./imgs/Icons/cloud-line.svg)        | .cloud-line        | ![](./imgs/Icons/cloud-fill.svg)        | .cloud-fill        | ![](./imgs/Icons/cloud-slash-line.svg)    | .cloud-slash-line    | ![](./imgs/Icons/cloud-slash-fill.svg)    | .cloud-slash-fill    |
| ![](./imgs/Icons/cloud-upload-line.svg) | .cloud-upload-line | ![](./imgs/Icons/cloud-upload-fill.svg) | .cloud-upload-fill | ![](./imgs/Icons/cloud-download-line.svg) | .cloud-download-line | ![](./imgs/Icons/cloud-download-fill.svg) | .cloud-download-fill |

#### Map Icon Table

| Icon                                     | Style               | Icon                                       | Style                 | Icon                                  | Style            |
| :--:                                     | -----               | :--:                                       | -----                 | :--:                                  | -----            |
| ![](./imgs/Icons/map-line.svg)           | .map-line           | ![](./imgs/Icons/map-fill.svg)             | .map-fill             |                                       |                  |
| ![](./imgs/Icons/map-alt-line.svg)       | .map-alt-line       | ![](./imgs/Icons/map-alt-fill.svg)         | .map-alt-fill         |                                       |                  |
| ![](./imgs/Icons/mapmarker-line.svg)     | .mapmarker-line     | ![](./imgs/Icons/mapmarker-fill.svg)       | .mapmarker-fill       | ![](./imgs/Icons/mapmarker-color.svg) | .mapmarker-color |
| ![](./imgs/Icons/mappin-line.svg)        | .mappin-line        | ![](./imgs/Icons/mappin-fill.svg)          | .mappin-fill          | ![](./imgs/Icons/mappin-color.svg)    | .mappin-color    |
| ![](./imgs/Icons/mappointer-line.svg)    | .mappointer-line    | ![](./imgs/Icons/mappointer-fill.svg)      | .mappointer-fill      |                                       |                  |
| ![](./imgs/Icons/mapchart-line.svg)      | .mapchart-line      | ![](./imgs/Icons/mapchart-fill.svg)        | .mapchart-fill        |                                       |                  |
| ![](./imgs/Icons/globe-line.svg)         | .globe-line         | ![](./imgs/Icons/globe-alt-line.svg)       | .globe-alt-line       |                                       |                  |
| ![](./imgs/Icons/globe-america-fill.svg) | .globe-america-fill | ![](./imgs/Icons/globe-africa-fill.svg)    | .globe-africa-fill    |                                       |                  |
| ![](./imgs/Icons/globe-asia-fill.svg)    | .globe-asia-fill    | ![](./imgs/Icons/globe-australia-fill.svg) | .globe-australia-fill |                                       |                  |
| ![](./imgs/Icons/h-circle-line.svg)      | .h-circle-line      | ![](./imgs/Icons/h-circle-fill.svg)        | .h-circle-fill        |                                       |                  |
| ![](./imgs/Icons/highway-66-fill.svg)    | .highway-66-fill    | ![](./imgs/Icons/highway-75-fill.svg)      | .highway-75-fill      | ![](./imgs/Icons/highway-94-fill.svg) | .highway-94-fill |

#### Device Icon Table

| Icon                                   | Style             | Icon                                   | Style             | Icon                                | Style          | Icon                                  | Style            |
| :--:                                   | -----             | :--:                                   | -----             | :--:                                | -----          | :--:                                  | -----            |
| ![](./imgs/Icons/devices-line.svg)     | .devices-line     | ![](./imgs/Icons/laptop-line.svg)      | .laptop-line      | ![](./imgs/Icons/mobile-line.svg)   | .mobile-line   | ![](./imgs/Icons/mobile-alt-line.svg) | .mobile-alt-line |
| ![](./imgs/Icons/mobile-apps-line.svg) | .mobile-apps-line | ![](./imgs/Icons/mobile-apps-fill.svg) | .mobile-apps-fill | ![](./imgs/Icons/computer-line.svg) | .computer-line | ![](./imgs/Icons/camera-fill.svg)     | .camera-fill     |

#### Brand Icon Table

| Icon                               | Style         | Icon                             | Style       | Icon                              | Style        |
| :--:                               | -----         | :--:                             | -----       | :--:                              | -----        |
| ![](./imgs/Icons/android-fill.svg) | .android-fill | ![](./imgs/Icons/apple-fill.svg) | .apple-fill | ![](./imgs/Icons/huawei-fill.svg) | .huawei-fill |

#### Apps Icons Table

| Icon                                     | Style               | Icon                                        | Style                  | Icon                                    | Style              | Icon                                     | Style               |
| :--:                                     | -----               | :--:                                        | -----                  | :--:                                    | -----              | :--:                                     | -----               |
| ![](./imgs/Icons/app-line.svg)           | .app-line           | ![](./imgs/Icons/app-notification-line.svg) | .app-notification-line | ![](./imgs/Icons/acrobat-fill.svg)      | .acrobat-fill      | ![](./imgs/Icons/acrobat-color.svg)      | .acrobat-color      |      
| ![](./imgs/Icons/applemail-fill.svg)     | .applemail-fill     | ![](./imgs/Icons/applemail-color.svg)       | .applemail-color       | ![](./imgs/Icons/appstore-fill.svg)     | .appstore-fill     | ![](./imgs/Icons/appstore-color.svg)     | .appstore-color     |  
| ![](./imgs/Icons/appstore-alt-fill.svg)  | .appstore-alt-fill  | ![](./imgs/Icons/appstore-alt-color.svg)    | .appstore-alt-color    | ![](./imgs/Icons/bcardy-fill.svg)       | .bcardy-fill       | ![](./imgs/Icons/bcardy-color.svg)       | .bcardy-color       |  
| ![](./imgs/Icons/behance-fill.svg)       | .behance-fill       | ![](./imgs/Icons/behance-color.svg)         | .behance-color         | ![](./imgs/Icons/facebook-fill.svg)     | .facebook-fill     | ![](./imgs/Icons/facebook-color.svg)     | .facebook-color     |  
| ![](./imgs/Icons/facebook-alt-fill.svg)  | .facebook-alt-fill  | ![](./imgs/Icons/facebook-alt-color.svg)    | .facebook-alt-color    | ![](./imgs/Icons/github-fill.svg)       | .github-fill       | ![](./imgs/Icons/github-color.svg)       | .github-color       |  
| ![](./imgs/Icons/gmail-fill.svg)         | .gmail-fill         | ![](./imgs/Icons/gmail-color.svg)           | .gmail-color           | ![](./imgs/Icons/googlemaps-fill.svg)   | .googlemaps-fill   | ![](./imgs/Icons/googlemaps-color.svg)   | .googlemaps-color   |  
| ![](./imgs/Icons/googleplay-fill.svg)    | .googleplay-fill    | ![](./imgs/Icons/googleplay-color.svg)      | .googleplay-color      | ![](./imgs/Icons/instagram-fill.svg)    | .instagram-fill    | ![](./imgs/Icons/instagram-color.svg)    | .instagram-color    |  
| ![](./imgs/Icons/instagram-alt-fill.svg) | .instagram-alt-fill | ![](./imgs/Icons/instagram-alt-color.svg)   | .instagram-alt-color   | ![](./imgs/Icons/line-fill.svg)         | .line-fill         | ![](./imgs/Icons/line-color.svg)         | .line-color         |  
| ![](./imgs/Icons/line-alt-fill.svg)      | .line-alt-fill      | ![](./imgs/Icons/line-alt-color.svg)        | .line-alt-color        | ![](./imgs/Icons/linkedin-fill.svg)     | .linkedin-fill     | ![](./imgs/Icons/linkedin-color.svg)     | .linkedin-color     |  
| ![](./imgs/Icons/linkedin-alt-fill.svg)  | .linkedin-alt-fill  | ![](./imgs/Icons/linkedin-alt-color.svg)    | .linkedin-alt-color    | ![](./imgs/Icons/messenger-fill.svg)    | .messenger-fill    | ![](./imgs/Icons/messenger-color.svg)    | .messenger-color    |   
| ![](./imgs/Icons/outlook-fill.svg)       | .outlook-fill       | ![](./imgs/Icons/outlook-color.svg)         | .outlook-color         | ![](./imgs/Icons/samsungemail-fill.svg) | .samsungemail-fill | ![](./imgs/Icons/samsungemail-color.svg) | .samsungemail-color |
| ![](./imgs/Icons/skype-fill.svg)         | .skype-fill         | ![](./imgs/Icons/skype-color.svg)           | .skype-color           | ![](./imgs/Icons/telegram-fill.svg)     | .telegram-fill     | ![](./imgs/Icons/telegram-color.svg)     | .telegram-color     |
| ![](./imgs/Icons/telegram-alt-fill.svg)  | .telegram-alt-fill  | ![](./imgs/Icons/telegram-alt-color.svg)    | .telegram-alt-color    | ![](./imgs/Icons/tiktok-fill.svg)       | .tiktok-fill       | ![](./imgs/Icons/tiktok-color.svg)       | .tiktok-color       |
| ![](./imgs/Icons/twitter-fill.svg)       | .twitter-fill       | ![](./imgs/Icons/twitter-color.svg)         | .twitter-color         | ![](./imgs/Icons/twitter-alt-fill.svg)  | .twitter-alt-fill  | ![](./imgs/Icons/twitter-alt-color.svg)  | .twitter-alt-color  |
| ![](./imgs/Icons/twitter-x-fill.svg)     | .twitter-x-fill     | ![](./imgs/Icons/twitter-x-color.svg)       | .twitter-x-color       | ![](./imgs/Icons/vimeo-fill.svg)        | .vimeo-fill        | ![](./imgs/Icons/vimeo-color.svg)        | .vimeo-color        |
| ![](./imgs/Icons/vimeo-alt-fill.svg)     | .vimeo-alt-fill     | ![](./imgs/Icons/vimeo-alt-color.svg)       | .vimeo-alt-color       | ![](./imgs/Icons/yahoo-fill.svg)        | .yahoo-fill        | ![](./imgs/Icons/yahoo-color.svg)        | .yahoo-color        |
| ![](./imgs/Icons/yahoo-alt-fill.svg)     | .yahoo-alt-fill     | ![](./imgs/Icons/yahoo-alt-color.svg)       | .yahoo-alt-color       | ![](./imgs/Icons/youtube-fill.svg)      | .youtube-fill      | ![](./imgs/Icons/youtube-color.svg)      | .youtube-color      |
| ![](./imgs/Icons/whatsapp-fill.svg)      | .whatsapp-fill      | ![](./imgs/Icons/whatsapp-color.svg)        | .whatsapp-color        | ![](./imgs/Icons/whatsapp-alt-fill.svg) | .whatsapp-alt-fill | ![](./imgs/Icons/whatsapp-alt-color.svg) | .whatsapp-alt-color |

#### Options Icon Table

| Icon                                   | Style             | Icon                                   | Style             | Icon                                  | Style            | Icon                                  | Style            |
| :--:                                   | -----             | :--:                                   | -----             | :--:                                  | -----            | :--:                                  | -----            |
| ![](./imgs/Icons/at-line.svg)          | .at-line          | ![](./imgs/Icons/at-lg-line.svg)       | .at-lg-line       | ![](./imgs/Icons/award-line.svg)      | .award-line      | ![](./imgs/Icons/award-fill.svg)      | .award-fill      |
| ![](./imgs/Icons/basket-line.svg)      | .basket-line      | ![](./imgs/Icons/basket-fill.svg)      | .basket-fill      | ![](./imgs/Icons/bell-line.svg)       | .bell-line       | ![](./imgs/Icons/bell-fill.svg)       | .bell-fill       |
| ![](./imgs/Icons/bluetooth-line.svg)   | .bluetooth-line   | ![](./imgs/Icons/bluetooth-fill.svg)   | .bluetooth-fill   | ![](./imgs/Icons/bug-line.svg)        | .bug-line        | ![](./imgs/Icons/bug-fill.svg)        | .bug-fill        |
| ![](./imgs/Icons/cash-line.svg)        | .cash-line        | ![](./imgs/Icons/cash-alt-fill.svg)    | .cash-alt-fill    | ![](./imgs/Icons/circle-line.svg)     | .circle-line     | ![](./imgs/Icons/circle-fill.svg)     | .circle-fill     |
| ![](./imgs/Icons/contacts-line.svg)    | .contacts-line    | ![](./imgs/Icons/contacts-fill.svg)    | .contacts-fill    | ![](./imgs/Icons/copy-link-line.svg)  | .copy-link-line  | ![](./imgs/Icons/copy-link-fill.svg)  | .copy-link-fill  |
| ![](./imgs/Icons/easel-line.svg)       | .easel-line       | ![](./imgs/Icons/easel-fill.svg)       | .easel-fill       | ![](./imgs/Icons/eye-line.svg)        | .eye-line        | ![](./imgs/Icons/eye-fill.svg)        | .eye-fill        |
| ![](./imgs/Icons/eye-slash-line.svg)   | .eye-slash-line   | ![](./imgs/Icons/eye-slash-fill.svg)   | .eye-slash-fill   | ![](./imgs/Icons/flag-line.svg)       | .flag-line       | ![](./imgs/Icons/flag-fill.svg)       | .flag-fill       |
| ![](./imgs/Icons/floppy-line.svg)      | .floppy-line      | ![](./imgs/Icons/floppy-fill.svg)      | .floppy-fill      | ![](./imgs/Icons/gear-line.svg)       | .gear-line       | ![](./imgs/Icons/gear-fill.svg)       | .gear-fill       |
| ![](./imgs/Icons/gears-line.svg)       | .gears-line       | ![](./imgs/Icons/gears-fill.svg)       | .gears-fill       | ![](./imgs/Icons/grid3x2-line.svg)    | .grid3x2-line    | ![](./imgs/Icons/grid3x3-line.svg)    | .grid3x3-line    |
| ![](./imgs/Icons/health-line.svg)      | .health-line      | ![](./imgs/Icons/health-fill.svg)      | .health-fill      | ![](./imgs/Icons/home-line.svg)       | .home-line       | ![](./imgs/Icons/home-fill.svg)       | .home-fill       |
| ![](./imgs/Icons/image-line.svg)       | .image-line       | ![](./imgs/Icons/image-fill.svg)       | .image-fill       | ![](./imgs/Icons/image-alt-line.svg)  | .image-alt-line  | ![](./imgs/Icons/images-line.svg)     | .images-line     |
| ![](./imgs/Icons/key-line.svg)         | .key-line         | ![](./imgs/Icons/key-fill.svg)         | .key-fill         | ![](./imgs/Icons/keyboard-line.svg)   | .keyboard-line   | ![](./imgs/Icons/keyboard-fill.svg)   | .keyboard-fill   |
| ![](./imgs/Icons/layers-line.svg)      | .layers-line      | ![](./imgs/Icons/layers-fill.svg)      | .layers-fill      | ![](./imgs/Icons/lightbulb-line.svg)  | .lightbulb-line  | ![](./imgs/Icons/lightbulb-fill.svg)  | .lightbulb-fill  |
| ![](./imgs/Icons/lock-line.svg)        | .lock-line        | ![](./imgs/Icons/lock-fill.svg)        | .lock-fill        | ![](./imgs/Icons/mailbox-line.svg)    | .mailbox-line    | ![](./imgs/Icons/mailbox-fill.svg)    | .mailbox-fill    |
| ![](./imgs/Icons/mortarboard-line.svg) | .mortarboard-line | ![](./imgs/Icons/mortarboard-fill.svg) | .mortarboard-fill | ![](./imgs/Icons/piechart-line.svg)   | .piechart-line   | ![](./imgs/Icons/piechart-fill.svg)   | .piechart-fill   |
| ![](./imgs/Icons/palette-line.svg)     | .palette-line     | ![](./imgs/Icons/palette-fill.svg)     | .palette-fill     | ![](./imgs/Icons/pen-line.svg)        | .pen-line        | ![](./imgs/Icons/pen-fill.svg)        | .pen-fill        |
| ![](./imgs/Icons/pencil-line.svg)      | .pencil-line      | ![](./imgs/Icons/pencil-fill.svg)      | .pencil-fill      | ![](./imgs/Icons/pin-line.svg)        | .pin-line        | ![](./imgs/Icons/pin-fill.svg)        | .pin-fill        |
| ![](./imgs/Icons/plant-line.svg)       | .plant-line       | ![](./imgs/Icons/plant-fill.svg)       | .plant-fill       | ![](./imgs/Icons/play-line.svg)       | .play-line       | ![](./imgs/Icons/play-fill.svg)       | .play-fill       |
| ![](./imgs/Icons/play-circle-line.svg) | .play-circle-line | ![](./imgs/Icons/play-circle-fill.svg) | .play-circle-fill | ![](./imgs/Icons/send-line.svg)       | .send-line       | ![](./imgs/Icons/send-fill.svg)       | .send-fill       |
| ![](./imgs/Icons/separationh-line.svg) | .separationh-line | ![](./imgs/Icons/separationv-line.svg) | .separationv-line | ![](./imgs/Icons/share-line.svg)      | .share-line      | ![](./imgs/Icons/share-fill.svg)      | .share-fill      |
| ![](./imgs/Icons/shop-line.svg)        | .shop-line        | ![](./imgs/Icons/shop-alt-fill.svg)    | .shop-alt-fill    | ![](./imgs/Icons/signpost-line.svg)   | .signpost-line   | ![](./imgs/Icons/signpost-fill.svg)   | .signpost-fill   |
| ![](./imgs/Icons/sim-line.svg)         | .sim-line         | ![](./imgs/Icons/sim-fill.svg)         | .sim-fill         | ![](./imgs/Icons/star-line.svg)       | .star-line       | ![](./imgs/Icons/star-fill.svg)       | .star-fill       |
| ![](./imgs/Icons/star-circle-line.svg) | .star-circle-line | ![](./imgs/Icons/star-circle-fill.svg) | .star-circle-fill | ![](./imgs/Icons/stoplights-line.svg) | .stoplights-line | ![](./imgs/Icons/stoplights-fill.svg) | .stoplights-fill |
| ![](./imgs/Icons/time-line.svg)        | .time-line        | ![](./imgs/Icons/time-fill.svg)        | .time-fill        | ![](./imgs/Icons/trash-line.svg)      | .trash-line      | ![](./imgs/Icons/trash-fill.svg)      | .trash-fill      |
| ![](./imgs/Icons/trophy-line.svg)      | .trophy-line      | ![](./imgs/Icons/trophy-fill.svg)      | .trophy-fill      | ![](./imgs/Icons/unlock-line.svg)     | .unlock-line     | ![](./imgs/Icons/unlock-fill.svg)     | .unlock-fill     |
| ![](./imgs/Icons/wallet-line.svg)      | .wallet-line      | ![](./imgs/Icons/wallet-fill.svg)      | .wallet-fill      | ![](./imgs/Icons/wifi-on-line.svg)    | .wifi-on-line    | ![](./imgs/Icons/wifi-off-line.svg)   | .wifi-off-line   |
| ![](./imgs/Icons/window-app-line.svg)  | .window-app-line  | ![](./imgs/Icons/window-app-fill.svg)  | .window-app-fill  | ![](./imgs/Icons/zoomin-line.svg)     | .zoomin-line     | ![](./imgs/Icons/zoomout-line.svg)    | .zoomout-line    |

#### Composer Icon Table

| Icon                                         | Style                   | Icon                                          | Style                    | Icon                                   | Style             | Icon                                    | Style              |
| :--:                                         | -----                   | :--:                                          | -----                    | :--:                                   | -----             | :--:                                    | -----              |
| ![](./imgs/Icons/doublequotes-left-fill.svg) | .doublequotes-left-fill | ![](./imgs/Icons/doublequotes-right-fill.svg) | .doublequotes-right-fill | ![](./imgs/Icons/indent-left-line.svg) | .indent-left-line | ![](./imgs/Icons/indent-right-line.svg) | .indent-right-line |
| ![](./imgs/Icons/link-line.svg)              | .link-line              | ![](./imgs/Icons/link-alt-line.svg)           | .link-alt-line           | ![](./imgs/Icons/list-check-line.svg)  | .list-check-line  | ![](./imgs/Icons/list-number-line.svg)  | .list-number-line  |
| ![](./imgs/Icons/list-stars-line.svg)        | .list-stars-line        | ![](./imgs/Icons/list-unorderd-line.svg)      | .list-unorderd-line      | ![](./imgs/Icons/textleft-line.svg)    | .textleft-line    | ![](./imgs/Icons/textright-line.svg)    | .textright-line    |

#### Other Icons Table

| Icon                                        | Style                  | Icon                                        | Style                  | Icon                                        | Style                  | Icon                                  | Style            |
| :---:                                       | ------                 | :---:                                       | ------                 | :---:                                       | ------                 | :---:                                 | ------           |
| ![](./imgs/Icons/ai-fill.svg)               | .ai-fill               | ![](./imgs/Icons/bullseye-line.svg)         | .bullseye-line         | ![](./imgs/Icons/columnsgap-line.svg)       | .columnsgap-line       | ![](./imgs/Icons/dart-fill.svg)       | .dart-fill       |
| ![](./imgs/Icons/datasheet-line.svg)        | .datasheet-line        | ![](./imgs/Icons/datasheet-health-line.svg) | .datasheet-health-line | ![](./imgs/Icons/hash-line.svg)             | .hash-line             | ![](./imgs/Icons/headphones-line.svg) | .headphones-line |
| ![](./imgs/Icons/headset-line.svg)          | .headset-line          | ![](./imgs/Icons/lab-fill.svg)              | .lab-fill              | ![](./imgs/Icons/logout-line.svg)           | .logout-line           | ![](./imgs/Icons/medal-line.svg)      | .medal-line      |
| ![](./imgs/Icons/menu-line.svg)             | .menu-line             | ![](./imgs/Icons/pencil-square-fill.svg)    | .pencil-square-fill    | ![](./imgs/Icons/polygon-editable-line.svg) | .polygon-editable-line | ![](./imgs/Icons/qr-line.svg)         | .qr-line         |
| ![](./imgs/Icons/qr-scan-line.svg)          | .qr-scan-line          | ![](./imgs/Icons/quote-fill.svg)            | .quote-fill            | ![](./imgs/Icons/rotate-line.svg)           | .rotate-line           | ![](./imgs/Icons/search-line.svg)     | .search-line     |
| ![](./imgs/Icons/speedometer-line.svg)      | .speedometer-line      | ![](./imgs/Icons/translate-fill.svg)        | .translate-fill        | ![](./imgs/Icons/web-line.svg)              | .web-line              | ![](./imgs/Icons/universal-line.svg)  | .universal-line  |
| ![](./imgs/Icons/universal-circle-line.svg) | .universal-circle-line |

#### Animated Icons Table

| Icon                                          | Style                    | Icon                                         | Style                   | Icon                                             | Style                       |
| :--:                                          | -----                    | :--:                                         | -----                   | :--:                                             | -----                       |
| ![](./imgs/Icons/animation-loarder-comet.svg) | .animation-loarder-comet | ![](./imgs/Icons/animation-loarder-ring.svg) | .animation-loarder-ring | ![](./imgs/Icons/animation-loarder-ringpath.svg) | .animation-loarder-ringpath |

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

It is a static class that does not have a constructor or properties.

#### Methods

##### Static methods of the `WUIFade` class:

One way to use the library is by calling static methods directly on the `WUIFade` class:

| Method | Return type | Description |
| ------ | ----------- | ----------- |
| in     | `void`      | `in(element[, options])`<br><br>Arguments:<br>**• element:** `HTMLElement` <br>**• options:** `object` *optional*<br><br>Execute the fadein transition. |
| out    | `void`      | `out(element[, options])`<br><br>Arguments:<br>**• element:** `HTMLElement` <br>**• options:** `object` *optional*<br><br>Execute the fadeout transition. |

##### Extended methods of the `HTMLElement` class:

Another alternative way is through extended methods of the `HTMLElement` class through its prototype:

| Method.    | Return type | Description |
| ---------- | ----------- | ----------- |
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

<a name="wuiTooltip"></a>
<a name="wuiLoader"></a>
<a name="wuiModal"></a>
<a name="wuiModalSelector"></a>
<a name="wuiSlider"></a>
<a name="wuiPaging"></a>
<a name="wuiTabs"></a>
<a name="wuiList"></a>

### WUIList

Versión: `0.2`

Advanced object for implementing data lists and buttons for each row optionally.

#### Constructor

| Type    | Description |
| ------- | ----------- |
| WUIList | `WUIList([properties])`<br><br>Arguments:<br>**• properties:** `object` *optional* |

#### Properties

| Property     | Type       | Default value | Description |
| ------------ | ---------- | ------------- | ----------- |
| selector     | `string`   | `.wui-list`   | (get/set)<br><br>CSS selector that defines the HTML element that will be converted into the advanced list object. If more than one element matches the selector, only the first match will be included. |
| paging       | `number`   | `0`           | (get/set)<br><br>Paging, or the number of rows per page in the list. A value of `0` indicates that the pagination will be the same length as the list of rows; in other words, a value of `0` disables paging. |
| page         | `number`   | `0`           | (get)<br><br>Current page displayed in the list, where page `0` corresponds to the first page and the last to the total number of rows minus 1. |
| pages        | `number`   | `0`           | (get)<br><br>Total number of pages. |
| total        | `number`   | `0`           | (get)<br><br>Total number of rows. |
| columns      | `array`    | `[]`          | (get/set)<br><br>List of columns in the list, as defined by **Column Options**. |
| rows         | `array`    | `[]`          | (get/set)<br><br>List of rows in the list, as defined by **Row Options**. |
| buttons      | `array`    | `[]`          | (get/set)<br><br>List of row buttons in the list, as defined by **Row Button Options**. |
| buttonsStyle | `string`   | `"round"`     | (get/set)<br><br>Row button style.<br><br>Values:<br>• `"round"`, circular shape.<br>• `"stretch"`, square shape. |
| onPrint      | `function` | `null`        | (get/set)<br><br>Function that is called when a page or the entire list is displayed. The function receives as a parameter:<br><br>**• page:** `number`, page number. |
| onClick      | `function` | `null`        | (get/set)<br><br>Function that is called when a row is pressed. The function receives as parameter:<br><br>**• index:** `number`, row number.**• id:** `string`, row id.**• event:** `Event`, event.**• index:** `options`, row settings options. |

#### Column Options

| Property | Type     | Default value | Description |
| -------- | -------- | ------------- | ----------- |
| width    | `string` | `undefined`   | Column width. This can be expressed as a number associated with pixels or in a CSS compatible format. |
| align    | `string` | `"left"`      | Alignment mode for column content.<br><br>Values:<br>• `"left"`<br>• `"right"`<br>• `"center"` |

#### Rows Options

| Property     | Type      | Default value | Description |
| ------------ | --------- | ------------- | ----------- |
| id           | `string`  | `undefined`   | Unique row identifier. |
| data         | `array`   | `[]`          | Array with the contents of the cells in the row. |
| innerContent | `string`  | `undefined`   | Optional inner row content, displayed at the bottom of the row. |
| innerOpened  | `boolean` | `false`       | Initial opening of optional inner row content. |
| enabled      | `boolean` | `true`        | Row enable state. The default is `true`. |

#### Row Button Options

| Property  | Type.               | Default value | Description |
| --------- | ------------------- | ------------- | ----------- |
| iconClass | `string\|function`  | `undefined`   | CSS styles that define the row button icon. This option can optionally be used with the [WUIIcon](#wuiIcon) library by using the `wui-icon` style in conjunction with a specific icon style. |
| bgcolor   | `string\|function`  | `undefined`   | Background color in CSS compatible format. |
| enabled   | `boolean\|function` | `true`        | Button enable state. |
| onClick   | `function`          | `null`        | Function called when the button is pressed. It receives the parameters `index`, corresponding to the row position starting from `0`; `id`, corresponding to the row's unique identifier; and `event`, corresponding to the event capture object. |

> [!IMPORTANT]
> Options that accept optional function values ​​(`iconClass`, `bgcolor` and `enabled`) receive the parameters `index`, corresponding to the row position starting from `0`; and `id`, corresponding to the row's unique identifier.

#### Methods

| Method       | Return type   | Description |
| ------------ | ------------- | ----------- |
| getElement   | `HTMLElement` | `getElement()`<br><br>Returns the HTML element containing the advanced object. |
| init         | `void`        | `init()`<br><br>Initializes the object. |
| addColumn    | `void`        | `addColumn(options)`<br><br>Adds a new column settings to the object's column list, as defined in **Column Options**. |
| addRow       | `void`        | `addRow(options)`<br><br>Adds a new row settings to the object's rows list, as defined by **Row Options**. |
| addButton    | `void`        | `addButton(options)`<br><br>Adds a new row button settings to the object's list of row buttons, as defined by **RowButtonOptions**. |
| print        | `void`        | `print([page])`<br><br>Arguments:<br>**• page:** `number`, page number. The default value corresponds to the `page` property. If a value other than the `page` property is passed as a parameter and if it is valid, the property will take that value.<br><br>Prints a list view; this view can be a page or the entire list depending on the `paging` property and the `page` parameter. |
| enableRow    | `void`        | `enableRow(index[, enabled])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• enabled:** `boolean`, row enable state. The default value is `true`.<br><br>Enables or disables a row. |
| openInnerRow | `void`        | `openInnerRow(index[, open])`<br><br>Arguments:<br>**• index:** `number`, row number.<br>**• open:** `boolean`, open state of the optional inner row content. The default value is `true`.<br><br>Opens or closes the optional inner row content. |
| prev         | `void`        | `prev()`<br><br>Displays the view of the previous page if it exists. |
| next         | `void`        | `next()`<br><br>Displays the next page view if one exists. |
| isPrevEnable | `boolean`     | `isPrevEnable()`<br><br>Returns whether a previous page exists. |
| isNextEnable | `boolean`     | `isNextEnable()`<br><br>Returns whether a next page exists. |

#### Implementation

HTML head:

```html
<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Icon/WUIIcon-0.1.css">
<link type="text/css" rel="stylesheet" href="./Libraries/WUI/List/WUIList-0.2.css">
<script type="text/javascript" src="./Libraries/WUI/List/WUIList-0.2.js"></script>
```

CSS code:

```css
.my-button {
	width: 40px;
	text-align: center;
}
.my-paging {
	display: inline;
	font-size: 16px;
}
```

HTML code:

```html
<button class="my-button prev"><</button>
<button class="my-button next">></button>
<div class="my-paging"></div>
<div class="wui-list my-list"></div>
```

JS code:

```js
// Create object
const prev = document.body.querySelector(".my-button.prev");
const next = document.body.querySelector(".my-button.next");
const paging = document.body.querySelector(".my-paging");
const list = new WUIList({
	selector: ".wui-list.my-list",
	paging: 10,
	columns: [{
		width: 40,
		align: "center"
	}, {
		align: "left"
	}],
	rows: [],  // Default value, property can be omitted
	buttons: [{
		iconClass: "wui-icon trash-fill",
		bgcolor: "#f44343",
		onClick: (index, id) => {
			console.log(`Trash button - index: ${index}, id: ${id}`);
		},
		enabled: true
	}],
	buttonsStyle: "stretch",
	onPrint: (page, pages, total) => {
		prev.disabled = !list.isPrevEnable();
		next.disabled = !list.isNextEnable();
		paging.innerHTML = `${page}/${pages} (${total})`;
	},
	onClick: (index, id, event, options) => {
		console.log(`Row - index: ${index}, id: ${id}`);
	}
});

// Initialize object
list.init();

// Load dataset
list.rows = [{
	id: "row1", data: ["A1", "B1"]}, {
	id: "row2", data: ["A2", "B2"]}, {
	id: "row3", data: ["A3", "B3"], inner: "Row 3.", innerOpened: true}, {
	id: "row4", data: ["A4", "B4"]}, {
	id: "row5", data: ["A5", "B5"]}, {
	id: "row6", data: ["A6", "B6"]}, {
	id: "row7", data: ["A7", "B7"]}, {
	id: "row8", data: ["A8", "B8"]}, {
	id: "row9", data: ["A9", "B9"], enabled: false}, {
	id: "row10", data: ["A10", "B10"]}, {
	id: "row12", data: ["A12", "B12"]
}];
list.print();
```

<a name="wuiTable"></a>
<a name="wuiForm"></a>
<a name="wuiFormat"></a>
<a name="wuiSelectpicker"></a>
<a name="wuiDatepicker"></a>
<a name="wuiTimepicker"></a>
<a name="wuiColorpicker"></a>
<a name="wuiCheckbox"></a>
<a name="wuiIntensity"></a>
<a name="wuiButton"></a>