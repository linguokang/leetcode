function bigNumberSum(a, b) {
  const arrA = a.toString().split('').reverse();
  const arrB = b.toString().split('').reverse();

  const minlength = Math.min(arrA.length, arrB.length);

  let result = []

  let carried = 0

  for (let i = 0; i < minlength; i++) {
      let sum = Number(arrA.pop()) + Number(arrB.pop()) + carried
      let yu = sum % 10
      carried = Math.floor(sum/10)

      result.unshift(yu)
  }

  if(arrA.length){
      result = [...arrA, ...result]
  }

  if(arrB.length){
      result = [...arrB, ...result]
  }

  return result.join('')
}

// 123213, 32432
bigNumberSum('111111111111111111', '22222222222222');
