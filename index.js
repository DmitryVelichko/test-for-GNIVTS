// спряжение глаголов

// fn (работать, я,ты,он,она, мы, вы, они)

// 1 строка: делаю

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  alert(verbs("делать", "я"));
});

function verbs(verb, pronoun) {
  let verbEnd = verb.slice(-3, verb.length);
  let verb2 = verb.slice(0, -3);

  if (
    verbEnd === "ать" ||
    verbEnd === "еть" ||
    verbEnd === "ять" ||
    verbEnd === "уть" ||
    verbEnd === "ють" ||
    verbEnd === "ыть" ||
    verbEnd === "оть"
  ) {
    if (pronoun === "я") {
      return verb2 + "аю";
    }

    if (pronoun === "ты") {
      return verb2 + "ешь";
    }

    if (pronoun === "он") {
      return verb2 + "ает";
    }

    if (pronoun === "она") {
      return verb2 + "ает";
    }

    if (pronoun === "мы") {
      return verb2 + "аем";
    }

    if (pronoun === "вы") {
      return verb2 + "аете";
    }

    if (pronoun === "они") {
      return verb2 + "ают";
    }
  }

  if (verbEnd === "ить") {
    if (pronoun === "я") {
      return verb2 + "у";
    }

    if (pronoun === "ты") {
      return verb2 + "ишь";
    }

    if (pronoun === "он") {
      return verb2 + "ит";
    }

    if (pronoun === "она") {
      return verb2 + "ит";
    }

    if (pronoun === "мы") {
      return verb2 + "им";
    }

    if (pronoun === "вы") {
      return verb2 + "ите";
    }

    if (pronoun === "они") {
      return verb2 + "ят";
    }
  }
}
