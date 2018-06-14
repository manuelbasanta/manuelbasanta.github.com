if (/Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)){
    console.log('mobile');
} else {
	console.log('desktop');
}


$(document).ready(function () {

	var event = new Date();

	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };

	$('.title-date').html(event.toLocaleDateString('es-AR', options));

	$('.sub-title').fadeIn('slow')

	$('#fullpage').fullpage({
		anchors: ['Método', 'dos', 'tres', 'cuatro'],
		sectionsColor: ['#fff', '#fff', '#fff', '#fff'],
		responsiveWidth: 900,
		onLeave: function(index, nextIndex, direction) {

			generateBlock(index);
			if (nextIndex === 3) {
				var clone = $('.clone');
				var fingerprint = $('.fingerprint');

				var finishedDrawing = function() {
					var drawStatus = animation.getStatus();
				};

				var options = {
		  			duration: 140,
		  			type: 'scenario',
		  			animTimingFunction: Vivus.EASE_OUT
				};

				var animation = new Vivus('fingerprint', options, finishedDrawing);
		
				animation.play(1);

			}

	  	}
	  
	});

	generateGrid();
	chain = new Blockchain();

	$(".input").on('keypress', function (e) {

		e.target.value != '' && e.originalEvent.charCode == '13' && generateBlock(e.target.value);
		blockNum == 2 && $('.register').fadeIn();


	});

});







class Block {
	constructor (index, timestamp, author = 'Bloque genesis', result = genesisResult, previousHash = '') {
		this.index = index;
		this.timestamp = timestamp;
		this.author = author;
		this.previousHash = previousHash;
		this.hash = this.calculateHash();
		this.nonce = 0;
		this.result = result;
	}

	calculateHash () {
		return CryptoJS.SHA256(this.index + this.previousHash + this.timestamp + this.author + this.nonce).toString();
	}

	mineBlock( difficulty ) {
		while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
			this.nonce++;
			this.hash = this.calculateHash();
		}

	}
}

class Blockchain {

	constructor () {
		this.chain = [this.createGenesisBlock()];
		// con 5 la cagas
		this.difficulty = 0;
	}

	createGenesisBlock () {
		return new Block(0, new Date().toLocaleDateString('es-AR', options));
	}

	getLatestBlock () {
		return this.chain[this.chain.length - 1];
	}

	addBlock (newBlock) {
		newBlock.previousHash = this.getLatestBlock().hash;
		newBlock.mineBlock( this.difficulty );
		this.chain.push(newBlock);
	}

	isChainValid () {
		for(let i = 1; i < this.chain.length; i++) {
			const currentBlock = this.chain[i];
			const previousBlock = this.chain[i - 1];

			if (currentBlock.previousHash !== previousBlock.hash)
				return false;

			if (currentBlock.hash !== currentBlock.calculateHash())
				return false; 

			return true;  
		}
	}
}

var blockNum = 1;
var chain;
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
var genesisResult;

function generateBlock(e) {

	let currentBlock = $('.grid-block').first();

	chain.addBlock(new Block(blockNum, new Date().toLocaleDateString('es-AR', options) , e));


	(chain.chain[blockNum].hash).match(/.{2}/g).forEach( (element,index,array) => {

	currentBlock.animate({
	    backgroundColor: '#' + element + element + element,
	  }, 300);

	currentBlock = currentBlock.next();

	});

	blockNum++;

}

function generateGrid () {
	let grid = $('.grid');
	for(let i = 0; i < 32; i++) {
		grid.append('<div class="grid-block"></div>');
	}
}










