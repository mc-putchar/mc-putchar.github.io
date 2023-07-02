/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   putchar.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mcutura <mcutura@student.42berlin.de>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/02 17:38:59 by mcutura           #+#    #+#             */
/*   Updated: 2023/07/02 18:20:15 by mcutura          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const text = `~ $> GREETING> Hello! This is your website speaking
~ $> REMINDER> You are a visitor
~ $> ALERT: You are being watched
~ $> POSITIVE AFFIRMATION> Good luck!`;
const typewriter = document.getElementById("typewriter");

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

