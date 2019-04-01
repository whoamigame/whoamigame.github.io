
const website = 'https://whoamigame.herokuapp.com'

function requestPlayers (callback){
	doGet(website + '/info', null, (response)=>{
		console.log(response)
		if(!response) return;
		if(callback != null) callback(response)
	})
}

function requestGameReady(callback){
	doGet(website + '/game/ready', null, callback)
}

function requestGameEnded(callback){
	doGet(website + '/game/ended', null, callback)
}


	
	
	
	
	
	