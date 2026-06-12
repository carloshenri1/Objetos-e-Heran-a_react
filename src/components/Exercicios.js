// =============================================
// LISTA 04 — OO com Classes em JavaScript
// =============================================

// --- NÍVEL FÁCIL (1–10) ---

// 1. Livro
class Livro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
}

// 2. Pessoa com método falar
class Pessoa {
  constructor(nome) { this.nome = nome; }
  falar() { return `Olá, meu nome é ${this.nome}`; }
}

// 3. Retangulo
class Retangulo {
  constructor(largura, altura) { this.largura = largura; this.altura = altura; }
  calcularArea() { return this.largura * this.altura; }
}

// 4. Carro
class Carro {
  constructor(modelo) { this.modelo = modelo; this.velocidade = 0; }
  acelerar() { this.velocidade += 10; return this.velocidade; }
}

// 5. Produto com desconto
class Produto {
  constructor(nome, preco) { this.nome = nome; this.preco = preco; }
  aplicarDesconto(porcentagem) {
    this.preco = this.preco - (this.preco * porcentagem / 100);
    return this.preco;
  }
}

// 6. Contador
class Contador {
  constructor() { this.valor = 0; }
  incrementar() { this.valor++; return this.valor; }
  decrementar() { this.valor--; return this.valor; }
}

// 7. Temperatura
class Temperatura {
  constructor(celsius) { this.celsius = celsius; }
  paraFahrenheit() { return (this.celsius * 9/5) + 32; }
}

// 8. Animal
class Animal {
  constructor(nome, tipo) { this.nome = nome; this.tipo = tipo; }
}

// 9. Filme
class Filme {
  constructor(titulo, anoLancamento) { this.titulo = titulo; this.anoLancamento = anoLancamento; }
  maisde10Anos() { return (new Date().getFullYear() - this.anoLancamento) > 10; }
}

// 10. Lampada
class Lampada {
  constructor() { this.ligada = false; }
  ligar() { this.ligada = true; return 'Ligada ✅'; }
  desligar() { this.ligada = false; return 'Desligada ⚫'; }
}

// --- NÍVEL MÉDIO (11–20) ---

// 11. Herança Animal → Cachorro
class AnimalBase {
  constructor(nome) { this.nome = nome; }
  emitirSom() { return 'Som genérico'; }
}
class Cachorro extends AnimalBase {
  emitirSom() { return 'Latido 🐕'; }
}

// 12 & 13. Funcionario → Gerente com super
class Funcionario {
  constructor(nome, salario) { this.nome = nome; this.salario = salario; }
}
class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    super(nome, salario);
    this.departamento = departamento;
  }
}

// 14. Conta + ContaPoupanca com aplicarJuros
class Conta {
  constructor(titular, saldo) { this.titular = titular; this.saldo = saldo; }
  sacar(valor) {
    if (valor > this.saldo) return 'Saldo insuficiente ❌';
    this.saldo -= valor;
    return `Saque de R$${valor} OK. Saldo: R$${this.saldo}`;
  }
  transferir(valor, contaDestino) {
    if (valor > this.saldo) return 'Saldo insuficiente ❌';
    this.saldo -= valor;
    contaDestino.saldo += valor;
    return `Transferência de R$${valor} realizada.`;
  }
}
class ContaPoupanca extends Conta {
  aplicarJuros(taxa = 0.5) {
    this.saldo += this.saldo * (taxa / 100);
    return parseFloat(this.saldo.toFixed(2));
  }
}

// 15. Veiculo → Aviao, Carro2
class Veiculo {
  constructor(modelo) { this.modelo = modelo; }
  mover() { return `${this.modelo} se movendo...`; }
}
class Aviao extends Veiculo {
  mover() { return `✈️ ${this.modelo} decolando!`; }
}
class Carro2 extends Veiculo {
  mover() { return `🚗 ${this.modelo} acelerando!`; }
}

