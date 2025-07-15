async function loadMessage() {
  const response = await fetch("/api/message");
  const data = await response.json();
  document.getElementById("message").textContent = data.message;
}

loadMessage();

