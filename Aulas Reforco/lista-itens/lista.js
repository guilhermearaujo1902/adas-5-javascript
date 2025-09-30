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
    tabelaPacientes.innerHTML = '';

    const divCardPacientes = document.getElementById('cardList');
    divCardPacientes.innerHTML = '';

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

        if (paciente.estado === 'COMA') {
            classeIndice = 'indice-coma';
            classeBorda = 'borda-coma';
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

function abrirFormulario() {
    const divFormulario = document.getElementById('form');
    divFormulario.classList.remove('esconder');
}

function fecharFormulario() {
    const divFormulario = document.getElementById('form');
    divFormulario.classList.add('esconder');
}

function addPaciente() {

    // Maper todos os campos da tela e guardar em constantes
    const novoNome = document.getElementById('nome').value;
    const novoConvenio = document.getElementById('convenio').value;
    const novoTelefone = document.getElementById('telefone').value;
    const novoEstado = document.getElementById('estado').value;
    const novoSexo = document.getElementById('sexo').value;

    // Crio um objeto no mesmo padrão dos objetos da lista de pacientes
    // e insiro em cadas propriedade do objeto o valor correspondente
    // das constantes
    const novoPaciente = {
        nome: novoNome,
        convenio: novoConvenio,
        telefone: novoTelefone,
        estado: novoEstado,
        sexo: novoSexo
    }

    // Inserir o novo objeto na lista já existente
    listaPacientes.push(novoPaciente);

    gerarListaPacientes();
    limparCampos();
    fecharFormulario();
}

function limparCampos() {

    document.getElementById('nome').value = '';
    document.getElementById('convenio').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('sexo').value = '';

}