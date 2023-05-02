import fsPromises from 'fs/promises';
import path from 'path'
import { IPlant } from '@/types';

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