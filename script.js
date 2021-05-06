var quoteSource=[
		{
			quote: "Sunday Morning",
			name:""
	    },
	    {
	    	quote:"Your First Day of School",
	    	name:""
	    },
	    {
	    	quote:"with cat ears",
	    	name:""
	    },
	    {
	    	quote:"Hello Darkness My Old Friend",
	    	name:""
	    },
	    {
	    	quote:"Panic",
	    	name:""
	    },
	    {
	    	quote:"Worst Nightmare",
	    	name:""
	    },
	    {
	    	quote:"Self-portrait",
	    	name:""
	    },
	    {
	    	quote:"The view from your window",
	    	name:""
	    },
	    {
	    	quote:"The last food you ate",
	    	name:""
	    },
	    {
	    	quote:"A new Start",
	    	name:""
	    },
	    {
	    	quote:"One Heart Breaker",
	    	name:""
	    },
	    {
	    	quote:"A Perfect Day",
	    	name:""
	    },
	    {
	    	quote:"Something Blue",
	    	name:""
	    },
	    {
	    	quote:"Glass",
	    	name:""
	    },
	    {
	    	quote:"A core memory from middle school",
	    	name:""
	    },
	    {
	    	quote:"A quote from your fav movie",
	    	name:""
	    },
	    {
	    	quote:"Yesterday",
	    	name:""
	    },
	    {
	    	quote:"Blending in",
	    	name:""
	    },
	    {
	    	quote:"Hello?911?",
	    	name:""
	    },
	    {
	    	quote:"Boys in skirts",
	    	name:""
	    },
	    {
	    	quote:"Kills and Kisses",
	    	name:""
	    },
	    {
	    	quote:"I fit! I fit in your world!",
	    	name:""
	    },
	    {
	    	quote:"Congrats! It's a PIZZA...",
	    	name:""
	    },
	    {
	    	quote:"Jellyfish Party",
	    	name:""
		}
	];
var index=0;
var x = 0,y = quoteSource.length-1;
function Func_SwitchFont(){
	document.getElementById('quoteContainer').innerHTML=quoteSource[Math.round(Math.random()*(y-x)+x)].quote;
	document.getElementById('quoteContainer').classList=[];
	document.getElementById('quoteContainer').classList.add('font'+index);
	index++;
	
	
	if(index>2){
		index=0
	}
}
//setInterval('Func_SwitchFont()',1000);