


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
var backgroundColor;

function generateBlock(e) {

	let currentBlock = $('.grid-block').first();

	chain.addBlock(new Block(blockNum, new Date().toLocaleDateString('es-AR', options) , e));


	backgroundColor = '#' + (chain.chain[blockNum].hash).substring(0, 6);

	$('#final').css({
		'background-color' : backgroundColor,
	});

	$('#final .element1').css({
		'width'            : parseInt((chain.chain[blockNum].hash).substring(6, 8), 16)+ 'px',
		'height'           : parseInt((chain.chain[blockNum].hash).substring(8, 10), 16) + 'px',
		'background-color' : backgroundColor,
		'border-radius'    : parseInt((chain.chain[blockNum].hash).substring(16, 18), 16) + 'px',
		'border'           : parseInt((chain.chain[blockNum].hash).substring(18, 19), 16) + 'px solid #' + (chain.chain[blockNum].hash).substring(19, 25),
		'left'             : parseInt((chain.chain[blockNum].hash).substring(25, 27), 16)+ 'px',
		'top'              : parseInt((chain.chain[blockNum].hash).substring(27, 29), 16)+ 'px',
	});

	$('#final .element2').css({
		'width'            : parseInt((chain.chain[blockNum].hash).substring(29, 31), 16)+ 'px',
		'height'           : parseInt((chain.chain[blockNum].hash).substring(31, 33), 16) + 'px',
		'background-color' : backgroundColor,
		'border-radius'    : parseInt((chain.chain[blockNum].hash).substring(39, 41), 16) + 'px',
		'border'           : parseInt((chain.chain[blockNum].hash).substring(41, 42), 16) + 'px solid #' + (chain.chain[blockNum].hash).substring(42, 48),
		'left'             : parseInt((chain.chain[blockNum].hash).substring(48, 50), 16)+ 'px',
		'top'              : parseInt((chain.chain[blockNum].hash).substring(50, 52), 16)+ 'px',
	});

	$('#final .element3').css({
		'width'            : parseInt((chain.chain[blockNum].hash).substring(52, 54), 16)+ 'px',
		'height'           : parseInt((chain.chain[blockNum].hash).substring(54, 56), 16) + 'px',
		'background-color' : '#' + (chain.chain[blockNum].hash).substring(10, 16),
		'border-radius'    : parseInt((chain.chain[blockNum].hash).substring(56, 57), 16) + 'px',
		'border'           : parseInt((chain.chain[blockNum].hash).substring(58, 59), 16) + 'px solid #' + (chain.chain[blockNum].hash).substring(33, 39),
		'left'             : parseInt((chain.chain[blockNum].hash).substring(59, 61), 16)+ 'px',
		'top'              : parseInt((chain.chain[blockNum].hash).substring(61, 63), 16)+ 'px',
	});



	let clone = $('#final').clone();
	chain.chain[blockNum].result = clone;
	reWriteHistory(chain.chain[blockNum - 1]);
	blockNum++;

	$(".input").val('');

}

function test () {
	console.log(chain);
}

function reWriteHistory (block) {

	var historyItem = $('.history-item-template').clone();

	historyItem.find('.hash').css('background-color', backgroundColor);

	historyItem.removeClass('history-item-template');
	
	$('.history').append(historyItem);
	historyItem.fadeIn();;
}


$(document).ready(function () {

	genesisResult = '';
	chain = new Blockchain();
	chain.chain[0].result = genesisResult;

	$(".input").on('click', function (e) {
		generateBlock('fijo');

	});

});





