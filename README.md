# Portfólio — Max.C.Alves

Site estático moderno com **Tailwind (CDN) + CSS custom**, vídeo de fundo no *hero*, grid de projetos e modo claro/escuro.

---

## 🔧 Estrutura dos arquivos

```
/
├─ index.html        # Página principal (hero + seções + imports)
├─ style.css         # Estilos finos (cards, botões, animações)
├─ script.js         # Tema, header, menu mobile, projetos, sociais
├─ background.mp4    # (adicione) Vídeo do hero — nome deve ser exatamente este
└─ img/              # (opcional) Imagens: perfil.jpg, siteautomacao.png, etc.
```

> **Importante:** O vídeo do *hero* deve se chamar **background.mp4** e ficar na **raiz** do projeto (mesmo nível do `index.html`).

---

## 🖥️ Rodando localmente

1. Baixe/clonar este repositório.
2. Garanta que `index.html`, `style.css`, `script.js` e `background.mp4` estão no mesmo nível.
3. Dê duplo clique no `index.html` para abrir no navegador ou sirva com um servidor simples:
   - Python 3: `python -m http.server 8080` → abra http://localhost:8080

---

## 🚀 Publicando no GitHub Pages

1. Crie um repositório (pode ser `seu-usuario.github.io` **ou** um repositório normal).
2. Envie os arquivos para a **raiz** do repositório (`index.html` precisa estar na raiz).
3. Vá em **Settings → Pages** e selecione:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (ou `master`) / folder: `/ (root)`
4. Salve. Em alguns minutos, seu site estará no ar no link que o GitHub mostrar.

---

## 🌐 Domínio personalizado (opcional)

1. **Escolha o domínio** e compre em um registrador (Registro.br, Cloudflare, GoDaddy, Namecheap, etc.).
2. **Crie a zona DNS** e aponte:

### A) Usando **A records** (apontar o domínio raiz para GitHub Pages)
Crie **4** registros do tipo `A` no **domínio raiz** (ex.: `seu-dominio.com`), apontando para:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

> Esses são os IPs oficiais do GitHub Pages.

### B) Usando **CNAME** (www → seu repositório)
Crie um registro **CNAME** para o subdomínio `www` apontando para:
```
seu-usuario.github.io
```

3. **Adicione o arquivo `CNAME`** na **raiz** do projeto (dentro do repositório), contendo apenas uma linha com o seu domínio (exemplo):
```
www.seu-dominio.com
```

4. Em **Settings → Pages → Custom domain**, digite o domínio (com ou sem `www`) e **salve**.
5. Ative **Enforce HTTPS** quando o cadeado aparecer.

> Dica: se seu provedor for **Cloudflare**, habilite DNS proxied (nuvem laranja) **desligado** para o domínio no início (nuvem cinza). Depois que estiver tudo OK e com certificado, você pode reativar.

---

## 🧩 Personalização rápida

- **Texto do hero:** edite no `index.html` (seção `#hero`).
- **Links sociais:** edite a lista em `script.js` na classe `SocialLinksManager`.
- **Projetos:** edite a lista em `script.js` na classe `ProjectsManager`.
- **Cores/acabamento:** altere variáveis no `style.css` (`--paola-red`, `--paola-red-light`, etc.).
- **Imagem de perfil:** coloque `img/perfil.jpg` (ou mantenha o fallback do Unsplash).

---

## 🧪 Checklist antes do deploy

- [ ] `background.mp4` está na raiz e carrega no navegador?
- [ ] `index.html` referencia `style.css` e `script.js` corretamente?
- [ ] Links do GitHub/LinkedIn estão corretos em `script.js`?
- [ ] Imagens do grid de projetos existem (ou o `fallbackImage` funciona)?
- [ ] O *menu mobile* abre/fecha? O botão “voltar ao topo” aparece após rolar?

---

## 🛠️ Solução de problemas

- **Página branca:** veja o Console do navegador (F12) → *Errors*. Verifique caminhos.
- **Vídeo não aparece:** nome do arquivo precisa ser `background.mp4`. Alguns navegadores bloqueiam autoplay com som — aqui está **muted**, então funciona.
- **Domínio sem HTTPS:** aguarde até o GitHub emitir certificado após configurar o domínio e habilitar `Enforce HTTPS`.
- **DNS não propagou:** pode levar de minutos a 24h. Confirme os registros com `nslookup` ou usando `whatsmydns.net`.

---

## 📦 Atualizações contínuas

- Para mudar conteúdo, edite e faça `git push` na branch configurada.
- Commits em `main` (ou a branch selecionada) disparam um novo deploy do Pages.

---

## 📜 Licença

Este projeto é seu. Use, modifique e distribua como quiser.
