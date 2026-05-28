# ATL Extractor V1

PWA simples para:

1. Tirar/carregar fotografia do Aircraft Technical Log.
2. Fazer OCR gratuito no browser com Tesseract.js.
3. Tentar extrair:
   - technical_log_serial_number
   - station_departure
   - station_arrival
   - off_blk
   - A.T.D
   - A.T.A
   - on_blk
   - pax
   - trans
   - delay_code
   - refuel
   - depart
   - arrival
4. Mostrar tabela editável.
5. Confirmar e gerar JSON.

## Como testar localmente

Abre a pasta do projecto e corre um servidor local.

Com Python:

```bash
# Entra na pasta do projecto.
cd atl-pwa-v1

# Inicia um servidor local simples na porta 8000.
python3 -m http.server 8000
```

Depois abre:

```text
http://localhost:8000
```

## Como publicar no GitHub Pages

1. Cria um repositório no GitHub.
2. Envia estes ficheiros para o repositório.
3. Vai a **Settings → Pages**.
4. Em **Build and deployment**, escolhe:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Abre o URL gerado pelo GitHub Pages.

## Limitações desta V1

- O OCR gratuito pode falhar em escrita manual.
- A tabela é preenchida por heurísticas simples.
- A confirmação humana é obrigatória.
- Ainda não envia para a API LEON.
- A próxima versão deve usar zonas fixas da folha para melhorar a extracção.
