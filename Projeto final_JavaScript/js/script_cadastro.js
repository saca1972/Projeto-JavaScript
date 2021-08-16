// // 3.Pagina de cadastro
// A.Nome completo ( converter todas as letras para maiúscula)
// B.Validar o CPF - Chamar um alert se invalido ou campo do formulário (vermelho)
// C.Data de nascimento - Não pode ter idade negativa e mais de 130 anos ( considerar 16/03/ 2021) chamar um alert se invalido ou campo do formulário (vermelho)
// D.E-mail ser validado - Chamar um alert se invalido ou campo do formulário (vermelho)
// E. Sexo (Masculino , Feminino e Não informado) via seletor
// F . Exibir os campos dentro de uma div com a seguinte frase "Ola (nome ) , seu login é (email) , você tem (idade) se define como uma pessoa do sexo(sexo) e pode usar (CPF) como senha"


// A.Nome completo ( converter todas as letras para maiúscula)
function verifica_nome(input_nome){ // função para verificar o nome
	var nome = input_nome.value; // nome recebe o valor do input
	nome = nome.toUpperCase(); // nome recebe nome maiusculo
	input_nome.value = nome; // o input de volta o valor ja em maiusculo
}

// B.Validar o CPF - Chamar um alert se invalido ou campo do formulário (vermelho)
function verifica_cpf(){ // função para verificar o cpf
	var cpf_valor = document.getElementById("form_cpf").value; // cpf_valor recebe o valor do input
	var validacao_temporaria = true; // var temporaria para auxiliar na validação do for - tem caráter true
	for (i = 0; i < cpf_valor.length; i++){ // for para validar cada posição da string se não tem letras ou símbolos
		if (cpf_valor[i] == " " || isNaN(cpf_valor[i])){
			validacao_temporaria = false; // caso tenha algo que não seja número, a temporária recebe false
		}
	}
	if (validacao_temporaria == false || cpf_valor.length != 11){ // valida se a temporária recebeu falso ou se o tamanho da string CPF é maior/menor que 11(diferente)
		form_cpf.style.background = "lightpink"; // em caso positivo, entra cor vermelho claro
	} else {
		form_cpf.style.background = "lightgreen"; // em caso negativo, fica verde claro
	}
}

// C.Data de nascimento - Não pode ter idade negativa e mais de 130 anos ( considerar 16/03/ 2021) chamar um alert se invalido ou campo do formulário (vermelho)
function calcula_idade(aniversario){ // função para calcular primeiramente a idade
	var data_nascimento = new Date(aniversario); // data_nascimento recebe um novo objeto da classe Date (parâmetro passado na função de verificar abaixo)
	var data_atual = new Date(); // pega a data atual
	var idade = data_atual.getFullYear() - data_nascimento.getFullYear(); // calcula a idade sendo ano atual - ano do nasc, ex: 2021 - 1992 = 29
	if (data_atual.getMonth() < data_nascimento.getMonth()){ // verifica se o mes atual é menor que o do nascimento ()
		idade--; // em caso do mês atual ser menor que o de aniversário, é pq ainda não fez aniversario então diminui 1 da idade
	}
	if (data_atual.getMonth() == data_nascimento.getMonth()){ // caso o mes seja o mesmo do aniversario
		if (data_atual.getDate() < data_nascimento.getDate()){ // se a data atual for menor que a data de aniversario
			idade--; // é pq ainda não fez aniversario então diminui 1 da idade
		}
	}
	return idade; // retorna idade
}

function verifica_nascimento(input_data){	 // função para verificar se é uma idade válida
	var idade = calcula_idade(input_data.value); // a var idade chama a função acima e recebe o valor de idade que ela retornar
	if (idade > 130 || idade < 0){ // se a idade for maior que 130 ou menor que 0 (negativa)
		input_data.style.background = "lightpink"; // fica vermelho claro
	} else { // se não for
		input_data.style.background = "lightgreen"; // fica verde claro
	}
}

// D.E-mail ser validado - Chamar um alert se invalido ou campo do formulário (vermelho)
function verifica_email(input_email) { // função para verificar e-mail (pronta do exemplo da prof)
	usuario = input_email.value.substring(0, input_email.value.indexOf("@"));
	dominio = input_email.value.substring(input_email.value.indexOf("@")+ 1, input_email.value.length);
	if ((usuario.length >=1) && (dominio.length >=3) && (usuario.search("@")==-1) && (dominio.search("@")==-1) && (usuario.search(" ")==-1) &&
		(dominio.search(" ")==-1) && (dominio.search(".")!=-1) && (dominio.indexOf(".") >=1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
		input_email.style.background = "lightgreen"
		}
		else{
		input_email.style.background = "lightpink";
		}
}
	
// F . Exibir os campos dentro de uma div com a seguinte frase "Ola (nome ) , seu login é (email) , você tem (idade) se define como uma pessoa do sexo(sexo) e pode usar (CPF) como senha"

function form_enviado(){ // função para ser chamada quando clicar no botão - recebe os valores dos inputs e imprime na tela a concatenação para criar o texto solicitado
	var nome_completo = document.getElementById("form_nome").value; 
	var cpf_completo = document.getElementById("form_cpf").value;
	var email_completo = document.getElementById("msgemail").value;
	var idade = calcula_idade(document.getElementById("form_nascimento").value);
	var genero = document.getElementById("genero").value;	
	document.getElementById("mensagem_concluido").innerHTML = "Olá " + nome_completo + ", o seu cadastro foi concluído com sucesso! O seu login para acessar o nosso site é " + email_completo + ", você tem " + idade + " anos, se define como uma pessoa do sexo " + genero + ", e pode usar o seu CPF:"+ cpf_completo + " como senha.";
	document.getElementById("form_cadastro").reset(); // pega o form e reseta ele
}

