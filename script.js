
alert("JavaScript is working!");

const quizForm = document.getElementById("quiz-form");
const resultContainer = document.getElementById("result-container");

const results = {
    speed: {
        title: "⚡ The Speedster!",
        description: "You are fast and explosive. You love beating defenders!"
    },
    playmaker: {
        title: "🎯 The Playmaker!",
        description: "You are creative and know how to create chances!"
    },
    scorer: {
        title: "🔥 The Goal Machine!",
        description: "You love scoring goals and making the difference!"
    },
    defender: {
        title: "🛡️ The Defender!",
        description: "You are disciplined and always protect your team!"
    }
};

quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(quizForm);

    const scores = {
        speed: 0,
        playmaker: 0,
        scorer: 0,
        defender: 0
    };

    for (let i = 1; i <= 4; i++) {
        const answer = formData.get("q" + i);

        if (!answer) {
            resultContainer.textContent = "Please answer all 4 questions!";
            return;
        }

        scores[answer]++;
    }

    let winner = "speed";

    for (const type in scores) {
        if (scores[type] > scores[winner]) {
            winner = type;
        }
    }

    resultContainer.innerHTML = `
        <h2>${results[winner].title}</h2>
        <p>${results[winner].description}</p>
        <button type="button" id="restart-button" class="btn btn-outline-success">
            Try Again
        </button>
    `;

    document.getElementById("restart-button").addEventListener("click", function() {
        quizForm.reset();
        resultContainer.innerHTML = "";
    });
});
