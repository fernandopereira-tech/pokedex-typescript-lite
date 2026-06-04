import type { PokemonResumo } from './types.js';

export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];


  public adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some(p => p.id === pokemon.id);

    if (jaExiste) {
      console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
      return;
    }

    this.pokemons.push(pokemon);
    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo com sucesso!`);
  }

  public listar(): void {
    if (this.pokemons.length === 0) {
      console.log('[AVISO] O catálogo está vazio.');
      return;
    }

    console.log('\n--- C AT Á L O G O   P O K É D E X ---');
    this.pokemons.forEach(pokemon => {
      console.log(`ID: ${pokemon.id} | Nome: ${pokemon.nome}`);
      console.log(`Tipos: ${pokemon.tipos.join(', ')}`);
      console.log(`Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`);
      console.log('-------------------------------------');
    });
  }

  public remover(id: number): void {
    const index = this.pokemons.findIndex(p => p.id === id);

    if (index === -1) {
      console.log(`[ERRO] Pokémon com ID ${id} não encontrado no catálogo.`);
      return;
    }

    this.pokemons.splice(index, 1);
    console.log('[OK] Pokémon removido do catálogo.');
  }
}