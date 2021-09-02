let generatedValue = '' , checkValue = '';

function generate()
{
    let x = Math.random() * 10000;
    generatedValue = generatedValue + x.toFixed(0);
    if(generatedValue.length == 4)
        document.getElementById("display").value =  generatedValue;
    else
        generate();
}

function add(value)
{
    checkValue = checkValue  + value;
    document.getElementById("display2").value = checkValue;
}

function del()
{
    checkValue = checkValue.substring(0, checkValue.length - 1);
    document.getElementById("display2").value = checkValue;
}

document.getElementById("clear").addEventListener("click", function()
{
    checkValue = '';
    document.getElementById("display2").value = checkValue;
    console.log(9);
});


function submit()
{
    if(generatedValue == checkValue)
    {
        document.getElementById("correct").style.display = 'block';
        document.getElementById("wrong").style.display = 'none';
    }
    else
    {
        document.getElementById("correct").style.display = 'none';
        document.getElementById("wrong").style.display = 'block';
    }
}