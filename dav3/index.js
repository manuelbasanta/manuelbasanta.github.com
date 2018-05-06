


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
	// blockNum == 3 && animate();
	let currentBlock = $('.grid-block').first();

	chain.addBlock(new Block(blockNum, new Date().toLocaleDateString('es-AR', options) , e));


	(chain.chain[blockNum].hash).match(/.{2}/g).forEach( (element,index,array) => {


	currentBlock.animate({
	    backgroundColor: '#' + element + element + element,
	  }, 300, function() {
	    // Animation complete.
	    if (index == array.length - 1 ) {

	    	let clone = $('.main .grid').clone();
			chain.chain[blockNum].result = clone;
			reWriteHistory(chain.chain[blockNum - 1]);
			blockNum++;
	    }

	 });


		//currentBlock.css('background-color', '#' + element + element + element);
		currentBlock = currentBlock.next();

	});




	$(".input").val('');

}

function generateGrid () {
	let grid = $('.grid');
	for(let i = 0; i < 32; i++) {
		grid.append('<div class="grid-block"></div>');
	}
}

function test () {
	console.log(chain);
}

function reWriteHistory (block) {
	var historyItem = $('.history-item-template').clone();
	// $('.animation').append(block.result["0"].outerHTML);
	historyItem.find('.history-grid').append(block.result["0"].outerHTML);
	historyItem.find('.author').html('Autor: ' + block.author);
	historyItem.find('.block-num').html('Bloque n°: ' + block.index);
	historyItem.find('.timestamp').html('Timestamp: ' + block.timestamp);
	historyItem.find('.hash').html('Hash: ' + block.hash);
	historyItem.find('.previous-hash').html('Hash previo: ' + block.previousHash);

	historyItem.removeClass('history-item-template');
	$('.history').append(historyItem);
	historyItem.css('display', 'flex');
}

function hideShowRegister () {

    var scroll = $(window).scrollTop();
    
    if (scroll < 50 && blockNum >= 2) {
    	$('.register').fadeIn();
    } else {
    	$('.register').fadeOut();
    }

}

// var animationBlock = 0;
// function animate () {
// 		console.log(animationBlock)

// 		if (animationBlock == chain.chain.length ) {
// 			animationBlock = 0;
// 			$('.animation').children().fadeOut();
// 			animate();
// 		} else {

// 			var currentAnimationBlock = $($('.animation').children()[animationBlock]);

// 			currentAnimationBlock.fadeIn();
// 			animationBlock++;
// 			setTimeout(function() { animate ()}, 1000);

// 		}


// }

$(document).ready(function () {

	generateGrid();
	genesisResult = $('.grid').clone();
	chain = new Blockchain();
	//reWriteHistory(chain.chain[0]);

	$(".input").on('keypress', function (e) {

		e.target.value != '' && e.originalEvent.charCode == '13' && generateBlock(e.target.value);
		blockNum == 2 && $('.register').fadeIn();


	});

	$('.register').click(function () {
		$("html,body").animate({scrollTop: $(".history").offset().top}, 600);
	});

	$(window).scroll(function () {
		hideShowRegister();
	});

});





