/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   postchar.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mcutura <mcutura@student.42berlin.de>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/05/26 23:20:12 by mcutura           #+#    #+#             */
/*   Updated: 2024/06/12 01:40:35 by mcutura          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const typewriter = document.getElementById("typewriter");
const stdout = document.getElementById("stdout");
const upFiles = document.querySelector("form");
upFiles.addEventListener("submit", (event) => {
	event.preventDefault();
	uploadFiles();
});

const text = `~ $CHALLENGE = We need ACTION!
~ $INVITE = Choose your files
~ $ACTION = Give 'em to me
~ $??? = "trust me bro"
~ $PROFIT = PROFIT!`;

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

async function uploadFiles() {
	const url = new URL(form.action);
	const fData = new FormData(form);
	const size = Array.from(fData.keys()).length;
	if (0 == size) {
		postchar("No files selected :(");
		return;
	}

	const fetchOptions = {
		method: form.method,
		body: fData,
	};
	postchar("Uploading " + size.toString() + " files...");

	const response = await fetch(url, fetchOptions);
	const status = "" + response.status + " - " + response.statusText;
	const reply = await response.text();
	postchar(status + '\n' + reply);
}

function postchar(chars) {
	stdout.textContent = "";

	let index = 0;
	const intervalId = setInterval(() => {
		stdout.textContent += chars[index++];
		if (index >= chars.length) {
			clearInterval(intervalId);
		}
	}, 100);
}
