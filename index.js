module.exports.vatCalculator = function(arr) {
  if (Array.isArray(arr)) {
    if (arr.length > 0) {
      let NewArray = [];

      arr.map(item => {
        let vat_added = Number(item * (15 / 115)).toFixed(2);
        NewArray.push(vat_added);
      });
      let floatTotalVat = NewArray.reduce((a, b) => Number(a) + Number(b));
      let totalVat = Number.parseFloat(floatTotalVat).toFixed(2);

      let totalSum = arr.map((a, i) => Number(a) + Number(NewArray[i]));
      let TotalAll = totalSum.reduce((a, b) => Number(a) + Number(b));

      return {
        PreviousItemsPrices: arr,
        vatOnEachItem: NewArray,
        TotalVat: totalVat,
        TotalSumEachItems: totalSum,
        All: TotalAll
      };
    } else {
      return "Input Must Contain At Least One Item";
    }
  } else {
    return "Input Must Be an Array";
  }
};
