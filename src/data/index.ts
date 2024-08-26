import { es2023FeatureList } from './es2023';
import { es2024FeatureList } from './es2024';
import { ESVersions, ESVersionsType } from './consts';
import { es2022FeatureList } from './es2022';


const featureMap = new Map<string, ESVersionsType>();


featureMap.set(ESVersions[0], es2024FeatureList);   
featureMap.set(ESVersions[1], es2023FeatureList);  
featureMap.set(ESVersions[2], es2022FeatureList);  



export { featureMap };
export  * from './consts';