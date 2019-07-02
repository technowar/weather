import {writable} from 'svelte/store';

const City = writable('');
const ErrorObject = writable({});

export {
  City,
  ErrorObject,
}
