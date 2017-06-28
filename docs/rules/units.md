# Checks inline styles for units (units)

This is a rule to dissallow inline styling without an explicit unit. This probably (?) makes the styles easier to read (since there is more explicit information). 

Take the following:
```jsx
class ComplexComponent extends React.Component {
  render() {
    return (
      <div style={{ height: 40, width: 40 }}>
        <div style={{ height: '1em', width: '1em' }}>
          <div style={{ height: '1rem', width: '1rem' }}>
            Styled!!
          </div>
        </div>
      </div>
    )
  }
}
```
If everything has a unit value you don't need to add the `px` in your head for the values that don't have it explicitly specified.

It also probably (?) makes refactoring easier.

Take the following:
```jsx
class Component extends React.Component {
  render() {
    return (
      <div style={{ height: 40, width: 40 }}>
        Styled!!
      </div>
    )
  }
}
// vs
class Component extends React.Component {
  render() {
    return (
      <div style={{ height: '40px', width: '40px' }}>
        Styled!!
      </div>
    )
  }
}
```
If you needed to change the `px` to `pt` (or any unit change), the amount of change is smaller since all you need to do is change the 2 unit characters vs having to wrap in quotations and so on.




## Rule Details

This rule aims to dissallow inline styling where the unit value is not specified.

Examples of **incorrect** code for this rule:

```jsx
class Component extends React.Component {
  render() {
    <div>
      <span style={{ height: 40 }}>stuff</span>
    </div>;
  }
}
```

```jsx
class Component extends React.Component {
  render() {
    <div>
      <span style={{ marginRight: 40 }}>stuff</span>
    </div>;
  }
}
```


Examples of **correct** code for this rule:

```jsx
class Component extends React.Component {
  render() {
    <div>
      <span style={{ height: "40vh" }}>stuff</span>
    </div>;
  }
}
```

```jsx
class Component extends React.Component {
  render() {
    <div>
      <span style={{ height: "40%" }}>stuff</span>
    </div>;
  }
}
```

### Options

There are currently no available options

## When Not To Use It

If you don't care about having unit values explicitly specified. You might not care because React will apply `px` to any value that does not have an explict unit value attached.
