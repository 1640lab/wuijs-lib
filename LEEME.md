# wuijs-lib

WUI, acrónimo del inglés *Web User Interface JavaScript library*, es una
biblioteca JS de código abierto orientada a la implementación rápida de
intetfaces de usuario Web compuesta por 25 clases, las que pueden ser
utilizadas de manera independiente o conjunta.

## Versión Global

0.1

## Licencia

Licencia Apache 2.0

## Clases

| Class            | Version | Descripción |
| ---------------- | -------:| ----------- |
| WUICookie        | 0.1     | Administrador de cookies. |
| WUIHead          | 0.1     | Administrador de cabecera HTML. |
| WUIBody          | 0.1     | Administrador de cuerpo HTML. Permite la importación de secciones CSS/JS/HTML y facilita la implementación en entornos nativos móviles. |
| WUILanguage      | 0.1     | Administrador de idioma. Permite la importación de interfaces que cambian dinámicamente de idioma en base a objetos JSON. |
| WUIScrolly       | 0.1     | 
| WUIIcon          | 0.1     | 
| WUIFade          | 0.1     | 
| WUITooltip       | 0.1     | 
| WUILoader        | 0.1     | 
| WUIModal         | 0.1     | 
| WUIModalSelector | 0.1     | 
| WUISlider        | 0.1     | 
| WUIPaging        | 0.1     | 
| WUITabs          | 0.1     | 
| WUIList          | 0.1     | 
| WUITable         | 0.1     | 
| WUIForm          | 0.1     | 
| WUIFormat        | 0.1     | 
| WUISelectpicker  | 0.1     | 
| WUIDatepicker    | 0.1     | 
| WUITimepicker    | 0.1     | 
| WUIColorpicker   | 0.1     | 
| WUICheckbox      | 0.1     | 
| WUIIntensity     | 0.1     | 
| WUIButton        | 0.1     | 

## Implementación

1. Habilitar las dependencias CSS y JS de las clases que se van a utilizar.
Suponiendo que la librería está instalada en la ruta `/Libraries/WUI`, la
cabecera HTML queda de la forma:

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
		<script type="text/javascript" src="/Libraries/WUI/Scrolly/WUIScrolly-0.1.js"></script>
		<script type="text/javascript" src="/Libraries/WUI/Language/WUILanguage-0.1.js"></script>
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