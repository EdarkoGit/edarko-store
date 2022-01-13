module.exports = {
  createImages: async function (model, imgs) {
    const intancesImage = [];
    for (let i = 0; i < imgs.length; i++) {
      const [img] = await model.findOrCreate({
        where: { url: imgs[i] },
      });
      intancesImage.push(img);
    }
    return intancesImage;
  },
};
