import { buscarPokemon } from './pokeApi.js';
import { CatalogoPokemon } from './catalogo.js';

async function main() {
  console.log('======= INICIANDO TESTES DA POKÉDEX =======\n');
  
  // Instanciando a classe do catálogo (POO - Encapsulamento)
  const meuCatalogo = new CatalogoPokemon();

  // -------------------------------------------------------------------------
  // TESTE 1: Tentar listar o catálogo logo após a inicialização (deve estar vazio)
  // -------------------------------------------------------------------------
  console.log('--- TESTE 1: Listagem com Catálogo Vazio ---');
  meuCatalogo.listar();
  console.log('\n');

  // -------------------------------------------------------------------------
  // TESTE 2: Buscar e adicionar Pokémon válidos diretamente da PokeAPI externa
  // -------------------------------------------------------------------------
  console.log('--- TESTE 2: Busca e Inserção de Pokémon Válidos ---');
  try {
    // Buscando o Pikachu pelo nome
    const pikachu = await buscarPokemon('pikachu');
    meuCatalogo.adicionar(pikachu);

    // Buscando o Bulbasaur pelo ID (1)
    const bulbasaur = await buscarPokemon('1');
    meuCatalogo.adicionar(bulbasaur);
  } catch (erro: any) {
    console.log(`[ERRO INESPERADO]: ${erro.message}`);
  }
  console.log('\n');

  // -------------------------------------------------------------------------
  // TESTE 3: Validar a listagem com os Pokémon adicionados com sucesso
  // -------------------------------------------------------------------------
  console.log('--- TESTE 3: Listagem com Itens no Catálogo ---');
  meuCatalogo.listar();
  console.log('\n');

  // -------------------------------------------------------------------------
  // TESTE 4: Tentar adicionar um Pokémon duplicado para testar a trava de ID
  // -------------------------------------------------------------------------
  console.log('--- TESTE 4: Impedimento de Duplicidade ---');
  try {
    const pikachuDuplicado = await buscarPokemon('pikachu');
    meuCatalogo.adicionar(pikachuDuplicado);
  } catch (erro: any) {
    console.log(`[ERRO]: ${erro.message}`);
  }
  console.log('\n');

  // -------------------------------------------------------------------------
  // TESTE 5: Buscar um Pokémon que não existe para validar o tratamento do 404
  // -------------------------------------------------------------------------
  console.log('--- TESTE 5: Tratamento de Pokémon Inexistente ---');
  try {
    await buscarPokemon('pokemon-inexistente');
  } catch (erro: any) {
    console.log(`[ERRO] ${erro.message}`);
  }
  console.log('\n');

  // -------------------------------------------------------------------------
  // TESTE 6: Remover um Pokémon por ID e tentar listar novamente
  // -------------------------------------------------------------------------
  console.log('--- TESTE 6: Remoção de Pokémon do Catálogo ---');
  meuCatalogo.remover(1); // Remove o Bulbasaur (ID 1)
  
  console.log('\n--- Status Atual do Catálogo Após Remoção ---');
  meuCatalogo.listar();

  // -------------------------------------------------------------------------
  // TESTE 7: Tentar remover um ID que não está no catálogo para testar a validação
  // -------------------------------------------------------------------------
  console.log('\n--- TESTE 7: Tentativa de Remoção Inválida ---');
  meuCatalogo.remover(999);

  console.log('\n================ TESTES CONCLUÍDOS ================');
}

main();