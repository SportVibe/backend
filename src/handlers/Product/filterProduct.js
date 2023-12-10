const { Op } = require("sequelize");

const filterProduct = async ({ gender, subCategory, category, minPrice, maxPrice, price, Sizes, id }) => {
  try {
    const filter = {};
    filter.gender = gender || { [Op.not]: null };
    filter.subCategory = subCategory || { [Op.not]: null };
    filter.category = category || { [Op.not]: null };
    filter.id = id || { [Op.not]: null };
    //filter.Sizes = Sizes || { [Op.not]: null };
    if (minPrice && maxPrice && !isNaN(minPrice) && !isNaN(maxPrice)) {
      filter.price = {
        [Op.between]: [parseFloat(minPrice), parseFloat(maxPrice)],
      };
    }
    return filter;
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = filterProduct;
