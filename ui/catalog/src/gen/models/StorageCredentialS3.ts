/**
 * iceberg-catalog
 * Implementation of the Iceberg REST Catalog server. 
 *
 * OpenAPI spec version: 0.4.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { S3Credential, S3CredentialClass } from '../models/S3Credential';
import { HttpFile } from '../http/http';

export class StorageCredentialS3 extends S3CredentialClass {
    'type': StorageCredentialS3TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: { [index: string]: string } | undefined = undefined;

    static readonly attributeTypeMap: Array<{ name: string, baseName: string, type: string, format: string }> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "StorageCredentialS3TypeEnum",
            "format": ""
        }];

    static getAttributeTypeMap() {
        return StorageCredentialS3.attributeTypeMap;
    }

    public constructor() {
        super();
    }
}

export enum StorageCredentialS3TypeEnum {
    S3 = 's3'
}

