/**
 * Pessoa
 * Serviço de Gestão de Pessoas do ERPX
 *
 * OpenAPI spec version: 1.10.6
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { E007ufs } from './e007ufs';


export interface E008rai { 
    /**
     * 
     */
    usualt?: string;
    /**
     * Indica se o registro foi excluído
     */
    excluido?: boolean;
    /**
     * Código fiscal município
     */
    codFis?: number;
    /**
     * População
     */
    popCid?: number;
    /**
     * Localização geográfica
     */
    locGeo?: string;
    /**
     * 
     */
    dthger?: Date;
    /**
     * CEP final
     */
    cepMax?: number;
    /**
     * 
     */
    dthalt?: Date;
    /**
     * Código IBGE município
     */
    codIbg?: number;
    e007ufs?: E007ufs;
    /**
     * 
     */
    usuger?: string;
    /**
     * Nome cidade
     */
    nomCid?: string;
    /**
     * Potencial consumo
     */
    potAlf?: number;
    /**
     * CEP inicial
     */
    cepMin?: number;
    /**
     * Código cidade
     */
    codRai?: number;
    /**
     * 
     */
    id?: string;
}