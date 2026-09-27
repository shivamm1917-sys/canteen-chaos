# Debug log

Your notes. One entry per bug you fixed, using the template below.

This file is read as carefully as your code. A correct fix you cannot
explain counts for little; a bug you could not fix but investigated
honestly still counts for something.

Delete the example before you submit.


### CC-02: "Can't read anything in dark mode"

> "I switched the site to dark mode and now the dish names and the prices
> are almost invisible. The grey line under the name is fine, it's just
> the name and the price."

**Reproduced:** first thing working on because cant read anything

**Cause:** name-btn and dish-price colour was being inherit from class="dish-body" which was dark

**Fix:**  changed dish-body colour to #e8590c (orange) can do white also, but orange is visible so works. saw later it has theme also so orange is better

**Checked:** text readable

**Time:** 5 mins , to find colour then from where it is inheriting and then to decide colour


### CC-01 : "The search suggestions are behind everything"

> "I start typing a dish name and the list of suggestions comes up, but
> it's stuck behind the rest of the page. I can only click the very top
> bit of it. The rest I can see, sort of, but clicking does nothing."

Reported by: a student, on a laptop

**Reproduced:** when searched first item was hidden behind cat tabs

**Cause:** cat tabs z index was 40 while of search-wrap was1

**Fix:**  could change search-wrap z index to above 40 but instead changed cat tabs to 0 from 40

**Checked:** now search result are coming above cat tabs

**Time:** 10-15 mins to find issue , find tabs


### CC-03: "The menu is wider than my phone"

> "I have to scroll sideways to see the whole menu, and the Add to Cart
> buttons on the right-hand dishes are cut off the edge of the screen"

Reported by: a student, on a phone
**Reproduced:** couldnt find it. used dimensions of iphone se and all avaliable was fine in my .


### CC-04: "The buttons don't work on my tablet"

> "Add to Cart does nothing. The star to save a dish does nothing either.
> The buttons look completely normal. It works fine on my laptop, and it
> works on my friend's phone. Only my tablet?"

Reported by: a student, on a tablet

**Reproduced:** used tab dimension to test it and cart wasnt working

**Cause:** a @media query which was overlaying transparent blocks which was blocking the click

**Fix:**  removed the @media query

**Checked:** now working

**Time:** 10 mins to find issue

## Example — delete this

### CC-99 — "The cart total is wrong"

**Reproduced:** Added 2 dosas at Rs. 60 each. The cart showed
Rs. 119.99999 instead of Rs. 130. Happened every time, on any dish with
a price ending in .50.

**Cause:** The total was being added up with plain floating point and
never rounded, so 0.1 + 0.2 style errors showed up on screen. The
rounding helper existed but this one place was not using it.

**Fix:** Ran the total through the existing rounding helper instead of
adding a new one, so every price on screen goes through the same path.

**Checked:** Cart, checkout and the order screen all show Rs. 130 now.
Prices without decimals still show without a trailing .00.

**Time:** about 40 minutes, most of it working out that the cart and the
order screen round in different places.



## CC-0X — "<the complaint, in short>"

**Reproduced:**

**Cause:**

**Fix:**

**Checked:**

**Time:**



## Could not fix

For anything you investigated but did not solve. Say what you tried and
where you got to. This is worth marks — leaving it blank when you got
stuck is not.

### CC-0X — "<the complaint>"

**What I tried:**

**Where I got to:**

**What I would try next:**



## Extra credit

Anything not on the bug log: a problem you found yourself, a test you
wrote, or a fix you are unsure about. Same format, plus one line on how
you noticed it.
