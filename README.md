# Pick-Me-Up-Pup

An activity to practice adding behaviors and event handling to a simple javascript project.

## Wave 1

Inspect `index.js` which starts with a log statement but doesn't print to the console. Link it to the HTML & show it log in the browser console

## Wave 2

Access the DOM to update the img src of the displayed dog on load using a random number.

- Update `onLoaded` to do the random picture assignment.
- Refactor to look up the needed elements once and store them.
  
## Wave 3

Add a button and onClick to access the DOM to add a new random dog to gallery.

## Wave 4

Add a dog image counter to show holding some state.

## Wave 5

If there’s time, show infinite scroll to keep loading a random dog image from files.

- This is just for fun. Go through it quickly. Don't dwell on the scrolling events and attributes used to calculate where the offset is. Students can review later and research.

- Observe how we can add this functionality in with relatively little impact to the rest of the code due to reusing existing functions.

## Refactoring

- Move the inline event handlers to named functions.
- Move the dog logic of the handlers into their own functions (separation of concerns between the event handlers and the dog logic).
- Extract the portions that are related to making a new dog image. We also moved the count incrementer since we want the count to reflect the number of images created, so they should be done together.
- Extract the portions that are related to updating the UI. In a more complex application, refreshing the UI could involve updating many controls. This can be a very complex step!
- Returning to the random image method, extract the portion related to building the img element.