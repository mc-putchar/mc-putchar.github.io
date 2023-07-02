/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   putchar.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mcutura <mcutura@student.42berlin.de>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/02 17:38:59 by mcutura           #+#    #+#             */
/*   Updated: 2023/07/02 19:00:58 by mcutura          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const text = `~ GREETING $>Hello! I'm a website.
~ REMINDER $>You are a visitor.
~ ALERT $>You are being observed.
~ POSITIVE AFFIRMATION $>Good luck!
~ $> EOF`;
const typewriter = document.getElementById("typewriter");
const stdout = document.getElementById("stdout");
const flushBtn = document.getElementById("flushout");
const user = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("message");

function putchar() {
	const lines = text.split("\n");
	typewriter.textContent = ""; // Clear the existing content

	lines.forEach((line, index) => {
		const lineElement = document.createElement("span");
		lineElement.textContent = line;
		lineElement.style.display = "block"; // Display each line as a block element
	
		setTimeout(() => {
			typewriter.appendChild(lineElement);
	
			if (index < lines.length - 1) {
			const cursorElement = document.createElement("span");
			cursorElement.textContent = "|";
			cursorElement.style.opacity = "0"; // Hide the cursor initially
			typewriter.appendChild(cursorElement);
			}
		}, index * 3000); // Adjust the delay between lines if needed
	});
}

putchar();

flushBtn.addEventListener("click", () => {
  const text2 = user.value + " " + email.value + " $>" + msg.value;
  typeText(text2);
});

function typeText(text) {
  stdout.textContent = "";

  let index = 0;
  const intervalId = setInterval(() => {
    stdout.textContent += text2[index];
    index++;

    if (index >= text2.length) {
      clearInterval(intervalId);
    }
  }, 100);
}
