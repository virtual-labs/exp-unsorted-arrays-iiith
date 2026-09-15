### Time and Space Complexity

### Running Time of Linear Search

Linear Search examines the elements of an array sequentially, one at a time.

For an array containing $N$ elements:

- In the **best case**, the target is the first element examined. Only a constant number of operations is required, so the time complexity is:

$(O(1))$

- In the **worst case**, the target is at the last position or is not present in the array. In this situation, all $N$ elements may need to be examined.

Therefore, the worst-case time complexity is:

$(O(N))$

As $N$ increases, the maximum number of elements that Linear Search may need to examine increases proportionally.

### Running Time of Binary Search

Binary Search can be applied when the array is sorted.

Instead of examining every element, Binary Search examines the middle element of the current search interval and eliminates approximately half of the remaining elements after each unsuccessful comparison.

The search interval therefore changes approximately as:

$(N \rightarrow \frac{N}{2} \rightarrow \frac{N}{4} \rightarrow \frac{N}{8} \rightarrow \cdots)$

After $k$ iterations, approximately:

$(\frac{N}{2^k})$

elements remain.

This gives:

$(k \approx \log_2 N)$

Therefore, the worst-case time complexity of Binary Search is:

$(O(\log N))$

In the best case, the target is equal to the first middle element examined, giving a time complexity of:

$(O(1))$

### Sorting as a Preprocessing Step

Binary Search requires a sorted array. If the input array is initially unsorted, it must be sorted before Binary Search can be used.

For a typical comparison-based sorting algorithm, the sorting cost is commonly:

$(O(N\log N))$

Therefore, when starting with an unsorted array, the overall process is:

$(\text{Sort} + \text{Binary Search})$

with an approximate cost of:

$(O(N\log N) + O(\log N))$

for a single search.

This is an important distinction: **Binary Search is fast, but sorting an unsorted array also has a computational cost.**

### One Search Versus Multiple Searches

The number of searches to be performed is an important factor when choosing between Linear Search and sorting followed by Binary Search.

Suppose an unsorted array contains $N$ elements and we need to perform $Q$ searches.

Using Linear Search for each query gives an overall worst-case cost of approximately:

$(O(QN))$

If we sort the array once and then perform Binary Search for each query, the total cost is approximately:

$(O(N\log N + Q\log N))$

Therefore:

- If only one or a small number of searches are required, directly using Linear Search may be preferable because no preprocessing is required.
- If many searches are performed on the same relatively static data, sorting once and repeatedly using Binary Search can be more efficient.

The appropriate strategy therefore depends not only on the size of the array, but also on how the data will be used.

### Space Complexity of Iterative Linear Search

An iterative Linear Search does not require an additional data structure proportional to the size of the input.

Only a constant number of variables are required to keep track of the current position and the target.

Therefore, the auxiliary space complexity is:

$(O(1))$

The input array itself is not counted as auxiliary space.

### Space Complexity of Iterative Binary Search

Iterative Binary Search maintains variables such as the lower bound, upper bound, and middle position of the current search interval.

Only a constant number of variables are required, regardless of the value of $N$.

Therefore, the auxiliary space complexity is:

$(O(1))$

### Iterative Versus Recursive Binary Search

The space requirement changes when Binary Search is implemented recursively.

Each recursive call creates a new stack frame, and the number of recursive calls can grow logarithmically with the size of the input.

Therefore:

- Iterative Binary Search auxiliary space: $O(1)$
- Recursive Binary Search auxiliary space: $O(\log N)$

### Comparison of Searching Approaches

| Property                                          | Linear Search          | Binary Search                         |
| ------------------------------------------------- | ---------------------- | ------------------------------------- |
| Requires sorted array?                            | No                     | Yes                                   |
| Works directly on an unsorted array?              | Yes                    | No                                    |
| Search strategy                                   | Sequential examination | Repeatedly divide the search interval |
| Best-case time                                    | $O(1)$                 | $O(1)$                                |
| Worst-case time                                   | $O(N)$                 | $O(\log N)$                           |
| Iterative auxiliary space                         | $O(1)$                 | $O(1)$                                |
| Preprocessing required                            | No                     | Sorting may be required               |
| Suitable for a single search in an unsorted array | Yes                    | Not directly                          |
| Suitable for many searches on static data         | May become expensive   | Efficient after sorting               |

### Key Takeaway

Linear Search is useful when the array is unsorted and no preprocessing is desired.

Binary Search is useful when the array is sorted because it can reduce the search space exponentially.

When starting with an unsorted array, the decision between Linear Search and sorting followed by Binary Search depends on the cost of sorting and the number of searches that will be performed.
