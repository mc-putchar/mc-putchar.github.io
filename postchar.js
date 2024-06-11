/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   postchar.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mcutura <mcutura@student.42berlin.de>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/05/26 23:20:12 by mcutura           #+#    #+#             */
/*   Updated: 2024/06/08 22:39:56 by mcutura          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const stdout = document.getElementById("stdout");
const upFiles = document.querySelector("form");
upFiles.addEventListener("submit", (event) => {
	event.preventDefault();
	uploadFiles();
});

function postchar(chars) {
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

function uploadFiles() {
	const url = new URL(form.action);
	const fData = new FormData(form);

	const fetchOptions = {
		method: form.method,
		body: fData,
	};
	fetch(url, fetchOptions);
	postchar("Files uploaded succesfully");
}
