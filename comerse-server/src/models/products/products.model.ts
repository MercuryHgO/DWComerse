import {databaseEndpointsModel} from "../databaseEndpoints/databaseEndpoints.model.js";
import prisma from "../helpers/prisma.js";
import {Product} from "@prisma/client";

// TODO СУКА ЗАРЕФАКТОРИ ЭТО ЕБАНОЕ ДЕРЬМО

export type ProductGet = Partial<Product> &
	{
		take?: number,
		skip?: number,
	}
export type ProductPost = Omit<Product, 'id'>
export type ProductPatch = Pick<Product,'id'> & Partial<Omit<Product,'id'>>
export type ProductDelete = Pick<Product, 'id'>

export class ProductsModel extends databaseEndpointsModel {
	getInfo(): void {
		 this.requestsStack.push(
			 prisma.product.findMany({
				distinct: 'category',
				select: {
					category: true,
				}
			 })
		 )
		
		this.requestsStack.push(
			prisma.product.count()
		)
		
		return
	}
	
	get(data: ProductGet): void {
		if(data.id === "*") {
			const request = prisma.product.findMany({
				take: data.take,
				skip: data.skip
			})
			
			this.requestsStack.push(request)
			
			return
		}
		
		const request = prisma.product.findMany({
			where: {
				OR: [
					{ id: data.id },
					{ name: data.name },
					{ price: data.price },
					{ info: data.info },
					{ category: data.category }
				]
			}
		})
		
		this.requestsStack.push(request)
	}
	
	post(data: ProductPost): void {
		const request = prisma.product.create({data: data})
		
		this.requestsStack.push(request)
	}
	
	patch(data: ProductPatch): void {
		const request = prisma.product.update({
			where: {
				id: data.id
			},
			data: data
		})
		
		this.requestsStack.push(request)
	}
	
	delete(data: ProductDelete): void {
		const request = prisma.product.delete({
			where: {
				id: data.id
			}
		})

    this.requestsStack.push(request)
	}
}
