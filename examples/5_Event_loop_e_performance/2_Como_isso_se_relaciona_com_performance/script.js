
function funcaoBloqueante() {
    // Simulando uma operação bloqueante com um loop
    for (let i = 0; i < 1000000000; i++) {
      // Fazendo um cálculo simples para ocupar o tempo de CPU
      const result = i * 2;
    }
}


function funcaoNaoBloqueante(callback) {
    // Simulando uma operação não bloqueante com um processo de nextTick
    process.nextTick(callback);
}




function benchmark() {
    const startTimeBloqueante = new Date();
    funcaoBloqueante();
    const endTimeBloqueante = new Date();
    const executionTimeBloqueante = endTimeBloqueante - startTimeBloqueante;

    const startTimeNaoBloqueante = new Date();
    funcaoNaoBloqueante(() => {
        const endTimeNaoBloqueante = new Date();
        const executionTimeNaoBloqueante = endTimeNaoBloqueante - startTimeNaoBloqueante;

        console.log('Tempo de execução (função bloqueante):', executionTimeBloqueante, 'ms');
        console.log('Tempo de execução (função não bloqueante):', executionTimeNaoBloqueante, 'ms');
    });
}

benchmark()