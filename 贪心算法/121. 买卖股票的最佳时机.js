/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let minPrice = prices[0]
    let maxprofit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        }
        profit = prices[i] - minPrice
        maxprofit = Math.max(maxprofit, profit)
    }
    return maxprofit
}
