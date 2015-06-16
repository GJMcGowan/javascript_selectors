This is a project to make a Javascript selection engine that can return HTML elements when given a selector - without using any libraries or `document.querySelector`.

### Approach, Learning, Comments

When I first approached this task, I had no idea how to complete it, having only used JQuery as a selector before. Initially I just tried to get several tests to pass, before realising that to pass the latter tests in a robust way I would have to parse the input in some way and build up the elements one by one - which was the final approach I took.

The task mainly made me learn a lot about javascript HTML selectors, as well as parsing string inputs to break them into smaller chunks.

I think this code could be refactored, in particular many of the methods are quite similar (such as when the adder and deleter both recognise a word as being a class/ID/CSS). In addition, this function would not work in all browsers, for example `document.getElementsByClassName` is not present in IE8, and I could either refactor this away or add functions myself to deal with it. I wanted to keep the code as short and readable as I could though, so I did not do this.

### Installation

  * Clone this repo
  * Open the Test.html file in your browser
  * Look at the developer console to see the tests, or use $
