// RF03 - Interface que mapeia a estrutura exata (bruta) que vem da PokeAPI
// Tipamos apenas as propriedades que o projeto exige consumir.
export interface PokemonApiResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
}

// RF02 - Interface para o Pokémon formatado e simplificado (Lite) que usaremos no catálogo
export interface PokemonResumo {
  id: number;
  nome: string;
  tipos: string[]; // Aqui guardaremos apenas os nomes dos tipos num array de strings simples (ex: ['electric'])
  altura: number;
  peso: number;
}
