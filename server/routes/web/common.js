module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')
  const Category = mongoose.model('Category')
  const Strategy = mongoose.model('Strategy')

  app.use('/web/api', router)

  router.get('/heros', async (req, res) => {
    const parent = await Category.findOne({ name: '英雄列表' })
    const cates = await Category.aggregate([
      { $match: { parent: parent._id } },
      {
        $lookup: {
          from: 'heros',
          localField: '_id',
          foreignField: 'cate',
          as: 'hero_list'
        }
      }
    ])
    res.send(cates)
  })
}