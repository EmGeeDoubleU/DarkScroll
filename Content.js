let blackSquare = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8u8tpVE9yl1Jj0L81O7deRDfyW-yOXX-Kw&s"

const observer = new MutationObserver(() => {
  const images = document.getElementsByTagName("img");
  for (let img of images) {
    img.src = blackSquare;
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
