export interface InvoiceItem {
    name: string,
    price: number,
    type: ItemType
}

export enum ItemType {
    Product = "Product",
    Service = "Service"
}