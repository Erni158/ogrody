var licz_home = 1;
var licz_cennik = 1;
var licz_galeria = 1;
var licz_kontakt = 1;
function home()
{
    licz_home++;
    licz_cennik = 1;
    licz_galeria = 1;
    licz_kontakt = 1;
    
    if(licz_home%2==0)
    {
        var home = $("#home");
        home.animate({left: '1900px'}, "slow");
    }
    else
    {
        var reset_h = $("#home");
        reset_h.animate({left: '-300px'}, "slow");
    }

}
 
function cennik()
{
    licz_home=1;
    licz_cennik++;
    licz_galeria = 1;
    licz_kontakt = 1;
    
    if(licz_cennik%2==0)
    {
        var cennik = $("#cennik");
        cennik.animate({left: '1900px'}, "slow");
    }
    else
    {
        var reset_c = $("#cennik");
        reset_c.animate({left: '-300px'}, "slow");
    }
}

function galeria()
{
    licz_home=1;
    licz_cennik=1;
    licz_galeria++;
    licz_kontakt = 1;
    
    if(licz_galeria%2==0)
    {
        var galeria = $("#galeria");
        galeria.animate({left: '700px'}, "slow");
    }
    else
    {
        var reset_g = $("#galeria");
        reset_g.animate({left: '-200px'}, "slow");
    }
}    
function kontakt()
{
    licz_home=1;
    licz_cennik=1;
    licz_galeria = 1;
    licz_kontakt++;
    
    if(licz_kontakt%2==0)
    {
        var kontakt = $("#kontakt");
        kontakt.animate({left: '700px'}, "slow");
    }
    else
    {
        var reset_k = $("#kontakt");
        reset_k.animate({left: '-200px'}, "slow");
    }
}

function reset()
{
    if(licz_home%2==1)
    {
    var reset_h = $("#home");
    reset_h.animate({left: '-200px'}, "slow");
    }
    if(licz_cennik%2==1)
    {
    var reset_c = $("#cennik");
    reset_c.animate({left: '-200px'}, "slow");
    }
    if(licz_galeria%2==1)
    {
    var reset_g = $("#galeria");
    reset_g.animate({left: '-200px'}, "slow");
    }
    if(licz_kontakt%2==1)
    {
    var reset_k = $("#kontakt");
    reset_k.animate({left: '-200px'}, "slow");
    }
}