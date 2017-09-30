var p1 = '';
var p2 = '';
var sq1 = '';
var sq2 = '';
var turn1 = true;
var turn = 0;
var board = ['n', 'm', 'b',
             'v', 'z', 'a',
             's', 'q', 'r'];
var winning = [[0, 1, 2],
               [3, 4, 5],
               [6, 7, 8],
               [0, 3, 6],
               [1, 4, 7],
               [2, 5, 8],
               [0, 4, 8],
               [6, 4, 2]];
var scorep1 = 0;
var scorep2 = 0;
var vspc = true;

function reset() {
    turn1 = true;
    turn = 0;
    board = ['n', 'm', 'b',
             'v', 'z', 'a',
             's', 'q', 'r'];
    scorep1 = 0;
    scorep2 = 0;
    $('#tictac').fadeOut("slow");
    $('#chooserival').fadeIn("slow");
}

function shake(win) {
    var shaker = '#' + win[0] + ', #' + win[1] + ', #' + win[2];
    console.log(shaker);
    $(shaker).addClass('animated bounce');

}

function haswon() {
    if (board[0] == board[1] && board[1] == board[2]) {
        shake(winning[0]);
        setTimeout(function () {
            gameEnd(0);
        }, 1000);


    } else if (board[3] == board[4] && board[4] == board[5]) {
        shake(winning[1]);
        setTimeout(function () {
            gameEnd(3);
        }, 1000);


    } else if (board[6] == board[7] && board[7] == board[8]) {
        shake(winning[2]);
        setTimeout(function () {
            gameEnd(6);
        }, 1000);


    } else if (board[0] == board[3] && board[3] == board[6]) {
        shake(winning[3]);
        setTimeout(function () {
            gameEnd(0);
        }, 1000);


    } else if (board[1] == board[4] && board[4] == board[7]) {
        shake(winning[4]);
        setTimeout(function () {
            gameEnd(1);
        }, 1000);


    } else if (board[2] == board[5] && board[5] == board[8]) {
        shake(winning[5]);
        setTimeout(function () {
            gameEnd(2);
        }, 1000);


    } else if (board[0] == board[4] && board[4] == board[8]) {
        shake(winning[6]);
        setTimeout(function () {
            gameEnd(0);
        }, 1000);

    } else if (board[2] == board[4] && board[4] == board[6]) {
        shake(winning[7]);
        setTimeout(function () {
            gameEnd(2);
        }, 1000);

    } else if (turn == 9) {
        gameEnd('t');
    }
}



function gameEnd(num) {
    if (board[num] == 1) {
        $('#whowon').html('PLAYER 1 WINS!');
        scorep1++;

        $('#icon').html('<i class="fa fa-trophy" aria-hidden="true"></i>');
    } else if (board[num] == 2) {
        $('#whowon').html('PLAYER 2 WINS!');
        scorep2++;

        $('#icon').html('<i class="fa fa-trophy" aria-hidden="true"></i>');
    } else if (board[num] == 'c') {
        $('#whowon').html('COMPUTER WINS!');
        scorep2++;

        $('#icon').html('<i class="fa fa-cog" aria-hidden="true"></i>');
    } else {
        $('#whowon').html('IT\'S A TIE!');
        scorep1 += 0.5;
        scorep2 += 0.5;
        $('#icon').html('<i class="fa fa-exchange" aria-hidden="true"></i>');

    }

    $('#won').fadeIn('fast');

    board = ['n', 'm', 'b',
             'v', 'z', 'a',
             's', 'q', 'r'];
    turn = 0;
    if (turn1) {
        var classy = 'sq x ' + sq1;
    } else {
        var classy = 'sq x ' + sq2;
    }

    $('.sq').removeClass().addClass(classy);


    setTimeout(function () {
        $('#score1').html(scorep1);
        $('#score2').html(scorep2);
        $('#won').fadeOut('fast');
    }, 2000);

}


function animate(loc) {

    var square = '#' + loc;
    $(square).hide();
    $(square).removeClass('x');
    $('.x').removeClass(sq2).addClass(sq1);
    $(square).addClass(p2);
    turn1 = true;
    $('#p1').animate({
        opacity: 1,
    }, 200);
    $('#p2').animate({
        opacity: .5,
    }, 200);
    $(square).show();


}

