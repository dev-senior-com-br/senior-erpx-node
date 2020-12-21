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
import { E001end } from './e001end';
import { E001ine } from './e001ine';
import { E006pai } from './e006pai';
import { E007ufs } from './e007ufs';
import { E008cep } from './e008cep';
import { E008rai } from './e008rai';
import { E026ram } from './e026ram';
import { E069gre } from './e069gre';
import { E073pes } from './e073pes';
import { E077pes } from './e077pes';
import { E085pes } from './e085pes';
import { E090pes } from './e090pes';
import { E095cbo } from './e095cbo';
import { E095pes } from './e095pes';
import { EnumIndNif } from './enumIndNif';
import { EnumJurFis } from './enumJurFis';
import { EnumSitReg } from './enumSitReg';
import { EnumTipEmp } from './enumTipEmp';
import { EnumTipMer } from './enumTipMer';
import { EnumZonFra } from './enumZonFra';


export interface E001pes { 
    /**
     * 
     */
    usualt?: string;
    zonFra?: EnumZonFra;
    /**
     * Telefone 2
     */
    fonPe2?: string;
    /**
     * Data de emissão do RG
     */
    datRge?: string;
    /**
     * Inscrição municipal
     */
    insMun?: string;
    e095pes?: E095pes;
    /**
     * Cadastro da atividade econômica da pessoa física (CAEPF)
     */
    codCae?: string;
    /**
     * Código do SUFRAMA
     */
    codSuf?: string;
    e085pes?: E085pes;
    /**
     * 
     */
    id?: string;
    /**
     * Validade do registro do SUFRAMA
     */
    datSuf?: string;
    /**
     * Número de identificação fiscal (NIF)
     */
    numIdf?: string;
    /**
     * Bairro
     */
    nomBai?: string;
    /**
     * Caixa postal
     */
    cxaPst?: number;
    /**
     * Indica se o registro foi excluído
     */
    excluido?: boolean;
    /**
     * Quantidade de renovações cadastrais
     */
    qtdAtu?: number;
    /**
     * Órgão emissor do RG
     */
    orgRge?: string;
    /**
     * Número
     */
    numEnd?: string;
    /**
     * Número do RG
     */
    numRge?: string;
    /**
     * E-mail para envio de documentos eletrônicos
     */
    emaNfe?: string;
    e095cbo?: E095cbo;
    /**
     * Nome
     */
    nomPes?: string;
    /**
     * Data de nascimento
     */
    datNas?: string;
    e006pai?: E006pai;
    /**
     * Código
     */
    codPes?: number;
    /**
     * Zip code
     */
    zipCod?: string;
    tipEmp?: EnumTipEmp;
    /**
     * Telefone
     */
    fonPes?: string;
    /**
     * 
     */
    dthger?: Date;
    /**
     * CNPJ/CPF
     */
    cnpCpf?: string;
    indNif?: EnumIndNif;
    e008cep?: E008cep;
    /**
     * Inscrição estadual
     */
    insEst?: string;
    /**
     * Quantidade de dependentes
     */
    qtdDep?: number;
    /**
     * Ligação inscrição estadual por estado na pessoa
     */
    e001ine?: Array<E001ine>;
    tipMer?: EnumTipMer;
    /**
     * Endereço
     */
    endPes?: string;
    /**
     * Endereços
     */
    e001end?: Array<E001end>;
    e026ram?: E026ram;
    sitPes?: EnumSitReg;
    /**
     * Fax
     */
    faxPes?: string;
    /**
     * E-mail
     */
    intNet?: string;
    /**
     * Vencimento do cadastro do cliente
     */
    datVct?: string;
    e090pes?: E090pes;
    /**
     * 
     */
    dthalt?: Date;
    /**
     * Número de inscrição do segurado (NIS, NIT e PIS/PASEP)
     */
    numNis?: string;
    e073pes?: E073pes;
    e077pes?: E077pes;
    e007ufs?: E007ufs;
    tipPes?: EnumJurFis;
    /**
     * 
     */
    usuger?: string;
    /**
     * Complemento
     */
    cplEnd?: string;
    /**
     * Nome fantasia
     */
    apePes?: string;
    e008rai?: E008rai;
    e069gre?: E069gre;
    /**
     * Valor da Pensão judicial/alimentícia
     */
    vlrPen?: string;
}
