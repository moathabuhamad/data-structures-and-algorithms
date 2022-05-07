# Insertion sort 

## Challenge Summary
<!-- Short summary or background information -->
The problem domain  is that  you want to sort the numbers from lowest to biggest. using insertion sorting.

## Challenge Description
<!-- Description of the challenge -->
In inseration array the left to the right by checking the value of the number left to the number you are sorting  to the numbers to it's left and swaping of the number is bigger than the latter. 

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
The approach  was to check all the numbers in the array from left to right, the first one has nothing to it's left so exclude it the seconed one has only one if it,s bigget than it you assign the value of one of them to a temp variable so you won't lose it 
then swap them at the third one you need to check it with the two numbers before it that why we used a while loop .
The big 0 of time insertion sorting is equal to (n*(n+1))/2 but we drop the constants so it is On^2.however space complexty.


![insertion](./26.png)