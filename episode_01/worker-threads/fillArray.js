const {
  Worker, isMainThread, parentPort, workerData
} = require('worker_threads');
const os = require('os');

if (isMainThread) {
  const startTime = Date.now();
  const workers = [];
  const numberOfThreads = os.cpus().length;
  const numberOfElements = 1_000_000_000;
  const sharedBuffer = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * numberOfElements);
  const arr = new Int32Array(sharedBuffer);
  let completed = 0;
  const numElementsPerThread = Math.ceil(numberOfElements / numberOfThreads);  
  while(workers.length < numberOfThreads) {
    const start = workers.length * numElementsPerThread;
    const end = start + numElementsPerThread;
    const worker = new Worker(__filename, {
      workerData: {
        index: workers.length,
        arr,
        start,
        end,
      },
    });
    worker.on('message', (message) => {
      if (message.completed) {
        completed++;
      }
      if (completed === numberOfThreads) {
        console.log('Totally done!');
        console.log(arr);
        console.log('length', arr.length);
        const endTime = Date.now();
        console.log((endTime - startTime) / 1000, 'seconds to complete');
      }
    });
    workers.push(worker);
  }
} else {
  console.log({
    index: workerData.index,
    start: workerData.start,
    end: workerData.end,
  });
  
  for (let i = workerData.start; i < workerData.end; i++) {
    workerData.arr[i] = i + 2;
  }
  parentPort.postMessage({ completed: true });
}
