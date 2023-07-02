/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   type.js                                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mcutura <mcutura@student.42berlin.de>      +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/07/02 17:38:59 by mcutura           #+#    #+#             */
/*   Updated: 2023/07/02 17:53:54 by mcutura          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const text = "GREETING> Hello! This is your website speaking\nREMINDER> You are a visitor\nALERT: You are being watched\nPOSITIVE AFFIRMATION> Good luck!";
const typewriter = document.getElementById("typewriter");
typewriter.innerHTML = text;
