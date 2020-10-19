/**
 * Pessoa
 * Serviço de Gestão de Pessoas do ERPX
 *
 * OpenAPI spec version: 1.12.1
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { E001pes } from './e001pes';
import { E021mot } from './e021mot';
import { EnumFpgCom } from './enumFpgCom';
import { EnumSitReg } from './enumSitReg';


export interface E090pes { 
    /**
     * 
     */
    usualt?: string;
    /**
     * Indica se o registro foi excluído
     */
    excluido?: boolean;
    /**
     * 
     */
    dthger?: Date;
    e001pes?: E001pes;
    /**
     * 
     */
    dthalt?: Date;
    /**
     * Usuário da alteração do motivo
     */
    usuMot?: string;
    gerTit?: EnumFpgCom;
    sitReg?: EnumSitReg;
    /**
     * Data da alteração do motivo
     */
    dthMot?: Date;
    /**
     * 
     */
    usuger?: string;
    /**
     * Observação do motivo
     */
    obsMot?: string;
    /**
     * 
     */
    id?: string;
    e021mot?: E021mot;
}
