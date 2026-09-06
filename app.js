// ------------------------------
// MCO LEARN USER DATA
// ------------------------------

let userData = JSON.parse(
    localStorage.getItem("mcoLearnUser")
) || {

    xp: 0,
    level: 1,
    streak: 1,
    badges: 0

};


// ------------------------------
// SAVE DATA
// ------------------------------

function saveData() {

    localStorage.setItem(
        "mcoLearnUser",
        JSON.stringify(userData)
    );

}


// ------------------------------
// XP SYSTEM
// ------------------------------

function addXP(amount) {

    userData.xp += amount;

    while (userData.xp >= 100) {

        userData.xp -= 100;

        userData.level++;

    }

    saveData();

    updateUI();

}


// ------------------------------
// UPDATE UI
// ------------------------------

function updateUI() {

    const level =
        document.getElementById("levelNumber");

    const xpBar =
        document.getElementById("xpBar");

    const xpText =
        document.getElementById("xpText");

    const totalXP =
        document.getElementById("totalXP");

    const streak =
        document.getElementById("streak");

    const badges =
        document.getElementById("badges");

    const profileXP =
        document.getElementById("profileXP");

    const profileLevel =
        document.getElementById("profileLevel");


    if (level)
        level.textContent = userData.level;


    if (xpBar)
        xpBar.style.width =
            userData.xp + "%";


    if (xpText)
        xpText.textContent =
            userData.xp + " XP";


    if (totalXP)
        totalXP.textContent =
            userData.xp;


    if (streak)
        streak.textContent =
            userData.streak;


    if (badges)
        badges.textContent =
            userData.badges;


    if (profileXP)
        profileXP.textContent =
            userData.xp;


    if (profileLevel)
        profileLevel.textContent =
            userData.level;

}


updateUI();


// ------------------------------
// DARK MODE
// ------------------------------

const themeBtn =
    document.getElementById("themeBtn");


if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        () => {

            document.body.classList.toggle("dark");

            const dark =
                document.body.classList.contains("dark");

            localStorage.setItem(
                "mcoTheme",
                dark ? "dark" : "light"
            );

            themeBtn.textContent =
                dark ? "☀" : "☾";

        }
    );

}


if (
    localStorage.getItem("mcoTheme")
    === "dark"
) {

    document.body.classList.add("dark");

}


// ------------------------------
// QUIZ
// ------------------------------

function answerQuiz(button, correct) {

    const result =
        document.getElementById("quizResult");


    if (correct) {

        button.style.borderColor =
            "var(--primary)";

        result.textContent =
            "Correct! +10 XP 🎉";

        addXP(10);

    }

    else {

        result.textContent =
            "Not quite. Think about systems that learn patterns.";

    }

}


// ------------------------------
// LESSON COMPLETE
// ------------------------------

function finishLesson() {

    addXP(25);

    const button =
        document.getElementById("completeLesson");

    if (button) {

        button.textContent =
            "✓ Lesson Completed";

        button.disabled = true;

    }

}


// ------------------------------
// DAILY CHALLENGE
// ------------------------------

function completeChallenge() {

    addXP(20);

    alert(
        "Challenge completed! You earned 20 XP 🎉"
    );

}


// ------------------------------
// MINI GAME
// ------------------------------

let score = 0;


function gameAnswer(button, correct) {

    const message =
        document.getElementById("gameMessage");

    if (correct) {

        score += 10;

        document.getElementById("score")
            .textContent = score;

        message.textContent =
            "Correct! ⚡ +10 points";

        addXP(10);

    }

    else {

        message.textContent =
            "Oops! Try again.";

    }

}
