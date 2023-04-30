import fsPromises from 'fs/promises';
import path from 'path'

interface IPlant{
    id:string,
    name:string,
    price:number,
    description:string,
    img:string
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), './src/mock/plant.json');
    const jsonData = await fsPromises.readFile(filePath,'utf-8');
    const plants:IPlant[] = JSON.parse(jsonData);
    return {
      props:{
        plants
      }
    }
  
}