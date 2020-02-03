# Selecting Buttons

Students can study this exercise to learn more about how to create accessible websites that can be used by a keyboard, without a mouse.

## DOM

| tag name                    | attributes | role                               |
| --------------------------- | ---------- | ---------------------------------- |
| section id="user-interface" | id         | container for events and listeners |

## Styling

| class name | description     | role |
| ---------- | --------------- | ---- |
| output     | css for output  | css  |
| section    | css for section | css  |
| up         | css for up      | css  |
| down       | css for down    | css  |
| left       | css for left    | css  |
| right      | css for right   | css  |

## Listeners

| type       | attached to | callback        |
| ---------- | ----------- | --------------- |
| "focus"    | button      | identifyButton  |
| "keypress" | button      | alertButtonName |
| "blur"     | button      | clearOutput     |

## Handlers

| syntax         | parameters | return value | behavior   |
| -------------- | ---------- | ------------ | ---------- |
| identifyButton | event      | text         | call logic |

## Logic

| syntax          | parameters | return value | behavior   |
| --------------- | ---------- | ------------ | ---------- |
| generateMessage | event      | string       | main logic |
