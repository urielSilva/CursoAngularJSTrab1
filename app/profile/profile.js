/**
 * Created by Uriel on 27/02/2015.
 */

enejApp.controller('profileController', function() {

    var controller = this;

    this.submitted = false;
    this.user =
    {
        "nomeUsuario" : "",
        "email" : "",
        "senha" : "",
        "nome" : "",
        "sobrenome" : "",
        "nomeCracha" : "",
        "cpf" : "",
        "rg" : "",
        "sexo" : "",
        "cep" : "",
        "pais" : "",
        "estado" : "",
        "cidade" : "",
        "bairro" : "",
        "endereco" : "",
        "numero" : "",
        "complemento" : "",
        "dataNascimento" : "",
        "universidade" : "",
        "curso" : "",
        "periodo" : "",
        "ej" : "",
        "cargoEj" : "",
        "tamanhoCamisa" : "",
        "necessidades" : "",
        "descNecessidade" : "",
        "dieta" : "",
        "alergia" : ""

    };

    this.estado = {};

    this.cidades = ["Teste","teste"];

    this.listaEstados = [
        {nome : 'Distrito Federal', "cidades" : ["Plano Piloto", "Taguatinga", "Sobradinho", "Águas Claras"]},
        {nome : 'São Paulo', "cidades" : ["São Paulo", "Ribeirão Preto", "Campinas", "Pirassununga"]},
        {nome : 'Rio de Janeiro', "cidades" : ["Rio de Janeiro", "Cabo Frio", "Teresópolis", "Petrópolis"]},
        {nome : 'Minas Gerais', "cidades" : ["Belo Horizonte", "Uberlândia", "Uberaba", "Paracatu"]},
        {nome : 'Goiás', "cidades" : ["Goiânia", "Diamantica", "Luziânia", "Pirenópolis"]},
    ];

    this.hasErrors = function(form, field) {
        return this.submitted && form[field].$error.required;
    };

    this.hasNumericErrors = function(form,field) {
        return this.submitted && form[field].$error.number;
    };



    this.register = function() {
      this.user.estado = this.estado.nome;
        console.log(this.user);
      myFirebaseRef.set(this.user);
    };
});