Array.prototype.myReduce = function (fun, initial) {
    const length = this.length;
    let acc;
    let index;
    if (initial === undefined) {
          acc = this[0];
          index = 1;
        } 
    else {
          acc = initial;
          index = 0;
        }
    for (let i = index; i < length; i++) {
          if (i in this) {
            acc = fun(acc, this[i], i, this);
          }
        }
      return acc;
    };
    
    const arr = [1, 3, 9, 18];
    const sum = arr.myReduce((acc, value) => acc + value, 0);
    console.log(sum);
      