// 16. Validação de saque já implementada na Conta acima (sacar)

// 17. Forma → Circulo, Quadrado
class Forma {
  desenhar() { return 'Desenhando forma...'; }
}
class Circulo extends Forma {
  constructor(raio) { super(); this.raio = raio; }
  desenhar() { return `⭕ Círculo com raio ${this.raio} | Área: ${(Math.PI * this.raio ** 2).toFixed(2)}`; }
}
class Quadrado extends Forma {
  constructor(lado) { super(); this.lado = lado; }
  desenhar() { return `🟦 Quadrado com lado ${this.lado} | Área: ${this.lado ** 2}`; }
}

// 18. Escola: Usuario → Professor, Aluno
class UsuarioBase {
  constructor(nome) { this.nome = nome; }
}
class Professor extends UsuarioBase {
  lancarNota(aluno, nota) { return `📋 ${this.nome} lançou nota ${nota} para ${aluno}`; }
}
class AlunoEscola extends UsuarioBase {
  entregarTrabalho(titulo) { return `📝 ${this.nome} entregou: "${titulo}"`; }
}

// 19. ItemPedido
class ItemPedido {
  constructor(produto, quantidade, preco) {
    this.produto = produto; this.quantidade = quantidade; this.preco = preco;
  }
  calcularTotal() { return this.quantidade * this.preco; }
}

// 20. CarroEletrico herda de Carro
class CarroEletrico extends Carro {
  constructor(modelo, bateria) { super(modelo); this.bateria = bateria; }
}

// --- NÍVEL DIFÍCIL (21–30) ---

// 21. Carrinho de compras
class ProdutoLoja {
  constructor(nome, preco) { this.nome = nome; this.preco = preco; }
}
class Carrinho {
  constructor() { this.itens = []; }
  adicionarProduto(p) { this.itens.push(p); }
  calcularTotal() { return this.itens.reduce((s, p) => s + p.preco, 0); }
}

// 22. Biblioteca Digital
class Biblioteca {
  constructor() { this.livros = []; }
  adicionarLivro(l) { this.livros.push(l); }
  buscarPorAutor(nome) { return this.livros.filter(l => l.autor === nome); }
}

// 23. Sistema de RPG
class Personagem {
  constructor(nome, vida, ataque) { this.nome = nome; this.vida = vida; this.ataque = ataque; }
  atacar(inimigo) {
    inimigo.vida -= this.ataque;
    return `⚔️ ${this.nome} atacou ${inimigo.nome}! Vida restante: ${inimigo.vida}`;
  }
}

// 24. Gestão de Frota
class Empresa {
  constructor(nome) { this.nome = nome; this.veiculos = []; }
  adicionarVeiculo(v) { this.veiculos.push(v); }
  precisamManutencao() { return this.veiculos.filter(v => v.precisaManutencao); }
}

// 25. Override calcularSalario
class FuncionarioSalario {
  constructor(nome, salarioBase) { this.nome = nome; this.salarioBase = salarioBase; }
  calcularSalario() { return this.salarioBase; }
}
class Vendedor extends FuncionarioSalario {
  constructor(nome, salarioBase, comissao) { super(nome, salarioBase); this.comissao = comissao; }
  calcularSalario() { return this.salarioBase + this.comissao; }
}
class Diretor extends FuncionarioSalario {
  constructor(nome, salarioBase, bonus) { super(nome, salarioBase); this.bonus = bonus; }
  calcularSalario() { return this.salarioBase + this.bonus; }
}

// 26. Transferência Bancária — já implementada na Conta acima

// 27. Agenda de Contatos
class Contato {
  constructor(nome, telefone) { this.nome = nome; this.telefone = telefone; }
}
class Agenda {
  constructor() { this.contatos = []; }
  adicionar(c) { this.contatos.push(c); }
  excluir(nome) {
    const antes = this.contatos.length;
    this.contatos = this.contatos.filter(c => c.nome !== nome);
    return this.contatos.length < antes ? `✅ ${nome} removido` : `❌ ${nome} não encontrado`;
  }
}

