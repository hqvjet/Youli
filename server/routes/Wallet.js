const express = require('express')
const walletRouter = express.Router()
const controller = require('../controllers/walletController')

walletRouter.post('/inf', controller.getInf)
walletRouter.post('/update', controller.updateBudget)
walletRouter.post('/categories', controller.getCategories)
walletRouter.post('/item/submit', controller.saveBill)
walletRouter.post('/bill', controller.getBills)
walletRouter.post('/category/add', controller.createCustomCategory)

module.exports = walletRouter
