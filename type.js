/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   type.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mcutura <mcutura@student.42berlin.de>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/02 17:38:59 by mcutura           #+#    #+#             */
/*   Updated: 2023/07/02 17:56:18 by mcutura          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const text = "GREETING> Hello! This is your website speaking<br>REMINDER> You are a visitor<br>ALERT: You are being watched<br>POSITIVE AFFIRMATION> Good luck!";
const typewriter = document.getElementById("typewriter");
typewriter.innerHTML = text;
