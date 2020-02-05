# Type Caster 2

## DOM

| tag name                              | attributes | role                      |
| ------------------------------------- | ---------- | ------------------------- |
| input name="value" id="inputString"   | id name    | to have the input value   |
| select name="type" id="typeSelected"  | id name    | to select the type needed |
| button type="button" id="user-action" | id type    | to initialize the event   |
| p id="casted-value"                   | id         | to represent casted value |

## Styling

| class name | description | role             |
| ---------- | ----------- | ---------------- |
| input      | style       | the input value  |
| outputs    | style       | the output value |

## Listeners

| type  | attached to | callback        |
| ----- | ----------- | --------------- |
| click | user-action | typeCastHandler |

## Handlers

| syntax          | parameters | return value         | behavior            |
| --------------- | ---------- | -------------------- | ------------------- |
| typeCastHandler | event      | the converted string | call logic function |

## Logic

| syntax                           | parameters                             | return value         | behavior         |
| -------------------------------- | -------------------------------------- | -------------------- | ---------------- |
| function typeCaster(value, type) | the type inteneded and the input value | the converted string | apply core logic |
