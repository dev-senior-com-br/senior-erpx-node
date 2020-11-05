/**
 * Pessoa
 * Serviço de Gestão de Pessoas do ERPX
 *
 *
 * Contact: seniorx-dev@senior.com.br
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { E001pes } from './e001pes';
import { E021mot } from './e021mot';
import { EnumIndFor } from './enumIndFor';
import { EnumSitReg } from './enumSitReg';
import { EnumTipEmc } from './enumTipEmc';


export interface E095pes { 
    codMot?: E021mot;
    /**
     * 
     */
    usualt?: string;
    /**
     * Indica se o registro foi excluído
     */
    excluido?: boolean;
    indFor?: EnumIndFor;
    /**
     * 
     */
    dthger?: Date;
    /**
     * Marca
     */
    marFor?: string;
    e001pes?: E001pes;
    /**
     * 
     */
    dthalt?: Date;
    /**
     * Usuário responsável pelo motivo da situação do fornecedor
     */
    usuMot?: string;
    tipEmc?: EnumTipEmc;
    /**
     * Utilizar a regra de arredondamento da ABNT
     */
    arrAbn?: boolean;
    /**
     * Data do motivo da situação do fornecedor
     */
    dthMot?: string;
    /**
     * 
     */
    usuger?: string;
    sitFor?: EnumSitReg;
    /**
     * Site
     */
    endNet?: string;
    /**
     * Observação do motivo da situação do fornecedor
     */
    obsMot?: string;
    /**
     * 
     */
    id?: string;
}
