
var last_choose=null;
var last_type;
var puzzle= new Array();
puzzle[0]="#FF0000";
puzzle[1]="#00FF00";
puzzle[2]="#0000FF";
puzzle[3]="#FFFF00";
puzzle[4]="#00FFFF";
puzzle[5]="#FF00FF";
puzzle[6]="#543100";
puzzle[7]="#FFFFFF";
var puzzleId=0;
var state= new Array();
var countOfState=16;
var notChooseList= new Array();
var clickCount=0;
function restart()
{
    for(var i=0; i<countOfState; ++i)
    {
        state[i]=false;
    };

    createGame();
    $("#restart")["bind"]("click",restartGame);
};

function restartGame()
{
    countOfState=16;
    var _0x273dxd=0;
    last_choose=null;
    $(".flip-container")["each"](function ()
                                 {
                                     state[_0x273dxd++]=false;
                                     $(this)["remove"]();
                                 } );
    $(".clear")["each"](function ()
                        {
                            $(this)["remove"]();
                        } );
    $("h2")["text"]("find the pairs");
    $(".circle")["text"](clickCount=0);
    createGame();
};
function createGame()
{
    var _0x273dxf=8;
    for(var i=0;
        i<_0x273dxf;
        ++i)
    {
        notChooseList["push"](i);
        notChooseList["push"](i);
    };
    for(var i=0;
        i<16;
        ++i)
    {
        var _0x273dx10=Math["floor"](Math["random"]()*notChooseList["length"]);
        var _0x273dx11=notChooseList[_0x273dx10];
        var _0x273dx12=puzzle[_0x273dx11];
        notChooseList["splice"](_0x273dx10,1);
        var _0x273dx13=$("<div></div>")["addClass"]("flip-container")["appendTo"]("#game_map")["attr"]("id",i*10+_0x273dx11);
        var _0x273dx14=$("<div></div>")["addClass"]("flipper")["appendTo"](_0x273dx13);
        var _0x273dx15=$("<div></div>")["addClass"]("front")["appendTo"](_0x273dx14);
        var _0x273dx16=$("<div></div>")["addClass"]("back")["appendTo"](_0x273dx14);
        if(puzzleId===0)
        {
            _0x273dx16["css"]("background-color",_0x273dx12);
        }
        else
        {
            _0x273dx16["css"]("background-image","url(./images/"+puzzleId+"/"+_0x273dx11+".jpg)");
        };
        if(i%4===0)
        {
            _0x273dx13["before"]("<div class=\"clear\"></div>");
        };
    };
    $(".flip-container")["bind"]("click",playMove);
};
function playMove()
{
    if(state[Math["floor"](this["id"]/10)]===false)
    {
        this["classList"]["toggle"]("flip");
        state[Math["floor"](this["id"]/10)]=true;
        $(".circle")["text"](++clickCount);
        setTimeout(function ()
                   {
                       if(last_choose!==null)
                       {
                           if((last_choose["id"]%10)===(this["id"]%10))
                           {
                               countOfState-=2;
                               if(countOfState===0)
                               {
                                   $("h2")["text"]("WIN");
                               };
                           }
                           else
                           {
                               last_choose["classList"]["toggle"]("flip");
                               this["classList"]["toggle"]("flip");
                               state[Math["floor"](last_choose["id"]/10)]=false;
                               state[Math["floor"](this["id"]/10)]=false;
                           };
                           last_choose=null;
                       }
                       else
                       {
                           last_choose=this;
                       };
                   }
                   ["bind"](this),700);
    };
};
$(document)["ready"](restart);

