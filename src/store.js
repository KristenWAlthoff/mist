import { writable } from 'svelte/store';

export let theme = writable('Misty');
export let previousTheme = writable('Misty');
export let chartFlag = writable(false);
// no worky
export let sessionNum = writable(1);
export let workerName = writable('Worker');
// export const workers = [
//   { id: 1, name: 'Worker 1' },
//   { id: 2, name: 'Worker 2' },
//   { id: 3, name: 'Worker 3' },
// ];

export const workerTimer = writable({
  start: 0,
  stop: 0,
  requestStart: 0,
  requestComplete: 0,
});

export const mockLogArray = writable([]);
export const mockAvgsArray = writable([]);

export const labels = [0];
export const succs = [];
export const errs = [];
export const subReqs = [];
export const pieData = [0, 0, 0];

export const currentWorker = [];
export const sessNums = [];
export const sessAvgs = [];

export const requestCounter = 0;