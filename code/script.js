function openDescription(id) {
  let dropdown = document.getElementById(`description${id}`);
  if (dropdown.style.display === "flex") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "flex";
  }
}
