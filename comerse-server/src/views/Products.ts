import {Router} from "express";
import bodyParser from "body-parser";
import {ProductsController} from "../controllers/Products/products.controller.js";

const router: Router = Router()

router.use(bodyParser.json())

router.get("/search",
	async (req, res, next) => {
		try {
			const {name, price, category}: { name?: string, price?: number, category?: string } = req.query
			
			if (!name && !price && !category) {
				res.sendStatus(400)
				return
			}
			
			const Products: ProductsController = new ProductsController()
			
			const product = await Products.getProducts({name: name, price: price, category: category})
			
			!!product[0] ? res.send(product) : res.status(404).send('No product found')
			
			return
		} catch (e) {
			next(e)
		}
	}
)

router.get("/info",async (req, res, next) => {
	try {
		const Products: ProductsController = new ProductsController()
		
		const info = await Products.getProductsInfo()
		
		res.send(info)
	} catch (e) {
		next(e)
	}
})

router.get("/",
	async (req, res, next) => {
		try {
			const Products: ProductsController = new ProductsController()
			
			const {page}: {page?: number} = req.query
			
			const product = await Products.getProducts(
				{
					id: "*",
					skip: page ? page * 20 : 0,
					take: 20
				}
			)
			
			!!product[0] ? res.send(product) : res.status(404).send('No product found')
			
			return
		} catch (e) {
			next(e)
		}
	}
)

router.get("/:id",
	async (req, res, next) => {
		try {
			const Products: ProductsController = new ProductsController()
			
			const product = await Products.getProducts(
				{
					id: req.params.id,
				}
			)
			
			!!product[0] ? res.send(product[0]) : res.status(404).send('No product found')
			
			return
		} catch (e) {
			next(e)
		}
	}
)

router.post("/",
	async (req, res, next) => {
		try {
			const Access = req.get('AccessToken')
			
			const data: {
				name: string,
				price: number,
				info: string,
				category: string
			}[] = req.body
			
			const Products: ProductsController = new ProductsController()
			
			const products = await Products.createProducts(data, Access)
			
			res.send(products)
			
			return
		} catch (e) {
			next(e)
		}
	}
)

router.patch("/",
	async (req, res, next) => {
		try {
			const Access = req.get('AccessToken')
			
			const data: {
				id: string,
				name?: string,
				price?: number,
				info?: string,
				category?: string
			}[] = req.body
			
			const Products: ProductsController = new ProductsController()
			
			const products = await Products.patchProducts(data, Access)
			
			res.send(products)
			
			return
		} catch (e) {
			next(e)
		}
	}
)

router.delete("/",
	async (req, res, next) => {
		try {
			const Access = req.get('AccessToken')
			
			const data: {
				id: string
			}[] = req.body
			
			const Products: ProductsController = new ProductsController()
			
			const products = await Products.deleteProducts(data, Access)
			
			res.send(products)
			
			return
		} catch (e) {
			next(e)
		}
	}
)

export default router