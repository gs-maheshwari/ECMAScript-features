import { es2023FeatureList } from './es2023';
import { es2024FeatureList } from './es2024';
import { ESVersions, ESVersionsType } from './consts';


const featureMap = new Map<string, ESVersionsType>();


featureMap.set(ESVersions[0], es2024FeatureList);   
featureMap.set(ESVersions[1], es2023FeatureList);  



export { featureMap };
export  * from './consts';