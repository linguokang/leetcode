var generateParenthesis = function (n) {
  // const list = ['(', ')']
  const result = [];
  function backtrack(path, left, right) {
      console.log(`path:${path},left:${left},right:${right}`)
    if (path.length === n * 2) {
      result.push(path);
      return;
    }
    if (left < n) {
      backtrack(`${path}(`, left + 1, right);
    }
    if (right < left) {
      backtrack(`${path})`, left, right + 1);
    }
  }

  backtrack('', 0, 0);
  return result;
};
generateParenthesis(3);
