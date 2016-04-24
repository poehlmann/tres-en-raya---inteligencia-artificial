
function hide_message(){
	panel_message = document.getElementById("message");
	panel_message.style.display = "none";
}

function ShowMessage(winner){
	panel_message = document.getElementById("message");
	panel_message.style.display = "block";

	if (winner == 1) string_notification = "Game Over";
	else string_notification = "You Win";

	MessageNotification = document.getElementById("notification");
	MessageNotification.innerHTML = string_notification;

	if (winner == 1) string_button = "Try Again!";
	else string_button = "Play Again";

	MessageButton = document.getElementById("button");
	MessageButton.innerHTML = string_button;

	if (winner == 1)
		string_tweet = "<a class='tweet' target='_blank' href='http://twitter.com/share?text=No puedo ganar en este 3 en raya http://codigofacilito.com'&via=JoseCodFacilito>Tweet you Try!</a>";
	else
		string_tweet = "<a class='tweet' target='_blank' href='http://twitter.com/share?text=He ganado a un juego con inteligencia artificial'>Tweet you Win</a>";

	MessageTweet = document.getElementById("tweet_gameover");
	MessageTweet.innerHTML = string_tweet;
}