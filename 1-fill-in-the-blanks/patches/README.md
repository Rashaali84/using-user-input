# Selecting Buttons

Selecting a button will display the button text in center of the screen.

## DOM

| tag name                      | attributes | role                                       |
| ----------------------------- | ---------- | ------------------------------------------ |
| <section id="user-interface"> | id         | contain the different tags for backgrounds |

## Styling

| class name | description            | role |
| ---------- | ---------------------- | ---- |
| section    | style for section area | css  |
| red        | style for red area     | css  |
| orange     | style for orange area  | css  |
| blue       | style for blue area    | css  |
| green      | style for green area   | css  |
| yellow     | style for yellow area  | css  |
| grey       | style for grey area    | css  |
| black      | style for black area   | css  |

## Listeners

| type       | attached to   | callback        |
| ---------- | ------------- | --------------- |
| mouseenter | div of colors | setBackground   |
| mouseout   | div of colors | unsetBackground |

## Handlers

| syntax          | parameters | return value | behavior            |
| --------------- | ---------- | ------------ | ------------------- |
| setBackground   | event      | class name   | call logic function |
| unsetBackground | event      | class name   | call logic function |

## Logic

| syntax       | parameters | return value             | behavior        |
| ------------ | ---------- | ------------------------ | --------------- |
| filterColors | color name | color name of background | apply the logic |
