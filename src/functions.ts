import { addTwoNumbers } from "./types";

const add: addTwoNumbers = (a, b) =>{ return a + b }

// better not use it with simple functions

// function overloading

type FormSubmitHandler = (data: FormData) => void
type MessageHandler = (evt: MessageEvent) => void
 
function handleMainEvent(
  elem: HTMLFormElement,
  handler: FormSubmitHandler
)
function handleMainEvent(
  elem: HTMLIFrameElement,
  handler: MessageHandler
)
function handleMainEvent(
  elem: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {}
const form = document.querySelector('form');
const iframe = document.querySelector('iframe');

function handleSubmit(data: FormData) {
  console.log('Form submitted:', data);
}

function handleMessage(evt: MessageEvent) {
  console.log('Message received:', evt.data);
}

if (form) {
  handleMainEvent(form, handleSubmit);
}

if (iframe) {
  handleMainEvent(iframe, handleMessage);
}
