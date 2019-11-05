# StevenB-Sean-DSA-Big-O

DSA Big 0

1) O(1)
2) O(n)

3)Even Or Odd
	O(1) - True or false is the result, which is independent of your input

4)Are you here?
	O(n^2) - You have an inner for-loop which runs n times based on the length of the outer loop

5) Doubler
	O(n) - Linear, you are going through an array once, and finding the product of its indices

6) Naive Search
	O(n)- Going through an array one time, checking for a match condition. Only depends on length of array.

7) Creating Pairs
	O(n^2) - An inner for-loop which runs n times based on the length of the outer for-loop

8) You are taking the previous two array indices, adding them together, and pushing the result into your array.
	O(n) - You are going throught the array once, and its complexity is solely based on the array length.

9) O(log n) - Assuming your array is sorted, every pass through, you are reducing the amount of searches by half.

10) O(1) - Based upon an array of unknown size, we are returning a random index from the array. 

11) O(n) - This algorithm takes a number, and finds out if its a prime number. The for-loop which runs from 2, until the number selected      dominates the complexity here

12) 	After 7 Moves:
	    |	  |	  |   	    3 Disks: 2^3 - 1     	O(2^n)
	    |	  |	  |	    4 Disks: 2^4 - 1
	    | 	  1	  |	    5 Disks: 2^5 - 1
    	    4	  2	  |
	    5	  3	  |
