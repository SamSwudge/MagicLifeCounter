// Main.js
allPlayers = []

var deck_color = {
	"red"  : "#ce1e18",
	"blue" : "#1860ce",
	"green" : "#1a720b",
	"black" : "#191919",
	"white" : "#605636",
	"artifact" : "#5e2c6b"
}

class Player 
{
	constructor(life, counters, player_name, deck_color, taunt) 
	{
		this.id = Math.floor(Math.random() * (+999999 - +0))
		this.life = life;
		this.counters = counters;
		this.player_name = player_name;
		this.deck_color = deck_color;
		this.taunt = taunt;
	}

	setPlayerName(name)
	{
		this.player_name = name;
	}

	setColor(color, id)
	{
		for(var i in deck_color)
		{
			if(i === color)
			{
				// Code for setting background color
				var pageObj = document.getElementById(id);
				pageObj.style.backgroundColor = deck_color[i];
				this.deck_color = deck_color[i];
				if(deck_color[i] === "#fff3b2")
				{
					pageObj.style.color = "black";
				}
			}
		}
	}
}

function createPlayer(name ,color ,id, taunt)
{
	player = new Player(20, 0, name, color, taunt);
	player.setPlayerName(name);
	player.setColor(color, id);

	// Push each player object into the allPlayers array.
	allPlayers.push(player);
	console.info("New Player > ",  player)
	return player;
}


function createColumn()
{
	var target = document.querySelector('#container')
	var div = document.createElement('div')
	target.parentNode.insertBefore( div, target.nextSibling );
	div.setAttribute("id", "card")
	div.setAttribute("class", "card_container")

	return div.id
}

function addPlayer(column_id, player_object)
{
	template = `
		<div class="row">
			<div class="column" style="background-color:${player_object.color};">
				<h1 class="player_names">${player_object.player_name}</h2>
				<input id="playerLife" value=${player_object.life}>
	  			<i><p class="taunt">"${player_object.taunt}"</p></i>
			</div>
		  </div>
		  `
	column = document.getElementById(column_id);
	column.innerHTML = template;
}


$(document).ready(function()
{
	$('#addPlayerButton').click(function (e) { 
		var playerNameInput = $('#playerNameInput').val();
		var tauntInput = $('#playerTauntInput').val();
		var colorInput = $('#colorInput').val();
		e.preventDefault();
		var card = createColumn();
		player_object = createPlayer(playerNameInput, colorInput, card, tauntInput);
		addPlayer(card, player_object);
		
		// Clear fields after commplete
		playerNameInput = $('#playerNameInput').val("");
		tauntInput = $('#playerTauntInput').val("");
		colorInput = $('#colorInput').val("");
	});
});



// UI Functionality
