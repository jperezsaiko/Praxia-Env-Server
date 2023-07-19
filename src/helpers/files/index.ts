/**
 * Download a `Blob` instance on the client side
 * @param blob - `Blob` instance of the file attempt to be downloaded
 * @param filename - File name for the `Blob` instance. Must include the extension of the file
 */
export function downloadBlob(blob: Blob, filename: string) {
  // Create a temporary URL for the blob
  const url = URL.createObjectURL(blob);

  // Create a link element
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;

  // Trigger a click event to start the download
  document.body.appendChild(link);
  link.click();

  // Clean up the temporary URL
  URL.revokeObjectURL(url);
}
