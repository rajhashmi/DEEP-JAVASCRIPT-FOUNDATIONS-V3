// toString

// null => "null";

// undefined => "undefined";

// true => "true";

// false => "false";

// 3.154676 => "3.154676";

// 0 => "0";

// -0 ------> "0" // What?


```
// null => "null";

// undefined => "undefined";

// true => "true";

// false => "false";

// 3.154676 => "3.154676";

// 0 => "0";

// -0 ------> "0" // What?
```

```jsx
toString(object); //
toPrimitive(string) //
// toString() first then valueOf()
```

```jsx
Abstact Operation --> ToString(Array)
// [] --> ""
// [1,2,3] --> 
// [null, undefined] --> ","
// [[[],[],[]] --> ",,,"
// [,,,,] ---> ",,,"
```

// - for Object →
// - Abstract Operation: toString(Object)

```jsx
//   {} -->  "[object object]"
//  {a:2} --> "[object object]"
//  {toString(){return "X"}} --> "X"
```

// 🤷‍♂️what?

// 1. leave off the square bracket for arrays and put the square brackets on objects?
// 2.