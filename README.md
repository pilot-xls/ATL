# ATL Extractor V1.4

Versão com:

1. Foto.
2. Ajuste dos quatro cantos da folha.
3. Rectificação de perspectiva.
4. Rectângulos OCR arrastáveis com o dedo.
5. Posições guardadas no dispositivo.
6. OCR por template.
7. Tabela editável.
8. JSON final.

## Como usar

1. Carrega/tira foto.
2. Arrasta os quatro pontos amarelos para os cantos da folha.
3. Carrega em `Rectificar folha`.
4. Arrasta os rectângulos azuis/verdes para cima dos campos certos.
5. Opcional: toca num rectângulo e usa `Mais larga`, `Menos larga`, `Mais alta`, `Menos alta`.
6. Carrega em `Guardar posições`.
7. Carrega em `Extrair tudo`.
8. Corrige a tabela.
9. Gera o JSON.

## Publicar no GitHub Pages

Coloca os ficheiros na raiz do repositório:

```text
index.html
manifest.json
sw.js
README.md
icons/
  icon-192.svg
  icon-512.svg
```

Depois:

```text
Settings → Pages → Deploy from a branch → main → /root
```

## Notas

- As posições dos rectângulos ficam guardadas no `localStorage` do dispositivo.
- Se apagares dados do browser, as posições voltam ao padrão.
- A confirmação manual continua a ser obrigatória.
- Esta versão ainda não envia para a API LEON.
