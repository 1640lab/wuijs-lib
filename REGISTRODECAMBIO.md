# Registr de Cambio

## [v0.1.0] - 2024-05-01

Características:

1. Versión de lanzamiento.

## [v0.2.0] - 2025-09-01

Características:

1. Inclusión de [Documentación](./LEEME.md).
2. Se agregó clase WUIIntensity versión 0.1.
3. Actualización versión clase WUILanguage a 0.2.
	- Se cambió el valor por defecto de la propiedad `lang` a `"en"`.
	- Se agregó soporte para archivo de lenguaje en formato JSON.
	- Se eliminó la constante global `languajes` y se reemplazó por una definición variable, opcional y externa a la clase, que es asignada mediante la propiedad `onLoad()` (ver ejemplo de implementación en [Documentación](./LEEME.md?#wuiLanguage)).
4. Actualización versión clase WUISlider a 0.2.
	- Se corrigió error de arrastre al desplazar una diapositiva usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
5. Actualización versión clase WUIList a 0.2.
	- Se agregó soporte para paginado.
	- Se corrigió error de arrastre al aperturar y cerrar la botonoera de cada fila usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
6. Actualización versión clase WUIModal a 0.2.
	- Se corrigió error de arrastre al maximizar y cerrar un modal con estilo página usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.
7. Actualización versión clase WUICheckbox a 0.2.
	- Se corrigió error de arrastre al seleccionar y deseleccionar la caja de verificación usando el evento `mousedown`, habilitándo únicamente cuando el botón izquierdo permanece presionado.