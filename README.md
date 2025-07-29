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
| WUITooltip       | `0.1`   | Simple element for hover text. |
| WUILoader        | `0.1`   | Simple element for loading animation. |
| WUIModal         | `0.1`   | Composite element for implementing dialog boxes (type `message`) and pop-up windows (type `page`). |
| WUIModalSelector | `0.1`   | Extension of `WUIModal` for implementing selection lists based on arrays or data inputs of type `<select>`. |
| WUISlider        | `0.1`   | Composite element for implementing mouse-controlled and/or event-controlled blinds. |
| WUIPaging        | `0.1`   | 
| WUITabs          | `0.1`   | 
| WUIList          | `0.1`   | 
| WUITable         | `0.1`   | 
| WUIForm          | `0.1`   | 
| WUIFormat        | `0.1`   | 
| WUISelectpicker  | `0.1`   | 
| WUIDatepicker    | `0.1`   | 
| WUITimepicker    | `0.1`   | 
| WUIColorpicker   | `0.1`   | 
| WUICheckbox      | `0.1`   | 
| WUIIntensity     | `0.1`   | 
| WUIButton        | `0.1`   | 

<a name="global-implementation"></a>

### Global Implementation

Enable CSS and JS dependencies for the classes to be used. Assuming the library
is installed in the `/Libraries/WUI` path, the HTML header looks like this:

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
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Scrolly/WUIScrolly-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Icon/WUIIcon-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Tooltip/WUITooltip-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Loader/WUILoader-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Modal/WUIModal-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Modal/WUIModalSelect-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Slider/WUISlider-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Paging/WUIPaging-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Tabs/WUITabs-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/List/WUIList-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Table/WUITable-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Form/WUIForm-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Selectpicker/WUISelectpicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Datepicker/WUIDatepicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Timepicker/WUITimepicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Colorpicker/WUIColorpicker-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Checkbox/WUICheckbox-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Intensity/WUIIntensity-0.1.css">
		<link type="text/css" rel="stylesheet" href="/Libraries/WUI/Button/WUIButton-0.1.css">
		<script type="text/javascript" src="/Libraries/WUI/Cookie/WUICookie-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Head/WUIHead-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Body/WUIBody-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Language/WUILanguage-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Scrolly/WUIScrolly-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Icon/WUIIcon-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Fade/WUIFade-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Tooltip/WUITooltip-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Loader/WUILoader-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Modal/WUIModal-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Modal/WUIModalSelect-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Slider/WUISlider-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Paging/WUIPaging-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Tabs/WUITabs-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/List/WUIList-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Table/WUITable-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Form/WUIForm-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Format/WUIFormat-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Selectpicker/WUISelectpicker-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Datepicker/WUIDatepicker-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Timepicker/WUITimepicker-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Colorpicker/WUIColorpicker-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Checkbox/WUICheckbox-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Intensity/WUIIntensity-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Button/WUIButton-0.1.js"></script>
	</head>
	<body>
	</body>
</html>
```

<a name="classes"></a>

## Classes

<a name="class-wuiCookie"></a>

### WUICookie Class

Version: `0.1`

Cookie manager.

#### Properties

| Property | Type    | Default value.      | Description |
| -------- | ------- | ------------------- | ----------- |
| domain   | string  | `location.hostname` | Defines the domain for which the cookie is accessible. By default, it's the current host. Setting it to a parent domain (e.g., example.com for sub.example.com) makes it accessible to subdomains. |
| path     | string  | `"./"`              | Specifies the path for which the cookie is valid. The default value is the current path, with an empty value being equivalent to this. Setting "/" makes the cookie accessible across the entire domain. |
| minutes  | integer | `525600`            | 
| overssl  | boolean | `false`             | 

#### Methods

| Method    | Return type | Description |
| --------- | ----------- | ----------- |
| set       | void        | 
| get       | string      | 

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