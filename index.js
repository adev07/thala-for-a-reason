document.querySelector(".button").addEventListener("click", function () {
  const text = document.querySelector(".input").value;
  const arr = text.split("");
  const sum = arr.map(Number).reduce((acc, num) => acc + num, 0);
  
  if (sum === 7 || arr.length === 7 || text === "seven") {
    document.getElementById("myCard").style.display = "none";
    const backgroundVideo = document.getElementById("backgroundVideo");
    backgroundVideo.style.display = "block";
    backgroundVideo.muted = false;
    backgroundVideo.play().catch((error) => {
      console.error("Video play error:", error);
    });
  } else {
    document.getElementById("myCard").style.display = "none";
    const backgroundVideo2 = document.getElementById("backgroundVideo2");
    backgroundVideo2.style.display = "block";
    backgroundVideo2.muted = false;
    backgroundVideo2.play().catch((error) => {
    console.error("Video play error:", error);
    });
  }
});
