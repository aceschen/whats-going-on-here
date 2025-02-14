async function combineImages(imagePaths: string[]): Promise<string> {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Canvas context not available");

  // Load all images
  const images = await Promise.all(imagePaths.map((path) => loadImage(path)));

  // Set canvas size to match the first image (you can adjust as needed)
  canvas.width = images[0].width;
  canvas.height = images[0].height;

  // Draw each image on the canvas
  images.forEach((img) => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  });

  // Return the combined image as a Data URL
  return canvas.toDataURL("image/png");
}

// Helper function to load an image
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}

// Usage
const imagePaths = ["/path/to/image1.png", "/path/to/image2.png"];
combineImages(imagePaths).then((combinedImageUrl) => {
  const img = document.createElement("img");
  img.src = combinedImageUrl;
  document.body.appendChild(img); // Display the combined image
});
