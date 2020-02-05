# Math Quiz

A user can study math in JS by entering an expression and testing their predictions.

## DOM

| tag name              | attributes | role                                      |
| --------------------- | ---------- | ----------------------------------------- |
|                       |            |                                           |
| input id="first"      | id , class | input of first                            |
| select id="operation" | id , class | operation selector                        |
| input id="second"     | id, class  | second input                              |
| id="user-action"      | id         | mouse over or mouse out to reveal results |
| id="program-output    | id         | output of the calculator                  |

## Styling

| class name  | description | role |
| ----------- | ----------- | ---- |
| input-field | to style    | css  |

## Listeners

| type      | attached to | callback   |
| --------- | ----------- | ---------- |
| mouseover | user-action | showResult |
| mouseout  | user-action | hideResult |

## Handlers

| syntax     | parameters | return value                                       | behavior                          |
| ---------- | ---------- | -------------------------------------------------- | --------------------------------- |
| showResult | event      | result of operation selected                       | check input values and call logic |
| hideResult | event      | hide results when mouseput on user-actions element | call logic js file                |

## Logic

| syntax | parameters                         | return value                     | behavior             |
| ------ | ---------------------------------- | -------------------------------- | -------------------- |
| doMath | operation first input second input | the result of selected operation | apply the core logic |
