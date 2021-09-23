// спряжение глаголов

// fn (работать, я,ты,он,она, мы, вы, они)

// 1 строка: делаю

function verbs(verb, pronoun) {

    let verbEnd = verb.slice(-3, verb.length);
    let verb2 = verb.slice(0, -3);
   
    if( verbEnd === "ать" ||  verbEnd === "еть" || verbEnd === "ять" || verbEnd === "уть" || verbEnd === "ють" || verbEnd === "ыть" || verbEnd === "оть") {
  
  
    if (pronoun === "я") {
      console.log(verb2 + "аю");
    }
  
    if (pronoun === "ты") {
      console.log(verb2 + "ешь");
    }
  
    if (pronoun === "он") {
      console.log(verb2 + "ает");
    }
  
    if (pronoun === "она") {
      console.log(verb2 + "ает");
    }
  
    if (pronoun === "мы") {
      console.log(verb2 + "аем");
    }
  
    if (pronoun === "вы") {
      console.log(verb2 + "аете");
    }
  
    if (pronoun === "они") {
      console.log(verb2 + "ают");
    }
  }
  
  if( verbEnd === "ить") {
  
  
      if (pronoun === "я") {
        console.log(verb2 + "у");
      }
    
      if (pronoun === "ты") {
        console.log(verb2 + "ишь");
      }
    
      if (pronoun === "он") {
        console.log(verb2 + "ит");
      }
    
      if (pronoun === "она") {
        console.log(verb2 + "ит");
      }
    
      if (pronoun === "мы") {
        console.log(verb2 + "им");
      }
    
      if (pronoun === "вы") {
        console.log(verb2 + "ите");
      }
    
      if (pronoun === "они") {
        console.log(verb2 + "ят");
      }
    }
  
    
  }
  
  alert(verbs("сушить", "я"));
  