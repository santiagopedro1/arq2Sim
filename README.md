# Simulador de Pipeline

Um simulador visual de pipeline para a disciplina de Arquitetura de Computadores 2.

## Hospedagem

O simulador está hospedado no endereco: https://arq2-sim.vercel.app/

## Como usar

Abra a aba de configuração e adicione as instruções para a simulação. Após isso, clique em rodar. O simulador irá executar as instruções e é possível avançar e retroceder entre os ciclos de clock pelos botões de navegação(Prev e Next).

## Como rodar localmente

Para rodar o simulador localmente, é necessário ter o NodeJS instalado. Após isso, execute os seguintes comandos:

```bash
npm install
npm run dev
```

## Limitações

1. ~~O simulador ainda não lida com conflitos de dados;~~
2. ~~O simulador só permite instruções aritméticas;~~
3. O simulador não possui uma maneira de adicionar instruções por texto.

## TODOs

-   [ ] Resolver as limitações;
    -   [x] 1;
    -   [x] 2;
    -   [ ] 3;
-   [x] Melhorar a interface;
-   [x] Editar as instruções sem precisar resetar as instruções;
-   [ ] Melhorar o estilo MIPS na simulação;
