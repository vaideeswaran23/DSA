# Positive Integers which satisfy a<sup>3</sup> + b<sup>3</sup> = c<sup>3</sup> + d<sup>3</sup>

Print all positive integer solutions to the equation a<sup>3</sup> + b<sup>3</sup> = c<sup>3</sup> + d<sup>3</sup> where a, b, c and d are integers between 1 and 1000

Initially, brute force approach of 4 loops is used, every variable is checked for every value between 1 and 1000. But, for every a,b and c there can be only one d which satisfy the equation, the complexity can be reduced to O(n<sup>3</sup>).