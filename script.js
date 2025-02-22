        const codes = document.querySelectorAll(".code");

		// codes[0].focus()

        codes.forEach((input, index) => {
            input.addEventListener("input", (e) => {
                if (e.target.value.length === 1 && index < codes.length - 1) {
                    codes[index + 1].focus();
                }
            });
            
            input.addEventListener("keydown", (e) => {
                if (e.key === "Backspace" && index > 0 && e.target.value === "") {
                    codes[index - 1].focus();
                }
            });
        });
