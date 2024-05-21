import { Router } from "express";
// import { getproductos, getCategoriaById, createCategoria, updateCategoria, deleteCategoria }
import { getProductos, getProductoById, createProducto, updateProducto, deleteProducto, getProductoByCategoria } from "../controllers/indexProducto.controller.js";

const productosRouter = Router();

productosRouter.get("/productos", getProductos);
productosRouter.get("/productos/:id", getProductoById);
productosRouter.get("/productosC/:id", getProductoByCategoria);
productosRouter.post("/productos", createProducto);
productosRouter.put("/productos/:id", updateProducto);
productosRouter.delete("/productos/:id", deleteProducto);

export default productosRouter;