$(document).ready(function () {
    $('#tictac').hide();
    $('#choosewep').hide();
    $('#won').hide();

    $('#reset').on('click', function () {
        turn1 = true;
        turn = 0;
        board = ['n', 'm', 'b',
             'v', 'z', 'a',
             's', 'q', 'r'];
        scorep1 = 0;
        scorep2 = 0;
        
        $('#tictac').fadeOut("slow", function () {
            $('#chooserival').fadeIn("slow");
        });
        $('.sq').removeClass().addClass('sq x');
    });

    $("#vspc").on("click", function () {
        $('#score1').html(scorep1);
        $('#score2').html(scorep2);
        vspc = true;
        $('#chooserival').fadeOut("slow", function () {
            $('#choosewep').fadeIn("slow");
        });
        $('#board2').html('COMPUTER');
    });

    $("#vsp2").on("click", function () {
        $('#score1').html(scorep1);
        $('#score2').html(scorep2);
        vspc = false;
        $('#chooserival').fadeOut("slow", function () {
            $('#choosewep').fadeIn("slow");
        });
        $('#board2').html('PLAYER 2');
    });

    $("#cros").on("click", function () {
        $('#p1').css('background-color', '#cc7878');
        $('#p2').css('background-color', '#95cc78');
        p1 = 'crossed';
        p2 = 'circled';
        sq1 = 'sq1';
        sq2 = 'sq2';
        $('.sq').addClass(sq1);
        $('#choosewep').fadeOut("slow", function () {
            $('#tictac').fadeIn("slow");
        });
    });

    $("#circ").on("click", function () {
        $('#p1').css('background-color', '#95cc78');
        $('#p2').css('background-color', '#cc7878');
        p1 = 'circled';
        p2 = 'crossed';
        sq1 = 'sq2';
        sq2 = 'sq1';
        $('.sq').addClass(sq1);
        $('#choosewep').fadeOut("slow", function () {
            $('#tictac').fadeIn("slow");
        });
    });



    $(".sq").click(function () {

        var id = $(this).attr('id');


        if (vspc) {
            if (board[id] != 'c' && board[id] != 1) {
                turn++;

                board[id] = 1;

                $('#p2').animate({
                    opacity: 1,
                }, 200);
                $('#p1').animate({
                    opacity: .5,
                }, 200);


                $(this).removeClass('x');
                $('.x').removeClass(sq1).addClass(sq2);
                $(this).addClass(p1);
                turn1 = false;

                haswon();

                var change = false;

                if (turn == 0 || turn == 1 && board[4] == 1) {
                    board[6] = 'c';
                    animate(6);
                    change = true;
                } else if (turn == 1) {
                    board[4] = 'c';
                    animate(4);
                    change = true;
                } else if (turn == 2 && board[4] == '1') {
                    board[2] = 'c';
                    animate(2);
                    change = true;
                } else if (turn == 2) {
                    board[4] = 'c';
                    animate(4);
                    change = true;
                } else if (turn == 3 && (board[0] == 1 && board[8] == 1 || board[2] == 1 && board[6] == 1)) {
                    board[3] = 'c';
                    animate(3);
                    change = true;
                } else if (turn == 4 && (board[6] == 'c' && board[3] == 1 && board[4] == 'c' && board[2] == 1)) {
                    board[8] = 'c';
                    animate(8);
                    change = true;
                } else {
                    var won = false;
                    var winned = false;
                    winning.forEach(function (element) {

                        var winop = 0;
                        for (var i = 0; i < 3; i++) {
                            if (board[element[i]] == 'c') {
                                winop++;
                            }
                        }
                        if (winop == 2) {
                            for (var i = 0; i < 3; i++) {
                                if (board[element[i]] != 'c' && board[element[i]] != '1' && winned == false) {
                                    board[element[i]] = 'c';
                                    animate(element[i]);
                                    won = true;
                                    console.log('change');
                                    winned = true;
                                    change = true;
                                    break;

                                }
                            }
                        }
                    });
                    if (!won) {
                        winning.forEach(function (element) {

                            var winop = 0;
                            for (var i = 0; i < 3; i++) {
                                if (board[element[i]] == '1') {
                                    winop++;
                                }
                            }
                            if (winop == 2) {
                                for (var i = 0; i < 3; i++) {
                                    if (board[element[i]] != '1' && board[element[i]] != 'c') {
                                        board[element[i]] = 'c';
                                        animate(element[i]);
                                        change = true;
                                        
                                        break;

                                    }
                                }
                            }
                        });
                    }
                }

                if (!change) {
                    for (var i = 0; i < 9; i++) {
                        if (board[i] != 'c' && board[i] != 1) {
                            board[i] = 'c';
                            animate(i);
                            
                            break;
                        }
                    }
                }
                turn++;
                haswon();

            }


        } else {
            if (turn1 && board[id] != 1 && board[id] != 2) {
                turn++;
                board[id] = 1;

                $('#p2').animate({
                    opacity: 1,
                }, 200);
                $('#p1').animate({
                    opacity: .5,
                }, 200);


                $(this).removeClass('x');
                $('.x').removeClass(sq1).addClass(sq2);
                $(this).addClass(p1);
                turn1 = false;

                haswon();

            } else if (!turn1 && board[id] != 1 && board[id] != 2) {
                turn++;
                board[id] = 2;

                $('#p1').animate({
                    opacity: 1,
                }, 200);
                $('#p2').animate({
                    opacity: .5,
                }, 200);

                $(this).removeClass('x');
                $('.x').removeClass(sq2).addClass(sq1);
                $(this).addClass(p2);
                turn1 = true;

                haswon();
            }
        }

    });
});
