# Palette Button

Button Component is use to render a button in the user interface, that can perform tasks when clicked

## Appearance

The Palette Button component has two `appearance`

- `primary`
- `secondary`

#### Code

```jsx
// primary button
<Button onClick={() => alert("hello")}>Primary Button</Button>;
// secondary button
<Button appearance="secondary" onClick={() => alert("hello")}>
  Secondary Button
</Button>;
```

## Sizes

By default the Button Component has a size of `small`. The Palette Button component has three `size` variants

- `mini`
- `small`
- `large`

#### Code

```jsx
// mini button
      <Button size="mini">Mini Button</Button>
// small button
      <Button size="small">Small Button</Button>
// large button
      <Button size="large">Large Button</Button>
```

## Disabled button

The `disabled` prop is used to render a disabled button in the user interface

## Properties

|    Prop    |   Type    |         Possible values          | Default Value |
| :--------: | :-------: | :------------------------------: | :-----------: |
| appearance | `string`  |   `"primary"`and`"secondary"`    |  `"primary"`  |
|    size    | `string`  | `"mini"`,`"small"` and `"large"` |   `"small"`   |
| uppercase  | `boolean` |        `true` and `false`        |    `false`    |
|  disabled  | `boolean` |        `true` and `false`        |    `false`    |

Built by Akshay 🤙
