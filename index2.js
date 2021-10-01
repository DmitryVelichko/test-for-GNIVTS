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
      return "гонишь";
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
      return "гоните";
    }

    if (pronoun === "они") {
      return "гонят";
    }
  }

  // Условие для исключений
  if (verb === "терпеть") {
    if (pronoun === "я") {
      return "терплю";
    }

    if (pronoun === "ты") {
      return "терпешь";
    }

    if (pronoun === "он") {
      return "терпит";
    }

    if (pronoun === "она") {
      return "терпит";
    }

    if (pronoun === "мы") {
      return "терпим";
    }

    if (pronoun === "вы") {
      return "терпите";
    }

    if (pronoun === "они") {
      return "терпят";
    }
  }

   // Условие для исключений
   if (verb === "вертеть") {
    if (pronoun === "я") {
      return "верчу";
    }

    if (pronoun === "ты") {
      return "вертишь";
    }

    if (pronoun === "он") {
      return "вертит";
    }

    if (pronoun === "она") {
      return "вертит";
    }

    if (pronoun === "мы") {
      return "вертим";
    }

    if (pronoun === "вы") {
      return "вертите";
    }

    if (pronoun === "они") {
      return "вертят";
    }
  }

   // Условие для исключений
   if (verb === "смотреть") {
    if (pronoun === "я") {
      return "смотрю";
    }

    if (pronoun === "ты") {
      return "смотрешь";
    }

    if (pronoun === "он") {
      return "смотрит";
    }

    if (pronoun === "она") {
      return "смотрит";
    }

    if (pronoun === "мы") {
      return "смотрим";
    }

    if (pronoun === "вы") {
      return "смотрите";
    }

    if (pronoun === "они") {
      return "смотрят";
    }
  }

   // Условие для исключений
   if (verb === "видеть") {
    if (pronoun === "я") {
      return "вижу";
    }

    if (pronoun === "ты") {
      return "видишь";
    }

    if (pronoun === "он") {
      return "видит";
    }

    if (pronoun === "она") {
      return "видит";
    }

    if (pronoun === "мы") {
      return "видим";
    }

    if (pronoun === "вы") {
      return "видите";
    }

    if (pronoun === "они") {
      return "видят";
    }
  }

   // Условие для исключений
   if (verb === "ненавидеть") {
    if (pronoun === "я") {
      return "ненавижу";
    }

    if (pronoun === "ты") {
      return "ненавидишь";
    }

    if (pronoun === "он") {
      return "ненавидит";
    }

    if (pronoun === "она") {
      return "ненавидит";
    }

    if (pronoun === "мы") {
      return "ненавидим";
    }

    if (pronoun === "вы") {
      return "ненавидите";
    }

    if (pronoun === "они") {
      return "ненавидят";
    }
  }

   // Условие для исключений
   if (verb === "зависеть") {
    if (pronoun === "я") {
      return "завишу";
    }

    if (pronoun === "ты") {
      return "зависишь";
    }

    if (pronoun === "он") {
      return "зависит";
    }

    if (pronoun === "она") {
      return "зависит";
    }

    if (pronoun === "мы") {
      return "зависим";
    }

    if (pronoun === "вы") {
      return "зависите";
    }

    if (pronoun === "они") {
      return "зависят";
    }
  }

   // Условие для исключений
   if (verb === "смотреть") {
    if (pronoun === "я") {
      return "смотрю";
    }

    if (pronoun === "ты") {
      return "смотришь";
    }

    if (pronoun === "он") {
      return "смотрит";
    }

    if (pronoun === "она") {
      return "смотрит";
    }

    if (pronoun === "мы") {
      return "смотрим";
    }

    if (pronoun === "вы") {
      return "смотрите";
    }

    if (pronoun === "они") {
      return "смотрят";
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
  // Глаголы первого спряжения
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

  // Глаголы первого спряжения (кроме брить и стелить)

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
