# What is this? 

This is a lightweight npm package for exporting JS arrays to csv for web apps

## Installation
`npm install so-csv`
then import the function utilities that you need.

## Utilities
- export2csv
```js
import { export2csv } from "so-csv";
/* param1: 2d array
E.g.  param1 = [
    ["line1", 1, 2, 3],
    ["line2",4, 5, 6]
];
*/
export2csv(param1); // it will download the csv in browser.
```