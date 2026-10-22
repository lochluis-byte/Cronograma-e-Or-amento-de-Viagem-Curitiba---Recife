// Seleciona o elemento canvas onde o gráfico será desenhado
const ctx = document.getElementById('viagemChart').getContext('2d');

// Definição das categorias e seus respectivos valores finais (R$)
const data = {
    labels: ['Passagem de avião', 'Hospedagem', 'Alimentação', 'Transporte'],
    datasets: [{
        label: 'Valor Final (R$)',
        data: [1300, 1000, 500, 150],
        backgroundColor: [
            '#6c5ce7', // Roxo (Passagem)
            '#00b894', // Verde (Hospedagem)
            '#00cec9', // Azul Turquesa (Alimentação)
            '#fdcb6e'  // Amarelo (Transporte)
        ],
        hoverOffset: 8,
        borderWidth: 2
    }]
};

// Configurações do gráfico Chart.js
const config = {
    type: 'doughnut', // Tipo do gráfico: Rosca
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                p                        size: 12
                    }
                }
            },
            tooltip: {
                callbacks: {
                    // Formata os números ao passar o mouse para a moeda brasileira (R$)
                    label: function(context) {
                        let label = context.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += new Intl.NumberFormat('pt-BR', { 
                                style: 'currency', 
                                currency: 'BRL' 
                            }).format(context.parsed);
                        }
                        return label;
                    }
                }
            }
        }
    }
};

// Renderiza o gráficoosition: 'bottom',
                labels: {
                    padding: 15,
                    font: {

new Chart(ctx, config);
