# Stacks And Queues

[**Pull Request**](https://github.com/hibasalem/data-structures-and-algorithms/pull/37)

Implementation of stacks and queues using linked lists

## Challenge

creating classes for each of the LinkedList and the node including methods for searching, inserting and turning it to string on the list then perform unit tests on each class

## Approach & Efficiency

- code chalange 10

  - stack

    `push(value)` time : o(1) , space O(1)  
    `pop()` time : o(1) , space O(1)  
    `peek()` time : o(1) , space O(1)  
    `isEmpty()` time : o(1) , space O(1)

  - queue

    `enqueue(value)` time : o(n) , space O(1)  
    `dequeue()` time : o(1) , space O(1)  
    `peek()` time : o(1) , space O(1)  
    `isEmpty()` time : o(1) , space O(1)

---

![Stacks And Queues](cc10.jpg)

---

- code chalange 10

  - **_stack_**

    **push(value)** : adds a new node with that value to the top of the stack with an O(1) Time performance.  
    **pop()** : Removes the node from the top of the stack  
    **peek()** : Returns the Value of the node located at the top of the stack  
    **isEmpty()** : Returns a boolean indicating whether or not the stack is empty.

  - **_queue_**

    **enqueue(value)** : adds a new node with that value to the back of the queue with an O(1) Time performance.  
    **dequeue()** : Removes the node from the front of the queue  
    **peek()** : Returns the Value of the node located at the front of the queue  
    **isEmpty()** : Returns a boolean indicating whether or not the queue is empty
