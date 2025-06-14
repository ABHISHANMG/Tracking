export function initHeatmapTracker() {
  console.log("Mouse tracking script starting...");
  const trackedData = [];

  document.addEventListener("mousemove", function (e) {
    const point = { x: e.clientX, y: e.clientY, timestamp: Date.now() };
    trackedData.push(point);
    console.log("Mouse moved to:", point);
  });

  console.log("Mouse tracking initialized. Sending data every 5 seconds...");
  setInterval(() => {
    if (trackedData.length > 0) {
      console.log("Sending tracked data:", trackedData);
      trackedData.length = 0;
    }
  }, 5000);
}
