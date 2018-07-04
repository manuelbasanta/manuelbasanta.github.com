const getImageData = (image) => {
	console.log(image.dataURL);

	// put your keys in the header
	var headers = {
		"Content-type"    : "application/json",
		"app_id"          : "e8b920dd",
		"app_key"         : "2d1c560c4596a06655c3b66f6dcb0f89"
	};

	var payload  = { "image" : image.dataURL };
			
		
	var url = "https://api.kairos.com/detect";
	// make request 
	$.ajax(url, {
		headers  : headers,
	    type: "POST",
	    data: JSON.stringify(payload),
	    dataType: "text"
	}).done(function(response){
		console.log(JSON.stringify(JSON.parse(response),null,2));
		console.log(JSON.parse(JSON.parse(response).images["0"].faces["0"].attributes.white))
$('.loader').css('display', 'none');
$('.bars').css('display', 'flex');

		white.animate(Number(toFixedTrunc(JSON.parse(JSON.parse(response).images["0"].faces["0"].attributes.white), 2)));
		black.animate(Number(toFixedTrunc(JSON.parse(JSON.parse(response).images["0"].faces["0"].attributes.black), 2)));
		other.animate(Number(toFixedTrunc(JSON.parse(JSON.parse(response).images["0"].faces["0"].attributes.other), 2))); 
		hispanic.animate(Number(toFixedTrunc(JSON.parse(JSON.parse(response).images["0"].faces["0"].attributes.hispanic), 2)));
		asian.animate(Number(toFixedTrunc(JSON.parse(JSON.parse(response).images["0"].faces["0"].attributes.asian), 2))); 
	});

}

var white = '';
var black = '';
var asian = '';
var hispanic = '';
var other = '';


Dropzone.options.dropzone = {

	init: function() {


		this.on("complete", function(file) { 

			$(".dropzone .dz-preview .dz-success-mark, .dropzone .dz-preview .dz-error-mark").css('opacity','1')
			$('.loader').css('display', 'block');
			setTimeout(function() {
				getImageData(file); 
			}, 3000)
		});
	}

};


// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/
$(document).ready(function () {
	white = new ProgressBar.SemiCircle('#white', {
	  strokeWidth: 6,
	  color: '#FFEA82',
	  trailColor: '#eee',
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 1400,
	  svgStyle: null,
	  text: {
	    value: '',
	    alignToBottom: false
	  },
	  from: {color: '#FFEA82'},
	  to: {color: '#ED6A5A'},
	  // Set default step function for all animate calls
	  step: (state, white) => {
	    white.path.setAttribute('stroke', state.color);
	    var value = Math.round(white.value() * 100);
	    if (value === 0) {
	      white.setText('');
	    } else {
	      white.setText(value);
	    }

	    white.text.style.color = state.color;
	  }
	});

	white.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	white.text.style.fontSize = '2rem';

	hispanic = new ProgressBar.SemiCircle('#hispanic', {
	  strokeWidth: 6,
	  color: '#FFEA82',
	  trailColor: '#eee',
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 1400,
	  svgStyle: null,
	  text: {
	    value: '',
	    alignToBottom: false
	  },
	  from: {color: '#FFEA82'},
	  to: {color: '#ED6A5A'},
	  // Set default step function for all animate calls
	  step: (state, hispanic) => {
	    hispanic.path.setAttribute('stroke', state.color);
	    var value = Math.round(hispanic.value() * 100);
	    if (value === 0) {
	      hispanic.setText('');
	    } else {
	      hispanic.setText(value);
	    }

	    hispanic.text.style.color = state.color;
	  }
	});
	hispanic.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	hispanic.text.style.fontSize = '2rem';

	black = new ProgressBar.SemiCircle('#black', {
	  strokeWidth: 6,
	  color: '#FFEA82',
	  trailColor: '#eee',
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 1400,
	  svgStyle: null,
	  text: {
	    value: '',
	    alignToBottom: false
	  },
	  from: {color: '#FFEA82'},
	  to: {color: '#ED6A5A'},
	  // Set default step function for all animate calls
	  step: (state, black) => {
	    black.path.setAttribute('stroke', state.color);
	    var value = Math.round(black.value() * 100);
	    if (value === 0) {
	      black.setText('');
	    } else {
	      black.setText(value);
	    }

	    black.text.style.color = state.color;
	  }
	});
	black.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	black.text.style.fontSize = '2rem';

	other = new ProgressBar.SemiCircle('#other', {
	  strokeWidth: 6,
	  color: '#FFEA82',
	  trailColor: '#eee',
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 1400,
	  svgStyle: null,
	  text: {
	    value: '',
	    alignToBottom: false
	  },
	  from: {color: '#FFEA82'},
	  to: {color: '#ED6A5A'},
	  // Set default step function for all animate calls
	  step: (state, other) => {
	    other.path.setAttribute('stroke', state.color);
	    var value = Math.round(other.value() * 100);
	    if (value === 0) {
	      other.setText('');
	    } else {
	      other.setText(value);
	    }

	    other.text.style.color = state.color;
	  }
	});
	other.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	other.text.style.fontSize = '2rem';

	asian = new ProgressBar.SemiCircle('#asian', {
	  strokeWidth: 6,
	  color: '#FFEA82',
	  trailColor: '#eee',
	  trailWidth: 1,
	  easing: 'easeInOut',
	  duration: 1400,
	  svgStyle: null,
	  text: {
	    value: '',
	    alignToBottom: false
	  },
	  from: {color: '#FFEA82'},
	  to: {color: '#ED6A5A'},
	  // Set default step function for all animate calls
	  step: (state, asian) => {
	    asian.path.setAttribute('stroke', state.color);
	    var value = Math.round(asian.value() * 100);
	    if (value === 0) {
	      asian.setText('');
	    } else {
	      asian.setText(value);
	    }

	    asian.text.style.color = state.color;
	  }
	});
	asian.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	asian.text.style.fontSize = '2rem';``

	
});


function toFixedTrunc(value, n) {
  const v = value.toString().split('.');
  if (n <= 0) return v[0];
  let f = v[1] || '';
  if (f.length > n) return `${v[0]}.${f.substr(0,n)}`;
  while (f.length < n) f += '0';
  return `${v[0]}.${f}`
}