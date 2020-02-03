# Hex Setter

A simple program that allows users to select, then set the background color of the website.

## DOM

| tag name | attributes          | role                                   |
| -------- | ------------------- | -------------------------------------- |
| section  | id="user-interface" | a container for child elements         |
| button   | id="user-action"    | identify a button to attach a listener |

## Styling

| class name | description            | role               |
| ---------- | ---------------------- | ------------------ |
| output     | output class           | for output results |
| input      | input class for inputs | styling            |
| button     | button style class     | to style buttons   |

## Listeners

| type  | attached to | callback        |
| ----- | ----------- | --------------- |
| click | user-action | setColorHandler |

## Handlers

| syntax          | parameters | return value             | behavior             |
| --------------- | ---------- | ------------------------ | -------------------- |
| setColorHandler | event      | return new style classes | call logic functions |

## Logic

| syntax           | parameters         | return value       | behavior                     |
| ---------------- | ------------------ | ------------------ | ---------------------------- |
| colorCodeToStyle | (a, b, c, d, e, f) | style class-string | apply logic for the exercise |
