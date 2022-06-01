/*
quando clicar no pokemobn listagem temos que esconder o cartao do pokemon aberto e mostrar o cartao corresppondente ao que foi selecionado da listagem


para isso vamos precisar trabalhar com dois elementos -listagem 
-cartao do pokemon

precisamos criar duas variaveis no js para trabalhar com os elementos na tela

vamos precisar trabalhar com um eventyo clique feito pelo usuario na listagem de pokemons

- remover a classe aberto só do cartão que esta aberto
-ao clicar em um pokemno da listagem pegamos o id do pokemon para saber qual cartao mostrar
-remover a classe ativo que marca o pokemon selecionado
-adiconar a classe ativo no item da lista selecionado

*/

/*precisamos criar duas variaveis no js para trabalhar com a tela */

const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCaeds = document.querySelectorAll('.cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click',() => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')
       
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir= 'cartao-' + idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    } )


})
