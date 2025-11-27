### Running Time of Linear Search
A linear search scans one item at a time, without jumping to any item.

   - The worst case complexity is O(n), sometimes known an O(n) search
   - Time taken to search elements keep increasing as the number of elements are increased.

### Running Time of Binary Search
A binary search cuts down your search to half as soon as you find middle of a sorted list.

   - The middle element is looked to check if it is greater than or less than the value to be searched.
   - Accordingly, search is done to either half of the given list.
   - The worst case time complexity is O(logn).

### Space Complexity of Linear Search


No auxiallary space is required in linear search. The elements of the array are directly compared with the query element to find a match. Thus the space complexity for the same is **O(1)**.

### Space Complexity of Iterative Binary Search

You need to maintain a start, end and middle variable to know the window of elements you are checking. Thus constant space is required to perform iterative binary search. Thus the space complexity for the same is **O(1)**.

 
