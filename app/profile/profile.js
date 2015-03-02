/**
 * Created by Uriel on 27/02/2015.
 */

enejApp.controller('profileController', function() {
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

    this.hasErrors = function(form, field) {
        return this.submitted && form[field].$error.required;
    };

    this.hasNumericErrors = function(form,field) {
        return this.submitted && form[field].$error.number;
    }
    this.register = function() {
      console.log(this.user);
      myFirebaseRef.set(this.user);
    };
});