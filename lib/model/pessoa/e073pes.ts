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
import { E001pes } from './e001pes';
import { EnumCifFob } from './enumCifFob';
import { EnumSitReg } from './enumSitReg';


export interface E073pes { 
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
     * 
     */
    usuger?: string;
    /**
     * Nome da pessoa de contato na transportadora
     */
    nomCto?: string;
    /**
     * Registro nacional de transportadores rodoviários de carga - RNTRC
     */
    nrnTrc?: string;
    /**
     * Número de registro adquirido junto a administração estadual
     */
    nroRes?: string;
    /**
     * 
     */
    id?: string;
    /**
     * Termo de autorização dos serviços em regime de fretamento - TAF
     */
    codTaf?: string;
    cifFob?: EnumCifFob;
    sitTra?: EnumSitReg;
}