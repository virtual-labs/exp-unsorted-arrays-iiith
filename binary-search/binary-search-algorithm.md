### Binary Search Algorithm
<iframe src="https://www.youtube.com/embed/hq6AwXTrSNk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Observations

All the possible intervals' middle elements are compared to check if an element is present in the array.

### Iteration by Iteration Visualization of Binary Search
<img src="images/binary_search_stepwise.png"/>

### Binary Search Algorithm
Let's have a final look at the consolidated algorithm to search for an element in an array of N elements:

- STEP 1 : Start with the middle element.
   - If the target value is equal to the middle element of the array, then return the index of the middle element.
   - If not, then compare the middle element with the target value,
       - If the target value is greater than the number in the middle index, then pick the elements to the right of the middle index, and start with Step 1.
       - If the target value is less than the number in the middle index, then pick the elements to the left of the middle index, and start with Step 1.
- STEP 2 : When a match is found, return the index of the element matched.
- STEP 3 : If no match is found, then return failure.


