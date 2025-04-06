Virtual DOM ~ not used recently in react. it's an historical concept.
DOM created with createRoot and helps to update the UI.

Browser reload the whole DOM.

Virtual DOM tracks the DOM in tree-like and update only the changes.

# React Fiber
React fiber is used to update virtual DOM.
animation, layout,gestures.
pause, abort, reuse work, updates according to priority.

components, elements, instances

# reconciliation
compare two trees and determine which parts to be changed.
trees: browser and another created with createRoot
it is understood as "VIRTUAL DOM".


to improve the performace of list , we need to use keys in react fiber.

# Key Points:
updates can be applied in bunch which provide optimize performance.
different updates have different priorities
Push you decide how to schedule work and Pull allows the framework to decide and make decision.

# fiber
Pause work and resume later, assign priority, reuse previous work, abort work if no need.

