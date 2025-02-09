document
    .querySelector('button') 
    .addEventListener('click', () => {window.alert('TESTE')});



document
    .getElementById('In')
    .addEventListener('click', () => {
        let valor = document
                        .querySelector('input')
                        .value;
        document
            .getElementById('output')
            .innerHTML = valor;
    });
    
