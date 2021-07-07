/**
 * Produto
 * Serviço de Produto do ERPX
 *
 *
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { E095pes } from './e095pes';
import { EnumSitReg } from './enumSitReg';
import { EnumTipMer } from './enumTipMer';


export interface E001pes { 
    /**
     * 
     */
    usualt?: string;
    /**
     * Indica se o registro foi excluído
     */
    excluido?: boolean;
    tipMer?: EnumTipMer;
    /**
     * 
     */
    dthger?: Date;
    /**
     * Nome
     */
    nomPes: string;
    /**
     * Nome fantasia
     */
    apePes: string;
    /**
     * 
     */
    dthalt?: Date;
    sitPes: EnumSitReg;
    /**
     * 
     */
    id?: string;
    e095pes?: E095pes;
    /**
     * Código
     */
    codPes: number;
    /**
     * 
     */
    usuger?: string;
}
