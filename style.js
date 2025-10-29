      const  ChickenOption = document.getElementById("Chicken");
      const EggOption = document.getElementById("Egg");
    //   const feedback = document.getElementById("feedback");

    const Chickenpercentage = {
        Chicken: 56,
        Egg: 54,
    }

    ChickenOption.addEventListener("click", () => {
    ChickenOption.textContent = `Chicken 🐔 (${Chickenpercentage.Chicken}%)`; 
    EggOption.textContent = `Egg 🐣 (${Chickenpercentage.Egg}%)`;

    flyOption.classList.add("selected");
    EggOption.classList.remove("selected");
    feedback.style.display = "block";

    disableClicks();
      });
      

    EggOption.addEventListener("click", () => {
    ChickenOption.textContent = `Chicken 🐔 (${Chickenpercentage.Chicken}%)`; 
    EggOption.textContent = `Egg 🐣 (${Chickenpercentage.Egg}%)`;
    EggOption.classList.add("select ed");
    ChickenOption.classList.remove("selected");
    
    disableClicks();
    });








      // dress
    const  BlueBlackOption = document.getElementById("BlueBlack");
    const WhiteGoldOption = document.getElementById("WhiteGold");
    //   const feedback = document.getElementById("feedback");

    const Dresspercentages = {
        BlueBlack: 80,
        WhiteGold: 20,
    }

    BlueBlackOption.addEventListener("click", () => {
    BlueBlackOption.textContent = `BlueBlack  (${Dresspercentages.BlueBlack}%)`; 
    WhiteGoldOption.textContent = `WhiteGold  (${Dresspercentages.WhiteGold}%)`;

    BlueBlackOption.classList.add("selected");
    WhiteGoldOption.classList.remove("selected");
    feedback.style.display = "block";

    disableClicks();
      });


    WhiteGoldOption.addEventListener("click", () => {
    BlueBlackOption.textContent = `BlueBlack (${Dresspercentages.BlueBlack}%)`; 
    WhiteGoldOption.textContent = `WhiteGold (${Dresspercentages.WhiteGold}%)`;
    WhiteGoldOption.classList.add("select ed");
    BlueBlackOption.classList.remove("selected");
    
    disableClicks();
    });

            // talk
    const  AnimalsOption = document.getElementById("Animals");
    const LanguageOption = document.getElementById("Language");
    //   const feedback = document.getElementById("feedback");

    const talkpercentages = {
        Animals: 45,
        Language: 75,
    }

    AnimalsOption.addEventListener("click", () => {
    AnimalsOption.textContent = `Animals 🙀 (${talkpercentages.Animals}%)`; 
    LanguageOption.textContent = `Language 📖 (${talkpercentages.Language}%)`;

    AnimalsOption.classList.add("selected");
    LanguageOption.classList.remove("selected");
    feedback.style.display = "block";

    disableClicks();
      });


    LanguageOption.addEventListener("click", () => {
    LanguageOption.textContent = `Language 📖 (${talkpercentages.Language}%)`; 
    AnimalsOption.textContent = `Animals 🙀 (${talkpercentages.Animals}%)`;
    LanguageOption.classList.add("select ed");
    AnimalsOption.classList.remove("selected");
    
    disableClicks();
    });

    

      // never
    const  SleepOption = document.getElementById("Sleep");
    const EatOption = document.getElementById("Eat");
    //   const feedback = document.getElementById("feedback");

    const neverpercentages = {
        Sleep: 73,
        Eat: 27,
    }

    SleepOption.addEventListener("click", () => {
    SleepOption.textContent = `Sleep 👻 (${neverpercentages.Sleep}%)`; 
    EatOption.textContent = `Eat 🕊️ (${neverpercentages.Eat}%)`;

    SleepOption.classList.add("selected");
    EatOption.classList.remove("selected");
    feedback.style.display = "block";

    disableClicks();
      });

    EatOption.addEventListener("click", () => {
    EatOption.textContent = `Eat 🕊️ (${neverpercentages.Eat}%)`; 
    SleepOption.textContent = `Sleep 👻 (${neverpercentages.Sleep}%)`;
    EatOption.classList.add("select ed");
    SleepOption.classList.remove("selected");
    
    disableClicks();
    });



      // rather
    const  PastOption = document.getElementById("Past");
    const FutureOption = document.getElementById("Future");
    //   const feedback = document.getElementById("feedback");

    const ratherpercentages = {
        Past: 96,
        Future: 4,
    }

    PastOption.addEventListener("click", () => {
    PastOption.textContent = `Past ⏰ (${ratherpercentages.Past}%)`; 
    FutureOption.textContent = `Future 🔮 (${ratherpercentages.Future}%)`;

    PastOption.classList.add("selected");
    FutureOption.classList.remove("selected");
    feedback.style.display = "block";

    disableClicks();
      });

    FutureOption.addEventListener("click", () => {
    FutureOption.textContent = `Future 🔮 (${ratherpercentages.Future}%)`; 
    PastOption.textContent = `Past ⏰ (${ratherpercentages.Past}%)`;
    FutureOption.classList.add("select ed");
    PastOption.classList.remove("selected");
    
    disableClicks();
    });

      // love
    const  MeronOption = document.getElementById("Meron");
    const WalaOption = document.getElementById("Wala");
    //   const feedback = document.getElementById("feedback");




    // WalaOption.addEventListener("click", () => {
    // WalaOption.textContent = `Ako nalang kasi`; 
    // MeronOption.textContent = `Arrrrayyyy`;
    // WalaOption.classList.add("select ed");
    // MeronOption.classList.remove("selected");
    
    // disableClicks();
    // });

    WalaOption.addEventListener("click", () => {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("sadImage").style.display = "block";
      });

      function hideImage() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("sadImage").style.display = "none";
      }

    
    MeronOption.addEventListener("click", () => {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("animalImage").style.display = "block";
      });

      function hideImage() {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("animalImage").style.display = "none";
      }