import {writable} from 'svelte/store';

const City = writable('');
const DataObject = writable({});
const ErrorObject = writable({});

export {
  City,
  DataObject,
  ErrorObject,
}
