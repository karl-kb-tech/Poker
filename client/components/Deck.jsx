import React from 'react'

// var deck = [];
// var suits = ["spades", "diamonds", "clubs", "hearts"];
// var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// function newDeck()
// {
// 	var deck = new Array();

// 	for(var i = 0; i < suits.length; i++)
// 	{
// 		for(var x = 0; x < values.length; x++)
// 		{
// 			var card = {Value: values[x], Suit: suits[i]};
//             deck.push(card);
// 		}
//     }

//  console.log(deck)
// 	return deck;
// }

var deck = [];

 var suits = ["diamonds","spades","clubs","hearts"];

 var ranks = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
 
// function newDeck(){
 for(var i = 0; i < suits.length; i++){
		 for(var j = 0; j < ranks.length; j++){
				 deck.push([suits[i], ranks[j]]);
		 }
 }
 console.log(deck);
//  return deck
// }

export default newDeck