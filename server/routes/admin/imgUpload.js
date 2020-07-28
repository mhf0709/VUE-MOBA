module.exports = (app, multer) => {
  const express = require('express')
  const router = express.Router()

  const auth = require('../../middlleware/validateMiddleWear')
  const access = require('../../middlleware/access')
  const MAO = require('multer-aliyun-oss');

  app.use('/admin/api/upload', auth(app), access(app), router)

  //物品图片上传
  const item = multer({ 
    // dest: __dirname + '/../../uploads/items' 
    storage: MAO({
      config: {
          region: 'oss-cn-hangzhou',
          accessKeyId: 'LTAI4FzUdtykeimxbLHAc4UF',
          accessKeySecret: 'RWGNx2LNZG84OrczyJJPgNMP8SPXFY',
          bucket: 'node-moba-wzry'
      }
  })
  })
  router.post('/item', item.single('file'), async (req, res) => {
    const file = req.file
    //file.url = `http://mhf0709.xyz/uploads/items/${file.filename}`
    // file.url = `http://localhost:3000/uploads/items/${file.filename}`
    res.send(file)
  })

  // 英雄头像上传
  const hero = multer({
     //dest: __dirname + '/../../uploads/heros' 
     storage: MAO({
      config: {
          region: 'oss-cn-hangzhou',
          accessKeyId: 'LTAI4FzUdtykeimxbLHAc4UF',
          accessKeySecret: 'RWGNx2LNZG84OrczyJJPgNMP8SPXFY',
          bucket: 'node-moba-wzry'
      }
  })
    })
  router.post('/hero', hero.single('file'), async (req, res) => {
    const file = req.file
    //file.url = `http://mhf0709.xyz/uploads/heros/${file.filename}`
    // file.url = `http://localhost:3000/uploads/heros/${file.filename}`
    res.send(file)
  })

  // 技能图标上传
  const skill = multer({ 
    //dest: __dirname + '/../../uploads/skills'
    storage: MAO({
      config: {
          region: 'oss-cn-hangzhou',
          accessKeyId: 'LTAI4FzUdtykeimxbLHAc4UF',
          accessKeySecret: 'RWGNx2LNZG84OrczyJJPgNMP8SPXFY',
          bucket: 'node-moba-wzry'
      }
  }) 
  })
  router.post('/skill', skill.single('file'), async (req, res) => {
    const file = req.file
    //file.url = `http://mhf0709.xyz/uploads/skills/${file.filename}`
    // file.url = `http://localhost:3000/uploads/skills/${file.filename}`
    res.send(file)
  })

   // 皮肤上传
   const skin = multer({ 
     //dest: __dirname + '/../../uploads/skins' 
     storage: MAO({
      config: {
          region: 'oss-cn-hangzhou',
          accessKeyId: 'LTAI4FzUdtykeimxbLHAc4UF',
          accessKeySecret: 'RWGNx2LNZG84OrczyJJPgNMP8SPXFY',
          bucket: 'node-moba-wzry'
      }
  })
    })
   router.post('/skin', skin.single('file'), async (req, res) => {
     const file = req.file
     //file.url = `http://mhf0709.xyz/uploads/skins/${file.filename}`
    //  file.url = `http://localhost:3000/uploads/skins/${file.filename}`
     res.send(file)
   })
   // 视频上传
   const introduction = multer({ dest: __dirname + '/../../uploads/introductions' })
   router.post('/introduction', introduction.single('file'), async (req, res) => {
     const file = req.file
     file.url = `http://mhf0709.xyz/uploads/introductions/${file.filename}`
    //  file.url = `http://localhost:3000/uploads/introductions/${file.filename}`
     res.send(file)
   })

  // 文章图片上传
  const article = multer({ 
   // dest: __dirname + '/../../uploads/articles'
    storage: MAO({
      config: {
          region: 'oss-cn-hangzhou',
          accessKeyId: 'LTAI4FzUdtykeimxbLHAc4UF',
          accessKeySecret: 'RWGNx2LNZG84OrczyJJPgNMP8SPXFY',
          bucket: 'node-moba-wzry'
      }
  }) 
  })
  router.post('/article', article.single('file'), async (req, res) => {
    const file = req.file
    //file.url = `http://mhf0709.xyz/uploads/articles/${file.filename}`
    // file.url = `http://localhost:3000/uploads/articles/${file.filename}`
    res.send(file)
  })

  // 广告位图片上传
  const ad = multer({ 
    //dest: __dirname + '/../../uploads/ads'
    storage: MAO({
      config: {
          region: 'oss-cn-hangzhou',
          accessKeyId: 'LTAI4FzUdtykeimxbLHAc4UF',
          accessKeySecret: 'RWGNx2LNZG84OrczyJJPgNMP8SPXFY',
          bucket: 'node-moba-wzry'
      }
  })
   })
  router.post('/ad', ad.single('file'), async (req, res) => {
    const file = req.file
    //file.url = `http://mhf0709.xyz/uploads/ads/${file.filename}`
    // file.url = `http://localhost:3000/uploads/ads/${file.filename}`
    res.send(file)
  })
}