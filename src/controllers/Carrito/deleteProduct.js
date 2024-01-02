const deleteProductHandler = require('../../handlers/Carrito/deleteProduct');

const deleteProduct = async (req, res) => {
    try {
      const { shoppingId, productId } = req.body;
  
      const result = await deleteProductHandler(shoppingId, productId);
  
      if (result.message) {
        return res.status(400).json({ error: result.message });
      }
  
      return res.status(200).json(result.updatedCart);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = deleteProduct;