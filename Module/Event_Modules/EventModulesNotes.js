//!EventEmitter:-
//  is a core module in Node.js used to create and handle custom events.
// It is part of the events module and is often used for building event-driven systems in Node.js.

///--


//! Key Methods:-

//? 1. emit(eventName, [args])  (//FunctionCall)
// Purpose: Emits (or triggers) an event with the specified eventName. You can also pass arguments that will be consumed by the listeners.

// It’s like calling a function, but instead, it triggers all listeners (functions) attached to the specified event.
//? 2. on(eventName, listener)  (//?FunctionDefine)
// Purpose: Attaches a listener (a function) to a specific eventName. This listener will execute when the event is emitted.