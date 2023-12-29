const { ShoppingCart, Cart_Product } = require("../../db");
const { Op } = require("sequelize");

const deleteProducts = async (productIds) => {
  try {
    // Obtener userId de donde sea que esté almacenado en tu aplicación
    const userId = req.userId; 

    const cartUser = await ShoppingCart.findOne({
      where: { UserId: userId },
    });

    if (!cartUser) {
      throw new Error("No se encontró el carrito para el usuario");
    }

    const deleted = await Cart_Product.destroy({
      where: {
        [Op.and]: [
          { ShoppingCartId: cartUser.id },
          { ProductId: { [Op.in]: productIds } }, // Elimina varios productos usando el operador IN
        ],
      },
    });

    if (deleted === 0) {
      return "Ninguno de los productos encontrados en el carrito";
    }

    // Actualizar el carrito si se eliminaron productos
    await updateCartOnMultipleProductDelete(cartUser.id, productIds);

    return "Productos eliminados";
  } catch (error) {
    return error.message;
  }
};

const updateCartOnMultipleProductDelete = async (cartId, productIds) => {
  try {
    for (const productId of productIds) {
      const productInCart = await Cart_Product.findOne({
        where: {
          [Op.and]: [{ ShoppingCartId: cartId }, { ProductId: productId }],
        },
      });

      if (!productInCart) {
        throw new Error(`El producto con ID ${productId} no está en el carrito`);
      }

      // Eliminar y actualizar el subtotal y cantidad
      await Cart_Product.update(
        {
          cantidad: 0,
          subtotal: 0,
        },
        {
          where: {
            [Op.and]: [{ ShoppingCartId: cartId }, { ProductId: productId }],
          },
        }
      );
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = deleteProducts;
