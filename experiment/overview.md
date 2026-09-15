<!--### Introduction-->
<iframe src="https://www.youtube.com/embed/3KKOXD8P4lY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Prerequisites of the Experiment

This experiment requires you to have basic knowledge about:

- [Arrays or Lists](https://en.wikipedia.org/wiki/Sorting_algorithm)
- [Sorting](https://en.wikipedia.org/wiki/Sorting_algorithm)
- Basic algorithmic analysis
- [Time and Space complexity](https://en.wikipedia.org/wiki/Time_complexity)

You should also be familiar with the concepts of array indexing and comparing elements.

And above all, a curiosity to learn and explore!

### Overview of the Experiment

Searching is a fundamental operation in computer science. Given a collection of elements, we often need to determine whether a particular element is present and, if so, identify its position.

When an array is **unsorted**, Linear Search can be used to examine its elements sequentially without requiring any preprocessing. However, when many searches need to be performed on the same data, repeatedly scanning the entire array can become expensive.

One alternative is to first **sort the array** and then use Binary Search. Binary Search takes advantage of the ordering of the elements to eliminate approximately half of the remaining search space at every step.

This experiment compares these two approaches:

- **Linear Search:** Search directly in the unsorted array.
- **Sorting + Binary Search:** Sort the array as a preprocessing step and then perform efficient searches using Binary Search.

The experiment also analyzes the time and auxiliary space complexity of these approaches and helps determine when sorting an array before searching can be beneficial.

### Experiment Modules & their Weightage

| Module        | Weightage | Expectation                                                                 |
| ------------- | --------- | --------------------------------------------------------------------------- |
| Pre-test      | 10%       | Solve all questions                                                         |
| Linear Search | 25%       | Understand and apply Linear Search on unsorted arrays                       |
| Binary Search | 25%       | Understand and apply Binary Search on sorted arrays                         |
| Analysis      | 25%       | Compare the time and auxiliary space complexity of the searching approaches |
| Post-test     | 15%       | Solve all questions                                                         |
