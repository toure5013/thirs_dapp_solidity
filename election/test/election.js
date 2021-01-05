var Election = artifacts.require("./Election.sol");

contract("Election", function(accounts){
	var electionInstance;
	it("initializes with two candidates", function(){
		return Election.deployed().then(function(instance){
			return instance.candidatesCount();
		}).then(function(count){
			assert.equal(count, 2);
		});
	})


	it("initializes the candidates with the correct values", function(){
		return Election.deployed().then(function(instance){
			electionInstance = instance;
			return electionInstance.candidates(1);
		}).then(function(candidate){
			//assert permet de dire que : ("la valeur de ceci ", "est à cette valeur", "affiche le mesage en cas d'erreur")
			assert.equal(candidate[0], 1 , "containes the correct id" ); 
			assert.equal(candidate[1],"Candidate 1", "containes the correct name");
			assert.equal(candidate[2], 0, "containes the correct votes count");
			return electionInstance.candidates(2);
		}).then(function(candidate){
			assert.equal(candidate[0], 2, "containes the correct id" );
			assert.equal(candidate[1], "Candidate 2","containes the correct name");
			assert.equal(candidate[2], 0, "containes the correct votes count");
		});
	});
});