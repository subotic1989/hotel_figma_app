---
title: 'ButtonControl'
---

# ButtonControl

The ButtonControl invokes a predefined custom callback.

```html
<div id="buttonControlSample" 
    data-win-control="HFWinJSCtrl.ButtonControl" 
    data-win-options="{
        buttonType: 'large',
        buttonLabel: 'Test',
        buttonHeading: 'Button',
        callback: HFFormdefinition.SampleHelpers.buttonControlCallback
    }"></div>
```


| Property               | Type   | How to use                                 | Description                                                                        |
| ---------------------- | ------ | ------------------------------------------ | ---------------------------------------------------------------------------------- |
| **callback** **\***    | Function() | `callback: HFFormdefinition.Namespace.Method` | Call a pre-defined JS-method to do something when the button is invoked. address. |
| **buttonType** **\***  | String | `buttonType: 'medium'`                     | Define the size of the button ('small', 'medium' or 'large').                      |
| buttonLabel **\*\***   | String | `buttonLabel: 'Button'`                  | Define the button caption. <br />Only visible by choosing buttonType 'medium' or 'large'. |
| buttonHeading **\*\*** | String | `buttonHeading: 'Test'`                    | Define a label for the control element.                                            |
| icon                   | String | `icon: 'fa-barcode-scan'`                  | Sets the icon of the button. Can be FontAwesome Icon or SVG Image.                 |
| vibrationFeedback      | Boolean | `vibrationFeedback: true`                  | Enable/Disable vibration feedback on click. Default is `true`.                 |
| audioFeedback      | Boolean | `audioFeedback: true`                  | Enable/Disable audio feedback on click. Default is `true`.                 |
| callbackFeedback      | Boolean | `callbackFeedback: true`                  | Enable/Disable callback feedback on callback funtion return. Default is `true`.  |
| disableOnClick      | Boolean | `disableOnClick: false`                  | Disable button while callback function is executed. Default is `false`.  |

**\*  These options are required.**  
**\*\*** Please provide at least one of these options.
