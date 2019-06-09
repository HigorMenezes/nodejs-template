# Nodejs Template

## dotenv template

Possui 4 arquivos para manipular as variavies de ambiente: 

- .env

```dotenv
NODE_ENV='production' || 'development' || 'test'
```

- .env.{ambiente}

```dotenv
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
DB_DIALECT=
DB_STORAGE=

APP_PORT=
APP_SECRET=
```

## Status de retorno - [<https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status>]

**200 - OK**

 Estas requisição foi bem sucedida

**201 - Created**

 A requisição foi bem sucessida e um novo recurso foi criado como resultado.

**304 - Not modified**

 Essa resposta é usada para questões de cache. Diz ao cliente que a resposta não foi modificada. Portanto, o cliente pode usar a mesma versão em cache da resposta.

**400 - Bad Request**

 Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

**401 - Unauthorized**

 Embora o padrão HTTP especifique "unauthorized", semanticamente, essa resposta significa "unauthenticated". Ou seja, o cliente deve se autenticar para obter a resposta solicitada.

**403 - Forbidden**

 O cliente não tem direitos de acesso ao conteúdo portanto o servidor está rejeitando dar a resposta. Diferente do código 401, aqui a identidade do cliente é conhecida.

**404 - Not Found**

 O servidor não pode encontrar o recurso solicitado. Este código de resposta talvez seja o mais famoso devido à frequência com que acontece na web.

**409 - Conflict**

 Esta resposta será enviada quando uma requisição conflitar com o estado corrente do servidor.

**410 - Gone**

 Esta resposta será enviada quando o conteúdo requisitado foi deletado do servidor.

**500 - Internal Sever Error**

 O servidor encontrou uma situação com a qual não sabe lidar.
