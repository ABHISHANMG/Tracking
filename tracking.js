(function () {
  const trackedData = [];

  document.addEventListener("mousemove", function (e) {
    const point = { x: e.clientX, y: e.clientY, timestamp: Date.now() };
    trackedData.push(point);
    console.log("Mouse moved to:", point); // ✅ Logs real-time movement
  });

  console.log("Mouse tracking initialized. Sending data every 5 seconds...");

  setInterval(() => {
    if (trackedData.length === 0) return;

    console.log("Sending data:", trackedData); // ✅ Optional: see batch before send

    fetch("https://your-api-endpoint.com/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        points: trackedData,
        page: window.location.href,
      }),
    });

    trackedData.length = 0;
  }, 5000);
})();
