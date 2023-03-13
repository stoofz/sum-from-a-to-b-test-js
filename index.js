function sum(fromN, toN, total=0) {
    if (fromN > toN) {
      return total
    }
    total = fromN + total;
    return sum(fromN + 1, toN, total);
  }

module.exports = sum;