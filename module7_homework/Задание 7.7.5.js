
function sortAsc(arr) {
    return arr.sort((a, b) => a - b);
  }
  
  
  function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  
 
  function uniqueSorted(arr) {
    return sortAsc(unique(arr));
  }
  
  
  const arr = [1, 2, 3, 4, 1, 2, 5];
  
  const uniqueSortedArr = uniqueSorted(arr);
  
  console.log(uniqueSortedArr);