import express from "express"

import itemsRouter from "./items.router.js"
import productRouter from "./product.router.js"
import categoriesRouter from "./category.router.js"
import userRouter from "./user.router.js"
import fileRouter from "./files.router.js"
import tasksRouter from "./tasks.router.js"
import meRouter from './me.router.js'

export const routerApi = (app) => {
  const router = express.Router()

  app.use("/api/v1", router)

  router.use('/me', meRouter)
  router.use('/categories', categoriesRouter)
  router.use('/items', itemsRouter)
  router.use('/products', productRouter)
  router.use('/user', userRouter)
  router.use('/files', fileRouter)
  router.use('/tasks', tasksRouter)

}
