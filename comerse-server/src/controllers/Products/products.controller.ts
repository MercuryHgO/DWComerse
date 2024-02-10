import {Product as ProductDatabaseType} from "@prisma/client";
import UserModel from "../../models/user/user.model.js";
import {AdminModel} from "../../models/user/admin.model.js";
import {
	ProductDelete,
	ProductGet,
	ProductPatch,
	ProductPost,
	ProductsModel
} from "../../models/products/products.model.js";

export class ProductsController {
	private User: UserModel = new UserModel()
	private Admin: AdminModel = new AdminModel()
	
	private Products: ProductsModel = new ProductsModel()
	
	async getProducts(options: ProductGet): Promise<ProductDatabaseType[]> {
		this.Products.get(options)
		
		const data = await this.Products.execute()
		
		return data[0]
	}
	
	async getProductsInfo() {
		this.Products.getInfo()
		
		const data = await this.Products.execute()
		
		return {
			categories: data[0],
			count: data[1]
		}
	}
	
	async createProducts(products: ProductPost[],adminToken: string): Promise<ProductDatabaseType[]> {
		await this.Admin.getAuthorizationMethods().verifyAccess(adminToken)
		
		products.forEach(
			product => this.Products.post(product)
		)

		return await this.Products.execute()
	}
	
	async patchProducts(products: ProductPatch[], adminToken: string): Promise<ProductDatabaseType[]> {
		await this.Admin.getAuthorizationMethods().verifyAccess(adminToken)
		
		products.forEach(
			product => this.Products.patch(product)
		)
		
		return await this.Products.execute()
	}
	
	async deleteProducts(products: ProductDelete[], adminToken: string): Promise<any> {
		await this.Admin.getAuthorizationMethods().verifyAccess(adminToken)
		
		products.forEach(
			product => this.Products.delete(product)
		)
		
		return await this.Products.execute()
	}
}