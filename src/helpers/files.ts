export function readTextFile(file: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // Set up event handlers for successful reading or error
    reader.onload = function (event) {
      resolve(event.target!.result);
    };

    reader.onerror = function (event) {
      reject(event.target!.error);
    };

    // Read the file as text
    reader.readAsText(file);
  });
}
