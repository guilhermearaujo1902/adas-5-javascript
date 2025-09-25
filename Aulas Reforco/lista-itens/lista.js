// Criar lista de pacientes
const listaPacientes = [
    {
        codigo: 1,
        nome: 'Sebastião',
        convenio: 'Particular',
        telefone: '47 98888-7777',
        sexo: 'Masculino'
    },
    {
        codigo: 2,
        nome: 'Joaquina',
        convenio: 'Unimed',
        telefone: '47 97777-6666',
        sexo: 'Feminino'
    },
    {
        codigo: 3,
        nome: 'Serafina',
        convenio: 'Particular',
        telefone: '47 96666-55555',
        sexo: 'Feminino'
    },
]


function gerarListaPacientes() {

    // Criando vínculo entre a tabela no html e a constante no javascript
    const tabelaPacientes = document.getElementById('tabelaPacientes');

    // Percorrer a lista de pacientes e para cada paciente, criar uma linha 'tr'
    // nova na tabela
    for (let paciente of listaPacientes) {
        tabelaPacientes.innerHTML += `
            <tr>
                <td>${paciente.codigo}</td>
                <td>${paciente.nome}</td>
                <td>${paciente.convenio}</td>
                <td>${paciente.telefone}</td>
                <td>${paciente.sexo}</td>
                <td>
                    <button class="btn btn-success">Editar</button>
                    <button class="btn btn-danger">Excluir</button>
                </td>
            </tr>
        `;
    }

}

gerarListaPacientes();

// Exercício:
// Adicionar a coluna 'internado' na tabela e na lista de pacientes

// DESAFIO:
// Implementar a funcionalidade do botão 'Excluir'