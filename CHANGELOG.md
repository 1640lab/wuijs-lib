# Change Log

## [v0.1.0] - 2024-05-01

Features:

1. Release version.

## [v0.2.0] - 2025-09-01

Features:

1. Inclusion of [Documentation](./README.md).
2. Added WUIIntensity class version 0.1.
3. WUILanguage version class update to 0.2.
	- Changed the default value of the `lang` property by `"en"`.
	- Added files in JSON format support.
	- Removed global constant `languages` and replaced with a variable definition, optional and external to the class, which is assigned using the `onLoad()` property (see implementation example in [Documentation](./README.md?#wuiLanguage)).
4. WUIModal version class update to 0.2.
	- Fixed bug in drag event when maximizing and closing a page-style modal using the `mousedown` event, enabling it only when the left mouse button remains pressed.
5. WUISlider version class update to 0.2.
	- Fixed bug in drag event when moving a scene using the `mousedown` event, enabling it only when the left button remains pressed.
6. WUIList version class update to 0.2.
	- Added support for paging.
	- Added `--wui-list-shadowcolor` property.
	- Fixed bug in drag event when opening and closing the button panel of each row, using the `mousedown` event, enabling it only when the left button remains pressed.
7. WUITable version class update to 0.2.
	- Added support for light/dark CSS formatting.
	- Added `--wui-table-shadowcolor` property.
8. WUIForm version class update to 0.2.
	- Added support for light/dark CSS formatting.
	- Added `--wui-form-message-shadowcolor` property.
9. WUIFormat version class update to 0.2.
	- Added support for `Windows Phone` in the `getOS()` and `getMobileOS()` methods.
	- Added error handling to the `wuiToString()` method.
10. WUISelectpicker version class update to 0.2.
	- Added support for light/dark CSS formatting.
	- Added `--wui-selectpicker-box-shadowcolor` property.
	- Fixed bug in private method `#addHTMLOption()`.
11. WUIDatepicker version class update to 0.2.
	- Added support for light/dark CSS formatting.
	- Added `--wui-datepicker-box-shadowcolor` property.
12. WUITimepicker version class update to 0.2.
	- Added support for light/dark CSS formatting.
	- Added `--wui-timepicker-box-shadowcolor` property.
13. WUIColorpicker version class update to 0.2.
	- Added support for light/dark CSS formatting.
	- Added `--wui-colorpicker-box-shadowcolor` property.
14. WUICheckbox version class update to 0.2.
	- Fixed bug in drag event when selecting and deselecting the checkbox using the `mousedown` event, enabling it only when the left button remains pressed.
15. WUIButton version class update to 0.2.
	- Added `onDblClick` property.