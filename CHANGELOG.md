# Change Log

## [v0.1.0] - 2024-05-01

Features:

1. Release version.

## [v0.2.0] - 2025-09-01

Features:

1. Inclusion of [Documentation](./README.md).
2. Added WUIIntensity class version 0.1.
3. WUILanguage version class update to 0.2.
	- The default value of the `lang` property was changed to `"en"`.
	- Support for language files in JSON format was added.
	- Global constant `languages` were removed and replaced with a variable definition, optional and external to the class, which is assigned using the `onLoad()` property (see implementation example in [Documentation](./README.md?#wuiLanguage)).
4. WUISlider version class update to 0.2.
	- Fixed dragging error when moving a scene using the `mousedown` event, enabling it only when the left button remains pressed.
5. WUIList version class update to 0.2.
	- Fixed dragging error when opening and closing the button panel of each row, using the `mousedown` event, enabling it only when the left button remains pressed.
6. WUIModal version class update to 0.2.
	- Fixed dragging issue when maximizing and closing a page-style modal using the `mousedown` event, enabling it only when the left mouse button remains pressed.