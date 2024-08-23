import { es2024FeatureList } from './es2024';
import { ESVersions, ESVersionsType } from './types';


const featureMap = new Map<string, ESVersionsType>();


featureMap.set(ESVersions[0], es2024FeatureList);   



export { featureMap, es2024FeatureList};
export  * from './types';