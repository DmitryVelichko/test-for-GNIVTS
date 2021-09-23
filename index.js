const btn = document.querySelector(".btn");
const input1 = document.querySelector(".input-1");
const input2 = document.querySelector(".input-2");

btn.addEventListener("click", () => {
  alert(verbs(input1.value, input2.value));
});

input1.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    alert(verbs(input1.value, input2.value));
  }
});

input2.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    alert(verbs(input1.value, input2.value));
  }
});

//Основная функция по реализации спряжения глаголов. Принимает глагол в неопр. форме и местоимение, возвращает глагол в соответствующем лице.
function verbs(verb, pronoun) {
  let verbEnd = verb.slice(-3, verb.length);
  let verb2 = verb.slice(0, -3);

  if (verb === "" || pronoun === "") {
    alert("Заполните поле!");
  }

  // Условие для разноспрягаемых глаголов
  if (
    verb === "бежать" ||
    verb === "хотеть" ||
    verb === "дать" ||
    verb === "есть"
  ) {
    if (pronoun === "я") {
      return verb2 + "у";
    }

    if (pronoun === "ты") {
      return verb2 + "ешь";
    }

    if (pronoun === "он") {
      return verb2 + "ет";
    }

    if (pronoun === "она") {
      return verb2 + "ет";
    }

    if (pronoun === "мы") {
      return verb2 + "ите";
    }

    if (pronoun === "вы") {
      return verb2 + "ите";
    }

    if (pronoun === "они") {
      return verb2 + "ят";
    }
  }

  // Условие для исключений
  if (verb === "брить" || verb === "стелить") {
    if (pronoun === "я") {
      return verb2 + "ю";
    }

    if (pronoun === "ты") {
      return verb2 + "ешь";
    }

    if (pronoun === "он") {
      return verb2 + "ет";
    }

    if (pronoun === "она") {
      return verb2 + "ет";
    }

    if (pronoun === "мы") {
      return verb2 + "ем";
    }

    if (pronoun === "вы") {
      return verb2 + "ете";
    }

    if (pronoun === "они") {
      return verb2 + "ят";
    }
  }

  // Условие для исключений
  if (verb === "терпеть") {
    if (pronoun === "я") {
      return "гоню";
    }

    if (pronoun === "ты") {
      return "гонешь";
    }

    if (pronoun === "он") {
      return "гонет";
    }

    if (pronoun === "она") {
      return "гонет";
    }

    if (pronoun === "мы") {
      return "гонем";
    }

    if (pronoun === "вы") {
      return "гонете";
    }

    if (pronoun === "они") {
      return "гонят";
    }
  }

  // Условие для исключений
  if (verb === "держать" || verb === "дышать" || verb === "слышать") {
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
      return verb2 + "ат";
    }
  }

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
