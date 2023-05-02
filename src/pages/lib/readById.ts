import fsPromises from 'fs/promises';
import { GetStaticProps,GetStaticPaths, GetStaticPropsContext } from 'next';
import path from 'path'
import { ParsedUrlQuery } from 'querystring';
import { IPlant } from '@/types';
interface IParams extends ParsedUrlQuery{
    plantslug:string
}

const getStaticPaths:GetStaticPaths = async () => {
    const paths:any[] = []

    for (let index = 1; index <=10; index++) {
        paths.push('/plants/'+index)
    }

    return{
        paths,fallback:true
    }
}

const getStaticProps:GetStaticProps =  async (context)=> {
    const filePath = path.join(process.cwd(), './src/mock/plant.json');
    const jsonData = await fsPromises.readFile(filePath,'utf-8');
    const plants:IPlant[] = JSON.parse(jsonData);
    const {plantslug} = context.params as IParams
    const plant = plants.find(item=>{
        return item.id === plantslug
    })
    if(!plant){
        return {
            notFound:true
        }
    }
    return {
      props:{
        plant
      }
    }
  
}


export {
    getStaticProps,
    getStaticPaths
}