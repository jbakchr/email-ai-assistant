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
  const buttons = Array.from(document.querySelectorAll('span[role="link"]'));

  const replyButton = buttons.find((el) => {
    const text = el.innerText.toLowerCase();
    return text.includes("reply") || text.includes("svar");
  });

  if (!replyButton) return null;

  return replyButton.closest(".amn");
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

/* ---------------------------
   NEW helper functions
---------------------------- */

function findReplyActionInContainer(container) {
  if (!container) return null;

  const actions = Array.from(container.querySelectorAll('span[role="link"]'));
  return actions.find((el) => {
    const t = el.innerText.toLowerCase().trim();
    return t.includes("reply") || t.includes("svar");
  });
}

function clickElement(el) {
  if (!el) return;

  // Some Gmail UI reacts better to real mouse events than el.click() alone
  el.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
  el.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
  el.dispatchEvent(new MouseEvent("click", { bubbles: true }));
}

function getActiveComposeBox() {
  // Gmail compose editor is a contenteditable textbox
  const boxes = Array.from(
    document.querySelectorAll('div[contenteditable="true"][role="textbox"]'),
  );

  // Return the last visible one (best guess for "active")
  for (let i = boxes.length - 1; i >= 0; i--) {
    const el = boxes[i];
    if (el && el.offsetParent !== null) return el;
  }

  return null;
}

function waitForComposeBox(timeoutMs = 5000, intervalMs = 100) {
  return new Promise((resolve) => {
    const start = Date.now();

    const timer = setInterval(() => {
      const box = getActiveComposeBox();
      if (box) {
        clearInterval(timer);
        resolve(box);
        return;
      }

      if (Date.now() - start > timeoutMs) {
        clearInterval(timer);
        resolve(null);
      }
    }, intervalMs);
  });
}

function moveCaretToEnd(el) {
  const range = document.createRange();
  range.selectNodeContents(el);
  range.collapse(false);

  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

function insertIntoCompose(text, composeBox) {
  const box = composeBox || getActiveComposeBox();
  if (!box) return false;

  const existing = box.innerText.trim();

  // If there's already a draft, prepend AI reply above it (simple, safe default)
  if (existing.length > 0) {
    box.innerText = text + "\n\n" + existing;
  } else {
    box.innerText = text;
  }

  // Trigger Gmail to notice changes
  box.dispatchEvent(new Event("input", { bubbles: true }));

  box.focus();
  moveCaretToEnd(box);

  return true;
}

/* ---------------------------
   Updated click handler
---------------------------- */

async function handleClick(event) {
  const button = event.currentTarget;

  const emailText = getEmailText();
  if (!emailText) {
    alert("Kunne ikke finde email indhold.");
    return;
  }

  button.innerText = "Genererer...";

  // 1) Ensure reply editor is open. If not, click Gmail's Reply/Svar.
  let composeBox = getActiveComposeBox();
  if (!composeBox) {
    const container = button.closest(".amn");
    const replyAction = findReplyActionInContainer(container);
    if (replyAction) {
      clickElement(replyAction);
    }
    composeBox = await waitForComposeBox();
  }

  // 2) Generate AI reply
  const reply = await fetchAIReply(emailText);

  // 3) Insert into compose if possible; otherwise fallback to alert
  const inserted = insertIntoCompose(reply, composeBox);
  if (!inserted) {
    alert("AI forslag:\n\n" + reply);
  }

  button.innerText = "✨ AI Reply";
}

setInterval(injectButton, 2000);
