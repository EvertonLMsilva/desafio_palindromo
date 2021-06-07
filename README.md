# Desafio palíndromo.
    - Neste desafio, foi sugerido as seguintes regras.

# DESAFIO:
    - Essa ano tivemos a data 12/02/2021 e essa data (em formato brasileiro) pode ser lida da mesma forma de trás para frente.
      Palíndromo é o nome dado às palavras que possuem essa característica.

    - Criar uma API Serverless que nos retorne a próxima data que será considerada um palíndromo.

# Dicas:
    - Utilize a linguagem de programação ou plataforma cloud que preferir (só pedimos que seja serverless).
    - Que tal receber algum parâmetro? Escolha um parâmetro que faça sentido e incremente a funcionalidade desse endpoint.
    - Toda API merece uma documentação.
    - Foque na facilidade de leitura do seu código fonte e na performance.
 
# Diferenciais:
    - Testes unitários;
    - Programação Funcional;
    - Infraestrutura como código. 

--------------------------------------------------------------------------------

# Uso da api:
    - URL: https://3l7dtvpji0.execute-api.sa-east-1.amazonaws.com/qa/date
    - METHOD: POST
    - BODY: JSON
# BODY
    - Formato json com key ("ano") e value ("dd/mm/yyyy").
    - Exemplo:
        {"ano": "12/02/2021"}

# ERROS
    - A falta da key "ano", retorno erro 404
    - Parametros no formato diferente de "DD/MM/YYYY", retorna erro 404.

----------------------------------------------------------------------------------

# Comandos para dev
    - npm run dev
        - Emula um provider offline.
    - npm run test
        -Roda os testes unitários.