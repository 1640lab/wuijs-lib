# wuijs-lib

Versión librería: `0.2.0` ([Registro de Cambio](./REGISTRODECAMBIO.md))

Versión documentación: `0.2.0.20250927.1-e` (e: en edición, c: completa)

Licencia: `Licencia Apache 2.0`

Autor: `Sergio E. Belmar V. <sbelmar@1640lab.com>`

## Índice

*   [Description General](#overview)
	*   [Tabla de Clases](#classes-table)
*   [Instalación](#install)
*   [Implementación](#implementation)
*   [Clases](#classes)
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

## Description General

WUI, acrónimo del inglés *Web User Interface JavaScript library*, es una biblioteca JS de código abierto orientada a la implementación rápida de intetfaces de usuario Web compuesta por 25 clases, las que pueden ser utilizadas de manera independiente o conjunta.

<a name="classes-table"></a>

### Tabla de Clases

| Class            | Version | Descripción |
| ---------------- | -------:| ----------- |
| WUICookie        | `0.1`   | Administrador de cookies. |
| WUIHead          | `0.1`   | Administrador de cabecera HTML. |
| WUIBody          | `0.1`   | Administrador de cuerpo HTML. Permite la importación de contenido CSS/JS/HTML y facilita la implementación en entornos nativos móviles. |
| WUILanguage      | `0.2`   | Administrador de idioma para interfaces web. Permite cargar archivos de idioma en formato JS o JSON y actualizar dinámicamente el contenido de los elementos HTML según el idioma. |
| WUIScrolly       | `0.1`   | Herramienta para animación de elementos HTML mediante el evento "onscroll" del cuerpo de la página HTML. |
| WUIIcon          | `0.1`   | Conjunto de íconos prediseñados y carga mediante CSS, para uso en interfaces. |
| WUIFade          | `0.1`   | Herramienta para salida y entrada con opacidad (fade-out y fade-in respectivamente) de elementos HTML. |
| WUITooltip       | `0.1`   | Objeto simple para texto emergente. |
| WUILoader        | `0.1`   | Objeto simple para animación de carga. |
| WUIModal         | `0.2`   | Objeto avanzado para implementación de cuadros de diálogo (tipo `message`) y ventanas emergentes (tipo `page`). |
| WUIModalSelector | `0.1`   | Objeto extendido de `WUIModal` para la implementación de listas de selección en base a arreglos o a entradas de datos de tipo `<select>`. |
| WUISlider        | `0.2`   | Objeto avanzado para implementación de persianas controladas por ratón y/o por evento. |
| WUIPaging        | `0.1`   | Objeto avanzado para implementación de vistas accesibles paginadamente. |
| WUITabs          | `0.1`   | Objeto avanzado para implementación de vistas accesibles mediante selección por pestaña. |
| WUIList          | `0.2`   | Objeto avanzado para implementación de listas de datos y botoneras para cada fila de manera opcional. |
| WUITable         | `0.1`   | Objeto avanzado para implementación de tablas de datos. A diferencia del objeto `WUIList`, el objeto `WUITable` incluye una cabecera de columnas. |
| WUIForm          | `0.1`   | Objeto avanzado para implementación de formularios de datos. Este objeto permite la implementación de elementos HTML de entrada de datos tales como `<input>`, `<select>` y `<textarea>` y objetos de la librería WUI como `WUISelectpicker`, `WUIDatepicker`, `WUITimepicker`, `WUIColorpicker`, `WUICheckbox`, `WUIIntensity` y `WUIButton`. |
| WUIFormat        | `0.1`   | Herramienta para manejo y validación de formatos de datos de tipo `string`, `number` y `Date`. |
| WUISelectpicker  | `0.1`   | Objeto avanzado para implementación de entradas de datos de selección múltiple o excluyente en base a listas en base a elementos HTML `<select>`. |
| WUIDatepicker    | `0.1`   | Objeto avanzado para implementación de entradas de datos de tipo fecha. |
| WUITimepicker    | `0.1`   | Objeto avanzado para implementación de entradas de datos de tipo hora. |
| WUIColorpicker   | `0.1`   | Objeto avanzado para implementación de entradas de datos de tipo selector de color. |
| WUICheckbox      | `0.2`   | Objeto avanzado para implementación de entradas de datos de tipo casilla de verificación. |
| WUIIntensity     | `0.1`   | Objeto avanzado para implementación de entradas de datos de tipo selector de intensidad de 4 niveles: nada, bajo, medio y alto. |
| WUIButton        | `0.1`   | Objeto avanzado para implementación de botones. |

<a name="install"></a>

## Instalación

Para instalar la biblioteca WUI, debe ser clonada desde los repositorios oficiales de distribución en GitHib (`1640lab/wuijs-lib` o `sbelmar/wuijs-lib`). Suponiendo que el proyecto donde se implementará tenga un directorio de descargas: `./downloads`, un directorio de código fuente `./src` y, dentro de este, un directorio de bibliotecas `./src/Libraries`, debe escribir lo siguiente en la terminal:

```bash
cd ./downloads
git clone https://git@github.com/1640lab/wuijs-lib.git
cp -r ./wuijs-lib/src/WDS ../src/Libraries/
```

Opcionalmente puede ser descargada desde los mismos repositorios en formato ZIP.

```bash
cd ./downloads
wget https://github.com/1640lab/wuijs-lib/archive/refs/heads/main.zip
tar -xzf main.zip
cp -p ./wuijs-lib-main/src/WDS ../src/Libraries/
````

<a name="implementation"></a>

## Implementación

Para habilitar todas las clases se deben implementar las dependencias CSS y JS de las librerías en la cabecera HTML de la página web conjuntamente con los archivos de configuración de estilos `Settings.css` y `WUI.css`.

Código CSS archivo `Settings.css`:

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

Código CSS archivo `WUI.css`:

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

	/* wui-slider */

	--wui-slider-dots-bgcolor: transparent;
	--wui-slider-dot-bgcolor: rgba(255, 255, 255, .6);
	--wui-slider-dot-bgcolor-elected: rgba(255, 255, 255, .9);

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

Suponiendo que los archivos de configuración de estilos CSS son instalados en el directorio `./Settings/` y las librería en `./Libraries/`, la cabecera HTML queda de la forma:

Código HTML:

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
		<script type="text/javascript" src="./Libraries/WUI/Body/WUIBody-0.1.js"></script>
		<script type="text/javascript" src="./Libraries/WUI/Language/WUILanguage-0.2.js"></script>
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

Este método de implementación permite la estandarización del diseño de la interfaz de usuario de una aplicación, por medio del archivo `WUI.css`.

> [!IMPORTANT]
> Los archivos de de configuración de estilos deben estar en la ruta `./Settings/Main.css` y `./Settings/WUI.css`.

> [!TIP]
> En caso que sólo se desee implementar sólo una parte del conjunto de librerías WUI, se sebe agregar en la cabecera HTML los llamados a los archivos JS y CSS según se indique en cada sección.
> Por otra parte, el archivo `WUI.css` sólo requerirá la definición de los objetos que se deseen implementar.

<a name="classes"></a>

## Clases

<a name="wuiCookie"></a>

### WUICookie

Versión: `0.1`

Administrador de cookies.

#### Constructor

| Tipo      | Descripción |
| --------- | ----------- |
| WUICookie | `WUICookie([properties])`<br><br>Parámetros:<br>**• properties:** `object` |

#### Propiedades

| Propiedad | Tipo      | Valor por defecto   | Descripción |
| --------- | --------- | ------------------- | ----------- |
| domain    | `string`  | `location.hostname` | (get/set)<br><br>Define el dominio desde el que se puede acceder a la cookie. Por defecto, es el host actual. Al configurarlo como un dominio principal (p. ej., ejemplo.com para sub.ejemplo.com), los subdominios pueden acceder a él. |
| path      | `string`  | `"./"`              | (get/set)<br><br>Especifica la ruta válida para la cookie. El valor predeterminado es la ruta actual siendo el valor vacío equivalente a este. Al establecer "/", la cookie es accesible en todo el dominio. |
| minutes   | `number`  | `525600`            | (get/set)<br><br>Especifica la duración medida en minutos que tendrá la cookie. El valor predeterminado equivale a 365 días. |
| overssl   | `boolean` | `false`             | (get/set)<br><br>Si se establece como `true`, la cookie solo se enviará a través de conexiones HTTPS. |

#### Métodos

| Método    | Tipo retorno | Descripción |
| --------- | ------------ | ----------- |
| set       | `void`       | `set(name, value[, options])`<br><br>Parámetros:<br>**• name:** `string` <br>**• value:** `string` <br>**• options:** `object` *opcional*<br><br>Agrega o modifica una cookie. |
| get       | `string`     | `get(name)`<br><br>Parámetros:<br>**• name:** `string`<br><br>Lee el contenido de una cookie mediante su nombre. |

#### Implementación

Cabecera HTML

```html
<script type="text/javascript" src="./Libraries/WUI/Cookie/WUICookie-0.1.js"></script>
```

Código JS:

```js
// Crear objeto
const cookie = new WUICookie({
	domain: location.hostname,  // Valor por defecto, propiedad puede ser omitida
	path: "./",                 // Valor por defecto, propiedad puede ser omitida
	minutes: 365*24*60,         // Valor por defecto, propiedad puede ser omitida
	overssl: false              // Valor por defecto, propiedad puede ser omitida
});

// Guardar cookie
cookie.set("test", "value");

// Leer cookie
console.log(cookie.get("test"));
```

<a name="wuiHead"></a>

### WUIHead

Versión: `0.1`

Administrador de cabecera HTML.

#### Constructor

| Tipo    | Descripción |
| ------- | ----------- |
| WUIHead | `WUIHead()` |

#### Propiedades

Clase sin propiedades.

#### Métodos

| Método             | Tipo retorno | Descripción |
| ------------------ | ------------ | ----------- |
| setTitle           | `void`       | `setTitle(name)`<br><br>Parámetros:<br>**• name:** `string`<br><br>Establece el nombre del documento HTML mediante la etiqueta `<title>`. |
| setMetaContent     | `void`       | `setMetaContent(name, content)`<br><br>Parámetros:<br>**• name:** `string` <br>**• content:** `string`<br><br>Establece un meta valor en la cabecera del documento HTML mediante la etiqueta `<meta>`.<br>Revisar especificaciones y compatibilidad en [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name). |
| setApplicationName | `void`       | `setApplicationName(content)`<br>Alias de `setMetaContent("application-name", content)`<br><br>Parámetros:<br>**• content:** `string`<br><br>Establece el meta valor `application-name` en la cabecera del documento HTML. |
| setThemeColor      | `void`       | `setThemeColor(content)`<br>Alias de `setMetaContent("theme-color", content)`<br><br>Parámetros:<br>**• content:** `string`<br><br>Establece el meta valor `theme-color` en la cabecera del documento HTML.<br>Revisar especificaciones y compatibilidad en [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color). |
| refresh            | `void`       | `refresh()`<br><br>Recarga los archivos JS y CSS llamados desde la sección `<head>` del documennto HTML, mediante el anexo de un parámetro dinámico get. |

#### Implementación

Cabecera HTML

```html
<title></title>
<meta name="application-name" content="">
<meta name="theme-color" content="">
<script type="text/javascript" src="./Libraries/WUI/Head/WUIHead-0.1.js"></script>
```

Código JS:

```js
// Crear objeto
const head = new WUIHead();

// Cambiar titulo de la página
head.setTitle("Título de prueba");

// Cambiar metadato del nombre de la aplicación
head.setApplicationName("Aplicación de prueba");

// Cambiar metadato del color de la barra superior del navegador
head.setThemeColor("#1e90ff");
```

<a name="wuiBody"></a>

### WUIBody

Versión: `0.1`

Administrador de cuerpo HTML. Permite la importación de contenido CSS/JS/HTML y facilita la implementación en entornos nativos móviles.

#### Constructor

| Tipo    | Descripción |
| ------- | ----------- |
| WUIBody | `WUIBody([properties])`<br><br>Parámetros:<br>**• properties:** `object` |

#### Propiedades

| Propiedad       | Tipo       | Valor por defecto | Descripción |
| --------------- | ---------- | ----------------- | ----------- |
| environment     | `string`   | `"web"`           | (get/set)<br><br>Entorno de despliegue de la interfaz web.<br><br>Valores:<br>• `"web"`<br>• `"native.android"`<br>• `"native.ios"` |
| importDirectory | `string`   | `""`              | (get/set)<br><br>Ruta relativa del directorio donde se alojan los subdirectorio para importación de contenido. |
| importMode      | `string`   | `"fetch"`         | (get/set)<br><br>Método de recuperación de contenido para carga.<br><br>Valores:<br>• `"fetch"`<br>• `"xhr"`<br><br>Cuando el despliegue se realiza en ambientes nativos mediante WebView para Android o WebKit para iOS, se recomienda utilizar `"xhr"`. |
| onCompleted     | `function` | `null`            | (get/set)<br><br>Función que se llama cuando todos los contenidos son importados y cargados en el cuerpo de la página HTML. |
| debug           | `boolean`  | `false`           | (get/set)<br><br>Modo de testeo. Imprime en consola los contenidos importados cuando el valor de la propiedad es `true`. |

#### Métodos

| Método   | Tipo retorno | Descripción |
| -------- | ------------ | ----------- |
| import   | `void`       | `import(id, path[, done])`<br><br>Parámetros:<br>**• id:** `string`, especifica el id del elemento HTML donde se va a cargar el contenido.<br>**• path:** `string`, especifica la ruta del subdirectorio y el nombre de los archivos con extensión `.css`, `.htm` y `.js` que serán importados y cargados.<br>**• done:** `function` *opcional*, esta función que es ejecutada cuando la carga del contenido ha concluido.<br><br>Importa contenido CSS/JS/HTML referenciado a un elemento HTML por medio de su `id`. |
| prepare  | `void`       | `prepare()`<br><br>En función del valor del parámetro `environment`, modifica los elementos HTML de etiqueta `a`, `input` y `select` del cuerpo del documento HTML para adaptarlos a entornos nativos. |
| openURL  | `void`       | `openURL(url[, download])`<br><br>Parámetros:<br>**• id:** `string`, especifica la dirección URL que se requiere abrir o descargar.<br>**• download:** `string` *opcional*, especifica el nombre del archivo con que se descargará el contenido referido mediante la URL.<br><br>Abre o descarga un contenido mediante una dirección URL. Este método es requerido en entornos nativos ya que no se siempre se cuenta con soporte mediante WebView sobre Android o WebKit sobre iOS. |

#### Implementación

Cabecera HTML

```html
<script type="text/javascript" src="./Libraries/WUI/Body/WUIBody-0.1.js"></script>
```

Contenido CSS del archivo `./Imports/test-content.css`:

```css
.test a, .test a:visited {
	text-decoration: none;
	font-size: 20px;
	color: blue;
}
```

Contenido HTML del archivo `./Imports/test-content.htm`:

```html
<section id="testContent" class="test">
	<a href="https://www.google.com">Google!</a>
</section>
```

Contenido JS del archivo `./Imports/test-content.js`:

```js
const testContentLog = (content) => {
	console.log(content);
}
```

Código HTML:

```html
<section id="testContent"></section>
```

Código JS:

```js
// Crear objeto
const body = new WUIBody({
	environment: "web",             // Valor por defecto, propiedad puede ser omitida
	importDirectory: "./Imports/",
	importMode: "fetch",            // Valor por defecto, propiedad puede ser omitida
	onCompleted: () => {
		body.prepare();
	},
	debug: true
});

// Importar contenido CSS/HTML/JS del directorio ./Imports
body.import("testContent", "test-content", () => {
	testContentLog("contenido de prueba cargado");
});
```

<a name="wuiLanguage"></a>

### WUILanguage

Versión: `0.2`

Administrador de idioma para interfaces web. Permite cargar archivos de idioma en formato JS o JSON y actualizar dinámicamente el contenido de los elementos HTML según el idioma seleccionado.

#### Constructor

| Tipo        | Descripción |
| ----------- | ----------- |
| WUILanguage | `WUILanguage([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad  | Tipo       | Valor por defecto | Descripción |
| ---------- | ---------- | ----------------- | ----------- |
| selector   | `string`   | `".wui-language"` | (get/set)<br><br>Selector CSS para los elementos HTML que serán cargados. Este puede ser aplicado al atributo `content` del elemento `meta`, a la propiedad `innerHTML` de los elementos: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `span`, `p`, `i`, `li`, `a`, `legend`, `label`, `option`, `data`, `button` y al atributo `placeholder` de los elementos `input` y `textarea`. |
| directory  | `string`   | `"Languages/"`    | (get/set)<br><br>Ruta del directorio donde se encuentran los archivos de idioma. |
| sets       | `array`    | `["main"]`        | (get/set)<br><br>Lista de nombres del conjuntos del idioma a cargar. |
| lang       | `string`   | `"en"`            | (get/set)<br><br>Código de idioma en formato ISO 639-1. |
| mode       | `string`   | `"js"`            | (get/set)<br><br>Formato de los archivos de idioma.<br><br>Valores:<br>• `"js"`<br>• `"json"` |
| dataKey    | `string`   | `"key"`           | (get/set)<br><br>Nombre del atributo `data-*` que contiene la clave de texto en los elementos HTML. |
| dataOutput | `string`   | `"text"`          | (get/set)<br><br>Nombre del atributo `data-*` donde se puede colocar el texto cargado. |
| onLoad     | `function` | `null`            | (get/set)<br><br>Función que se llama cuando la carga de idioma ha finalizado. |

#### Métodos

| Método | Tipo retorno | Descripción |
| ------ | ------------ | ----------- |
| load   | `void`       | `load([lang[, sets]])`<br><br>Parámetros:<br>**• lang:** `string` *opcional* (valor por defecto el idioma actual)<br>**• sets:** `array` *opcional* (valor por defecto el conjunto actual expresado como arreglo)<br><br>Carga los archivos de idioma indicados por idioma y conjunto y, actualiza los elementos HTML marcados con el selector CSS. |

#### Implementación

Cabecera HTML

```html
<script type="text/javascript" src="./Libraries/WUI/Language/WUILanguage-0.2.js"></script>
```

Código JS archivo `main-es.js`:

```js
return {
	titles: {
		test: "Titulo prueba"
	},
	texts: {
		test: "Texto prueba"
	}
};
```

> [!IMPORTANT]
> Si se utiliza `js` como formato de los archivos de idioma, dicho archivo debe ser inicializado por la palabra reservada `return` seguido  de un objeto `{}`.

Código JSON archivo `main-es.json`:

```json
{
	"titles": {
		"test": "Titulo prueba"
	},
	"texts": {
		"test": "Texto prueba"
	}
}
```

Código HTML:

```html
<h1 class="wui-language" data-key="titles.test"></h1>
<div class="wui-language" data-key="texts.test"></div>
```

Código JS:

```js
// Crear objeto
const language = new WUILanguage({
    selector: ".wui-language",  // Valor por defecto, propiedad puede ser omitida
    directory: "./Languages/",  // Valor por defecto, propiedad puede ser omitida
    sets: ["main"],             // Valor por defecto, propiedad puede ser omitida
    lang: "es",
    mode: "js",                 // Valor por defecto, propiedad puede ser omitida
    dataKey: "key",             // Valor por defecto, propiedad puede ser omitida
    dataOutput: "text",         // Valor por defecto, propiedad puede ser omitida
    onLoad: (...args) => {
		[lang, languages] = args;
        console.log("Idioma cargado:", lang, languages);
    }
});

// Declarar variables globales
let lang = language.lang;
let languages = {};

// Cargar contenido del archivo main-es.js 
language.load();                // Opción 1
language.load("es");            // Opción 2 equivalente a opción 1
language.load("es", ["main"]);  // Opción 3 equivalente a opción 1
```

> [!IMPORTANT]
> El archivo de idioma debe estar en la ruta `./Languages/main-es.js` o `./Languages/main-es.json` según el set, idioma y modo que se emplee. Es importante que los archivos de idioma tengan la forma `{set}-{lang}.{mode}`, en caso contratio, el archivo no podrá ser importado.

Es posible realizar combinaciones de conjuntos de archivos de un mismo idioma, por ejemplo, si se cuenta con un archivo `main-es.js` y otro `main2-es.js` que complemente al primero, se pueden llamar simultáneamente mediante la propiedad `sets`.

Código JS:

```js
// Opción 1: Actualizar la propiedad sets y posteriormente recargar.
language.sets = ["main", "main2"];
language.load(); 

// Opción 2: Recargar pasando como parámetro ella combinación de conjuntos.
language.load("es", ["main", "main2"]);
```

> [!TIP]
> Si se desea agregar contenido dinámico dentro de un texto, se recomienda utilizar formato de los archivos de idioma `js` (`mode: "js"`) y agregar el texto mediante el método de interpolación de cadenas, conosido también como literales de plantilla. Por ejemplo, ``mykey: `My ${var} text` ``.

<a name="wuiScrolly"></a>

### WUIScrolly

Versión: `0.1`

Herramienta para animación de elementos HTML mediante el evento "onscroll" del cuerpo de la página HTML.

#### Constructor

| Tipo       | Descripción |
| ---------- | ----------- |
| WUIScrolly | `WUIScrolly([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad   | Tipo       | Valor por defecto | Descripción |
| ----------- | ---------- | ----------------- | ----------- |
| sections    | `array`    | `[]`              | (get/set)<br><br>Lista secciones que serán incorporadas a la animación, según la definición de **Opciones de Sección**. Estas pueden ser definidas directamente sobre esta propiedad o mediante el método `addSection()`. |
| behavior    | `string`   | `"smooth"`        | (get/set)<br><br>Comportamiento para desplazar el foco en el cuerpo de la página HTML.<br><br>Valores:<br>• `"auto"`<br>• `"smooth"` |
| dataScrollY | `string`   | `"scrollY"`       | (get/set)<br><br>Nombre del atributo `data-*` del elemento de documento principal (`<html>` / `document.documentElement`) que contiene el valor numérico medido en píxeles del desplazamiento total del scroll vertical de la página HTML y donde `0` representa la parte superior del documento (o sin movimiento). |
| dataDelay   | `string`   | `"delay"`         | (get/set)<br><br>Nombre del atributo `data-*` que determina el tiempo medido en milisegundos en que tarda en animarse un elemento HTML animados mediante estilos CSS una vez que se le da foco. |
| onStart     | `function` | `null`            | (get/set)<br><br>Función que se llama cuando inicia el movimiento del scroll, ya sea a travéz de los eventos `scroll` para ratón o `touchmove` para pantalla táctil. |
| onMove      | `function` | `null`            | (get/set)<br><br>Función que se llama cuando se ejecuta el movimiento del scroll, ya sea a travéz de los eventos `scroll` para ratón o `touchmove` para pantalla táctil. |
| onStop      | `function` | `null`            | (get/set)<br><br>Función que se llama cuando termina el movimiento del scroll, ya sea a travéz de los eventos `scroll` para ratón o `touchmove` para pantalla táctil. |
| debug       | `boolean`  | `false`           | (get/set)<br><br>Modo de testeo. Imprime en consola los valores `selector` y `height` de las escenas agregadas en la instancia de inicio y `scrollY`, `y`, `index`, `sceneIndex`, `step`, `sceneStep` y `progress` cuando estos cambian. Se habilitac cuando el valor de la propiedad es `true`. |

#### Opciones de Sección

| Propiedad | Tipo       | Valor por defecto | Descripción |
| --------- | ---------- | ----------------- | ----------- |
| selector  | `string`   | `undefined`       | Selector CSS que define el elemento HTML que serán incluido como sección. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. *oblogatorio* |
| target    | `string`   | `undefined`       | Nombre auxiliar para referenciar la sección. Utilizado en el método `goSection()`. |
| type      | `string`   | `"auto"`          | Comportamiento CSS del alto de la sección.<br><br>Valores:<br>• `"auto"`<br>• `"static"` |
| height    | `number`   | `undefined`       | Alto de la sección. Este puede estar expresado como número asociado a píxeles o en formato compatible CSS. |
| steps     | `number`   | `undefined`       | Número total de pasos definidos en la función de animación `animation`. |
| pages     | `number`   | `undefined`       | Número total de paginas definidos en la función de animación `animation`. |
| animation | `function` | `undefined`       | `function(step, progress)`<br><br>Parámetros:<br>**• step:** `number`, valor entre `0` y `pages - 1` <br>**• progress:** `number`, valor entre `0` y `1` <br><br>Función que se llama cuando se ejecuta el movimiento del scroll en una sección. |

#### Métodos

| Método     | Tipo retorno | Descripción |
| ---------- | ------------ | ----------- |
| init       | `void`       | `init()`<br><br>Inicializa el objeto una vez agregadas las secciones que componen la página HTML. |
| stop       | `void`       | `stop()`<br><br>Interrumpe la animación en su ciclo de ejecución. |
| addSection | `void`       | `addSection(options)`<br><br>Agrega la configuración de una nueva sección animada a la lista de secciones del objeto, según la definición de **Opciones de Sección**. |
| goSection  | `void`       | `goSection(target[, done[, behavior]])`<br><br>Parámetros:<br>**• target:** `string` <br>**• done:** `function` <br>**• behavior:** `string` <br><br>Mueve el foco de la página HTML hasta la sección especificada por del parámetro `target`. |
| selectPage | `void`       | `selectPage(sectionIndex, pageIndex)`<br><br>Parámetros:<br>**• sectionIndex:** `number`, valores desde `0` <br>**• pageIndex:** `number`, valor entre `0` y `pages - 1` <br><br>Mueve el foco de la página HTML hasta la sección especificada por del parámetro `sectionIndex` y avanza hasta la página `pageIndex` de dicha sección. |
| drawCenter | `void`       | `drawCenter()`<br><br>Dibuja el centro de la parte visible de la página HTML en el navegador. |
| drawRuler  | `void`       | `drawRuler()`<br><br>Dibuja una regla vertical con medidas en píxeles, en el lado izquierdo de la página HTML. |

#### Estilos CSS para Animación

| Estilo        | Descripción |
| ------------- | ----------- |
| .fadein       | Entra y sale con opacidad sin movimiento. |
| .fadein-up    | Entra y sale con opacidad desde arriba. |
| .fadein-left  | Entra y sale con opacidad desde la izquierda. |
| .fadein-right | Entra y sale con opacidad desde la derecha. |

#### Implementación

Existen dos modos de implementación de la librería de animación, la más sencilla es por medio de etiquetas de animación CSS, la segunda es mediante la programación de funciones JS de animación que se cargan mediante la configuración de secciones.

Cabecera HTML

```html
<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Scrolly/WUIScrolly-0.1.css">
<script type="text/javascript" src="./Libraries/WUI/Scrolly/WUIScrolly-0.1.js"></script>
```

Código CSS:

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

Código HTML:

```html
<!-- Animación CSS -->
<section id="section1" class="my-section">
	<div class="my-element fadein-left"></div>
	<div class="my-element fadein-top" data-delay="200"></div>
	<div class="my-element fadein-right" data-delay="400"></div>
</section>

<!-- Animación JS -->
<section id="section2" class="my-section">
	<div class="scene">
		<div class="animation"></div>
	</div>
</section>

<!-- Animación JS con paginación -->
<section id="section3" class="my-section">
	<div class="scene">
		<div class="animation"></div>
	</div>
	<div class="paging dots"></div>
</section>
```

Código JS

```js
// Crear objeto
const scrolly = new WUIScrolly({
	sections: [],            // Valor por defecto, propiedad puede ser omitida
	behavior: "smooth",      // Valor por defecto, propiedad puede ser omitida
	dataScrollY: "scrollY",  // Valor por defecto, propiedad puede ser omitida
	dataDelay: "delay",      // Valor por defecto, propiedad puede ser omitida
	onStart: () => {},
	onMove: () => {},
	onStop: () => {},
	debug: true
});

// Agregar secciones
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

// Inicializar objeto
scrolly.init();
```

<a name="wuiWUIIcon"></a>

### WUIIcon

Versión: `0.1`

Conjunto de íconos prediseñados y carga mediante CSS, para uso en interfaces.

#### Tabla de Íconos de Señale

| Icono                                          | Estilo                                                    | Icono                                          | Estilo                                                    | Icono                                      | Estilo                                                        | Icono                                      | Estilo                                                         |
| :---:                                          | ------                                                    | :---:                                          | ------                                                    | :---:                                      | ------                                                        | :---:                                      | ------                                                         |
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

#### Tabla de Íconos de Flecha

| Icono                                               | Estilo                         | Icono                                             | Estilo                       | Icono                                                 | Estilo                           | Icono                                               | Estilo                         |
| :---:                                               | ------                         | :---:                                             | ------                       | :---:                                                 | ------                           | :---:                                               | ------                         |
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

#### Tabla de Íconos de Número

| Icono                                  | Estilo            | Icono                                  | Estilo            | Icono                                  | Estilo            | Icono                                  | Estilo            |
| :---:                                  | ------            | :---:                                  | ------            | :---:                                  | ------            | :---:                                  | ------            |
| ![](./imgs/Icons/num0-circle-line.svg) | .num0-circle-line | ![](./imgs/Icons/num0-circle-fill.svg) | .num0-circle-fill | ![](./imgs/Icons/num1-circle-line.svg) | .num1-circle-line | ![](./imgs/Icons/num1-circle-fill.svg) | .num1-circle-fill |
| ![](./imgs/Icons/num2-circle-line.svg) | .num2-circle-line | ![](./imgs/Icons/num2-circle-fill.svg) | .num2-circle-fill | ![](./imgs/Icons/num3-circle-line.svg) | .num3-circle-line | ![](./imgs/Icons/num3-circle-fill.svg) | .num3-circle-fill |
| ![](./imgs/Icons/num4-circle-line.svg) | .num4-circle-line | ![](./imgs/Icons/num4-circle-fill.svg) | .num4-circle-fill | ![](./imgs/Icons/num5-circle-line.svg) | .num5-circle-line | ![](./imgs/Icons/num5-circle-fill.svg) | .num5-circle-fill |
| ![](./imgs/Icons/num6-circle-line.svg) | .num6-circle-line | ![](./imgs/Icons/num6-circle-fill.svg) | .num6-circle-fill | ![](./imgs/Icons/num7-circle-line.svg) | .num7-circle-line | ![](./imgs/Icons/num7-circle-fill.svg) | .num7-circle-fill |
| ![](./imgs/Icons/num8-circle-line.svg) | .num8-circle-line | ![](./imgs/Icons/num8-circle-fill.svg) | .num8-circle-fill | ![](./imgs/Icons/num9-circle-line.svg) | .num9-circle-line | ![](./imgs/Icons/num9-circle-fill.svg) | .num9-circle-fill |

#### Tabla de Íconos de Persona

| Icono                                    | Estilo              | Icono                                    | Estilo              | Icono                                     | Estilo               | Icono                                     | Estilo               |
| :---:                                    | ------              | :---:                                    | ------              | :---:                                     | ------               | :---:                                     | ------               |
| ![](./imgs/Icons/man-fill.svg)           | .man-fill           | ![](./imgs/Icons/woman-fill.svg)         | .woman-fill         | ![](./imgs/Icons/person-line.svg)         | .person-line         | ![](./imgs/Icons/person-fill.svg)         | .person-fill         |
| ![](./imgs/Icons/person-plus-line.svg)   | .person-plus-line   | ![](./imgs/Icons/person-plus-fill.svg)   | .person-plus-fill   | ![](./imgs/Icons/person-dash-line.svg)    | .person-dash-line    | ![](./imgs/Icons/person-dash-fill.svg)    | .person-dash-fill    |
| ![](./imgs/Icons/person-check-line.svg)  | .person-check-line  | ![](./imgs/Icons/person-check-fill.svg)  | .person-check-fill  | ![](./imgs/Icons/person-x-line.svg)       | .person-x-line       | ![](./imgs/Icons/person-x-fill.svg)       | .person-x-fill       |
| ![](./imgs/Icons/people-line.svg)        | .people-line        | ![](./imgs/Icons/people-fill.svg)        | .people-fill        | ![](./imgs/Icons/person-contact-line.svg) | .person-contact-line | ![](./imgs/Icons/person-contact-fill.svg) | .person-contact-fill |
| ![](./imgs/Icons/person-card-line.svg)   | .person-card-line   | ![](./imgs/Icons/person-card-fill.svg)   | .person-card-fill   | ![](./imgs/Icons/person-names-line.svg)   | .person-names-line   | ![](./imgs/Icons/person-names-fill.svg)   | .person-names-fill   |
| ![](./imgs/Icons/person-circle-line.svg) | .person-circle-line | ![](./imgs/Icons/person-circle-fill.svg) | .person-circle-fill | ![](./imgs/Icons/user-line.svg)           | .user-line           |                                           |                      |

#### Tabla de Íconos de Archivo

| Icono                                   | Estilo             | Icono                                   | Estilo             | Icono                                    | Estilo              | Icono                                    | Estilo              |
| :---:                                   | ------             | :---:                                   | ------             | :---:                                    | ------              | :---:                                    | ------              |
| ![](./imgs/Icons/folder-close-line.svg) | .folder-close-line | ![](./imgs/Icons/folder-close-fill.svg) | .folder-close-fill | ![](./imgs/Icons/folder-open-line.svg)   | .folder-open-line   | ![](./imgs/Icons/folder-open-fill.svg)   | .folder-open-fill   |
| ![](./imgs/Icons/file-line.svg)         | .file-line         | ![](./imgs/Icons/file-fill.svg)         | .file-fill         | ![](./imgs/Icons/file-barchart-line.svg) | .file-barchart-line | ![](./imgs/Icons/file-barchart-fill.svg) | .file-barchart-fill |
| ![](./imgs/Icons/file-check-line.svg)   | .file-check-line   | ![](./imgs/Icons/file-check-fill.svg)   | .file-check-fill   | ![](./imgs/Icons/file-pdf-line.svg)      | .file-pdf-line      | ![](./imgs/Icons/file-pdf-fill.svg)      | .file-pdf-fill      |
| ![](./imgs/Icons/file-image-line.svg)   | .file-image-line    | ![](./imgs/Icons/file-image-fill.svg)  | .file-image-fill   | ![](./imgs/Icons/file-text-line.svg)     | .file-text-line     | ![](./imgs/Icons/file-text-fill.svg)     | .file-text-fill     |
| ![](./imgs/Icons/file-upload-line.svg)  | .file-upload-line  | ![](./imgs/Icons/file-upload-fill.svg)  | .file-upload-fill  | ![](./imgs/Icons/file-zip-line.svg)      | .file-zip-line      | ![](./imgs/Icons/file-zip-fill.svg)      | .file-zip-fill      |

#### Tabla de Íconos de Control

| Icono                                      | Estilo                | Icono                                      | Estilo                | Icono                                     | Estilo               | Icono                                     | Estilo               |
| :---:                                      | ------                | :---:                                      | ------                | :---:                                     | ------               | :---:                                     | ------               |
| ![](./imgs/Icons/calendar-line.svg)        | .calendar-line        | ![](./imgs/Icons/calendar-fill.svg)        | .calendar-fill        | ![](./imgs/Icons/calendar-day-line.svg)   | .calendar-day-line   | ![](./imgs/Icons/calendar-day-fill.svg)   | .calendar-day-fill   |
| ![](./imgs/Icons/calendar-week-line.svg)   | .calendar-week-line   | ![](./imgs/Icons/calendar-week-fill.svg)   | .calendar-week-fill   | ![](./imgs/Icons/calendar-range-line.svg) | .calendar-range-line | ![](./imgs/Icons/calendar-range-fill.svg) | .calendar-range-fill |
| ![](./imgs/Icons/clipboard-check-line.svg) | .clipboard-check-line | ![](./imgs/Icons/clipboard-check-fill.svg) | .clipboard-check-fill | ![](./imgs/Icons/clipboard-data-line.svg) | .clipboard-data-line | ![](./imgs/Icons/clipboard-data-fill.svg) | .clipboard-data-fill |
| ![](./imgs/Icons/bookmark-line.svg)        | .bookmark-line        | ![](./imgs/Icons/bookmark-fill.svg)        | .bookmark-fill        | ![](./imgs/Icons/bookmarks-line.svg)      | .bookmarks-line      | ![](./imgs/Icons/bookmarks-fill.svg)      | .bookmarks-fill      |
| ![](./imgs/Icons/bookmark-check-line.svg)  | .bookmark-check-line  | ![](./imgs/Icons/bookmark-check-fill.svg)  | .bookmark-check-fill  | ![](./imgs/Icons/bookmark-x-line.svg)     | .bookmark-x-line     | ![](./imgs/Icons/bookmark-x-fill.svg)     | .bookmark-x-fill     |

#### Tabla de Íconos de Protección

| Icono                                     | Estilo             | Icono                                   | Estilo             | Icono                                     | Estilo               | Icono                                     | Estilo               |
| :---:                                     | ------             | :---:                                   | ------             | :---:                                     | ------               | :---:                                     | ------               |
| ![](./imgs/Icons/shield-check-line.svg)   | .shield-check-line | ![](./imgs/Icons/shield-check-fill.svg) | .shield-check-fill | ![](./imgs/Icons/shield-lock-line.svg)    | .shield-lock-line    | ![](./imgs/Icons/shield-lock-fill.svg)    | .shield-lock-fill    |
| ![](./imgs/Icons/patch-check-line.svg)    | .patch-check-line  | ![](./imgs/Icons/patch-check-fill.svg)  | .patch-check-fill  | ![](./imgs/Icons/patch-question-line.svg) | .patch-question-line | ![](./imgs/Icons/patch-question-fill.svg) | .patch-question-fill |

#### Tabla de Íconos de Comunicación

| Icono                                      | Estilo                | Icono                                      | Estilo                | Icono                                     | Estilo               | Icono                                     | Estilo               |
| :---:                                      | ------                | :---:                                      | ------                | :---:                                     | ------               | :---:                                     | ------               |
| ![](./imgs/Icons/phone-line.svg)           | .phone-line           | ![](./imgs/Icons/phone-fill.svg)           | .phone-fill           | ![](./imgs/Icons/phonebook-line.svg)      | .phonebook-line      | ![](./imgs/Icons/phonebook-fill.svg)      | .phonebook-fill      |
| ![](./imgs/Icons/mail-close-line.svg)      | .mail-close-line      | ![](./imgs/Icons/mail-close-fill.svg)      | .mail-close-fill      | ![](./imgs/Icons/chat-dots-line.svg)      | .chat-dots-line      | ![](./imgs/Icons/chat-dots-fill.svg)      | .chat-dots-fill      |
| ![](./imgs/Icons/chat-left-quote-line.svg) | .chat-left-quote-line | ![](./imgs/Icons/chat-left-quote-fill.svg) | .chat-left-quote-fill | ![](./imgs/Icons/chat-left-text-line.svg) | .chat-left-text-line | ![](./imgs/Icons/chat-left-text-fill.svg) | .chat-left-text-fill |
| ![](./imgs/Icons/emoji-neutral-line.svg)   | .emoji-neutral-line   | ![](./imgs/Icons/emoji-neutral-fill.svg)   | .emoji-neutral-fill   | ![](./imgs/Icons/emoji-smile-line.svg)    | .emoji-smile-line    | ![](./imgs/Icons/emoji-smile-fill.svg)    | .emoji-smile-fill    |
| ![](./imgs/Icons/emoji-frown-line.svg)     | .emoji-frown-line     | ![](./imgs/Icons/emoji-frown-fill.svg)     | .emoji-frown-fill     | ![](./imgs/Icons/emoji-surprise-line.svg) | .emoji-surprise-line | ![](./imgs/Icons/emoji-surprise-fill.svg) | .emoji-surprise-fill |

#### Tabla de Íconos de Nube

| Icono                                   | Estilo             | Icono                                   | Estilo             | Icono                                     | Estilo               | Icono                                     | Estilo               |
| :---:                                   | ------             | :---:                                   | ------             | :---:                                     | ------               | :---:                                     | ------               |
| ![](./imgs/Icons/cloud-line.svg)        | .cloud-line        | ![](./imgs/Icons/cloud-fill.svg)        | .cloud-fill        | ![](./imgs/Icons/cloud-slash-line.svg)    | .cloud-slash-line    | ![](./imgs/Icons/cloud-slash-fill.svg)    | .cloud-slash-fill    |
| ![](./imgs/Icons/cloud-upload-line.svg) | .cloud-upload-line | ![](./imgs/Icons/cloud-upload-fill.svg) | .cloud-upload-fill | ![](./imgs/Icons/cloud-download-line.svg) | .cloud-download-line | ![](./imgs/Icons/cloud-download-fill.svg) | .cloud-download-fill |

#### Tabla de Íconos de Mapa

| Icono                                    | Estilo              | Icono                                      | Estilo                | Icono                                 | Estilo           |
| :---:                                    | ------              | :---:                                      | ------                | :---:                                 | ------           |
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

#### Tabla de Íconos de Dispositivo

| Icono                                  | Estilo            | Icono                                  | Estilo            | Icono                               | Estilo         | Icono                                 | Estilo           |
| :---:                                  | ------            | :---:                                  | ------            | :---:                               | ------         | :---:                                 | ------           |
| ![](./imgs/Icons/devices-line.svg)     | .devices-line     | ![](./imgs/Icons/laptop-line.svg)      | .laptop-line      | ![](./imgs/Icons/mobile-line.svg)   | .mobile-line   | ![](./imgs/Icons/mobile-alt-line.svg) | .mobile-alt-line |
| ![](./imgs/Icons/mobile-apps-line.svg) | .mobile-apps-line | ![](./imgs/Icons/mobile-apps-fill.svg) | .mobile-apps-fill | ![](./imgs/Icons/computer-line.svg) | .computer-line | ![](./imgs/Icons/camera-fill.svg)     | .camera-fill     |

#### Tabla de Íconos de Marca

| Icono                              | Estilo        | Icono                            | Estilo      | Icono                             | Estilo       |
| :---:                              | ------        | :---:                            | ------      | :---:                             | ------       |
| ![](./imgs/Icons/android-fill.svg) | .android-fill | ![](./imgs/Icons/apple-fill.svg) | .apple-fill | ![](./imgs/Icons/huawei-fill.svg) | .huawei-fill |

#### Tabla de Íconos de Aplicaciones

| Icono                                    | Estilo              | Icono                                       | Estilo                 | Icono                                   | Estilo             | Icono                                    | Estilo              |
| :---:                                    | ------              | :---:                                       | ------                 | :---:                                   | ------             | :---:                                    | ------              |
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

#### Tabla de Íconos de Opciones

| Icono                                  | Estilo            | Icono                                  | Estilo            | Icono                                 | Estilo           | Icono                                 | Estilo           |
| :---:                                  | ------            | :---:                                  | ------            | :---:                                 | ------           | :---:                                 | ------           |
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

#### Tabla de Íconos de Compositor

| Icono                                        | Estilo                  | Icono                                         | Estilo                   | Icono                                  | Estilo            | Icono                                   | Estilo             |
| :---:                                        | ------                  | :---:                                         | ------                   | :---:                                  | ------            | :---:                                   | ------             |
| ![](./imgs/Icons/doublequotes-left-fill.svg) | .doublequotes-left-fill | ![](./imgs/Icons/doublequotes-right-fill.svg) | .doublequotes-right-fill | ![](./imgs/Icons/indent-left-line.svg) | .indent-left-line | ![](./imgs/Icons/indent-right-line.svg) | .indent-right-line |
| ![](./imgs/Icons/link-line.svg)              | .link-line              | ![](./imgs/Icons/link-alt-line.svg)           | .link-alt-line           | ![](./imgs/Icons/list-check-line.svg)  | .list-check-line  | ![](./imgs/Icons/list-number-line.svg)  | .list-number-line  |
| ![](./imgs/Icons/list-stars-line.svg)        | .list-stars-line        | ![](./imgs/Icons/list-unorderd-line.svg)      | .list-unorderd-line      | ![](./imgs/Icons/textleft-line.svg)    | .textleft-line    | ![](./imgs/Icons/textright-line.svg)    | .textright-line    |

#### Tabla de Otros Íconos

| Icono                                       | Estilo                 | Icono                                       | Estilo                 | Icono                                       | Estilo                 | Icono                                 | Estilo           |
| :---:                                       | ------                 | :---:                                       | ------                 | :---:                                       | ------                 | :---:                                 | ------           |
| ![](./imgs/Icons/ai-fill.svg)               | .ai-fill               | ![](./imgs/Icons/bullseye-line.svg)         | .bullseye-line         | ![](./imgs/Icons/columnsgap-line.svg)       | .columnsgap-line       | ![](./imgs/Icons/dart-fill.svg)       | .dart-fill       |
| ![](./imgs/Icons/datasheet-line.svg)        | .datasheet-line        | ![](./imgs/Icons/datasheet-health-line.svg) | .datasheet-health-line | ![](./imgs/Icons/hash-line.svg)             | .hash-line             | ![](./imgs/Icons/headphones-line.svg) | .headphones-line |
| ![](./imgs/Icons/headset-line.svg)          | .headset-line          | ![](./imgs/Icons/lab-fill.svg)              | .lab-fill              | ![](./imgs/Icons/logout-line.svg)           | .logout-line           | ![](./imgs/Icons/medal-line.svg)      | .medal-line      |
| ![](./imgs/Icons/menu-line.svg)             | .menu-line             | ![](./imgs/Icons/pencil-square-fill.svg)    | .pencil-square-fill    | ![](./imgs/Icons/polygon-editable-line.svg) | .polygon-editable-line | ![](./imgs/Icons/qr-line.svg)         | .qr-line         |
| ![](./imgs/Icons/qr-scan-line.svg)          | .qr-scan-line          | ![](./imgs/Icons/quote-fill.svg)            | .quote-fill            | ![](./imgs/Icons/rotate-line.svg)           | .rotate-line           | ![](./imgs/Icons/search-line.svg)     | .search-line     |
| ![](./imgs/Icons/speedometer-line.svg)      | .speedometer-line      | ![](./imgs/Icons/translate-fill.svg)        | .translate-fill        | ![](./imgs/Icons/web-line.svg)              | .web-line              | ![](./imgs/Icons/universal-line.svg)  | .universal-line  |
| ![](./imgs/Icons/universal-circle-line.svg) | .universal-circle-line |

#### Tabla de Íconos Animados

| Icono                                         | Estilo                   | Icono                                        | Estilo                  | Icono                                            | Estilo                      |
| :---:                                         | ------                   | :---:                                        | ------                  | :---:                                            | ------                      |
| ![](./imgs/Icons/animation-loarder-comet.svg) | .animation-loarder-comet | ![](./imgs/Icons/animation-loarder-ring.svg) | .animation-loarder-ring | ![](./imgs/Icons/animation-loarder-ringpath.svg) | .animation-loarder-ringpath |

#### Implementación

Cabecera HTML

```html
<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Icon/WUIIcon-0.1.css">
```

Código CSS:

```css
.my-icon {
	width: 24px;
	height: 24px;
	pargin: 20px;
	background-color: dodgerblue;
}
```

Código HTML:

```html
<div class="my-icon wui-icon patch-check-fill"></div>
```

<a name="wuiWUIFade"></a>

### WUIFade

Versión: `0.1`

Herramienta para salida y entrada con opacidad (fade-out y fade-in respectivamente) de elementos HTML.

Es una clase estática que no posee un constructor ni propiedades.

#### Métodos

##### Metodos estáticos de la clase `WUIFade`:

Un modo de utilizar la librería es mediante el llamado de los métodos estáticos directamente sobre la clase `WUIFade`:

| Método | Tipo retorno | Descripción |
| ------ | ------------ | ----------- |
| in     | `void`       | `in(element[, options])`<br><br>Parámetros:<br>**• element:** `HTMLElement` <br>**• options:** `object` *opcional*<br><br>Ejecuta la transición de entrada. |
| out    | `void`       | `out(element[, options])`<br><br>Parámetros:<br>**• element:** `HTMLElement` <br>**• options:** `object` *opcional*<br><br>Ejecuta la transición de salida. |

##### Metodos extendidos de la clase `HTMLElement`:

Otro modo alternativo es mediante métodos extendidos de la clase `HTMLElement` por medio de su prototipo:

| Método.    | Tipo retorno | Descripción |
| ---------- | ------------ | ----------- |
| wuiFadein  | `void`       | `wuiFadein([options])`<br><br>Parámetros:<br>**• options:** `object` *opcional*<br><br>Ejecuta la transición de entrada. |
| wuiFadeout | `void`       | `wuiFadeout([options])`<br><br>Parámetros:<br>**• options:** `object` *opcional*<br><br>Ejecuta la transición de salida. |

> [!IMPORTANT]
> Cada modo de llamado de métodos se realiza sobre distintos tipos de clases, la primera se sealiza sobre `WUIFade`, mientras que la segunda sobre `HTMLElement`.

##### Opciones

| Opción  | Tipo      | Valor por defecto | Descripción |
| ------- | --------- | ----------------- | ----------- |
| delay   | `number`  | `400`             | Define el tiempo que tardará la transición del efecto de entrada y de salida medido en milisegundos. |
| display | `string`  | `"block"`         | Establece el valor de la propiedad CSS `display` del elemento HTML en el que se ejecuta el efecto de transición, una fez que la transición de entrada finaliza. |
| force   | `boolean` | `false`           | Ambos efectos, entrada y salida, son ejecutadas siempre y cuando la propiedad CSS `display` sea distinta a `options.display` y a `"none"` respectivamente. La opción `force` ignora esta validación. |

#### Implementación

Cabecera HTML

```html
<script type="text/javascript" src="./Libraries/WUI/Fade/WUIFade-0.1.js"></script>
```

Código CSS:

```CSS
.my-element {
	display: none;
	width: 24px;
	height: 24px;
	margin: 10px;
	backgroind-color: red;
}
```

Código HTML:

```html
<div id="myElement" class="my-element"></div>
```

Código JS:
```js
// Definición del elemento y opciones
const element = document.getElementById("myElement");
const options = {
	display: "block",
	delay: 200
};

// Opción 1: Modo WUIFade
WUIFade.in(element, options);

// Opción 2: Modo HTMLElement
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

Objeto avanzado para implementación de listas de datos y botoneras para cada fila de manera opcional.

#### Constructor

| Tipo    | Descripción |
| ------- | ----------- |
| WUIList | `WUIList([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades

| Propiedad    | Tipo       | Valor por defecto | Descripción |
| ------------ | ---------- | ----------------- | ----------- |
| selector     | `string`   | `".wui-list"`     | (get/set)<br><br>Selector CSS que define el elemento HTML que serán convertido en el objeto avanzado tipo lista. En caso de existir más de un elemento coincidente con el selector se incluirá únicamente la primera coincidencia. |
| paging       | `number`   | `0`               | (get/set)<br><br>Paginado o número de filas por pagina de la lista. El valor `0` indica que el paginado tendrá el mismo largo que la lista de filas, dicho de tra manera, el valor `0` desactiva el paginado. |
| page         | `number`   | `0`               | (get)<br><br>Página actual mostrada en la lista. La página `0` corresponde a la primera página y la última al número de filas menos 1. |
| columns      | `array`    | `[]`              | (get/set)<br><br>Lista de columnas de la lista, según la definición de **Opciones de Columna**. |
| rows         | `array`    | `[]`              | (get/set)<br><br>Lista de filas de la lista, según la definición de **Opciones de Fila**. |
| buttons      | `array`    | `[]`              | (get/set)<br><br>Lista de botones de filas de la lista, según la definición de **Opciones de Botón de Fila**. |
| buttonsStyle | `string`   | `"round"`         | (get/set)<br><br>Estilo de los botones de fila.<br><br>Valores:<br>• `"round"`, forma circular.<br>• `"stretch"`, forma cuadrada. |
| onPrint      | `function` | `null`            | (get/set)<br><br>Función que se llama cuando se despliega una página o toda la lista. La función recibe por parámetro:<br><br>**• page:** `number`, número de página. |
| onClick      | `function` | `null`            | (get/set)<br><br>Función que se llama cuando se presiona una fila. La función recibe por parámetro:<br><br>**• index:** `number`, número de fila.**• id:** `string`, id de fila.**• event:** `Event`, evento.**• index:** `options`, opciones configuración de la fila. |

#### Opciones de Columna

| Propiedad | Tipo     | Valor por defecto | Descripción |
| --------- | -------- | ----------------- | ----------- |
| width     | `string` | `undefined`       | Ancho de la columna. Este puede estar expresado como número asociado a píxeles o en formato compatible CSS. |
| align     | `string` | `"left"`          | Modo de alineación de el contenido de la columna.<br><br>Valores:<br>• `"left"`<br>• `"right"`<br>• `"center"` |

#### Opciones de Fila

| Propiedad   | Tipo      | Valor por defecto | Descripción |
| ----------- | --------- | ----------------- | ----------- |
| id          | `string`  | `undefined`       | Identificador único de fila. |
| data        | `array`   | `[]`              | Arreglo con el contenido de las celdas de la fila. |
| inner       | `string`  | `undefined`       | Contenido opcional interno desplegado en la parte inferior de la fila. |
| innerOpened | `boolean` | `false`           | Apertura inicial del contenido opcional. |
| enabled     | `boolean` | `true`            | Estado de habilitación de la fila. El valor por omisión `true`. |

#### Opciones de Botón de Fila

| Propiedad | Tipo               | Valor por defecto | Descripción |
| --------- | ------------------ | ----------------- | ----------- |
| iconClass | `string|function`  | `undefined`       | Estilos CSS que define el ícono del botón de fila. Esta opción puede ser utilizado opcionalmente con la librería [WUIIcon](#wuiIcon) mediante el estilo `wui-icon` conjuntamente a un estilo de ícono específico. |
| bgcolor   | `string|function`  | `undefined`       | Color de fondo en formato compatible CSS. |
| enabled   | `boolean|function` | `true`            | Estado de habilitación del botón. |
| onClick   | `function`         | `null`            | Función que se llama cuando se presiona el botón. Reciven los parámetro `index`, correspondiente a la posición de la fila partiendo desde `0`; `id`, correspondiente al Identificador único de fila; y `event`, correspondiente al objeto de captura del evento. |

> [!IMPORTANT]
> Las opciones que aceptan valores opcionales de tipo función (`iconClass`, `bgcolor` y `enabled`), reciven los parámetro `index`, correspondiente a la posición de la fila partiendo desde `0`; e `id`, correspondiente al Identificador único de fila.

#### Métodos

| Método        | Tipo retorno  | Descripción |
| ------------- | ------------- | ----------- |
| getElement    | `HTMLElement` | `getElement()`<br><br>Retorna el elemento HTML contenedor del objeto avanzado. |
| init          | `void`        | `init()`<br><br>Inicializa el objeto. |
| addColumn     | `void`        | `addColumn(options)`<br><br>Agrega la configuración de una nueva columna a la lista de columnas del objeto, según la definición de **Opciones de Columna**. |
| addRow        | `void`        | `addRow(options)`<br><br>Agrega la configuración de una nueva fila a la lista filas del objeto, según la definición de **Opciones de Fila**. |
| addButton     | `void`        | `addButton(options)`<br><br>Agrega la configuración de un nuevo botón de fila a la lista de bootones de fila del objeto, según la definición de **Opciones de Botón de Fila**. |
| enabledRow    | `void`        | `enabledRow(index[, enabled])`<br><br>Parámetros:<br>**• index:** `number`, número de fila.<br>**• enabled:** `boolean`, estado de habilitación de la fila. El valor por omisión `true`.<br><br>Hablita o deshabilita una fila. |
| print         | `void`        | `print([page])`<br><br>Parámetros:<br>**• page:** `number`, número de página. El valor por omisión corresponde a la propiedad `page`. Si se pasa como parámetro un valor distinto al de la propiedad `page` y si es válido, la propiedad tomará dicho valor.<br><br>Imprime la vista de una lista, esta vista puede ser una página o la lista completa según la propiedad `paging` y el parámetro `page`. |
| prev          | `void`        | `prev()`<br><br>Despliega la vista de la página previa si es que esta existe. |
| next          | `void`        | `next()`<br><br>Despliega la vista de la página siguiente si es que esta existe. |
| isPrevEnabled | `boolean`     | `isPrevEnabled()`<br><br>Retorna si existe una página previa. |
| isNextEnabled | `boolean`     | `isNextEnabled()`<br><br>Retorna si existe una página siguiente. |

#### Implementación

Cabecera HTML

```html
<link type="text/css" rel="stylesheet" href="./Libraries/WUI/Icon/WUIIcon-0.1.css">
<link type="text/css" rel="stylesheet" href="./Libraries/WUI/List/WUIList-0.2.css">
<script type="text/javascript" src="./Libraries/WUI/List/WUIList-0.2.js"></script>
```

Código HTML:

```html
<a class="prev"><</a> <a class="next">></a>
<div class="wui-list my-list"></div>
```

Código JS

```js
// Crear objeto
const list = new WUIList({
	selector: ".wui-list.my-list"
});

// Inicializar objeto
list.init();
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