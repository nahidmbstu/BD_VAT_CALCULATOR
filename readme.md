# this is vat calculator npm package for BD

# usage

`const cal = require("bd_vat-calculator");`

`var inclusiveVat = cal.inclusiveVat([500, 1500, 1000]);`

`console.log(inclusiveVat);`

> { PreviousItemsPrices: [ 500, 1500, 1000 ],
> vatOnEachItem: [ '65.22', '195.65', '130.43' ],
> TotalVat: '391.30',
> TotalSumEachItems: [ '434.78', '1304.35', '869.57' ],
> All: 2608.7 }

`var exclusiveVat = cal.exclusiveVat([500, 1500, 1000]);`

`console.log(exclusiveVat);`

> { PreviousItemsPrices: [ 500, 1500, 1000 ],
> vatOnEachItem: [ '75.00', '225.00', '150.00' ],
> TotalVat: '450.00',
> TotalSumEachItems: [ '575.00', '1725.00', '1150.00' ],
> All: 3450 }
