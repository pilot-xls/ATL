# ATL Extractor V1.1

Esta versão substitui a tentativa de ler a folha inteira por um modo mais prático:

- Carregar/tirar fotografia.
- Seleccionar uma zona pequena da imagem.
- Escolher o campo a preencher.
- Fazer OCR só nessa zona.
- Confirmar na tabela editável.
- Gerar JSON.

## Porque esta versão existe

A V1 lia a folha inteira e isso gerava muitos erros devido a:

- escrita manual;
- sombras;
- grelha da folha;
- campos pequenos;
- texto impresso a misturar-se com valores manuscritos.

A V1.1 permite recortar visualmente apenas a célula pretendida antes de fazer OCR.

## Como publicar no GitHub Pages

A estrutura deve ficar na raiz do repositório:

```text
index.html
manifest.json
sw.js
README.md
icons/
  icon-192.svg
  icon-512.svg
```

No GitHub:

1. Abre o repositório.
2. Vai a **Settings**.
3. Entra em **Pages**.
4. Escolhe **Deploy from a branch**.
5. Escolhe branch `main`.
6. Escolhe pasta `/root`.

## Como usar

1. Abre a app no telemóvel.
2. Tira/carrega foto da folha.
3. Escolhe o campo destino, por exemplo `Leg 1 · A.T.D`.
4. Arrasta um rectângulo sobre a célula correspondente na imagem.
5. Carrega em **OCR da selecção**.
6. Confirma/corrige a tabela.
7. Carrega em **Confirmar e gerar JSON**.

## Limitações

- Continua a usar OCR gratuito no browser.
- Não é fiável para envio automático sem confirmação humana.
- Ainda não envia para a API LEON.
- A próxima versão pode ter grelha fixa por template para automatizar mais.
