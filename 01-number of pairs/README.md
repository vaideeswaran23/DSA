# NUMBER OF PAIRS
*Given an array of distinct integer values, count the number of pairs of integers that have difference k. For example, given the array {1,7,5,9,2,12,3} and the difference k = 2, there are four pairs with difference 2: (1,3), (3,5), (5, 7), (7,9)*

The brute force approach would have O(n<sup>2</sup>). 
If we sort the array, the time complexity would be O(nlogn).
But, using hashtable, the time complexity reduces to O(n).

The above problem is solved using hashtable.

First, we put all the elements of the array in a hashtable, then for each element in the array, search for ele + k, where k is the difference.