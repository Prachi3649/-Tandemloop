
// Problem-4:  Get the total count of number list in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//     (examples)
//     input: [1,2,8,9,12,46,76,82,15,20,30]
//     Output:
//         {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}


function Count(Array1, Array2) {
    let result = 0;
    for (let i = 0; i < Array2.length; i++) {
      for (let j = 0; j < Array1.length; j++) {
        if (Array1[j] % Array2[i] == 0) {
          result+=1;
        }
      }
      console.log(`${Array2[i]}  : ${result}`);
      result=0;
    }
  }
  console.log(Count([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30], [1, 2, 3, 4, 5, 6, 7, 8, 9]))