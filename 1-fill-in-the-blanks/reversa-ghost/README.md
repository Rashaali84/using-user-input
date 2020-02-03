# Reversa Ghost

As a user I can write words and have them appear magically in reverse. Still not sure why this is helpful.

## DOM

| tag name                    | attributes | role             |
| --------------------------- | ---------- | ---------------- |
| section id="user-interface" | id         | for container    |
| pre id="output"             | id         | for output ports |

## Styling

| class name   | description                | role    |
| ------------ | -------------------------- | ------- |
| editor       | css for editor             | styling |
| input-output | css for inputs and outputs | style   |

## Listeners

| type                                        | attached to                  | callback         |
| ------------------------------------------- | ---------------------------- | ---------------- |
| addEventListener("keyup", reverseItHandler) | getElementById("user-input") | reverseItHandler |

## Handlers

| syntax                  | parameters | return value | behavior             |
| ----------------------- | ---------- | ------------ | -------------------- |
| reverseItHandler(event) | event      | = reversed;  | call logic functions |

## Logic

| syntax  | parameters   | return value    | behavior    |
| ------- | ------------ | --------------- | ----------- |
| reverse | string input | reversed string | apply logic |
