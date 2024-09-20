function criaCartao(categoria, pergunta, resposta) {
    const container = document.getElementById('flashcards-container');
    
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');
    
    const pCategoria = document.createElement('p');
    pCategoria.innerText = categoria;
    
    const pPergunta = document.createElement('p');
    pPergunta.innerText = pergunta;
    
    const pResposta = document.createElement('p');
    pResposta.classList.add('resposta');
    pResposta.innerText = resposta;
    
    flashcard.appendChild(pCategoria);
    flashcard.appendChild(pPergunta);
    flashcard.appendChild(pResposta);
    
    flashcard.addEventListener('click', function() {
        flashcard.classList.toggle('show');
    });
    
    container.appendChild(flashcard);
}

// Criando os flashcards
criaCartao('História', 'O que significa Mesopotâmia?', 'Terra entre rios - especificamente os rios Tigre e Eufrates');
criaCartao('História', 'Quais eram os povos da Mesopotâmia?', 'Acádios, Sumérios, Assírios, Babilônios e Persas');
criaCartao('História', 'Data da 1ª Guerra Mundial', '1914 a 1918');
criaCartao('História', 'Data da Revolução Francesa', '1789');
criaCartao('Física', 'Fórmula da tensão elétrica?', 'U = R × I');
criaCartao('Física', 'Qual a unidade de medida da intensidade de corrente?', 'Ampère');
criaCartao('História', 'Em que ano se deu o golpe militar brasileiro?', '1964');
criaCartao('Química', 'Qual a fórmula da concentração de uma substância?', 'C = massa do soluto / volume da solução');
criaCartao('História', 'Qual o regime defendido pelos EUA?', 'Capitalismo');
criaCartao('Matemática', 'Qual a fórmula do trapézio?', '(B + b) × h / 2');
criaCartao('Química', 'Fórmula da densidade', 'D = massa da solução / volume da solução');
criaCartao('Química', 'Fórmula do Título', 'T = massa do soluto / (massa do soluto + massa do solvente)');
criaCartao('Química', 'Fórmula da Molaridade', 'M = n° mol soluto / volume da solução');
criaCartao('Química', 'Número da constante de Avogadro', '6,022 × 10^23');
criaCartao('Matemática', 'Qual a relação de Euler?', 'V + F = A + 2');
criaCartao('Biologia', 'O tecido sanguíneo apresenta...', 'Plaquetas, leucócitos e hemácias');
criaCartao('Biologia', 'O que é a sístole?', 'É a contração do músculo cardíaco');
criaCartao('Física', 'Fórmula do calor latente', 'Q = m × L');
criaCartao('Física', 'Fórmula do calor específico', 'Q = m × c × Δt');
criaCartao('Física', 'Qual a equação do espaço no movimento uniforme?', 'S = So + V × t');
