var last_choose = null;
var last_type;
var puzzle = new Array();
puzzle[0] = "#FF0000";
puzzle[1] = "#00FF00";
puzzle[2] = "#0000FF";
puzzle[3] = "#FFFF00";
puzzle[4] = "#FFFF00";
puzzle[5] = "#00FFFF";
puzzle[6] = "#FF00FF";
puzzle[7] = "#543100";
var puzzleId = 0;
var state = new Array();
var countOfState = 16;
var notChooseList = new Array();
var clickCount = 0;
function restart() {
    for (var some_index = 0; some_index < countOfState; ++some_index) {
        state[some_index] = false;
    };
    last_type = $(color_type);
    last_type["underline"]("#FFFFFF", "text-decoration");
    createGame();
    bind["click"]("ccs", restartGame);
    #restart[some_array[12]](some_array[11], changeType);
};
function changeType() {
    $(last_type)[some_array[10]](some_array[8], some_array[15]);
    $(this)[some_array[10]](some_array[8], some_array[9]);
    last_type = this;
    if (this[some_array[16]] === some_array[17]) {
        puzzleId = 0;
    } else {
        if (this[some_array[16]] === some_array[18]) {
            puzzleId = 1;
        } else {
            if (this[some_array[16]] === some_array[19]) {
                puzzleId = 2;
            };
        };
    };
};
function restartGame() {
    countOfState = 16;
    var _0x273dxd = 0;
    last_choose = null;
    $(some_array[22])
    [some_array[21]](function() {
        state[_0x273dxd++] = false;
        $(this)[some_array[20]]();
    });
    $(some_array[23])[some_array[21]](function() { $(this)[some_array[20]](); });
    $(some_array[26])[some_array[25]](some_array[24]);
    $(some_array[27])[some_array[25]](clickCount = 0);
    createGame();
};
function createGame() {
    var _0x273dxf = 8;
    for (var some_index = 0; some_index < _0x273dxf; ++some_index) {
        notChooseList[some_array[28]](some_index);
        notChooseList[some_array[28]](some_index);
    };
    for (var some_index = 0; some_index < 16; ++some_index) {
        var _0x273dx10 =
            Math[some_array[31]](Math[some_array[29]]() * notChooseList[some_array[30]]);
        var _0x273dx11 = notChooseList[_0x273dx10];
        var _0x273dx12 = puzzle[_0x273dx11];
        notChooseList[some_array[32]](_0x273dx10, 1);
        var _0x273dx13 = $(some_array[38])[some_array[37]](some_array[36])[some_array[35]](
            some_array[34])[some_array[33]](some_array[16], some_index * 10 + _0x273dx11);
        var _0x273dx14 =
            $(some_array[38])[some_array[37]](some_array[39])[some_array[35]](_0x273dx13);
        var _0x273dx15 =
            $(some_array[38])[some_array[37]](some_array[40])[some_array[35]](_0x273dx14);
        var _0x273dx16 =
            $(some_array[38])[some_array[37]](some_array[41])[some_array[35]](_0x273dx14);
        if (puzzleId === 0) {
            _0x273dx16[some_array[10]](some_array[42], _0x273dx12);
        } else {
            _0x273dx16[some_array[10]](some_array[43], some_array[44] + puzzleId +
                                    some_array[45] + _0x273dx11 +
                                    some_array[46]);
        };
        if (some_index % 4 === 0) {
            _0x273dx13[some_array[48]](some_array[47]);
        };
    };
    $(some_array[22])[some_array[12]](some_array[11], playMove);
};
function playMove() {
    if (state[Math[some_array[31]](this[some_array[16]] / 10)] === false) {
        this[some_array[51]][some_array[50]](some_array[49]);
        state[Math[some_array[31]](this[some_array[16]] / 10)] = true;
        $(some_array[27])[some_array[25]](++clickCount);
        setTimeout(function() {
            if (last_choose !== null) {
                if ((last_choose[some_array[16]] % 10) === (this[some_array[16]] % 10)) {
                    countOfState -= 2;
                    if (countOfState === 0) {
                        $(some_array[26])[some_array[25]](some_array[52]);
                    };
                } else {
                    last_choose[some_array[51]][some_array[50]](some_array[49]);
                    this[some_array[51]][some_array[50]](some_array[49]);
                    state[Math[some_array[31]](last_choose[some_array[16]] / 10)] = false;
                    state[Math[some_array[31]](this[some_array[16]] / 10)] = false;
                };
                last_choose = null;
            } else {
                last_choose = this;
            };
        }[some_array[12]](this), 700);
    };
};
$(document)[some_array[53]](restart);
