var coins = new Decimal('2')
var coinmulit = new Decimal('2')
var coincost = new Decimal('1e40')
var coincost2 = new Decimal('1e1000')
var translated = new Decimal('1')
var eipoints = new Decimal('2')
var coincost3 = new Decimal('1e5000')
var coincost4 = new Decimal('1ee1000')
var time = new Decimal('0')
let output = ""

setInterval(() => {
    coins = coins.times(coinmulit);
    translated = coins.log10().log10().add(1)
    time = time.add(1)
    eipoints = eipoints.times(translated)
    document.getElementById('coin').innerHTML = "You Have " + coins + " Coins";
    document.getElementById('cost1').innerHTML = "Invertal Mulitipler By 2 (Cost:" + coincost + " coins)";
    document.getElementById('cost2').innerHTML = "Invertal Mulitipler By 10 (Cost:" + coincost2 + " coins)";
    document.getElementById('mulit').innerHTML = "Have mulitipler by " + coinmulit + "."
    document.getElementById('translated').innerHTML = "These mulit of translated to a " + translated + "x";
    document.getElementById('eip').innerHTML = "You Have " + eipoints + " Exponenntial Idle Points."
    document.getElementById('cost3').innerHTML = "Invertal Mulitipler By 1e100 (Cost:" + coincost3 + " EIP)";
    document.getElementById('cost4').innerHTML = "Invertal Mulitipler By Tertate (Cost:" + coincost4 + " EIP)";
}, 1000);

document.getElementById('cost1').onclick = () => {
    coins = coins.div(coincost)
    coincost = coincost.times('1e40')
}

document.getElementById('cost2').onclick = () => {
    coins = coins.div(coincost2)
    coincost2 = coincost2.times(coincost2)
}

document.getElementById('cost3').onclick = () => {
    eipoints = eipoints.div(coincost3)
    coincost3 = coincost3.times("1ee4")
}

document.getElementById('cost4').onclick = () => {
    eipoints = eipoints.div(coincost4)
    coincost4 = coincost4.times("ee1000")
    setInterval(() => {
        coins = coins.times("eeeee309")
    }, 500);
}

function CreateAchievement(nameoftext, descriptors, namethishtml, ifwegteachievement) {
    if (ifwegteachievement) {
        output = "<achievement class\u0022locked\u0022>" + namethishtml + "(" + nameoftext + ", " + descriptors + ")</achievement>"
    } else {
        output = "<achievement class\u0022unlocked\u0022>" + namethishtml + "</achievement>"
    }
}