// 28. Estacionamento
class Estacionamento {
  constructor(limite) { this.limite = limite; this.vagas = []; }
  estacionar(veiculo) {
    if (this.vagas.length >= this.limite) return `🚫 Sem vagas!`;
    this.vagas.push(veiculo);
    return `✅ ${veiculo} estacionado. Vagas: ${this.vagas.length}/${this.limite}`;
  }
}

// 29. Playlist
class Musica {
  constructor(titulo, duracao) { this.titulo = titulo; this.duracao = duracao; }
}
class Playlist {
  constructor(nome) { this.nome = nome; this.musicas = []; }
  adicionar(m) { this.musicas.push(m); }
  ordenarPorDuracao() {
    return [...this.musicas].sort((a, b) => a.duracao - b.duracao);
  }
}

// 30. Simulador de Elevador
class Elevador {
  constructor(totalAndares, capacidade) {
    this.andarAtual = 0; this.totalAndares = totalAndares;
    this.capacidade = capacidade; this.pessoas = 0;
  }
  subir() {
    if (this.andarAtual < this.totalAndares) { this.andarAtual++; return `⬆️ Andar ${this.andarAtual}`; }
    return '⛔ Já está no último andar';
  }
  descer() {
    if (this.andarAtual > 0) { this.andarAtual--; return `⬇️ Andar ${this.andarAtual}`; }
    return '⛔ Já está no térreo';
  }
  entrar() {
    if (this.pessoas < this.capacidade) { this.pessoas++; return `🚶 Entrou. Pessoas: ${this.pessoas}/${this.capacidade}`; }
    return '🚫 Capacidade máxima!';
  }
}

