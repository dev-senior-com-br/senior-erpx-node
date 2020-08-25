/**
 * Produto
 * Serviço de Produto do ERPX
 *
 * OpenAPI spec version: 1.9.3
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { E012fam } from './e012fam';
import { E084mas } from './e084mas';


export interface E012fxm { 
    /**
     * 
     */
    usualt?: string;
    /**
     * Ordem da máscara na família
     */
    seqMpr?: number;
    e084mas?: E084mas;
    /**
     * 
     */
    dthger?: Date;
    /**
     * 
     */
    dthalt?: Date;
    /**
     * 
     */
    id?: string;
    e012fam?: E012fam;
    /**
     * 
     */
    usuger?: string;
}
