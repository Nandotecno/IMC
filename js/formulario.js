var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    var formulario = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteDoFormulario(formulario);

    var pacienteTr = montarTr(paciente);

 
    if(formulario.nome.value == "" || formulario.peso.value == "" || formulario.altura.value == "" || formulario.gordura.value =="")
    {
        alert("Preencha os campos")
    }
    else
    {
       
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
        formulario.reset();
    }
   
});

function obtemPacienteDoFormulario(formulario)
{
    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calculaImc(formulario.peso.value, formulario.altura.value)
    }
    return paciente;
}

function montaTd(dado, classe)
{
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montarTr(paciente)
{
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}