function injectButton() {
  const container = findReplyContainer();
  if (!container) return;

  if (container.querySelector("#ai-reply-button")) return;

  const button = document.createElement("span");

  button.innerText = "✨ AI Reply";
  button.id = "ai-reply-button";

  // ✅ Gmail-like styling
  button.style.display = "inline-flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";

  button.style.marginLeft = "8px";
  button.style.padding = "6px 12px";

  button.style.borderRadius = "18px";
  button.style.border = "1px solid #747775";

  button.style.backgroundColor = "#e8f0fe"; // light blue
  button.style.color = "#1a73e8"; // Gmail blue

  button.style.fontSize = "14px";
  button.style.fontWeight = "500";
  button.style.fontFamily = "Google Sans, Roboto, Arial, sans-serif";

  button.style.cursor = "pointer";

  // ✅ Hover effect
  button.onmouseenter = () => {
    button.style.backgroundColor = "#d2e3fc";
  };

  button.onmouseleave = () => {
    button.style.backgroundColor = "#e8f0fe";
  };

  button.onclick = handleClick;

  container.appendChild(button);
}

function findReplyContainer() {
  // Look for all clickable Gmail buttons
  const buttons = Array.from(document.querySelectorAll('span[role="link"]'));

  const replyButton = buttons.find((el) => {
    const text = el.innerText.toLowerCase();

    // Support both English AND Danish
    return text.includes("reply") || text.includes("svar");
  });

  if (!replyButton) return null;

  // key fix: find correct container
  const container = replyButton.closest(".amn");

  return container;
}

function getEmailText() {
  const emailBody = document.querySelector(".a3s");
  if (!emailBody) return null;

  return emailBody.innerText;
}

async function fetchAIReply(emailText) {
  try {
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
  } catch (err) {
    console.error(err);
    return "Fejl ved hentning af AI svar.";
  }
}

async function handleClick(event) {
  const button = event.target;

  const emailText = getEmailText();

  if (!emailText) {
    alert("Kunne ikke finde email indhold.");
    return;
  }

  // ✅ Small UX improvement
  button.innerText = "Genererer...";

  const reply = await fetchAIReply(emailText);

  button.innerText = "AI Reply";

  alert("AI forslag:\n\n" + reply);
}

setInterval(injectButton, 2000);
