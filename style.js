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


      // love
    const  MeronOption = document.getElementById("Meron");
    const WalaOption = document.getElementById("Wala");
    //   const feedback = document.getElementById("feedback");

    const lovepercentages = {
        Meron: 50,
        Wala: 50,
    }

    MeronOption.addEventListener("click", () => {
    MeronOption.textContent = `Meron 🥰 (${lovepercentages.Meron}%)`; 
    WalaOption.textContent = `Wala 😭 (${lovepercentages.Wala}%) Dapat ako nalang`;

    MeronOption.classList.add("selected");
    WalaOption.classList.remove("selected");
    feedback.style.display = "block";

    disableClicks();
      });