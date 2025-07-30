# wuijs-lib

## Tabla de Contenidos

*   [Description General](#overview)
	*   [Tabla de Clases](#classes-table)
	*   [Implementación Global](#global-implementation)
*   [Clases](#classes)
	*   [Clase WUICookie](#class-wuiCookie)

<a name="overview"></a>

## Description General

Versión Global: `0.2`

Licencia: `Licencia Apache 2.0`

WUI, acrónimo del inglés *Web User Interface JavaScript library*, es una
biblioteca JS de código abierto orientada a la implementación rápida de
intetfaces de usuario Web compuesta por 25 clases, las que pueden ser
utilizadas de manera independiente o conjunta.

<a name="classes-table"></a>

### Tabla de Clases

| Class            | Version | Descripción |
| ---------------- | -------:| ----------- |
| WUICookie        | `0.1`   | Administrador de cookies. |
| WUIHead          | `0.1`   | Administrador de cabecera HTML. |
| WUIBody          | `0.1`   | Administrador de cuerpo HTML. Permite la importación de secciones CSS/JS/HTML y facilita la implementación en entornos nativos móviles. |
| WUILanguage      | `0.2`   | Administrador de idioma. Permite la importación de interfaces que cambian dinámicamente de idioma en base a objetos JSON. |
| WUIScrolly       | `0.1`   | Herramienta para animación de elementos HTML mediante el evento "on scroll" de cuerpo de la página HTML. |
| WUIIcon          | `0.1`   | Conjunto de íconos prediseñados y carga mediante CSS, para uso en interfaces. |
| WUIFade          | `0.1`   | Herramienta para salida y entrada con opacidad (fade-out y fade-in respectivamente) de elementos HTML. |
| WUITooltip       | `0.1`   | Elemento simple para texto emergente. |
| WUILoader        | `0.1`   | Elemento simple para animación de carga. |
| WUIModal         | `0.1`   | Elemento compuesto para implementación de cuadros de diálogo (tipo `message`) y ventanas emergentes (tipo `page`). |
| WUIModalSelector | `0.1`   | Extensión de `WUIModal` para la implementación de listas de selección en base a arreglos o a entradas de datos de tipo `<select>`. |
| WUISlider        | `0.1`   | Elemento compuesto para implementación de persianas controladas por ratón y/o por evento. |
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

### Implementación Global

Para habilitar todas las clases se deben implementar las dependencias CSS y JS
de las librerías en la cabecera HTML de la página web conjuntamente con el
archivo de configuración de estilos.

Código CSS archivo `examples/Global/WUI.css`:

```css
```

Suponiendo que el archivo de configuración de estilos CSS es instalado en la
ruta relativa `./Settings/WUI.css` y las librerías están instaladas en la ruta
relativa `./Libraries/WUI`, la cabecera HTML queda de la forma:

Código HTML archivo `examples/Global/Global.html`:

```html
<!doctype html>
<html>
	<head>
		<title></title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
		<meta name="application-name" content="">
		<meta name="theme-color" content="">
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
		<script type="text/javascript" src="./Libraries/WUI/Scrolly/WUIScrolly-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Language/WUILanguage-0.1.js"></script>
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

## Clases

### Clase WUICookie

Versión: `0.1`

Administrador de cookies.

#### Propiedades

| Propiedad | Tipo    | Valor por omisión   | Descripción |
| --------- | ------- | ------------------- | ----------- |
| domain    | string  | `location.hostname` | Define el dominio desde el que se puede acceder a la cookie. Por defecto, es el host actual. Al configurarlo como un dominio principal (p. ej., ejemplo.com para sub.ejemplo.com), los subdominios pueden acceder a él. |
| path      | string  | `"./"`              | Especifica la ruta válida para la cookie. El valor predeterminado es la ruta actual siendo el valor vacío equivalente a este. Al establecer "/", la cookie es accesible en todo el dominio. |
| minutes   | integer | `525600`            | 
| overssl   | boolean | `false`             | 

#### Métodos

| Método    | Tipo retorno | Descripción |
| --------- | ------------ | ----------- |
| set       | void         | 
| get       | string       | 

#### Implementación

Código JS:

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