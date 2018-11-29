$('.CHESS')
	.find('tr:nth-child(odd) td:nth-child(even), tr:nth-child(even) td:nth-child(odd)')
	.css('background-color', 'black')
	.end()
	.find('td:first-child,  td:last-child')
	.css({'width': '20px', 'background-color': 'lightgreen'})
	.end()
	.find('tr:first-child td, tr:last-child td')
	.css({'height': '20px', 'background-color': 'lightgreen'});
