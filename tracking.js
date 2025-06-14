(function () {
  console.log("Mouse tracking script starting..."); // Initialization log
  const trackedData = [];

  try {
    document.addEventListener("mousemove", function (e) {
      const point = { x: e.clientX, y: e.clientY, timestamp: Date.now() };
      trackedData.push(point);
      console.log("Mouse moved to:", point); // ✅ Logs real-time movement
    });
  } catch (error) {
    console.error("Error setting up mouse tracking:", error);
  }
  // Send data every 5 seconds

  console.log("Mouse tracking initialized. Sending data every 5 seconds...");

  setInterval(() => {
    if (trackedData.length === 0) {
      console.log("No mouse movement data to send");
      return;
    }

    console.log("Sending data:", trackedData); // ✅ Optional: see batch before send

    fetch("https://your-api-endpoint.com/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        points: trackedData,
        page: window.location.href,
      }),
    })
    .then(response => {
      console.log("Data sent successfully");
      trackedData.length = 0;
    })
    .catch(error => {
      console.error("Error sending data:", error);
    });
  }, 5000);
})();
