### Binary Search Algorithm

<iframe src="https://www.youtube.com/embed/hq6AwXTrSNk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Observations

Binary Search compares the target element with the middle element of the current search interval.

After each comparison, one of the following occurs:

- The target is found.
- The left half of the interval is discarded.
- The right half of the interval is discarded.

Thus, the search interval becomes approximately half its previous size after every unsuccessful comparison.

### Iteration-by-Iteration Visualization of Binary Search

<img src="images/binary_search_stepwise.png"/>

### Binary Search Algorithm

Let's have a final look at the consolidated algorithm for searching for an element in a sorted array of $N$ elements.

- **STEP 1:** Set the search interval to cover the entire array.
- **STEP 2:** Find the middle position of the current search interval.
- **STEP 3:** Compare the middle element with the target:
  - If the target is equal to the middle element, return the index of the middle element.
  - If the target is greater than the middle element, discard the left half and continue searching in the right half.
  - If the target is less than the middle element, discard the right half and continue searching in the left half.

- **STEP 4:** Repeat Steps 2 and 3 for the remaining search interval.
- **STEP 5:** If the search interval becomes empty without finding the target, report failure.

### Complexity of Binary Search

For a sorted array of $N$ elements:

- **Best-case time complexity:** $O(1)$
- **Worst-case time complexity:** $O(\log N)$
- **Auxiliary space complexity of iterative Binary Search:** $O(1)$

The logarithmic time complexity arises because the search interval is approximately halved after every comparison.

### Important Note

Binary Search itself does not sort the input array.

If the original array is unsorted, sorting must be performed separately before Binary Search can be applied. The cost of this preprocessing step must be considered when comparing the overall performance of searching strategies.
