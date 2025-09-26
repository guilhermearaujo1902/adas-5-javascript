// Criar lista de pacientes
const listaPacientes = [
    {
        codigo: 1,
        nome: 'Sebastião',
        convenio: 'Particular',
        telefone: '47 98888-7777',
        sexo: 'Masculino',
        estado: 'INTERNADO'
    },
    {
        codigo: 2,
        nome: 'Joaquina',
        convenio: 'Unimed',
        telefone: '47 97777-6666',
        sexo: 'Feminino',
        estado: 'EM ALTA'
    },
    {
        codigo: 3,
        nome: 'Serafina',
        convenio: 'Particular',
        telefone: '47 96666-55555',
        sexo: 'Feminino',
        estado: 'EM ALTA'
    },
]


function gerarListaPacientes() {

    // Criando vínculo entre a tabela no html e a constante no javascript
    const tabelaPacientes = document.getElementById('tabelaPacientes');

    const divCardPacientes = document.getElementById('cardList');

    // Percorrer a lista de pacientes e para cada paciente, criar uma linha 'tr'
    // nova na tabela
    for (let paciente of listaPacientes) {
        // Gerar as linhas da tabela

        let classeIndice = '';
        let classeBorda = '';

        if (paciente.estado === 'INTERNADO') {
            classeIndice = 'indice-internado';
            classeBorda = 'borda-internado';
        }

        if (paciente.estado === 'EM ALTA') {
            classeIndice = 'indice-alta';
            classeBorda = 'borda-alta';
        }

        tabelaPacientes.innerHTML += `
            <tr>
                <td>${paciente.codigo}</td>
                <td>${paciente.nome}</td>
                <td>
                    <span class="indice ${classeIndice}">${paciente.estado}</span>
                </td>
                <td>${paciente.convenio}</td>
                <td>${paciente.telefone}</td>
                <td>${paciente.sexo}</td>
                <td>
                    <button class="btn btn-success">Editar</button>
                    <button class="btn btn-danger">Excluir</button>
                </td>
            </tr>
        `;

        // Gerar os cards
        divCardPacientes.innerHTML += `
            <div class="card ${classeBorda}">
                <h2>${paciente.nome}</h2>
                <p>Código: ${paciente.codigo}</p>
                <p>Convênio: ${paciente.convenio}</p>
                <p>Telefone: ${paciente.telefone}</p>
                <button class="btn btn-info">Consulta</button>
            </div>
        `;
    }

}

gerarListaPacientes();

function addPaciente() {
    alert('Falta implementar a funcionalidade!!!!');
}

// Exercício
// Criar uma função para ser chamada pelo botão 'Novo'
// ao clicar no botão vai chamar a função 'addPaciente()'
// e inserir um objeto novo dentro da lista 'listaPacientes'
//
// Obs - Pode inserir um objeto com informações estáticas mesmo.


// DESAFIO:
// Implementar a funcionalidade do botão 'Excluir'