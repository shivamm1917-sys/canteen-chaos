# Debug log

Your notes. One entry per bug you fixed, using the template below.

This file is read as carefully as your code. A correct fix you cannot
explain counts for little; a bug you could not fix but investigated
honestly still counts for something.

Delete the example before you submit.


### CC-02: "Can't read anything in dark mode"

>Reproduced: first thing working on because cant read anything

>Cause: name-btn and dish-price colour was being inherit from class="dish-body" which was dark

>Fix:  changed dish-body colour to #e8590c (orange) 

>Checked: text readable

>Time: 5 mins , to find colour then from where it is inheriting and then to decide colour


### CC-01 : "The search suggestions are behind everything"

Reported by: a student, on a laptop

>Reproduced: when searched first item was hidden behind cat tabs

>Cause: cat tabs z index was 40 while of search-wrap was1

>Fix:  could change search-wrap z index to above 40 but instead changed cat tabs to 0 from 40

>Checked: now search result are coming above cat tabs

>Time: 10-15 mins to find issue , find tabs



### CC-04: "The buttons don't work on my tablet"

Reported by: a student, on a tablet

>Reproduced: used tab dimension to test it and cart wasnt working

>Cause: a @media query which was overlaying transparent blocks which was blocking the click

>Fix:  removed the @media query

>Checked: now working

>Time: 10 mins to find issue


### CC-06: "I ordered more than they had"

Reported by: canteen staff

>Reproduced: tried to add Dal Tadka Thali could add more than 3

>Cause: there is just a if statement to show button not to stop if exceed quantity 

>Fix:  created a if else statement and added disable in button tag if quantity more

>Checked: now fixed

>Time: 15-20 mins to find issue

### CC-08: "An old coupon still works"

Reported by: canteen staff

>Reproduced: tried to use FRESHERS24 and was working

>Cause: in backend no validation of expiry date

>Fix:  in pricing.js made a validation to check expiry date

>Checked: now fixed

>Time: 10 mins

### CC-07: "Cancelling makes it worse"

Reported by: canteen staff


>Reproduced: tried to check after cancelling it removed more item instead of adding

>Cause: in backend instead of + for adding there was -

>Fix:  in validation.js fixed the function

>Checked: now fixed

>Time: 5 mins


### CC-09: "The menu shows more dishes than it should"

Reported by: a student

>Reproduced: tried to scroll and found glitch

>Cause: many things main is in logic search.js returning whole list 

>Fix:  fixed search.js used some ai

>Checked: now fixed

>Time: 30-40 mins


### CC-10: "Sorting by price is backwards"

Reported by: a student.

>Reproduced: tried sorting

>Cause: reverse a,b in search.js

>Fix:  reverse fixed

>Checked: now fixed

>Time: 2 mins


## Could not fix

For anything you investigated but did not solve. Say what you tried and
where you got to. This is worth marks — leaving it blank when you got
stuck is not.

### CC-03: "The menu is wider than my phone"

** couldnt find it**

### CC-05: "The category bar scrolls away on my phone"

** couldnt find it**



## extra glitch


# cant see orders

>Reproduced: tried seeing orders couldn's

>Cause: mismatch in order route

>Fix:  fixed it

>Checked: now orders visible

>Time: 20 mins


