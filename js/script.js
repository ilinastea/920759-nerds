  var writeUs = document.querySelector(".write-us-button");
  var writeUsPopup = document.querySelector(".write-us-form");
  var writeUsClose = document.querySelector(".close-button");
  var writeName = writeUsPopup.querySelector("[name=field-name]");
  
  writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("write-us-form-show");
    writeName.focus();
  });
  
  writeUsClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove("write-us-form-show");
  });