// =============================================
// EXECUÇÃO DOS EXERCÍCIOS — retorna resultados
// =============================================
export function rodarExercicios() {
  const resultados = [];

  const ex = (num, nome, nivel, linhas) => resultados.push({ num, nome, nivel, linhas });

  // 1
  const l1 = new Livro('Dom Casmurro', 'Machado de Assis');
  const l2 = new Livro('O Cortiço', 'Aluísio Azevedo');
  ex(1, 'Livro', 'fácil', [`📗 Livro 1: "${l1.titulo}" por ${l1.autor}`, `📘 Livro 2: "${l2.titulo}" por ${l2.autor}`]);

  // 2
  const p = new Pessoa('Carlos');
  ex(2, 'Método de Saudação', 'fácil', [p.falar()]);

  // 3
  const r = new Retangulo(5, 3);
  ex(3, 'Calculadora de Retângulo', 'fácil', [`Largura: 5, Altura: 3 → Área: ${r.calcularArea()}`]);

  // 4
  const car = new Carro('Fusca');
  ex(4, 'Classe Carro', 'fácil', [
    `Velocidade inicial: ${car.velocidade}`,
    `Após acelerar: ${car.acelerar()} km/h`,
    `Após acelerar: ${car.acelerar()} km/h`,
  ]);

  // 5
  const prod = new Produto('Camisa', 100);
  ex(5, 'Alterando Atributos', 'fácil', [
    `Preço original: R$${prod.preco}`,
    `Após 20% de desconto: R$${prod.aplicarDesconto(20).toFixed(2)}`,
  ]);

  // 6
  const cont = new Contador();
  ex(6, 'Contador', 'fácil', [
    `Incrementar: ${cont.incrementar()}`,
    `Incrementar: ${cont.incrementar()}`,
    `Decrementar: ${cont.decrementar()}`,
  ]);

  // 7
  const temp = new Temperatura(100);
  ex(7, 'Conversor de Temperatura', 'fácil', [
    `${temp.celsius}°C = ${temp.paraFahrenheit()}°F`,
  ]);

  // 8
  const a1 = new Animal('Rex', 'cachorro');
  const a2 = new Animal('Mimi', 'gato');
  const a3 = new Animal('Piu', 'pássaro');
  ex(8, 'Instância de Animal', 'fácil', [a1, a2, a3].map(a => `🐾 ${a.nome} (${a.tipo})`));

  // 9
  const f1 = new Filme('Matrix', 1999);
  const f2 = new Filme('Barbie', 2023);
  ex(9, 'Filme', 'fácil', [
    `"${f1.titulo}" (${f1.anoLancamento}) → Mais de 10 anos? ${f1.maisde10Anos() ? 'Sim' : 'Não'}`,
    `"${f2.titulo}" (${f2.anoLancamento}) → Mais de 10 anos? ${f2.maisde10Anos() ? 'Sim' : 'Não'}`,
  ]);

  // 10
  const lamp = new Lampada();
  ex(10, 'Lâmpada', 'fácil', [lamp.ligar(), lamp.desligar(), lamp.ligar()]);

  // 11
  const dog = new Cachorro('Bolt');
  ex(11, 'Herança Animal', 'médio', [`${dog.nome} diz: ${dog.emitirSom()}`]);

  // 12 & 13
  const ger = new Gerente('Ana', 8000, 'TI');
  ex(12, 'Funcionários / Gerente', 'médio', [
    `Nome: ${ger.nome} | Salário: R$${ger.salario} | Depto: ${ger.departamento}`,
  ]);

  // 14
  const cp = new ContaPoupanca('Maria', 1000);
  ex(14, 'Sistema Bancário', 'médio', [
    `Saldo inicial: R$${cp.saldo}`,
    cp.sacar(200),
    `Juros 0.5%: saldo → R$${cp.aplicarJuros()}`,
  ]);

  // 15
  const av = new Aviao('Boeing 737');
  const c2 = new Carro2('Ferrari');
  ex(15, 'Veículos', 'médio', [av.mover(), c2.mover()]);

  // 16
  const contaV = new Conta('Pedro', 500);
  ex(16, 'Validação de Saque', 'médio', [
    contaV.sacar(200),
    contaV.sacar(1000),
  ]);

  // 17
  const cir = new Circulo(5);
  const quad = new Quadrado(4);
  ex(17, 'Geometria', 'médio', [cir.desenhar(), quad.desenhar()]);

  // 18
  const prof = new Professor('Prof. Silva');
  const alu = new AlunoEscola('João');
  ex(18, 'Escola', 'médio', [prof.lancarNota('João', 9.5), alu.entregarTrabalho('Projeto React')]);

  // 19
  const item = new ItemPedido('Notebook', 2, 3500);
  ex(19, 'Loja Virtual', 'médio', [
    `${item.quantidade}x ${item.produto} (R$${item.preco}) = R$${item.calcularTotal()}`,
  ]);

  // 20
  const elet = new CarroEletrico('Tesla Model 3', '80kWh');
  ex(20, 'Upgrade de Carro', 'médio', [
    `Modelo: ${elet.modelo} | Bateria: ${elet.bateria}`,
    `Após acelerar: ${elet.acelerar()} km/h`,
  ]);

  // 21
  const carrinho = new Carrinho();
  carrinho.adicionarProduto(new ProdutoLoja('Tênis', 299));
  carrinho.adicionarProduto(new ProdutoLoja('Meia', 29));
  carrinho.adicionarProduto(new ProdutoLoja('Boné', 59));
  ex(21, 'Carrinho de Compras', 'difícil', [
    `Itens: ${carrinho.itens.map(i => i.nome).join(', ')}`,
    `Total: R$${carrinho.calcularTotal()}`,
  ]);

  // 22
  const bib = new Biblioteca();
  bib.adicionarLivro(new Livro('Iracema', 'José de Alencar'));
  bib.adicionarLivro(new Livro('Dom Casmurro', 'Machado de Assis'));
  bib.adicionarLivro(new Livro('Memórias Póstumas', 'Machado de Assis'));
  const found = bib.buscarPorAutor('Machado de Assis');
  ex(22, 'Biblioteca Digital', 'difícil', [
    `Busca por "Machado de Assis": ${found.map(l => l.titulo).join(', ')}`,
  ]);

  // 23
  const heroi = new Personagem('Herói', 100, 20);
  const monstro = new Personagem('Monstro', 80, 15);
  ex(23, 'Sistema de RPG', 'difícil', [
    heroi.atacar(monstro),
    monstro.atacar(heroi),
    `Herói: ${heroi.vida} HP | Monstro: ${monstro.vida} HP`,
  ]);

  // 24
  const empresa = new Empresa('TransLog');
  empresa.adicionarVeiculo({ modelo: 'Caminhão A', precisaManutencao: true });
  empresa.adicionarVeiculo({ modelo: 'Van B', precisaManutencao: false });
  empresa.adicionarVeiculo({ modelo: 'Moto C', precisaManutencao: true });
  const manut = empresa.precisamManutencao();
  ex(24, 'Gestão de Frota', 'difícil', [
    `Frota: 3 veículos | Precisam manutenção: ${manut.map(v => v.modelo).join(', ')}`,
  ]);

  // 25
  const func = new FuncionarioSalario('Lucas', 3000);
  const vend = new Vendedor('Sara', 3000, 1200);
  const dir = new Diretor('Roberto', 5000, 2000);
  ex(25, 'Override calcularSalario', 'difícil', [
    `${func.nome} (Funcionário): R$${func.calcularSalario()}`,
    `${vend.nome} (Vendedor): R$${vend.calcularSalario()}`,
    `${dir.nome} (Diretor): R$${dir.calcularSalario()}`,
  ]);

  // 26
  const cA = new Conta('Alice', 2000);
  const cB = new Conta('Bruno', 500);
  ex(26, 'Transferência Bancária', 'difícil', [
    `Alice: R$${cA.saldo} | Bruno: R$${cB.saldo}`,
    cA.transferir(800, cB),
    `Alice: R$${cA.saldo} | Bruno: R$${cB.saldo}`,
  ]);

  // 27
  const agenda = new Agenda();
  agenda.adicionar(new Contato('Maria', '99999-0001'));
  agenda.adicionar(new Contato('João', '99999-0002'));
  ex(27, 'Agenda de Contatos', 'difícil', [
    `Contatos: ${agenda.contatos.map(c => c.nome).join(', ')}`,
    agenda.excluir('João'),
    `Após exclusão: ${agenda.contatos.map(c => c.nome).join(', ')}`,
    agenda.excluir('Pedro'),
  ]);

  // 28
  const est = new Estacionamento(3);
  ex(28, 'Sistema de Estacionamento', 'difícil', [
    est.estacionar('Gol'),
    est.estacionar('Civic'),
    est.estacionar('Corolla'),
    est.estacionar('Uno'),
  ]);

  // 29
  const pl = new Playlist('Favoritas');
  pl.adicionar(new Musica('Bohemian Rhapsody', 354));
  pl.adicionar(new Musica('Shape of You', 234));
  pl.adicionar(new Musica('Blinding Lights', 200));
  const ordenada = pl.ordenarPorDuracao();
  ex(29, 'Playlist', 'difícil', [
    `Ordenada por duração:`,
    ...ordenada.map(m => `  🎵 ${m.titulo} — ${m.duracao}s`),
  ]);

  // 30
  const elev = new Elevador(5, 4);
  ex(30, 'Simulador de Elevador', 'difícil', [
    elev.entrar(), elev.entrar(), elev.entrar(), elev.entrar(), elev.entrar(),
    elev.subir(), elev.subir(), elev.descer(),
    `Andar atual: ${elev.andarAtual}`,
  ]);

  return resultados;
}
