/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   type.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mcutura <mcutura@student.42berlin.de>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/02 17:38:59 by mcutura           #+#    #+#             */
/*   Updated: 2023/07/02 17:45:36 by mcutura          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const text = "GREETING> Hello! This is your website speaking\nREMINDER> You are a visitor\nALERT: You are being watched\nPOSITIVE AFFIRMATION> Good luck!";
const speed = 100; // Adjust the typing speed (in milliseconds)

let index = 0;
const typewriter = document.getElementById("typewriter");

function putchar() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(putchar, speed);
  }
}

putchar();
