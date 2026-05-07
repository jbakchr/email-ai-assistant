# Feedback

This file collects real examples of AI-generated replies.

Goal:

- Identify patterns over time
- Improve prompt and context in batches (not one-by-one)

---

## ✅ How to use

For each example, quickly note:

- ✅ What worked
- ❌ What didn’t
- 💡 What should be improved

Keep it short — no overthinking.

---

## 📝 New Example Template

### Example — [Short description]

**Email:**
(Paste or summarize the incoming email)

**AI Reply:**
(Paste the generated reply)

---

**✅ What worked:**

- **❌ What didn’t work:**

- **💡 Suggested improvement:**

- ***

  **Quick verdict (choose one):**

- ✅ Ready to send (no edits)
- ✏️ Needs small tweaks
- ❌ Not usable

---

**Notes (optional):**
(Anything extra you notice — tone, length, weird phrasing, etc.)

---

## 🧪 Examples

### Example 1 — ✅ Good

**Email:**
Short question about whether we offer robot courses.

**AI Reply:**
Clear "no" answer, polite, short.

**✅ What worked:**

- Factually correct
- Clear and direct
- Good tone

**💡 Takeaway:**
Baseline behavior works well for simple factual questions.

---

### Example 2 — ✅ Good

**Email:**
Birthday invitation from family.

**AI Reply:**
Positive, natural, accepts invitation.

**✅ What worked:**

- Natural tone
- Matches relationship (informal)
- No unnecessary info

**💡 Takeaway:**
Prompt handles personal emails well.

---

### Example 3 — ⚠️ Slightly off

**Email:**
Question about summer camp.

**AI Reply:**
Says “Nej, vi afholder desværre ikke en sommerlejr i år.”

**❌ What didn’t work:**

- Slightly misleading phrasing ("i år" implies maybe other years)

**💡 Improvement:**

- Prefer stronger phrasing:
  → “Vi tilbyder ikke sommercamps” (general truth)

---

### Example 4 — ❌ Could be better

**Email:**
[Paste email here]

**AI Reply:**
[Paste reply here]

**❌ What didn’t work:**

- Too long
- Too formal
- Repeats itself

**💡 Improvement:**

- Shorter
- More direct
- Remove fluff

---

### Example 5 — ✅ Good but needs tweak

**Email:**
[Paste email here]

**AI Reply:**
[Paste reply here]

**✅ What worked:**

- Correct answer
- Good structure

**❌ What didn’t work:**

- Intro too long ("Tusind tak for din henvendelse...")

**💡 Improvement:**

- Prefer:
  → "Tak for din besked."

---

## 🔁 Patterns to watch for

As you collect examples, look for patterns like:

- Replies are too long
- Too formal
- Repeating information
- Missing context
- Wrong assumptions

---

## 🎯 Current focus

- Keep replies **correct**
- Keep replies **short**
- Avoid hallucinations

---

## 🧠 Guiding principle

Correctness > tone > polish

---

## 🔧 Prompt Tuning Process

This section describes how feedback is turned into improvements.

---

### ✅ When to tune

Do NOT change the prompt for every example.

Instead:

- Wait until at least 3–5 examples show the same issue
- Identify a pattern (e.g. "too long", "too formal")

---

### 🔍 Step 1 — Identify pattern

Example patterns:

- Replies are too long
- Tone is too formal
- Repeats information
- Makes weak or vague statements
- Slightly incorrect phrasing ("i år", "måske", etc.)

---

### 🧠 Step 2 — Define improvement rule

Convert feedback into a clear rule:

Examples:

- ❌ "Too long"
  → ✅ "Hold svar korte og direkte"

- ❌ "Too formal"
  → ✅ "Brug en naturlig og uformel tone"

- ❌ "Repeats itself"
  → ✅ "Undgå gentagelser"

---

### 🛠 Step 3 — Update prompt

Add rule to prompt in `ollama_client.py`.

Example:

```text
- Hold svar korte og præcise
- Undgå unødvendige introduktioner
```

### 🧪 Step 4 — Validate

After updating prompt:

Test on 2–3 real emails
Check if the issue improved

### ⚠️ Important rules

Change ONE thing at a time
Avoid overcorrecting
Always prioritize correctness over tone

### 🎯 Goal

Small prompt changes → noticeable improvement in reply quality
