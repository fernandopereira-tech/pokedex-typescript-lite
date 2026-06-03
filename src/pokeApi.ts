import type { PokemonApiResponse, PokemonResumo } from './types.js';

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo> {

    const termoBusca = nomeOuId.trim().toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${termoBusca}`;

    try {
        const resposta = await fetch(url);


        if (resposta.status === 404) {
            throw new Error('Pokémon não encontrado.');
        }


        if (!resposta.ok) {
            throw new Error('Erro ao conectar com a API.');
        }


        const dados: PokemonApiResponse = await resposta.json();


        const pokemonFormatado: PokemonResumo = {
            id: dados.id,
            nome: dados.name,
            altura: dados.height,
            peso: dados.weight,
            tipos: dados.types.map(item => item.type.name)
        };

        return pokemonFormatado;

    } catch (erro: any) {
        throw erro;
    }
}