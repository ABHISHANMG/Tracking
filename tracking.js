(function () {
  const trackedData = [];

  document.addEventListener("mousemove", function (e) {
    trackedData.push({ x: e.clientX, y: e.clientY, timestamp: Date.now() });
  });

  console.log("Mouse tracking initialized. Data will be sent every 5 seconds.", trackedData);
  

  setInterval(() => {
    if (trackedData.length === 0) return;

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
