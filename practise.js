const btn = document.querySelector('#btn')

btn.addEventListener('click', function(){
    const input1 = document.querySelector('#input1').value
    const input2 = document.querySelector('#input2').value
    const selectOperator = document.querySelector('#selectOperator')
    
    let result = 0;
    //+
    if(selectOperator.value === '+')
    {
        result = Number(input1) + Number(input2)
    }
    //-
    else if(selectOperator.value === '-')
    {
        result = Number(input1) - Number(input2)
    }
    //*
    else if(selectOperator.value === '*')
    {
        result = Number(input1) * Number(input2)
    }
    // /
    else if(selectOperator.value === '/')
    {
        result = Number(input1) / Number(input2)
    }
    
    document.querySelector('#result').textContent = result
})

