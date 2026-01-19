const sections = document.querySelectorAll("main section");
let currentIndex = 0;

function showSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth" });
}

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

if (nextBtn) {
    nextBtn.addEventListener("click", () => {
        if (currentIndex < sections.length - 1) {
            currentIndex++;
            showSection(currentIndex);
        }
    });
}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            showSection(currentIndex);
        }
    });
}

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (form && formMessage) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        emailjs.send("service_f8mjvne", "template_ail1slh", {
            from_name: name,
            from_email: email,
            message: message
        })
            .then(function (response) {
                formMessage.style.color = "#4da3ff";
                formMessage.textContent = "Message sent successfully! 🎉";
                form.reset();
            }, function (error) {
                formMessage.style.color = "red";
                formMessage.textContent = "Oops! Something went wrong, please try again.";
            });
    });
}

const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");

if (quizForm && quizResult) {
    quizForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const answers = {
            q1: "A",
            q2: "A",
            q3: "A",
            q4: "A",
            q5: "B",
            q6: "B",
            q7: "A",
            q8: "A",
            q9: "A",
            q10: "B"
        };

        let score = 0;

        for (let i = 1; i <= 10; i++) {
            const q = "q" + i;
            const answer = quizForm[q].value;
            if (answer === answers[q]) {
                score++;
            }
        }

        if (score >= 8) {
            quizResult.style.color = "#4da3ff";
            quizResult.textContent = `Excellent! You scored ${score}/10 🎉`;
        } else if (score >= 5) {
            quizResult.style.color = "#ffa500";
            quizResult.textContent = `Good job! You scored ${score}/10 🙂`;
        } else {
            quizResult.style.color = "red";
            quizResult.textContent = `You scored ${score}/10. Better luck next time! 😞`;
        }
    });
}
