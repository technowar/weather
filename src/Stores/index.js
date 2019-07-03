import {writable} from 'svelte/store';

const DataObject = writable({});
const ErrorObject = writable({});

export {
  DataObject,
  ErrorObject,
}
