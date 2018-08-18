# this is vat calculator npm package for BD

# usage

`const cal = require("bd_vat-calculator");`

`var result = cal.vatCalculator([500, 1500, 1000]);`

`console.log(result);`

> {PreviousItemsPrices: [ 500, 1500, 1000 ],
> vatOnEachItem: [ '65.22', '195.65', '130.43' ],
> TotalVat: '391.30',
> TotalSumEachItems: [ 565.22, 1695.65, 1130.43 ],
> All: 3391.3 }
