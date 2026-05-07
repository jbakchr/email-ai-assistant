function injectButton() {
  const existingButton = document.getElementById("ai-reply-button");
  if (existingButton) return;

  const button = document.createElement("button");
  button.innerText = "AI Reply";
  button.id = "ai-reply-button";

  button.style.padding = "8px";
  button.style.margin = "10px";
  button.style.background = "#1a73e8";
  button.style.color = "white";
  button.style.border = "none";
  button.style.cursor = "pointer";

  button.onclick = handleClick;

  document.body.prepend(button);
}

function getEmailText() {
  // Gmail email body container (not super stable, but works)
  const emailBody = document.querySelector(".a3s");
  if (!emailBody) return null;

  return emailBody.innerText;
}

async function fetchAIReply(emailText) {
  const response = await fetch("http://localhost:8003/generate-reply", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_text: emailText,
    }),
  });

  const data = await response.json();
  return data.reply;
}

async function handleClick() {
  const emailText = getEmailText();

  if (!emailText) {
    alert("Kunne ikke finde email indhold.");
    return;
  }

  const reply = await fetchAIReply(emailText);

  alert("AI forslag:\n\n" + reply);
}

setInterval(injectButton, 3000);
