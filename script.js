//your JS code here. If required.

// let option = document.getElementById("colorSelect").value;

// function removeSelect(option) {
// 	let select = document.getElementById("colorSelect");
// 	select.remove(option);
// }

// document.getElementById("selectButton").addEventListener("click", removeSelect(option));


document.getElementById("selectButton").addEventListener("click", removeSelect);

function removeSelect() {
  let select = document.getElementById("colorSelect");
  let selectedValue = select.value;

  if (selectedValue !== "") {
    let options = select.options;
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === selectedValue) {
        select.remove(i);
        break;
      }
    }
  }
}
