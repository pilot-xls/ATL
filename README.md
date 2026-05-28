# ATL Extractor V1.3

Versão com modo scanner:

1. Tira ou carrega uma fotografia.
2. Arrasta os quatro cantos para as margens da folha.
3. Rectifica a perspectiva.
4. Aplica OCR por template fixo.
5. Confirma a tabela editável.
6. Gera JSON.

## Publicação no GitHub Pages

Coloca estes ficheiros na raiz do repositório:

```text
index.html
manifest.json
sw.js
README.md
icons/
  icon-192.svg
  icon-512.svg
```

Depois activa:

```text
Settings → Pages → Deploy from a branch → main → /root
```

## Notas

- A rectificação é feita no browser, sem servidor.
- O OCR continua a ser gratuito com Tesseract.js.
- A confirmação humana continua a ser obrigatória.
- Esta versão ainda não envia para a API LEON.
- O próximo passo é afinar as coordenadas do template com 10 a 20 folhas reais.
