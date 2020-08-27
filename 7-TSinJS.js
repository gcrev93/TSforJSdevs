// @ts-check

/* so lets start with the original example. back to plain old
javascript! First you want to add the comment and within the
brackets state the type 

This comment alone wont create errors but it will provide type
hints if you hover over the variables

In order to see type errors you need to add this comment // @ts-check to the
top of file !

and if there is an error you want to ignore or you don't agree with you can add 
// @ts-expect-error before the line you want ignored
*/

/** @type {object} */
var obj = { width: 10, height: 15 }

/** @type {number} */
var area = "obj.width * obj.height"



console.log("This is the area " + area)