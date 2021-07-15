SELECT      pedidos.id_pedido,
            pedidos.quatidade,
            produtos.id_produto,
            produtos.nome,
            produto.preco
FROM        pedidos 
INNER JOIN  produtos 
ON          produtos.id_produto = pedidos.id_produto;