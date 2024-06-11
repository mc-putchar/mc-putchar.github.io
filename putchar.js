/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   putchar.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mcutura <mcutura@student.42berlin.de>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/02 17:38:59 by mcutura           #+#    #+#             */
/*   Updated: 2024/05/30 09:10:55 by mcutura          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const typewriter = document.getElementById("typewriter");
const form = document.querySelector("form");
const stdout = document.getElementById("stdout");
const flushBtn = document.getElementById("flushout");
const putBtn = document.getElementById("putchar");
const text = `~ $GREETING = Hello! I'm a website.
~ $REMINDER = You are a visitor.
~ $ALERT = You are being observed.
~ $POSITIVE AFFIRMATION = Good luck!
~ EOF`;

const params = new URL(document.location).searchParams;
document.getElementById("name").value = params.get("name");
document.getElementById("email").value = params.get("email");
document.getElementById("message").value = params.get("message");

function putchar() {
	const lines = text.split("\n");
	typewriter.textContent = "";

	lines.forEach((line, index) => {
		const lineElement = document.createElement("span");
		lineElement.textContent = line;
		lineElement.style.display = "block";
	
		setTimeout(() => {
			typewriter.appendChild(lineElement);
	
			if (index < lines.length - 1) {
			const cursorElement = document.createElement("span");
			cursorElement.textContent = "|";
			cursorElement.style.opacity = "0";
			typewriter.appendChild(cursorElement);
			}
		}, index * 2500);
	});
}

putchar();

form.addEventListener('menu', function (event) {
	const user = document.getElementById("name");
	const email = document.getElementById("email");
	const msg = document.getElementById("message");
	
	const outputText = `${user.value} ${email.value} $> ${msg.value}`;
	
	event.preventDefault();
	typeText(outputText);
});

form.addEventListener('submit', function (event) {
	const user = document.getElementById("name");
	const email = document.getElementById("email");
	const msg = document.getElementById("message");
	
	const outputText = `${user.value} ${email.value} $> ${msg.value}`;
	typeText(outputText);
});

function typeText(text) {
	stdout.textContent = "";

	let index = 0;
	const intervalId = setInterval(() => {
	  stdout.textContent += text[index];
	  index++;

	if (index >= text.length) {
		clearInterval(intervalId);
		}
	}, 100);
}
