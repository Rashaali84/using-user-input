# Fonting

A user can set the emphasis, size & color of the text they are writing

## DOM

| tag name | attributes | role |
| form | id=user-input | container for all child elements inside |
|textarea|id=editor|return back the new css classes with text|

## Styling

| class name | description                       | role                   |
| ---------- | --------------------------------- | ---------------------- |
| bold       | turn text to bold                 | styling                |
| italic     | turn text to italic               | styling                |
| small      | make text smaller                 | styling                |
| large      | make text larger                  | styling                |
| green      | make text green                   | styling                |
| blue       | make text blue                    | styling                |
| red        | make text red                     | styling                |
| white      | make text white                   | styling                |
| interface  | interface styling for main editor | styling for editor     |
| editor     | class styling for text input      | styling for input text |

## Listeners

| type   | attached to | callback             |
| ------ | ----------- | -------------------- |
| change | user-input  | editorClassesHandler |

## Handlers

| syntax               | parameters | return value | behavior                                  |
| -------------------- | ---------- | ------------ | ----------------------------------------- |
| editorClassesHandler | event      | newClasses   | fires up on change return new css classes |

## Logic

| syntax        | parameters            | return value         | behavior                                                |
| ------------- | --------------------- | -------------------- | ------------------------------------------------------- |
| editorClasses | emphasis, size, color | return classes names | check parameters and return back needed styling classes |
