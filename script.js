const uploadBox = document.querySelector(".upload-box"),
  fileInput = uploadBox.querySelector("input"),
  clearBtn = document.querySelector(".clear"),
  imageBox = uploadBox.querySelector("img"),
  textBox = uploadBox.querySelector("span"),
  contentBox = document.querySelector(".content"),
  reduceQuality = document.querySelector(".Quality #Quality"),
  RateBox = document.querySelector(".ReductionRate"),
  cloudImg=document.querySelector('#Cloud'),
  sunImg=document.querySelector('#Sun'),
  mountainImg=document.querySelector('#Mountain');

uploadBox.addEventListener("click", () => {
  fileInput.click();
  cloudImg.style.display="none"
  sunImg.style.display="none"
  mountainImg.style.display="none"
});

clearBtn.addEventListener("click", () => {
  /* fileInput.value = null;
  imageBox.style.setProperty(
    "filter",
    "invert(39%) sepia(60%) saturate(5810%) hue-rotate(207deg) brightness(97%) contrast(105%)"
  );
  imageBox.src = "./image/upload.png";
  textBox.innerHTML = "Drop Your Image Here";
  textBox.classList.remove("mt-3"); */
  document.location.reload();
});

const showPreview = (event) => {
  if (event.target.files.length > 0) {
    contentBox.classList.remove("d-none");
    var src = URL.createObjectURL(event.target.files[0]);
    imageBox.src = src;
    imageBox.style.setProperty("filter", "none");
    textBox.classList.add("mt-3");
    textBox.style.bottom="15px";
    textBox.style.left="43%";
    textBox.innerHTML =
      event.target.files[0].size / 1024 > 1024
        ? Math.round(event.target.files[0].size / 1048576) + " MB"
        : Math.round(event.target.files[0].size / 1024) + " KB";
  }
};

reduceQuality.addEventListener("change", () => {
  if (reduceQuality.checked) {
    RateBox.classList.remove("d-none");
  } else {
    RateBox.classList.add("d-none");
  }
});
