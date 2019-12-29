// https://www.npmjs.com/package/crypto-js
import React from 'react'
import '../assets/css/crypto.scss'
import helper from '../utils/helper'
const desEncrypt = helper.encryptDes('123456', 'hAw6eqnFLKxpsDv3');
const desDecrypt = helper.decryptDes('eIZDFf0Fmuk=', 'hAw6eqnFLKxpsDv3');
const aesEncrypt = helper.encryptAes('123456', 'hAw6eqnFLKxpsDv3');
const aesDecrypt = helper.decryptAes('Xs7UbWQyJVFVFE6ELMMaNA==', 'hAw6eqnFLKxpsDv3');
const md5 = helper.md5('123456');
const sha1 = helper.sha1('123456');
const sha256 = helper.sha256('123456');
const sha512 = helper.sha512('123456');
const rsaEncrypt = helper.encryptRsa('123456');
const rsaDecrypt = helper.decryptRsa('K0QvgSMvEWSX8S7EM/MswB9zjnl3h/ORH2uxBM1eLXILT9iVK3c2PxobhEmvPMbkEZK8ZjRO3xgzThMU7vQhx71GJZ48rxZL4MAccCtiL08DJ6AOOVsX8p1big11e5XbGDRl5EwUihDhmKS/0n0D9uwv5nD6UwdpujwrfUUIDSxD1wCfNACgO8F6NfNfjvCCtoL/QazJT7+FwEVZpvgpGGrUHMBIrt34BVtPLoBeMl/f6EtbrJkfsZsjhlLPBwvEa+fyeFStJlqROxMmkTcTNaPzx4di3GBIkMPFKgkoYU7TkW/2H1jb696506sMpIrwIsOw0bcTZZjeTYVej63m1Q==');
const uuid = helper.getUuid();
const uuid2 = helper.getUuid2();
const guid = helper.getGuid();
export default class Crypto extends React.Component{
    render(){
        return (
            <div id="crypto">
                <h2>Crypto</h2>
                <div>
                    <span>DES Encrypt: </span>
                    <p>{desEncrypt}</p>
                </div>
                <div>
                    <span>DES Decrypt: </span>
                    <p>{desDecrypt}</p>
                </div>
                <div>
                    <span>AES Encrypt: </span>
                    <p>{aesEncrypt}</p>
                </div>
                <div>
                    <span>AES Decrypt: </span>
                    <p>{aesDecrypt}</p>
                </div>
                <div>
                    <span>md5(123456): </span>
                    <p>{md5}</p>
                </div>
                <div>
                    <span>sha1(123456): </span>
                    <p>{sha1}</p>
                </div>
                <div>
                    <span>sha256(123456): </span>
                    <p>{sha256}</p>
                </div>
                <div>
                    <span>sha512(123456): </span>
                    <p>{sha512}</p>
                </div>
                <div>
                    <span>RSA Encrypt: </span>
                    <p>{rsaEncrypt}</p>
                </div>
                <div>
                    <span>RSA Decrypt: </span>
                    <p>{rsaDecrypt}</p>
                </div>
                <div>
                    <span>uuid: </span>
                    <p>{uuid}</p>
                </div>
                <div>
                    <span>uuid2: </span>
                    <p>{uuid2}</p>
                </div>
                <div>
                    <span>guid: </span>
                    <p>{guid}</p>
                </div>
            </div>
        )
    }
}
