import { DateTime } from 'luxon';

export class Horodatage {
    /**
     *  String Id of the user that created the component where Horodatage 
     **/
    userCreator: string; 
    /**  
     * Date of creation for this object 
     **/
    dateCreation : DateTime;
    /**  
     * String Id of the user that edited this object (Nullable) 
     **/
    userEdit?: string;  
    /**  
     * Date of last edit for this object (Nullable)
     **/
    dateEdit? : DateTime;
}