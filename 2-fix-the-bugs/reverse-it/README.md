# Reverse It

Reverse a user-provided string when the button is clicked.

## DOM

| tag name                             | attributes | role        |
| ------------------------------------ | ---------- | ----------- |
| input name="input" id="input"        | id class   | input field |
| input type="button" id="user-action" | id         | input field |
| p id="program-output"                | id         | input field |

## Styling

| class name          | description           | role    |
| ------------------- | --------------------- | ------- |
| class="input-field" | style the input-filed | styling |

## Listeners

| type  | attached to | callback        |
| ----- | ----------- | --------------- |
| click | user-action | reverseHandeler |

## Handlers

| syntax         | parameters | return value    | behavior                                 |
| -------------- | ---------- | --------------- | ---------------------------------------- |
| reverseHandler | event      | outpur of logic | call core logic function with parameters |

## Logic

| syntax  | parameters       | return value    | behavior         |
| ------- | ---------------- | --------------- | ---------------- |
| reverse | the input string | reversed string | apply core logic |
