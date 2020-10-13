import { addBrand } from "./api/brand"

const addTestData = async () => {
  await addBrand({ name: 'nike', website: 'nike.com' })
  await addBrand({ name: 'adidas', website: 'nike.com.au' })
}

export default addTestData