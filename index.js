// Symmetrical Difference
const diff = (arr1, arr2) => [
    ...arr1.filter(e => !arr2.includes(e)),
    ...arr2.filter(e => !arr1.includes(e))
  ];
  
  const sym = (...args) => [...new Set(args.reduce(diff))];
  
  // function sym(args) {
  
    
    //merge the arrays
    
    // let spr = [...arr1, ...arr2]
    // let newSpr = [...new Set(spr)]
    // console.log(newSpr)
    // let similar=arr1.filter(item => arr2.includes(item))
    
    // let difference = newSpr.filter(item => !similar.includes(item))
    // console.log(difference)
    // return difference;
  // }
  
  sym([1, 2, 3, 3], [5, 2, 1, 4]);